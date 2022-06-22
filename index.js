$(function(){ 
    $(".dropdown-toggle").click(function(){ 
        $($(this).children()[0]).attr('src',  
                ($($(this).children()[0]).attr('src') == 'images/icon-arrow-down.svg'  
                    ? 'images/icon-arrow-up.svg'  
                    : 'images/icon-arrow-down.svg' 
                     ) 
                )  
    }); 
});


$(window).on("resize",function(){
    if($(window).width()<"769" )
    {
        $('.mobile').css("display","block");
        $('.desktop').css("display","none");
    }

    else{
        $('.mobile').css("display","none");
        $('.desktop').css("display","block");
    }
   
});