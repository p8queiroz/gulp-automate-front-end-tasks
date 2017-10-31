// gulpfile.js
var gulp = require('gulp')
    ,imagemin = require('gulp-imagemin')
    ,clean = require('gulp-clean');

// removida a dependência de build-img
gulp.task('copy', ['clean'], function() {
    return gulp.src('src/img/**/*')
        .pipe(gulp.dest('dist'));
});

gulp.task('clean', ['savebkp'], function() {
    return gulp.src('dist')
        .pipe(clean());
});

gulp.task('savebkp', function() {
    return gulp.src('dist/**/*')
        .pipe(gulp.dest('bckimg/img'));
});

// adicionando a dependência copy
gulp.task('build-img', ['copy'], function() {

    gulp.src('dist/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'));
});