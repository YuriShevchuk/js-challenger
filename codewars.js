// area code extractor ✅
function areaCode(text) {
    console.log( text.slice(text.indexOf('(') + 1, text.indexOf(')')));
  }
  areaCode("The supplier's phone number is (555) 867-5309")

// format a poem  ✅
// return a poem as a string with '\n'
function formatPoem(string) {
	let a = string.split(". ").join('.\n');
	console.log(a);
}
formatPoem(
	"Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex. Complex is better than complicated."
);
