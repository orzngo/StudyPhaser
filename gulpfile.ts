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



gulp.task('webpack', ["tsc:client", "copy:libs"], () => {
  gulp.src("./src/client/entry.js")
    .pipe(webpack(require("./webpack.config.js")))
    .pipe(gulp.dest("./release/public/game"));

});

gulp.task('copy:libs', () => {
  gulp.src("./src/client/libs/**/*.js")
    .pipe(gulp.dest("./release/public/game/libs"));
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

gulp.task("watch", () => {
  gulp.watch("./src/client/**/*.ts", ["webpack"]);
});

gulp.task("default", ["webpack"], () => {});
