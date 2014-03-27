Package.describe({
  summary: "a program"
});

Package.on_use(function (api) {
  api.add_files('foo.js', 'server');
  api.use(['meteor', 'my-package', 'standard-app-packages'], 'server');
  api.imply('webapp');
});
