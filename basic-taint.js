String.prototype.untaint = function(){
  this.__taint = false;
}
String.prototype.taint = function(){
  this.__taint = true;
}
String.prototype.isTainted = function(){
  if(this.__taint)
    return true;
  else
    return false;
}
var __String = String;
