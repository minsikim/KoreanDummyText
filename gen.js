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

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generate() {
  var gt = document.getElementById('gentext');
  //gt.innerHTML.clear();
  gt.innerHTML = "";
  var input = document.getElementById('gen2').value;
  var lang = guessLanguage.detect(input, function(language) {
  console.log('Detected language code of provided text is [' + language + ']');
  return language;
  });
  // console.log(typeof lang);
  // console.log(lang);

  if(lang !== 'ko') {
    alert('We do not support languages other than English.')
    return;
  }
  var inputArr = input.split('');
  console.log("inputArr : "+inputArr);
  var result = [];

  while(result.length < 100){
    var temp = ref[getRandomInt(0,ref.length)];
    if(temp){
      var tempArr = temp.split('');
      var match = true;

      for(var index in tempArr){
        if(!inputArr.includes(tempArr[index])){
          match = false;
        }
      }
      if(match === true && !result.includes(temp)){
        result.push(temp);
      }
    }
  }
  var count = 0;
  console.log(result + typeof result);
  while(count < 500){
    var s = result[getRandomInt(0,result.length)];
    // console.log(s + typeof s);
    if(s.charAt(s.length-1) !== '다'){
      gt.innerHTML += s+' ';
      count++;
    }
    else{
      gt.innerHTML += s+'. ';
      count++;
    }

  }


}

// function getStringfromtxt(){
//   var result = [];
//   for(var fileLocation in arguments){
//
//   }
//   return result;
// }
