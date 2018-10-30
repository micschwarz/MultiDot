const gulp = require('gulp');
const minify = require('gulp-minify');
const babel = require("gulp-babel");

function build()
{
    return gulp.src('src/*.js')
        .pipe(babel())
        .pipe(minify())
        .pipe(gulp.dest('out/'))
}

function buildBabelless()
{
    return gulp.src('src/*.js')
        .pipe(babel())
        .pipe(minify())
        .pipe(gulp.dest('out/babelless/'))
}

gulp.task('buildBabelless', buildBabelless);

gulp.task('default', build);
