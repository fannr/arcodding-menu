$(".arcodding__container").on("click", function () {
  const getClassIcons = $(this).find("i").hasClass("bi-plus-lg");

  if (getClassIcons) {
    $(this).find("i").toggleClass("bi-plus-lg bi-dash-lg");
  } else {
    $(this).find("i").toggleClass("bi-plus-lg bi-dash-lg");
  }

  $(this).find(".desc").slideToggle(250);
});
