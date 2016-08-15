var gulp = require("gulp");
var tsc = require("gulp-typescript");
var tsConfig = tsc.createProject('./client/tsconfig.json');
var browserify = require("browserify");
var source = require('vinyl-source-stream');
var tsify = require("tsify");
var nodemon = require("nodemon");
var paths = {
    htmlPages: ['client/app/**/*.html'],
    cssPages:'client/app/**/*.css',
    rootFiles:'client/*.*',
    copyServer:'server/**/*.*',
    copyeServerRootFiles:'server/*.*'

};
var gulpsync = require('gulp-sync')(gulp);
var imagemin = require("gulp-imagemin");
var del = require('del');
var plumber = require("gulp-plumber");
var runSequence = require('run-sequence');
var PATH = {
    dest: {
        all: 'dist',
        dev: {
            all: 'dist/dev/client',
            app:'dist/dev/client/app',
            assets: 'dist/dev/client/assets',
            lib: 'dist/dev/client/assets/lib',
            css:'dist/dev/client/assets/styles',
            images:'dist/dev/client/assets/images'
        },
        prod: {
            all: 'dist/prod',
            assets: 'dist/dev/client/assets',
            css:'dist/dev/client/assets/styles',
            images:'dist/dev/client/assets/images'
        }
    },
    src: {
        // Order is quite important here for the HTML tag injection.
        lib: [
            'node_modules/core-js/client/shim.min.js',
            'node_modules/zone.js/dist/zone.js',
            'node_modules/reflect-metadata/Reflect.js',
            'node_modules/systemjs/dist/system.src.js'
        ]
    }
};

var lib = [
    'node_modules/core-js/client/shim.min.js',
    'node_modules/zone.js/dist/zone.js',
    'node_modules/reflect-metadata/Reflect.js',
    'node_modules/systemjs/dist/system.src.js',
    './client/bower_components/jquery/dist/jquery.min.js',
    './client/bower_components/bootstrap/dist/js/bootstrap.min.js',
    './client/bower_components/bootstrap/dist/css/bootstrap.min.css'

];

gulp.task('clean', function (done) {
    del(PATH.dest.all, done);
});

gulp.task('ts-compile', function () {
    return gulp
        .src('client/app/**/*.ts')
        .pipe(tsc(tsConfig))
        .pipe(gulp.dest('dist/dev/client/app'));
});

gulp.task("copy-html", function () {
    return gulp.src(paths.htmlPages)
        .pipe(gulp.dest('dist/dev/client/app'));
});

gulp.task("copy-css", function () {
    return gulp.src(paths.cssPages)
        .pipe(gulp.dest('dist/dev/client/app'));
});

gulp.task("minify-images", function() {

    return gulp.src('client/assets/images/*')
        .pipe(plumber({
            errorHandler: function (err) {
                console.log(err);
                this.emit('end');
            }
        }))
        .pipe(imagemin({
            progressive: true
        }))
        .pipe(gulp.dest('dist/dev/client/assets/images'));
});

gulp.task("copy-corelib", function(){

    return gulp.src(lib)
        .pipe(gulp.dest('dist/dev/client/assets/lib'));
});
gulp.task("copy-rootfiles", function () {
    return gulp.src(paths.rootFiles)
        .pipe(gulp.dest('dist/dev/client'));
});

gulp.task("copy-server", function () {
    return gulp.src([paths.copyServer, paths.copyeServerRootFiles])
        .pipe(gulp.dest('dist/dev/server'));
});

gulp.task('start-server', function () {
    nodemon({
        script: 'dist/dev/server/index.js'
        , ext: 'js html'
        , env: { 'NODE_ENV': 'development' }
    })
});
gulp.task('default', function(callback) {
    runSequence([
            "copy-rootfiles",
            "copy-css",
            "copy-corelib",
            "minify-images",
            "copy-html",
            "copy-server",
            "start-server"
        ],
        callback);
});


//gulp.task('default', function(callback) {
//    runSequence(
//        //['clean', 'ts-compile'],
//        //[ 'ts-compile'],
//        [ 'copy-rootfiles', 'copy-css', 'copy-corelib', 'minify-images', 'copy-html', 'copy-server', 'copy-components'],
//        [ 'start-server'],
//        callback);
//});
//gulp.task("default", gulpsync.sync([
//    "clean",
//    "ts-compile",
//    "copy-rootfiles",
//    "copy-css",
//    "copy-corelib",
//    "minify-images",
//    "copy-html"
//
//]), function () {
//
//    //return browserify({
//    //    basedir: '.',
//    //    debug: true,
//    //    entries: ['client/app/boot.ts'],
//    //    cache: {},
//    //    packageCache: {}
//    //})
//    //    .plugin(tsify)
//    //    .bundle()
//    //    .pipe(source('bundle.js'))
//    //    .pipe(gulp.dest("dist"));
//});


