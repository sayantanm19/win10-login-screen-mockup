$(document).ready(function(){
        $(".login-prev-btn").click(function(){
        console.log('clicked');
        $(".inputx").show(100);
        $(".login-prev-btn").hide();
    });

    $(".forgot").click(function(){
        console.log('forgot?');
        $(".forgot").hide();
        $(".hint").show(100);
    });
});