$(function () {
  $("#accordion").accordion({
    header: "header",
    active: false,
    collapsible: true,
    heightStyle: "content",
    icons: { header: "ui-icon-plus", activeHeader: "ui-icon-minus" },
  });
});
