window.onload=function(){
  myFunction;
  var Addbtn =  document.getElementById('add');
  Addbtn.addEventListener("click", handleClick1);
  var Subbtn =  document.getElementById('subtract');
  Subbtn.addEventListener("click", handleClick2);
}

function myFunction() {
    document.getElementById('name').focus();
};

function handleClick1() {
    var val = Number(document.getElementById('num').value);
    console.log(val);
    val = val+1 ;
    console.log(val);
    document.getElementById('num').value = val;
};
function handleClick2() {
    var val = Number(document.getElementById('num').value);
    console.log(val);
    val = val-1 ;
    console.log(val);
    document.getElementById('num').value = val;
};