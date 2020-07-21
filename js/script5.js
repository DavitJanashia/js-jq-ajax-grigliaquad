$(document).ready(init);

function init(){
  createSquare();
  myClickSquare();
}
// ************************************************************

function myClickSquare(){
  var square = $('.my-square');
  square.click(function(){
    var mySquare = $(this);
    mySquare.html('');
    getRandomNumber();


    function getRandomNumber(){
      $.ajax({
        url: 'https://flynn.boolean.careers/exercises/api/random/int',
        method: 'GET',
        success: function (data, success){
          // console.log(data);
          var numRand = data['response'];
          // console.log(numRand);
          mySquare.append(numRand);

          if (numRand < 5) {
            mySquare.removeClass('green yellow');
            mySquare.addClass('green');
          } else {
            mySquare.removeClass('green yellow');
            mySquare.addClass('yellow');
          }
        },

        error: function (request, state, error) {
          console.log('error!');
          console.log(request);
          console.log(state);
          console.log(error);
        }
      });
    }
  });
}
// ************************************************************

function createSquare(){

  var template = $('#template').html();
  // console.log(template);
  var compiled = Handlebars.compile(template);
  // console.log(compiled);
  var target = $('#my-big-square');

  for (var i = 0; i < 36; i++) {
    target.append(template);
  }

}
