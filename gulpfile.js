var gulp = require("gulp");
var gzip = require("gulp-gzip");
//var gulp = require('gulp-npm-run')(require('gulp'));
var Q = require('q');
var tsc = require("gulp-typescript");
var tsConfig = tsc.createProject('./client/tsconfig.json');
var browserify = require("gulp-browserify");
var source = require('vinyl-source-stream');
var tsify = require("tsify");
var embedTemplates = require('gulp-angular-embed-templates');
var concat = require("gulp-concat");
var jsuglify = require("gulp-uglifyjs");
var jsminify = require("gulp-minify");
var embedSass = require('gulp-angular2-embed-sass');
var nodemon = require("nodemon");
var paths = {
    htmlPages: ['client/app/**/*.html'],
    cssPages:'client/app/**/*.css',
    rootFiles:'client/*.*',
    copyServer:'server/**/*.*',
    copyeServerRootFiles:'server/*.*',
    copyPackageJSON:'package.json',
    copyBowerJSON:'bower.json',
    copyBowerrc:'.bowerrc',
    copyBabelrc:'.babelrc'

};
var tslint = require("gulp-tslint");
var imagemin = require("gulp-imagemin");
var del = require('del');
var plumber = require("gulp-plumber");
var runSequence = require('run-sequence');
var sourceMaps = require('gulp-sourcemaps');


var lib = [
    'node_modules/@angular',
    'node_modules/core-js/client/shim.min.js',
    'node_modules/zone.js/dist/zone.js',
    'node_modules/reflect-metadata/Reflect.js',
    'node_modules/systemjs/dist/system.src.js',
    './client/bower_components/jquery/dist/jquery.min.js',
    './client/bower_components/bootstrap/dist/js/bootstrap.min.js',
    './client/bower_components/bootstrap/dist/css/bootstrap.min.css'

];



gulp.task('clean', function (done) {
    del('dist/dev', done);
});

gulp.task('clean-junkjs', function (done) {
    del(['client/app/**/*.js', 'client/app/**/*.js.map'], done);

});


gulp.task('ts-compile', function () {
    return gulp
        .src('dist/temp/client/app/**/*.ts')
        .pipe(sourceMaps.init())
        .pipe(tsc(tsConfig))
        .pipe(sourceMaps.write('.'))
        .pipe(gulp.dest('dist/dev/client/app'));
});

