
/*
Arash Partow Algorithm
*/

var AP = function (str) {

	var hash = 0xAAAAAAAA;
	var i = 0;

	for (i = 0; i < str.length; i++) {

		hash ^= ((i & 1) == 0) ? (  (hash <<  7) ^ 
			str[i] * (hash >> 3)) :
			(~((hash << 11) + (str[i] ^ (hash >> 5))));
	}

	return hash;
}



