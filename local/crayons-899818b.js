/* #PRODUIRE{fond=crayons.js,callback=startCrayons}
   md5:29dddf6f0cad187c47358f54a9ca6ca1 */



/* cQuery est jQuery, renommee pour eviter tout conflit */


(function(global,factory){
if(typeof module==="object"&&typeof module.exports==="object"){
module.exports=global.document?
factory(global,true):
function(w){
if(!w.document){
throw new Error("cQuery requires a window with a document");
}
return factory(w);
};
}else{
factory(global);
}
}(typeof window!=="undefined"?window:this,function(window,noGlobal){
var deletedIds=[];
var document=window.document;
var slice=deletedIds.slice;
var concat=deletedIds.concat;
var push=deletedIds.push;
var indexOf=deletedIds.indexOf;
var class2type={};
var toString=class2type.toString;
var hasOwn=class2type.hasOwnProperty;
var support={};
var
version="1.12.4",
cQuery=function(selector,context){
return new cQuery.fn.init(selector,context);
},
rtrim=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
rmsPrefix=/^-ms-/,
rdashAlpha=/-([\da-z])/gi,
fcamelCase=function(all,letter){
return letter.toUpperCase();
};
cQuery.fn=cQuery.prototype={
jquery:version,
constructor:cQuery,
selector:"",
length:0,
toArray:function(){
return slice.call(this);
},
get:function(num){
return num!=null?
(num<0?this[num+this.length]:this[num]):
slice.call(this);
},
pushStack:function(elems){
var ret=cQuery.merge(this.constructor(),elems);
ret.prevObject=this;
ret.context=this.context;
return ret;
},
each:function(callback){
return cQuery.each(this,callback);
},
map:function(callback){
return this.pushStack(cQuery.map(this,function(elem,i){
return callback.call(elem,i,elem);
}));
},
slice:function(){
return this.pushStack(slice.apply(this,arguments));
},
first:function(){
return this.eq(0);
},
last:function(){
return this.eq(-1);
},
eq:function(i){
var len=this.length,
j=+i+(i<0?len:0);
return this.pushStack(j>=0&&j<len?[this[j]]:[]);
},
end:function(){
return this.prevObject||this.constructor();
},
push:push,
sort:deletedIds.sort,
splice:deletedIds.splice
};
cQuery.extend=cQuery.fn.extend=function(){
var src,copyIsArray,copy,name,options,clone,
target=arguments[0]||{},
i=1,
length=arguments.length,
deep=false;
if(typeof target==="boolean"){
deep=target;
target=arguments[i]||{};
i++;
}
if(typeof target!=="object"&&!cQuery.isFunction(target)){
target={};
}
if(i===length){
target=this;
i--;
}
for(;i<length;i++){
if((options=arguments[i])!=null){
for(name in options){
src=target[name];
copy=options[name];
if(target===copy){
continue;
}
if(deep&&copy&&(cQuery.isPlainObject(copy)||
(copyIsArray=cQuery.isArray(copy)))){
if(copyIsArray){
copyIsArray=false;
clone=src&&cQuery.isArray(src)?src:[];
}else{
clone=src&&cQuery.isPlainObject(src)?src:{};
}
target[name]=cQuery.extend(deep,clone,copy);
}else if(copy!==undefined){
target[name]=copy;
}
}
}
}
return target;
};
cQuery.extend({
expando:"cQuery"+(version+Math.random()).replace(/\D/g,""),
isReady:true,
error:function(msg){
throw new Error(msg);
},
noop:function(){},
isFunction:function(obj){
return cQuery.type(obj)==="function";
},
isArray:Array.isArray||function(obj){
return cQuery.type(obj)==="array";
},
isWindow:function(obj){
return obj!=null&&obj==obj.window;
},
isNumeric:function(obj){
var realStringObj=obj&&obj.toString();
return!cQuery.isArray(obj)&&(realStringObj-parseFloat(realStringObj)+1)>=0;
},
isEmptyObject:function(obj){
var name;
for(name in obj){
return false;
}
return true;
},
isPlainObject:function(obj){
var key;
if(!obj||cQuery.type(obj)!=="object"||obj.nodeType||cQuery.isWindow(obj)){
return false;
}
try{
if(obj.constructor&&
!hasOwn.call(obj,"constructor")&&
!hasOwn.call(obj.constructor.prototype,"isPrototypeOf")){
return false;
}
}catch(e){
return false;
}
if(!support.ownFirst){
for(key in obj){
return hasOwn.call(obj,key);
}
}
for(key in obj){}
return key===undefined||hasOwn.call(obj,key);
},
type:function(obj){
if(obj==null){
return obj+"";
}
return typeof obj==="object"||typeof obj==="function"?
class2type[toString.call(obj)]||"object":
typeof obj;
},
globalEval:function(data){
if(data&&cQuery.trim(data)){
(window.execScript||function(data){
window["eval"].call(window,data);
})(data);
}
},
camelCase:function(string){
return string.replace(rmsPrefix,"ms-").replace(rdashAlpha,fcamelCase);
},
nodeName:function(elem,name){
return elem.nodeName&&elem.nodeName.toLowerCase()===name.toLowerCase();
},
each:function(obj,callback){
var length,i=0;
if(isArrayLike(obj)){
length=obj.length;
for(;i<length;i++){
if(callback.call(obj[i],i,obj[i])===false){
break;
}
}
}else{
for(i in obj){
if(callback.call(obj[i],i,obj[i])===false){
break;
}
}
}
return obj;
},
trim:function(text){
return text==null?
"":
(text+"").replace(rtrim,"");
},
makeArray:function(arr,results){
var ret=results||[];
if(arr!=null){
if(isArrayLike(Object(arr))){
cQuery.merge(ret,
typeof arr==="string"?
[arr]:arr
);
}else{
push.call(ret,arr);
}
}
return ret;
},
inArray:function(elem,arr,i){
var len;
if(arr){
if(indexOf){
return indexOf.call(arr,elem,i);
}
len=arr.length;
i=i?i<0?Math.max(0,len+i):i:0;
for(;i<len;i++){
if(i in arr&&arr[i]===elem){
return i;
}
}
}
return-1;
},
merge:function(first,second){
var len=+second.length,
j=0,
i=first.length;
while(j<len){
first[i++]=second[j++];
}
if(len!==len){
while(second[j]!==undefined){
first[i++]=second[j++];
}
}
first.length=i;
return first;
},
grep:function(elems,callback,invert){
var callbackInverse,
matches=[],
i=0,
length=elems.length,
callbackExpect=!invert;
for(;i<length;i++){
callbackInverse=!callback(elems[i],i);
if(callbackInverse!==callbackExpect){
matches.push(elems[i]);
}
}
return matches;
},
map:function(elems,callback,arg){
var length,value,
i=0,
ret=[];
if(isArrayLike(elems)){
length=elems.length;
for(;i<length;i++){
value=callback(elems[i],i,arg);
if(value!=null){
ret.push(value);
}
}
}else{
for(i in elems){
value=callback(elems[i],i,arg);
if(value!=null){
ret.push(value);
}
}
}
return concat.apply([],ret);
},
guid:1,
proxy:function(fn,context){
var args,proxy,tmp;
if(typeof context==="string"){
tmp=fn[context];
context=fn;
fn=tmp;
}
if(!cQuery.isFunction(fn)){
return undefined;
}
args=slice.call(arguments,2);
proxy=function(){
return fn.apply(context||this,args.concat(slice.call(arguments)));
};
proxy.guid=fn.guid=fn.guid||cQuery.guid++;
return proxy;
},
now:function(){
return+(new Date());
},
support:support
});
if(typeof Symbol==="function"){
cQuery.fn[Symbol.iterator]=deletedIds[Symbol.iterator];
}
cQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),
function(i,name){
class2type["[object "+name+"]"]=name.toLowerCase();
});
function isArrayLike(obj){
var length=!!obj&&"length"in obj&&obj.length,
type=cQuery.type(obj);
if(type==="function"||cQuery.isWindow(obj)){
return false;
}
return type==="array"||length===0||
typeof length==="number"&&length>0&&(length-1)in obj;
}
var Sizzle=
(function(window){
var i,
support,
Expr,
getText,
isXML,
tokenize,
compile,
select,
outermostContext,
sortInput,
hasDuplicate,
setDocument,
document,
docElem,
documentIsHTML,
rbuggyQSA,
rbuggyMatches,
matches,
contains,
expando="sizzle"+1*new Date(),
preferredDoc=window.document,
dirruns=0,
done=0,
classCache=createCache(),
tokenCache=createCache(),
compilerCache=createCache(),
sortOrder=function(a,b){
if(a===b){
hasDuplicate=true;
}
return 0;
},
MAX_NEGATIVE=1<<31,
hasOwn=({}).hasOwnProperty,
arr=[],
pop=arr.pop,
push_native=arr.push,
push=arr.push,
slice=arr.slice,
indexOf=function(list,elem){
var i=0,
len=list.length;
for(;i<len;i++){
if(list[i]===elem){
return i;
}
}
return-1;
},
booleans="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
whitespace="[\\x20\\t\\r\\n\\f]",
identifier="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
attributes="\\["+whitespace+"*("+identifier+")(?:"+whitespace+
"*([*^$|!~]?=)"+whitespace+
"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+identifier+"))|)"+whitespace+
"*\\]",
pseudos=":("+identifier+")(?:\\(("+
"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|"+
"((?:\\\\.|[^\\\\()[\\]]|"+attributes+")*)|"+
".*"+
")\\)|)",
rwhitespace=new RegExp(whitespace+"+","g"),
rtrim=new RegExp("^"+whitespace+"+|((?:^|[^\\\\])(?:\\\\.)*)"+whitespace+"+$","g"),
rcomma=new RegExp("^"+whitespace+"*,"+whitespace+"*"),
rcombinators=new RegExp("^"+whitespace+"*([>+~]|"+whitespace+")"+whitespace+"*"),
rattributeQuotes=new RegExp("="+whitespace+"*([^\\]'\"]*?)"+whitespace+"*\\]","g"),
rpseudo=new RegExp(pseudos),
ridentifier=new RegExp("^"+identifier+"$"),
matchExpr={
"ID":new RegExp("^#("+identifier+")"),
"CLASS":new RegExp("^\\.("+identifier+")"),
"TAG":new RegExp("^("+identifier+"|[*])"),
"ATTR":new RegExp("^"+attributes),
"PSEUDO":new RegExp("^"+pseudos),
"CHILD":new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+whitespace+
"*(even|odd|(([+-]|)(\\d*)n|)"+whitespace+"*(?:([+-]|)"+whitespace+
"*(\\d+)|))"+whitespace+"*\\)|)","i"),
"bool":new RegExp("^(?:"+booleans+")$","i"),
"needsContext":new RegExp("^"+whitespace+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+
whitespace+"*((?:-\\d)?\\d*)"+whitespace+"*\\)|)(?=[^-]|$)","i")
},
rinputs=/^(?:input|select|textarea|button)$/i,
rheader=/^h\d$/i,
rnative=/^[^{]+\{\s*\[native \w/,
rquickExpr=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
rsibling=/[+~]/,
rescape=/'|\\/g,
runescape=new RegExp("\\\\([\\da-f]{1,6}"+whitespace+"?|("+whitespace+")|.)","ig"),
funescape=function(_,escaped,escapedWhitespace){
var high="0x"+escaped-0x10000;
return high!==high||escapedWhitespace?
escaped:
high<0?
String.fromCharCode(high+0x10000):
String.fromCharCode(high>>10|0xD800,high&0x3FF|0xDC00);
},
unloadHandler=function(){
setDocument();
};
try{
push.apply(
(arr=slice.call(preferredDoc.childNodes)),
preferredDoc.childNodes
);
arr[preferredDoc.childNodes.length].nodeType;
}catch(e){
push={apply:arr.length?
function(target,els){
push_native.apply(target,slice.call(els));
}:
function(target,els){
var j=target.length,
i=0;
while((target[j++]=els[i++])){}
target.length=j-1;
}
};
}
function Sizzle(selector,context,results,seed){
var m,i,elem,nid,nidselect,match,groups,newSelector,
newContext=context&&context.ownerDocument,
nodeType=context?context.nodeType:9;
results=results||[];
if(typeof selector!=="string"||!selector||
nodeType!==1&&nodeType!==9&&nodeType!==11){
return results;
}
if(!seed){
if((context?context.ownerDocument||context:preferredDoc)!==document){
setDocument(context);
}
context=context||document;
if(documentIsHTML){
if(nodeType!==11&&(match=rquickExpr.exec(selector))){
if((m=match[1])){
if(nodeType===9){
if((elem=context.getElementById(m))){
if(elem.id===m){
results.push(elem);
return results;
}
}else{
return results;
}
}else{
if(newContext&&(elem=newContext.getElementById(m))&&
contains(context,elem)&&
elem.id===m){
results.push(elem);
return results;
}
}
}else if(match[2]){
push.apply(results,context.getElementsByTagName(selector));
return results;
}else if((m=match[3])&&support.getElementsByClassName&&
context.getElementsByClassName){
push.apply(results,context.getElementsByClassName(m));
return results;
}
}
if(support.qsa&&
!compilerCache[selector+" "]&&
(!rbuggyQSA||!rbuggyQSA.test(selector))){
if(nodeType!==1){
newContext=context;
newSelector=selector;
}else if(context.nodeName.toLowerCase()!=="object"){
if((nid=context.getAttribute("id"))){
nid=nid.replace(rescape,"\\$&");
}else{
context.setAttribute("id",(nid=expando));
}
groups=tokenize(selector);
i=groups.length;
nidselect=ridentifier.test(nid)?"#"+nid:"[id='"+nid+"']";
while(i--){
groups[i]=nidselect+" "+toSelector(groups[i]);
}
newSelector=groups.join(",");
newContext=rsibling.test(selector)&&testContext(context.parentNode)||
context;
}
if(newSelector){
try{
push.apply(results,
newContext.querySelectorAll(newSelector)
);
return results;
}catch(qsaError){
}finally{
if(nid===expando){
context.removeAttribute("id");
}
}
}
}
}
}
return select(selector.replace(rtrim,"$1"),context,results,seed);
}
function createCache(){
var keys=[];
function cache(key,value){
if(keys.push(key+" ")>Expr.cacheLength){
delete cache[keys.shift()];
}
return(cache[key+" "]=value);
}
return cache;
}
function markFunction(fn){
fn[expando]=true;
return fn;
}
function assert(fn){
var div=document.createElement("div");
try{
return!!fn(div);
}catch(e){
return false;
}finally{
if(div.parentNode){
div.parentNode.removeChild(div);
}
div=null;
}
}
function addHandle(attrs,handler){
var arr=attrs.split("|"),
i=arr.length;
while(i--){
Expr.attrHandle[arr[i]]=handler;
}
}
function siblingCheck(a,b){
var cur=b&&a,
diff=cur&&a.nodeType===1&&b.nodeType===1&&
(~b.sourceIndex||MAX_NEGATIVE)-
(~a.sourceIndex||MAX_NEGATIVE);
if(diff){
return diff;
}
if(cur){
while((cur=cur.nextSibling)){
if(cur===b){
return-1;
}
}
}
return a?1:-1;
}
function createInputPseudo(type){
return function(elem){
var name=elem.nodeName.toLowerCase();
return name==="input"&&elem.type===type;
};
}
function createButtonPseudo(type){
return function(elem){
var name=elem.nodeName.toLowerCase();
return(name==="input"||name==="button")&&elem.type===type;
};
}
function createPositionalPseudo(fn){
return markFunction(function(argument){
argument=+argument;
return markFunction(function(seed,matches){
var j,
matchIndexes=fn([],seed.length,argument),
i=matchIndexes.length;
while(i--){
if(seed[(j=matchIndexes[i])]){
seed[j]=!(matches[j]=seed[j]);
}
}
});
});
}
function testContext(context){
return context&&typeof context.getElementsByTagName!=="undefined"&&context;
}
support=Sizzle.support={};
isXML=Sizzle.isXML=function(elem){
var documentElement=elem&&(elem.ownerDocument||elem).documentElement;
return documentElement?documentElement.nodeName!=="HTML":false;
};
setDocument=Sizzle.setDocument=function(node){
var hasCompare,parent,
doc=node?node.ownerDocument||node:preferredDoc;
if(doc===document||doc.nodeType!==9||!doc.documentElement){
return document;
}
document=doc;
docElem=document.documentElement;
documentIsHTML=!isXML(document);
if((parent=document.defaultView)&&parent.top!==parent){
if(parent.addEventListener){
parent.addEventListener("unload",unloadHandler,false);
}else if(parent.attachEvent){
parent.attachEvent("onunload",unloadHandler);
}
}
support.attributes=assert(function(div){
div.className="i";
return!div.getAttribute("className");
});
support.getElementsByTagName=assert(function(div){
div.appendChild(document.createComment(""));
return!div.getElementsByTagName("*").length;
});
support.getElementsByClassName=rnative.test(document.getElementsByClassName);
support.getById=assert(function(div){
docElem.appendChild(div).id=expando;
return!document.getElementsByName||!document.getElementsByName(expando).length;
});
if(support.getById){
Expr.find["ID"]=function(id,context){
if(typeof context.getElementById!=="undefined"&&documentIsHTML){
var m=context.getElementById(id);
return m?[m]:[];
}
};
Expr.filter["ID"]=function(id){
var attrId=id.replace(runescape,funescape);
return function(elem){
return elem.getAttribute("id")===attrId;
};
};
}else{
delete Expr.find["ID"];
Expr.filter["ID"]=function(id){
var attrId=id.replace(runescape,funescape);
return function(elem){
var node=typeof elem.getAttributeNode!=="undefined"&&
elem.getAttributeNode("id");
return node&&node.value===attrId;
};
};
}
Expr.find["TAG"]=support.getElementsByTagName?
function(tag,context){
if(typeof context.getElementsByTagName!=="undefined"){
return context.getElementsByTagName(tag);
}else if(support.qsa){
return context.querySelectorAll(tag);
}
}:
function(tag,context){
var elem,
tmp=[],
i=0,
results=context.getElementsByTagName(tag);
if(tag==="*"){
while((elem=results[i++])){
if(elem.nodeType===1){
tmp.push(elem);
}
}
return tmp;
}
return results;
};
Expr.find["CLASS"]=support.getElementsByClassName&&function(className,context){
if(typeof context.getElementsByClassName!=="undefined"&&documentIsHTML){
return context.getElementsByClassName(className);
}
};
rbuggyMatches=[];
rbuggyQSA=[];
if((support.qsa=rnative.test(document.querySelectorAll))){
assert(function(div){
docElem.appendChild(div).innerHTML="<a id='"+expando+"'></a>"+
"<select id='"+expando+"-\r\\' msallowcapture=''>"+
"<option selected=''></option></select>";
if(div.querySelectorAll("[msallowcapture^='']").length){
rbuggyQSA.push("[*^$]="+whitespace+"*(?:''|\"\")");
}
if(!div.querySelectorAll("[selected]").length){
rbuggyQSA.push("\\["+whitespace+"*(?:value|"+booleans+")");
}
if(!div.querySelectorAll("[id~="+expando+"-]").length){
rbuggyQSA.push("~=");
}
if(!div.querySelectorAll(":checked").length){
rbuggyQSA.push(":checked");
}
if(!div.querySelectorAll("a#"+expando+"+*").length){
rbuggyQSA.push(".#.+[+~]");
}
});
assert(function(div){
var input=document.createElement("input");
input.setAttribute("type","hidden");
div.appendChild(input).setAttribute("name","D");
if(div.querySelectorAll("[name=d]").length){
rbuggyQSA.push("name"+whitespace+"*[*^$|!~]?=");
}
if(!div.querySelectorAll(":enabled").length){
rbuggyQSA.push(":enabled",":disabled");
}
div.querySelectorAll("*,:x");
rbuggyQSA.push(",.*:");
});
}
if((support.matchesSelector=rnative.test((matches=docElem.matches||
docElem.webkitMatchesSelector||
docElem.mozMatchesSelector||
docElem.oMatchesSelector||
docElem.msMatchesSelector)))){
assert(function(div){
support.disconnectedMatch=matches.call(div,"div");
matches.call(div,"[s!='']:x");
rbuggyMatches.push("!=",pseudos);
});
}
rbuggyQSA=rbuggyQSA.length&&new RegExp(rbuggyQSA.join("|"));
rbuggyMatches=rbuggyMatches.length&&new RegExp(rbuggyMatches.join("|"));
hasCompare=rnative.test(docElem.compareDocumentPosition);
contains=hasCompare||rnative.test(docElem.contains)?
function(a,b){
var adown=a.nodeType===9?a.documentElement:a,
bup=b&&b.parentNode;
return a===bup||!!(bup&&bup.nodeType===1&&(
adown.contains?
adown.contains(bup):
a.compareDocumentPosition&&a.compareDocumentPosition(bup)&16
));
}:
function(a,b){
if(b){
while((b=b.parentNode)){
if(b===a){
return true;
}
}
}
return false;
};
sortOrder=hasCompare?
function(a,b){
if(a===b){
hasDuplicate=true;
return 0;
}
var compare=!a.compareDocumentPosition-!b.compareDocumentPosition;
if(compare){
return compare;
}
compare=(a.ownerDocument||a)===(b.ownerDocument||b)?
a.compareDocumentPosition(b):
1;
if(compare&1||
(!support.sortDetached&&b.compareDocumentPosition(a)===compare)){
if(a===document||a.ownerDocument===preferredDoc&&contains(preferredDoc,a)){
return-1;
}
if(b===document||b.ownerDocument===preferredDoc&&contains(preferredDoc,b)){
return 1;
}
return sortInput?
(indexOf(sortInput,a)-indexOf(sortInput,b)):
0;
}
return compare&4?-1:1;
}:
function(a,b){
if(a===b){
hasDuplicate=true;
return 0;
}
var cur,
i=0,
aup=a.parentNode,
bup=b.parentNode,
ap=[a],
bp=[b];
if(!aup||!bup){
return a===document?-1:
b===document?1:
aup?-1:
bup?1:
sortInput?
(indexOf(sortInput,a)-indexOf(sortInput,b)):
0;
}else if(aup===bup){
return siblingCheck(a,b);
}
cur=a;
while((cur=cur.parentNode)){
ap.unshift(cur);
}
cur=b;
while((cur=cur.parentNode)){
bp.unshift(cur);
}
while(ap[i]===bp[i]){
i++;
}
return i?
siblingCheck(ap[i],bp[i]):
ap[i]===preferredDoc?-1:
bp[i]===preferredDoc?1:
0;
};
return document;
};
Sizzle.matches=function(expr,elements){
return Sizzle(expr,null,null,elements);
};
Sizzle.matchesSelector=function(elem,expr){
if((elem.ownerDocument||elem)!==document){
setDocument(elem);
}
expr=expr.replace(rattributeQuotes,"='$1']");
if(support.matchesSelector&&documentIsHTML&&
!compilerCache[expr+" "]&&
(!rbuggyMatches||!rbuggyMatches.test(expr))&&
(!rbuggyQSA||!rbuggyQSA.test(expr))){
try{
var ret=matches.call(elem,expr);
if(ret||support.disconnectedMatch||
elem.document&&elem.document.nodeType!==11){
return ret;
}
}catch(e){}
}
return Sizzle(expr,document,null,[elem]).length>0;
};
Sizzle.contains=function(context,elem){
if((context.ownerDocument||context)!==document){
setDocument(context);
}
return contains(context,elem);
};
Sizzle.attr=function(elem,name){
if((elem.ownerDocument||elem)!==document){
setDocument(elem);
}
var fn=Expr.attrHandle[name.toLowerCase()],
val=fn&&hasOwn.call(Expr.attrHandle,name.toLowerCase())?
fn(elem,name,!documentIsHTML):
undefined;
return val!==undefined?
val:
support.attributes||!documentIsHTML?
elem.getAttribute(name):
(val=elem.getAttributeNode(name))&&val.specified?
val.value:
null;
};
Sizzle.error=function(msg){
throw new Error("Syntax error, unrecognized expression: "+msg);
};
Sizzle.uniqueSort=function(results){
var elem,
duplicates=[],
j=0,
i=0;
hasDuplicate=!support.detectDuplicates;
sortInput=!support.sortStable&&results.slice(0);
results.sort(sortOrder);
if(hasDuplicate){
while((elem=results[i++])){
if(elem===results[i]){
j=duplicates.push(i);
}
}
while(j--){
results.splice(duplicates[j],1);
}
}
sortInput=null;
return results;
};
getText=Sizzle.getText=function(elem){
var node,
ret="",
i=0,
nodeType=elem.nodeType;
if(!nodeType){
while((node=elem[i++])){
ret+=getText(node);
}
}else if(nodeType===1||nodeType===9||nodeType===11){
if(typeof elem.textContent==="string"){
return elem.textContent;
}else{
for(elem=elem.firstChild;elem;elem=elem.nextSibling){
ret+=getText(elem);
}
}
}else if(nodeType===3||nodeType===4){
return elem.nodeValue;
}
return ret;
};
Expr=Sizzle.selectors={
cacheLength:50,
createPseudo:markFunction,
match:matchExpr,
attrHandle:{},
find:{},
relative:{
">":{dir:"parentNode",first:true},
" ":{dir:"parentNode"},
"+":{dir:"previousSibling",first:true},
"~":{dir:"previousSibling"}
},
preFilter:{
"ATTR":function(match){
match[1]=match[1].replace(runescape,funescape);
match[3]=(match[3]||match[4]||match[5]||"").replace(runescape,funescape);
if(match[2]==="~="){
match[3]=" "+match[3]+" ";
}
return match.slice(0,4);
},
"CHILD":function(match){
match[1]=match[1].toLowerCase();
if(match[1].slice(0,3)==="nth"){
if(!match[3]){
Sizzle.error(match[0]);
}
match[4]=+(match[4]?match[5]+(match[6]||1):2*(match[3]==="even"||match[3]==="odd"));
match[5]=+((match[7]+match[8])||match[3]==="odd");
}else if(match[3]){
Sizzle.error(match[0]);
}
return match;
},
"PSEUDO":function(match){
var excess,
unquoted=!match[6]&&match[2];
if(matchExpr["CHILD"].test(match[0])){
return null;
}
if(match[3]){
match[2]=match[4]||match[5]||"";
}else if(unquoted&&rpseudo.test(unquoted)&&
(excess=tokenize(unquoted,true))&&
(excess=unquoted.indexOf(")",unquoted.length-excess)-unquoted.length)){
match[0]=match[0].slice(0,excess);
match[2]=unquoted.slice(0,excess);
}
return match.slice(0,3);
}
},
filter:{
"TAG":function(nodeNameSelector){
var nodeName=nodeNameSelector.replace(runescape,funescape).toLowerCase();
return nodeNameSelector==="*"?
function(){return true;}:
function(elem){
return elem.nodeName&&elem.nodeName.toLowerCase()===nodeName;
};
},
"CLASS":function(className){
var pattern=classCache[className+" "];
return pattern||
(pattern=new RegExp("(^|"+whitespace+")"+className+"("+whitespace+"|$)"))&&
classCache(className,function(elem){
return pattern.test(typeof elem.className==="string"&&elem.className||typeof elem.getAttribute!=="undefined"&&elem.getAttribute("class")||"");
});
},
"ATTR":function(name,operator,check){
return function(elem){
var result=Sizzle.attr(elem,name);
if(result==null){
return operator==="!=";
}
if(!operator){
return true;
}
result+="";
return operator==="="?result===check:
operator==="!="?result!==check:
operator==="^="?check&&result.indexOf(check)===0:
operator==="*="?check&&result.indexOf(check)>-1:
operator==="$="?check&&result.slice(-check.length)===check:
operator==="~="?(" "+result.replace(rwhitespace," ")+" ").indexOf(check)>-1:
operator==="|="?result===check||result.slice(0,check.length+1)===check+"-":
false;
};
},
"CHILD":function(type,what,argument,first,last){
var simple=type.slice(0,3)!=="nth",
forward=type.slice(-4)!=="last",
ofType=what==="of-type";
return first===1&&last===0?
function(elem){
return!!elem.parentNode;
}:
function(elem,context,xml){
var cache,uniqueCache,outerCache,node,nodeIndex,start,
dir=simple!==forward?"nextSibling":"previousSibling",
parent=elem.parentNode,
name=ofType&&elem.nodeName.toLowerCase(),
useCache=!xml&&!ofType,
diff=false;
if(parent){
if(simple){
while(dir){
node=elem;
while((node=node[dir])){
if(ofType?
node.nodeName.toLowerCase()===name:
node.nodeType===1){
return false;
}
}
start=dir=type==="only"&&!start&&"nextSibling";
}
return true;
}
start=[forward?parent.firstChild:parent.lastChild];
if(forward&&useCache){
node=parent;
outerCache=node[expando]||(node[expando]={});
uniqueCache=outerCache[node.uniqueID]||
(outerCache[node.uniqueID]={});
cache=uniqueCache[type]||[];
nodeIndex=cache[0]===dirruns&&cache[1];
diff=nodeIndex&&cache[2];
node=nodeIndex&&parent.childNodes[nodeIndex];
while((node=++nodeIndex&&node&&node[dir]||
(diff=nodeIndex=0)||start.pop())){
if(node.nodeType===1&&++diff&&node===elem){
uniqueCache[type]=[dirruns,nodeIndex,diff];
break;
}
}
}else{
if(useCache){
node=elem;
outerCache=node[expando]||(node[expando]={});
uniqueCache=outerCache[node.uniqueID]||
(outerCache[node.uniqueID]={});
cache=uniqueCache[type]||[];
nodeIndex=cache[0]===dirruns&&cache[1];
diff=nodeIndex;
}
if(diff===false){
while((node=++nodeIndex&&node&&node[dir]||
(diff=nodeIndex=0)||start.pop())){
if((ofType?
node.nodeName.toLowerCase()===name:
node.nodeType===1)&&
++diff){
if(useCache){
outerCache=node[expando]||(node[expando]={});
uniqueCache=outerCache[node.uniqueID]||
(outerCache[node.uniqueID]={});
uniqueCache[type]=[dirruns,diff];
}
if(node===elem){
break;
}
}
}
}
}
diff-=last;
return diff===first||(diff%first===0&&diff/first>=0);
}
};
},
"PSEUDO":function(pseudo,argument){
var args,
fn=Expr.pseudos[pseudo]||Expr.setFilters[pseudo.toLowerCase()]||
Sizzle.error("unsupported pseudo: "+pseudo);
if(fn[expando]){
return fn(argument);
}
if(fn.length>1){
args=[pseudo,pseudo,"",argument];
return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase())?
markFunction(function(seed,matches){
var idx,
matched=fn(seed,argument),
i=matched.length;
while(i--){
idx=indexOf(seed,matched[i]);
seed[idx]=!(matches[idx]=matched[i]);
}
}):
function(elem){
return fn(elem,0,args);
};
}
return fn;
}
},
pseudos:{
"not":markFunction(function(selector){
var input=[],
results=[],
matcher=compile(selector.replace(rtrim,"$1"));
return matcher[expando]?
markFunction(function(seed,matches,context,xml){
var elem,
unmatched=matcher(seed,null,xml,[]),
i=seed.length;
while(i--){
if((elem=unmatched[i])){
seed[i]=!(matches[i]=elem);
}
}
}):
function(elem,context,xml){
input[0]=elem;
matcher(input,null,xml,results);
input[0]=null;
return!results.pop();
};
}),
"has":markFunction(function(selector){
return function(elem){
return Sizzle(selector,elem).length>0;
};
}),
"contains":markFunction(function(text){
text=text.replace(runescape,funescape);
return function(elem){
return(elem.textContent||elem.innerText||getText(elem)).indexOf(text)>-1;
};
}),
"lang":markFunction(function(lang){
if(!ridentifier.test(lang||"")){
Sizzle.error("unsupported lang: "+lang);
}
lang=lang.replace(runescape,funescape).toLowerCase();
return function(elem){
var elemLang;
do{
if((elemLang=documentIsHTML?
elem.lang:
elem.getAttribute("xml:lang")||elem.getAttribute("lang"))){
elemLang=elemLang.toLowerCase();
return elemLang===lang||elemLang.indexOf(lang+"-")===0;
}
}while((elem=elem.parentNode)&&elem.nodeType===1);
return false;
};
}),
"target":function(elem){
var hash=window.location&&window.location.hash;
return hash&&hash.slice(1)===elem.id;
},
"root":function(elem){
return elem===docElem;
},
"focus":function(elem){
return elem===document.activeElement&&(!document.hasFocus||document.hasFocus())&&!!(elem.type||elem.href||~elem.tabIndex);
},
"enabled":function(elem){
return elem.disabled===false;
},
"disabled":function(elem){
return elem.disabled===true;
},
"checked":function(elem){
var nodeName=elem.nodeName.toLowerCase();
return(nodeName==="input"&&!!elem.checked)||(nodeName==="option"&&!!elem.selected);
},
"selected":function(elem){
if(elem.parentNode){
elem.parentNode.selectedIndex;
}
return elem.selected===true;
},
"empty":function(elem){
for(elem=elem.firstChild;elem;elem=elem.nextSibling){
if(elem.nodeType<6){
return false;
}
}
return true;
},
"parent":function(elem){
return!Expr.pseudos["empty"](elem);
},
"header":function(elem){
return rheader.test(elem.nodeName);
},
"input":function(elem){
return rinputs.test(elem.nodeName);
},
"button":function(elem){
var name=elem.nodeName.toLowerCase();
return name==="input"&&elem.type==="button"||name==="button";
},
"text":function(elem){
var attr;
return elem.nodeName.toLowerCase()==="input"&&
elem.type==="text"&&
((attr=elem.getAttribute("type"))==null||attr.toLowerCase()==="text");
},
"first":createPositionalPseudo(function(){
return[0];
}),
"last":createPositionalPseudo(function(matchIndexes,length){
return[length-1];
}),
"eq":createPositionalPseudo(function(matchIndexes,length,argument){
return[argument<0?argument+length:argument];
}),
"even":createPositionalPseudo(function(matchIndexes,length){
var i=0;
for(;i<length;i+=2){
matchIndexes.push(i);
}
return matchIndexes;
}),
"odd":createPositionalPseudo(function(matchIndexes,length){
var i=1;
for(;i<length;i+=2){
matchIndexes.push(i);
}
return matchIndexes;
}),
"lt":createPositionalPseudo(function(matchIndexes,length,argument){
var i=argument<0?argument+length:argument;
for(;--i>=0;){
matchIndexes.push(i);
}
return matchIndexes;
}),
"gt":createPositionalPseudo(function(matchIndexes,length,argument){
var i=argument<0?argument+length:argument;
for(;++i<length;){
matchIndexes.push(i);
}
return matchIndexes;
})
}
};
Expr.pseudos["nth"]=Expr.pseudos["eq"];
for(i in{radio:true,checkbox:true,file:true,password:true,image:true}){
Expr.pseudos[i]=createInputPseudo(i);
}
for(i in{submit:true,reset:true}){
Expr.pseudos[i]=createButtonPseudo(i);
}
function setFilters(){}
setFilters.prototype=Expr.filters=Expr.pseudos;
Expr.setFilters=new setFilters();
tokenize=Sizzle.tokenize=function(selector,parseOnly){
var matched,match,tokens,type,
soFar,groups,preFilters,
cached=tokenCache[selector+" "];
if(cached){
return parseOnly?0:cached.slice(0);
}
soFar=selector;
groups=[];
preFilters=Expr.preFilter;
while(soFar){
if(!matched||(match=rcomma.exec(soFar))){
if(match){
soFar=soFar.slice(match[0].length)||soFar;
}
groups.push((tokens=[]));
}
matched=false;
if((match=rcombinators.exec(soFar))){
matched=match.shift();
tokens.push({
value:matched,
type:match[0].replace(rtrim," ")
});
soFar=soFar.slice(matched.length);
}
for(type in Expr.filter){
if((match=matchExpr[type].exec(soFar))&&(!preFilters[type]||
(match=preFilters[type](match)))){
matched=match.shift();
tokens.push({
value:matched,
type:type,
matches:match
});
soFar=soFar.slice(matched.length);
}
}
if(!matched){
break;
}
}
return parseOnly?
soFar.length:
soFar?
Sizzle.error(selector):
tokenCache(selector,groups).slice(0);
};
function toSelector(tokens){
var i=0,
len=tokens.length,
selector="";
for(;i<len;i++){
selector+=tokens[i].value;
}
return selector;
}
function addCombinator(matcher,combinator,base){
var dir=combinator.dir,
checkNonElements=base&&dir==="parentNode",
doneName=done++;
return combinator.first?
function(elem,context,xml){
while((elem=elem[dir])){
if(elem.nodeType===1||checkNonElements){
return matcher(elem,context,xml);
}
}
}:
function(elem,context,xml){
var oldCache,uniqueCache,outerCache,
newCache=[dirruns,doneName];
if(xml){
while((elem=elem[dir])){
if(elem.nodeType===1||checkNonElements){
if(matcher(elem,context,xml)){
return true;
}
}
}
}else{
while((elem=elem[dir])){
if(elem.nodeType===1||checkNonElements){
outerCache=elem[expando]||(elem[expando]={});
uniqueCache=outerCache[elem.uniqueID]||(outerCache[elem.uniqueID]={});
if((oldCache=uniqueCache[dir])&&
oldCache[0]===dirruns&&oldCache[1]===doneName){
return(newCache[2]=oldCache[2]);
}else{
uniqueCache[dir]=newCache;
if((newCache[2]=matcher(elem,context,xml))){
return true;
}
}
}
}
}
};
}
function elementMatcher(matchers){
return matchers.length>1?
function(elem,context,xml){
var i=matchers.length;
while(i--){
if(!matchers[i](elem,context,xml)){
return false;
}
}
return true;
}:
matchers[0];
}
function multipleContexts(selector,contexts,results){
var i=0,
len=contexts.length;
for(;i<len;i++){
Sizzle(selector,contexts[i],results);
}
return results;
}
function condense(unmatched,map,filter,context,xml){
var elem,
newUnmatched=[],
i=0,
len=unmatched.length,
mapped=map!=null;
for(;i<len;i++){
if((elem=unmatched[i])){
if(!filter||filter(elem,context,xml)){
newUnmatched.push(elem);
if(mapped){
map.push(i);
}
}
}
}
return newUnmatched;
}
function setMatcher(preFilter,selector,matcher,postFilter,postFinder,postSelector){
if(postFilter&&!postFilter[expando]){
postFilter=setMatcher(postFilter);
}
if(postFinder&&!postFinder[expando]){
postFinder=setMatcher(postFinder,postSelector);
}
return markFunction(function(seed,results,context,xml){
var temp,i,elem,
preMap=[],
postMap=[],
preexisting=results.length,
elems=seed||multipleContexts(selector||"*",context.nodeType?[context]:context,[]),
matcherIn=preFilter&&(seed||!selector)?
condense(elems,preMap,preFilter,context,xml):
elems,
matcherOut=matcher?
postFinder||(seed?preFilter:preexisting||postFilter)?
[]:
results:
matcherIn;
if(matcher){
matcher(matcherIn,matcherOut,context,xml);
}
if(postFilter){
temp=condense(matcherOut,postMap);
postFilter(temp,[],context,xml);
i=temp.length;
while(i--){
if((elem=temp[i])){
matcherOut[postMap[i]]=!(matcherIn[postMap[i]]=elem);
}
}
}
if(seed){
if(postFinder||preFilter){
if(postFinder){
temp=[];
i=matcherOut.length;
while(i--){
if((elem=matcherOut[i])){
temp.push((matcherIn[i]=elem));
}
}
postFinder(null,(matcherOut=[]),temp,xml);
}
i=matcherOut.length;
while(i--){
if((elem=matcherOut[i])&&
(temp=postFinder?indexOf(seed,elem):preMap[i])>-1){
seed[temp]=!(results[temp]=elem);
}
}
}
}else{
matcherOut=condense(
matcherOut===results?
matcherOut.splice(preexisting,matcherOut.length):
matcherOut
);
if(postFinder){
postFinder(null,results,matcherOut,xml);
}else{
push.apply(results,matcherOut);
}
}
});
}
function matcherFromTokens(tokens){
var checkContext,matcher,j,
len=tokens.length,
leadingRelative=Expr.relative[tokens[0].type],
implicitRelative=leadingRelative||Expr.relative[" "],
i=leadingRelative?1:0,
matchContext=addCombinator(function(elem){
return elem===checkContext;
},implicitRelative,true),
matchAnyContext=addCombinator(function(elem){
return indexOf(checkContext,elem)>-1;
},implicitRelative,true),
matchers=[function(elem,context,xml){
var ret=(!leadingRelative&&(xml||context!==outermostContext))||(
(checkContext=context).nodeType?
matchContext(elem,context,xml):
matchAnyContext(elem,context,xml));
checkContext=null;
return ret;
}];
for(;i<len;i++){
if((matcher=Expr.relative[tokens[i].type])){
matchers=[addCombinator(elementMatcher(matchers),matcher)];
}else{
matcher=Expr.filter[tokens[i].type].apply(null,tokens[i].matches);
if(matcher[expando]){
j=++i;
for(;j<len;j++){
if(Expr.relative[tokens[j].type]){
break;
}
}
return setMatcher(
i>1&&elementMatcher(matchers),
i>1&&toSelector(
tokens.slice(0,i-1).concat({value:tokens[i-2].type===" "?"*":""})
).replace(rtrim,"$1"),
matcher,
i<j&&matcherFromTokens(tokens.slice(i,j)),
j<len&&matcherFromTokens((tokens=tokens.slice(j))),
j<len&&toSelector(tokens)
);
}
matchers.push(matcher);
}
}
return elementMatcher(matchers);
}
function matcherFromGroupMatchers(elementMatchers,setMatchers){
var bySet=setMatchers.length>0,
byElement=elementMatchers.length>0,
superMatcher=function(seed,context,xml,results,outermost){
var elem,j,matcher,
matchedCount=0,
i="0",
unmatched=seed&&[],
setMatched=[],
contextBackup=outermostContext,
elems=seed||byElement&&Expr.find["TAG"]("*",outermost),
dirrunsUnique=(dirruns+=contextBackup==null?1:Math.random()||0.1),
len=elems.length;
if(outermost){
outermostContext=context===document||context||outermost;
}
for(;i!==len&&(elem=elems[i])!=null;i++){
if(byElement&&elem){
j=0;
if(!context&&elem.ownerDocument!==document){
setDocument(elem);
xml=!documentIsHTML;
}
while((matcher=elementMatchers[j++])){
if(matcher(elem,context||document,xml)){
results.push(elem);
break;
}
}
if(outermost){
dirruns=dirrunsUnique;
}
}
if(bySet){
if((elem=!matcher&&elem)){
matchedCount--;
}
if(seed){
unmatched.push(elem);
}
}
}
matchedCount+=i;
if(bySet&&i!==matchedCount){
j=0;
while((matcher=setMatchers[j++])){
matcher(unmatched,setMatched,context,xml);
}
if(seed){
if(matchedCount>0){
while(i--){
if(!(unmatched[i]||setMatched[i])){
setMatched[i]=pop.call(results);
}
}
}
setMatched=condense(setMatched);
}
push.apply(results,setMatched);
if(outermost&&!seed&&setMatched.length>0&&
(matchedCount+setMatchers.length)>1){
Sizzle.uniqueSort(results);
}
}
if(outermost){
dirruns=dirrunsUnique;
outermostContext=contextBackup;
}
return unmatched;
};
return bySet?
markFunction(superMatcher):
superMatcher;
}
compile=Sizzle.compile=function(selector,match){
var i,
setMatchers=[],
elementMatchers=[],
cached=compilerCache[selector+" "];
if(!cached){
if(!match){
match=tokenize(selector);
}
i=match.length;
while(i--){
cached=matcherFromTokens(match[i]);
if(cached[expando]){
setMatchers.push(cached);
}else{
elementMatchers.push(cached);
}
}
cached=compilerCache(selector,matcherFromGroupMatchers(elementMatchers,setMatchers));
cached.selector=selector;
}
return cached;
};
select=Sizzle.select=function(selector,context,results,seed){
var i,tokens,token,type,find,
compiled=typeof selector==="function"&&selector,
match=!seed&&tokenize((selector=compiled.selector||selector));
results=results||[];
if(match.length===1){
tokens=match[0]=match[0].slice(0);
if(tokens.length>2&&(token=tokens[0]).type==="ID"&&
support.getById&&context.nodeType===9&&documentIsHTML&&
Expr.relative[tokens[1].type]){
context=(Expr.find["ID"](token.matches[0].replace(runescape,funescape),context)||[])[0];
if(!context){
return results;
}else if(compiled){
context=context.parentNode;
}
selector=selector.slice(tokens.shift().value.length);
}
i=matchExpr["needsContext"].test(selector)?0:tokens.length;
while(i--){
token=tokens[i];
if(Expr.relative[(type=token.type)]){
break;
}
if((find=Expr.find[type])){
if((seed=find(
token.matches[0].replace(runescape,funescape),
rsibling.test(tokens[0].type)&&testContext(context.parentNode)||context
))){
tokens.splice(i,1);
selector=seed.length&&toSelector(tokens);
if(!selector){
push.apply(results,seed);
return results;
}
break;
}
}
}
}
(compiled||compile(selector,match))(
seed,
context,
!documentIsHTML,
results,
!context||rsibling.test(selector)&&testContext(context.parentNode)||context
);
return results;
};
support.sortStable=expando.split("").sort(sortOrder).join("")===expando;
support.detectDuplicates=!!hasDuplicate;
setDocument();
support.sortDetached=assert(function(div1){
return div1.compareDocumentPosition(document.createElement("div"))&1;
});
if(!assert(function(div){
div.innerHTML="<a href='#'></a>";
return div.firstChild.getAttribute("href")==="#";
})){
addHandle("type|href|height|width",function(elem,name,isXML){
if(!isXML){
return elem.getAttribute(name,name.toLowerCase()==="type"?1:2);
}
});
}
if(!support.attributes||!assert(function(div){
div.innerHTML="<input/>";
div.firstChild.setAttribute("value","");
return div.firstChild.getAttribute("value")==="";
})){
addHandle("value",function(elem,name,isXML){
if(!isXML&&elem.nodeName.toLowerCase()==="input"){
return elem.defaultValue;
}
});
}
if(!assert(function(div){
return div.getAttribute("disabled")==null;
})){
addHandle(booleans,function(elem,name,isXML){
var val;
if(!isXML){
return elem[name]===true?name.toLowerCase():
(val=elem.getAttributeNode(name))&&val.specified?
val.value:
null;
}
});
}
return Sizzle;
})(window);
cQuery.find=Sizzle;
cQuery.expr=Sizzle.selectors;
cQuery.expr[":"]=cQuery.expr.pseudos;
cQuery.uniqueSort=cQuery.unique=Sizzle.uniqueSort;
cQuery.text=Sizzle.getText;
cQuery.isXMLDoc=Sizzle.isXML;
cQuery.contains=Sizzle.contains;
var dir=function(elem,dir,until){
var matched=[],
truncate=until!==undefined;
while((elem=elem[dir])&&elem.nodeType!==9){
if(elem.nodeType===1){
if(truncate&&cQuery(elem).is(until)){
break;
}
matched.push(elem);
}
}
return matched;
};
var siblings=function(n,elem){
var matched=[];
for(;n;n=n.nextSibling){
if(n.nodeType===1&&n!==elem){
matched.push(n);
}
}
return matched;
};
var rneedsContext=cQuery.expr.match.needsContext;
var rsingleTag=(/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/);
var risSimple=/^.[^:#\[\.,]*$/;
function winnow(elements,qualifier,not){
if(cQuery.isFunction(qualifier)){
return cQuery.grep(elements,function(elem,i){
return!!qualifier.call(elem,i,elem)!==not;
});
}
if(qualifier.nodeType){
return cQuery.grep(elements,function(elem){
return(elem===qualifier)!==not;
});
}
if(typeof qualifier==="string"){
if(risSimple.test(qualifier)){
return cQuery.filter(qualifier,elements,not);
}
qualifier=cQuery.filter(qualifier,elements);
}
return cQuery.grep(elements,function(elem){
return(cQuery.inArray(elem,qualifier)>-1)!==not;
});
}
cQuery.filter=function(expr,elems,not){
var elem=elems[0];
if(not){
expr=":not("+expr+")";
}
return elems.length===1&&elem.nodeType===1?
cQuery.find.matchesSelector(elem,expr)?[elem]:[]:
cQuery.find.matches(expr,cQuery.grep(elems,function(elem){
return elem.nodeType===1;
}));
};
cQuery.fn.extend({
find:function(selector){
var i,
ret=[],
self=this,
len=self.length;
if(typeof selector!=="string"){
return this.pushStack(cQuery(selector).filter(function(){
for(i=0;i<len;i++){
if(cQuery.contains(self[i],this)){
return true;
}
}
}));
}
for(i=0;i<len;i++){
cQuery.find(selector,self[i],ret);
}
ret=this.pushStack(len>1?cQuery.unique(ret):ret);
ret.selector=this.selector?this.selector+" "+selector:selector;
return ret;
},
filter:function(selector){
return this.pushStack(winnow(this,selector||[],false));
},
not:function(selector){
return this.pushStack(winnow(this,selector||[],true));
},
is:function(selector){
return!!winnow(
this,
typeof selector==="string"&&rneedsContext.test(selector)?
cQuery(selector):
selector||[],
false
).length;
}
});
var rootcQuery,
rquickExpr=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
init=cQuery.fn.init=function(selector,context,root){
var match,elem;
if(!selector){
return this;
}
root=root||rootcQuery;
if(typeof selector==="string"){
if(selector.charAt(0)==="<"&&
selector.charAt(selector.length-1)===">"&&
selector.length>=3){
match=[null,selector,null];
}else{
match=rquickExpr.exec(selector);
}
if(match&&(match[1]||!context)){
if(match[1]){
context=context instanceof cQuery?context[0]:context;
cQuery.merge(this,cQuery.parseHTML(
match[1],
context&&context.nodeType?context.ownerDocument||context:document,
true
));
if(rsingleTag.test(match[1])&&cQuery.isPlainObject(context)){
for(match in context){
if(cQuery.isFunction(this[match])){
this[match](context[match]);
}else{
this.attr(match,context[match]);
}
}
}
return this;
}else{
elem=document.getElementById(match[2]);
if(elem&&elem.parentNode){
if(elem.id!==match[2]){
return rootcQuery.find(selector);
}
this.length=1;
this[0]=elem;
}
this.context=document;
this.selector=selector;
return this;
}
}else if(!context||context.jquery){
return(context||root).find(selector);
}else{
return this.constructor(context).find(selector);
}
}else if(selector.nodeType){
this.context=this[0]=selector;
this.length=1;
return this;
}else if(cQuery.isFunction(selector)){
return typeof root.ready!=="undefined"?
root.ready(selector):
selector(cQuery);
}
if(selector.selector!==undefined){
this.selector=selector.selector;
this.context=selector.context;
}
return cQuery.makeArray(selector,this);
};
init.prototype=cQuery.fn;
rootcQuery=cQuery(document);
var rparentsprev=/^(?:parents|prev(?:Until|All))/,
guaranteedUnique={
children:true,
contents:true,
next:true,
prev:true
};
cQuery.fn.extend({
has:function(target){
var i,
targets=cQuery(target,this),
len=targets.length;
return this.filter(function(){
for(i=0;i<len;i++){
if(cQuery.contains(this,targets[i])){
return true;
}
}
});
},
closest:function(selectors,context){
var cur,
i=0,
l=this.length,
matched=[],
pos=rneedsContext.test(selectors)||typeof selectors!=="string"?
cQuery(selectors,context||this.context):
0;
for(;i<l;i++){
for(cur=this[i];cur&&cur!==context;cur=cur.parentNode){
if(cur.nodeType<11&&(pos?
pos.index(cur)>-1:
cur.nodeType===1&&
cQuery.find.matchesSelector(cur,selectors))){
matched.push(cur);
break;
}
}
}
return this.pushStack(matched.length>1?cQuery.uniqueSort(matched):matched);
},
index:function(elem){
if(!elem){
return(this[0]&&this[0].parentNode)?this.first().prevAll().length:-1;
}
if(typeof elem==="string"){
return cQuery.inArray(this[0],cQuery(elem));
}
return cQuery.inArray(
elem.jquery?elem[0]:elem,this);
},
add:function(selector,context){
return this.pushStack(
cQuery.uniqueSort(
cQuery.merge(this.get(),cQuery(selector,context))
)
);
},
addBack:function(selector){
return this.add(selector==null?
this.prevObject:this.prevObject.filter(selector)
);
}
});
function sibling(cur,dir){
do{
cur=cur[dir];
}while(cur&&cur.nodeType!==1);
return cur;
}
cQuery.each({
parent:function(elem){
var parent=elem.parentNode;
return parent&&parent.nodeType!==11?parent:null;
},
parents:function(elem){
return dir(elem,"parentNode");
},
parentsUntil:function(elem,i,until){
return dir(elem,"parentNode",until);
},
next:function(elem){
return sibling(elem,"nextSibling");
},
prev:function(elem){
return sibling(elem,"previousSibling");
},
nextAll:function(elem){
return dir(elem,"nextSibling");
},
prevAll:function(elem){
return dir(elem,"previousSibling");
},
nextUntil:function(elem,i,until){
return dir(elem,"nextSibling",until);
},
prevUntil:function(elem,i,until){
return dir(elem,"previousSibling",until);
},
siblings:function(elem){
return siblings((elem.parentNode||{}).firstChild,elem);
},
children:function(elem){
return siblings(elem.firstChild);
},
contents:function(elem){
return cQuery.nodeName(elem,"iframe")?
elem.contentDocument||elem.contentWindow.document:
cQuery.merge([],elem.childNodes);
}
},function(name,fn){
cQuery.fn[name]=function(until,selector){
var ret=cQuery.map(this,fn,until);
if(name.slice(-5)!=="Until"){
selector=until;
}
if(selector&&typeof selector==="string"){
ret=cQuery.filter(selector,ret);
}
if(this.length>1){
if(!guaranteedUnique[name]){
ret=cQuery.uniqueSort(ret);
}
if(rparentsprev.test(name)){
ret=ret.reverse();
}
}
return this.pushStack(ret);
};
});
var rnotwhite=(/\S+/g);
function createOptions(options){
var object={};
cQuery.each(options.match(rnotwhite)||[],function(_,flag){
object[flag]=true;
});
return object;
}
cQuery.Callbacks=function(options){
options=typeof options==="string"?
createOptions(options):
cQuery.extend({},options);
var
firing,
memory,
fired,
locked,
list=[],
queue=[],
firingIndex=-1,
fire=function(){
locked=options.once;
fired=firing=true;
for(;queue.length;firingIndex=-1){
memory=queue.shift();
while(++firingIndex<list.length){
if(list[firingIndex].apply(memory[0],memory[1])===false&&
options.stopOnFalse){
firingIndex=list.length;
memory=false;
}
}
}
if(!options.memory){
memory=false;
}
firing=false;
if(locked){
if(memory){
list=[];
}else{
list="";
}
}
},
self={
add:function(){
if(list){
if(memory&&!firing){
firingIndex=list.length-1;
queue.push(memory);
}
(function add(args){
cQuery.each(args,function(_,arg){
if(cQuery.isFunction(arg)){
if(!options.unique||!self.has(arg)){
list.push(arg);
}
}else if(arg&&arg.length&&cQuery.type(arg)!=="string"){
add(arg);
}
});
})(arguments);
if(memory&&!firing){
fire();
}
}
return this;
},
remove:function(){
cQuery.each(arguments,function(_,arg){
var index;
while((index=cQuery.inArray(arg,list,index))>-1){
list.splice(index,1);
if(index<=firingIndex){
firingIndex--;
}
}
});
return this;
},
has:function(fn){
return fn?
cQuery.inArray(fn,list)>-1:
list.length>0;
},
empty:function(){
if(list){
list=[];
}
return this;
},
disable:function(){
locked=queue=[];
list=memory="";
return this;
},
disabled:function(){
return!list;
},
lock:function(){
locked=true;
if(!memory){
self.disable();
}
return this;
},
locked:function(){
return!!locked;
},
fireWith:function(context,args){
if(!locked){
args=args||[];
args=[context,args.slice?args.slice():args];
queue.push(args);
if(!firing){
fire();
}
}
return this;
},
fire:function(){
self.fireWith(this,arguments);
return this;
},
fired:function(){
return!!fired;
}
};
return self;
};
cQuery.extend({
Deferred:function(func){
var tuples=[
["resolve","done",cQuery.Callbacks("once memory"),"resolved"],
["reject","fail",cQuery.Callbacks("once memory"),"rejected"],
["notify","progress",cQuery.Callbacks("memory")]
],
state="pending",
promise={
state:function(){
return state;
},
always:function(){
deferred.done(arguments).fail(arguments);
return this;
},
then:function(){
var fns=arguments;
return cQuery.Deferred(function(newDefer){
cQuery.each(tuples,function(i,tuple){
var fn=cQuery.isFunction(fns[i])&&fns[i];
deferred[tuple[1]](function(){
var returned=fn&&fn.apply(this,arguments);
if(returned&&cQuery.isFunction(returned.promise)){
returned.promise()
.progress(newDefer.notify)
.done(newDefer.resolve)
.fail(newDefer.reject);
}else{
newDefer[tuple[0]+"With"](
this===promise?newDefer.promise():this,
fn?[returned]:arguments
);
}
});
});
fns=null;
}).promise();
},
promise:function(obj){
return obj!=null?cQuery.extend(obj,promise):promise;
}
},
deferred={};
promise.pipe=promise.then;
cQuery.each(tuples,function(i,tuple){
var list=tuple[2],
stateString=tuple[3];
promise[tuple[1]]=list.add;
if(stateString){
list.add(function(){
state=stateString;
},tuples[i^1][2].disable,tuples[2][2].lock);
}
deferred[tuple[0]]=function(){
deferred[tuple[0]+"With"](this===deferred?promise:this,arguments);
return this;
};
deferred[tuple[0]+"With"]=list.fireWith;
});
promise.promise(deferred);
if(func){
func.call(deferred,deferred);
}
return deferred;
},
when:function(subordinate){
var i=0,
resolveValues=slice.call(arguments),
length=resolveValues.length,
remaining=length!==1||
(subordinate&&cQuery.isFunction(subordinate.promise))?length:0,
deferred=remaining===1?subordinate:cQuery.Deferred(),
updateFunc=function(i,contexts,values){
return function(value){
contexts[i]=this;
values[i]=arguments.length>1?slice.call(arguments):value;
if(values===progressValues){
deferred.notifyWith(contexts,values);
}else if(!(--remaining)){
deferred.resolveWith(contexts,values);
}
};
},
progressValues,progressContexts,resolveContexts;
if(length>1){
progressValues=new Array(length);
progressContexts=new Array(length);
resolveContexts=new Array(length);
for(;i<length;i++){
if(resolveValues[i]&&cQuery.isFunction(resolveValues[i].promise)){
resolveValues[i].promise()
.progress(updateFunc(i,progressContexts,progressValues))
.done(updateFunc(i,resolveContexts,resolveValues))
.fail(deferred.reject);
}else{
--remaining;
}
}
}
if(!remaining){
deferred.resolveWith(resolveContexts,resolveValues);
}
return deferred.promise();
}
});
var readyList;
cQuery.fn.ready=function(fn){
cQuery.ready.promise().done(fn);
return this;
};
cQuery.extend({
isReady:false,
readyWait:1,
holdReady:function(hold){
if(hold){
cQuery.readyWait++;
}else{
cQuery.ready(true);
}
},
ready:function(wait){
if(wait===true?--cQuery.readyWait:cQuery.isReady){
return;
}
cQuery.isReady=true;
if(wait!==true&&--cQuery.readyWait>0){
return;
}
readyList.resolveWith(document,[cQuery]);
if(cQuery.fn.triggerHandler){
cQuery(document).triggerHandler("ready");
cQuery(document).off("ready");
}
}
});
function detach(){
if(document.addEventListener){
document.removeEventListener("DOMContentLoaded",completed);
window.removeEventListener("load",completed);
}else{
document.detachEvent("onreadystatechange",completed);
window.detachEvent("onload",completed);
}
}
function completed(){
if(document.addEventListener||
window.event.type==="load"||
document.readyState==="complete"){
detach();
cQuery.ready();
}
}
cQuery.ready.promise=function(obj){
if(!readyList){
readyList=cQuery.Deferred();
if(document.readyState==="complete"||
(document.readyState!=="loading"&&!document.documentElement.doScroll)){
window.setTimeout(cQuery.ready);
}else if(document.addEventListener){
document.addEventListener("DOMContentLoaded",completed);
window.addEventListener("load",completed);
}else{
document.attachEvent("onreadystatechange",completed);
window.attachEvent("onload",completed);
var top=false;
try{
top=window.frameElement==null&&document.documentElement;
}catch(e){}
if(top&&top.doScroll){
(function doScrollCheck(){
if(!cQuery.isReady){
try{
top.doScroll("left");
}catch(e){
return window.setTimeout(doScrollCheck,50);
}
detach();
cQuery.ready();
}
})();
}
}
}
return readyList.promise(obj);
};
cQuery.ready.promise();
var i;
for(i in cQuery(support)){
break;
}
support.ownFirst=i==="0";
support.inlineBlockNeedsLayout=false;
cQuery(function(){
var val,div,body,container;
body=document.getElementsByTagName("body")[0];
if(!body||!body.style){
return;
}
div=document.createElement("div");
container=document.createElement("div");
container.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
body.appendChild(container).appendChild(div);
if(typeof div.style.zoom!=="undefined"){
div.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1";
support.inlineBlockNeedsLayout=val=div.offsetWidth===3;
if(val){
body.style.zoom=1;
}
}
body.removeChild(container);
});
(function(){
var div=document.createElement("div");
support.deleteExpando=true;
try{
delete div.test;
}catch(e){
support.deleteExpando=false;
}
div=null;
})();
var acceptData=function(elem){
var noData=cQuery.noData[(elem.nodeName+" ").toLowerCase()],
nodeType=+elem.nodeType||1;
return nodeType!==1&&nodeType!==9?
false:
!noData||noData!==true&&elem.getAttribute("classid")===noData;
};
var rbrace=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
rmultiDash=/([A-Z])/g;
function dataAttr(elem,key,data){
if(data===undefined&&elem.nodeType===1){
var name="data-"+key.replace(rmultiDash,"-$1").toLowerCase();
data=elem.getAttribute(name);
if(typeof data==="string"){
try{
data=data==="true"?true:
data==="false"?false:
data==="null"?null:
+data+""===data?+data:
rbrace.test(data)?cQuery.parseJSON(data):
data;
}catch(e){}
cQuery.data(elem,key,data);
}else{
data=undefined;
}
}
return data;
}
function isEmptyDataObject(obj){
var name;
for(name in obj){
if(name==="data"&&cQuery.isEmptyObject(obj[name])){
continue;
}
if(name!=="toJSON"){
return false;
}
}
return true;
}
function internalData(elem,name,data,pvt){
if(!acceptData(elem)){
return;
}
var ret,thisCache,
internalKey=cQuery.expando,
isNode=elem.nodeType,
cache=isNode?cQuery.cache:elem,
id=isNode?elem[internalKey]:elem[internalKey]&&internalKey;
if((!id||!cache[id]||(!pvt&&!cache[id].data))&&
data===undefined&&typeof name==="string"){
return;
}
if(!id){
if(isNode){
id=elem[internalKey]=deletedIds.pop()||cQuery.guid++;
}else{
id=internalKey;
}
}
if(!cache[id]){
cache[id]=isNode?{}:{toJSON:cQuery.noop};
}
if(typeof name==="object"||typeof name==="function"){
if(pvt){
cache[id]=cQuery.extend(cache[id],name);
}else{
cache[id].data=cQuery.extend(cache[id].data,name);
}
}
thisCache=cache[id];
if(!pvt){
if(!thisCache.data){
thisCache.data={};
}
thisCache=thisCache.data;
}
if(data!==undefined){
thisCache[cQuery.camelCase(name)]=data;
}
if(typeof name==="string"){
ret=thisCache[name];
if(ret==null){
ret=thisCache[cQuery.camelCase(name)];
}
}else{
ret=thisCache;
}
return ret;
}
function internalRemoveData(elem,name,pvt){
if(!acceptData(elem)){
return;
}
var thisCache,i,
isNode=elem.nodeType,
cache=isNode?cQuery.cache:elem,
id=isNode?elem[cQuery.expando]:cQuery.expando;
if(!cache[id]){
return;
}
if(name){
thisCache=pvt?cache[id]:cache[id].data;
if(thisCache){
if(!cQuery.isArray(name)){
if(name in thisCache){
name=[name];
}else{
name=cQuery.camelCase(name);
if(name in thisCache){
name=[name];
}else{
name=name.split(" ");
}
}
}else{
name=name.concat(cQuery.map(name,cQuery.camelCase));
}
i=name.length;
while(i--){
delete thisCache[name[i]];
}
if(pvt?!isEmptyDataObject(thisCache):!cQuery.isEmptyObject(thisCache)){
return;
}
}
}
if(!pvt){
delete cache[id].data;
if(!isEmptyDataObject(cache[id])){
return;
}
}
if(isNode){
cQuery.cleanData([elem],true);
}else if(support.deleteExpando||cache!=cache.window){
delete cache[id];
}else{
cache[id]=undefined;
}
}
cQuery.extend({
cache:{},
noData:{
"applet ":true,
"embed ":true,
"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
},
hasData:function(elem){
elem=elem.nodeType?cQuery.cache[elem[cQuery.expando]]:elem[cQuery.expando];
return!!elem&&!isEmptyDataObject(elem);
},
data:function(elem,name,data){
return internalData(elem,name,data);
},
removeData:function(elem,name){
return internalRemoveData(elem,name);
},
_data:function(elem,name,data){
return internalData(elem,name,data,true);
},
_removeData:function(elem,name){
return internalRemoveData(elem,name,true);
}
});
cQuery.fn.extend({
data:function(key,value){
var i,name,data,
elem=this[0],
attrs=elem&&elem.attributes;
if(key===undefined){
if(this.length){
data=cQuery.data(elem);
if(elem.nodeType===1&&!cQuery._data(elem,"parsedAttrs")){
i=attrs.length;
while(i--){
if(attrs[i]){
name=attrs[i].name;
if(name.indexOf("data-")===0){
name=cQuery.camelCase(name.slice(5));
dataAttr(elem,name,data[name]);
}
}
}
cQuery._data(elem,"parsedAttrs",true);
}
}
return data;
}
if(typeof key==="object"){
return this.each(function(){
cQuery.data(this,key);
});
}
return arguments.length>1?
this.each(function(){
cQuery.data(this,key,value);
}):
elem?dataAttr(elem,key,cQuery.data(elem,key)):undefined;
},
removeData:function(key){
return this.each(function(){
cQuery.removeData(this,key);
});
}
});
cQuery.extend({
queue:function(elem,type,data){
var queue;
if(elem){
type=(type||"fx")+"queue";
queue=cQuery._data(elem,type);
if(data){
if(!queue||cQuery.isArray(data)){
queue=cQuery._data(elem,type,cQuery.makeArray(data));
}else{
queue.push(data);
}
}
return queue||[];
}
},
dequeue:function(elem,type){
type=type||"fx";
var queue=cQuery.queue(elem,type),
startLength=queue.length,
fn=queue.shift(),
hooks=cQuery._queueHooks(elem,type),
next=function(){
cQuery.dequeue(elem,type);
};
if(fn==="inprogress"){
fn=queue.shift();
startLength--;
}
if(fn){
if(type==="fx"){
queue.unshift("inprogress");
}
delete hooks.stop;
fn.call(elem,next,hooks);
}
if(!startLength&&hooks){
hooks.empty.fire();
}
},
_queueHooks:function(elem,type){
var key=type+"queueHooks";
return cQuery._data(elem,key)||cQuery._data(elem,key,{
empty:cQuery.Callbacks("once memory").add(function(){
cQuery._removeData(elem,type+"queue");
cQuery._removeData(elem,key);
})
});
}
});
cQuery.fn.extend({
queue:function(type,data){
var setter=2;
if(typeof type!=="string"){
data=type;
type="fx";
setter--;
}
if(arguments.length<setter){
return cQuery.queue(this[0],type);
}
return data===undefined?
this:
this.each(function(){
var queue=cQuery.queue(this,type,data);
cQuery._queueHooks(this,type);
if(type==="fx"&&queue[0]!=="inprogress"){
cQuery.dequeue(this,type);
}
});
},
dequeue:function(type){
return this.each(function(){
cQuery.dequeue(this,type);
});
},
clearQueue:function(type){
return this.queue(type||"fx",[]);
},
promise:function(type,obj){
var tmp,
count=1,
defer=cQuery.Deferred(),
elements=this,
i=this.length,
resolve=function(){
if(!(--count)){
defer.resolveWith(elements,[elements]);
}
};
if(typeof type!=="string"){
obj=type;
type=undefined;
}
type=type||"fx";
while(i--){
tmp=cQuery._data(elements[i],type+"queueHooks");
if(tmp&&tmp.empty){
count++;
tmp.empty.add(resolve);
}
}
resolve();
return defer.promise(obj);
}
});
(function(){
var shrinkWrapBlocksVal;
support.shrinkWrapBlocks=function(){
if(shrinkWrapBlocksVal!=null){
return shrinkWrapBlocksVal;
}
shrinkWrapBlocksVal=false;
var div,body,container;
body=document.getElementsByTagName("body")[0];
if(!body||!body.style){
return;
}
div=document.createElement("div");
container=document.createElement("div");
container.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
body.appendChild(container).appendChild(div);
if(typeof div.style.zoom!=="undefined"){
div.style.cssText=
"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;"+
"box-sizing:content-box;display:block;margin:0;border:0;"+
"padding:1px;width:1px;zoom:1";
div.appendChild(document.createElement("div")).style.width="5px";
shrinkWrapBlocksVal=div.offsetWidth!==3;
}
body.removeChild(container);
return shrinkWrapBlocksVal;
};
})();
var pnum=(/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;
var rcssNum=new RegExp("^(?:([+-])=|)("+pnum+")([a-z%]*)$","i");
var cssExpand=["Top","Right","Bottom","Left"];
var isHidden=function(elem,el){
elem=el||elem;
return cQuery.css(elem,"display")==="none"||
!cQuery.contains(elem.ownerDocument,elem);
};
function adjustCSS(elem,prop,valueParts,tween){
var adjusted,
scale=1,
maxIterations=20,
currentValue=tween?
function(){return tween.cur();}:
function(){return cQuery.css(elem,prop,"");},
initial=currentValue(),
unit=valueParts&&valueParts[3]||(cQuery.cssNumber[prop]?"":"px"),
initialInUnit=(cQuery.cssNumber[prop]||unit!=="px"&&+initial)&&
rcssNum.exec(cQuery.css(elem,prop));
if(initialInUnit&&initialInUnit[3]!==unit){
unit=unit||initialInUnit[3];
valueParts=valueParts||[];
initialInUnit=+initial||1;
do{
scale=scale||".5";
initialInUnit=initialInUnit/scale;
cQuery.style(elem,prop,initialInUnit+unit);
}while(
scale!==(scale=currentValue()/initial)&&scale!==1&&--maxIterations
);
}
if(valueParts){
initialInUnit=+initialInUnit||+initial||0;
adjusted=valueParts[1]?
initialInUnit+(valueParts[1]+1)*valueParts[2]:
+valueParts[2];
if(tween){
tween.unit=unit;
tween.start=initialInUnit;
tween.end=adjusted;
}
}
return adjusted;
}
var access=function(elems,fn,key,value,chainable,emptyGet,raw){
var i=0,
length=elems.length,
bulk=key==null;
if(cQuery.type(key)==="object"){
chainable=true;
for(i in key){
access(elems,fn,i,key[i],true,emptyGet,raw);
}
}else if(value!==undefined){
chainable=true;
if(!cQuery.isFunction(value)){
raw=true;
}
if(bulk){
if(raw){
fn.call(elems,value);
fn=null;
}else{
bulk=fn;
fn=function(elem,key,value){
return bulk.call(cQuery(elem),value);
};
}
}
if(fn){
for(;i<length;i++){
fn(
elems[i],
key,
raw?value:value.call(elems[i],i,fn(elems[i],key))
);
}
}
}
return chainable?
elems:
bulk?
fn.call(elems):
length?fn(elems[0],key):emptyGet;
};
var rcheckableType=(/^(?:checkbox|radio)$/i);
var rtagName=(/<([\w:-]+)/);
var rscriptType=(/^$|\/(?:java|ecma)script/i);
var rleadingWhitespace=(/^\s+/);
var nodeNames="abbr|article|aside|audio|bdi|canvas|data|datalist|"+
"details|dialog|figcaption|figure|footer|header|hgroup|main|"+
"mark|meter|nav|output|picture|progress|section|summary|template|time|video";
function createSafeFragment(document){
var list=nodeNames.split("|"),
safeFrag=document.createDocumentFragment();
if(safeFrag.createElement){
while(list.length){
safeFrag.createElement(
list.pop()
);
}
}
return safeFrag;
}
(function(){
var div=document.createElement("div"),
fragment=document.createDocumentFragment(),
input=document.createElement("input");
div.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
support.leadingWhitespace=div.firstChild.nodeType===3;
support.tbody=!div.getElementsByTagName("tbody").length;
support.htmlSerialize=!!div.getElementsByTagName("link").length;
support.html5Clone=
document.createElement("nav").cloneNode(true).outerHTML!=="<:nav></:nav>";
input.type="checkbox";
input.checked=true;
fragment.appendChild(input);
support.appendChecked=input.checked;
div.innerHTML="<textarea>x</textarea>";
support.noCloneChecked=!!div.cloneNode(true).lastChild.defaultValue;
fragment.appendChild(div);
input=document.createElement("input");
input.setAttribute("type","radio");
input.setAttribute("checked","checked");
input.setAttribute("name","t");
div.appendChild(input);
support.checkClone=div.cloneNode(true).cloneNode(true).lastChild.checked;
support.noCloneEvent=!!div.addEventListener;
div[cQuery.expando]=1;
support.attributes=!div.getAttribute(cQuery.expando);
})();
var wrapMap={
option:[1,"<select multiple='multiple'>","</select>"],
legend:[1,"<fieldset>","</fieldset>"],
area:[1,"<map>","</map>"],
param:[1,"<object>","</object>"],
thead:[1,"<table>","</table>"],
tr:[2,"<table><tbody>","</tbody></table>"],
col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],
td:[3,"<table><tbody><tr>","</tr></tbody></table>"],
_default:support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]
};
wrapMap.optgroup=wrapMap.option;
wrapMap.tbody=wrapMap.tfoot=wrapMap.colgroup=wrapMap.caption=wrapMap.thead;
wrapMap.th=wrapMap.td;
function getAll(context,tag){
var elems,elem,
i=0,
found=typeof context.getElementsByTagName!=="undefined"?
context.getElementsByTagName(tag||"*"):
typeof context.querySelectorAll!=="undefined"?
context.querySelectorAll(tag||"*"):
undefined;
if(!found){
for(found=[],elems=context.childNodes||context;
(elem=elems[i])!=null;
i++
){
if(!tag||cQuery.nodeName(elem,tag)){
found.push(elem);
}else{
cQuery.merge(found,getAll(elem,tag));
}
}
}
return tag===undefined||tag&&cQuery.nodeName(context,tag)?
cQuery.merge([context],found):
found;
}
function setGlobalEval(elems,refElements){
var elem,
i=0;
for(;(elem=elems[i])!=null;i++){
cQuery._data(
elem,
"globalEval",
!refElements||cQuery._data(refElements[i],"globalEval")
);
}
}
var rhtml=/<|&#?\w+;/,
rtbody=/<tbody/i;
function fixDefaultChecked(elem){
if(rcheckableType.test(elem.type)){
elem.defaultChecked=elem.checked;
}
}
function buildFragment(elems,context,scripts,selection,ignored){
var j,elem,contains,
tmp,tag,tbody,wrap,
l=elems.length,
safe=createSafeFragment(context),
nodes=[],
i=0;
for(;i<l;i++){
elem=elems[i];
if(elem||elem===0){
if(cQuery.type(elem)==="object"){
cQuery.merge(nodes,elem.nodeType?[elem]:elem);
}else if(!rhtml.test(elem)){
nodes.push(context.createTextNode(elem));
}else{
tmp=tmp||safe.appendChild(context.createElement("div"));
tag=(rtagName.exec(elem)||["",""])[1].toLowerCase();
wrap=wrapMap[tag]||wrapMap._default;
tmp.innerHTML=wrap[1]+cQuery.htmlPrefilter(elem)+wrap[2];
j=wrap[0];
while(j--){
tmp=tmp.lastChild;
}
if(!support.leadingWhitespace&&rleadingWhitespace.test(elem)){
nodes.push(context.createTextNode(rleadingWhitespace.exec(elem)[0]));
}
if(!support.tbody){
elem=tag==="table"&&!rtbody.test(elem)?
tmp.firstChild:
wrap[1]==="<table>"&&!rtbody.test(elem)?
tmp:
0;
j=elem&&elem.childNodes.length;
while(j--){
if(cQuery.nodeName((tbody=elem.childNodes[j]),"tbody")&&
!tbody.childNodes.length){
elem.removeChild(tbody);
}
}
}
cQuery.merge(nodes,tmp.childNodes);
tmp.textContent="";
while(tmp.firstChild){
tmp.removeChild(tmp.firstChild);
}
tmp=safe.lastChild;
}
}
}
if(tmp){
safe.removeChild(tmp);
}
if(!support.appendChecked){
cQuery.grep(getAll(nodes,"input"),fixDefaultChecked);
}
i=0;
while((elem=nodes[i++])){
if(selection&&cQuery.inArray(elem,selection)>-1){
if(ignored){
ignored.push(elem);
}
continue;
}
contains=cQuery.contains(elem.ownerDocument,elem);
tmp=getAll(safe.appendChild(elem),"script");
if(contains){
setGlobalEval(tmp);
}
if(scripts){
j=0;
while((elem=tmp[j++])){
if(rscriptType.test(elem.type||"")){
scripts.push(elem);
}
}
}
}
tmp=null;
return safe;
}
(function(){
var i,eventName,
div=document.createElement("div");
for(i in{submit:true,change:true,focusin:true}){
eventName="on"+i;
if(!(support[i]=eventName in window)){
div.setAttribute(eventName,"t");
support[i]=div.attributes[eventName].expando===false;
}
}
div=null;
})();
var rformElems=/^(?:input|select|textarea)$/i,
rkeyEvent=/^key/,
rmouseEvent=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,
rfocusMorph=/^(?:focusinfocus|focusoutblur)$/,
rtypenamespace=/^([^.]*)(?:\.(.+)|)/;
function returnTrue(){
return true;
}
function returnFalse(){
return false;
}
function safeActiveElement(){
try{
return document.activeElement;
}catch(err){}
}
function on(elem,types,selector,data,fn,one){
var origFn,type;
if(typeof types==="object"){
if(typeof selector!=="string"){
data=data||selector;
selector=undefined;
}
for(type in types){
on(elem,type,selector,data,types[type],one);
}
return elem;
}
if(data==null&&fn==null){
fn=selector;
data=selector=undefined;
}else if(fn==null){
if(typeof selector==="string"){
fn=data;
data=undefined;
}else{
fn=data;
data=selector;
selector=undefined;
}
}
if(fn===false){
fn=returnFalse;
}else if(!fn){
return elem;
}
if(one===1){
origFn=fn;
fn=function(event){
cQuery().off(event);
return origFn.apply(this,arguments);
};
fn.guid=origFn.guid||(origFn.guid=cQuery.guid++);
}
return elem.each(function(){
cQuery.event.add(this,types,fn,data,selector);
});
}
cQuery.event={
global:{},
add:function(elem,types,handler,data,selector){
var tmp,events,t,handleObjIn,
special,eventHandle,handleObj,
handlers,type,namespaces,origType,
elemData=cQuery._data(elem);
if(!elemData){
return;
}
if(handler.handler){
handleObjIn=handler;
handler=handleObjIn.handler;
selector=handleObjIn.selector;
}
if(!handler.guid){
handler.guid=cQuery.guid++;
}
if(!(events=elemData.events)){
events=elemData.events={};
}
if(!(eventHandle=elemData.handle)){
eventHandle=elemData.handle=function(e){
return typeof cQuery!=="undefined"&&
(!e||cQuery.event.triggered!==e.type)?
cQuery.event.dispatch.apply(eventHandle.elem,arguments):
undefined;
};
eventHandle.elem=elem;
}
types=(types||"").match(rnotwhite)||[""];
t=types.length;
while(t--){
tmp=rtypenamespace.exec(types[t])||[];
type=origType=tmp[1];
namespaces=(tmp[2]||"").split(".").sort();
if(!type){
continue;
}
special=cQuery.event.special[type]||{};
type=(selector?special.delegateType:special.bindType)||type;
special=cQuery.event.special[type]||{};
handleObj=cQuery.extend({
type:type,
origType:origType,
data:data,
handler:handler,
guid:handler.guid,
selector:selector,
needsContext:selector&&cQuery.expr.match.needsContext.test(selector),
namespace:namespaces.join(".")
},handleObjIn);
if(!(handlers=events[type])){
handlers=events[type]=[];
handlers.delegateCount=0;
if(!special.setup||
special.setup.call(elem,data,namespaces,eventHandle)===false){
if(elem.addEventListener){
elem.addEventListener(type,eventHandle,false);
}else if(elem.attachEvent){
elem.attachEvent("on"+type,eventHandle);
}
}
}
if(special.add){
special.add.call(elem,handleObj);
if(!handleObj.handler.guid){
handleObj.handler.guid=handler.guid;
}
}
if(selector){
handlers.splice(handlers.delegateCount++,0,handleObj);
}else{
handlers.push(handleObj);
}
cQuery.event.global[type]=true;
}
elem=null;
},
remove:function(elem,types,handler,selector,mappedTypes){
var j,handleObj,tmp,
origCount,t,events,
special,handlers,type,
namespaces,origType,
elemData=cQuery.hasData(elem)&&cQuery._data(elem);
if(!elemData||!(events=elemData.events)){
return;
}
types=(types||"").match(rnotwhite)||[""];
t=types.length;
while(t--){
tmp=rtypenamespace.exec(types[t])||[];
type=origType=tmp[1];
namespaces=(tmp[2]||"").split(".").sort();
if(!type){
for(type in events){
cQuery.event.remove(elem,type+types[t],handler,selector,true);
}
continue;
}
special=cQuery.event.special[type]||{};
type=(selector?special.delegateType:special.bindType)||type;
handlers=events[type]||[];
tmp=tmp[2]&&
new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.|)")+"(\\.|$)");
origCount=j=handlers.length;
while(j--){
handleObj=handlers[j];
if((mappedTypes||origType===handleObj.origType)&&
(!handler||handler.guid===handleObj.guid)&&
(!tmp||tmp.test(handleObj.namespace))&&
(!selector||selector===handleObj.selector||
selector==="**"&&handleObj.selector)){
handlers.splice(j,1);
if(handleObj.selector){
handlers.delegateCount--;
}
if(special.remove){
special.remove.call(elem,handleObj);
}
}
}
if(origCount&&!handlers.length){
if(!special.teardown||
special.teardown.call(elem,namespaces,elemData.handle)===false){
cQuery.removeEvent(elem,type,elemData.handle);
}
delete events[type];
}
}
if(cQuery.isEmptyObject(events)){
delete elemData.handle;
cQuery._removeData(elem,"events");
}
},
trigger:function(event,data,elem,onlyHandlers){
var handle,ontype,cur,
bubbleType,special,tmp,i,
eventPath=[elem||document],
type=hasOwn.call(event,"type")?event.type:event,
namespaces=hasOwn.call(event,"namespace")?event.namespace.split("."):[];
cur=tmp=elem=elem||document;
if(elem.nodeType===3||elem.nodeType===8){
return;
}
if(rfocusMorph.test(type+cQuery.event.triggered)){
return;
}
if(type.indexOf(".")>-1){
namespaces=type.split(".");
type=namespaces.shift();
namespaces.sort();
}
ontype=type.indexOf(":")<0&&"on"+type;
event=event[cQuery.expando]?
event:
new cQuery.Event(type,typeof event==="object"&&event);
event.isTrigger=onlyHandlers?2:3;
event.namespace=namespaces.join(".");
event.rnamespace=event.namespace?
new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.|)")+"(\\.|$)"):
null;
event.result=undefined;
if(!event.target){
event.target=elem;
}
data=data==null?
[event]:
cQuery.makeArray(data,[event]);
special=cQuery.event.special[type]||{};
if(!onlyHandlers&&special.trigger&&special.trigger.apply(elem,data)===false){
return;
}
if(!onlyHandlers&&!special.noBubble&&!cQuery.isWindow(elem)){
bubbleType=special.delegateType||type;
if(!rfocusMorph.test(bubbleType+type)){
cur=cur.parentNode;
}
for(;cur;cur=cur.parentNode){
eventPath.push(cur);
tmp=cur;
}
if(tmp===(elem.ownerDocument||document)){
eventPath.push(tmp.defaultView||tmp.parentWindow||window);
}
}
i=0;
while((cur=eventPath[i++])&&!event.isPropagationStopped()){
event.type=i>1?
bubbleType:
special.bindType||type;
handle=(cQuery._data(cur,"events")||{})[event.type]&&
cQuery._data(cur,"handle");
if(handle){
handle.apply(cur,data);
}
handle=ontype&&cur[ontype];
if(handle&&handle.apply&&acceptData(cur)){
event.result=handle.apply(cur,data);
if(event.result===false){
event.preventDefault();
}
}
}
event.type=type;
if(!onlyHandlers&&!event.isDefaultPrevented()){
if(
(!special._default||
special._default.apply(eventPath.pop(),data)===false
)&&acceptData(elem)
){
if(ontype&&elem[type]&&!cQuery.isWindow(elem)){
tmp=elem[ontype];
if(tmp){
elem[ontype]=null;
}
cQuery.event.triggered=type;
try{
elem[type]();
}catch(e){
}
cQuery.event.triggered=undefined;
if(tmp){
elem[ontype]=tmp;
}
}
}
}
return event.result;
},
dispatch:function(event){
event=cQuery.event.fix(event);
var i,j,ret,matched,handleObj,
handlerQueue=[],
args=slice.call(arguments),
handlers=(cQuery._data(this,"events")||{})[event.type]||[],
special=cQuery.event.special[event.type]||{};
args[0]=event;
event.delegateTarget=this;
if(special.preDispatch&&special.preDispatch.call(this,event)===false){
return;
}
handlerQueue=cQuery.event.handlers.call(this,event,handlers);
i=0;
while((matched=handlerQueue[i++])&&!event.isPropagationStopped()){
event.currentTarget=matched.elem;
j=0;
while((handleObj=matched.handlers[j++])&&
!event.isImmediatePropagationStopped()){
if(!event.rnamespace||event.rnamespace.test(handleObj.namespace)){
event.handleObj=handleObj;
event.data=handleObj.data;
ret=((cQuery.event.special[handleObj.origType]||{}).handle||
handleObj.handler).apply(matched.elem,args);
if(ret!==undefined){
if((event.result=ret)===false){
event.preventDefault();
event.stopPropagation();
}
}
}
}
}
if(special.postDispatch){
special.postDispatch.call(this,event);
}
return event.result;
},
handlers:function(event,handlers){
var i,matches,sel,handleObj,
handlerQueue=[],
delegateCount=handlers.delegateCount,
cur=event.target;
if(delegateCount&&cur.nodeType&&
(event.type!=="click"||isNaN(event.button)||event.button<1)){
for(;cur!=this;cur=cur.parentNode||this){
if(cur.nodeType===1&&(cur.disabled!==true||event.type!=="click")){
matches=[];
for(i=0;i<delegateCount;i++){
handleObj=handlers[i];
sel=handleObj.selector+" ";
if(matches[sel]===undefined){
matches[sel]=handleObj.needsContext?
cQuery(sel,this).index(cur)>-1:
cQuery.find(sel,this,null,[cur]).length;
}
if(matches[sel]){
matches.push(handleObj);
}
}
if(matches.length){
handlerQueue.push({elem:cur,handlers:matches});
}
}
}
}
if(delegateCount<handlers.length){
handlerQueue.push({elem:this,handlers:handlers.slice(delegateCount)});
}
return handlerQueue;
},
fix:function(event){
if(event[cQuery.expando]){
return event;
}
var i,prop,copy,
type=event.type,
originalEvent=event,
fixHook=this.fixHooks[type];
if(!fixHook){
this.fixHooks[type]=fixHook=
rmouseEvent.test(type)?this.mouseHooks:
rkeyEvent.test(type)?this.keyHooks:
{};
}
copy=fixHook.props?this.props.concat(fixHook.props):this.props;
event=new cQuery.Event(originalEvent);
i=copy.length;
while(i--){
prop=copy[i];
event[prop]=originalEvent[prop];
}
if(!event.target){
event.target=originalEvent.srcElement||document;
}
if(event.target.nodeType===3){
event.target=event.target.parentNode;
}
event.metaKey=!!event.metaKey;
return fixHook.filter?fixHook.filter(event,originalEvent):event;
},
props:("altKey bubbles cancelable ctrlKey currentTarget detail eventPhase "+
"metaKey relatedTarget shiftKey target timeStamp view which").split(" "),
fixHooks:{},
keyHooks:{
props:"char charCode key keyCode".split(" "),
filter:function(event,original){
if(event.which==null){
event.which=original.charCode!=null?original.charCode:original.keyCode;
}
return event;
}
},
mouseHooks:{
props:("button buttons clientX clientY fromElement offsetX offsetY "+
"pageX pageY screenX screenY toElement").split(" "),
filter:function(event,original){
var body,eventDoc,doc,
button=original.button,
fromElement=original.fromElement;
if(event.pageX==null&&original.clientX!=null){
eventDoc=event.target.ownerDocument||document;
doc=eventDoc.documentElement;
body=eventDoc.body;
event.pageX=original.clientX+
(doc&&doc.scrollLeft||body&&body.scrollLeft||0)-
(doc&&doc.clientLeft||body&&body.clientLeft||0);
event.pageY=original.clientY+
(doc&&doc.scrollTop||body&&body.scrollTop||0)-
(doc&&doc.clientTop||body&&body.clientTop||0);
}
if(!event.relatedTarget&&fromElement){
event.relatedTarget=fromElement===event.target?
original.toElement:
fromElement;
}
if(!event.which&&button!==undefined){
event.which=(button&1?1:(button&2?3:(button&4?2:0)));
}
return event;
}
},
special:{
load:{
noBubble:true
},
focus:{
trigger:function(){
if(this!==safeActiveElement()&&this.focus){
try{
this.focus();
return false;
}catch(e){
}
}
},
delegateType:"focusin"
},
blur:{
trigger:function(){
if(this===safeActiveElement()&&this.blur){
this.blur();
return false;
}
},
delegateType:"focusout"
},
click:{
trigger:function(){
if(cQuery.nodeName(this,"input")&&this.type==="checkbox"&&this.click){
this.click();
return false;
}
},
_default:function(event){
return cQuery.nodeName(event.target,"a");
}
},
beforeunload:{
postDispatch:function(event){
if(event.result!==undefined&&event.originalEvent){
event.originalEvent.returnValue=event.result;
}
}
}
},
simulate:function(type,elem,event){
var e=cQuery.extend(
new cQuery.Event(),
event,
{
type:type,
isSimulated:true
}
);
cQuery.event.trigger(e,null,elem);
if(e.isDefaultPrevented()){
event.preventDefault();
}
}
};
cQuery.removeEvent=document.removeEventListener?
function(elem,type,handle){
if(elem.removeEventListener){
elem.removeEventListener(type,handle);
}
}:
function(elem,type,handle){
var name="on"+type;
if(elem.detachEvent){
if(typeof elem[name]==="undefined"){
elem[name]=null;
}
elem.detachEvent(name,handle);
}
};
cQuery.Event=function(src,props){
if(!(this instanceof cQuery.Event)){
return new cQuery.Event(src,props);
}
if(src&&src.type){
this.originalEvent=src;
this.type=src.type;
this.isDefaultPrevented=src.defaultPrevented||
src.defaultPrevented===undefined&&
src.returnValue===false?
returnTrue:
returnFalse;
}else{
this.type=src;
}
if(props){
cQuery.extend(this,props);
}
this.timeStamp=src&&src.timeStamp||cQuery.now();
this[cQuery.expando]=true;
};
cQuery.Event.prototype={
constructor:cQuery.Event,
isDefaultPrevented:returnFalse,
isPropagationStopped:returnFalse,
isImmediatePropagationStopped:returnFalse,
preventDefault:function(){
var e=this.originalEvent;
this.isDefaultPrevented=returnTrue;
if(!e){
return;
}
if(e.preventDefault){
e.preventDefault();
}else{
e.returnValue=false;
}
},
stopPropagation:function(){
var e=this.originalEvent;
this.isPropagationStopped=returnTrue;
if(!e||this.isSimulated){
return;
}
if(e.stopPropagation){
e.stopPropagation();
}
e.cancelBubble=true;
},
stopImmediatePropagation:function(){
var e=this.originalEvent;
this.isImmediatePropagationStopped=returnTrue;
if(e&&e.stopImmediatePropagation){
e.stopImmediatePropagation();
}
this.stopPropagation();
}
};
cQuery.each({
mouseenter:"mouseover",
mouseleave:"mouseout",
pointerenter:"pointerover",
pointerleave:"pointerout"
},function(orig,fix){
cQuery.event.special[orig]={
delegateType:fix,
bindType:fix,
handle:function(event){
var ret,
target=this,
related=event.relatedTarget,
handleObj=event.handleObj;
if(!related||(related!==target&&!cQuery.contains(target,related))){
event.type=handleObj.origType;
ret=handleObj.handler.apply(this,arguments);
event.type=fix;
}
return ret;
}
};
});
if(!support.submit){
cQuery.event.special.submit={
setup:function(){
if(cQuery.nodeName(this,"form")){
return false;
}
cQuery.event.add(this,"click._submit keypress._submit",function(e){
var elem=e.target,
form=cQuery.nodeName(elem,"input")||cQuery.nodeName(elem,"button")?
cQuery.prop(elem,"form"):
undefined;
if(form&&!cQuery._data(form,"submit")){
cQuery.event.add(form,"submit._submit",function(event){
event._submitBubble=true;
});
cQuery._data(form,"submit",true);
}
});
},
postDispatch:function(event){
if(event._submitBubble){
delete event._submitBubble;
if(this.parentNode&&!event.isTrigger){
cQuery.event.simulate("submit",this.parentNode,event);
}
}
},
teardown:function(){
if(cQuery.nodeName(this,"form")){
return false;
}
cQuery.event.remove(this,"._submit");
}
};
}
if(!support.change){
cQuery.event.special.change={
setup:function(){
if(rformElems.test(this.nodeName)){
if(this.type==="checkbox"||this.type==="radio"){
cQuery.event.add(this,"propertychange._change",function(event){
if(event.originalEvent.propertyName==="checked"){
this._justChanged=true;
}
});
cQuery.event.add(this,"click._change",function(event){
if(this._justChanged&&!event.isTrigger){
this._justChanged=false;
}
cQuery.event.simulate("change",this,event);
});
}
return false;
}
cQuery.event.add(this,"beforeactivate._change",function(e){
var elem=e.target;
if(rformElems.test(elem.nodeName)&&!cQuery._data(elem,"change")){
cQuery.event.add(elem,"change._change",function(event){
if(this.parentNode&&!event.isSimulated&&!event.isTrigger){
cQuery.event.simulate("change",this.parentNode,event);
}
});
cQuery._data(elem,"change",true);
}
});
},
handle:function(event){
var elem=event.target;
if(this!==elem||event.isSimulated||event.isTrigger||
(elem.type!=="radio"&&elem.type!=="checkbox")){
return event.handleObj.handler.apply(this,arguments);
}
},
teardown:function(){
cQuery.event.remove(this,"._change");
return!rformElems.test(this.nodeName);
}
};
}
if(!support.focusin){
cQuery.each({focus:"focusin",blur:"focusout"},function(orig,fix){
var handler=function(event){
cQuery.event.simulate(fix,event.target,cQuery.event.fix(event));
};
cQuery.event.special[fix]={
setup:function(){
var doc=this.ownerDocument||this,
attaches=cQuery._data(doc,fix);
if(!attaches){
doc.addEventListener(orig,handler,true);
}
cQuery._data(doc,fix,(attaches||0)+1);
},
teardown:function(){
var doc=this.ownerDocument||this,
attaches=cQuery._data(doc,fix)-1;
if(!attaches){
doc.removeEventListener(orig,handler,true);
cQuery._removeData(doc,fix);
}else{
cQuery._data(doc,fix,attaches);
}
}
};
});
}
cQuery.fn.extend({
on:function(types,selector,data,fn){
return on(this,types,selector,data,fn);
},
one:function(types,selector,data,fn){
return on(this,types,selector,data,fn,1);
},
off:function(types,selector,fn){
var handleObj,type;
if(types&&types.preventDefault&&types.handleObj){
handleObj=types.handleObj;
cQuery(types.delegateTarget).off(
handleObj.namespace?
handleObj.origType+"."+handleObj.namespace:
handleObj.origType,
handleObj.selector,
handleObj.handler
);
return this;
}
if(typeof types==="object"){
for(type in types){
this.off(type,selector,types[type]);
}
return this;
}
if(selector===false||typeof selector==="function"){
fn=selector;
selector=undefined;
}
if(fn===false){
fn=returnFalse;
}
return this.each(function(){
cQuery.event.remove(this,types,fn,selector);
});
},
trigger:function(type,data){
return this.each(function(){
cQuery.event.trigger(type,data,this);
});
},
triggerHandler:function(type,data){
var elem=this[0];
if(elem){
return cQuery.event.trigger(type,data,elem,true);
}
}
});
var rinlinecQuery=/ cQuery\d+="(?:null|\d+)"/g,
rnoshimcache=new RegExp("<(?:"+nodeNames+")[\\s/>]","i"),
rxhtmlTag=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
rnoInnerhtml=/<script|<style|<link/i,
rchecked=/checked\s*(?:[^=]|=\s*.checked.)/i,
rscriptTypeMasked=/^true\/(.*)/,
rcleanScript=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
safeFragment=createSafeFragment(document),
fragmentDiv=safeFragment.appendChild(document.createElement("div"));
function manipulationTarget(elem,content){
return cQuery.nodeName(elem,"table")&&
cQuery.nodeName(content.nodeType!==11?content:content.firstChild,"tr")?
elem.getElementsByTagName("tbody")[0]||
elem.appendChild(elem.ownerDocument.createElement("tbody")):
elem;
}
function disableScript(elem){
elem.type=(cQuery.find.attr(elem,"type")!==null)+"/"+elem.type;
return elem;
}
function restoreScript(elem){
var match=rscriptTypeMasked.exec(elem.type);
if(match){
elem.type=match[1];
}else{
elem.removeAttribute("type");
}
return elem;
}
function cloneCopyEvent(src,dest){
if(dest.nodeType!==1||!cQuery.hasData(src)){
return;
}
var type,i,l,
oldData=cQuery._data(src),
curData=cQuery._data(dest,oldData),
events=oldData.events;
if(events){
delete curData.handle;
curData.events={};
for(type in events){
for(i=0,l=events[type].length;i<l;i++){
cQuery.event.add(dest,type,events[type][i]);
}
}
}
if(curData.data){
curData.data=cQuery.extend({},curData.data);
}
}
function fixCloneNodeIssues(src,dest){
var nodeName,e,data;
if(dest.nodeType!==1){
return;
}
nodeName=dest.nodeName.toLowerCase();
if(!support.noCloneEvent&&dest[cQuery.expando]){
data=cQuery._data(dest);
for(e in data.events){
cQuery.removeEvent(dest,e,data.handle);
}
dest.removeAttribute(cQuery.expando);
}
if(nodeName==="script"&&dest.text!==src.text){
disableScript(dest).text=src.text;
restoreScript(dest);
}else if(nodeName==="object"){
if(dest.parentNode){
dest.outerHTML=src.outerHTML;
}
if(support.html5Clone&&(src.innerHTML&&!cQuery.trim(dest.innerHTML))){
dest.innerHTML=src.innerHTML;
}
}else if(nodeName==="input"&&rcheckableType.test(src.type)){
dest.defaultChecked=dest.checked=src.checked;
if(dest.value!==src.value){
dest.value=src.value;
}
}else if(nodeName==="option"){
dest.defaultSelected=dest.selected=src.defaultSelected;
}else if(nodeName==="input"||nodeName==="textarea"){
dest.defaultValue=src.defaultValue;
}
}
function domManip(collection,args,callback,ignored){
args=concat.apply([],args);
var first,node,hasScripts,
scripts,doc,fragment,
i=0,
l=collection.length,
iNoClone=l-1,
value=args[0],
isFunction=cQuery.isFunction(value);
if(isFunction||
(l>1&&typeof value==="string"&&
!support.checkClone&&rchecked.test(value))){
return collection.each(function(index){
var self=collection.eq(index);
if(isFunction){
args[0]=value.call(this,index,self.html());
}
domManip(self,args,callback,ignored);
});
}
if(l){
fragment=buildFragment(args,collection[0].ownerDocument,false,collection,ignored);
first=fragment.firstChild;
if(fragment.childNodes.length===1){
fragment=first;
}
if(first||ignored){
scripts=cQuery.map(getAll(fragment,"script"),disableScript);
hasScripts=scripts.length;
for(;i<l;i++){
node=fragment;
if(i!==iNoClone){
node=cQuery.clone(node,true,true);
if(hasScripts){
cQuery.merge(scripts,getAll(node,"script"));
}
}
callback.call(collection[i],node,i);
}
if(hasScripts){
doc=scripts[scripts.length-1].ownerDocument;
cQuery.map(scripts,restoreScript);
for(i=0;i<hasScripts;i++){
node=scripts[i];
if(rscriptType.test(node.type||"")&&
!cQuery._data(node,"globalEval")&&
cQuery.contains(doc,node)){
if(node.src){
if(cQuery._evalUrl){
cQuery._evalUrl(node.src);
}
}else{
cQuery.globalEval(
(node.text||node.textContent||node.innerHTML||"")
.replace(rcleanScript,"")
);
}
}
}
}
fragment=first=null;
}
}
return collection;
}
function remove(elem,selector,keepData){
var node,
elems=selector?cQuery.filter(selector,elem):elem,
i=0;
for(;(node=elems[i])!=null;i++){
if(!keepData&&node.nodeType===1){
cQuery.cleanData(getAll(node));
}
if(node.parentNode){
if(keepData&&cQuery.contains(node.ownerDocument,node)){
setGlobalEval(getAll(node,"script"));
}
node.parentNode.removeChild(node);
}
}
return elem;
}
cQuery.extend({
htmlPrefilter:function(html){
return html.replace(rxhtmlTag,"<$1></$2>");
},
clone:function(elem,dataAndEvents,deepDataAndEvents){
var destElements,node,clone,i,srcElements,
inPage=cQuery.contains(elem.ownerDocument,elem);
if(support.html5Clone||cQuery.isXMLDoc(elem)||
!rnoshimcache.test("<"+elem.nodeName+">")){
clone=elem.cloneNode(true);
}else{
fragmentDiv.innerHTML=elem.outerHTML;
fragmentDiv.removeChild(clone=fragmentDiv.firstChild);
}
if((!support.noCloneEvent||!support.noCloneChecked)&&
(elem.nodeType===1||elem.nodeType===11)&&!cQuery.isXMLDoc(elem)){
destElements=getAll(clone);
srcElements=getAll(elem);
for(i=0;(node=srcElements[i])!=null;++i){
if(destElements[i]){
fixCloneNodeIssues(node,destElements[i]);
}
}
}
if(dataAndEvents){
if(deepDataAndEvents){
srcElements=srcElements||getAll(elem);
destElements=destElements||getAll(clone);
for(i=0;(node=srcElements[i])!=null;i++){
cloneCopyEvent(node,destElements[i]);
}
}else{
cloneCopyEvent(elem,clone);
}
}
destElements=getAll(clone,"script");
if(destElements.length>0){
setGlobalEval(destElements,!inPage&&getAll(elem,"script"));
}
destElements=srcElements=node=null;
return clone;
},
cleanData:function(elems,forceAcceptData){
var elem,type,id,data,
i=0,
internalKey=cQuery.expando,
cache=cQuery.cache,
attributes=support.attributes,
special=cQuery.event.special;
for(;(elem=elems[i])!=null;i++){
if(forceAcceptData||acceptData(elem)){
id=elem[internalKey];
data=id&&cache[id];
if(data){
if(data.events){
for(type in data.events){
if(special[type]){
cQuery.event.remove(elem,type);
}else{
cQuery.removeEvent(elem,type,data.handle);
}
}
}
if(cache[id]){
delete cache[id];
if(!attributes&&typeof elem.removeAttribute!=="undefined"){
elem.removeAttribute(internalKey);
}else{
elem[internalKey]=undefined;
}
deletedIds.push(id);
}
}
}
}
}
});
cQuery.fn.extend({
domManip:domManip,
detach:function(selector){
return remove(this,selector,true);
},
remove:function(selector){
return remove(this,selector);
},
text:function(value){
return access(this,function(value){
return value===undefined?
cQuery.text(this):
this.empty().append(
(this[0]&&this[0].ownerDocument||document).createTextNode(value)
);
},null,value,arguments.length);
},
append:function(){
return domManip(this,arguments,function(elem){
if(this.nodeType===1||this.nodeType===11||this.nodeType===9){
var target=manipulationTarget(this,elem);
target.appendChild(elem);
}
});
},
prepend:function(){
return domManip(this,arguments,function(elem){
if(this.nodeType===1||this.nodeType===11||this.nodeType===9){
var target=manipulationTarget(this,elem);
target.insertBefore(elem,target.firstChild);
}
});
},
before:function(){
return domManip(this,arguments,function(elem){
if(this.parentNode){
this.parentNode.insertBefore(elem,this);
}
});
},
after:function(){
return domManip(this,arguments,function(elem){
if(this.parentNode){
this.parentNode.insertBefore(elem,this.nextSibling);
}
});
},
empty:function(){
var elem,
i=0;
for(;(elem=this[i])!=null;i++){
if(elem.nodeType===1){
cQuery.cleanData(getAll(elem,false));
}
while(elem.firstChild){
elem.removeChild(elem.firstChild);
}
if(elem.options&&cQuery.nodeName(elem,"select")){
elem.options.length=0;
}
}
return this;
},
clone:function(dataAndEvents,deepDataAndEvents){
dataAndEvents=dataAndEvents==null?false:dataAndEvents;
deepDataAndEvents=deepDataAndEvents==null?dataAndEvents:deepDataAndEvents;
return this.map(function(){
return cQuery.clone(this,dataAndEvents,deepDataAndEvents);
});
},
html:function(value){
return access(this,function(value){
var elem=this[0]||{},
i=0,
l=this.length;
if(value===undefined){
return elem.nodeType===1?
elem.innerHTML.replace(rinlinecQuery,""):
undefined;
}
if(typeof value==="string"&&!rnoInnerhtml.test(value)&&
(support.htmlSerialize||!rnoshimcache.test(value))&&
(support.leadingWhitespace||!rleadingWhitespace.test(value))&&
!wrapMap[(rtagName.exec(value)||["",""])[1].toLowerCase()]){
value=cQuery.htmlPrefilter(value);
try{
for(;i<l;i++){
elem=this[i]||{};
if(elem.nodeType===1){
cQuery.cleanData(getAll(elem,false));
elem.innerHTML=value;
}
}
elem=0;
}catch(e){}
}
if(elem){
this.empty().append(value);
}
},null,value,arguments.length);
},
replaceWith:function(){
var ignored=[];
return domManip(this,arguments,function(elem){
var parent=this.parentNode;
if(cQuery.inArray(this,ignored)<0){
cQuery.cleanData(getAll(this));
if(parent){
parent.replaceChild(elem,this);
}
}
},ignored);
}
});
cQuery.each({
appendTo:"append",
prependTo:"prepend",
insertBefore:"before",
insertAfter:"after",
replaceAll:"replaceWith"
},function(name,original){
cQuery.fn[name]=function(selector){
var elems,
i=0,
ret=[],
insert=cQuery(selector),
last=insert.length-1;
for(;i<=last;i++){
elems=i===last?this:this.clone(true);
cQuery(insert[i])[original](elems);
push.apply(ret,elems.get());
}
return this.pushStack(ret);
};
});
var iframe,
elemdisplay={
HTML:"block",
BODY:"block"
};
function actualDisplay(name,doc){
var elem=cQuery(doc.createElement(name)).appendTo(doc.body),
display=cQuery.css(elem[0],"display");
elem.detach();
return display;
}
function defaultDisplay(nodeName){
var doc=document,
display=elemdisplay[nodeName];
if(!display){
display=actualDisplay(nodeName,doc);
if(display==="none"||!display){
iframe=(iframe||cQuery("<iframe frameborder='0' width='0' height='0'/>"))
.appendTo(doc.documentElement);
doc=(iframe[0].contentWindow||iframe[0].contentDocument).document;
doc.write();
doc.close();
display=actualDisplay(nodeName,doc);
iframe.detach();
}
elemdisplay[nodeName]=display;
}
return display;
}
var rmargin=(/^margin/);
var rnumnonpx=new RegExp("^("+pnum+")(?!px)[a-z%]+$","i");
var swap=function(elem,options,callback,args){
var ret,name,
old={};
for(name in options){
old[name]=elem.style[name];
elem.style[name]=options[name];
}
ret=callback.apply(elem,args||[]);
for(name in options){
elem.style[name]=old[name];
}
return ret;
};
var documentElement=document.documentElement;
(function(){
var pixelPositionVal,pixelMarginRightVal,boxSizingReliableVal,
reliableHiddenOffsetsVal,reliableMarginRightVal,reliableMarginLeftVal,
container=document.createElement("div"),
div=document.createElement("div");
if(!div.style){
return;
}
div.style.cssText="float:left;opacity:.5";
support.opacity=div.style.opacity==="0.5";
support.cssFloat=!!div.style.cssFloat;
div.style.backgroundClip="content-box";
div.cloneNode(true).style.backgroundClip="";
support.clearCloneStyle=div.style.backgroundClip==="content-box";
container=document.createElement("div");
container.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;"+
"padding:0;margin-top:1px;position:absolute";
div.innerHTML="";
container.appendChild(div);
support.boxSizing=div.style.boxSizing===""||div.style.MozBoxSizing===""||
div.style.WebkitBoxSizing==="";
cQuery.extend(support,{
reliableHiddenOffsets:function(){
if(pixelPositionVal==null){
computeStyleTests();
}
return reliableHiddenOffsetsVal;
},
boxSizingReliable:function(){
if(pixelPositionVal==null){
computeStyleTests();
}
return boxSizingReliableVal;
},
pixelMarginRight:function(){
if(pixelPositionVal==null){
computeStyleTests();
}
return pixelMarginRightVal;
},
pixelPosition:function(){
if(pixelPositionVal==null){
computeStyleTests();
}
return pixelPositionVal;
},
reliableMarginRight:function(){
if(pixelPositionVal==null){
computeStyleTests();
}
return reliableMarginRightVal;
},
reliableMarginLeft:function(){
if(pixelPositionVal==null){
computeStyleTests();
}
return reliableMarginLeftVal;
}
});
function computeStyleTests(){
var contents,divStyle,
documentElement=document.documentElement;
documentElement.appendChild(container);
div.style.cssText=
"-webkit-box-sizing:border-box;box-sizing:border-box;"+
"position:relative;display:block;"+
"margin:auto;border:1px;padding:1px;"+
"top:1%;width:50%";
pixelPositionVal=boxSizingReliableVal=reliableMarginLeftVal=false;
pixelMarginRightVal=reliableMarginRightVal=true;
if(window.getComputedStyle){
divStyle=window.getComputedStyle(div);
pixelPositionVal=(divStyle||{}).top!=="1%";
reliableMarginLeftVal=(divStyle||{}).marginLeft==="2px";
boxSizingReliableVal=(divStyle||{width:"4px"}).width==="4px";
div.style.marginRight="50%";
pixelMarginRightVal=(divStyle||{marginRight:"4px"}).marginRight==="4px";
contents=div.appendChild(document.createElement("div"));
contents.style.cssText=div.style.cssText=
"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;"+
"box-sizing:content-box;display:block;margin:0;border:0;padding:0";
contents.style.marginRight=contents.style.width="0";
div.style.width="1px";
reliableMarginRightVal=
!parseFloat((window.getComputedStyle(contents)||{}).marginRight);
div.removeChild(contents);
}
div.style.display="none";
reliableHiddenOffsetsVal=div.getClientRects().length===0;
if(reliableHiddenOffsetsVal){
div.style.display="";
div.innerHTML="<table><tr><td></td><td>t</td></tr></table>";
div.childNodes[0].style.borderCollapse="separate";
contents=div.getElementsByTagName("td");
contents[0].style.cssText="margin:0;border:0;padding:0;display:none";
reliableHiddenOffsetsVal=contents[0].offsetHeight===0;
if(reliableHiddenOffsetsVal){
contents[0].style.display="";
contents[1].style.display="none";
reliableHiddenOffsetsVal=contents[0].offsetHeight===0;
}
}
documentElement.removeChild(container);
}
})();
var getStyles,curCSS,
rposition=/^(top|right|bottom|left)$/;
if(window.getComputedStyle){
getStyles=function(elem){
var view=elem.ownerDocument.defaultView;
if(!view||!view.opener){
view=window;
}
return view.getComputedStyle(elem);
};
curCSS=function(elem,name,computed){
var width,minWidth,maxWidth,ret,
style=elem.style;
computed=computed||getStyles(elem);
ret=computed?computed.getPropertyValue(name)||computed[name]:undefined;
if((ret===""||ret===undefined)&&!cQuery.contains(elem.ownerDocument,elem)){
ret=cQuery.style(elem,name);
}
if(computed){
if(!support.pixelMarginRight()&&rnumnonpx.test(ret)&&rmargin.test(name)){
width=style.width;
minWidth=style.minWidth;
maxWidth=style.maxWidth;
style.minWidth=style.maxWidth=style.width=ret;
ret=computed.width;
style.width=width;
style.minWidth=minWidth;
style.maxWidth=maxWidth;
}
}
return ret===undefined?
ret:
ret+"";
};
}else if(documentElement.currentStyle){
getStyles=function(elem){
return elem.currentStyle;
};
curCSS=function(elem,name,computed){
var left,rs,rsLeft,ret,
style=elem.style;
computed=computed||getStyles(elem);
ret=computed?computed[name]:undefined;
if(ret==null&&style&&style[name]){
ret=style[name];
}
if(rnumnonpx.test(ret)&&!rposition.test(name)){
left=style.left;
rs=elem.runtimeStyle;
rsLeft=rs&&rs.left;
if(rsLeft){
rs.left=elem.currentStyle.left;
}
style.left=name==="fontSize"?"1em":ret;
ret=style.pixelLeft+"px";
style.left=left;
if(rsLeft){
rs.left=rsLeft;
}
}
return ret===undefined?
ret:
ret+""||"auto";
};
}
function addGetHookIf(conditionFn,hookFn){
return{
get:function(){
if(conditionFn()){
delete this.get;
return;
}
return(this.get=hookFn).apply(this,arguments);
}
};
}
var
ralpha=/alpha\([^)]*\)/i,
ropacity=/opacity\s*=\s*([^)]*)/i,
rdisplayswap=/^(none|table(?!-c[ea]).+)/,
rnumsplit=new RegExp("^("+pnum+")(.*)$","i"),
cssShow={position:"absolute",visibility:"hidden",display:"block"},
cssNormalTransform={
letterSpacing:"0",
fontWeight:"400"
},
cssPrefixes=["Webkit","O","Moz","ms"],
emptyStyle=document.createElement("div").style;
function vendorPropName(name){
if(name in emptyStyle){
return name;
}
var capName=name.charAt(0).toUpperCase()+name.slice(1),
i=cssPrefixes.length;
while(i--){
name=cssPrefixes[i]+capName;
if(name in emptyStyle){
return name;
}
}
}
function showHide(elements,show){
var display,elem,hidden,
values=[],
index=0,
length=elements.length;
for(;index<length;index++){
elem=elements[index];
if(!elem.style){
continue;
}
values[index]=cQuery._data(elem,"olddisplay");
display=elem.style.display;
if(show){
if(!values[index]&&display==="none"){
elem.style.display="";
}
if(elem.style.display===""&&isHidden(elem)){
values[index]=
cQuery._data(elem,"olddisplay",defaultDisplay(elem.nodeName));
}
}else{
hidden=isHidden(elem);
if(display&&display!=="none"||!hidden){
cQuery._data(
elem,
"olddisplay",
hidden?display:cQuery.css(elem,"display")
);
}
}
}
for(index=0;index<length;index++){
elem=elements[index];
if(!elem.style){
continue;
}
if(!show||elem.style.display==="none"||elem.style.display===""){
elem.style.display=show?values[index]||"":"none";
}
}
return elements;
}
function setPositiveNumber(elem,value,subtract){
var matches=rnumsplit.exec(value);
return matches?
Math.max(0,matches[1]-(subtract||0))+(matches[2]||"px"):
value;
}
function augmentWidthOrHeight(elem,name,extra,isBorderBox,styles){
var i=extra===(isBorderBox?"border":"content")?
4:
name==="width"?1:0,
val=0;
for(;i<4;i+=2){
if(extra==="margin"){
val+=cQuery.css(elem,extra+cssExpand[i],true,styles);
}
if(isBorderBox){
if(extra==="content"){
val-=cQuery.css(elem,"padding"+cssExpand[i],true,styles);
}
if(extra!=="margin"){
val-=cQuery.css(elem,"border"+cssExpand[i]+"Width",true,styles);
}
}else{
val+=cQuery.css(elem,"padding"+cssExpand[i],true,styles);
if(extra!=="padding"){
val+=cQuery.css(elem,"border"+cssExpand[i]+"Width",true,styles);
}
}
}
return val;
}
function getWidthOrHeight(elem,name,extra){
var valueIsBorderBox=true,
val=name==="width"?elem.offsetWidth:elem.offsetHeight,
styles=getStyles(elem),
isBorderBox=support.boxSizing&&
cQuery.css(elem,"boxSizing",false,styles)==="border-box";
if(val<=0||val==null){
val=curCSS(elem,name,styles);
if(val<0||val==null){
val=elem.style[name];
}
if(rnumnonpx.test(val)){
return val;
}
valueIsBorderBox=isBorderBox&&
(support.boxSizingReliable()||val===elem.style[name]);
val=parseFloat(val)||0;
}
return(val+
augmentWidthOrHeight(
elem,
name,
extra||(isBorderBox?"border":"content"),
valueIsBorderBox,
styles
)
)+"px";
}
cQuery.extend({
cssHooks:{
opacity:{
get:function(elem,computed){
if(computed){
var ret=curCSS(elem,"opacity");
return ret===""?"1":ret;
}
}
}
},
cssNumber:{
"animationIterationCount":true,
"columnCount":true,
"fillOpacity":true,
"flexGrow":true,
"flexShrink":true,
"fontWeight":true,
"lineHeight":true,
"opacity":true,
"order":true,
"orphans":true,
"widows":true,
"zIndex":true,
"zoom":true
},
cssProps:{
"float":support.cssFloat?"cssFloat":"styleFloat"
},
style:function(elem,name,value,extra){
if(!elem||elem.nodeType===3||elem.nodeType===8||!elem.style){
return;
}
var ret,type,hooks,
origName=cQuery.camelCase(name),
style=elem.style;
name=cQuery.cssProps[origName]||
(cQuery.cssProps[origName]=vendorPropName(origName)||origName);
hooks=cQuery.cssHooks[name]||cQuery.cssHooks[origName];
if(value!==undefined){
type=typeof value;
if(type==="string"&&(ret=rcssNum.exec(value))&&ret[1]){
value=adjustCSS(elem,name,ret);
type="number";
}
if(value==null||value!==value){
return;
}
if(type==="number"){
value+=ret&&ret[3]||(cQuery.cssNumber[origName]?"":"px");
}
if(!support.clearCloneStyle&&value===""&&name.indexOf("background")===0){
style[name]="inherit";
}
if(!hooks||!("set"in hooks)||
(value=hooks.set(elem,value,extra))!==undefined){
try{
style[name]=value;
}catch(e){}
}
}else{
if(hooks&&"get"in hooks&&
(ret=hooks.get(elem,false,extra))!==undefined){
return ret;
}
return style[name];
}
},
css:function(elem,name,extra,styles){
var num,val,hooks,
origName=cQuery.camelCase(name);
name=cQuery.cssProps[origName]||
(cQuery.cssProps[origName]=vendorPropName(origName)||origName);
hooks=cQuery.cssHooks[name]||cQuery.cssHooks[origName];
if(hooks&&"get"in hooks){
val=hooks.get(elem,true,extra);
}
if(val===undefined){
val=curCSS(elem,name,styles);
}
if(val==="normal"&&name in cssNormalTransform){
val=cssNormalTransform[name];
}
if(extra===""||extra){
num=parseFloat(val);
return extra===true||isFinite(num)?num||0:val;
}
return val;
}
});
cQuery.each(["height","width"],function(i,name){
cQuery.cssHooks[name]={
get:function(elem,computed,extra){
if(computed){
return rdisplayswap.test(cQuery.css(elem,"display"))&&
elem.offsetWidth===0?
swap(elem,cssShow,function(){
return getWidthOrHeight(elem,name,extra);
}):
getWidthOrHeight(elem,name,extra);
}
},
set:function(elem,value,extra){
var styles=extra&&getStyles(elem);
return setPositiveNumber(elem,value,extra?
augmentWidthOrHeight(
elem,
name,
extra,
support.boxSizing&&
cQuery.css(elem,"boxSizing",false,styles)==="border-box",
styles
):0
);
}
};
});
if(!support.opacity){
cQuery.cssHooks.opacity={
get:function(elem,computed){
return ropacity.test((computed&&elem.currentStyle?
elem.currentStyle.filter:
elem.style.filter)||"")?
(0.01*parseFloat(RegExp.$1))+"":
computed?"1":"";
},
set:function(elem,value){
var style=elem.style,
currentStyle=elem.currentStyle,
opacity=cQuery.isNumeric(value)?"alpha(opacity="+value*100+")":"",
filter=currentStyle&&currentStyle.filter||style.filter||"";
style.zoom=1;
if((value>=1||value==="")&&
cQuery.trim(filter.replace(ralpha,""))===""&&
style.removeAttribute){
style.removeAttribute("filter");
if(value===""||currentStyle&&!currentStyle.filter){
return;
}
}
style.filter=ralpha.test(filter)?
filter.replace(ralpha,opacity):
filter+" "+opacity;
}
};
}
cQuery.cssHooks.marginRight=addGetHookIf(support.reliableMarginRight,
function(elem,computed){
if(computed){
return swap(elem,{"display":"inline-block"},
curCSS,[elem,"marginRight"]);
}
}
);
cQuery.cssHooks.marginLeft=addGetHookIf(support.reliableMarginLeft,
function(elem,computed){
if(computed){
return(
parseFloat(curCSS(elem,"marginLeft"))||
(cQuery.contains(elem.ownerDocument,elem)?
elem.getBoundingClientRect().left-
swap(elem,{marginLeft:0},function(){
return elem.getBoundingClientRect().left;
}):
0
)
)+"px";
}
}
);
cQuery.each({
margin:"",
padding:"",
border:"Width"
},function(prefix,suffix){
cQuery.cssHooks[prefix+suffix]={
expand:function(value){
var i=0,
expanded={},
parts=typeof value==="string"?value.split(" "):[value];
for(;i<4;i++){
expanded[prefix+cssExpand[i]+suffix]=
parts[i]||parts[i-2]||parts[0];
}
return expanded;
}
};
if(!rmargin.test(prefix)){
cQuery.cssHooks[prefix+suffix].set=setPositiveNumber;
}
});
cQuery.fn.extend({
css:function(name,value){
return access(this,function(elem,name,value){
var styles,len,
map={},
i=0;
if(cQuery.isArray(name)){
styles=getStyles(elem);
len=name.length;
for(;i<len;i++){
map[name[i]]=cQuery.css(elem,name[i],false,styles);
}
return map;
}
return value!==undefined?
cQuery.style(elem,name,value):
cQuery.css(elem,name);
},name,value,arguments.length>1);
},
show:function(){
return showHide(this,true);
},
hide:function(){
return showHide(this);
},
toggle:function(state){
if(typeof state==="boolean"){
return state?this.show():this.hide();
}
return this.each(function(){
if(isHidden(this)){
cQuery(this).show();
}else{
cQuery(this).hide();
}
});
}
});
function Tween(elem,options,prop,end,easing){
return new Tween.prototype.init(elem,options,prop,end,easing);
}
cQuery.Tween=Tween;
Tween.prototype={
constructor:Tween,
init:function(elem,options,prop,end,easing,unit){
this.elem=elem;
this.prop=prop;
this.easing=easing||cQuery.easing._default;
this.options=options;
this.start=this.now=this.cur();
this.end=end;
this.unit=unit||(cQuery.cssNumber[prop]?"":"px");
},
cur:function(){
var hooks=Tween.propHooks[this.prop];
return hooks&&hooks.get?
hooks.get(this):
Tween.propHooks._default.get(this);
},
run:function(percent){
var eased,
hooks=Tween.propHooks[this.prop];
if(this.options.duration){
this.pos=eased=cQuery.easing[this.easing](
percent,this.options.duration*percent,0,1,this.options.duration
);
}else{
this.pos=eased=percent;
}
this.now=(this.end-this.start)*eased+this.start;
if(this.options.step){
this.options.step.call(this.elem,this.now,this);
}
if(hooks&&hooks.set){
hooks.set(this);
}else{
Tween.propHooks._default.set(this);
}
return this;
}
};
Tween.prototype.init.prototype=Tween.prototype;
Tween.propHooks={
_default:{
get:function(tween){
var result;
if(tween.elem.nodeType!==1||
tween.elem[tween.prop]!=null&&tween.elem.style[tween.prop]==null){
return tween.elem[tween.prop];
}
result=cQuery.css(tween.elem,tween.prop,"");
return!result||result==="auto"?0:result;
},
set:function(tween){
if(cQuery.fx.step[tween.prop]){
cQuery.fx.step[tween.prop](tween);
}else if(tween.elem.nodeType===1&&
(tween.elem.style[cQuery.cssProps[tween.prop]]!=null||
cQuery.cssHooks[tween.prop])){
cQuery.style(tween.elem,tween.prop,tween.now+tween.unit);
}else{
tween.elem[tween.prop]=tween.now;
}
}
}
};
Tween.propHooks.scrollTop=Tween.propHooks.scrollLeft={
set:function(tween){
if(tween.elem.nodeType&&tween.elem.parentNode){
tween.elem[tween.prop]=tween.now;
}
}
};
cQuery.easing={
linear:function(p){
return p;
},
swing:function(p){
return 0.5-Math.cos(p*Math.PI)/2;
},
_default:"swing"
};
cQuery.fx=Tween.prototype.init;
cQuery.fx.step={};
var
fxNow,timerId,
rfxtypes=/^(?:toggle|show|hide)$/,
rrun=/queueHooks$/;
function createFxNow(){
window.setTimeout(function(){
fxNow=undefined;
});
return(fxNow=cQuery.now());
}
function genFx(type,includeWidth){
var which,
attrs={height:type},
i=0;
includeWidth=includeWidth?1:0;
for(;i<4;i+=2-includeWidth){
which=cssExpand[i];
attrs["margin"+which]=attrs["padding"+which]=type;
}
if(includeWidth){
attrs.opacity=attrs.width=type;
}
return attrs;
}
function createTween(value,prop,animation){
var tween,
collection=(Animation.tweeners[prop]||[]).concat(Animation.tweeners["*"]),
index=0,
length=collection.length;
for(;index<length;index++){
if((tween=collection[index].call(animation,prop,value))){
return tween;
}
}
}
function defaultPrefilter(elem,props,opts){
var prop,value,toggle,tween,hooks,oldfire,display,checkDisplay,
anim=this,
orig={},
style=elem.style,
hidden=elem.nodeType&&isHidden(elem),
dataShow=cQuery._data(elem,"fxshow");
if(!opts.queue){
hooks=cQuery._queueHooks(elem,"fx");
if(hooks.unqueued==null){
hooks.unqueued=0;
oldfire=hooks.empty.fire;
hooks.empty.fire=function(){
if(!hooks.unqueued){
oldfire();
}
};
}
hooks.unqueued++;
anim.always(function(){
anim.always(function(){
hooks.unqueued--;
if(!cQuery.queue(elem,"fx").length){
hooks.empty.fire();
}
});
});
}
if(elem.nodeType===1&&("height"in props||"width"in props)){
opts.overflow=[style.overflow,style.overflowX,style.overflowY];
display=cQuery.css(elem,"display");
checkDisplay=display==="none"?
cQuery._data(elem,"olddisplay")||defaultDisplay(elem.nodeName):display;
if(checkDisplay==="inline"&&cQuery.css(elem,"float")==="none"){
if(!support.inlineBlockNeedsLayout||defaultDisplay(elem.nodeName)==="inline"){
style.display="inline-block";
}else{
style.zoom=1;
}
}
}
if(opts.overflow){
style.overflow="hidden";
if(!support.shrinkWrapBlocks()){
anim.always(function(){
style.overflow=opts.overflow[0];
style.overflowX=opts.overflow[1];
style.overflowY=opts.overflow[2];
});
}
}
for(prop in props){
value=props[prop];
if(rfxtypes.exec(value)){
delete props[prop];
toggle=toggle||value==="toggle";
if(value===(hidden?"hide":"show")){
if(value==="show"&&dataShow&&dataShow[prop]!==undefined){
hidden=true;
}else{
continue;
}
}
orig[prop]=dataShow&&dataShow[prop]||cQuery.style(elem,prop);
}else{
display=undefined;
}
}
if(!cQuery.isEmptyObject(orig)){
if(dataShow){
if("hidden"in dataShow){
hidden=dataShow.hidden;
}
}else{
dataShow=cQuery._data(elem,"fxshow",{});
}
if(toggle){
dataShow.hidden=!hidden;
}
if(hidden){
cQuery(elem).show();
}else{
anim.done(function(){
cQuery(elem).hide();
});
}
anim.done(function(){
var prop;
cQuery._removeData(elem,"fxshow");
for(prop in orig){
cQuery.style(elem,prop,orig[prop]);
}
});
for(prop in orig){
tween=createTween(hidden?dataShow[prop]:0,prop,anim);
if(!(prop in dataShow)){
dataShow[prop]=tween.start;
if(hidden){
tween.end=tween.start;
tween.start=prop==="width"||prop==="height"?1:0;
}
}
}
}else if((display==="none"?defaultDisplay(elem.nodeName):display)==="inline"){
style.display=display;
}
}
function propFilter(props,specialEasing){
var index,name,easing,value,hooks;
for(index in props){
name=cQuery.camelCase(index);
easing=specialEasing[name];
value=props[index];
if(cQuery.isArray(value)){
easing=value[1];
value=props[index]=value[0];
}
if(index!==name){
props[name]=value;
delete props[index];
}
hooks=cQuery.cssHooks[name];
if(hooks&&"expand"in hooks){
value=hooks.expand(value);
delete props[name];
for(index in value){
if(!(index in props)){
props[index]=value[index];
specialEasing[index]=easing;
}
}
}else{
specialEasing[name]=easing;
}
}
}
function Animation(elem,properties,options){
var result,
stopped,
index=0,
length=Animation.prefilters.length,
deferred=cQuery.Deferred().always(function(){
delete tick.elem;
}),
tick=function(){
if(stopped){
return false;
}
var currentTime=fxNow||createFxNow(),
remaining=Math.max(0,animation.startTime+animation.duration-currentTime),
temp=remaining/animation.duration||0,
percent=1-temp,
index=0,
length=animation.tweens.length;
for(;index<length;index++){
animation.tweens[index].run(percent);
}
deferred.notifyWith(elem,[animation,percent,remaining]);
if(percent<1&&length){
return remaining;
}else{
deferred.resolveWith(elem,[animation]);
return false;
}
},
animation=deferred.promise({
elem:elem,
props:cQuery.extend({},properties),
opts:cQuery.extend(true,{
specialEasing:{},
easing:cQuery.easing._default
},options),
originalProperties:properties,
originalOptions:options,
startTime:fxNow||createFxNow(),
duration:options.duration,
tweens:[],
createTween:function(prop,end){
var tween=cQuery.Tween(elem,animation.opts,prop,end,
animation.opts.specialEasing[prop]||animation.opts.easing);
animation.tweens.push(tween);
return tween;
},
stop:function(gotoEnd){
var index=0,
length=gotoEnd?animation.tweens.length:0;
if(stopped){
return this;
}
stopped=true;
for(;index<length;index++){
animation.tweens[index].run(1);
}
if(gotoEnd){
deferred.notifyWith(elem,[animation,1,0]);
deferred.resolveWith(elem,[animation,gotoEnd]);
}else{
deferred.rejectWith(elem,[animation,gotoEnd]);
}
return this;
}
}),
props=animation.props;
propFilter(props,animation.opts.specialEasing);
for(;index<length;index++){
result=Animation.prefilters[index].call(animation,elem,props,animation.opts);
if(result){
if(cQuery.isFunction(result.stop)){
cQuery._queueHooks(animation.elem,animation.opts.queue).stop=
cQuery.proxy(result.stop,result);
}
return result;
}
}
cQuery.map(props,createTween,animation);
if(cQuery.isFunction(animation.opts.start)){
animation.opts.start.call(elem,animation);
}
cQuery.fx.timer(
cQuery.extend(tick,{
elem:elem,
anim:animation,
queue:animation.opts.queue
})
);
return animation.progress(animation.opts.progress)
.done(animation.opts.done,animation.opts.complete)
.fail(animation.opts.fail)
.always(animation.opts.always);
}
cQuery.Animation=cQuery.extend(Animation,{
tweeners:{
"*":[function(prop,value){
var tween=this.createTween(prop,value);
adjustCSS(tween.elem,prop,rcssNum.exec(value),tween);
return tween;
}]
},
tweener:function(props,callback){
if(cQuery.isFunction(props)){
callback=props;
props=["*"];
}else{
props=props.match(rnotwhite);
}
var prop,
index=0,
length=props.length;
for(;index<length;index++){
prop=props[index];
Animation.tweeners[prop]=Animation.tweeners[prop]||[];
Animation.tweeners[prop].unshift(callback);
}
},
prefilters:[defaultPrefilter],
prefilter:function(callback,prepend){
if(prepend){
Animation.prefilters.unshift(callback);
}else{
Animation.prefilters.push(callback);
}
}
});
cQuery.speed=function(speed,easing,fn){
var opt=speed&&typeof speed==="object"?cQuery.extend({},speed):{
complete:fn||!fn&&easing||
cQuery.isFunction(speed)&&speed,
duration:speed,
easing:fn&&easing||easing&&!cQuery.isFunction(easing)&&easing
};
opt.duration=cQuery.fx.off?0:typeof opt.duration==="number"?opt.duration:
opt.duration in cQuery.fx.speeds?
cQuery.fx.speeds[opt.duration]:cQuery.fx.speeds._default;
if(opt.queue==null||opt.queue===true){
opt.queue="fx";
}
opt.old=opt.complete;
opt.complete=function(){
if(cQuery.isFunction(opt.old)){
opt.old.call(this);
}
if(opt.queue){
cQuery.dequeue(this,opt.queue);
}
};
return opt;
};
cQuery.fn.extend({
fadeTo:function(speed,to,easing,callback){
return this.filter(isHidden).css("opacity",0).show()
.end().animate({opacity:to},speed,easing,callback);
},
animate:function(prop,speed,easing,callback){
var empty=cQuery.isEmptyObject(prop),
optall=cQuery.speed(speed,easing,callback),
doAnimation=function(){
var anim=Animation(this,cQuery.extend({},prop),optall);
if(empty||cQuery._data(this,"finish")){
anim.stop(true);
}
};
doAnimation.finish=doAnimation;
return empty||optall.queue===false?
this.each(doAnimation):
this.queue(optall.queue,doAnimation);
},
stop:function(type,clearQueue,gotoEnd){
var stopQueue=function(hooks){
var stop=hooks.stop;
delete hooks.stop;
stop(gotoEnd);
};
if(typeof type!=="string"){
gotoEnd=clearQueue;
clearQueue=type;
type=undefined;
}
if(clearQueue&&type!==false){
this.queue(type||"fx",[]);
}
return this.each(function(){
var dequeue=true,
index=type!=null&&type+"queueHooks",
timers=cQuery.timers,
data=cQuery._data(this);
if(index){
if(data[index]&&data[index].stop){
stopQueue(data[index]);
}
}else{
for(index in data){
if(data[index]&&data[index].stop&&rrun.test(index)){
stopQueue(data[index]);
}
}
}
for(index=timers.length;index--;){
if(timers[index].elem===this&&
(type==null||timers[index].queue===type)){
timers[index].anim.stop(gotoEnd);
dequeue=false;
timers.splice(index,1);
}
}
if(dequeue||!gotoEnd){
cQuery.dequeue(this,type);
}
});
},
finish:function(type){
if(type!==false){
type=type||"fx";
}
return this.each(function(){
var index,
data=cQuery._data(this),
queue=data[type+"queue"],
hooks=data[type+"queueHooks"],
timers=cQuery.timers,
length=queue?queue.length:0;
data.finish=true;
cQuery.queue(this,type,[]);
if(hooks&&hooks.stop){
hooks.stop.call(this,true);
}
for(index=timers.length;index--;){
if(timers[index].elem===this&&timers[index].queue===type){
timers[index].anim.stop(true);
timers.splice(index,1);
}
}
for(index=0;index<length;index++){
if(queue[index]&&queue[index].finish){
queue[index].finish.call(this);
}
}
delete data.finish;
});
}
});
cQuery.each(["toggle","show","hide"],function(i,name){
var cssFn=cQuery.fn[name];
cQuery.fn[name]=function(speed,easing,callback){
return speed==null||typeof speed==="boolean"?
cssFn.apply(this,arguments):
this.animate(genFx(name,true),speed,easing,callback);
};
});
cQuery.each({
slideDown:genFx("show"),
slideUp:genFx("hide"),
slideToggle:genFx("toggle"),
fadeIn:{opacity:"show"},
fadeOut:{opacity:"hide"},
fadeToggle:{opacity:"toggle"}
},function(name,props){
cQuery.fn[name]=function(speed,easing,callback){
return this.animate(props,speed,easing,callback);
};
});
cQuery.timers=[];
cQuery.fx.tick=function(){
var timer,
timers=cQuery.timers,
i=0;
fxNow=cQuery.now();
for(;i<timers.length;i++){
timer=timers[i];
if(!timer()&&timers[i]===timer){
timers.splice(i--,1);
}
}
if(!timers.length){
cQuery.fx.stop();
}
fxNow=undefined;
};
cQuery.fx.timer=function(timer){
cQuery.timers.push(timer);
if(timer()){
cQuery.fx.start();
}else{
cQuery.timers.pop();
}
};
cQuery.fx.interval=13;
cQuery.fx.start=function(){
if(!timerId){
timerId=window.setInterval(cQuery.fx.tick,cQuery.fx.interval);
}
};
cQuery.fx.stop=function(){
window.clearInterval(timerId);
timerId=null;
};
cQuery.fx.speeds={
slow:600,
fast:200,
_default:400
};
cQuery.fn.delay=function(time,type){
time=cQuery.fx?cQuery.fx.speeds[time]||time:time;
type=type||"fx";
return this.queue(type,function(next,hooks){
var timeout=window.setTimeout(next,time);
hooks.stop=function(){
window.clearTimeout(timeout);
};
});
};
(function(){
var a,
input=document.createElement("input"),
div=document.createElement("div"),
select=document.createElement("select"),
opt=select.appendChild(document.createElement("option"));
div=document.createElement("div");
div.setAttribute("className","t");
div.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
a=div.getElementsByTagName("a")[0];
input.setAttribute("type","checkbox");
div.appendChild(input);
a=div.getElementsByTagName("a")[0];
a.style.cssText="top:1px";
support.getSetAttribute=div.className!=="t";
support.style=/top/.test(a.getAttribute("style"));
support.hrefNormalized=a.getAttribute("href")==="/a";
support.checkOn=!!input.value;
support.optSelected=opt.selected;
support.enctype=!!document.createElement("form").enctype;
select.disabled=true;
support.optDisabled=!opt.disabled;
input=document.createElement("input");
input.setAttribute("value","");
support.input=input.getAttribute("value")==="";
input.value="t";
input.setAttribute("type","radio");
support.radioValue=input.value==="t";
})();
var rreturn=/\r/g,
rspaces=/[\x20\t\r\n\f]+/g;
cQuery.fn.extend({
val:function(value){
var hooks,ret,isFunction,
elem=this[0];
if(!arguments.length){
if(elem){
hooks=cQuery.valHooks[elem.type]||
cQuery.valHooks[elem.nodeName.toLowerCase()];
if(
hooks&&
"get"in hooks&&
(ret=hooks.get(elem,"value"))!==undefined
){
return ret;
}
ret=elem.value;
return typeof ret==="string"?
ret.replace(rreturn,""):
ret==null?"":ret;
}
return;
}
isFunction=cQuery.isFunction(value);
return this.each(function(i){
var val;
if(this.nodeType!==1){
return;
}
if(isFunction){
val=value.call(this,i,cQuery(this).val());
}else{
val=value;
}
if(val==null){
val="";
}else if(typeof val==="number"){
val+="";
}else if(cQuery.isArray(val)){
val=cQuery.map(val,function(value){
return value==null?"":value+"";
});
}
hooks=cQuery.valHooks[this.type]||cQuery.valHooks[this.nodeName.toLowerCase()];
if(!hooks||!("set"in hooks)||hooks.set(this,val,"value")===undefined){
this.value=val;
}
});
}
});
cQuery.extend({
valHooks:{
option:{
get:function(elem){
var val=cQuery.find.attr(elem,"value");
return val!=null?
val:
cQuery.trim(cQuery.text(elem)).replace(rspaces," ");
}
},
select:{
get:function(elem){
var value,option,
options=elem.options,
index=elem.selectedIndex,
one=elem.type==="select-one"||index<0,
values=one?null:[],
max=one?index+1:options.length,
i=index<0?
max:
one?index:0;
for(;i<max;i++){
option=options[i];
if((option.selected||i===index)&&
(support.optDisabled?
!option.disabled:
option.getAttribute("disabled")===null)&&
(!option.parentNode.disabled||
!cQuery.nodeName(option.parentNode,"optgroup"))){
value=cQuery(option).val();
if(one){
return value;
}
values.push(value);
}
}
return values;
},
set:function(elem,value){
var optionSet,option,
options=elem.options,
values=cQuery.makeArray(value),
i=options.length;
while(i--){
option=options[i];
if(cQuery.inArray(cQuery.valHooks.option.get(option),values)>-1){
try{
option.selected=optionSet=true;
}catch(_){
option.scrollHeight;
}
}else{
option.selected=false;
}
}
if(!optionSet){
elem.selectedIndex=-1;
}
return options;
}
}
}
});
cQuery.each(["radio","checkbox"],function(){
cQuery.valHooks[this]={
set:function(elem,value){
if(cQuery.isArray(value)){
return(elem.checked=cQuery.inArray(cQuery(elem).val(),value)>-1);
}
}
};
if(!support.checkOn){
cQuery.valHooks[this].get=function(elem){
return elem.getAttribute("value")===null?"on":elem.value;
};
}
});
var nodeHook,boolHook,
attrHandle=cQuery.expr.attrHandle,
ruseDefault=/^(?:checked|selected)$/i,
getSetAttribute=support.getSetAttribute,
getSetInput=support.input;
cQuery.fn.extend({
attr:function(name,value){
return access(this,cQuery.attr,name,value,arguments.length>1);
},
removeAttr:function(name){
return this.each(function(){
cQuery.removeAttr(this,name);
});
}
});
cQuery.extend({
attr:function(elem,name,value){
var ret,hooks,
nType=elem.nodeType;
if(nType===3||nType===8||nType===2){
return;
}
if(typeof elem.getAttribute==="undefined"){
return cQuery.prop(elem,name,value);
}
if(nType!==1||!cQuery.isXMLDoc(elem)){
name=name.toLowerCase();
hooks=cQuery.attrHooks[name]||
(cQuery.expr.match.bool.test(name)?boolHook:nodeHook);
}
if(value!==undefined){
if(value===null){
cQuery.removeAttr(elem,name);
return;
}
if(hooks&&"set"in hooks&&
(ret=hooks.set(elem,value,name))!==undefined){
return ret;
}
elem.setAttribute(name,value+"");
return value;
}
if(hooks&&"get"in hooks&&(ret=hooks.get(elem,name))!==null){
return ret;
}
ret=cQuery.find.attr(elem,name);
return ret==null?undefined:ret;
},
attrHooks:{
type:{
set:function(elem,value){
if(!support.radioValue&&value==="radio"&&
cQuery.nodeName(elem,"input")){
var val=elem.value;
elem.setAttribute("type",value);
if(val){
elem.value=val;
}
return value;
}
}
}
},
removeAttr:function(elem,value){
var name,propName,
i=0,
attrNames=value&&value.match(rnotwhite);
if(attrNames&&elem.nodeType===1){
while((name=attrNames[i++])){
propName=cQuery.propFix[name]||name;
if(cQuery.expr.match.bool.test(name)){
if(getSetInput&&getSetAttribute||!ruseDefault.test(name)){
elem[propName]=false;
}else{
elem[cQuery.camelCase("default-"+name)]=
elem[propName]=false;
}
}else{
cQuery.attr(elem,name,"");
}
elem.removeAttribute(getSetAttribute?name:propName);
}
}
}
});
boolHook={
set:function(elem,value,name){
if(value===false){
cQuery.removeAttr(elem,name);
}else if(getSetInput&&getSetAttribute||!ruseDefault.test(name)){
elem.setAttribute(!getSetAttribute&&cQuery.propFix[name]||name,name);
}else{
elem[cQuery.camelCase("default-"+name)]=elem[name]=true;
}
return name;
}
};
cQuery.each(cQuery.expr.match.bool.source.match(/\w+/g),function(i,name){
var getter=attrHandle[name]||cQuery.find.attr;
if(getSetInput&&getSetAttribute||!ruseDefault.test(name)){
attrHandle[name]=function(elem,name,isXML){
var ret,handle;
if(!isXML){
handle=attrHandle[name];
attrHandle[name]=ret;
ret=getter(elem,name,isXML)!=null?
name.toLowerCase():
null;
attrHandle[name]=handle;
}
return ret;
};
}else{
attrHandle[name]=function(elem,name,isXML){
if(!isXML){
return elem[cQuery.camelCase("default-"+name)]?
name.toLowerCase():
null;
}
};
}
});
if(!getSetInput||!getSetAttribute){
cQuery.attrHooks.value={
set:function(elem,value,name){
if(cQuery.nodeName(elem,"input")){
elem.defaultValue=value;
}else{
return nodeHook&&nodeHook.set(elem,value,name);
}
}
};
}
if(!getSetAttribute){
nodeHook={
set:function(elem,value,name){
var ret=elem.getAttributeNode(name);
if(!ret){
elem.setAttributeNode(
(ret=elem.ownerDocument.createAttribute(name))
);
}
ret.value=value+="";
if(name==="value"||value===elem.getAttribute(name)){
return value;
}
}
};
attrHandle.id=attrHandle.name=attrHandle.coords=
function(elem,name,isXML){
var ret;
if(!isXML){
return(ret=elem.getAttributeNode(name))&&ret.value!==""?
ret.value:
null;
}
};
cQuery.valHooks.button={
get:function(elem,name){
var ret=elem.getAttributeNode(name);
if(ret&&ret.specified){
return ret.value;
}
},
set:nodeHook.set
};
cQuery.attrHooks.contenteditable={
set:function(elem,value,name){
nodeHook.set(elem,value===""?false:value,name);
}
};
cQuery.each(["width","height"],function(i,name){
cQuery.attrHooks[name]={
set:function(elem,value){
if(value===""){
elem.setAttribute(name,"auto");
return value;
}
}
};
});
}
if(!support.style){
cQuery.attrHooks.style={
get:function(elem){
return elem.style.cssText||undefined;
},
set:function(elem,value){
return(elem.style.cssText=value+"");
}
};
}
var rfocusable=/^(?:input|select|textarea|button|object)$/i,
rclickable=/^(?:a|area)$/i;
cQuery.fn.extend({
prop:function(name,value){
return access(this,cQuery.prop,name,value,arguments.length>1);
},
removeProp:function(name){
name=cQuery.propFix[name]||name;
return this.each(function(){
try{
this[name]=undefined;
delete this[name];
}catch(e){}
});
}
});
cQuery.extend({
prop:function(elem,name,value){
var ret,hooks,
nType=elem.nodeType;
if(nType===3||nType===8||nType===2){
return;
}
if(nType!==1||!cQuery.isXMLDoc(elem)){
name=cQuery.propFix[name]||name;
hooks=cQuery.propHooks[name];
}
if(value!==undefined){
if(hooks&&"set"in hooks&&
(ret=hooks.set(elem,value,name))!==undefined){
return ret;
}
return(elem[name]=value);
}
if(hooks&&"get"in hooks&&(ret=hooks.get(elem,name))!==null){
return ret;
}
return elem[name];
},
propHooks:{
tabIndex:{
get:function(elem){
var tabindex=cQuery.find.attr(elem,"tabindex");
return tabindex?
parseInt(tabindex,10):
rfocusable.test(elem.nodeName)||
rclickable.test(elem.nodeName)&&elem.href?
0:
-1;
}
}
},
propFix:{
"for":"htmlFor",
"class":"className"
}
});
if(!support.hrefNormalized){
cQuery.each(["href","src"],function(i,name){
cQuery.propHooks[name]={
get:function(elem){
return elem.getAttribute(name,4);
}
};
});
}
if(!support.optSelected){
cQuery.propHooks.selected={
get:function(elem){
var parent=elem.parentNode;
if(parent){
parent.selectedIndex;
if(parent.parentNode){
parent.parentNode.selectedIndex;
}
}
return null;
},
set:function(elem){
var parent=elem.parentNode;
if(parent){
parent.selectedIndex;
if(parent.parentNode){
parent.parentNode.selectedIndex;
}
}
}
};
}
cQuery.each([
"tabIndex",
"readOnly",
"maxLength",
"cellSpacing",
"cellPadding",
"rowSpan",
"colSpan",
"useMap",
"frameBorder",
"contentEditable"
],function(){
cQuery.propFix[this.toLowerCase()]=this;
});
if(!support.enctype){
cQuery.propFix.enctype="encoding";
}
var rclass=/[\t\r\n\f]/g;
function getClass(elem){
return cQuery.attr(elem,"class")||"";
}
cQuery.fn.extend({
addClass:function(value){
var classes,elem,cur,curValue,clazz,j,finalValue,
i=0;
if(cQuery.isFunction(value)){
return this.each(function(j){
cQuery(this).addClass(value.call(this,j,getClass(this)));
});
}
if(typeof value==="string"&&value){
classes=value.match(rnotwhite)||[];
while((elem=this[i++])){
curValue=getClass(elem);
cur=elem.nodeType===1&&
(" "+curValue+" ").replace(rclass," ");
if(cur){
j=0;
while((clazz=classes[j++])){
if(cur.indexOf(" "+clazz+" ")<0){
cur+=clazz+" ";
}
}
finalValue=cQuery.trim(cur);
if(curValue!==finalValue){
cQuery.attr(elem,"class",finalValue);
}
}
}
}
return this;
},
removeClass:function(value){
var classes,elem,cur,curValue,clazz,j,finalValue,
i=0;
if(cQuery.isFunction(value)){
return this.each(function(j){
cQuery(this).removeClass(value.call(this,j,getClass(this)));
});
}
if(!arguments.length){
return this.attr("class","");
}
if(typeof value==="string"&&value){
classes=value.match(rnotwhite)||[];
while((elem=this[i++])){
curValue=getClass(elem);
cur=elem.nodeType===1&&
(" "+curValue+" ").replace(rclass," ");
if(cur){
j=0;
while((clazz=classes[j++])){
while(cur.indexOf(" "+clazz+" ")>-1){
cur=cur.replace(" "+clazz+" "," ");
}
}
finalValue=cQuery.trim(cur);
if(curValue!==finalValue){
cQuery.attr(elem,"class",finalValue);
}
}
}
}
return this;
},
toggleClass:function(value,stateVal){
var type=typeof value;
if(typeof stateVal==="boolean"&&type==="string"){
return stateVal?this.addClass(value):this.removeClass(value);
}
if(cQuery.isFunction(value)){
return this.each(function(i){
cQuery(this).toggleClass(
value.call(this,i,getClass(this),stateVal),
stateVal
);
});
}
return this.each(function(){
var className,i,self,classNames;
if(type==="string"){
i=0;
self=cQuery(this);
classNames=value.match(rnotwhite)||[];
while((className=classNames[i++])){
if(self.hasClass(className)){
self.removeClass(className);
}else{
self.addClass(className);
}
}
}else if(value===undefined||type==="boolean"){
className=getClass(this);
if(className){
cQuery._data(this,"__className__",className);
}
cQuery.attr(this,"class",
className||value===false?
"":
cQuery._data(this,"__className__")||""
);
}
});
},
hasClass:function(selector){
var className,elem,
i=0;
className=" "+selector+" ";
while((elem=this[i++])){
if(elem.nodeType===1&&
(" "+getClass(elem)+" ").replace(rclass," ")
.indexOf(className)>-1
){
return true;
}
}
return false;
}
});
cQuery.each(("blur focus focusin focusout load resize scroll unload click dblclick "+
"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave "+
"change select submit keydown keypress keyup error contextmenu").split(" "),
function(i,name){
cQuery.fn[name]=function(data,fn){
return arguments.length>0?
this.on(name,null,data,fn):
this.trigger(name);
};
});
cQuery.fn.extend({
hover:function(fnOver,fnOut){
return this.mouseenter(fnOver).mouseleave(fnOut||fnOver);
}
});
var location=window.location;
var nonce=cQuery.now();
var rquery=(/\?/);
var rvalidtokens=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
cQuery.parseJSON=function(data){
if(window.JSON&&window.JSON.parse){
return window.JSON.parse(data+"");
}
var requireNonComma,
depth=null,
str=cQuery.trim(data+"");
return str&&!cQuery.trim(str.replace(rvalidtokens,function(token,comma,open,close){
if(requireNonComma&&comma){
depth=0;
}
if(depth===0){
return token;
}
requireNonComma=open||comma;
depth+=!close-!open;
return"";
}))?
(Function("return "+str))():
cQuery.error("Invalid JSON: "+data);
};
cQuery.parseXML=function(data){
var xml,tmp;
if(!data||typeof data!=="string"){
return null;
}
try{
if(window.DOMParser){
tmp=new window.DOMParser();
xml=tmp.parseFromString(data,"text/xml");
}else{
xml=new window.ActiveXObject("Microsoft.XMLDOM");
xml.async="false";
xml.loadXML(data);
}
}catch(e){
xml=undefined;
}
if(!xml||!xml.documentElement||xml.getElementsByTagName("parsererror").length){
cQuery.error("Invalid XML: "+data);
}
return xml;
};
var
rhash=/#.*$/,
rts=/([?&])_=[^&]*/,
rheaders=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
rlocalProtocol=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
rnoContent=/^(?:GET|HEAD)$/,
rprotocol=/^\/\//,
rurl=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
prefilters={},
transports={},
allTypes="*/".concat("*"),
ajaxLocation=location.href,
ajaxLocParts=rurl.exec(ajaxLocation.toLowerCase())||[];
function addToPrefiltersOrTransports(structure){
return function(dataTypeExpression,func){
if(typeof dataTypeExpression!=="string"){
func=dataTypeExpression;
dataTypeExpression="*";
}
var dataType,
i=0,
dataTypes=dataTypeExpression.toLowerCase().match(rnotwhite)||[];
if(cQuery.isFunction(func)){
while((dataType=dataTypes[i++])){
if(dataType.charAt(0)==="+"){
dataType=dataType.slice(1)||"*";
(structure[dataType]=structure[dataType]||[]).unshift(func);
}else{
(structure[dataType]=structure[dataType]||[]).push(func);
}
}
}
};
}
function inspectPrefiltersOrTransports(structure,options,originalOptions,jqXHR){
var inspected={},
seekingTransport=(structure===transports);
function inspect(dataType){
var selected;
inspected[dataType]=true;
cQuery.each(structure[dataType]||[],function(_,prefilterOrFactory){
var dataTypeOrTransport=prefilterOrFactory(options,originalOptions,jqXHR);
if(typeof dataTypeOrTransport==="string"&&
!seekingTransport&&!inspected[dataTypeOrTransport]){
options.dataTypes.unshift(dataTypeOrTransport);
inspect(dataTypeOrTransport);
return false;
}else if(seekingTransport){
return!(selected=dataTypeOrTransport);
}
});
return selected;
}
return inspect(options.dataTypes[0])||!inspected["*"]&&inspect("*");
}
function ajaxExtend(target,src){
var deep,key,
flatOptions=cQuery.ajaxSettings.flatOptions||{};
for(key in src){
if(src[key]!==undefined){
(flatOptions[key]?target:(deep||(deep={})))[key]=src[key];
}
}
if(deep){
cQuery.extend(true,target,deep);
}
return target;
}
function ajaxHandleResponses(s,jqXHR,responses){
var firstDataType,ct,finalDataType,type,
contents=s.contents,
dataTypes=s.dataTypes;
while(dataTypes[0]==="*"){
dataTypes.shift();
if(ct===undefined){
ct=s.mimeType||jqXHR.getResponseHeader("Content-Type");
}
}
if(ct){
for(type in contents){
if(contents[type]&&contents[type].test(ct)){
dataTypes.unshift(type);
break;
}
}
}
if(dataTypes[0]in responses){
finalDataType=dataTypes[0];
}else{
for(type in responses){
if(!dataTypes[0]||s.converters[type+" "+dataTypes[0]]){
finalDataType=type;
break;
}
if(!firstDataType){
firstDataType=type;
}
}
finalDataType=finalDataType||firstDataType;
}
if(finalDataType){
if(finalDataType!==dataTypes[0]){
dataTypes.unshift(finalDataType);
}
return responses[finalDataType];
}
}
function ajaxConvert(s,response,jqXHR,isSuccess){
var conv2,current,conv,tmp,prev,
converters={},
dataTypes=s.dataTypes.slice();
if(dataTypes[1]){
for(conv in s.converters){
converters[conv.toLowerCase()]=s.converters[conv];
}
}
current=dataTypes.shift();
while(current){
if(s.responseFields[current]){
jqXHR[s.responseFields[current]]=response;
}
if(!prev&&isSuccess&&s.dataFilter){
response=s.dataFilter(response,s.dataType);
}
prev=current;
current=dataTypes.shift();
if(current){
if(current==="*"){
current=prev;
}else if(prev!=="*"&&prev!==current){
conv=converters[prev+" "+current]||converters["* "+current];
if(!conv){
for(conv2 in converters){
tmp=conv2.split(" ");
if(tmp[1]===current){
conv=converters[prev+" "+tmp[0]]||
converters["* "+tmp[0]];
if(conv){
if(conv===true){
conv=converters[conv2];
}else if(converters[conv2]!==true){
current=tmp[0];
dataTypes.unshift(tmp[1]);
}
break;
}
}
}
}
if(conv!==true){
if(conv&&s["throws"]){
response=conv(response);
}else{
try{
response=conv(response);
}catch(e){
return{
state:"parsererror",
error:conv?e:"No conversion from "+prev+" to "+current
};
}
}
}
}
}
}
return{state:"success",data:response};
}
cQuery.extend({
active:0,
lastModified:{},
etag:{},
ajaxSettings:{
url:ajaxLocation,
type:"GET",
isLocal:rlocalProtocol.test(ajaxLocParts[1]),
global:true,
processData:true,
async:true,
contentType:"application/x-www-form-urlencoded; charset=UTF-8",
accepts:{
"*":allTypes,
text:"text/plain",
html:"text/html",
xml:"application/xml, text/xml",
json:"application/json, text/javascript"
},
contents:{
xml:/\bxml\b/,
html:/\bhtml/,
json:/\bjson\b/
},
responseFields:{
xml:"responseXML",
text:"responseText",
json:"responseJSON"
},
converters:{
"* text":String,
"text html":true,
"text json":cQuery.parseJSON,
"text xml":cQuery.parseXML
},
flatOptions:{
url:true,
context:true
}
},
ajaxSetup:function(target,settings){
return settings?
ajaxExtend(ajaxExtend(target,cQuery.ajaxSettings),settings):
ajaxExtend(cQuery.ajaxSettings,target);
},
ajaxPrefilter:addToPrefiltersOrTransports(prefilters),
ajaxTransport:addToPrefiltersOrTransports(transports),
ajax:function(url,options){
if(typeof url==="object"){
options=url;
url=undefined;
}
options=options||{};
var
parts,
i,
cacheURL,
responseHeadersString,
timeoutTimer,
fireGlobals,
transport,
responseHeaders,
s=cQuery.ajaxSetup({},options),
callbackContext=s.context||s,
globalEventContext=s.context&&
(callbackContext.nodeType||callbackContext.jquery)?
cQuery(callbackContext):
cQuery.event,
deferred=cQuery.Deferred(),
completeDeferred=cQuery.Callbacks("once memory"),
statusCode=s.statusCode||{},
requestHeaders={},
requestHeadersNames={},
state=0,
strAbort="canceled",
jqXHR={
readyState:0,
getResponseHeader:function(key){
var match;
if(state===2){
if(!responseHeaders){
responseHeaders={};
while((match=rheaders.exec(responseHeadersString))){
responseHeaders[match[1].toLowerCase()]=match[2];
}
}
match=responseHeaders[key.toLowerCase()];
}
return match==null?null:match;
},
getAllResponseHeaders:function(){
return state===2?responseHeadersString:null;
},
setRequestHeader:function(name,value){
var lname=name.toLowerCase();
if(!state){
name=requestHeadersNames[lname]=requestHeadersNames[lname]||name;
requestHeaders[name]=value;
}
return this;
},
overrideMimeType:function(type){
if(!state){
s.mimeType=type;
}
return this;
},
statusCode:function(map){
var code;
if(map){
if(state<2){
for(code in map){
statusCode[code]=[statusCode[code],map[code]];
}
}else{
jqXHR.always(map[jqXHR.status]);
}
}
return this;
},
abort:function(statusText){
var finalText=statusText||strAbort;
if(transport){
transport.abort(finalText);
}
done(0,finalText);
return this;
}
};
deferred.promise(jqXHR).complete=completeDeferred.add;
jqXHR.success=jqXHR.done;
jqXHR.error=jqXHR.fail;
s.url=((url||s.url||ajaxLocation)+"")
.replace(rhash,"")
.replace(rprotocol,ajaxLocParts[1]+"//");
s.type=options.method||options.type||s.method||s.type;
s.dataTypes=cQuery.trim(s.dataType||"*").toLowerCase().match(rnotwhite)||[""];
if(s.crossDomain==null){
parts=rurl.exec(s.url.toLowerCase());
s.crossDomain=!!(parts&&
(parts[1]!==ajaxLocParts[1]||parts[2]!==ajaxLocParts[2]||
(parts[3]||(parts[1]==="http:"?"80":"443"))!==
(ajaxLocParts[3]||(ajaxLocParts[1]==="http:"?"80":"443")))
);
}
if(s.data&&s.processData&&typeof s.data!=="string"){
s.data=cQuery.param(s.data,s.traditional);
}
inspectPrefiltersOrTransports(prefilters,s,options,jqXHR);
if(state===2){
return jqXHR;
}
fireGlobals=cQuery.event&&s.global;
if(fireGlobals&&cQuery.active++===0){
cQuery.event.trigger("ajaxStart");
}
s.type=s.type.toUpperCase();
s.hasContent=!rnoContent.test(s.type);
cacheURL=s.url;
if(!s.hasContent){
if(s.data){
cacheURL=(s.url+=(rquery.test(cacheURL)?"&":"?")+s.data);
delete s.data;
}
if(s.cache===false){
s.url=rts.test(cacheURL)?
cacheURL.replace(rts,"$1_="+nonce++):
cacheURL+(rquery.test(cacheURL)?"&":"?")+"_="+nonce++;
}
}
if(s.ifModified){
if(cQuery.lastModified[cacheURL]){
jqXHR.setRequestHeader("If-Modified-Since",cQuery.lastModified[cacheURL]);
}
if(cQuery.etag[cacheURL]){
jqXHR.setRequestHeader("If-None-Match",cQuery.etag[cacheURL]);
}
}
if(s.data&&s.hasContent&&s.contentType!==false||options.contentType){
jqXHR.setRequestHeader("Content-Type",s.contentType);
}
jqXHR.setRequestHeader(
"Accept",
s.dataTypes[0]&&s.accepts[s.dataTypes[0]]?
s.accepts[s.dataTypes[0]]+
(s.dataTypes[0]!=="*"?", "+allTypes+"; q=0.01":""):
s.accepts["*"]
);
for(i in s.headers){
jqXHR.setRequestHeader(i,s.headers[i]);
}
if(s.beforeSend&&
(s.beforeSend.call(callbackContext,jqXHR,s)===false||state===2)){
return jqXHR.abort();
}
strAbort="abort";
for(i in{success:1,error:1,complete:1}){
jqXHR[i](s[i]);
}
transport=inspectPrefiltersOrTransports(transports,s,options,jqXHR);
if(!transport){
done(-1,"No Transport");
}else{
jqXHR.readyState=1;
if(fireGlobals){
globalEventContext.trigger("ajaxSend",[jqXHR,s]);
}
if(state===2){
return jqXHR;
}
if(s.async&&s.timeout>0){
timeoutTimer=window.setTimeout(function(){
jqXHR.abort("timeout");
},s.timeout);
}
try{
state=1;
transport.send(requestHeaders,done);
}catch(e){
if(state<2){
done(-1,e);
}else{
throw e;
}
}
}
function done(status,nativeStatusText,responses,headers){
var isSuccess,success,error,response,modified,
statusText=nativeStatusText;
if(state===2){
return;
}
state=2;
if(timeoutTimer){
window.clearTimeout(timeoutTimer);
}
transport=undefined;
responseHeadersString=headers||"";
jqXHR.readyState=status>0?4:0;
isSuccess=status>=200&&status<300||status===304;
if(responses){
response=ajaxHandleResponses(s,jqXHR,responses);
}
response=ajaxConvert(s,response,jqXHR,isSuccess);
if(isSuccess){
if(s.ifModified){
modified=jqXHR.getResponseHeader("Last-Modified");
if(modified){
cQuery.lastModified[cacheURL]=modified;
}
modified=jqXHR.getResponseHeader("etag");
if(modified){
cQuery.etag[cacheURL]=modified;
}
}
if(status===204||s.type==="HEAD"){
statusText="nocontent";
}else if(status===304){
statusText="notmodified";
}else{
statusText=response.state;
success=response.data;
error=response.error;
isSuccess=!error;
}
}else{
error=statusText;
if(status||!statusText){
statusText="error";
if(status<0){
status=0;
}
}
}
jqXHR.status=status;
jqXHR.statusText=(nativeStatusText||statusText)+"";
if(isSuccess){
deferred.resolveWith(callbackContext,[success,statusText,jqXHR]);
}else{
deferred.rejectWith(callbackContext,[jqXHR,statusText,error]);
}
jqXHR.statusCode(statusCode);
statusCode=undefined;
if(fireGlobals){
globalEventContext.trigger(isSuccess?"ajaxSuccess":"ajaxError",
[jqXHR,s,isSuccess?success:error]);
}
completeDeferred.fireWith(callbackContext,[jqXHR,statusText]);
if(fireGlobals){
globalEventContext.trigger("ajaxComplete",[jqXHR,s]);
if(!(--cQuery.active)){
cQuery.event.trigger("ajaxStop");
}
}
}
return jqXHR;
},
getJSON:function(url,data,callback){
return cQuery.get(url,data,callback,"json");
},
getScript:function(url,callback){
return cQuery.get(url,undefined,callback,"script");
}
});
cQuery.each(["get","post"],function(i,method){
cQuery[method]=function(url,data,callback,type){
if(cQuery.isFunction(data)){
type=type||callback;
callback=data;
data=undefined;
}
return cQuery.ajax(cQuery.extend({
url:url,
type:method,
dataType:type,
data:data,
success:callback
},cQuery.isPlainObject(url)&&url));
};
});
cQuery._evalUrl=function(url){
return cQuery.ajax({
url:url,
type:"GET",
dataType:"script",
cache:true,
async:false,
global:false,
"throws":true
});
};
cQuery.fn.extend({
wrapAll:function(html){
if(cQuery.isFunction(html)){
return this.each(function(i){
cQuery(this).wrapAll(html.call(this,i));
});
}
if(this[0]){
var wrap=cQuery(html,this[0].ownerDocument).eq(0).clone(true);
if(this[0].parentNode){
wrap.insertBefore(this[0]);
}
wrap.map(function(){
var elem=this;
while(elem.firstChild&&elem.firstChild.nodeType===1){
elem=elem.firstChild;
}
return elem;
}).append(this);
}
return this;
},
wrapInner:function(html){
if(cQuery.isFunction(html)){
return this.each(function(i){
cQuery(this).wrapInner(html.call(this,i));
});
}
return this.each(function(){
var self=cQuery(this),
contents=self.contents();
if(contents.length){
contents.wrapAll(html);
}else{
self.append(html);
}
});
},
wrap:function(html){
var isFunction=cQuery.isFunction(html);
return this.each(function(i){
cQuery(this).wrapAll(isFunction?html.call(this,i):html);
});
},
unwrap:function(){
return this.parent().each(function(){
if(!cQuery.nodeName(this,"body")){
cQuery(this).replaceWith(this.childNodes);
}
}).end();
}
});
function getDisplay(elem){
return elem.style&&elem.style.display||cQuery.css(elem,"display");
}
function filterHidden(elem){
if(!cQuery.contains(elem.ownerDocument||document,elem)){
return true;
}
while(elem&&elem.nodeType===1){
if(getDisplay(elem)==="none"||elem.type==="hidden"){
return true;
}
elem=elem.parentNode;
}
return false;
}
cQuery.expr.filters.hidden=function(elem){
return support.reliableHiddenOffsets()?
(elem.offsetWidth<=0&&elem.offsetHeight<=0&&
!elem.getClientRects().length):
filterHidden(elem);
};
cQuery.expr.filters.visible=function(elem){
return!cQuery.expr.filters.hidden(elem);
};
var r20=/%20/g,
rbracket=/\[\]$/,
rCRLF=/\r?\n/g,
rsubmitterTypes=/^(?:submit|button|image|reset|file)$/i,
rsubmittable=/^(?:input|select|textarea|keygen)/i;
function buildParams(prefix,obj,traditional,add){
var name;
if(cQuery.isArray(obj)){
cQuery.each(obj,function(i,v){
if(traditional||rbracket.test(prefix)){
add(prefix,v);
}else{
buildParams(
prefix+"["+(typeof v==="object"&&v!=null?i:"")+"]",
v,
traditional,
add
);
}
});
}else if(!traditional&&cQuery.type(obj)==="object"){
for(name in obj){
buildParams(prefix+"["+name+"]",obj[name],traditional,add);
}
}else{
add(prefix,obj);
}
}
cQuery.param=function(a,traditional){
var prefix,
s=[],
add=function(key,value){
value=cQuery.isFunction(value)?value():(value==null?"":value);
s[s.length]=encodeURIComponent(key)+"="+encodeURIComponent(value);
};
if(traditional===undefined){
traditional=cQuery.ajaxSettings&&cQuery.ajaxSettings.traditional;
}
if(cQuery.isArray(a)||(a.jquery&&!cQuery.isPlainObject(a))){
cQuery.each(a,function(){
add(this.name,this.value);
});
}else{
for(prefix in a){
buildParams(prefix,a[prefix],traditional,add);
}
}
return s.join("&").replace(r20,"+");
};
cQuery.fn.extend({
serialize:function(){
return cQuery.param(this.serializeArray());
},
serializeArray:function(){
return this.map(function(){
var elements=cQuery.prop(this,"elements");
return elements?cQuery.makeArray(elements):this;
})
.filter(function(){
var type=this.type;
return this.name&&!cQuery(this).is(":disabled")&&
rsubmittable.test(this.nodeName)&&!rsubmitterTypes.test(type)&&
(this.checked||!rcheckableType.test(type));
})
.map(function(i,elem){
var val=cQuery(this).val();
return val==null?
null:
cQuery.isArray(val)?
cQuery.map(val,function(val){
return{name:elem.name,value:val.replace(rCRLF,"\r\n")};
}):
{name:elem.name,value:val.replace(rCRLF,"\r\n")};
}).get();
}
});
cQuery.ajaxSettings.xhr=window.ActiveXObject!==undefined?
function(){
if(this.isLocal){
return createActiveXHR();
}
if(document.documentMode>8){
return createStandardXHR();
}
return/^(get|post|head|put|delete|options)$/i.test(this.type)&&
createStandardXHR()||createActiveXHR();
}:
createStandardXHR;
var xhrId=0,
xhrCallbacks={},
xhrSupported=cQuery.ajaxSettings.xhr();
if(window.attachEvent){
window.attachEvent("onunload",function(){
for(var key in xhrCallbacks){
xhrCallbacks[key](undefined,true);
}
});
}
support.cors=!!xhrSupported&&("withCredentials"in xhrSupported);
xhrSupported=support.ajax=!!xhrSupported;
if(xhrSupported){
cQuery.ajaxTransport(function(options){
if(!options.crossDomain||support.cors){
var callback;
return{
send:function(headers,complete){
var i,
xhr=options.xhr(),
id=++xhrId;
xhr.open(
options.type,
options.url,
options.async,
options.username,
options.password
);
if(options.xhrFields){
for(i in options.xhrFields){
xhr[i]=options.xhrFields[i];
}
}
if(options.mimeType&&xhr.overrideMimeType){
xhr.overrideMimeType(options.mimeType);
}
if(!options.crossDomain&&!headers["X-Requested-With"]){
headers["X-Requested-With"]="XMLHttpRequest";
}
for(i in headers){
if(headers[i]!==undefined){
xhr.setRequestHeader(i,headers[i]+"");
}
}
xhr.send((options.hasContent&&options.data)||null);
callback=function(_,isAbort){
var status,statusText,responses;
if(callback&&(isAbort||xhr.readyState===4)){
delete xhrCallbacks[id];
callback=undefined;
xhr.onreadystatechange=cQuery.noop;
if(isAbort){
if(xhr.readyState!==4){
xhr.abort();
}
}else{
responses={};
status=xhr.status;
if(typeof xhr.responseText==="string"){
responses.text=xhr.responseText;
}
try{
statusText=xhr.statusText;
}catch(e){
statusText="";
}
if(!status&&options.isLocal&&!options.crossDomain){
status=responses.text?200:404;
}else if(status===1223){
status=204;
}
}
}
if(responses){
complete(status,statusText,responses,xhr.getAllResponseHeaders());
}
};
if(!options.async){
callback();
}else if(xhr.readyState===4){
window.setTimeout(callback);
}else{
xhr.onreadystatechange=xhrCallbacks[id]=callback;
}
},
abort:function(){
if(callback){
callback(undefined,true);
}
}
};
}
});
}
function createStandardXHR(){
try{
return new window.XMLHttpRequest();
}catch(e){}
}
function createActiveXHR(){
try{
return new window.ActiveXObject("Microsoft.XMLHTTP");
}catch(e){}
}
cQuery.ajaxSetup({
accepts:{
script:"text/javascript, application/javascript, "+
"application/ecmascript, application/x-ecmascript"
},
contents:{
script:/\b(?:java|ecma)script\b/
},
converters:{
"text script":function(text){
cQuery.globalEval(text);
return text;
}
}
});
cQuery.ajaxPrefilter("script",function(s){
if(s.cache===undefined){
s.cache=false;
}
if(s.crossDomain){
s.type="GET";
s.global=false;
}
});
cQuery.ajaxTransport("script",function(s){
if(s.crossDomain){
var script,
head=document.head||cQuery("head")[0]||document.documentElement;
return{
send:function(_,callback){
script=document.createElement("script");
script.async=true;
if(s.scriptCharset){
script.charset=s.scriptCharset;
}
script.src=s.url;
script.onload=script.onreadystatechange=function(_,isAbort){
if(isAbort||!script.readyState||/loaded|complete/.test(script.readyState)){
script.onload=script.onreadystatechange=null;
if(script.parentNode){
script.parentNode.removeChild(script);
}
script=null;
if(!isAbort){
callback(200,"success");
}
}
};
head.insertBefore(script,head.firstChild);
},
abort:function(){
if(script){
script.onload(undefined,true);
}
}
};
}
});
var oldCallbacks=[],
rjsonp=/(=)\?(?=&|$)|\?\?/;
cQuery.ajaxSetup({
jsonp:"callback",
jsonpCallback:function(){
var callback=oldCallbacks.pop()||(cQuery.expando+"_"+(nonce++));
this[callback]=true;
return callback;
}
});
cQuery.ajaxPrefilter("json jsonp",function(s,originalSettings,jqXHR){
var callbackName,overwritten,responseContainer,
jsonProp=s.jsonp!==false&&(rjsonp.test(s.url)?
"url":
typeof s.data==="string"&&
(s.contentType||"")
.indexOf("application/x-www-form-urlencoded")===0&&
rjsonp.test(s.data)&&"data"
);
if(jsonProp||s.dataTypes[0]==="jsonp"){
callbackName=s.jsonpCallback=cQuery.isFunction(s.jsonpCallback)?
s.jsonpCallback():
s.jsonpCallback;
if(jsonProp){
s[jsonProp]=s[jsonProp].replace(rjsonp,"$1"+callbackName);
}else if(s.jsonp!==false){
s.url+=(rquery.test(s.url)?"&":"?")+s.jsonp+"="+callbackName;
}
s.converters["script json"]=function(){
if(!responseContainer){
cQuery.error(callbackName+" was not called");
}
return responseContainer[0];
};
s.dataTypes[0]="json";
overwritten=window[callbackName];
window[callbackName]=function(){
responseContainer=arguments;
};
jqXHR.always(function(){
if(overwritten===undefined){
cQuery(window).removeProp(callbackName);
}else{
window[callbackName]=overwritten;
}
if(s[callbackName]){
s.jsonpCallback=originalSettings.jsonpCallback;
oldCallbacks.push(callbackName);
}
if(responseContainer&&cQuery.isFunction(overwritten)){
overwritten(responseContainer[0]);
}
responseContainer=overwritten=undefined;
});
return"script";
}
});
cQuery.parseHTML=function(data,context,keepScripts){
if(!data||typeof data!=="string"){
return null;
}
if(typeof context==="boolean"){
keepScripts=context;
context=false;
}
context=context||document;
var parsed=rsingleTag.exec(data),
scripts=!keepScripts&&[];
if(parsed){
return[context.createElement(parsed[1])];
}
parsed=buildFragment([data],context,scripts);
if(scripts&&scripts.length){
cQuery(scripts).remove();
}
return cQuery.merge([],parsed.childNodes);
};
var _load=cQuery.fn.load;
cQuery.fn.load=function(url,params,callback){
if(typeof url!=="string"&&_load){
return _load.apply(this,arguments);
}
var selector,type,response,
self=this,
off=url.indexOf(" ");
if(off>-1){
selector=cQuery.trim(url.slice(off,url.length));
url=url.slice(0,off);
}
if(cQuery.isFunction(params)){
callback=params;
params=undefined;
}else if(params&&typeof params==="object"){
type="POST";
}
if(self.length>0){
cQuery.ajax({
url:url,
type:type||"GET",
dataType:"html",
data:params
}).done(function(responseText){
response=arguments;
self.html(selector?
cQuery("<div>").append(cQuery.parseHTML(responseText)).find(selector):
responseText);
}).always(callback&&function(jqXHR,status){
self.each(function(){
callback.apply(this,response||[jqXHR.responseText,status,jqXHR]);
});
});
}
return this;
};
cQuery.each([
"ajaxStart",
"ajaxStop",
"ajaxComplete",
"ajaxError",
"ajaxSuccess",
"ajaxSend"
],function(i,type){
cQuery.fn[type]=function(fn){
return this.on(type,fn);
};
});
cQuery.expr.filters.animated=function(elem){
return cQuery.grep(cQuery.timers,function(fn){
return elem===fn.elem;
}).length;
};
function getWindow(elem){
return cQuery.isWindow(elem)?
elem:
elem.nodeType===9?
elem.defaultView||elem.parentWindow:
false;
}
cQuery.offset={
setOffset:function(elem,options,i){
var curPosition,curLeft,curCSSTop,curTop,curOffset,curCSSLeft,calculatePosition,
position=cQuery.css(elem,"position"),
curElem=cQuery(elem),
props={};
if(position==="static"){
elem.style.position="relative";
}
curOffset=curElem.offset();
curCSSTop=cQuery.css(elem,"top");
curCSSLeft=cQuery.css(elem,"left");
calculatePosition=(position==="absolute"||position==="fixed")&&
cQuery.inArray("auto",[curCSSTop,curCSSLeft])>-1;
if(calculatePosition){
curPosition=curElem.position();
curTop=curPosition.top;
curLeft=curPosition.left;
}else{
curTop=parseFloat(curCSSTop)||0;
curLeft=parseFloat(curCSSLeft)||0;
}
if(cQuery.isFunction(options)){
options=options.call(elem,i,cQuery.extend({},curOffset));
}
if(options.top!=null){
props.top=(options.top-curOffset.top)+curTop;
}
if(options.left!=null){
props.left=(options.left-curOffset.left)+curLeft;
}
if("using"in options){
options.using.call(elem,props);
}else{
curElem.css(props);
}
}
};
cQuery.fn.extend({
offset:function(options){
if(arguments.length){
return options===undefined?
this:
this.each(function(i){
cQuery.offset.setOffset(this,options,i);
});
}
var docElem,win,
box={top:0,left:0},
elem=this[0],
doc=elem&&elem.ownerDocument;
if(!doc){
return;
}
docElem=doc.documentElement;
if(!cQuery.contains(docElem,elem)){
return box;
}
if(typeof elem.getBoundingClientRect!=="undefined"){
box=elem.getBoundingClientRect();
}
win=getWindow(doc);
return{
top:box.top+(win.pageYOffset||docElem.scrollTop)-(docElem.clientTop||0),
left:box.left+(win.pageXOffset||docElem.scrollLeft)-(docElem.clientLeft||0)
};
},
position:function(){
if(!this[0]){
return;
}
var offsetParent,offset,
parentOffset={top:0,left:0},
elem=this[0];
if(cQuery.css(elem,"position")==="fixed"){
offset=elem.getBoundingClientRect();
}else{
offsetParent=this.offsetParent();
offset=this.offset();
if(!cQuery.nodeName(offsetParent[0],"html")){
parentOffset=offsetParent.offset();
}
parentOffset.top+=cQuery.css(offsetParent[0],"borderTopWidth",true);
parentOffset.left+=cQuery.css(offsetParent[0],"borderLeftWidth",true);
}
return{
top:offset.top-parentOffset.top-cQuery.css(elem,"marginTop",true),
left:offset.left-parentOffset.left-cQuery.css(elem,"marginLeft",true)
};
},
offsetParent:function(){
return this.map(function(){
var offsetParent=this.offsetParent;
while(offsetParent&&(!cQuery.nodeName(offsetParent,"html")&&
cQuery.css(offsetParent,"position")==="static")){
offsetParent=offsetParent.offsetParent;
}
return offsetParent||documentElement;
});
}
});
cQuery.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(method,prop){
var top=/Y/.test(prop);
cQuery.fn[method]=function(val){
return access(this,function(elem,method,val){
var win=getWindow(elem);
if(val===undefined){
return win?(prop in win)?win[prop]:
win.document.documentElement[method]:
elem[method];
}
if(win){
win.scrollTo(
!top?val:cQuery(win).scrollLeft(),
top?val:cQuery(win).scrollTop()
);
}else{
elem[method]=val;
}
},method,val,arguments.length,null);
};
});
cQuery.each(["top","left"],function(i,prop){
cQuery.cssHooks[prop]=addGetHookIf(support.pixelPosition,
function(elem,computed){
if(computed){
computed=curCSS(elem,prop);
return rnumnonpx.test(computed)?
cQuery(elem).position()[prop]+"px":
computed;
}
}
);
});
cQuery.each({Height:"height",Width:"width"},function(name,type){
cQuery.each({padding:"inner"+name,content:type,"":"outer"+name},
function(defaultExtra,funcName){
cQuery.fn[funcName]=function(margin,value){
var chainable=arguments.length&&(defaultExtra||typeof margin!=="boolean"),
extra=defaultExtra||(margin===true||value===true?"margin":"border");
return access(this,function(elem,type,value){
var doc;
if(cQuery.isWindow(elem)){
return elem.document.documentElement["client"+name];
}
if(elem.nodeType===9){
doc=elem.documentElement;
return Math.max(
elem.body["scroll"+name],doc["scroll"+name],
elem.body["offset"+name],doc["offset"+name],
doc["client"+name]
);
}
return value===undefined?
cQuery.css(elem,type,extra):
cQuery.style(elem,type,value,extra);
},type,chainable?margin:undefined,chainable,null);
};
});
});
cQuery.fn.extend({
bind:function(types,data,fn){
return this.on(types,null,data,fn);
},
unbind:function(types,fn){
return this.off(types,null,fn);
},
delegate:function(selector,types,data,fn){
return this.on(types,selector,data,fn);
},
undelegate:function(selector,types,fn){
return arguments.length===1?
this.off(selector,"**"):
this.off(types,selector||"**",fn);
}
});
cQuery.fn.size=function(){
return this.length;
};
cQuery.fn.andSelf=cQuery.fn.addBack;
if(typeof define==="function"&&define.amd){
define("jquery",[],function(){
return cQuery;
});
}
var
_cQuery=window.cQuery,
_$=window.$;
cQuery.noConflict=function(deep){
if(window.$===cQuery){
window.$=_$;
}
if(deep&&window.cQuery===cQuery){
window.cQuery=_cQuery;
}
return cQuery;
};
if(!noGlobal){
window.cQuery=window.$=cQuery;
}
return cQuery;
}));


