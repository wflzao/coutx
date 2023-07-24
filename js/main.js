setTimeout(function () {
  $(".filled").addClass("done");
  $("svg").css({
    transform: "scale(0.5)",
  });
}, 2000);

setTimeout(function () {
  $("svg").css({
    top: "-851px",
    left: "-1546px",
    transform: "scale(0)",
    opacity: 0,
  });
  setTimeout(function () {
    $("svg").css({
      opacity: "0",
    });
    $("#nav-logo-section").css({
      opacity: "1",
      transform: "scale(1)",
    });
    $(".nav-link").css({
      opacity: "1",
      transform: "scale(1)",
    });
  }, 700);
  // setTimeout(function () {
  // $("svg").remove();
  // }, 1450);
}, 3500);

setTimeout(function () {
  $("h2").css({
    opacity: 1,
    // 'transform': 'scale(1)'
    top: "0",
  });
}, 5500);
