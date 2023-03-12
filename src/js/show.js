$(function () {
  $('.content').slice(0, 2).show();
  $('#showAll').on('click', function (e) {
    e.preventDefault();
    $('.content:hidden').slice(0, 2).slideDown();
  });
});
