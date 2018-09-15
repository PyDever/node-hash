

/*
Daniel J. Bernstein's Algorithm (Second Version)
(Implemented in C by York University)
*/

var djb2 = function (str) {
	var hash = 5381;
	for (var i = 0; i < str.length; ++i) {
		hash = 33 * hash + str.charCodeAt(i);
	}
	return hash;
}

