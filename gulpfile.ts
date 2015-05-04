/// <reference path="./typings/gulp/gulp.d.ts"/>
/// <reference path="./typings/gulp-typescript/gulp-typescript.d.ts"/>

import gulp = require("gulp");
import ts = require("gulp-typescript");

var webpack = require("gulp-webpack");

var tsProject = ts.createProject({
  target: "ES5",
  module: "commonjs",
  sortOutput: true,
  noImplicitAny: true
});



gulp.task('webpack', ["tsc:client"], () => {
  gulp.src("./src/client/entry.js")
    .pipe(webpack(require("./webpack.config.js")))
    .pipe(gulp.dest("./release/public/js"));
});

gulp.task('copy:template', () => {
  gulp.src("./src/server/views/**/*.ect")
    .pipe(gulp.dest("./release/server/views"));
});


gulp.task("tsc:client", () => {
  return gulp.src("./src/client/**/*.ts")
    .pipe(ts(tsProject))
    .pipe(gulp.dest("./src/client"));
});

gulp.task("default", ["webpack"], () => {});
