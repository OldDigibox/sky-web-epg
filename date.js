// Here we use Moment.JS - it's outdated, but it works.
moment();
var now = moment().format("h.mma ddd D MMM");
var time = document.getElementsByClassName(time).innerHTML = now;