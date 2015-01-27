Package.describe({
  summary: "Reaction Search - Search Feature For Your Reaction Shop",
  name: "octaviomtc:reaction-search",
  version: "0.0.1",
  git: "https://github.com/octaviomtc/reaction-search.git"
});


Package.on_use(function (api, where) {

  api.versionsFrom('METEOR@1.0');
  api.use("meteor-platform@1.2.1");
  api.use("templating");
  api.use("coffeescript");
  api.use("less");
  api.use("reactioncommerce:core@0.2.2");

  api.add_files([
    "common/register.coffee"
  ],["client","server"]);

  api.add_files([
    "client/routing.coffee",
    "client/templates/searchBox.html",
    "client/templates/searchBox.less",
    "client/templates/searchBox.coffee"
  ], ["client"]);

  api.add_files([
    "server/methods.coffee"
  ], ["server"]);

});
