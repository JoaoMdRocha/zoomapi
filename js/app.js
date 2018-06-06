(function(){

    var API_KEY = 'INSERT API KEY HERE';

    /**
     * NEVER PUT YOUR ACTUAL API SECRET IN CLIENT SIDE CODE, THIS IS JUST FOR QUICK PROTOTYPING
     * The below generateSignature should be done server side as not to expose your api secret in public
     * You can find an eaxmple in PHP here: https://gist.github.com/joshuawoodward/7574df3df9a089e2663582a2cf9f188b
     */
    var API_SECRET = 'INSERT API SECRET HERE';


    document.getElementById('requestPMI').addEventListener('click', function(e){


        var userId = document.getElementById('user_email').value;
var token = 'INSERT TOKEN HERE';

        $.ajax({
   type: "GET",
   dataType: "jsonp",
 //   data: {
 //   'api-key': API_KEY
 // },
 // headers: {
 //    'Authorization': 'Bearer ' + token
 //  },
   url: "https://api.zoom.us/v2/users/" + userId + "?access_token=" + token,
  //  success: function(data){
  //    alert(data);
  //  }
  // jsonpCallback: 'callback',
  //   success: function (data) {
  //       console.log(data);
  //   }

});





    });


})();
