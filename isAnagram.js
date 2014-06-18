var fs = require('fs');
var _ = require('underscore');



var isAnagram = function(word, dictionary){
  return isAnagram0('', word, dictionary);
};

var isAnagram0 = function(sofar, rest, dictionary){
  if( rest.length === 0 ){
    return dictionary[sofar];
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
  var dictionary = {};

  fs.readFile('wordsEn.txt', 'utf8', function(err, content){
    if( err ) {
      throw "error reading file";
    }
    var words = content.split("\n");
    words = _.map(words, function(word){
      return word.trim();
    });

    _.each(words, function(word){
      dictionary[word] = true;
    });

    console.log("expected true, got:",isAnagram('exit',dictionary));
    console.log("expected false, got:", isAnagram('wsft', dictionary));
  });
};


test0();

