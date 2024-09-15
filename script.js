function firstWord(s) {
  // your code here
	if(s.length==null){
		return s
	}
	let word=s.split(" ");
	return word[0]
}

// Do not change the code below

 // const s = prompt("Enter String:");
alert(firstWord(s));
