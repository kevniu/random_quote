$(document).ready(function(){

  getQuote();

  function getQuote() {
    $.ajax({
      url: "http://api.forismatic.com/api/1.0/",
      jsonp: 'jsonp',
      data: {
        lang: "en",
        method: "getQuote",
        format: "jsonp"
      },
      dataType: 'jsonp',
      success: function(data){
        console.log(data);
        if (!data.quoteAuthor) {
          data.quoteAuthor = "Anonymous"
        }
        $('#quote').html('<blockquote><p>' + data.quoteText + '</p></blockquote>');
        $('#author').html('<footer> - ' + data.quoteAuthor + '</footer>');
      }
    });
  }

  $('#button').click(getQuote);
});
