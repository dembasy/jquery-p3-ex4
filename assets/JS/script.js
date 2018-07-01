// $('#high').click(function() {
//     $('#high').css('height' : '+10px')
//   });
// });
var input = $( "input:reset")
$('#green').click(function() {
    $('#rectgl').css('background-color', 'green');
  });

$('#setoff').click(function() {
    $('#rectgl').css('background-color', 'white');
});

$('#disappear').click(function() {
    $('#rectgl').hide();
});

$('#appear').click(function() {
    $('#rectgl').show();
});
