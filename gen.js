// var ref = "ref.txt";
// var txt;
//
// function preload(){
//   txt = loadStrings("ref.txt")
// }

function generate() {
  var gt = document.getElementById('gentext');
  //gt.innerHTML.clear();
  gt.innerHTML = "";
  var input = document.getElementById('gen2').value;

  var lang = "";


    guessLanguage.detect(input, function(language) {
    console.log('Detected language code of provided text is [' + language + ']');
    console.log(typeof language);
    this.lang = language;
    console.log(typeof lang);
    console.log(lang);
    });


  console.log(lang);
  if(lang !== 'eng') {
    alert('We do not support languages other than English.')
    return;
  }

  // FileReader.readAsText(ref.txt);
  gt.innerHTML += input;

}
