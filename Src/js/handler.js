var noCnflct = $.noConflict();
noCnflct(document).ready(function($){
	$(".teb_frstDemoBarContainer").TextEditorBar({
		TextBar_height:"50px",
		FSwidth:"90px",
		FFwidth:"105px",
		FSminwidth:"90px",
		connectToThisClass:"teb_frstDemoBarContainertxtarea"
	});	
	$(".teb_forDemoBarContainer").TextEditorBar({
		TextBar_height:"50px",
		FSwidth:"90px",
		FFwidth:"105px",
		FSminwidth:"90px",
		connectToThisClass:"teb_teb_forDemoBarContainertxtarea"
	});	
	
	$(".teb_secondDemoBarContainer").TextEditorBar({
		TextBar_height:"50px",
		FSwidth:"90px",
		FFwidth:"105px",
		FSminwidth:"90px",
		connectToThisClass:"teb_secondDemoBarContainertxtarea",
		BbackgroundColor:"#2196F3",
		TextBar_backgroundColor:"#2196F3",
		UbackgroundColor:"#2196F3",
		FFbackgroundcolor:"#2196F3",
		FSbackgroundcolor:"#2196F3",
		TBGbackgroundcolor:"#2196F3",
		FSbackgroundcolor:"#2196F3",
		NLbackgroundcolor:"#2196F3",
		HRbackgroundcolor:"#2196F3",
		backGroundColor:false,
		color:false
	});
	var val="";
	$(".teb_teb_forDemoBarContainertxtarea").on("keypress", function (e){
		val = $(this).ConvertText();
		$(".teb_result").html(val);
	});
});