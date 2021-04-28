jQuery.getJSON('tweets.json', function(tweets) {

  tweets.reverse();
  
  jQuery.each(tweets, function(index, tweet) {
    jQuery('.tweets').append(`<p class="tweet"><span class="text">${tweet.text}</span> <span class="from">&mdash;<a href="http://twitter.com/${tweet.user}">@${tweet.user}</a></span></p>`);
  });
  
  var delay = 7000;
  var animation = 1000;
  var count = jQuery('.tweets .tweet').length;
  var total = count * (animation + delay + animation);
  fadeTweets(delay, animation);
  setInterval(function() {
    fadeTweets(delay, animation);
  }, total);

});

function fadeTweets(delay, animation) {
  jQuery('.tweets .tweet').each(function(n) {
     jQuery(this).delay(n * (delay + animation + animation)).fadeIn(animation).delay(delay).fadeOut(animation);
  });
}