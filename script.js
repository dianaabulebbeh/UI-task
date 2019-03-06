if ($(window).width() > 480) {
  $(document).ready(function() {
    document.getElementById("content2").innerHTML = document.getElementById(
      "figures"
    ).innerHTML;
  });
}

if ($(window).width() > 480) {
  $("a").click(function(event) {
    var href = $(this).attr("href");
    var x = document.getElementById(href);

    document.getElementById("content2").innerHTML = x.innerHTML;
    event.preventDefault();
  });
}

if ($(window).width() <= 480) {
  $("a").click(function(event) {
    var href = $(this).attr("href");
    var f = document.getElementById(href);
    var body = $(".blog-post");
    var content = $("main-nav-mobile");
    var nav = $(".main-nav");
    body.slideToggle(200);
    nav.slideToggle(200);
    content.addClass("main-nav-mobile");

    document.getElementById("main-nav-mobile").style.visibility = "visible";

    document.getElementById("main-nav-mobile").innerHTML = f.innerHTML;
    event.preventDefault();
  });
}

function backButton() {
  document.getElementById("main-nav-mobile").style.visibility = "hidden";
  document.getElementById("blog-post").style.display = "block";
  document.getElementById("main-nav").style.display = "inline-grid";
}
