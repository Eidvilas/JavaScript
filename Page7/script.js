


function calc() {

var div_result = document.getElementById('result')
var input_arg1=  document.getElementById('arg1');
var input_arg2=  document.getElementById('arg2');
var input_arg3=  document.getElementById('arg3');
var input_operation=  document.getElementById('operation');


  var arg1 = parseInt(input_arg1.value) * 2.54 || 0;
  var arg2 = parseInt(input_arg2.value) / 10 * 2 || 0;
  var arg3 = parseInt(input_arg3.value) || 0;
  var result;
  var rezultatas;



  rezultatas = arg1 + arg2;

  if (rezultatas > arg3){
      result = "ratas per didelis";
      div_result.style.backgroundColor = "red";
     } else if (rezultatas < arg3) {
      result = "ratas telpa";
      div_result.style.backgroundColor = "green";
     } else {
      result = "nesamones";
     } 



     // check if result <0
/*
     if(result < 0) {
      div_result.style.backgroundColor = "red";


     } else {
      div_result.style.backgroundColor = "green";
     }
*/  
     // show result

     div_result.innerHTML = result;


  }


 

    //console.log(sum);
     // document.getElementById("operation").addEventListener("click", calc);
     document.getElementById("arg1").addEventListener("input", calc);
     document.getElementById("arg2").addEventListener("input", calc);


   


