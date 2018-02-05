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
  var lang = guessLanguage.detect(input, function(language) {
  console.log('Detected language code of provided text is [' + language + ']');
  return language;
  });
  console.log(typeof lang);
  console.log(lang);

  if(lang !== 'ko') {
    alert('We do not support languages other than English.')
    return;
  }



  gt.innerHTML += input;

}

// function getStringfromtxt(){
//   var result = [];
//   for(var fileLocation in arguments){
//
//   }
//   return result;
// }
