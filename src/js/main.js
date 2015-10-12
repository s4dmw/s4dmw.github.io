$("a.posts").click(function(){
  // console.log("clicked on posts button");
  $("section#categories").removeClass("active");
  $("section#posts").addClass("active");
});

$("a.categories").click(function(){
  // console.log("clicked on categories button");
  $("section#posts").removeClass("active");
  $("section#categories").addClass("active");
});
