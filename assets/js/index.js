$(".unliked").click(function() {
  //  $("i", this).toggleClass("fa fa-heart");
 $(this).find("i").toggleClass("fa fa-heart");
 $(this).find("i").toggleClass("fa fa-heart-o");
});
