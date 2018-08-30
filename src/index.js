
/*
Daniel J. Bernstein Algorithm
*/
var djb2 = function (str) {

	var h = 5381;
	var i = 0;

	for (i = 0; i < str.length; i++) {

		var sptr = str.charCodeAt(i);

		h = ((h << 5) + h) + sptr;
	}
	return h & 0xffffffffff;
}

/*
Donald E. Knuth Algorithm
*/
var dek = function (str) {

	var h = str.length;
	var i = 0;

	for (i = 0; i < str.length; i++) {

		var sptr = str.charCodeAt(i);

		h = ((h << 5) ^ (h >> 27)) ^ sptr;
	}

	return h & 0xffffffffff;
}

