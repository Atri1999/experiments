$(document).ready(function(){
    
    $('.anime').click(function(){
        $('.an_1').animate({left:'+=250px',opacity:'0.5'},1000);
        $('.an_2').animate({top:'-=250px',opacity:'0.7'},500);
        $('.an_2').animate({fontSize:'3em'},400,function(){
            $('.an_2').css({'-webkit-transform' : 'rotate(45deg)',
                     '-moz-transform' : 'rotate(45deg)',
                     '-ms-transform' : 'rotate(45deg)',
                     'transform' : 'rotate(45deg)'});
        });             
        $('.an_1').animate({top:'+=250px',opacity:'1.0'},500);
        $('.an_2').animate({left:'-=250px',opacity:'0.5'},1000);
        $('.an_1').animate({left:'-=250px',opacity:'0.5'},1000);
        $('.an_2').animate({top:'+=250px',opacity:'1.0'},500);
        $('.an_1').animate({top:'-=250px',opacity:'1.0'},500);
        $('.an_2').animate({left:'+=250px',opacity:'0.5'},1000);
        $('.an_2').animate({fontSize:'0em'},400);
        $('.square').css("display","inline-block");
        
        $('.name').animate({left:'+=40px',opacity:'1.0'},3000);
        
    });
    
    $('.boom').click(function(){
        $('.an_1').animate({left:'+=250px',top:'+=250px'},1000);
    });
});   
