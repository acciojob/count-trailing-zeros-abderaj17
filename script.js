function trailingZeros(n) {
  //your JS code here. If required.
	let count = 0;
	let i = 5;
	while (n/i >= 1) {
		count+= Math.floor(n/i) 
 		i*=5
	}
	return count;
	
}

const input = prompt("Enter a number");
alert(trailingZeros(input));
