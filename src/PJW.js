
/*
Peter J. Weinberger's Algorithm (Courtesy of AT&T's Bell Labs)
(Implemented in Pseudo Code by Harvey Mudd College)
(Implemented in Node.js by Kaleb R. Horvath)
*/

var pjw = function (str) {

	var hash = 0; // set hash (h) to 0, according to HMC documentation 

	for (var i = 0; i < str.length; ++i) {

		hash = (hash << 4) + str.charCodeAt(i); // this represents k in HMC docs
		g = hash & 0xF0000000; // grab high 4-bits

		if (g !== 0) {
			hash = hash ^ (g >> 24);
			hash = hash ^ g  
		}   
	}
	return hash;
}

/*
Summary:

This algorithm is okay, and believed to be faster than
DJB2 because it uses only 24-bits and uses faster shift values
such as 4. It also makes use of XOR mored extensively than DJB2.
*/

