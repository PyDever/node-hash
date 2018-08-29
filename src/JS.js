
/*
Justin Sobel's Algorithm
*/

var JS = function (str) {

	var hash = 1315423911;
	var i = 0;

	for (i = 0; i < str.length; i++) {

		hash ^=((hash << 5) + (str[i]) + (hash >> 2));
	}

	return hash;
}

