if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Welcome to app-with-programs.";
  };

  Template.hello.events({
    'click input': function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });
}

if (Meteor.isServer) {
  console.log("HI FROM THE APP");
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
