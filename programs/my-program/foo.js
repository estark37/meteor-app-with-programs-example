main = function (argv) {
  console.log("HI FROM A PROGRAM");
  console.log("my argument is", argv);
  Meteor.setTimeout(function () {
    console.log("HI MY NAME IS TIMEOUT");
  }, 1000);

  return "DAEMON";
};
