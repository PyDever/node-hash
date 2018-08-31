
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

