function String(s){
  var length = ("" + s).length;
  this.concat = function(){
    return __String.concat.apply(s, arguments);
  }
  this.toLowerCase = function(){
    return __String.toLowerCase.call(s);
  }
  this.toUpperCase = function(){
    return __String.toUpperCase.call(s);
  }
  this.charCodeAt = function(f){
    return __String.charCodeAt.call(s,f);
  }
  this.fromCharCode = function(){
    return __String.fromCharCode.apply(s,arguments);
  }
  this.toString = this.valueOf = function(){
    return s;
  }
  this.charAt = function(f){
    return __String.charAt.call(s,f);
  }
  this.indexOf = function(searchstring, start){
    return __String.indexOf.call(s,searchstring, start);
  }
  this.lastIndexOf = function(searchstring, start){
    return __String.lastIndexOf.call(s, searchstring, start);
  }
  this.match = function(regexp){
    return __String.match.call(s,regexp);
  }
  this.replace = function(regexp, newstr){
    return __String.replace.call(s, regexp, newstr);
  }
  this.search = function(regexp){
    return __String.search.call(s,regexp);
  }
  this.slice = function(begin,end){
    return __String.slice.call(s,begin, end);
  }
  this.split = function(separator, limit){
    return __String.split.call(s,separator, limit);
  }
  this.substr = function(start,length){
    return __String.substr.call(s,start,length);
  }
  this.substring = function(from, to){
    return __String.substring.call(s,from, to);
  }
}
