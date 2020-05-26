const gulp = require("gulp");
const mjml = require("gulp-mjml");
const mjmlEngine = require("mjml");
const bs = require("browser-sync").create();

const path = {
  watchSrc: ["./src/**/*.mjml"],
  templateSrc: "./src/templates/**/*.mjml",
  templateDist: "./dist",
};

const build = function () {
  return gulp.src(path.templateSrc).pipe(mjml(mjmlEngine)).pipe(gulp.dest(path.templateDist));
};

const watch = function () {
  build();

  bs.init({
    server: {
      baseDir: path.templateDist,
    },
  });

  gulp.watch(path.watchSrc, build).on("change", bs.reload);
};

exports.build = build;
exports.watch = watch;
