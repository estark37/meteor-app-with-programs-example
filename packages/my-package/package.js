Package.describe({
  summary: "a package"
});

Package.on_use(function (api) {
  api.add_files('packagefoo.js', 'server');
});
