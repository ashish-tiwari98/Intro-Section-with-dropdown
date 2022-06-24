var dict={'images/icon-arrow-down.svg':false, 'images/icon-arrow-up.svg':false};
$(function(){ 
    $(".dropdown-toggle").click(function(){ 
        var arr=$(this).children()[0];
        $(arr).attr('src',  
                ($(arr).attr('src') == 'images/icon-arrow-down.svg'  
                    ? 'images/icon-arrow-up.svg'  
                    : 'images/icon-arrow-down.svg' 
                     ) 
                ); 
        if($(arr).attr("id")=="features")
        $("#company").attr("src","images/icon-arrow-down.svg");
        else
        $("#features").attr("src","images/icon-arrow-down.svg");
    }); 
});


$(window).on("load",function(){
    if($(window).width()<"769" )
    {
        $('.mobile').css("display","block");
        $('.desktop').css("display","none");
        $('.collapse').addClass("sidenav");
        $('div.collapse').attr("id","mySidenav");
        $('.sidenav').removeClass("collapse");
        $('.sidenav').removeClass("navbar-collapse");
    }

    else{
        $('.mobile').css("display","none");
        $('.desktop').css("display","block");
    }
   
});

function openNav() {
    if($(window).width()<"769" ){
    document.getElementById("mySidenav").style.width = "250px";
    $(".sidenav").css("box-shadow","0 0 0 2000px rgba(0,0,0,.8)");
    $("form").removeClass("d-flex");
    }
  }
  
  function closeNav() {
    if($(window).width()<"769" ){
    document.getElementById("mySidenav").style.width = "0";
    $(".sidenav").css("box-shadow","0 0 0 0 rgba(0,0,0,0)");
    $("form").addClass("d-flex");
    }
  }
