// var ref = "ref.txt";
// var txt;
//
// function preload(){
//   txt = loadStrings("ref.txt")
// }
var arr = JSON.parse(ref);

// function LoadFile (){
//   var oFrame = document.getElementById("frmFile");
//   var strRawContents = oFrame.contentWindow.document.body.childNodes[0].innerHTML;
//   while(strRawContents.indexOf("\r") >= 0){
//     strRawContents = strRawContents.replace("\r", "");
//   }
//   var arrLines = strRawContents.split("\n");
//   alert("File " + oFrame.src + " has " + arrLines.length + " lines");
//   for (var i = 0; i < arrLines.length; i++) {
//     var curLine = arrLines[i];
//     alert("Line #" + (i + 1) + " is: '" + curLine + "'");
//   }
// }();

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
