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

