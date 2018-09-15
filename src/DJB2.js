

/*
Daniel J. Bernstein's Algorithm (Second Version)
(Implemented in C by York University)
(Implemented in Node.js by Kaleb R. Horvath)
*/

var djb2 = function (str) {

	var hash 	= 5381;

	for (var i = 0; i < str.length; ++i) {

		hash = (33 * hash ^ str.charCodeAt(i)) >>> 0;
	}
	return hash;
}

console.log((djb2('hello')).toString(16));

