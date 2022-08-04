$(document).ready(function(){
    // console.log("I am working.");


/* Start Header Section */

/* Start Banner Section */

/* End Banner Section */


/* End Header Section */



// Start Info Section
$(window).scroll(function(){
    let getscrollpoint = $(this).scrollTop();
    // console.log(getscrollpoint);

    if(getscrollpoint >= 400){
        $(".infotexts").addClass("fromlefts");
        $(".infopics").addClass("fromrights");
    }else{
        $(".infotexts").removeClass("fromlefts");
        $(".infopics").removeClass("fromrights");
    }

})
// End Info Section


// Start  Premises Section
$("#lightslider").lightSlider({
    item:4,
    auto:true,
    loop:true,
    slideMove:1,
    speed:600
}).play();

// End  Premises Section

// Start Pricing Section
$(window).scroll(function(){
    let getscroll = $(this).scrollTop();
    // console.log(getscroll);

    if(getscroll >= 2450){
        $(".cardones").addClass("movelefts");
        $(".cardtwos").addClass("movebottoms");
        $(".cardthrees").addClass("moverights");
    }else{
        $(".cardones").removeClass("movelefts");
        $(".cardtwos").removeClass("movebottoms");
        $(".cardthrees").removeClass("moverights");
    }
})
// End Pricing Section
});