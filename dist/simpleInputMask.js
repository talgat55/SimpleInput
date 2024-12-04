(()=>{"use strict";var t,e,n={};t=n,e=function(){function t(t){this.inputElement=null,this.mask=t.mask,this.onCompleteCallback=t.onComplete}return t.prototype.applyMask=function(t){for(var e="",n=0,i=0;i<this.mask.length;i++){var p=this.mask[i],s=t[n];if(!s)break;"9"===p?/\d/.test(s)?(e+=s,n++):(n++,i--):"A"===p?/[a-zA-Z]/.test(s)?(e+=s,n++):(n++,i--):"*"===p?/[a-zA-Z0-9]/.test(s)?(e+=s,n++):(n++,i--):(e+=p,s===p&&n++)}return e},t.prototype.isComplete=function(t){return this.applyMask(t).length===this.mask.length},t.prototype.attach=function(t){var e=this;this.inputElement=t;var n=function(){if(e.inputElement){var t=e.inputElement.value,n=e.applyMask(t);e.inputElement.value=n,e.isComplete(t)&&e.onCompleteCallback&&e.onCompleteCallback(n)}};this.inputElement.addEventListener("input",n),this.inputElement.addEventListener("paste",n),this.inputElement._onInputMask=n},t.prototype.detach=function(){if(this.inputElement){var t=this.inputElement._onInputMask;t&&(this.inputElement.removeEventListener("input",t),this.inputElement.removeEventListener("paste",t),delete this.inputElement._onInputMask),this.inputElement=null}},t}(),t.default=e,window.SimpleInputMask=n.default})();