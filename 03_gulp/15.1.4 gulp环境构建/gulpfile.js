function defaultTask(cb) {
  console.log("可以执行一些任务");
  //  压缩文件、合并文件，日常的一些重复操作的劳动，可以代替调
  cb();
}

exports.default = defaultTask;