$(document).ready(init);

function init(){
  createSquare(nS);
  myClickSquare();
}
// ************************************************************
function numberOfSquares(){
  var nU = prompt('How many squares I create?');
  return nU;
}

var nS = numberOfSquares();

// ************************************************************

function createSquare(n){
  var template = $('#template').html();
  var target = $('#my-big-square');

  for (var i = 0; i < n; i++) {
    target.append(template);
  }
}
// ************************************************************

function myClickSquare(){
  var square = $('.my-square');
  square.click(function(){
    var mySquare = $(this);
    if (!(mySquare.hasClass('green')) && !(mySquare.hasClass('yellow')) ) {

      // mySquare.html('');
      getRandomNumber();
    }


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
