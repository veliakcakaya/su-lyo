var message = "SU LYO 2024";
var a = "100";
var b = "20";
var result = a*b;
console.log(message);
console.log(result);

document.getElementById('clickme').onclick = function(e){
//  alert('tıklandım!');
  var number1 = Number( document.getElementById('number1').value );
  var number2 = Number( document.getElementById('number2').value );
  var operator = document.getElementsByName('operator').value;
  
  alert(operator);

  var result  =  number1+number2;
  document.getElementById("calculate-result").innerHTML = result;

  console.log(number1);
  console.log(number2);
  console.log(result);
}




