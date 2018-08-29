
/*
Donald E. Knuth Algorithm
*/

var DEK = function (str) {

	var hash = str.length;
	var i = 0;

	for (i = 0; i < str.length; i++) {
		
		hash = ((hash << 5) ^ (hash >> 27)) ^ str[i];
	}

	return hash;
}

