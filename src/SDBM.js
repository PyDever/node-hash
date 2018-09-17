
/*
SDBM Algorithm (Courtesy of Berkely Open-Source Project)
(Implemented in C by York University)
(Implemented in Node.js by Kaleb R. Horvath)
*/

var sdbm = function (str) {

	var hash 	= 0;

	for (var i = 0; i < str.length; ++i) {

		hash = str.charCodeAt(i) + (hash << 6) + (hash << 16) - hash;
	}
	return hash;
}

console.log(sdbm('hello'));