cQuery.noConflict();


(function(factory){
if(typeof define==='function'&&define.amd){
define(['jquery'],factory);
}else if(typeof module==='object'&&module.exports){
module.exports=function(root,cQuery){
if(typeof cQuery==='undefined'){
if(typeof window!=='undefined'){
cQuery=require('jquery');
}
else{
cQuery=require('jquery')(root);
}
}
factory(cQuery);
return cQuery;
};
}else{
factory(cQuery);
}
}(function($){
'use strict';
var rCRLF=/\r?\n/g;
var feature={};
feature.fileapi=$('<input type="file">').get(0).files!==undefined;
feature.formdata=(typeof window.FormData!=='undefined');
var hasProp=!!$.fn.prop;
$.fn.attr2=function(){
if(!hasProp){
return this.attr.apply(this,arguments);
}
var val=this.prop.apply(this,arguments);
if((val&&val.jquery)||typeof val==='string'){
return val;
}
return this.attr.apply(this,arguments);
};
$.fn.ajaxSubmit=function(options,data,dataType,onSuccess){
if(!this.length){
log('ajaxSubmit: skipping submit process - no element selected');
return this;
}
var method,action,url,$form=this;
if(typeof options==='function'){
options={success:options};
}else if(typeof options==='string'||(options===false&&arguments.length>0)){
options={
'url':options,
'data':data,
'dataType':dataType
};
if(typeof onSuccess==='function'){
options.success=onSuccess;
}
}else if(typeof options==='undefined'){
options={};
}
method=options.type||this.attr2('method');
action=options.url||this.attr2('action');
url=(typeof action==='string')?$.trim(action):'';
url=url||window.location.href||'';
if(url){
url=(url.match(/^([^#]+)/)||[])[1];
}
options=$.extend(true,{
url:url,
success:$.ajaxSettings.success,
type:method||$.ajaxSettings.type,
iframeSrc:/^https/i.test(window.location.href||'')?'javascript:false':'about:blank'
},options);
var veto={};
this.trigger('form-pre-serialize',[this,options,veto]);
if(veto.veto){
log('ajaxSubmit: submit vetoed via form-pre-serialize trigger');
return this;
}
if(options.beforeSerialize&&options.beforeSerialize(this,options)===false){
log('ajaxSubmit: submit aborted via beforeSerialize callback');
return this;
}
var traditional=options.traditional;
if(typeof traditional==='undefined'){
traditional=$.ajaxSettings.traditional;
}
var elements=[];
var qx,a=this.formToArray(options.semantic,elements,options.filtering);
if(options.data){
var optionsData=$.isFunction(options.data)?options.data(a):options.data;
options.extraData=optionsData;
qx=$.param(optionsData,traditional);
}
if(options.beforeSubmit&&options.beforeSubmit(a,this,options)===false){
log('ajaxSubmit: submit aborted via beforeSubmit callback');
return this;
}
this.trigger('form-submit-validate',[a,this,options,veto]);
if(veto.veto){
log('ajaxSubmit: submit vetoed via form-submit-validate trigger');
return this;
}
var q=$.param(a,traditional);
if(qx){
q=(q?(q+'&'+qx):qx);
}
if(options.type.toUpperCase()==='GET'){
options.url+=(options.url.indexOf('?')>=0?'&':'?')+q;
options.data=null;
}else{
options.data=q;
}
var callbacks=[];
if(options.resetForm){
callbacks.push(function(){
$form.resetForm();
});
}
if(options.clearForm){
callbacks.push(function(){
$form.clearForm(options.includeHidden);
});
}
if(!options.dataType&&options.target){
var oldSuccess=options.success||function(){};
callbacks.push(function(data){
var fn=options.replaceTarget?'replaceWith':'html';
$(options.target)[fn](data).each(oldSuccess,arguments);
});
}else if(options.success){
if($.isArray(options.success)){
$.merge(callbacks,options.success);
}else{
callbacks.push(options.success);
}
}
options.success=function(data,status,xhr){
var context=options.context||this;
for(var i=0,max=callbacks.length;i<max;i++){
callbacks[i].apply(context,[data,status,xhr||$form,$form]);
}
};
if(options.error){
var oldError=options.error;
options.error=function(xhr,status,error){
var context=options.context||this;
oldError.apply(context,[xhr,status,error,$form]);
};
}
if(options.complete){
var oldComplete=options.complete;
options.complete=function(xhr,status){
var context=options.context||this;
oldComplete.apply(context,[xhr,status,$form]);
};
}
var fileInputs=$('input[type=file]:enabled',this).filter(function(){
return $(this).val()!=='';
});
var hasFileInputs=fileInputs.length>0;
var mp='multipart/form-data';
var multipart=($form.attr('enctype')===mp||$form.attr('encoding')===mp);
var fileAPI=feature.fileapi&&feature.formdata;
log('fileAPI :'+fileAPI);
var shouldUseFrame=(hasFileInputs||multipart)&&!fileAPI;
var jqxhr;
if(options.iframe!==false&&(options.iframe||shouldUseFrame)){
if(options.closeKeepAlive){
$.get(options.closeKeepAlive,function(){
jqxhr=fileUploadIframe(a);
});
}else{
jqxhr=fileUploadIframe(a);
}
}else if((hasFileInputs||multipart)&&fileAPI){
jqxhr=fileUploadXhr(a);
}else{
jqxhr=$.ajax(options);
}
$form.removeData('jqxhr').data('jqxhr',jqxhr);
for(var k=0;k<elements.length;k++){
elements[k]=null;
}
this.trigger('form-submit-notify',[this,options]);
return this;
function deepSerialize(extraData){
var serialized=$.param(extraData,options.traditional).split('&');
var len=serialized.length;
var result=[];
var i,part;
for(i=0;i<len;i++){
part=serialized[i].split('=');
result.push([decodeURIComponent(part[0]),decodeURIComponent(part[1])]);
}
return result;
}
function fileUploadXhr(a){
var formdata=new FormData();
for(var i=0;i<a.length;i++){
formdata.append(a[i].name,a[i].value);
}
if(options.extraData){
var serializedData=deepSerialize(options.extraData);
for(i=0;i<serializedData.length;i++){
if(serializedData[i]){
formdata.append(serializedData[i][0],serializedData[i][1]);
}
}
}
options.data=null;
var s=$.extend(true,{},$.ajaxSettings,options,{
contentType:false,
processData:false,
cache:false,
type:method||'POST'
});
if(options.uploadProgress){
s.xhr=function(){
var xhr=$.ajaxSettings.xhr();
if(xhr.upload){
xhr.upload.addEventListener('progress',function(event){
var percent=0;
var position=event.loaded||event.position;
var total=event.total;
if(event.lengthComputable){
percent=Math.ceil(position/total*100);
}
options.uploadProgress(event,position,total,percent);
},false);
}
return xhr;
};
}
s.data=null;
var beforeSend=s.beforeSend;
s.beforeSend=function(xhr,o){
if(options.formData){
o.data=options.formData;
}else{
o.data=formdata;
}
if(beforeSend){
beforeSend.call(this,xhr,o);
}
};
return $.ajax(s);
}
function fileUploadIframe(a){
var form=$form[0],el,i,s,g,id,$io,io,xhr,sub,n,timedOut,timeoutHandle;
var deferred=$.Deferred();
deferred.abort=function(status){
xhr.abort(status);
};
if(a){
for(i=0;i<elements.length;i++){
el=$(elements[i]);
if(hasProp){
el.prop('disabled',false);
}else{
el.removeAttr('disabled');
}
}
}
s=$.extend(true,{},$.ajaxSettings,options);
s.context=s.context||s;
id='jqFormIO'+new Date().getTime();
var ownerDocument=form.ownerDocument;
var $body=$form.closest('body');
if(s.iframeTarget){
$io=$(s.iframeTarget,ownerDocument);
n=$io.attr2('name');
if(!n){
$io.attr2('name',id);
}else{
id=n;
}
}else{
$io=$('<iframe name="'+id+'" src="'+s.iframeSrc+'" />',ownerDocument);
$io.css({position:'absolute',top:'-1000px',left:'-1000px'});
}
io=$io[0];
xhr={
aborted:0,
responseText:null,
responseXML:null,
status:0,
statusText:'n/a',
getAllResponseHeaders:function(){},
getResponseHeader:function(){},
setRequestHeader:function(){},
abort:function(status){
var e=(status==='timeout'?'timeout':'aborted');
log('aborting upload... '+e);
this.aborted=1;
try{
if(io.contentWindow.document.execCommand){
io.contentWindow.document.execCommand('Stop');
}
}catch(ignore){}
$io.attr('src',s.iframeSrc);
xhr.error=e;
if(s.error){
s.error.call(s.context,xhr,e,status);
}
if(g){
$.event.trigger('ajaxError',[xhr,s,e]);
}
if(s.complete){
s.complete.call(s.context,xhr,e);
}
}
};
g=s.global;
if(g&&$.active++===0){
$.event.trigger('ajaxStart');
}
if(g){
$.event.trigger('ajaxSend',[xhr,s]);
}
if(s.beforeSend&&s.beforeSend.call(s.context,xhr,s)===false){
if(s.global){
$.active--;
}
deferred.reject();
return deferred;
}
if(xhr.aborted){
deferred.reject();
return deferred;
}
sub=form.clk;
if(sub){
n=sub.name;
if(n&&!sub.disabled){
s.extraData=s.extraData||{};
s.extraData[n]=sub.value;
if(sub.type==='image'){
s.extraData[n+'.x']=form.clk_x;
s.extraData[n+'.y']=form.clk_y;
}
}
}
var CLIENT_TIMEOUT_ABORT=1;
var SERVER_ABORT=2;
function getDoc(frame){
var doc=null;
try{
if(frame.contentWindow){
doc=frame.contentWindow.document;
}
}catch(err){
log('cannot get iframe.contentWindow document: '+err);
}
if(doc){
return doc;
}
try{
doc=frame.contentDocument?frame.contentDocument:frame.document;
}catch(err){
log('cannot get iframe.contentDocument: '+err);
doc=frame.document;
}
return doc;
}
var csrf_token=$('meta[name=csrf-token]').attr('content');
var csrf_param=$('meta[name=csrf-param]').attr('content');
if(csrf_param&&csrf_token){
s.extraData=s.extraData||{};
s.extraData[csrf_param]=csrf_token;
}
function doSubmit(){
var t=$form.attr2('target'),
a=$form.attr2('action'),
mp='multipart/form-data',
et=$form.attr('enctype')||$form.attr('encoding')||mp;
form.setAttribute('target',id);
if(!method||/post/i.test(method)){
form.setAttribute('method','POST');
}
if(a!==s.url){
form.setAttribute('action',s.url);
}
if(!s.skipEncodingOverride&&(!method||/post/i.test(method))){
$form.attr({
encoding:'multipart/form-data',
enctype:'multipart/form-data'
});
}
if(s.timeout){
timeoutHandle=setTimeout(function(){
timedOut=true;cb(CLIENT_TIMEOUT_ABORT);
},s.timeout);
}
function checkState(){
try{
var state=getDoc(io).readyState;
log('state = '+state);
if(state&&state.toLowerCase()==='uninitialized'){
setTimeout(checkState,50);
}
}catch(e){
log('Server abort: ',e,' (',e.name,')');
cb(SERVER_ABORT);
if(timeoutHandle){
clearTimeout(timeoutHandle);
}
timeoutHandle=undefined;
}
}
var extraInputs=[];
try{
if(s.extraData){
for(var n in s.extraData){
if(s.extraData.hasOwnProperty(n)){
if($.isPlainObject(s.extraData[n])&&s.extraData[n].hasOwnProperty('name')&&s.extraData[n].hasOwnProperty('value')){
extraInputs.push(
$('<input type="hidden" name="'+s.extraData[n].name+'">',ownerDocument).val(s.extraData[n].value)
.appendTo(form)[0]);
}else{
extraInputs.push(
$('<input type="hidden" name="'+n+'">',ownerDocument).val(s.extraData[n])
.appendTo(form)[0]);
}
}
}
}
if(!s.iframeTarget){
$io.appendTo($body);
}
if(io.attachEvent){
io.attachEvent('onload',cb);
}else{
io.addEventListener('load',cb,false);
}
setTimeout(checkState,15);
try{
form.submit();
}catch(err){
var submitFn=document.createElement('form').submit;
submitFn.apply(form);
}
}finally{
form.setAttribute('action',a);
form.setAttribute('enctype',et);
if(t){
form.setAttribute('target',t);
}else{
$form.removeAttr('target');
}
$(extraInputs).remove();
}
}
if(s.forceSync){
doSubmit();
}else{
setTimeout(doSubmit,10);
}
var data,doc,domCheckCount=50,callbackProcessed;
function cb(e){
if(xhr.aborted||callbackProcessed){
return;
}
doc=getDoc(io);
if(!doc){
log('cannot access response document');
e=SERVER_ABORT;
}
if(e===CLIENT_TIMEOUT_ABORT&&xhr){
xhr.abort('timeout');
deferred.reject(xhr,'timeout');
return;
}else if(e===SERVER_ABORT&&xhr){
xhr.abort('server abort');
deferred.reject(xhr,'error','server abort');
return;
}
if(!doc||doc.location.href===s.iframeSrc){
if(!timedOut){
return;
}
}
if(io.detachEvent){
io.detachEvent('onload',cb);
}else{
io.removeEventListener('load',cb,false);
}
var status='success',errMsg;
try{
if(timedOut){
throw'timeout';
}
var isXml=s.dataType==='xml'||doc.XMLDocument||$.isXMLDoc(doc);
log('isXml='+isXml);
if(!isXml&&window.opera&&(doc.body===null||!doc.body.innerHTML)){
if(--domCheckCount){
log('requeing onLoad callback, DOM not available');
setTimeout(cb,250);
return;
}
}
var docRoot=doc.body?doc.body:doc.documentElement;
xhr.responseText=docRoot?docRoot.innerHTML:null;
xhr.responseXML=doc.XMLDocument?doc.XMLDocument:doc;
if(isXml){
s.dataType='xml';
}
xhr.getResponseHeader=function(header){
var headers={'content-type':s.dataType};
return headers[header.toLowerCase()];
};
if(docRoot){
xhr.status=Number(docRoot.getAttribute('status'))||xhr.status;
xhr.statusText=docRoot.getAttribute('statusText')||xhr.statusText;
}
var dt=(s.dataType||'').toLowerCase();
var scr=/(json|script|text)/.test(dt);
if(scr||s.textarea){
var ta=doc.getElementsByTagName('textarea')[0];
if(ta){
xhr.responseText=ta.value;
xhr.status=Number(ta.getAttribute('status'))||xhr.status;
xhr.statusText=ta.getAttribute('statusText')||xhr.statusText;
}else if(scr){
var pre=doc.getElementsByTagName('pre')[0];
var b=doc.getElementsByTagName('body')[0];
if(pre){
xhr.responseText=pre.textContent?pre.textContent:pre.innerText;
}else if(b){
xhr.responseText=b.textContent?b.textContent:b.innerText;
}
}
}else if(dt==='xml'&&!xhr.responseXML&&xhr.responseText){
xhr.responseXML=toXml(xhr.responseText);
}
try{
data=httpData(xhr,dt,s);
}catch(err){
status='parsererror';
xhr.error=errMsg=(err||status);
}
}catch(err){
log('error caught: ',err);
status='error';
xhr.error=errMsg=(err||status);
}
if(xhr.aborted){
log('upload aborted');
status=null;
}
if(xhr.status){
status=((xhr.status>=200&&xhr.status<300)||xhr.status===304)?'success':'error';
}
if(status==='success'){
if(s.success){
s.success.call(s.context,data,'success',xhr);
}
deferred.resolve(xhr.responseText,'success',xhr);
if(g){
$.event.trigger('ajaxSuccess',[xhr,s]);
}
}else if(status){
if(typeof errMsg==='undefined'){
errMsg=xhr.statusText;
}
if(s.error){
s.error.call(s.context,xhr,status,errMsg);
}
deferred.reject(xhr,'error',errMsg);
if(g){
$.event.trigger('ajaxError',[xhr,s,errMsg]);
}
}
if(g){
$.event.trigger('ajaxComplete',[xhr,s]);
}
if(g&&!--$.active){
$.event.trigger('ajaxStop');
}
if(s.complete){
s.complete.call(s.context,xhr,status);
}
callbackProcessed=true;
if(s.timeout){
clearTimeout(timeoutHandle);
}
setTimeout(function(){
if(!s.iframeTarget){
$io.remove();
}else{
$io.attr('src',s.iframeSrc);
}
xhr.responseXML=null;
},100);
}
var toXml=$.parseXML||function(s,doc){
if(window.ActiveXObject){
doc=new ActiveXObject('Microsoft.XMLDOM');
doc.async='false';
doc.loadXML(s);
}else{
doc=(new DOMParser()).parseFromString(s,'text/xml');
}
return(doc&&doc.documentElement&&doc.documentElement.nodeName!=='parsererror')?doc:null;
};
var parseJSON=$.parseJSON||function(s){
return window['eval']('('+s+')');
};
var httpData=function(xhr,type,s){
var ct=xhr.getResponseHeader('content-type')||'',
xml=((type==='xml'||!type)&&ct.indexOf('xml')>=0),
data=xml?xhr.responseXML:xhr.responseText;
if(xml&&data.documentElement.nodeName==='parsererror'){
if($.error){
$.error('parsererror');
}
}
if(s&&s.dataFilter){
data=s.dataFilter(data,type);
}
if(typeof data==='string'){
if((type==='json'||!type)&&ct.indexOf('json')>=0){
data=parseJSON(data);
}else if((type==='script'||!type)&&ct.indexOf('javascript')>=0){
$.globalEval(data);
}
}
return data;
};
return deferred;
}
};
$.fn.ajaxForm=function(options,data,dataType,onSuccess){
if(typeof options==='string'||(options===false&&arguments.length>0)){
options={
'url':options,
'data':data,
'dataType':dataType
};
if(typeof onSuccess==='function'){
options.success=onSuccess;
}
}
options=options||{};
options.delegation=options.delegation&&$.isFunction($.fn.on);
if(!options.delegation&&this.length===0){
var o={s:this.selector,c:this.context};
if(!$.isReady&&o.s){
log('DOM not ready, queuing ajaxForm');
$(function(){
$(o.s,o.c).ajaxForm(options);
});
return this;
}
log('terminating; zero elements found by selector'+($.isReady?'':' (DOM not ready)'));
return this;
}
if(options.delegation){
$(document)
.off('submit.form-plugin',this.selector,doAjaxSubmit)
.off('click.form-plugin',this.selector,captureSubmittingElement)
.on('submit.form-plugin',this.selector,options,doAjaxSubmit)
.on('click.form-plugin',this.selector,options,captureSubmittingElement);
return this;
}
return this.ajaxFormUnbind()
.on('submit.form-plugin',options,doAjaxSubmit)
.on('click.form-plugin',options,captureSubmittingElement);
};
function doAjaxSubmit(e){
var options=e.data;
if(!e.isDefaultPrevented()){
e.preventDefault();
$(e.target).closest('form').ajaxSubmit(options);
}
}
function captureSubmittingElement(e){
var target=e.target;
var $el=$(target);
if(!$el.is('[type=submit],[type=image]')){
var t=$el.closest('[type=submit]');
if(t.length===0){
return;
}
target=t[0];
}
var form=target.form;
form.clk=target;
if(target.type==='image'){
if(typeof e.offsetX!=='undefined'){
form.clk_x=e.offsetX;
form.clk_y=e.offsetY;
}else if(typeof $.fn.offset==='function'){
var offset=$el.offset();
form.clk_x=e.pageX-offset.left;
form.clk_y=e.pageY-offset.top;
}else{
form.clk_x=e.pageX-target.offsetLeft;
form.clk_y=e.pageY-target.offsetTop;
}
}
setTimeout(function(){
form.clk=form.clk_x=form.clk_y=null;
},100);
}
$.fn.ajaxFormUnbind=function(){
return this.off('submit.form-plugin click.form-plugin');
};
$.fn.formToArray=function(semantic,elements,filtering){
var a=[];
if(this.length===0){
return a;
}
var form=this[0];
var formId=this.attr('id');
var els=(semantic||typeof form.elements==='undefined')?form.getElementsByTagName('*'):form.elements;
var els2;
if(els){
els=$.makeArray(els);
}
if(formId&&(semantic||/(Edge|Trident)\//.test(navigator.userAgent))){
els2=$(':input[form="'+formId+'"]').get();
if(els2.length){
els=(els||[]).concat(els2);
}
}
if(!els||!els.length){
return a;
}
if($.isFunction(filtering)){
els=$.map(els,filtering);
}
var i,j,n,v,el,max,jmax;
for(i=0,max=els.length;i<max;i++){
el=els[i];
n=el.name;
if(!n||el.disabled){
continue;
}
if(semantic&&form.clk&&el.type==='image'){
if(form.clk===el){
a.push({name:n,value:$(el).val(),type:el.type});
a.push({name:n+'.x',value:form.clk_x},{name:n+'.y',value:form.clk_y});
}
continue;
}
v=$.fieldValue(el,true);
if(v&&v.constructor===Array){
if(elements){
elements.push(el);
}
for(j=0,jmax=v.length;j<jmax;j++){
a.push({name:n,value:v[j]});
}
}else if(feature.fileapi&&el.type==='file'){
if(elements){
elements.push(el);
}
var files=el.files;
if(files.length){
for(j=0;j<files.length;j++){
a.push({name:n,value:files[j],type:el.type});
}
}else{
a.push({name:n,value:'',type:el.type});
}
}else if(v!==null&&typeof v!=='undefined'){
if(elements){
elements.push(el);
}
a.push({name:n,value:v,type:el.type,required:el.required});
}
}
if(!semantic&&form.clk){
var $input=$(form.clk),input=$input[0];
n=input.name;
if(n&&!input.disabled&&input.type==='image'){
a.push({name:n,value:$input.val()});
a.push({name:n+'.x',value:form.clk_x},{name:n+'.y',value:form.clk_y});
}
}
return a;
};
$.fn.formSerialize=function(semantic){
return $.param(this.formToArray(semantic));
};
$.fn.fieldSerialize=function(successful){
var a=[];
this.each(function(){
var n=this.name;
if(!n){
return;
}
var v=$.fieldValue(this,successful);
if(v&&v.constructor===Array){
for(var i=0,max=v.length;i<max;i++){
a.push({name:n,value:v[i]});
}
}else if(v!==null&&typeof v!=='undefined'){
a.push({name:this.name,value:v});
}
});
return $.param(a);
};
$.fn.fieldValue=function(successful){
for(var val=[],i=0,max=this.length;i<max;i++){
var el=this[i];
var v=$.fieldValue(el,successful);
if(v===null||typeof v==='undefined'||(v.constructor===Array&&!v.length)){
continue;
}
if(v.constructor===Array){
$.merge(val,v);
}else{
val.push(v);
}
}
return val;
};
$.fieldValue=function(el,successful){
var n=el.name,t=el.type,tag=el.tagName.toLowerCase();
if(typeof successful==='undefined'){
successful=true;
}
if(successful&&(!n||el.disabled||t==='reset'||t==='button'||
(t==='checkbox'||t==='radio')&&!el.checked||
(t==='submit'||t==='image')&&el.form&&el.form.clk!==el||
tag==='select'&&el.selectedIndex===-1)){
return null;
}
if(tag==='select'){
var index=el.selectedIndex;
if(index<0){
return null;
}
var a=[],ops=el.options;
var one=(t==='select-one');
var max=(one?index+1:ops.length);
for(var i=(one?index:0);i<max;i++){
var op=ops[i];
if(op.selected&&!op.disabled){
var v=op.value;
if(!v){
v=(op.attributes&&op.attributes.value&&!(op.attributes.value.specified))?op.text:op.value;
}
if(one){
return v;
}
a.push(v);
}
}
return a;
}
return $(el).val().replace(rCRLF,'\r\n');
};
$.fn.clearForm=function(includeHidden){
return this.each(function(){
$('input,select,textarea',this).clearFields(includeHidden);
});
};
$.fn.clearFields=$.fn.clearInputs=function(includeHidden){
var re=/^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
return this.each(function(){
var t=this.type,tag=this.tagName.toLowerCase();
if(re.test(t)||tag==='textarea'){
this.value='';
}else if(t==='checkbox'||t==='radio'){
this.checked=false;
}else if(tag==='select'){
this.selectedIndex=-1;
}else if(t==='file'){
if(/MSIE/.test(navigator.userAgent)){
$(this).replaceWith($(this).clone(true));
}else{
$(this).val('');
}
}else if(includeHidden){
if((includeHidden===true&&/hidden/.test(t))||
(typeof includeHidden==='string'&&$(this).is(includeHidden))){
this.value='';
}
}
});
};
$.fn.resetForm=function(){
return this.each(function(){
var el=$(this);
var tag=this.tagName.toLowerCase();
switch(tag){
case'input':
this.checked=this.defaultChecked;
case'textarea':
this.value=this.defaultValue;
return true;
case'option':
case'optgroup':
var select=el.parents('select');
if(select.length&&select[0].multiple){
if(tag==='option'){
this.selected=this.defaultSelected;
}else{
el.find('option').resetForm();
}
}else{
select.resetForm();
}
return true;
case'select':
el.find('option').each(function(i){
this.selected=this.defaultSelected;
if(this.defaultSelected&&!el[0].multiple){
el[0].selectedIndex=i;
return false;
}
});
return true;
case'label':
var forEl=$(el.attr('for'));
var list=el.find('input,select,textarea');
if(forEl[0]){
list.unshift(forEl[0]);
}
list.resetForm();
return true;
case'form':
if(typeof this.reset==='function'||(typeof this.reset==='object'&&!this.reset.nodeType)){
this.reset();
}
return true;
default:
el.find('form,input,label,select,textarea').resetForm();
return true;
}
});
};
$.fn.enable=function(b){
if(typeof b==='undefined'){
b=true;
}
return this.each(function(){
this.disabled=!b;
});
};
$.fn.selected=function(select){
if(typeof select==='undefined'){
select=true;
}
return this.each(function(){
var t=this.type;
if(t==='checkbox'||t==='radio'){
this.checked=select;
}else if(this.tagName.toLowerCase()==='option'){
var $sel=$(this).parent('select');
if(select&&$sel[0]&&$sel[0].type==='select-one'){
$sel.find('option').selected(false);
}
this.selected=select;
}
});
};
$.fn.ajaxSubmit.debug=false;
function log(){
if(!$.fn.ajaxSubmit.debug){
return;
}
var msg='[jquery.form] '+Array.prototype.join.call(arguments,'');
if(window.console&&window.console.log){
window.console.log(msg);
}else if(window.opera&&window.opera.postError){
window.opera.postError(msg);
}
}
}));


(function($){
$.prototype.cfgCrayons=function(options){
this.url_crayons_html='?action=crayons_html';
this.img={
'searching':{'txt':'En attente du serveur ...'},
'edit':{'txt':'Editer'},
'img-changed':{'txt':'Deja modifie'}
};
this.txt={
};
for(opt in options){
this[opt]=options[opt];
}
};
$.prototype.cfgCrayons.prototype.mkimg=function(what,extra){
var txt=this.img[what]?this.img[what].txt:this.img['crayon'].txt;
return'<em class="crayon-'+what+'" title="'+txt+(extra?extra:'')+'"></em>';
};
$.prototype.cfgCrayons.prototype.iconclick=function(c,type){
var link=c.match(/\b(\w+)--(\d+)\b/);
link=link?
'<a href="ecrire/?exec='+link[1]+'s_edit&id_'+link[1]+'='+link[2]+
'">'+this.mkimg('edit',' ('+link[1]+' '+link[2]+')')+'</a>':'';
var cray=
c.match(/\b\w+-(\w+)-\d(?:-\w+)+\b/)
||c.match(/\b\w+-(\w+)-\d+\b/)
||c.match(/\b\meta-valeur-(\w+)\b/)
;
var boite=!cray?'':this.mkimg(type,' ('+cray[1]+')');
return"<span class='crayon-icones'><span>"+boite+
this.mkimg('img-changed',cray?' ('+cray[1]+')':'')+
link+"</span></span>";
};
function entity2unicode(txt)
{
var reg=txt.split(/&#(\d+);/i);
for(var i=1;i<reg.length;i+=2){
reg[i]=String.fromCharCode(parseInt(reg[i]));
}
return reg.join('');
};
function uniAlert(txt)
{
alert(entity2unicode(txt));
};
function uniConfirm(txt)
{
return confirm(entity2unicode(txt));
};
$.fn.crayon=function(){
if(this.length)
return $(
$.map(this,function(a){
return'#'+($(a).find('.crayon-icones').attr('rel'));
})
.join(','));
else
return $([]);
};
$.fn.opencrayon=function(evt,percent){
if(evt&&evt.stopPropagation){
evt.stopPropagation();
}
if(evt){
evt.preventDefault();
}
return this
.each(function(){
var $me=$(this);
if(!$me.is('.crayon'))
return;
if($me.is('.crayon-has')){
$me
.css('visibility','hidden')
.crayon()
.show();
}
else{
if($me.is('.crayon-loading')){
return;
}
$me
.addClass('crayon-loading')
.find('>span.crayon-icones span')
.append(configCrayons.mkimg('searching'));
var me=this;
var offset=$me.offset();
var bgcolor=$me.css('backgroundColor');
var params={
'top':offset.top,
'left':offset.left,
'w':$me.width(),
'h':$me.height(),
'ww':(window.innerWidth?window.innerWidth:(document.documentElement.clientWidth?document.documentElement.clientWidth:document.body.offsetWidth)),
'wh':(window.innerHeight?window.innerHeight:(document.documentElement.clientHeight?document.documentElement.clientHeight:document.body.offsetHeight)),
'em':$me.css('fontSize'),
'class':this.className,
'color':$me.css('color'),
'font-size':$me.css('fontSize'),
'font-family':$me.css('fontFamily'),
'font-weight':$me.css('fontWeight'),
'line-height':$me.css('lineHeight'),
'min-height':$me.css('lineHeight'),
'text-align':$me.css('textAlign'),
'background-color':$me.css('backgroundColor'),
'self':configCrayons.self
};
if(this.type)params.type=this.type;
if(params['background-color']=='transparent'
||params['background-color']=='rgba(0, 0, 0, 0)'){
$me.parents()
.each(function(){
var bg=$(this).css('backgroundColor');
if(bg!='transparent'
&&(params['background-color']=='transparent'
||params['background-color']=='rgba(0, 0, 0, 0)'))
params['background-color']=bg;
});
}
$.post(configCrayons.url_crayons_html,
params,
function(c){
try{
c=$.parseJSON(c);
}catch(e){
c={'$erreur':'erreur de communication :'+'  '+e.message,'$html':''};
}
$me
.removeClass('crayon-loading')
.find("em.crayon-searching")
.remove();
if(c.$erreur){
uniAlert(c.$erreur);
return false;
}
id_crayon++;
var position='absolute';
$me.parents().each(function(){
if($(this).css("position")=="fixed")
position='fixed';
});
$me
.css('visibility','hidden')
.addClass('crayon-has')
.find('>.crayon-icones')
.attr('rel','crayon_'+id_crayon);
if(document.createElement("detect").style.zoom===""){
$me.css({'zoom':1});
}
var pos=$me.offset();
var styles={
'position':position,
'top':pos['top']-1,
'left':pos['left']-1
};
var zindex=$me.zindexcrayon();
if(zindex){
styles['z-index']=zindex+1;
}
$('<div class="crayon-html" id="crayon_'+id_crayon+'"></div>')
.css(styles)
.appendTo('body')
.html(c.$html);
$me
.activatecrayon(percent);
var diff=$('#crayon_'+id_crayon).offset().left+$('#crayon_'+id_crayon).width()-$(window).width();
if(diff>0){
$('#crayon_'+id_crayon)
.css({'left':parseInt(pos['left'])-diff});
}
}
);
}
});
};
$.fn.zindexcrayon=function(){
var zindex=0;
this.parents().each(function(){
var thiszindex=parseInt(cQuery(this).css('z-index'));
if(thiszindex&&thiszindex>zindex){
zindex=thiszindex;
}
});
return zindex;
}
$.fn.cancelcrayon=function(){
this
.filter('.crayon-has')
.css('visibility','visible')
.removeClass('crayon-has')
.removeClass('crayon-changed')
.crayon()
.remove();
return this;
};
$.fn.hidecrayon=function(){
this
.filter('.crayon-has')
.css('visibility','visible')
.crayon()
.hide()
.removeClass('crayon-hover');
return this;
};
$.fn.restorecrayon=function(showButtons){
this
.removeClass('crayon-loading')
.find("em.crayon-searching")
.remove();
if(showButtons){
this
.find(".crayon-boutons,.resizehandle")
.show()
}
return this;
}
$.fn.activatecrayon=function(percent){
var focus=false;
this
.crayon()
.click(function(e){
e.stopPropagation();
});
this
.each(function(){
var me=$(this);
var crayon=$(this).crayon();
crayon
.find('form')
.append(
$('<input type="hidden" name="self" />')
.attr('value',configCrayons.self)
)
.ajaxForm({
"dataType":"json",
"error":function(d){
uniAlert('erreur de communication');
crayon
.restorecrayon(true)
.prepend(
$('<div class="error">')
.html(d.responseText||d.statusText||'erreur inconnue')
)
;
},
"success":function(d){
if(typeof d=="string"){
try{
d=$.parseJSON(d.replace(/^<pre>/,'').replace(/<[/]pre>$/,''));
}catch(e){
d={'$erreur':'erreur de communication :'+'  '+e.message,'$html':''};
}
}
me.restorecrayon(false);
crayon
.find("span.crayon-invalide p")
.remove();
crayon
.find("span.crayon-invalide")
.each(function(){
$(this).replaceWith(this.childNodes);
}
);
if(d.$invalides){
for(var invalide in d.$invalides){
var retour,msg;
d.$invalides[invalide]['retour']?retour=d.$invalides[invalide]['retour']:retour='';
d.$invalides[invalide]['msg']?msg=d.$invalides[invalide]['msg']:msg='';
crayon
.find("*[name='content_"+invalide+"']")
.wrap("<span class=\"crayon-invalide\"></span>")
.parent()
.append("<p>"
+retour
+" "
+msg
+"</p>"
);
}
}
if(d.$erreur>''){
if(d.$annuler){
if(d.$erreur>' '){
uniAlert(d.$erreur);
}
me
.cancelcrayon();
}else{
uniAlert(d.$erreur+'\n'+configCrayons.txt.error);
}
}
if(d.$erreur>''||d.$invalides){
crayon.restorecrayon(true);
return false;
}
$(me)
.cancelcrayon();
var tous=$(
'.crayon.crayon-autorise.'+
me[0].className.match(/crayon ([^ ]+)/)[1]
)
.html(
d[$('input.crayon-id',crayon).val()]
)
.iconecrayon();
if(typeof jQuery.spip=='object'&&typeof jQuery.spip.preloaded_urls=='object'){
jQuery.spip.preloaded_urls={};
}
if(typeof jQuery.spip=='object'&&typeof jQuery.spip.triggerAjaxLoad=='function'){
jQuery.spip.triggerAjaxLoad(tous.get());
}
}})
.bind('form-submit-validate',function(form,a,e,options,veto){
if(!veto.veto)
crayon
.addClass('crayon-loading')
.find('form')
.after(configCrayons.mkimg('searching'))
.find(".crayon-boutons,.resizehandle")
.hide();
})
.keyup(function(e){
crayon
.find(".crayon-boutons")
.show();
me
.addClass('crayon-changed');
e.cancelBubble=true;
})
.change(function(e){
crayon
.find(".crayon-boutons")
.show();
me
.addClass('crayon-changed');
e.cancelBubble=true;
})
.keypress(function(e){
var maxh=this.className.match(/\bmaxheight(\d+)?\b/);
if(maxh){
maxh=maxh[1]?parseInt(maxh[1]):200;
maxh=this.scrollHeight<maxh?this.scrollHeight:maxh;
if(maxh>this.clientHeight){
$(this).css('height',maxh+'px');
}
}
e.cancelBubble=true;
})
.find('select:visible:not(:disabled):not([readonly]):first').focus().end()
.find('input:visible:not(:disabled):not([readonly]):first').focus().end()
.find("textarea.crayon-active,input.crayon-active[type=text]")
.each(function(n){
if(n==0){
if(!$(this).is(':disabled, [readonly]')){
this.focus();
focus=true;
}
var position=parseInt(percent*this.textLength);
this.selectionStart=position;
this.selectionEnd=position;
}else if(!focus&&!$(this).is(':disabled, [readonly]'))
this.focus();
})
.end()
.keydown(function(e){
if(
(!e.charCode&&e.keyCode==119)||
(e.ctrlKey&&(
((e.charCode||e.keyCode)==115)||((e.charCode||e.keyCode)==83))
||(e.charCode==19&&e.keyCode==19)
)||
(
e.shiftKey&&(e.keyCode==13)
)
){
e.preventDefault();
crayon
.find("form.formulaire_crayon")
.submit();
}
if(e.keyCode==27){
me
.cancelcrayon();
}
})
.find(".crayon-submit")
.click(function(e){
e.stopPropagation();
$(this)
.parents("form:eq(0)")
.submit();
})
.end()
.find(".crayon-cancel")
.click(function(e){
e.stopPropagation();
me
.cancelcrayon();
})
.end()
.each(function(){
var offset=$(this).offset();
var hauteur=parseInt($(this).css('height'));
var scrolltop=$(window).scrollTop();
var h=$(window).height();
if(offset['top']-5<=scrolltop)
$(window).scrollTop(offset['top']-5);
else if(offset['top']+hauteur-h+20>scrolltop)
$(window).scrollTop(offset['top']+hauteur-h+30);
$("textarea",this)
.each(function(){
if(percent&&this.scrollHeight>hauteur){
this.scrollTop=this.scrollHeight*percent-hauteur;
}
})
.resizehandle()
.next('.resizehandle')
.next('.crayon-boutons')
.addClass('resizehandle_boutons');
})
.end();
if(typeof jQuery.spip=='object'&&typeof jQuery.spip.triggerAjaxLoad=='function'){
jQuery.spip.triggerAjaxLoad(crayon.get());
}
});
};
$.fn.iconecrayon=function(){
return this.each(function(){
var ctype=this.className.match(/\b[^-]type_(\w+)\b/);
var type=(ctype)?ctype[1]:'crayon';
if(ctype)this.type=type;
$(this).prepend(configCrayons.iconclick(this.className,type))
.find('.crayon-'+type+', .crayon-img-changed')
.click(function(e){
$(this).parents('.crayon:eq(0)').opencrayon(e);
});
});
};
$.fn.initcrayon=function(){
var editme=function(e){
timeme=null;
$(this).opencrayon(e,
((e.pageY?e.pageY:e.clientY)-document.body.scrollTop-this.offsetTop)
/this.clientHeight);
};
var timeme;
this
.addClass('crayon-autorise'+(configCrayons.cfg.yellow_fade?' crayon-fade':''))
.dblclick(editme)
.bind("touchstart",function(e){var me=this;timeme=setTimeout(function(){editme.apply(me,[e]);},800);})
.bind("touchend",function(e){if(timeme){clearTimeout(timeme);timeme=null;}})
.iconecrayon()
.hover(
function(){
$(this)
.addClass('crayon-hover')
.find('>span.crayon-icones')
.find('>span>em.crayon-'+(this.type||'crayon')+',>span>em.crayon-edit')
.show();
},function(){
$(this)
.removeClass('crayon-hover')
.find('>span.crayon-icones')
.find('>span>em.crayon-'+(this.type||'crayon')+',>span>em.crayon-edit')
.hide();
}
);
return this;
};
$.fn.crayonsstart=function(){
if(!configCrayons.droits)return;
id_crayon=0;
if(configCrayons.txt.sauvegarder){
$(window).unload(function(e){
var chg=$(".crayon-changed");
if(chg.length&&uniConfirm(configCrayons.txt.sauvegarder)){
chg.crayon().find('form').submit();
}
});
}
if((typeof crayons_init_dynamique=='undefined')||(crayons_init_dynamique==false)){
$(function(){
$('body')
.on('mouseover touchstart','.crayon:not(.crayon-init)',function(e){
$(this)
.addClass('crayon-init')
.filter(configCrayons.droits)
.initcrayon()
.trigger('mouseover');
if(e.type=='touchstart')
$(this).trigger('touchstart');
});
});
}
if(configCrayons.cfg.clickhide)
$("html")
.click(function(){
$('.crayon-has')
.hidecrayon();
});
};
})(cQuery);


(function($){
$.fn.resizehandle=function(){
return this.each(function(){
var me=$(this);
me.after(
$('<div class="resizehandle"></div>')
.css({height:'16px',width:Math.max(me.width()-4,10)})
.bind('mousedown',function(e){
var h=me.height();
var y=e.clientY;
var moveHandler=function(e){
me
.height(Math.max(20,e.clientY+h-y));
};
var upHandler=function(e){
$('html')
.unbind('mousemove',moveHandler)
.unbind('mouseup',upHandler);
};
$('html')
.bind('mousemove',moveHandler)
.bind('mouseup',upHandler);
})
);
});
};
})(cQuery);


(function($){
$.fn.html5Uploader=function(options){
var crlf='\r\n';
var boundary="iloveigloo";
var dashes="--";
var settings={
"name":"uploadedFile",
"postUrl":"Upload.aspx",
"onClientAbort":null,
"onClientError":null,
"onClientLoad":null,
"onClientLoadEnd":null,
"onClientLoadStart":null,
"onClientProgress":null,
"onServerAbort":null,
"onServerError":null,
"onServerLoad":null,
"onServerLoadStart":null,
"onServerProgress":null,
"onServerReadyStateChange":null,
"onSuccess":null
};
if(options){
$.extend(settings,options);
}
return this.each(function(options){
var $this=$(this);
if($this.is("[type='file']")){
$this
.bind("change",function(){
var files=this.files;
for(var i=0;i<files.length;i++){
fileHandler(files[i]);
}
});
}else{
$this
.bind("dragenter dragover",function(){
$(this).addClass("hover");
return false;
})
.bind("dragleave",function(){
$(this).removeClass("hover");
return false;
})
.bind("drop",function(e){
$(this).removeClass("hover");
var files=e.originalEvent.dataTransfer.files;
for(var i=0;i<files.length;i++){
fileHandler(files[i]);
}
return false;
});
}
});
function fileHandler(file){
var fileReader=new FileReader();
fileReader.onabort=function(e){
if(settings.onClientAbort){
settings.onClientAbort(e,file);
}
};
fileReader.onerror=function(e){
if(settings.onClientError){
settings.onClientError(e,file);
}
};
fileReader.onload=function(e){
if(settings.onClientLoad){
settings.onClientLoad(e,file);
}
};
fileReader.onloadend=function(e){
if(settings.onClientLoadEnd){
settings.onClientLoadEnd(e,file);
}
};
fileReader.onloadstart=function(e){
if(settings.onClientLoadStart){
settings.onClientLoadStart(e,file);
}
};
fileReader.onprogress=function(e){
if(settings.onClientProgress){
settings.onClientProgress(e,file);
}
};
fileReader.readAsDataURL(file);
var xmlHttpRequest=new XMLHttpRequest();
xmlHttpRequest.upload.onabort=function(e){
if(settings.onServerAbort){
settings.onServerAbort(e,file);
}
};
xmlHttpRequest.upload.onerror=function(e){
if(settings.onServerError){
settings.onServerError(e,file);
}
};
xmlHttpRequest.upload.onload=function(e){
if(settings.onServerLoad){
settings.onServerLoad(e,file);
}
};
xmlHttpRequest.upload.onloadstart=function(e){
if(settings.onServerLoadStart){
settings.onServerLoadStart(e,file);
}
};
xmlHttpRequest.upload.onprogress=function(e){
if(settings.onServerProgress){
settings.onServerProgress(e,file);
}
};
xmlHttpRequest.onreadystatechange=function(e){
if(settings.onServerReadyStateChange){
settings.onServerReadyStateChange(e,file,xmlHttpRequest.readyState);
}
if(settings.onSuccess&&xmlHttpRequest.readyState==4&&xmlHttpRequest.status==200){
settings.onSuccess(e,file,xmlHttpRequest.responseText);
}
};
xmlHttpRequest.open("POST",settings.postUrl,true);
if(file.getAsBinary){
var data=dashes+boundary+crlf+
"Content-Disposition: form-data;"+
"name=\""+settings.name+"\";"+
"filename=\""+unescape(encodeURIComponent(file.name))+"\""+crlf+
"Content-Type: application/octet-stream"+crlf+crlf+
file.getAsBinary()+crlf+
dashes+boundary+dashes;
xmlHttpRequest.setRequestHeader("Content-Type","multipart/form-data;boundary="+boundary);
xmlHttpRequest.sendAsBinary(data);
}else if(window.FormData){
var formData=new FormData();
formData.append(settings.name,file);
xmlHttpRequest.send(formData);
}
}
};
})(cQuery);


 
startCrayons();
