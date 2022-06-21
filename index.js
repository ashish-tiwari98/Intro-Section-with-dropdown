$(function(){ 
    $(".dropdown-toggle").click(function(){ 
        console.log($($(this).children()[0]).attr("src"));
        $($(this).children()[0]).attr('src',  
                ($($(this).children()[0]).attr('src') == 'images/icon-arrow-down.svg'  
                    ? 'images/icon-arrow-up.svg'  
                    : 'images/icon-arrow-down.svg' 
                     ) 
                )  
    }); 
}); 