gulp.task('ts-compile-prod', function () {
    return gulp
        .src('dist/temp/client/app/**/*.ts')
        .pipe(sourceMaps.init())
        .pipe(tsc(tsConfig))
        .pipe(sourceMaps.write('.'))
        .pipe(gulp.dest('dist/temp/client/app'));
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

gulp.task("minify-images-prod", function() {

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
        .pipe(gulp.dest('dist/prod/client/assets/images'));
});


gulp.task("copy-corelib", function(){

    return gulp.src(lib)
        .pipe(gulp.dest('dist/dev/client/assets/lib'));
});

gulp.task("copy-corelib-prod", function(){

    return gulp.src(lib)
        .pipe(gulp.dest('dist/prod/client/assets/lib'));
});


gulp.task("copy-rootfiles", function () {
    return gulp.src(paths.rootFiles)
        .pipe(gulp.dest('dist/dev/client'));
});

gulp.task("copy-rootfiles-prod", function () {
    return gulp.src(paths.rootFiles)
        .pipe(gulp.dest('dist/prod/client'));
});


gulp.task("copy-server", function () {
    return gulp.src([paths.copyServer, paths.copyeServerRootFiles])
        .pipe(gulp.dest('dist/dev/server'));
});

gulp.task("copy-server-prod", function () {
    return gulp.src([paths.copyServer, paths.copyeServerRootFiles])
        .pipe(gulp.dest('dist/prod/server'));
});

gulp.task('start-server', function () {
    nodemon({
        script: 'dist/dev/server/index.js'
        , ext: 'js html'
        , env: { 'NODE_ENV': 'development' }
    })
});

gulp.task('start-server-prod', function () {
    nodemon({
        script: 'dist/prod/server/index.js'
        , ext: 'js html'
        , env: { 'NODE_ENV': 'development' }
    })
});

gulp.task('prep-env', function (done) {
    return gulp
        .src(['client/app/**/*.ts','client/app/**/*.html', 'client/app/**/*.css'])
        .pipe(gulp.dest('dist/temp/client/app'));
});

gulp.task('inline-html-css', function (done) {
    return gulp.src('dist/temp/client/app/**/*.ts', {base: 'dist/temp/client/app/'})
        .pipe(embedTemplates())
        .pipe(embedSass())
        .pipe(gulp.dest('dist/temp/client/app'));
})

gulp.task("copy-components", function () {
    return gulp.src([paths.copyBowerrc, paths.copyBowerJSON, paths.copyPackageJSON])
        .pipe(gulp.dest('dist/dev/'));
});

gulp.task("copy-components-prod", function () {
    return gulp.src([paths.copyBowerrc, paths.copyBowerJSON, paths.copyPackageJSON])
        .pipe(gulp.dest('dist/prod/'));
});

gulp.task("ts-lint", function() {
    return gulp.src("client/app/**/*.ts")
        .pipe(tslint())
        .pipe(tslint("verbose", {
            emitError: false
        }))
        .pipe(tslint.report())
});

gulp.task('copy-system-lib', function () {
    var libs = [
        "@angular",
        "rxjs",
        "jasmine-core"
    ];

    var promises = [];

    libs.forEach(function (lib) {
        var defer = Q.defer();
        var pipeline = gulp
            .src('node_modules/' + lib + '/**/*')
            .pipe(gulp.dest('./dist/dev/client/assets/system-lib/' + lib));

        pipeline.on('end', function () {
            defer.resolve();
        });
        promises.push(defer.promise);
    });

    return Q.all(promises);
});

gulp.task('copy-system-lib-prod', function () {
    var libs = [
        "@angular",
        "rxjs",
        "jasmine-core"
    ];

    var promises = [];

    libs.forEach(function (lib) {
        var defer = Q.defer();
        var pipeline = gulp
            .src('node_modules/' + lib + '/**/*')
            .pipe(gulp.dest('./dist/prod/client/assets/system-lib/' + lib));

        pipeline.on('end', function () {
            defer.resolve();
        });
        promises.push(defer.promise);
    });

    return Q.all(promises);
});

gulp.task('build-dev', function(callback) {
    runSequence(
        'prep-env',
        'ts-compile',
        ['copy-rootfiles', 'copy-css', 'copy-corelib', 'minify-images', 'copy-html', 'copy-server', 'copy-components'],
        ['start-server'],
        'gulp-watch-ts',
        'gulp-watch-html',
        'gulp-watch-css',
        'gulp-watch-men',
        callback);
});

gulp.task('gulp-watch-ts', function() {
    return gulp.watch(['client/app/**/*.ts'], ['ts-compile']);
});

gulp.task('gulp-watch-men', function() {
    return gulp.watch(['server/api/**/*.js'], ['copy-server'],['start-server']);
});

gulp.task('gulp-watch-html', function() {
    return gulp.watch(['client/app/**/*.html'], ['copy-html']);
});

gulp.task('gulp-watch-css', function() {
    return gulp.watch(['client/app/**/*.css'], ['copy-css']);
});

gulp.task('build-prod', function(callback) {
    runSequence(
        'prep-env',
        'inline-html-css',
        'ts-compile-prod',
        [ 'copy-system-lib-prod','copy-rootfiles-prod','copy-corelib-prod', 'minify-images-prod', 'copy-server-prod', 'copy-components-prod'],
        ['start-server-prod'],
        callback);
});


gulp.task('bundle-app',function (done) {

    return gulp.src('dist/dev/client/app/boot.js')
        .pipe(browserify({
            insertGlobals: true,
            debug: false,
            mangle:false,
            compress:false
        }))
        .pipe(concat('bundle.browserify.js'))
        //.pipe(jsminify())
        //.pipe(jsuglify())
        //.pipe(gzip())
        .pipe(gulp.dest('dist/dev/client/app'));

});

