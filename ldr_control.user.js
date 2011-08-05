// ==UserScript==
// @name        ldr_control
// @namespace   http://natsu.me
// @description key control for livedoor reader
// @include http://reader.livedoor.com/reader/*
// @include http://fastladder.com/reader/*
// ==UserScript==

(function(){
    //無効化したいキーバインドを登録
    var Unbind = function(){
        Keybind.remove('shift+ctrl');
        Keybind.remove('ctrl+shift');
    }
   window.addEventListener('load', (function(){
        location.href = "javascript:void (" + Unbind + ")()";
    })(), false);
})();

// livedoor Reader KeyConfig
/*
var KeyConfig = {
     'read_next_subs'   : 's|shift+ctrl|shift+down',
     'read_prev_subs'   : 'a|ctrl+shift|shift+up',
     'read_head_subs'   : 'w|shift+home',
     'read_end_subs'    : 'W|shift+end',
     'feed_next'        : '>|J',
     'feed_prev'        : '<|K',
     'reload_subs'      : 'r',
     'scroll_next_page' : 'space|pagedown',
     'scroll_prev_page' : 'shift+space|pageup',
     'pin'              : 'p',
     'open_pin'         : 'o',
     'view_original'    : 'v|ctrl+enter',
     'scroll_next_item' : 'j|enter',
     'scroll_prev_item' : 'k|shift+enter',
     'compact'          : 'c',
     'focus_findbox'    : 'f',
     'blur_findbox'     : 'esc',
     'unsubscribe'      : 'delete',
     'toggle_leftpane'  : 'z',
     'toggle_fullscreen': 'Z',
     'toggle_keyhelp'   : '?'
};
*/
