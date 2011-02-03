// ==UserScript==
// @name        natsumesou
// @namespace   http://natsu.me
// @description key control for livedoor reader
// @include http://reader.livedoor.com/reader/
// ==UserScript==

var keybind = (function(){
        function add (phrase, func){
        if(phrase instanceof Array){
        phrase.forEach(function(p){
            add(p, func);
            });
        } else {
        document.addEventListener("keydown",
            function(event){
            var tagName = event.target.tagName;
            if(phrase == code(event) &&
                !tagName.match(/(INPUT|TEXTAREA)/i)){
            func();
            event.preventDefault();
            event.stopPropagation();
            }
            }, true);
        }
        }
        function code(event){
        var code = [];
        if(event.shiftKey){
            code.push("S");
        } else if(event.ctrlKey){
            code.push("C");
        } else if(event.altKey || event.metaKey){
            code.push("M");
        }
        code.push(kc2char(event.keyCode));
        return code.join("-");

        function kc2char(kc){
            function between(a,b){
                return a <= kc && kc <= b;
            }
            var _32_40 = "space pageup pagedown end home left up right down".split(" ");
            var kt = {
8  : "backspace",
     9  : "tab"  ,
     13 : "enter",
     16 : "shift",
     17 : "control",
     27 : "escape",
     46 : "delete",
            };
            return (between(65,90)  ? String.fromCharCode(kc+32) : // a-z
                    between(48,57)  ? String.fromCharCode(kc) :    // 0-9
                    between(96,105) ? String.fromCharCode(kc-48) : // num 0-9
                    between(32,40)  ? _32_40[kc-32] :
                    kt.hasOwnProperty(kc) ? kt[kc] :
                    kc);
        }
        }
        return add;
})();


keybind("C-S", function(){ return false; });

