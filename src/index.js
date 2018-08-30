



/*
SPEACIAL THANKS TO:

Arash Partow - Author of DJB2 and http://www.partow.net/

Margaret Fleck & Geoff Kuenning - Computer Science Team at Harvey Mudd College

Prof. Charles Leiserson - Introduction to Algorithms at Massachusetts Institute of Technology
Prof. Erik Demaine - Introduction to Algorithms II at Massachusetts Institute of Technology
*/

/*
Daniel J. Bernstein's Algorithm
*/
var djb2 = function (str) {
	var h = 5381;
	var i = 0;

	for (i = 0; i < str.length; i++) {

		var sptr = str.charCodeAt(i);

		h = ((h << 5) + h) + sptr;
	}
	return (h & 0xffffffffff).toString(16);
}

/*
Donald E. Knuth's Algorithm
*/
var dek = function (str) {
	var h = str.length;
	var i = 0;
	for (i = 0; i < str.length; i++) {

		var sptr = str.charCodeAt(i);

		h = ((h << 5) ^ (h >> 27)) ^ sptr;
	}
	return (h & 0xffffffffff).toString(16);
}

/*
Harvey Mudd College's CRC Algorithm
*/
var hmc_crc = function (str) {
	var h = 0;
	for (i = 0; i < str.length; i++) {

		var sptr = str.charCodeAt(i);

		var highorder = h & 0xf8000000;			
		h = ((h << 5) ^ (highorder >> 27)) ^ sptr;
	}
	return (h & 0xffffffffff).toString(16);
}

/*
Harvey Mudd College's PJW Algorithm
*/
var hmc_pjw = function (str) {
	var h = 0;
	for (i = 0; i < str.length; i++) {

		var sptr = str.charCodeAt(i);

		h = (h << 4) + sptr; 
		var g = h & 0xf0000000;
		if (g != 0) {
			h = h ^ (g >> 24);
        	h = h ^ g;
		}
	}
	return (h & 0xffffffffff).toString(16);
}

