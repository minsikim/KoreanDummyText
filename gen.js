// var ref = "ref.txt";
// var txt;
//
// function preload(){
//   txt = loadStrings("ref.txt")
// }

function generate() {
  var gt = document.getElementById('gentext');
  gt.innerHTML = "";
  var input = document.getElementById('gen2').value;
  console.log(input);
  gt.innerHTML += input;

}
