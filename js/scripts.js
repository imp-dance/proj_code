$(document).ready(function(){
    $("#nav").load("../demo/nav.html"); /* Load nav */
    $(".sidebar").load("../demo/sidebar.html"); /* Load sidebar */
});
/*
$("a").live('hover', function(){
}, function(){
});
*/
$("a").live({
    mouseenter: function () {
        if ($(this).attr("target")){
            $("#coderun").text("cd (" + $(this).attr("href") + ", " + $(this).attr("target") + ")");
        }else{
            $("#coderun").text("cd " + $(this).attr("href"));
        }
    },
    mouseleave: function () {
        $("#coderun").text("");
    }
});