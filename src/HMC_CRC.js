
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

var hmc_crc2 = function (str) {
	var h = 0;
	for (i = 0; i < str.length; i++) {

		var sptr = str.charCodeAt(i);

		var highorder = h & 0xff000000;					// extract first 8-bits
		h = ((h << 4) ^ (highorder >> 30)) ^ sptr;
	}
	return (h & 0xffffffffff).toString(16);
}


/*
Extract first N bits from 32-bit number X

0b11111000000000000000000000000000 extract first 5-bits 	X & 0xf8000000
0b11111111000000000000000000000000 extract first 8-bits 	X & 0xff000000
0b11111111111111110000000000000000 extract first 16-bits 	X & 0xffff0000
*/
