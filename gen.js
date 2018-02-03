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



  function guessLang (textin) {
    guessLanguage.detect(textin, function(language) {
    console.log('Detected language code of provided text is [' + language + ']');
    return language;
    });
  }

    var lang = guessLang(input);

  console.log(lang);
  if(lang !== 'eng') {
    alert('We do not support languages other than English.')
    return;
  }

  // FileReader.readAsText(ref.txt);
  gt.innerHTML += input;

}
