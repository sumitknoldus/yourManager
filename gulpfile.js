var gulp = require('gulp');
var ts = require('gulp-typescript');



var tsProject = ts.createProject('./client/tsconfig.json', {
    typescript: require('typescript'),
    outFile: './dist/prod/app.js'
});

//gulp.task('tscompile', function () {
//    var tsResult = gulp.src('./client/app/**/*.ts')
//        .pipe(ts(tsProject));
//
//    return tsResult.js.pipe(gulp.dest('./dist'));
//});
//

gulp.task('copy', function () {
    return gulp.src([
            './client/app/**/*.js',
            './client/app/**/*.js.map',
            './client/app/**/*.css',
            './client/app/**/*.html'

        ])
        .pipe(gulp.dest('./dist'));
});


gulp.task('default', ['copy']);