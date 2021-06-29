//##########################################################################################################
//  Zesty Helper Functionality
//##########################################################################################################

(function() {

    if (document.addEventListener) {

    // ----------------------------------------------------------------------
    //  On-load event
    // ----------------------------------------------------------------------

        window.addEventListener('load',function() {

        // ----------------------------------------------------------------------
        //  Collect all link tags
        // ----------------------------------------------------------------------

            var linkTags = document.getElementsByTagName('a');


        // ----------------------------------------------------------------------
        //  Remove titles temporarily when you hover over them
        //  (to prevent yellow pop-ups blocking text)
        // ----------------------------------------------------------------------

            var linkTagOnMouseOver = function() { this.hiddenTitle = this.title; this.title = ''; },
                linkTagOnMouseOut = function() { this.title = this.hiddenTitle; this.title = this.hiddenTitle; this.hiddenTitle = null; };

            for (var i = 0; i < linkTags.length; ++i) {
                linkTags[i].addEventListener('mouseover',linkTagOnMouseOver);
                linkTags[i].addEventListener('mouseout',linkTagOnMouseOut);
            }

        // ----------------------------------------------------------------------
        //  Add '.at' class to all '<a>' nodes that match the current URL
        // ----------------------------------------------------------------------

            for (var key in linkTags) {
                if (linkTags.hasOwnProperty && linkTags.hasOwnProperty(key) && linkTags[key].getAttribute) {
                    var href = linkTags[key].getAttribute('href');
                    if (window.location.pathname.match(href) && href.length <= window.location.pathname.length && !linkTags[key].className.match('zesty_link')) {
                        if (href != '/' && linkTags[key].parentNode.className != 'crumb') linkTags[key].className += ' at';
                    }
                }
            }

        });

    } // end of if document.addEventListener

})();


//##########################################################################################################
// HTML5 Shiv v3.6.2pre | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
//##########################################################################################################

(function(l,f){function m(){var a=e.elements;return"string"==typeof a?a.split(" "):a}function i(a){var b=n[a[o]];b||(b={},h++,a[o]=h,n[h]=b);return b}function p(a,b,c){b||(b=f);if(g)return b.createElement(a);c||(c=i(b));b=c.cache[a]?c.cache[a].cloneNode():r.test(a)?(c.cache[a]=c.createElem(a)).cloneNode():c.createElem(a);return b.canHaveChildren&&!s.test(a)?c.frag.appendChild(b):b}function t(a,b){if(!b.cache)b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag();
a.createElement=function(c){return!e.shivMethods?b.createElem(c):p(c,a,b)};a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/\w+/g,function(a){b.createElem(a);b.frag.createElement(a);return'c("'+a+'")'})+");return n}")(e,b.frag)}function q(a){a||(a=f);var b=i(a);if(e.shivCSS&&!j&&!b.hasCSS){var c,d=a;c=d.createElement("p");d=d.getElementsByTagName("head")[0]||d.documentElement;c.innerHTML="x<style>article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}</style>";
c=d.insertBefore(c.lastChild,d.firstChild);b.hasCSS=!!c}g||t(a,b);return a}var k=l.html5||{},s=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,r=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,j,o="_html5shiv",h=0,n={},g;(function(){try{var a=f.createElement("a");a.innerHTML="<xyz></xyz>";j="hidden"in a;var b;if(!(b=1==a.childNodes.length)){f.createElement("a");var c=f.createDocumentFragment();b="undefined"==typeof c.cloneNode||
"undefined"==typeof c.createDocumentFragment||"undefined"==typeof c.createElement}g=b}catch(d){g=j=!0}})();var e={elements:k.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",version:"3.6.2pre",shivCSS:!1!==k.shivCSS,supportsUnknownElements:g,shivMethods:!1!==k.shivMethods,type:"default",shivDocument:q,createElement:p,createDocumentFragment:function(a,b){a||(a=f);if(g)return a.createDocumentFragment();
for(var b=b||i(a),c=b.frag.cloneNode(),d=0,e=m(),h=e.length;d<h;d++)c.createElement(e[d]);return c}};l.html5=e;q(f)})(this,document);
