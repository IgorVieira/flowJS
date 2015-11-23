'use strict'

let gulp = require('gulp');
let sourcemaps = require('gulp-sourcemaps');
let babel = require('gulp-babel');
let concat = require('gulp-concat');

gulp.task('babel', () =>{
  return gulp.src('src/**/*.js')
          //.pipe(sourcemaps.init())
          .pipe(babel())
          //.pipe(concat())
          //.pipe(sourcemaps.write('.'))
          .pipe(gulp.dest('dist'));

});


gulp.task('watch', () =>{
 gulp.watch(['src/**/*.js'],['babel']);
})

gulp.task('default',['watch']);
