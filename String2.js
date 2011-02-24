// create a proxy class to wrap another
Function.prototype.wrap = function(subClass, functions){
   var name = "__String";
   // wrap sub-class' prototype functions
   for (var i in subClass.prototype){
      if (subClass.prototype[i] instanceof(Function)){
         // but not instanceOf and typeOf
         if (i == 'instanceOf') continue;
         if (i == 'typeOf') continue;
         this.prototype[i] = new Function("return " + name + ".prototype." +
            i + ".apply(this." + name + ", arguments); "/* +
            "this.onMethodCall(" + name + ".prototype." + i + ",arguments);"*/);
      }
   } 
   // wrap any other user specified functions
   if (functions){
      for (i = 0; i < functions.length; i++){
         var f = functions[i];
         this.prototype[f] = new Function("return " + name + ".prototype." +
            f + ".apply(this." + name + ", arguments); "/* +
            "this.onMethodCall(" + name + ".prototype." + f + ",arguments);"*/);
      }
   }
   // provide default onMethodCall()
   if (!this.prototype.onMethodCall){
      this.prototype.onMethodCall = function(){};
   }
}
function String(value){
   // create String property - required by stub functions
   this.Str = value ? value.toString() : ''; 
   // implement length property
   this.length = this.Str.length;
}
// inherit from Object
//String.inherit(Object);
// wrap the String class
String.wrap(__String,
   ['anchor', 'big', 'blink', 'bold', 'charAt', 'charCodeAt', 'concat',
   'fixed', 'fontcolor', 'fontsize', 'fromCharCode', 'indexOf', 'italics',
   'lastIndexOf', 'link', 'localeCompare', 'match', 'replace', 'search',
   'slice', 'small', 'split', 'strike', 'sub', 'substr', 'substring',
   'sup', 'toLocaleLowerCase', 'toLocaleUpperCase', 'toLowerCase',
   'toUpperCase', 'toString', 'valueOf']);

