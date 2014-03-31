Package.describe({
  summary: "the client for my program"
});

Package.on_use(function (api) {
  api.use(['standard-app-packages', 'my-package']);
  api.add_files('foo.html');
});
