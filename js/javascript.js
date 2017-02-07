$(".arrow").click(function(){
	formulario();
});


function formulario() {
	if(!$(".formulario").is(":visible")){
		$(".formulario").toggle("slow");
	}
}