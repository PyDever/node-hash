

/*
Daniel J. Bernstein's Algorithm (Second Version)
(Implemented in C by York University)
(Implemented in Node.js by Kaleb R. Horvath)
*/

var djb2 = function (str) {

	var hash 	= 5381;

	for (var i = 0; i < str.length; ++i) {

		hash = (33 * hash + str.charCodeAt(i));
	}
	return hash;
}

console.log(djb2('hello'));


/*
Summary:

Believed to be the most superior hashing algorithm, this 
one is slow and not secure in the slightest. The only redeeming
factor of this algorithm is the highly efficient
integers chosen (33...5381)
*/



