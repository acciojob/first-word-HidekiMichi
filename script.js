function firstWord(s) {
  // your code here
	if(s==''){
		return '';
	}
	s=s.trim();
	let arr=s.split(' ');
	return arr[0];
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));  
