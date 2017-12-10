// JavaScript Document

var respuestas = ["mexicali", "hermosillo" ];

function set_results(aciertos){
	$("#preguntas").text("Preguntas: " + respuestas.length);
	$("#aciertos").text("Aciertos: " + aciertos);
	var calificacion = aciertos * 100 / respuestas.length;
	$("#calificacion").text("Calificacion: " + calificacion + " %");	
}

$(document).ready(
	function(){
		$("#enviar").click(
			function(){
				var aciertos = 0;
				for (var i=0;i<respuestas.length;i++){
					var pregunta = i + 1;
					var selector="input:radio[name='pregunta_"+ pregunta + "']:checked";
					if ($(selector).val() === respuestas[i]){
						aciertos++;
					}
				}
				set_results(aciertos);
			}
		);
		
		$("#limpiar").click(
			function(){
				set_results(0);
			}
		);
	}
);