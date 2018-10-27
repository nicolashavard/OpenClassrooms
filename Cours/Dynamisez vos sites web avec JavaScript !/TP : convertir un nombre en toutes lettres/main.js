
var result = [];
var stop = false;
var obj = {};

function relou(){
	if (obj.n1) {
		switch (obj.n1) {
		case '1':
			result.push('onze');
			break;
		case '2':
			result.push('douze');
			break;
		case '3':
			result.push('treize');
			break;
		case '4':
			result.push('quatorze');
			break;
		case '5':
			result.push('quinze');
			break;
		case '6':
			result.push('seize');
			break;
		case '7':
			result.push('dix-sept');
			break;
		case '8':
			result.push('dix-huit');
			break;
		case '9':
			result.push('dix-neuf');
			break;
		default:
		}
	}
}
function convert(nombre) {
    
	var string = nombre.toString();
	var strlen = string.length;
	for (var i = strlen - 1, j = 0; i >= 0; i--, j++) {
		switch (i) {
		case 0:
			obj.n1 = string[j];
			break;
		case 1:
			obj.n10 = string[j];
			break;
		case 2:
			obj.n100 = string[j];
			break;
		default:
		}
	}
	if (obj.n100) {
		switch (obj.n100) {
		case '1':
			result.push('cent');
			break;
		case '2':
			result.push('deux-cent');
			break;
		case '3':
			result.push('trois-cent');
			break;
		case '4':
			result.push('quatre-cent');
			break;
		case '5':
			result.push('cinq-cent');
			break;
		case '6':
			result.push('six-cent');
			break;
		case '7':
			result.push('sept-cent');
			break;
		case '8':
			result.push('huit-cent');
			break;
		case '9':
			result.push('neuf-cent');
			break;
		default:
		}
	}

	if (obj.n10) {
		switch (obj.n10) {
		case '0':
			break;
		case '1':
			relou();
			stop = true;
			break;
		case '2':
			result.push('vingt');
			break;
		case '3':
			result.push('trente');
			break;
		case '4':
			result.push('quarante');
			break;
		case '5':
			result.push('cinquante');
			break;
		case '6':
			result.push('soixante');
			break;
		case '7':
			result.push('soixante-dix');
			break;
		case '8':
			result.push('quatre-vingt');
			break;
		case '9':
			result.push('quatre-vingt-dix');
			break;

		default:
		}
	}

	if (obj.n1 && stop === false) {
		switch (obj.n1) {
		case '1':
			result.push('un');
			break;
		case '2':
			result.push('deux');
			break;
		case '3':
			result.push('trois');
			break;
		case '4':
			result.push('quatre');
			break;
		case '5':
			result.push('cinq');
			break;
		case '6':
			result.push('six');
			break;
		case '7':
			result.push('sept');
			break;
		case '8':
			result.push('huit');
			break;
		case '9':
			result.push('neuf');
			break;
		default:
		}
	}
	console.log(`resultat : ${result.join('-')}`+'\n');
}
// for(let i = 0; i < 20 ; i++) {
//    convert(i);
// }


// Ca marche pas completement, il reste des cas a gere, mais c'est difficile avec la maniere dont j'ai procede.
convert(971);