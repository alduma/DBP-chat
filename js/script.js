var saludos = ["hola", "ktal", "hi", "wassup"];
var mantenerconversacion = ["si", "que mas?", "como ?", "enserio"];

function enviar() {
		tmp=$("#mensaje").val();
		mensaje=$("#mensaje").val();
		$("#mensajes").val(mensaje +tmp);
}

function reconocersaludo(mensaje) {
	if( mensaje.indexOf("hola") != -1)
		return true;
	return false;
}

function resolvermensaje(){
		if (reconocersaludo(mensaje))
			return escogeraleatorio(saludos);
		return escogeraleatorio(mantenerconversacion);
}

function escogeraleatorio(){

}
