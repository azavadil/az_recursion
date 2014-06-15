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
    var next = sofar.slice();
    next.push(rest[0]); 
    recS(next, rest.slice(1)); 
    recS(sofar.slice(), rest.slice(1)); 
  }
}; 


var test = function(){ 
  recS([], ['a','b','c']); 
} 

var recSubs2 = function(sofar, rest, depth) { 
  console.log(makeIndent(depth), "called with sofar: ", sofar, "rest: ", rest);
  if( rest.length === 0 ) { 
    console.log("base case reached",sofar); 
  } else {    
    var next = sofar.slice();
    next.push(rest[0]); 
    recSub2(next, rest.slice(1), depth+1); 
    recSub2(sofar.slice(), rest.slice(1), depth+1); 
  }
}; 

var test2 = function(){ 
  recSub2([], ['a','b','c'], 0); 
};

test2(); 
