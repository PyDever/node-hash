
/*
Daniel J. Bernstein Algorithm
*/

var DJB = function (str) {

	var hash = 5381;
	var i = 0;

	for (i = 0; i < strl.length; i++) {

		hash = ((hash << 5) + hash) + str[i];
	}

	return hash;
}

