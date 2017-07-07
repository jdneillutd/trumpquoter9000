var shownQuote;
var quoteAuthor = "Donald J Trump";
var trumpShots = [
"https://jdneillutd.github.io/trumpquoter9000/trumpshots/0trump.jpg",
"https://jdneillutd.github.io/trumpquoter9000/trumpshots/1024x1024.jpg",
"https://jdneillutd.github.io/trumpquoter9000/trumpshots/150616113710-donald-trump-presidential-announcement-thumbnail-large-169.png",
"https://jdneillutd.github.io/trumpquoter9000/trumpshots/150616dvospectrump16x9992.jpg",
"https://jdneillutd.github.io/trumpquoter9000/trumpshots/150629062326-donald-trump-june-16-2015-super-169.jpg",
"https://jdneillutd.github.io/trumpquoter9000/trumpshots/160831154630-cnnee-donald-trump-en-mexico-discurso-encuentro-pena-nieto-large-169.jpg",
"https://jdneillutd.github.io/trumpquoter9000/trumpshots/161109025445-donald-trump-speaks-election-headquarters-announcement-sot-00000000-exlarge-169.jpg",
"https://jdneillutd.github.io/trumpquoter9000/trumpshots/87144781trump1.jpg",
"https://jdneillutd.github.io/trumpquoter9000/trumpshots/ct-a-look-forward-at-the-trump-presidential-library-20161122.jpg",
"https://jdneillutd.github.io/trumpquoter9000/trumpshots/donald-trump-presidential-debate-leave-you-in-suspense.jpg",
"https://jdneillutd.github.io/trumpquoter9000/trumpshots/fc24fa54570744e780cb7add82f7503818.jpg",
"https://jdneillutd.github.io/trumpquoter9000/trumpshots/GTYDebateTrumpgesturejrl1610194x3992.jpg",
"https://jdneillutd.github.io/trumpquoter9000/trumpshots/images2.jpeg",
"https://jdneillutd.github.io/trumpquoter9000/trumpshots/images3.jpeg",
"https://jdneillutd.github.io/trumpquoter9000/trumpshots/images.jpeg",
"https://jdneillutd.github.io/trumpquoter9000/trumpshots/n-DONALD-TRUMP-628x314.jpg",
"https://jdneillutd.github.io/trumpquoter9000/trumpshots/republican-us-presidential-nominee-donald-trump-speaks-to-the-detroit-economic-club-at-the-cobo-center-in-detroit-michigan-august-8-2016-reuterseric-thayer.jpg",
"https://jdneillutd.github.io/trumpquoter9000/trumpshots/trump-debate-finger-pointing.jpg",
"https://jdneillutd.github.io/trumpquoter9000/trumpshots/trump-nomcustom-31743b9cf3bd7a826fb6ef4d22170f5911a2af98-s900-c85.jpg",
"https://jdneillutd.github.io/trumpquoter9000/trumpshots/us-president-elect-donald-trump-speaks-at-his-election-night-rally-in-manhattan-new-york-us-november-9-2016-reuterscarlo-allegri.jpg",
"https://jdneillutd.github.io/trumpquoter9000/trumpshots/you-have-to-love-thy-neighbor-mexicos-former-president-apologizes-for-condemning-donald-trumps-border-wall-plan.jpg"
];
function getNewQuote(){
  $.get("https://api.whatdoestrumpthink.com/api/v1/quotes/random", function(data, status){
    document.getElementById("quote").innerHTML=data.message;
    shownQuote = data.message;
  });
  document.getElementById("trumpshot").src=trumpShots[Math.floor(Math.random() * trumpShots.length)];
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
