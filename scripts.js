$(document).ready(function(){
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