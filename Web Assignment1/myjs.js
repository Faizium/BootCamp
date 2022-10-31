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
        $("#t1").hide();
        $('#hide').click(function(){
         $('#t1').toggle();
            if($('#hide').html()=='Hide'){
                $('#hide').html('Show');
                }
            else{
                $('#hide').html('Hide');
                }
            });
        
        
    
      $('#deletecheckbox').click(function(){
      $('#check input[type="checkbox"]:checked').each(function() {
            $(this).parent().remove();
        });

        });
            
        
  $('.check input[type="checkbox"]').click(function(){
                $('.check input[type="checkbox"]').each(function() {
                    if ($(this).prop('checked')==true){ 
                        var temp= $(this).attr('name');
                        temp= '#'+ temp;
                        $(temp).prop('disabled',false);
                    }
                    if ($(this).prop('checked')==false){ 
                        var temp= $(this).attr('name');
                        temp= '#'+ temp;
                        $(temp).prop('disabled',true);
                    }
                })
      
    })
        
   
    $('#addbtn').click(function(){
    $('#mainDiv4').prepend('<p>'+$("#txtbox22").val() +'</p>'+'<br>');
    $('#txtbox22').val("");
    $('#mainDiv4 p').css("background-color","yellow")
    $('#mainDiv4 p').first().css("background-color","blue");
    });
  
        
    var Flag=0;
    $('#BtnDimension').click(function(){
    if (Flag==0){
    $("#adjust").show();
    }
    else{
    $("#animbox").animate({
    height: $("#height").val()+"em",
    width: $("#width").val()+"em",
    },5000);
    }
    });
    $('#enter').click(function(){
    $("#animbox").animate({
    height: $("#height").val()+"em",
    width: $("#width").val()+"em",
    },5000);
    $('#adjust').hide();
    var Flag= 1;
    });
    $("#BtnStop").click(function(){
    var Flag= 1;
    $("#animbox").stop();
    });
    $("#BtnReset").click(function(){
    $("#animbox").animate({
    height: $("#height").val()= "10em",
    width: $("#width").val()= "10em",
    },100);
    Flag=1;
    });
        
    });