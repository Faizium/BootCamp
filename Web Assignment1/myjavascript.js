window.onload=function(){
  myFunction;
  var Addbtn =  document.getElementById('add');
  Addbtn.addEventListener("click", handleClick1);
  var Subbtn =  document.getElementById('subtract');
  Subbtn.addEventListener("click", handleClick2);
  function2;
  function3;
  var details = document.getElementById("submit");
  details.addEventListener("click",handleClick3);
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
function function2()
{
    
    var val = Number(document.getElementById("format").value) ;
    var Firstname = String(document.getElementById("firstname").value);
    var Secondname = String(document.getElementById("secondname").value);
    if (val == 1){
        document.getElementById("namearea").innerText = Firstname+" "+Secondname ;
    }
    if (val == 2)
    {
       
       document.getElementById("namearea").innerText = Secondname+" "+Firstname;
       
    }

};
function function3(){
   var txt =String(document.getElementById("txt").value);
   var len =  txt.split(" ").join("").length;
   document.getElementById("txtlength").innerText = len ;
}
function handleClick3(){
   
    var txtlength = String( document.getElementById("name").value);
    if (txtlength.length > 50 )
    {
        var nameError = document.getElementById("name");
        nameError.classList.add("invalid");
        nameError.innerText = "Name Feild cannot exceed 50 Characters";
    }
    if(txtlength.split(" ").join("").length == 0)
    {
        var nameError = document.getElementById("name");
        nameError.classList.add("invalid");
        nameError.innerText = "Name Feild cannot be Empty";   
    }
}