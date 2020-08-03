// ==UserScript==
// @name         Twemoji Decoder For Twitter
// @namespace    http://scrpg.tyanoyu.net/
// @version      0.2
// @description  Twitterで文字列選択したときに絵文字が日本語になる現象の対処スクリプト（適当に作成）
// @author       mtripg6666tdr
// @match        https://twitter.com/*
// @grant        none
// @require      https://twemoji.maxcdn.com/v/latest/twemoji.min.js
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';
    var c = function(){
        $('img.css-9pa8cd').each(function(){
            if($(this).attr('data-ec_c') !== '1'){
                var src = $(this).attr('src');
                var m = null;
                if(m = src.match(/\/svg\/(.+)\.svg/)){
                    var t = twemoji.convert.fromCodePoint(m[1]);
                    this.alt = t;
                    $(this).attr('data-ec_c', '1');
                }
            }
        });
        rc();
    };
    var rc = function(){
        setTimeout(c, 1000);
    };
    $('*').on('contextmenu', c);
    c();
    // Your code here...
})();