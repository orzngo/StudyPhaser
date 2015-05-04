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



gulp.task('webpack', () => {
  gulp.src("./src/client/entry.ts")
    .pipe(webpack(require("./webpack.config.js")))
    .pipe(gulp.dest("./release/public/js"));
});

gulp.task('copy:template', () => {
  gulp.src("./src/server/views/**/*.ect")
    .pipe(gulp.dest("./release/server/views"));
});

gulp.task("default", ["webpack"], () => {});
