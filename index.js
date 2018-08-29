

/*
Assorted hashing algorithms:
*/

/*
DEK:

Donald E. Knuth algorithm, maximum-in 8-bits (?)

RESULT:
Generates 32-bit (4-byte) digest
*/
function DEK_8 (string) {

	var hash = (string.length);
	var i = 0;

	for (i = 0; i < string.length; i++) {

		hash = ((hash << 5) ^ (hash >> 27)) ^ (string[i]);
	}

	return hash;
}

/*
AP:

Arash Partow algorithm, maximum-in 8-bits (?)

RESULT:
Generates 32-bit (4-byte) digest

*/
function AP_8 (string) {

	var hash = 0xAAAAAAAA;
	var i = 0;

	for (i = 0; i < string.length; i++) {

		hash ^= ((i & 1) == 0) ? (  (hash <<  7) ^ 
			(string[i]) * (hash >> 3)):
			(~((hash << 11) + ((string[i]) ^ (hash >> 5))));
	}

	return hash;
}

/*
KAS:

Kaleb's Arbitrary Shift algorithm, maximum-in 8-bits

RESULT:
Generates 32-bit (4-byte) digest

BUG ALERT:
If you try to hash a less-than 40-bits (5 characters)
you will get non-4-byte digests

*/
function KAS_8 (string) {

	var hash = (string.length);
	var i = 0; 
	var k = 11 << 5;

	for (i = 0; i < string.length; i++) {

		hash = (((hash << 5) ^ (hash >> 27)) ^ (string[i])) | k;
	}

	return hash;
}



console.log(DEK_8('hello'));
console.log(AP_8('hello'));
console.log(KAS_8('hellohelloworld'));