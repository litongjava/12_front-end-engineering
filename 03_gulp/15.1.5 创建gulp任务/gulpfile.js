// const gulp = require("gulp");
// // 合并执行任务
// const {
//   series
// } = require('gulp');
// const minifyCss = require("gulp-minify-css");
// const uglify = require('gulp-uglify');
// const concat = require("gulp-concat")
// const rename = require("gulp-rename")

// function defaultTask(cb) {
//   // place code for your default task here
//   cb();
// }

// // 压缩CSS任务　
// function miniCss(cb) {
//   gulp.src("./src/css/init.css")
//     .pipe(minifyCss())
//     .pipe(gulp.dest("./dist/css"))
//   cb()
// }

// // 压缩JS文件
// function miniJS(cb) {
//   gulp.src("./src/js/*.js")
//     .pipe(uglify())
//     .pipe(gulp.dest("./dist/js"))
//   cb()
// }


// // gulp.task("default", miniCss)
// // gulp.task("default",miniJS)
// // exports.default = defaultTask

// function finalFile(cb) {
//   gulp.src('./src/js/*.js') //选择合并的JS
//     .pipe(concat("app.js")) //合并js
//     .pipe(gulp.dest('./dist/js')) //输出
//     .pipe(rename({
//       suffix: '.min'
//     })) //重命名
//     .pipe(uglify()) //压缩
//     .pipe(gulp.dest('./dist/js'))
//   cb()
// }

// // gulp.task('default', series(miniCss,miniJS));
// gulp.task("default", finalFile)

const gulp = require("gulp")
//合并执行任务
const { series } = require('gulp');
const uglify = require('gulp-uglify')
const minifyCSS = require("gulp-minify-css")
const rename = require("gulp-rename")
const concat = require("gulp-concat")

function minJS(cb){
  gulp.src("./src/js/*.js")
  .pipe(uglify())
  .pipe(gulp.dest("./dist/js"))
  cb();
}

function minCSS(cb){
  gulp.src("./src/css/*.css")
  .pipe(minifyCSS())
  .pipe(gulp.dest("./dist/css"))
  cb()
}

async function finalFile(){
  await gulp.src('./src/js/*.js')  //选择合并的JS
  .pipe(concat("app.js"))   //合并js
  .pipe(gulp.dest('./dist/js'))     //输出
  .pipe(rename({suffix:'.min'}))   //重命名
  .pipe(uglify())          //压缩
  .pipe(gulp.dest('./dist/js')) 
}

gulp.task('default', series(minJS,minCSS,finalFile));