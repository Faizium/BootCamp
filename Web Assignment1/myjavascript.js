window.onload=function(){
  myFunction;
  var Addbtn =  document.getElementById('add');
  Addbtn.addEventListener("click", handleClick1);
  var Subbtn =  document.getElementById('subtract');
  Subbtn.addEventListener("click", handleClick2);
  function2;
  function3;
  //var details = document.getElementById("submit");
  //details.addEventListener("click",handleClick3);
  handleClick3;
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
};
function handleClick3()
{
    document.getElementById("nameerror").innerHTML = "";
    document.getElementById("mailerror").innerHTML = "";
    document.getElementById("doberror").innerHTML= "";
    document.getElementById("Interest").innerHTML= "";
    
    
    var txtlength = String( document.getElementById("name").value);
    var email = String( document.getElementById("email").value);
    var date = String ( document.getElementById("dob").value);
    var interest = document.getElementById("Interest").value;
    
    if (txtlength.length > 50 )
    {
        var nameError = document.getElementById("name");
        nameError.classList.add("invalid");
        nameError.value = "";
        console.log("hello");
        document.getElementById("nameerror").innerHTML = "Character Limit Exceeds "
    }

    if(txtlength.split(" ").join("").length == 0)
    {
        var nameError = document.getElementById("name");
        nameError.classList.add("invalid");
        document.getElementById("nameerror").innerHTML = "Name cannot be Empty "
    }

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
      {
         document.getElementById("mailerror").innerHTML = "";
         
      }
    else{
        document.getElementById("mailerror").innerHTML = "Invalid Email Address";
        var emailerror = document.getElementById("email");
        emailerror.classList.add("invalid");
      
    }
     if(email.length == 0)
    {
        var emailerror = document.getElementById("email");
        emailerror.classList.add("invalid");
        document.getElementById("mailerror").innerHTML = "Email cannot be Empty "
    }
   if (date.length== 0){
        var emailerror = document.getElementById("dob");
        emailerror.classList.add("invalid");
        document.getElementById("doberror").innerHTML = "Date cannot be Empty " 
   }    
    if(date > "2009-10-26")
    {
        var emailerror = document.getElementById("dob");
        emailerror.classList.add("invalid");
        document.getElementById("doberror").innerHTML = "Hello Kid! You are too young for this"
    }
    if(interest == 0){

        document.getElementById("interesterror").innerHTML = "Please select the value to proceed" ;
    }
};