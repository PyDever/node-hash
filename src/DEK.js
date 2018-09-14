

/*
Donald E. Knuth's Algorithm

(Implemented in C by Arash Partow)
*/
var dek = function (str) {
	var h = str.length;
	var i = 0;
	for (i = 0; i < str.length; i++) {

		var sptr = str.charCodeAt(i);

		h = ((h << 5) ^ (h >> 27)) ^ sptr;
	}
	return (h & 0xffffffffff).toString(16);
}


