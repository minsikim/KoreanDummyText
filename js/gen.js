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

function setInput(clicked_id) {
  var result;
  switch (clicked_id) {
    case 'top20':
      result = pre.top20;
      break;
    case 'top50':
      result = pre.top50;
      break;
    case 'top100':
      result = pre.top100;
      break;
    case 'top200':
      result = pre.top200;
      break;
    default:
      result = pre.top20;
      break;
  }
  document.getElementById('gen2').value = result;
}


function generate() {
  var gt = document.getElementById('gentext');
  //gt.innerHTML.clear();
  gt.innerHTML = "";
  var input = document.getElementById('gen2').value;

  console.log("before : "+input);
  //중복제거
  var viewedInput = [];
  var toCheck = input.split("");
  for(var char in toCheck){
    if(!viewedInput.includes(toCheck[char])){
      viewedInput.push(toCheck[char]);
    }
  }
  input = viewedInput.join("");
  console.log("after : "+input);

  //한글확인
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

  //최소20자 확인
  if(input.length<20){
    alert('최소 20자를 입력해주세요')
    return;
  }
  //input 출력
  var inputArr = input.split('');
  console.log("inputArr : "+inputArr);
  var result = [];

  //100가지 생성 (var result)
  var count = 0;
  while(result.length < 150 && count<10000){
    var temp = ref[getRandomInt(0,ref.length)];
    if(temp && temp.length!=1){
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
    count++;
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
