var saludos = ["hola", "ktal", "hi", "wassup"];
var mantenerconversacion = ["si", "que mas?", "como ?", "enserio"];
var preguntas=["por que?", "que paso?" ];
var historia=["soy bojack tu amigo incondicional con el cual podras conversar el tiempo que tu quieras"];
var texto="";
var malasPalabras=["por favor, te agradeceria que no dijeras malas palabras ok?" ];
var temasVariados=["que hiciste hoy?","que te gusta hacer en tus ratos libres?","que musica te gusta escuchar?","alguien te gusta?"];

function enviar() {
		mensaje=$("#mensaje").val();
    texto= texto + "\n"+  mensaje;
    if (mensaje=="hola"){
			texto=historia;
      texto= texto + "\n" + "\t\t\t\t" + escogeraleatorio();
      texto+=  " ,como estas?";
    }
    else{
      var aleatorio = Math.round(Math.random()*1);
      if (mensaje == "mal" || mensaje =="bien") {
        texto= texto + "\n" + "\t\t\t\t" + preguntas[aleatorio];
      }
    }
		if(mensaje=="puta"||mensaje=="zorra"||mensaje=="cojudo"||mensaje=="huevon"||mensaje=="imbecil"||mensaje=="maricon"||mensaje=="idiota"||mensaje=="no sirves"||mensaje=="muerete"||mensaje=="largate"||mensaje=="fuera mierda"){
			texto=texto+"\n" + "\t\t\t\t"+malasPalabras;
		}
		if(mensaje=="ok"){
			var aleatorios = Math.round(Math.random()*3);
			texto=texto+"\n" + "\t\t\t\t" + temasVariados[aleatorios];
		}
		$("#mensajes").val(texto);

}

function reconocersaludo(mensaje) {
	if( mensaje.indexOf("hola") != -1)
		return true;
	return false;
}


function resolvermensaje(){
  var aleatorio = Math.round(Math.random()*3);
  return mantenerconversacion[aleatorio];
}

function escogeraleatorio(){
  var aleatorio = Math.round(Math.random()*3);
  return saludos[aleatorio];
}
