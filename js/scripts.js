$(document).ready(function(){
    $("#nav").load("../demo/nav.html", function(){
        $(".sidebar").load("../demo/sidebar.html", function(){
               $("a").hover(function(){
                    if ($(this).attr("target")){
                        $("#coderun").text("cd (" + $(this).attr("href") + ", " + $(this).attr("target") + ")");
                    }else{
                        $("#coderun").text("cd " + $(this).attr("href"));
                    }
                }, function(){
                    $("#coderun").text("");
                });
            });
        }); /* Load sidebar */
        
    }); /* Load nav */
    
});
/*
$("a").live('hover', function(){
}, function(){
});
*/
