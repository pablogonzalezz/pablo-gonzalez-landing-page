"use strict";(self.webpackChunkpablo_gonzalez_landing_page=self.webpackChunkpablo_gonzalez_landing_page||[]).push([[6403],{19701:e=>{function n(e){!function(e){function n(e,n){return"___"+e.toUpperCase()+n+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(t,a,o,r){if(t.language===a){var l=t.tokenStack=[];t.code=t.code.replace(o,(function(e){if("function"===typeof r&&!r(e))return e;for(var o,i=l.length;-1!==t.code.indexOf(o=n(a,i));)++i;return l[i]=e,o})),t.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(t,a){if(t.language===a&&t.tokenStack){t.grammar=e.languages[a];var o=0,r=Object.keys(t.tokenStack);!function l(i){for(var g=0;g<i.length&&!(o>=r.length);g++){var p=i[g];if("string"===typeof p||p.content&&"string"===typeof p.content){var u=r[o],c=t.tokenStack[u],s="string"===typeof p?p:p.content,f=n(a,u),k=s.indexOf(f);if(k>-1){++o;var d=s.substring(0,k),h=new e.Token(a,e.tokenize(c,t.grammar),"language-"+a,c),m=s.substring(k+f.length),_=[];d&&_.push.apply(_,l([d])),_.push(h),m&&_.push.apply(_,l([m])),"string"===typeof p?i.splice.apply(i,[g,1].concat(_)):p.content=_}}else p.content&&l(p.content)}return i}(t.tokens)}}}})}(e)}e.exports=n,n.displayName="markupTemplating",n.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_markupTemplating.3922cf3c.chunk.js.map