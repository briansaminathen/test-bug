var gulp = require('gulp');
var sass = require('gulp-sass');


gulp.task('hello', function() {
    console.log('hello world');
});

gulp.task('sass', function() {
    return gulp.src('test-bug/scss/styles.scss')
        .pipe(sass()) // using gulp-sass
        .pipe(gulp.dest('test-bug/css'))
});

