// JavaScript document

var url_imagenes = [
	"img/img_00.jpg",
	"img/img_01.jpg",
	"img/img_02.jpg",
	"img/img_03.jpg"
];

var imagen_seleccionada = -1;

// funcion para meclar las images del tablero
function mezclar_tablero(){
	"use strict";
	var posicion_imagenes = [ 1, 3, 0, 2];

	// colocar la images en las posicion aleatorias
	for (var i=0; i<posicion_imagenes.length; i++){
		var url_m = url_imagenes[posicion_imagenes[i]];
		colocar_imagen(i, url_m);
	}
}

// funcion para reiniciar la pieza en el tablero a su forma original
function reiniciar_tablero(){
	"use strict";
	for (var i=0; i<url_imagenes.length; i++){
		var url_i = url_imagenes[i];
		colocar_imagen(i, url_i);
	}
}

// mueve la imagen seleccionda a la posicion indicada por el segundo click
function mover_imagen(de_pos, a_pos){
	"use strict";
	
	// new board position
	var nueva_pos = -1;
	
	if (de_pos === -1){
		// primer clic
		nueva_pos = a_pos;
	} else if (de_pos !== a_pos){			
		// segundo clic
		
		// intercambia las imagenes de_pos y a_pos
		intercambiar_images(de_pos, a_pos);
		
		// ya esta resuelto?
		if (esta_completo() === 1){
			window.alert("Felicitaciones!!!  El rompezacezas esta completo !!!");
		}
	}
	
	return nueva_pos;
}

// intercambia imagenes de la celda de_pos y a_pos
function intercambiar_images(de_pos, a_pos){
	"use strict";
	
	// obtiene las url de las imagenes en las actuales posiciones
	var url_de = obtener_imagen(de_pos);
	var url_a = obtener_imagen(a_pos);
	
	// intercambia las url de las imagenes
	colocar_imagen(de_pos, url_a);
	colocar_imagen(a_pos, url_de);
}

// funcion para colocar una imagen en una celda
function colocar_imagen(pos, url){
	"use strict";
	
	switch (pos){
		case 0:
			$("#img_00").attr("src", url);
			break;
		case 1:
			$("#img_01").attr("src", url);
			break;
		case 2:
			$("#img_02").attr("src", url);
			break;
		case 3:
			$("#img_03").attr("src", url);
			break;
	}
}

function obtener_imagen(pos){
	"use strict";
	var url_f = "";
	switch (pos){
		case 0:
			url_f = $("#img_00").attr("src");
			break;
		case 1:
			url_f = $("#img_01").attr("src");
			break;
		case 2:
			url_f = $("#img_02").attr("src");
			break;
		case 3:
			url_f = $("#img_03").attr("src");
			break;
	}
	return url_f;
}

function esta_completo(){
	"use strict";
	// se asume de inicio que el tablero esta ordenado
	var completo = 1;
	// inicia la revision para confirmar que el tablero esta ordenado
	for (var i=0; i<url_imagenes.length && completo === 1;i++){
		if (url_imagenes[i] !== obtener_imagen(i)){
			// el tablero no esta ordenado todavia
			completo = 0;
		}
	}
	return completo;
}

$(document).ready(
	function(){
		"use strict";
		// Aqui van las instrucciones
		
		$("#btnStart").click(
			function(){
				mezclar_tablero();
			}
		);  // aqui termin el click del boton start
		
		
		$("#btnReset").click(
			function(){
				reiniciar_tablero();
			}
		);	// Aqui termina el click del boton reset
		
		
		$("#img_00").click(
			function(){
				imagen_seleccionada = mover_imagen(imagen_seleccionada, 0);
			}
		);	// Aqui termina el click sobre la imagen 00
		
		
		$("#img_01").click(
			function(){
				imagen_seleccionada = mover_imagen(imagen_seleccionada, 1);
			}
		);	// Aqui termina el click sobre la imagen 01
		

		$("#img_02").click(
			function(){
				imagen_seleccionada = mover_imagen(imagen_seleccionada, 2);
			}
		);	// Aqui termina el click sobre la imagen 02
		
		$("#img_03").click(
			function(){
				imagen_seleccionada = mover_imagen(imagen_seleccionada, 3);
			}
		);	// Aqui termina el click sobre la imagen 03
	}
);