$(function(){
	    	
    // mobile sidebar menu
    var menuVisible = false;
    function toggle(){
        if(!menuVisible){
            $(".side-bar").toggleClass("visible");
            $(".toggle").toggleClass("x");
            menuVisible = true;
        }else{
            $(".side-bar").removeClass("visible");
            $(".toggle").removeClass("x");
            menuVisible = false;
        }
    }
    $(".toggle").on("click", function(){
        toggle();
    });
    $(".side-bar").on("click", function(){
        toggle();
    });
    
    // fb widget
    var fbwg = $(".fb-widget");
    var fbwg_button = $(".fb-top-bar");
    var fbwg_clicked = false;
    function fbwg_hide(){
        fbwg.css({
            "right" : "-"+(fbwg.width()-120)+"px",
            "bottom" : "-"+(fbwg.height()-42)+"px"
        });
    }
    function fbwg_show(){
        fbwg.css({
            "right": "0px",
            "bottom": "-5px"
        });
    }
    
    fbwg_hide();
    window.onresize = fbwg_hide;
    fbwg.on("mouseenter", fbwg_show);
    fbwg.on("mouseleave", fbwg_hide);
    
});

// sierotki
(function($){
    $.fn.removeOrphans = function(){
        if($(this).length > 0) {
            var $html = $(this).html();
            $html = $html.replace(/(\s)([\S])[\s]+/g, "$1$2&nbsp;");
            
             $(this).empty().html($html);
        }
    }
})(jQuery);
$(document).ready(function(){
        $('p').each(function(){$(this).removeOrphans();});
        
        $("#partners a").on("click", function(){
        console.log($(this).attr('href'));
        window.open($(this).attr('href'),"_self");
    });
});
