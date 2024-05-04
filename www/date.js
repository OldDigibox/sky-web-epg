// Here we use Moment.JS - it's outdated, but it works.
moment();
var now = moment().format("h.mma ddd D MMM");
$('.time').html(now); // This line uses JQuery but that's ok since we have it in the HTML