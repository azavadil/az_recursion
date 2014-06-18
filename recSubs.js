var makeIndent = function(n){
  var acc = [];
  for( var i = 0; i < n; i++ ) {
    acc.push('-');
  }
  acc.push('>');
  return acc.join("");
};

var recSubs = function(sofar, rest) {

  if( rest.length === 0 ) {
    console.log(sofar);
  } else {
    recSubs(sofar + rest.charAt(0), rest.substring(1));
    recSubs(sofar.substring(), rest.substring(1));
  }
};


var test = function(){
  recS('','abc');
}

var recSubs2 = function(sofar, rest, depth) {
  console.log(makeIndent(depth), "called with sofar: ", sofar, "rest: ", rest);
  if( rest.length === 0 ) {
    console.log("base case reached",sofar);
  } else {
    recSubs2(sofar + rest.charAt(0), rest.substring(1), depth+1);
    recSubs2(sofar.substring(), rest.substring(1), depth+1);
  }
};

var test1 = function(){
  recSubs('', 'abc');
};

var test2 = function(){
  recSubs2('','abc', 0);
};

test1();
console.log('---');
test2();
