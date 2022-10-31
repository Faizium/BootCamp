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
function handleClick5() {
    document.getElementById('hidetxt').style.display = 'none' ;
};
function handleClick7() {
   window.alert("Error");
};
function handleClick6() {
    
    document.getElementById('changeimage').src='images/2.png' ;
};
function myFunction() {
    document.getElementById('name').focus();
};
function myFunction1() {
    var str = "This is the Changed Text.Hey,All your favorite are within reach! is now mobile. Best deals for only, hurry up"
    document.getElementById('txtpgraph').innerText = str;
};
function myFunction2() {
    var x = document.getElementById("txtpgraph");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
   
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
    //document.getElementById("Interest").innerHTML= "";
    
    
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
    document.getElementById("Interest").addEventListener("click",handleClick4);


};

function handleClick4() {
    document.getElementById("interesterror").innerHTML = "";
    
    
}
function function4() {

   if( String (document.getElementById("username").value) == "FaizanChaudary" && String (document.getElementById("password").value) == "pakistanzindabad") {
    window.location='http://google.com';
   }
    else{
        window.alert("invalid user");
    }
};
function function5()
{
    console.log("1");
    var msal = document.getElementById("salary").value;
    var tax = 0;
    var mtax = 0;
    var ygross = 0;
    var mgross = 0;
    var ysal = msal*12;
    
        if (ysal<600000)
        {
            tax = 0 ;
          mtax = 0;
          ygross = ysal-tax;
          mgross = msal;
           console.log("2");
        }
        
     if(ysal > 600000 && ysal <1200000)
         {
             tax =  ((ysal-600000)*25)/100 ;
              ygross = ysal-tax;
              mtax = (msal*0.025);
              mgross = msal-(msal*0.025);
         }
     if (ysal > 1200000 && ysal <2400000)
        {  
          tax =  ((ysal-1200000)*0.125) +(600000*0.025)+15000;
          ygross = ysal-tax ;
          mtax =(msal*0.125); 
          mgross = msal-(msal*0.125);
        }
        if (ysal > 2400000 && ysal <3600000)
          { 
            tax = ((ysal-2400000)*0.2)+(1200000*0.125) +(600000*0.025)+15000 +165000;
            ygross = ysal-tax ;
            mtax = (msal*0.2);
            mgross = msal-(msal*0.2);
          }
        if (ysal > 3600000 && ysal < 6000000)
        {
            tax = ((ysal-3600000)*0.25)+(2400000*0.2)+(1200000*0.125) +(600000*0.025)+15000 +165000 +405000 ;
            ygross = ysal-tax;
            mtax = (msal*0.25);
            mgross= msal-(msal*0.25);
             console.log("3");
        }
        if (ysal > 6000000 && ysal < 12000000)
          {  
            tax = ((ysal-6000000)*0.32)+(3600000*0.25)+(2400000*0.2)+(1200000*0.125) +(600000*0.025)+15000 +165000 +405000+1005000  ;
            ygross = ysal-tax;
            mtax = (msal*0.32);
            mgross= msal-(msal*0.32);
          }
        if(ysal > 12000000 && ysal < 2955000)
          {   
              tax = ((ysal-12000000)*0.35)+(6000000*0.32)+(3600000*0.25)+(2400000*0.2)+(1200000*0.125) +(600000*0.025)+15000 +165000 +405000+1005000 ;
             ygross = ysal-tax;
            mtax = (msal*0.35);
             mgross= msal-(msal*0.35);
          }
  
    
    document.getElementById("mtax").innerHTML = "Monthly Taxable Ammount : "+mtax;
    document.getElementById("msal").innerHTML = "Monthly Salary After Tax: "+mgross;
    document.getElementById("ytax").innerHTML = "Yearly Tax : "+tax;
     console.log("4");
    document.getElementById("ysal").innerHTML = "Yearly Income After Tax: "+ygross;
};
