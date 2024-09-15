function firstWord(s) {
  // your code here
	if(s.length==0){
		return s
	}
	let word=s.split(" ");
	return word[0];
}

// Do not change the code below

 const s = prompt("Enter String:");
alert(firstWord(s));
