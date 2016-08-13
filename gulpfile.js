var gulp = require("gulp");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("./client/tsconfig.json");
var browserify = require("browserify");
var source = require('vinyl-source-stream');
var tsify = require("tsify");
var paths = {
    pages: ['client/app/**/*.html']
};

gulp.task("copy-html", function () {
    return gulp.src(paths.pages)
        .pipe(gulp.dest("dist"));
});

gulp.task("default", ["copy-html"], function () {
    return browserify({
        basedir: '.',
        debug: true,
        entries: ['client/app/boot.ts'],
        cache: {},
        packageCache: {}
    })
        .plugin(tsify)
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest("dist"));
});

//gulp.task("default", function () {
//    return tsProject.src()
//        .pipe(ts(tsProject))
//        .js.pipe(gulp.dest("dist"));
//});

