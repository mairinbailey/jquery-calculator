$(document).ready(function(){
  var firstNum = 0
  var operatorFunc
  var stringy
$('span').not('.operator').click(function() {
    $("#screen").text($('#screen').text()+ $(this).text())
  })
$('cancel').click(function(){
    $('#screen').empty()
})
$('.operator').not('#calc').click(function(){
  firstNum = $('#screen').text()
  $('#screen').empty()
  console.log(firstNum)
  operatorFunc = $(this).text().replace('x','*').replace('\u00F7','/')
  console.log(operatorFunc)
})
$('#calc').click(function(){
  stringy=(firstNum + operatorFunc + $('#screen').text())
  console.log(stringy)
  console.log(eval(stringy))
    $('#screen').text(eval(stringy))
  })
});
