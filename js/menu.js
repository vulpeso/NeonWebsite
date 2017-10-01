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
    })
});

