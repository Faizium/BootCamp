$(document).ready(
    function(){
    $("#mainDiv p").click(function(){
        $(this).css({ 'color': 'red', 'font-size': '150%' })})
              
    
    $(" #btn1 ").click(function(){
    $(".para").append(" Append");
    })
    
    $("#btn2").click(function(){
        $(".para").before("Before");
    }) 
        
    $("#btn3").click(function(){
        $(".para").after("After");
    })
        
    $("#btn4").click(function(){
        $(".para").prepend("Prepend ");
    })  
     $("#mainDiv1 p").click(function(){
        $(this).hide();
              })
     $("#mainDiv2 p").click(function(){
     $(this).wrap( "<b></b>" );
              })
     $("#mainDiv3 p").click(function(){
     $(this).wrap( "<em></em>" );
              })
     $("#d1").change(function(){
         var temp = $(this).val();
     $("#d2").val( temp );
              })
    })