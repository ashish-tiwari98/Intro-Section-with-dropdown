$(function(){ 
    $(".dropdown-toggle").click(function(){ 
   $(".arrow").attr('src',  
                ($("img").attr('src') == 'images/icon-arrow-down.svg'  
                    ? 'images/icon-arrow-up.svg'  
                    : 'images/icon-arrow-down.svg' 
                     ) 
                )  
    }); 
}); 