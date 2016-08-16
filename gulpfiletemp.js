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

var gulp = require("gulp"),
    sourcemaps = require("gulp-sourcemaps"),
    clean = require("gulp-typescript"),
    tsProject = typescript.createProject('./client/tsconfig.json'),
    config = require("./gulp.config.js")(),
    //precss = require("precss"),
    postcss = require("gulp-postcss"),
    //cssnano = require("cssnano"),
    //autoprefixer = require("autoprefixer"),
    //ext_replace  = require("gulp-ext-replace"),
    //imagemin = require("gulp-imagemin"),
    jsuglify = require('gulp-uglify'),
    plumber = require("gulp-plumber"),
    concat = require("gulp-concat");

gulp.task("compile-ts", function(){

    return gulp.src(config.TsFilePath)
        .pipe(plumber({
            errorHandler: function (err) {
                console.log(err);
                this.emit('end');
            }
        }))
        .pipe(sourcemaps.init())
        .pipe(typescript(tsProject))
        .pipe(jsuglify({
            mangle: false
        }))
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest(config.tsOutputPath));
});

gulp.task("copy-css", function(){

    return gulp.src(config.cssFilePath)

        .pipe(jsuglify({
            mangle: false
        }))
        .pipe(gulp.dest(config.cssOutputPath));
});

gulp.task("copy-html", function(){

    return gulp.src(config.TsFilePath)

        .pipe(jsuglify({
            mangle: false
        }))
        .pipe(gulp.dest(config.htmlOutputPath));
});


gulp.task("compile-styles", function() {

    return gulp.src(config.stylesFilePath)
        .pipe(plumber({
            errorHandler: function (err) {
                console.log(err);
                this.emit('end');
            }
        }))
        .pipe(sourcemaps.init())
        .pipe(postcss([precss,cssnano,autoprefixer]))
        .pipe(ext_replace(".css"))
        .pipe(sourcemaps.write())
        .pipe(concat('app.css'))
        .pipe(gulp.dest(config.cssOutputPath));
});

gulp.task("minify-images", function() {

    return gulp.src(config.imagesFilePath)
        .pipe(plumber({
            errorHandler: function (err) {
                console.log(err);
                this.emit('end');
            }
        }))
        .pipe(imagemin({
            progressive: true
        }))
        .pipe(gulp.dest(config.imagesOutputPath));
});

gulp.task("setup",["compile-ts","copy-css","copy-html","compile-styles","minify-images"], function(){

    gulp.src(config.bootstrapJSPath)
        .pipe(gulp.dest(config.bootstrapJSDestPath));

    gulp.src(config.bootstrapCSSPath)
        .pipe(gulp.dest(config.bootstrapCSSDestPath));

    gulp.src(config.bootstrapFontsPath)
        .pipe(gulp.dest(config.bootstrapFontsDestPath))

    gulp.src(config.jQueryPath)
        .pipe(gulp.dest(config.jQueryDestPath));
});

gulp.task('watch', ['compile-ts'], function () {
    gulp.watch(config.TsFilePath, ['compile-ts']);
    gulp.watch(config.stylesFilePath, ['compile-styles']);
    gulp.watch(config.imagesFilePath, ['minify-images']);
});



gulp.task('default', ['watch']);
