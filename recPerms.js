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
      var remaining = rest.slice(); 
      remaining.splice(i,1);  
      var next = sofar.slice();
      next.push(rest[i]); 
      recPerms(next, remaining); 
    } 
  }
}; 


var recPerms2 = function(sofar, rest, depth){ 
  console.log(makeIndent(depth) + " called with sofar:", sofar,"rest:",rest)
  if( rest.length === 0 ){ 
    console.log("base case reached", rest); 
  } else { 
    for( var i = 0; i < rest.length; i++ ){ 
      var remaining = rest.slice(); 
      remaining.splice(i,1);  
      var next = sofar.slice();
      next.push(rest[i])
      recPerms2(next, remaining, depth+1); 
    } 
  }
}; 
     
var test0 = function(){
  recPerms([],['a','b','c']); 
}

//test0();

var test1 = function(){ 
  recPerms2([],['a','b','c'],0); 
}; 

test1(); 

  