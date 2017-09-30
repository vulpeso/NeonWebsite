$(function(){
	    	
    // mobile sidebar menu
    var menuVisible = false;
    function toggle(){
        if(!menuVisible){
            $(".side-bar").toggleClass("visible");
            menuVisible = true;
        }else{
            $(".side-bar").removeClass("visible");
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

