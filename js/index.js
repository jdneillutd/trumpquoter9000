var shownQuote;
var quoteAuthor = "Donald J Trump";
function getNewQuote(){
  $.get("https://api.whatdoestrumpthink.com/api/v1/quotes/random", function(data, status){
    document.getElementById("quote").innerHTML=data.message;
    shownQuote = data.message;
  });
}

$('#newquote').on('click', function (e) {
  getNewQuote();
})
function tweetQuote(){
var twtText = '"' + shownQuote + '" - ' + quoteAuthor
var twtLink = 'http://twitter.com/home?status=' +encodeURIComponent(twtText);
  if(twtText.length < 120){
    window.open(twtLink,'_blank');
  }else {
    document.getElementById("quote").innerHTML="Sometimes my words a huge. They're good words. The best words. But they're just too HYUUUGE for twitter.";
  }
  
}
$('#tweet-this').on('click', function (e) {
  tweetQuote()
})

document.addEventListener("DOMContentLoaded", function() {
  getNewQuote();
});