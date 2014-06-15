var fs = require('fs'); 

var dictionary = {}; 

var populateDictionary = function(){ 
  
  fs.readFile('wordlist.txt', 'utf8', function(err, content){ 
    if( err ) { 
      throw "error reading file"; 
    } 
    var words = content.split("\n"); 
    for(var i = 0; i < words.length; i++ ){ 
      dictionary[words[i]] = true; 
    } 
  }); 
}; 

var isAnagram = function(word){ 
  return isAnagram0('', word);
} 

var isAnagram0 = function(sofar, rest){ 
  if( dictionary[sofar] ){ 
    return true; 
  } else { 
    for( var i = 0; i < rest.length; i++ ){ 
      var remaining = rest.substring(0,i) + rest.substring(i+1); 
      var next = sofar.substring(0) + rest.charAt(i);  
      if( isAnagram0(next, remaining, dictionary) ){ 
        return true; 
      } 
    }
  } 
  return false; 
}; 

var test0 = function(){ 
  populateDictionary(); 
  console.log(isAnagram('exit'));  
}; 

test0(); 

console.log( dictionary['exit'] ); 
    