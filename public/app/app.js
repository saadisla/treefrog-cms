function initButtons(){
    $(".get-started").click(function(e){
        $('#home div').removeClass('active');
        $('#addNav div').addClass('active');

        $(".text-wrapper").html(TREEFROG_SERVICE.getGetStartedContent());
        $(".btn-holder").html(TREEFROG_SERVICE.getCreateNavButton());

    });

    $("#home").click(function(){
        $('#addNav div').removeClass('active');
        $('#home div').addClass('active');

        $(".text-wrapper").html(TREEFROG_SERVICE.getHomecontent());
        $(".btn-holder").html(TREEFROG_SERVICE.getHomeStartButton());
    });
}

$(document).ready(function(){
    initButtons();
});