
/*
Kaleb R. Horvath's Algorithm
(Borrowing constants from DJB2 (5831...33))
*/

var krh = function (str) {

	var hash = 5381;

	for (var i = 0; i < str.length; ++i) {
		/* extract first 8-bits from hash.
		because 32-bits is max, make sure to extend
		0xFF to 0xFF000000 to 
		grab first (lowest) 8-bits */
		var low_8 = hash & 0xFF000000; 			// 0x000000FF = highest 8-bits
												// 0xFFFF0000 = lowest 16-bits
												// 0x0000FFFF = highest 16-bits
		hash = 33 * hash ^ str.charCodeAt(i); 	// DJB2..? wait, theres more
		hash = hash ^ low_8;		  			// XOR by lowest 8-bits
	}
	return hash;
}

var krh2 = function (str) {

	var hash = 5381;

	for (var i = 0; i < str.length; ++i) {
		/* extract first 8-bits from hash.
		because 32-bits is max, make sure to extend
		0xFF to 0xFF000000 to 
		grab first (lowest) 8-bits */
		var low_8 = hash & 0xFF000000;
		hash = (33 * hash) ^ str.charCodeAt(i);
		hash = (hash ^ low_8) ^ low_8;			// XOR by lowest 8-bits, XOR again
		hash = (hash << 5);						// left shift by 5-bits
	}
	return Math.abs(hash);
}

console.log(krh2("hello").toString(16));
console.log(krh("hello").toString(16));

/*
Summary:

I created this one. It is a mix between DJB2 and 
some other hashes I found online. It is equiv. to the
PJW hash and in my opinion, slightly dominant.
*/

