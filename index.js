// ==UserScript==
// @name         Add users count to people nav when on users page
// @namespace    http://canvas.jmu.edu/
// @version      0.2
// @description  enter something useful
// @author       You
// @match        https://canvas.jmu.edu/courses/*/users
// @grant        none
// ==/UserScript==
$(function () {
    var timerId = window.setInterval(function(){
  function addBadge () {
    if ($('table.roster tbody tr').length > 0) {
      $('nav li.section a.people').append('<span class="badge pull-right">'+$('table.roster tbody tr').length+'</span>');
    }
  }
  if (($._data(window).events.scroll && $._data(window).events.scroll.length > 0) || $('.paginatedLoadingIndicator').is(":visible"))  {
    $._data(window).events.scroll[0].handler();
  } else {
    window.clearInterval(timerId);
    addBadge();
  }
}, 250);
});