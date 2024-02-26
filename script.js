//your JS code here. If required.
function mapLetters(str) {
	let obj ={};
	for(let i=0;i<str.length;i++){
		if(obj[str[i]]==undefined)obj[str[i]]=[];
		obj[str[i]].push(i);
	}
	return obj;
}
const l = prompt("Enter a String.");
alert(mapLetters(l));