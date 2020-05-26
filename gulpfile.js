const gulp = require("gulp");
const mjml = require("gulp-mjml");
const mjmlEngine = require("mjml");
const bs = require("browser-sync").create();

const path = {
  src: "./src/templates/**/*.mjml",
  dist: "./dist",
};

const build = function () {
  return gulp.src(path.src).pipe(mjml(mjmlEngine)).pipe(gulp.dest(path.dist));
};

const watch = function () {
  build();

  bs.init({
    server: {
      baseDir: path.dist,
    },
  });

  gulp.watch(path.src, build).on("change", bs.reload);
};

exports.build = build;
exports.watch = watch;
