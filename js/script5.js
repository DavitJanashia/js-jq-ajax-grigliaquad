$(document).ready(init);

function init(){
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






// //snack 1
//
//
// $(document).ready(init);
//
// function init(){
//   getNewListener();
// }
//
//
// function getNewListener(){
//   $.ajax({
//
//     url: 'https://flynn.boolean.careers/exercises/api/array/integers?min=50&max=100&items=10',
//     method: 'GET',
//     success: function (data, state){
//       // console.log(data);
//       var targetPair = $('#pair');
//       var targetOdd = $('#odd');
//       var myArray = data['response'];
//       // console.log(myArray);
//       for (var i = 0; i < myArray.length; i++) {
//         console.log(myArray[i]);
//         if(myArray[i] % 2 == 0){
//           targetPair.append(myArray[i] + '<br>');
//           // console.log(myArray[i] + 'pair');
//         } else {
//           targetOdd.append(myArray[i] + '<br>');
//           // console.log(myArray[i] + 'odd');
//         }
//       }
//     },
//
//     error: function (request, state, error){
//       console.log('error!');
//       console.log(request);
//       console.log(state);
//       console.log(error);
//     }
//   });
//
// }


// //snack 2
//
//
// $(document).ready(init);
//
// var utenteN = prompt('inserisci un numero');
//
// function init(){
//   for (var i = 0; i < utenteN; i++) {
//     getNewListener();
//   }
// }
//
//
// function getNewListener(){
//   $.ajax({
//
//     url: 'https://flynn.boolean.careers/exercises/api/random/word',
//     method: 'GET',
//     success: function (data, state){
//
//       var target = $('#frase');
//       // console.log(data);
//       // var success = data['success'];
//
//       var value = data['response'];
//       target.append('<span>' + value + ' ' + '</span>');
//       console.log(value);
//
//     },
//
//     error: function (request, state, error){
//       console.log('error!');
//       console.log(request);
//       console.log(state);
//       console.log(error);
//     }
//   });
//
// }
