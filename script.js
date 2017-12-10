//Перевод градусов Фаренгейта в градусы Цельсия и наоборот
function fun1() {
  var sel = document.getElementById('mySelect').selectedIndex;
  var options = document.getElementById('mySelect').options;
  
  if(options[sel].text == 'Фаренгейт') {
    fahrenheit();
  }else if(options[sel].text == 'Цельсия') {
    celsius();
  };  
};



function fahrenheit() {
  var num1, result
  num1 = document.getElementById('num1').value;
  num1 = parseInt(num1);

  result = (num1 - 32) / 1.8;
  document.getElementById('anSwer').innerHTML = result;
};

function celsius() {
  var num1, result
  num1 = document.getElementById('num1').value;
  num1 = parseInt(num1);

  result = (num1 * 1.8) + 32;
  document.getElementById('anSwer').innerHTML = result;
};