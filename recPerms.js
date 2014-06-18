var makeIndent = function(n){
  var acc = [];
  for( var i = 0; i < n; i++ ) {
    acc.push('-');
  }
  acc.push('>');
  return acc.join("");
};

var recPerms = function(sofar, rest){
  if( rest.length === 0 ){
    console.log("base case reached:", sofar);
  } else {
    for( var i = 0; i < rest.length; i++ ){
      var remaining = rest.substring(0,1) + rest.substring(i+1);
      var next = sofar + rest.charAt(i);
      recPerms(next, remaining);
    }
  }
};


var recPerms2 = function(sofar, rest, depth){
  console.log(makeIndent(depth) + " called with sofar:", sofar,"rest:",rest);
  if( rest.length === 0 ){
    console.log("base case reached", sofar);
  } else {
    for( var i = 0; i < rest.length; i++ ){
      var remaining = rest.substring(0,i) + rest.substring(i+1);
      var next = sofar + rest.charAt(i);
      recPerms2(next, remaining, depth+1);
    }
  }
};

var test0 = function(){
  recPerms('','abc');
};

//test0();

var test1 = function(){
  recPerms2('','abc',0);
};

test1();


