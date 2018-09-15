
/*
Kaleb R. Horvath's Algorithm
(Based off of and using constants from DJB2 (5381...33))
*/

var krh = function (str) {

	var hash 	= 5381;

	for (var i = 0; i < str.length; ++i) {

		/* extract first 8-bits from hash
		because 32-bits is max, make sure to extend
		0xFF to 0xFF000000 to 
		grab first (lowest) 8-bits */
		var low_8 = hash & 0xFF000000; 			// 0x000000FF = highest 8-bits
									   			// 0xFFFF0000 = lowest 16-bits
									   			// 0x0000FFFF = highest 16-bits

		hash = 33 * hash ^ str.charCodeAt(i); 	// DJB2..? wait, theres more
		hash = (hash ^ low_8) >>> 0;		  	// XOR by lowest 8-bits, mask-out

	}
	return hash;
}

console.log(krh("hello").toString(16));

