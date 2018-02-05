// var a = 'http://localhost/';
var curr = 'local';

var address = {
  localhost : 'http://localhost/',
  local : 'C:\\Users\\MinSKim\\Documents\\GitHub\\',
  localProject : 'C:\\Users\\MinSKim\\Documents\\GitHub\\KoreanDummyText\\',
  salinger : 'http://salinger.me/',

  get : function() {
    // for checking arguments

    // for(var args in arguments){
    //     console.log(arguments[args]);
    //     console.log('is type : ' + typeof arguments[args]);
    // }

    if(!arguments){
      return 'no arguments found in _get function';
    }
    if(arguments.length === 3){
      var dir = arguments[0];
      var filename = arguments[1];
      var callback = arguments[2];
      if(this[dir]){
        return callback(this[dir]+filename);
      }
      return 'no matching directory found'
    }
    if(arguments.length === 2){
      var dir = arguments[0];
      var filename = arguments[1];
        if(this[dir]){
          return this[dir]+filename;
        }
        return 'no matching directory found'
    }
    if(arguments.length === 1){
      var dir = arguments[0];
      if(this[dir]){
        return this[dir];
      }
      return 'no matching directory found'
    }
  }
}

// function test(){
//   document.write("Hello");
// }
// function linkCSS(dir) {
//     document.write("<link rel=\"stylesheet\" href=\""+a+dir"\"/>");
// }
