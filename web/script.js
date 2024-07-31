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
  //var operator = document.getElementsByName('operator');
  var selectedValue;
 
  var operator=document.getElementsByName('operator');
  for(var radio of operator){
    if(radio.checked){
      selectedValue= radio.value;
        break;
    }
  }

  if(selectedValue == "topla") {
    var result = number1 + number2;
  }
  if(selectedValue == "cikar") {
    var result = number1 - number2;
  }
  if(selectedValue == "carp") {
    var result = number1 * number2;
  }
  if(selectedValue == "bol") {
    var result = number1 / number2;
  }

  document.getElementById("calculate-result").innerHTML = result;

}




