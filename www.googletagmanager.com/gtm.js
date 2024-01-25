// Copyright 2012 Google Inc. All rights reserved.

(function(w, g) {
    w[g] = w[g] || {};
    w[g].e = function(s) {
        return eval(s);
    };
})(window, 'google_tag_manager');

(function() {

    var data = {
        "resource": {
            "version": "155",

            "macros": [{
                "function": "__e"
            }, {
                "function": "__v",
                "vtp_name": "gtm.triggers",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": true,
                "vtp_defaultValue": ""
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){function k(g,d,k){var b=g,c=b.split(\"?\");g=c[0];b=1\u003Cc.length?b.replace(g,\"\").substring(1):\"\";var a=b;b=a.split(\/[\u0026;]\/);c=[];var e=\"\";if(\"\"===a)d=\"\";else{for(a=0;a\u003Cb.length;a++){var h=b[a].split(\"\\x3d\"),l=h[0];h=h[1];include=!0;for(var m=0;m\u003Cd.length;m++){var f;(f=l.toLowerCase()===d[m].toLowerCase())||(f=\/(([^\u003C\u003E()\\[\\]\\\\.,;:\\s@\"]+(\\.[^\u003C\u003E()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))\/,f=f.test(l));f\u0026\u0026(include=!1)}include\u0026\u0026\nc.push({name:l,value:h})}if(1\u003Ec.length)d=e;else{for(a=0;a\u003Cc.length;a++)e+=c[a].name,e+=\"\\x3d\",e+=c[a].value,a!==c.length-1\u0026\u0026(e+=\"\\x26\");d=\"?\"+e}}b=g+d;return b=b.replace(\/([a-zA-Z0-9\\.\\+_-`~!#\\$%\\^\u0026*\\(\\)]+(@|%40|%2540)[a-zA-Z0-9\\.\\+_-`~!#\\$%\\^\u0026*\\(\\)]+\\.[a-zA-Z0-9\\.\\+_-`~!#\\$%\\^*\\(\\)]+)\/gi,k)}return k})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var b=\"firstName lastName firstname lastname nickname address gender p phone e profileurl email pwd fname lname user\".split(\" \"),c=\"email_removed\",d=", ["escape", ["macro", 2], 8, 16], ",a=document.location.pathname+document.location.search;var e=\/^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$\/;a=e.test(a)?a.replace(\/^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$\/,\"phone_removed\"):a;return d(a,b,c)})();"]
            }, {
                "function": "__f",
                "vtp_component": "URL"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var b=\"firstName lastName firstname lastname nickname address gender p phone e profileurl email pwd fname lname user\".split(\" \"),c=\"email_removed\",d=", ["escape", ["macro", 2], 8, 16], ";var a=", ["escape", ["macro", 4], 8, 16], ";var e=\/^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$\/;a=e.test(a)?a.replace(\/^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$\/,\"phone_removed\"):a;return d(a,b,c)})();"]
            }, {
                "function": "__gas",
                "vtp_cookieDomain": "auto",
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_useDebugVersion": false,
                "vtp_fieldsToSet": ["list", ["map", "fieldName", "page", "value", ["macro", 3]],
                    ["map", "fieldName", "referrer", "value", ["macro", 5]]
                ],
                "vtp_useHashAutoLink": false,
                "vtp_decorateFormsAutoLink": false,
                "vtp_enableLinkId": false,
                "vtp_enableEcommerce": false,
                "vtp_trackingId": "UA-625471-2",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableGA4Schema": true
            }, {
                "function": "__v",
                "vtp_name": "logType",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 1,
                "vtp_setDefaultValue": false,
                "vtp_name": "loginState"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=document.getElementsByTagName(\"h3\").length;return a})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=$(\"div.full-article-body\").text();return a=a.split(\" \").length})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=document.getElementsByTagName(\"meta\");for(i=0;i\u003Ca.length;i++)if(\"pkm-modified-date\"==a[i].getAttribute(\"name\"))return a[i].getAttribute(\"content\")})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){for(var a=\"us uk fr it es de nl ca br el\".split(\" \"),b=0;b\u003Ca.length;b++)if(-1\u003Cwindow.location.href.indexOf(\"\/\"+a[b]+\"\/\"))return a[b];return a[0]})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=JSON.parse(document.querySelector('script[type\\x3d\"application\/ld+json\"]').innerText);return(new Date(a.datePublished)).toDateString()})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var d=new Date(", ["escape", ["macro", 13], 8, 16], ");return(new Date(jsonld.datePublished)).toDateString()})();"]
            }, {
                "function": "__u",
                "vtp_component": "HOST",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": true,
                "vtp_input": ["macro", 15],
                "vtp_defaultValue": "UA-625471-2",
                "vtp_map": ["list", ["map", "key", "staging.pokemon.dev", "value", "UA-625471-2"],
                    ["map", "key", "developvm.pokemon.dev", "value", "UA-625471-2"],
                    ["map", "key", "www.pokemon.com", "value", "UA-625471-2"],
                    ["map", "key", "pokemonbank.ms.pokemon.dev", "value", "UA-1055073-19"],
                    ["map", "key", "www.pokemonbank.com", "value", "UA-1055073-19"],
                    ["map", "key", "pokemontypingadventure.ms.pokemon.dev", "value", "UA-1055073-16"],
                    ["map", "key", "www.pokemonrumble.com", "value", "UA-1055073-11"],
                    ["map", "key", "pokemonrumble.ms.pokemon.dev", "value", "UA-1055073-11"],
                    ["map", "key", "sso.pokemon.com", "value", "UA-625471-2"],
                    ["map", "key", "pokemontrozei.ms.pokemon.dev", "value", "UA-1055073-21"],
                    ["map", "key", "www.pokemontrozei.com", "value", "UA-1055073-21"],
                    ["map", "key", "www.pokedexios.com", "value", "UA-1055073-17"],
                    ["map", "key", "pokedexios.ms.pokemon.dev", "value", "UA-1055073-17"],
                    ["map", "key", "www.pokemonshuffle.com", "value", "UA-1055073-25"],
                    ["map", "key", "pokemonshuffle.ms.pokemon.dev", "value", "UA-1055073-25"],
                    ["map", "key", "local.pokemon.dev", "value", "UA-625471-5"],
                    ["map", "key", "staging2.pokemon.biz", "value", "UA-625471-2"],
                    ["map", "key", "xy7.pokemontcgxy.com", "value", "UA-1055073-28"]
                ]
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementClasses",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "OnetrustActiveGroups"
            }, {
                "function": "__gas",
                "vtp_cookieDomain": "auto",
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_useDebugVersion": false,
                "vtp_fieldsToSet": ["list", ["map", "fieldName", "page", "value", ["macro", 3]],
                    ["map", "fieldName", "referrer", "value", ["macro", 5]]
                ],
                "vtp_useHashAutoLink": false,
                "vtp_decorateFormsAutoLink": false,
                "vtp_enableLinkId": false,
                "vtp_enableEcommerce": false,
                "vtp_trackingId": "UA-625471-2",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableGA4Schema": true
            }, {
                "function": "__u",
                "vtp_component": "URL",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var b=\"firstName lastName firstname lastname nickname address gender p phone e profileurl email pwd fname lname user\".split(\" \"),c=\"email_removed\",d=", ["escape", ["macro", 2], 8, 16], ";var a=", ["escape", ["macro", 20], 8, 16], ";var e=\/^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$\/;a=e.test(a)?a.replace(\/^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$\/,\"phone_removed\"):a;return d(a,b,c)})();"]
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementUrl",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var b=\"firstName lastName firstname lastname nickname address gender p phone e profileurl email pwd fname lname user\".split(\" \"),c=\"email_removed\",d=", ["escape", ["macro", 2], 8, 16], ";var a=", ["escape", ["macro", 22], 8, 16], ";var e=\/^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$\/;a=e.test(a)?a.replace(\/^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$\/,\"phone_removed\"):a;return d(a,b,c)})();"]
            }, {
                "function": "__v",
                "vtp_name": "gtm.element",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__j",
                "vtp_name": "document.title"
            }, {
                "function": "__aev",
                "vtp_varType": "TEXT"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var b=\"firstName lastName firstname lastname nickname address gender p e profileurl email pwd fname lname user\".split(\" \"),c=\"email_removed\",d=", ["escape", ["macro", 2], 8, 16], ";var a=", ["escape", ["macro", 26], 8, 16], ";var e=\/^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$\/;a=e.test(a)?a.replace(\/^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$\/,\"phone_removed\"):a;return d(a,b,c)})();"]
            }, {
                "function": "__aev",
                "vtp_varType": "TEXT"
            }, {
                "function": "__aev",
                "vtp_setDefaultValue": false,
                "vtp_varType": "ATTRIBUTE",
                "vtp_attribute": "rel"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var b=\"firstName lastName firstname lastname nickname address gender p phone e profileurl email pwd fname lname user\".split(\" \"),c=\"email_removed\",d=", ["escape", ["macro", 2], 8, 16], ";var a=", ["escape", ["macro", 29], 8, 16], ";var e=\/^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$\/;a=e.test(a)?a.replace(\/^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$\/,\"phone_removed\"):a;return d(a,b,c)})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){for(var a=", ["escape", ["macro", 24], 8, 16], ";!a.getAttribute(\"data-analytics-label\")\u0026\u0026\"BODY\"!==a.tagName;)a=a.parentElement;return a.getAttribute(\"data-analytics-label\")})();"]
            }, {
                "function": "__v",
                "vtp_name": "pageCat",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=document.getElementsByTagName(\"meta\");for(i=0;i\u003Ca.length;i++)if(\"pkm-category\"==a[i].getAttribute(\"name\"))return a[i].getAttribute(\"content\")})();"]
            }, {
                "function": "__aev",
                "vtp_varType": "CLASSES"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){for(var a=", ["escape", ["macro", 24], 8, 16], ";!a.getAttribute(\"data-tile-template\")\u0026\u0026\"BODY\"!==a.tagName;)a=a.parentElement;return a.getAttribute(\"data-tile-template\")})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){for(var a=", ["escape", ["macro", 24], 8, 16], ";!a.getAttribute(\"data-tile-position\")\u0026\u0026\"BODY\"!==a.tagName;)a=a.parentElement;return a.getAttribute(\"data-tile-position\")})();"]
            }, {
                "function": "__u",
                "vtp_component": "PATH",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__v",
                "vtp_name": "gtm.scrollThreshold",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.visibleRatio",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementId",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){for(var a=", ["escape", ["macro", 24], 8, 16], ";!a.getAttribute(\"data-content-type\")\u0026\u0026\"BODY\"!==a.tagName;)a=a.parentElement;return a.getAttribute(\"data-content-type\")})();"]
            }, {
                "function": "__aev",
                "vtp_setDefaultValue": false,
                "vtp_varType": "ATTRIBUTE",
                "vtp_attribute": "data-category"
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": false,
                "vtp_input": ["macro", 42],
                "vtp_map": ["list", ["map", "key", "animation", "value", "Pokemon TV"],
                    ["map", "key", "tcg", "value", "Trading Card Game"],
                    ["map", "key", "news", "value", "News"],
                    ["map", "key", "videogames", "value", "Video Game"],
                    ["map", "key", "events", "value", "Events"],
                    ["map", "key", "pokedex", "value", "Pokedex"]
                ]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return window.location.hash})();"]
            }, {
                "function": "__v",
                "vtp_name": "gtm.videoStatus",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.videoPercent",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=", ["escape", ["macro", 45], 8, 16], ";switch(a){case \"start\":return\"Start playing\";case \"pause\":return\"Pause\";case \"buffering\":return\"Buffering\";case \"progress\":return\"Reached \"+", ["escape", ["macro", 46], 8, 16], "+\"%\";case \"complete\":return\"Reached the end\"}})();"]
            }, {
                "function": "__v",
                "vtp_name": "gtm.videoTitle",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){for(var a=", ["escape", ["macro", 24], 8, 16], ";!a.getAttribute(\"data-lightbox\")\u0026\u0026\"BODY\"!==a.tagName;)a=a.parentElement;return a.getAttribute(\"data-lightbox\")})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "optanonValue"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "optanonCategory"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "optanonAction"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "optanonLabel"
            }, {
                "function": "__u",
                "vtp_component": "HOST",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__u",
                "vtp_component": "URL",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__u",
                "vtp_component": "PATH",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__f"
            }, {
                "function": "__e"
            }, {
                "function": "__c",
                "vtp_value": "Click"
            }, {
                "function": "__v",
                "vtp_name": "ext",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "file",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "extURI",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "MailTO",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "cat",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "action",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "label",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "value",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "regCat",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "regAction",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__c",
                "vtp_value": "UA-625471-2"
            }, {
                "function": "__u",
                "vtp_component": "URL",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__c",
                "vtp_value": "UA-1055073-10"
            }, {
                "function": "__aev",
                "vtp_varType": "URL",
                "vtp_component": "URL"
            }, {
                "function": "__u",
                "vtp_component": "QUERY",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__u",
                "vtp_component": "QUERY",
                "vtp_queryKey": "src",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__u",
                "vtp_component": "QUERY",
                "vtp_queryKey": "path",
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__smm",
                "vtp_input": ["macro", 15],
                "vtp_map": ["list", ["map", "key", "pokemonbank.ms.pokemon.dev", "value", "UA-1055073-19"],
                    ["map", "key", "www.pokemonbank.com", "value", "UA-1055073-19"],
                    ["map", "key", "pokemontypingadventure.ms.pokemon.dev", "value", "UA-1055073-16"],
                    ["map", "key", "www.pokemonrumble.com", "value", "UA-1055073-11"],
                    ["map", "key", "pokemonrumble.ms.pokemon.dev", "value", "UA-1055073-11"],
                    ["map", "key", "sso.pokemon.com", "value", "UA-625471-2"],
                    ["map", "key", "pokemontrozei.ms.pokemon.dev", "value", "UA-1055073-21"],
                    ["map", "key", "www.pokemontrozei.com", "value", "UA-1055073-21"]
                ]
            }, {
                "function": "__u",
                "vtp_component": "HOST",
                "vtp_stripWww": true,
                "vtp_enableMultiQueryKeys": false,
                "vtp_enableIgnoreEmptyQueryParam": false
            }, {
                "function": "__smm",
                "vtp_input": ["macro", 15],
                "vtp_map": ["list", ["map", "key", "justinvm.pokemon.dev", "value", "pokemon.dev"],
                    ["map", "key", "staging.pokemon.dev", "value", "pokemon.dev"],
                    ["map", "key", "developvm.pokemon.dev", "value", "pokemon.dev"],
                    ["map", "key", "stuartvm.pokemon.dev", "value", "pokemon.dev"],
                    ["map", "key", "www.pokemon.com", "value", "pokemon.com"],
                    ["map", "key", "pokemonbank.ms.pokemon.dev", "value", "pokemonbank.ms.pokemon.dev"],
                    ["map", "key", "www.pokemonbank.com", "value", "pokemonbank.com"],
                    ["map", "key", "pokemontypingadventure.ms.pokemon.dev", "value", "pokemontypingadventure.ms.pokemon.dev"],
                    ["map", "key", "www.pokemonrumble.com", "value", "pokemonrumble.com"],
                    ["map", "key", "pokemonrumble.ms.pokemon.dev", "value", "pokemonrumble.ms.pokemon.dev"],
                    ["map", "key", "sso.pokemon.com", "value", "pokemon.com"],
                    ["map", "key", "pokemontrozei.ms.pokemon.dev", "value", "pokemontrozei.ms.pokemon.dev"],
                    ["map", "key", "www.pokemontrozei.com", "value", "pokemontrozei.com"],
                    ["map", "key", "www.pokedexios.com", "value", "pokedexios.com"],
                    ["map", "key", "pokedexios.ms.pokemon.dev", "value", "pokedexios.ms.pokemon.dev"],
                    ["map", "key", "macn-patrickn.popmultimedia.com", "value", "popmultimedia.com"],
                    ["map", "key", "localhost", "value", "none"]
                ],
                "vtp_defaultValue": "pokemon.com",
                "vtp_setDefaultValue": true
            }, {
                "function": "__v",
                "vtp_name": "isPglPage",
                "vtp_defaultValue": "{{false}}",
                "vtp_setDefaultValue": true,
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return!0})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return!1})();"]
            }, {
                "function": "__c",
                "vtp_value": "http:\/\/3ds.pokemon-gl.com"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return window.pokemonMosaicType})();"]
            }, {
                "function": "__v",
                "vtp_name": "abgroup",
                "vtp_defaultValue": "abtestgrpdefaultvalue",
                "vtp_setDefaultValue": true,
                "vtp_dataLayerVersion": 2
            }, {
                "function": "__v",
                "vtp_name": "variant",
                "vtp_defaultValue": "abtestvariant",
                "vtp_setDefaultValue": true,
                "vtp_dataLayerVersion": 2
            }, {
                "function": "__aev",
                "vtp_varType": "ELEMENT"
            }, {
                "function": "__aev",
                "vtp_varType": "ID"
            }, {
                "function": "__aev",
                "vtp_varType": "TARGET"
            }, {
                "function": "__aev",
                "vtp_varType": "HISTORY_CHANGE_SOURCE"
            }, {
                "function": "__aev",
                "vtp_varType": "HISTORY_NEW_STATE"
            }, {
                "function": "__aev",
                "vtp_varType": "HISTORY_NEW_URL_FRAGMENT"
            }, {
                "function": "__aev",
                "vtp_varType": "HISTORY_OLD_STATE"
            }, {
                "function": "__aev",
                "vtp_varType": "HISTORY_OLD_URL_FRAGMENT"
            }, {
                "function": "__e"
            }, {
                "function": "__e"
            }, {
                "function": "__e"
            }, {
                "function": "__j",
                "vtp_name": "dataLayer.PokedexSearch.Keyword"
            }, {
                "function": "__gas",
                "vtp_cookieDomain": "auto",
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_useDebugVersion": false,
                "vtp_fieldsToSet": ["list", ["map", "fieldName", "page", "value", ["macro", 3]],
                    ["map", "fieldName", "referrer", "value", ["macro", 5]]
                ],
                "vtp_useHashAutoLink": false,
                "vtp_decorateFormsAutoLink": false,
                "vtp_enableLinkId": false,
                "vtp_enableEcommerce": false,
                "vtp_trackingId": "UA-625471-16",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableGA4Schema": true
            }, {
                "function": "__gas",
                "vtp_cookieDomain": "auto",
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_useDebugVersion": false,
                "vtp_fieldsToSet": ["list", ["map", "fieldName", "page", "value", ["macro", 3]],
                    ["map", "fieldName", "referrer", "value", ["macro", 5]]
                ],
                "vtp_useHashAutoLink": false,
                "vtp_decorateFormsAutoLink": false,
                "vtp_enableLinkId": false,
                "vtp_enableEcommerce": false,
                "vtp_trackingId": "UA-1055073-42",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableGA4Schema": true
            }, {
                "function": "__aev",
                "vtp_setDefaultValue": false,
                "vtp_varType": "ATTRIBUTE",
                "vtp_attribute": "alt"
            }, {
                "function": "__gas",
                "vtp_cookieDomain": "auto",
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_useDebugVersion": false,
                "vtp_fieldsToSet": ["list", ["map", "fieldName", "page", "value", ["macro", 3]],
                    ["map", "fieldName", "referrer", "value", ["macro", 5]]
                ],
                "vtp_useHashAutoLink": false,
                "vtp_decorateFormsAutoLink": false,
                "vtp_enableLinkId": false,
                "vtp_enableEcommerce": false,
                "vtp_trackingId": "UA-625471-17",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableGA4Schema": true
            }, {
                "function": "__gas",
                "vtp_cookieDomain": "auto",
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_useDebugVersion": false,
                "vtp_fieldsToSet": ["list", ["map", "fieldName", "page", "value", ["macro", 3]],
                    ["map", "fieldName", "referrer", "value", ["macro", 5]]
                ],
                "vtp_useHashAutoLink": false,
                "vtp_decorateFormsAutoLink": false,
                "vtp_enableLinkId": false,
                "vtp_enableEcommerce": false,
                "vtp_trackingId": "UA-625471-15",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableGA4Schema": true
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=$(\"div.full-article-body\").text();a=a.split(\" \").length;return 3E3\u003Ca?\"3k+\":2500\u003Ca?\"2.5k-3k\":2E3\u003Ca?\"2k-2.5k\":1500\u003Ca?\"1.5k-2k\":1100\u003Ca?\"1.1k-1.5k\":800\u003Ca?\"800-1.1k\":500\u003Ca?\"500-800\":200\u003Ca?\"200-500\":\"\\x3c200\"})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=document.getElementsByClassName(\"full-article-body\").value;return a=a.split(\" \").length})();"]
            }, {
                "function": "__gas",
                "vtp_cookieDomain": "auto",
                "vtp_doubleClick": false,
                "vtp_setTrackerName": false,
                "vtp_useDebugVersion": false,
                "vtp_fieldsToSet": ["list", ["map", "fieldName", "page", "value", ["macro", 3]],
                    ["map", "fieldName", "referrer", "value", ["macro", 5]]
                ],
                "vtp_useHashAutoLink": false,
                "vtp_decorateFormsAutoLink": false,
                "vtp_enableLinkId": false,
                "vtp_enableEcommerce": false,
                "vtp_trackingId": "UA-80051205-2",
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableGA4Schema": true
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=document.location.pathname+document.location.search+document.location.hash;return-1\u003Ca.indexOf(\"\/search\/\")?a.replace(\"#\/results\/\",\"\"):void 0})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return window.location.pathname+window.location.search+window.location.hash})();"]
            }, {
                "function": "__d",
                "vtp_elementSelector": "input#site-search-widget-term",
                "vtp_selectorType": "CSS"
            }, {
                "function": "__d",
                "vtp_elementSelector": "input#site-search-page-term",
                "vtp_selectorType": "CSS"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "gtm.dataset.analyticsLabel"
            }, {
                "function": "__aev",
                "vtp_setDefaultValue": false,
                "vtp_varType": "ATTRIBUTE",
                "vtp_attribute": "data-content-type"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=document.getElementsByTagName(\"video\").length;return 0\u003Ca?!0:!1})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "eventAction"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "eventCategory"
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "eventLabel"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=document.getElementsByTagName(\"meta\");for(i=0;i\u003Ca.length;i++)if(\"pkm-category\"==a[i].getAttribute(\"name\"))return a[i].getAttribute(\"content\")})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var a=", ["escape", ["macro", 3], 8, 16], ";var b=\/^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$\/;a=b.test(a)?a.replace(\/^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$\/,\"phone_removed\"):a;a+=document.location.hash;return-1\u003Ca.indexOf(\"\/search\/\")?a.replace(\"#\/results\/\",\"\"):void 0})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var b=\"firstName lastName firstname lastname nickname address gender p phone e profileurl email pwd fname lname user\".split(\" \"),c=\"email_removed\",d=", ["escape", ["macro", 2], 8, 16], ";var a=", ["escape", ["macro", 65], 8, 16], ";var e=\/^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$\/;a=e.test(a)?a.replace(\/^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$\/,\"phone_removed\"):a;return d(a,b,c)})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){var b=\"firstName lastName firstname lastname nickname address gender p phone e profileurl email pwd fname lname user\".split(\" \"),c=\"email_removed\",d=", ["escape", ["macro", 2], 8, 16], ";var a=", ["escape", ["macro", 66], 8, 16], ";var e=\/^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$\/;a=e.test(a)?a.replace(\/^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$\/,\"phone_removed\"):a;return d(a,b,c)})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "clickType"
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return ", ["escape", ["macro", 24], 8, 16], ".parentElement.className})();"]
            }, {
                "function": "__jsm",
                "vtp_javascript": ["template", "(function(){return function(a,b){for(;!a.matches(b)\u0026\u0026!a.matches(\"body\");)a=a.parentElement;return a.matches(b)?a:void 0}})();"]
            }, {
                "function": "__v",
                "vtp_dataLayerVersion": 2,
                "vtp_setDefaultValue": false,
                "vtp_name": "cat"
            }, {
                "function": "__smm",
                "vtp_setDefaultValue": false,
                "vtp_input": ["macro", 54],
                "vtp_map": ["list", ["map", "key", "home.pokemon.com", "value", "d6bbcacc-8935-4719-a825-f6d8c39216e7"],
                    ["map", "key", "www.pokkentournament.com", "value", "30d078e7-f3d3-461b-b9b6-f73ecd26148c"],
                    ["map", "key", "www.pokemonplayhouse.com", "value", "9c339674-6a15-4263-bf80-a835614b014d"],
                    ["map", "key", "www.pokemongo.com", "value", "8ee92b64-9b5b-419f-913f-d2ee61be5d38"],
                    ["map", "key", "detectivepikachu.pokemon.com", "value", "d6bbcacc-8935-4719-a825-f6d8c39216e7"],
                    ["map", "key", "newpokemonsnap.pokemon.com", "value", "d6bbcacc-8935-4719-a825-f6d8c39216e7"],
                    ["map", "key", "pokemon2020.pokemon.com", "value", "d6bbcacc-8935-4719-a825-f6d8c39216e7"],
                    ["map", "key", "halloween.pokemon.com", "value", "d6bbcacc-8935-4719-a825-f6d8c39216e7"],
                    ["map", "key", "pokemonletsgo.pokemon.com", "value", "d6bbcacc-8935-4719-a825-f6d8c39216e7"],
                    ["map", "key", "mysterydungeon.pokemon.com", "value", "d6bbcacc-8935-4719-a825-f6d8c39216e7"],
                    ["map", "key", "pokemonquest.pokemon.com", "value", "d6bbcacc-8935-4719-a825-f6d8c39216e7"],
                    ["map", "key", "smile.pokemon.com", "value", "d6bbcacc-8935-4719-a825-f6d8c39216e7"],
                    ["map", "key", "cafemix.pokemon.com", "value", "d6bbcacc-8935-4719-a825-f6d8c39216e7"],
                    ["map", "key", "tcg.pokemon.com", "value", "d6bbcacc-8935-4719-a825-f6d8c39216e7"],
                    ["map", "key", "swordshield.pokemon.com", "value", "d6bbcacc-8935-4719-a825-f6d8c39216e7"],
                    ["map", "key", "events.pokemon.com", "value", "d6bbcacc-8935-4719-a825-f6d8c39216e7"],
                    ["map", "key", "support.pokemon.com", "value", "d6bbcacc-8935-4719-a825-f6d8c39216e7"],
                    ["map", "key", "www.pokemon.com", "value", "d6bbcacc-8935-4719-a825-f6d8c39216e7"],
                    ["map", "key", "club.pokemon.com", "value", "d6bbcacc-8935-4719-a825-f6d8c39216e7"],
                    ["map", "key", "sso.pokemon.com", "value", "d6bbcacc-8935-4719-a825-f6d8c39216e7"],
                    ["map", "key", "auth-support.pokemon.com", "value", "d6bbcacc-8935-4719-a825-f6d8c39216e7"],
                    ["map", "key", "support.pokemon.com", "value", "d6bbcacc-8935-4719-a825-f6d8c39216e7"],
                    ["map", "key", "together.pokemon.com", "value", "d6bbcacc-8935-4719-a825-f6d8c39216e7"]
                ]
            }, {
                "function": "__remm",
                "vtp_setDefaultValue": false,
                "vtp_input": ["macro", 37],
                "vtp_fullMatch": false,
                "vtp_replaceAfterMatch": true,
                "vtp_ignoreCase": true,
                "vtp_map": ["list", ["map", "key", ".*es\\-mx.*", "value", "América Latina"],
                    ["map", "key", ".*de\\-de.*", "value", "Deutschland"],
                    ["map", "key", "*es\\-es.*", "value", "España"],
                    ["map", "key", ".*fr\\-fr.*", "value", "France"],
                    ["map", "key", ".*it\\-it.*", "value", "Italia"],
                    ["map", "key", ".*en\\-gb.*", "value", "UK\/Ireland"],
                    ["map", "key", ".*en\\-us.*", "value", "United States"],
                    ["map", "key", ".*pt\\-br.*", "value", "Brasil"]
                ]
            }, {
                "function": "__e"
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementTarget",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.element",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementClasses",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementId",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementTarget",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.elementUrl",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__aev",
                "vtp_varType": "TEXT"
            }, {
                "function": "__v",
                "vtp_name": "gtm.errorMessage",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.errorUrl",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.errorLineNumber",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__dbg"
            }, {
                "function": "__v",
                "vtp_name": "gtm.videoProvider",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.videoUrl",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.videoDuration",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.videoVisible",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.videoCurrentTime",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.scrollUnits",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.scrollDirection",
                "vtp_dataLayerVersion": 1
            }, {
                "function": "__v",
                "vtp_name": "gtm.visibleTime",
                "vtp_dataLayerVersion": 1
            }],
            "tags": [{
                "function": "__ua",
                "metadata": ["map"],
                "setup_tags": ["list", ["tag", 13, 0]],
                "vtp_overrideGaSettings": true,
                "vtp_useDebugVersion": false,
                "vtp_fieldsToSet": ["list", ["map", "fieldName", "cookieDomain", "value", "auto"],
                    ["map", "fieldName", "allowLinker", "value", "false"]
                ],
                "vtp_useHashAutoLink": false,
                "vtp_trackType": "TRACK_PAGEVIEW",
                "vtp_decorateFormsAutoLink": false,
                "vtp_enableLinkId": false,
                "vtp_gaSettings": ["macro", 6],
                "vtp_dimension": ["list", ["map", "index", "1", "dimension", ["macro", 7]],
                    ["map", "index", "2", "dimension", ["macro", 8]],
                    ["map", "index", "4", "dimension", ["macro", 9]],
                    ["map", "index", "5", "dimension", ["macro", 10]],
                    ["map", "index", "7", "dimension", ["macro", 11]],
                    ["map", "index", "8", "dimension", ["macro", 12]],
                    ["map", "index", "10", "dimension", "p.com Pageview Tracking - Live"],
                    ["map", "index", "13", "dimension", ["macro", 13]],
                    ["map", "index", "14", "dimension", ["macro", 14]]
                ],
                "vtp_enableEcommerce": false,
                "vtp_trackingId": ["macro", 16],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 1
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": true,
                "vtp_eventCategory": "gus",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 19],
                "vtp_eventAction": ["macro", 21],
                "vtp_eventLabel": ["macro", 23],
                "vtp_dimension": ["list", ["map", "index", "10", "dimension", "GA event - GUS clicks"]],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 62
            }, {
                "function": "__ua",
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": true,
                "vtp_eventCategory": "Quick Link",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 19],
                "vtp_eventAction": ["macro", 25],
                "vtp_eventLabel": ["macro", 27],
                "vtp_dimension": ["list", ["map", "index", "10", "dimension", "NEW - GA Event - Quick Links - Test"]],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 73
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": true,
                "vtp_eventCategory": "Copy Deck List",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 19],
                "vtp_eventAction": ["macro", 25],
                "vtp_eventLabel": ["macro", 21],
                "vtp_dimension": ["list", ["map", "index", "10", "dimension", "NEW - GA Event - Copy Deck List"]],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 75
            }, {
                "function": "__ua",
                "once_per_event": true,
                "vtp_nonInteraction": true,
                "vtp_overrideGaSettings": true,
                "vtp_eventCategory": "Section Scroll",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 19],
                "vtp_eventAction": ["macro", 25],
                "vtp_eventLabel": ["macro", 28],
                "vtp_dimension": ["list", ["map", "index", "10", "dimension", "NEW - GA Event - Section Visbility"]],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 76
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": true,
                "vtp_eventCategory": "link click",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 19],
                "vtp_eventAction": ["template", "Click Text: ", ["macro", 27]],
                "vtp_eventLabel": ["macro", 23],
                "vtp_dimension": ["list", ["map", "index", "10", "dimension", "GA Event - all links"]],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 77
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": true,
                "vtp_eventCategory": "exit link test",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 19],
                "vtp_eventAction": ["template", ["macro", 23], " ", ["macro", 30]],
                "vtp_eventLabel": ["macro", 27],
                "vtp_dimension": ["list", ["map", "index", "10", "dimension", "ga event - exit link"]],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 78
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": true,
                "vtp_eventCategory": "TCG Slider",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 19],
                "vtp_eventAction": ["macro", 31],
                "vtp_eventLabel": ["template", ["macro", 32], " - ", ["macro", 33]],
                "vtp_dimension": ["list", ["map", "index", "10", "dimension", "GA event - TCG Card Slider"]],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 81
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": true,
                "vtp_eventCategory": "UCG Click",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 19],
                "vtp_eventAction": "grid click",
                "vtp_eventLabel": ["macro", 20],
                "vtp_dimension": ["list", ["map", "index", "10", "dimension", "UCG Clicks"]],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 82
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": true,
                "vtp_eventCategory": ["template", "Tile Click | ", ["macro", 32], " | ", ["macro", 25]],
                "vtp_trackType": "TRACK_EVENT",
                "vtp_metric": ["list", ["map", "index", "1", "metric", "1"]],
                "vtp_gaSettings": ["macro", 19],
                "vtp_eventAction": ["macro", 36],
                "vtp_eventLabel": ["macro", 27],
                "vtp_dimension": ["list", ["map", "index", "10", "dimension", "GA event - Mosaic Tile Click"]],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 86
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": true,
                "vtp_eventCategory": "Homepage Scroll",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 19],
                "vtp_eventAction": ["macro", 38],
                "vtp_eventLabel": ["macro", 39],
                "vtp_dimension": ["list", ["map", "index", "10", "dimension", "GA tag Scroll tracking US Homepage pcom"]],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 88
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": true,
                "vtp_eventCategory": "button click",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 19],
                "vtp_eventAction": ["template", "Click URL: ", ["macro", 23]],
                "vtp_eventLabel": ["macro", 27],
                "vtp_dimension": ["list", ["map", "index", "10", "dimension", "GA - Event - Button Clicks"]],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 90
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": true,
                "vtp_eventCategory": "nav",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 19],
                "vtp_eventAction": "header click",
                "vtp_eventLabel": ["macro", 27],
                "vtp_dimension": ["list", ["map", "index", "10", "dimension", "GA - Event - Header clicks"]],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 91
            }, {
                "function": "__opt",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_optimizeContainerId": "GTM-WKNBXRH",
                "vtp_gaSettings": ["macro", 6],
                "tag_id": 94
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": true,
                "vtp_eventCategory": "search filter",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 6],
                "vtp_eventAction": ["macro", 43],
                "vtp_eventLabel": ["macro", 44],
                "vtp_dimension": ["list", ["map", "index", "10", "dimension", "GA - Event - Search Filter"]],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 95
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": true,
                "vtp_eventCategory": "tcg database",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 6],
                "vtp_eventAction": "submit",
                "vtp_eventLabel": ["macro", 3],
                "vtp_dimension": ["list", ["map", "index", "10", "dimension", "GA - Event - Trading Card Database"]],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 96
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": true,
                "vtp_eventCategory": "button click",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 6],
                "vtp_eventAction": "claim code now",
                "vtp_eventLabel": ["macro", 3],
                "vtp_dimension": ["list", ["map", "index", "10", "dimension", "GA - Event - Claim Now"]],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 99
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": false,
                "vtp_eventCategory": "youtube video",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 19],
                "vtp_eventAction": ["macro", 47],
                "vtp_eventLabel": ["macro", 48],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 166
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": false,
                "vtp_overrideGaSettings": true,
                "vtp_eventCategory": "Lightbox Image Click",
                "vtp_trackType": "TRACK_EVENT",
                "vtp_gaSettings": ["macro", 19],
                "vtp_eventAction": ["macro", 49],
                "vtp_eventLabel": ["macro", 25],
                "vtp_dimension": ["list", ["map", "index", "10", "dimension", "GA event - lightbox tracking"]],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 173
            }, {
                "function": "__ua",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_nonInteraction": true,
                "vtp_overrideGaSettings": true,
                "vtp_eventValue": ["macro", 50],
                "vtp_fieldsToSet": ["list", ["map", "fieldName", "cookieDomain", "value", "auto"]],
                "vtp_eventCategory": ["macro", 51],
                "vtp_trackType": "TRACK_EVENT",
                "vtp_eventAction": ["macro", 52],
                "vtp_eventLabel": ["macro", 53],
                "vtp_trackingId": ["macro", 19],
                "vtp_enableRecaptchaOption": false,
                "vtp_enableUaRlsa": false,
                "vtp_enableUseInternalVersion": false,
                "vtp_enableFirebaseCampaignData": true,
                "vtp_trackTypeIsEvent": true,
                "vtp_enableGA4Schema": true,
                "tag_id": 191
            }, {
                "function": "__paused",
                "vtp_originalTagType": "html",
                "tag_id": 197
            }, {
                "function": "__paused",
                "vtp_originalTagType": "html",
                "tag_id": 200
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "setup_tags": ["list", ["tag", 85, 0]],
                "once_per_event": true,
                "vtp_eventSettingsTable": ["list", ["map", "parameter", "gtm_tag_name", "parameterValue", "GA4 - GUS clicks"],
                    ["map", "parameter", "event_type", "parameterValue", "gus"],
                    ["map", "parameter", "page_url", "parameterValue", ["macro", 21]],
                    ["map", "parameter", "click_url", "parameterValue", ["macro", 23]]
                ],
                "vtp_eventName": "gus_click",
                "vtp_measurementIdOverride": "G-0HYF2R3MBH",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": true,
                "vtp_demoV2": false,
                "tag_id": 235
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "setup_tags": ["list", ["tag", 85, 0]],
                "once_per_event": true,
                "vtp_eventSettingsTable": ["list", ["map", "parameter", "gtm_tag_name", "parameterValue", "GA4 - Copy Deck List"],
                    ["map", "parameter", "event_type", "parameterValue", "Copy Deck List"],
                    ["map", "parameter", "page_title", "parameterValue", ["macro", 25]],
                    ["map", "parameter", "page_url", "parameterValue", ["macro", 21]]
                ],
                "vtp_eventName": "copy_deck_list",
                "vtp_measurementIdOverride": "G-0HYF2R3MBH",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": true,
                "vtp_demoV2": false,
                "tag_id": 236
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "setup_tags": ["list", ["tag", 85, 0]],
                "once_per_event": true,
                "vtp_eventSettingsTable": ["list", ["map", "parameter", "gtm_tag_name", "parameterValue", "GA4 - All Links"],
                    ["map", "parameter", "event_type", "parameterValue", "link click"],
                    ["map", "parameter", "click_text", "parameterValue", ["template", "Click Text: ", ["macro", 27]]],
                    ["map", "parameter", "click_url", "parameterValue", ["macro", 23]]
                ],
                "vtp_eventName": "all_link",
                "vtp_measurementIdOverride": "G-0HYF2R3MBH",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": true,
                "vtp_demoV2": false,
                "tag_id": 237
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "setup_tags": ["list", ["tag", 85, 0]],
                "once_per_event": true,
                "vtp_eventSettingsTable": ["list", ["map", "parameter", "gtm_tag_name", "parameterValue", "GA4 - Exit Link"],
                    ["map", "parameter", "event_type", "parameterValue", "exit link test"],
                    ["map", "parameter", "event_location", "parameterValue", ["template", ["macro", 23], " ", ["macro", 30]]],
                    ["map", "parameter", "click_text", "parameterValue", ["macro", 27]]
                ],
                "vtp_eventName": "exit_link",
                "vtp_measurementIdOverride": "G-0HYF2R3MBH",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": true,
                "vtp_demoV2": false,
                "tag_id": 238
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "setup_tags": ["list", ["tag", 85, 0]],
                "once_per_event": true,
                "vtp_eventSettingsTable": ["list", ["map", "parameter", "gtm_tag_name", "parameterValue", "GA4 - TCG Card Slider"],
                    ["map", "parameter", "event_type", "parameterValue", "TCG Slider"],
                    ["map", "parameter", "parent_data_analytics_label", "parameterValue", ["macro", 31]],
                    ["map", "parameter", "event_location", "parameterValue", ["template", ["macro", 32], " - ", ["macro", 33]]]
                ],
                "vtp_eventName": "tcg_card_slider",
                "vtp_measurementIdOverride": "G-0HYF2R3MBH",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": true,
                "vtp_demoV2": false,
                "tag_id": 239
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "setup_tags": ["list", ["tag", 85, 0]],
                "once_per_event": true,
                "vtp_eventSettingsTable": ["list", ["map", "parameter", "gtm_tag_name", "parameterValue", "GA4 - UCG Clicks"],
                    ["map", "parameter", "event_type", "parameterValue", "UCG Click"],
                    ["map", "parameter", "event_location", "parameterValue", "grid click"],
                    ["map", "parameter", "page_url", "parameterValue", ["macro", 20]]
                ],
                "vtp_eventName": "ucg_click",
                "vtp_measurementIdOverride": "G-0HYF2R3MBH",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": true,
                "vtp_demoV2": false,
                "tag_id": 240
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "setup_tags": ["list", ["tag", 85, 0]],
                "once_per_event": true,
                "vtp_eventSettingsTable": ["list", ["map", "parameter", "tile_clicks", "parameterValue", "1"],
                    ["map", "parameter", "gtm_tag_name", "parameterValue", "GA4 - Mosaic Tile Click"],
                    ["map", "parameter", "event_type", "parameterValue", ["template", "Tile Click | ", ["macro", 32], " | ", ["macro", 25]]],
                    ["map", "parameter", "parent_data_tile_position", "parameterValue", ["macro", 36]],
                    ["map", "parameter", "click_text", "parameterValue", ["macro", 27]]
                ],
                "vtp_eventName": "mosaic_tile_click",
                "vtp_measurementIdOverride": "G-0HYF2R3MBH",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": true,
                "vtp_demoV2": false,
                "tag_id": 241
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "setup_tags": ["list", ["tag", 85, 0]],
                "once_per_event": true,
                "vtp_eventSettingsTable": ["list", ["map", "parameter", "gtm_tag_name", "parameterValue", "GA4 - Scroll tracking US Homepage pcom"],
                    ["map", "parameter", "event_type", "parameterValue", "Homepage Scroll"],
                    ["map", "parameter", "scroll_depth_threshold", "parameterValue", ["macro", 38]],
                    ["map", "parameter", "percent_visible", "parameterValue", ["macro", 39]]
                ],
                "vtp_eventName": "scroll",
                "vtp_measurementIdOverride": "G-0HYF2R3MBH",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": true,
                "vtp_demoV2": false,
                "tag_id": 242
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "setup_tags": ["list", ["tag", 85, 0]],
                "once_per_event": true,
                "vtp_eventSettingsTable": ["list", ["map", "parameter", "gtm_tag_name", "parameterValue", "GA4 - Button Clicks"],
                    ["map", "parameter", "event_type", "parameterValue", "button click"],
                    ["map", "parameter", "click_url", "parameterValue", ["template", "Click URL: ", ["macro", 23]]],
                    ["map", "parameter", "click_url", "parameterValue", ["macro", 27]]
                ],
                "vtp_eventName": "button_click",
                "vtp_measurementIdOverride": "G-0HYF2R3MBH",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": true,
                "vtp_demoV2": false,
                "tag_id": 243
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "setup_tags": ["list", ["tag", 85, 0]],
                "once_per_event": true,
                "vtp_eventSettingsTable": ["list", ["map", "parameter", "gtm_tag_name", "parameterValue", "GA4 - Header clicks"],
                    ["map", "parameter", "event_type", "parameterValue", "nav"],
                    ["map", "parameter", "event_location", "parameterValue", "header click"],
                    ["map", "parameter", "click_text", "parameterValue", ["macro", 27]]
                ],
                "vtp_eventName": "header_click",
                "vtp_measurementIdOverride": "G-0HYF2R3MBH",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": true,
                "vtp_demoV2": false,
                "tag_id": 244
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "setup_tags": ["list", ["tag", 85, 0]],
                "once_per_event": true,
                "vtp_eventSettingsTable": ["list", ["map", "parameter", "gtm_tag_name", "parameterValue", "GA4 - Search Filter"],
                    ["map", "parameter", "event_type", "parameterValue", "search filter"],
                    ["map", "parameter", "filter_selected", "parameterValue", ["macro", 43]],
                    ["map", "parameter", "window_location_hash", "parameterValue", ["macro", 44]]
                ],
                "vtp_eventName": "search",
                "vtp_measurementIdOverride": "G-0HYF2R3MBH",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": true,
                "vtp_demoV2": false,
                "tag_id": 245
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "setup_tags": ["list", ["tag", 85, 0]],
                "once_per_event": true,
                "vtp_eventSettingsTable": ["list", ["map", "parameter", "gtm_tag_name", "parameterValue", "GA4 - Trading Card Database"],
                    ["map", "parameter", "event_type", "parameterValue", "tcg database"],
                    ["map", "parameter", "event_location", "parameterValue", "submit"],
                    ["map", "parameter", "page_path", "parameterValue", ["macro", 3]]
                ],
                "vtp_eventName": "trading_card_database",
                "vtp_measurementIdOverride": "G-0HYF2R3MBH",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": true,
                "vtp_demoV2": false,
                "tag_id": 246
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "setup_tags": ["list", ["tag", 85, 0]],
                "once_per_event": true,
                "vtp_eventSettingsTable": ["list", ["map", "parameter", "gtm_tag_name", "parameterValue", "GA4 - Claim Now"],
                    ["map", "parameter", "event_type", "parameterValue", "button click"],
                    ["map", "parameter", "event_location", "parameterValue", "claim code now"],
                    ["map", "parameter", "page_path", "parameterValue", ["macro", 3]]
                ],
                "vtp_eventName": "claim_now",
                "vtp_measurementIdOverride": "G-0HYF2R3MBH",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": true,
                "vtp_demoV2": false,
                "tag_id": 247
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "setup_tags": ["list", ["tag", 85, 0]],
                "once_per_event": true,
                "vtp_eventSettingsTable": ["list", ["map", "parameter", "event_location", "parameterValue", "youtube video"],
                    ["map", "parameter", "event_type", "parameterValue", ["macro", 47]],
                    ["map", "parameter", "video_title", "parameterValue", ["macro", 48]]
                ],
                "vtp_eventName": "youtube_video_play",
                "vtp_measurementIdOverride": "G-0HYF2R3MBH",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": true,
                "vtp_demoV2": false,
                "tag_id": 248
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "setup_tags": ["list", ["tag", 85, 0]],
                "once_per_event": true,
                "vtp_eventSettingsTable": ["list", ["map", "parameter", "gtm_tag_name", "parameterValue", "GA4 - lightbox tracking"],
                    ["map", "parameter", "event_location", "parameterValue", "Lightbox Image Click"],
                    ["map", "parameter", "event_type", "parameterValue", ["macro", 49]],
                    ["map", "parameter", "page_title", "parameterValue", ["macro", 25]]
                ],
                "vtp_eventName": "lightbox_tracking_quiz",
                "vtp_measurementIdOverride": "G-0HYF2R3MBH",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": true,
                "vtp_demoV2": false,
                "tag_id": 249
            }, {
                "function": "__gaawe",
                "metadata": ["map"],
                "setup_tags": ["list", ["tag", 85, 0]],
                "vtp_sendEcommerceData": false,
                "vtp_eventSettingsTable": ["list", ["map", "parameter", "total_sections_on_page", "parameterValue", ["macro", 9]],
                    ["map", "parameter", "word_count", "parameterValue", ["macro", 10]],
                    ["map", "parameter", "pkm_modified_date", "parameterValue", ["macro", 11]],
                    ["map", "parameter", "page_language", "parameterValue", ["macro", 12]],
                    ["map", "parameter", "gtm_tag_name", "parameterValue", "GA4 - Page View"],
                    ["map", "parameter", "date_published", "parameterValue", ["macro", 13]],
                    ["map", "parameter", "published_date", "parameterValue", ["macro", 14]]
                ],
                "vtp_userProperties": ["list", ["map", "name", "login_type", "value", ["macro", 7]],
                    ["map", "name", "login_state", "value", ["macro", 8]]
                ],
                "vtp_eventName": "page_view",
                "vtp_measurementIdOverride": "G-0HYF2R3MBH",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": true,
                "vtp_demoV2": false,
                "tag_id": 250
            }, {
                "function": "__gaawe",
                "setup_tags": ["list", ["tag", 85, 0]],
                "once_per_event": true,
                "vtp_eventSettingsTable": ["list", ["map", "parameter", "gtm_tag_name", "parameterValue", "GA4 - Quick Links Test"],
                    ["map", "parameter", "event_type", "parameterValue", "Quick Link"],
                    ["map", "parameter", "page_title", "parameterValue", ["macro", 25]],
                    ["map", "parameter", "click_text", "parameterValue", ["macro", 27]]
                ],
                "vtp_eventName": "quick_links_test",
                "vtp_measurementIdOverride": "G-0HYF2R3MBH",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": true,
                "vtp_demoV2": false,
                "tag_id": 251
            }, {
                "function": "__gaawe",
                "setup_tags": ["list", ["tag", 85, 0]],
                "once_per_event": true,
                "vtp_eventSettingsTable": ["list", ["map", "parameter", "gtm_tag_name", "parameterValue", "GA4 - Section Visbility"],
                    ["map", "parameter", "event_type", "parameterValue", "Section Scroll"],
                    ["map", "parameter", "page_title", "parameterValue", ["macro", 25]],
                    ["map", "parameter", "element_text", "parameterValue", ["macro", 28]]
                ],
                "vtp_eventName": "section_visbility",
                "vtp_measurementIdOverride": "G-0HYF2R3MBH",
                "vtp_enableUserProperties": true,
                "vtp_enableMoreSettingsOption": true,
                "vtp_enableEuid": false,
                "vtp_migratedToV2": true,
                "vtp_demoV2": false,
                "tag_id": 252
            }, {
                "function": "__cl",
                "tag_id": 253
            }, {
                "function": "__lcl",
                "vtp_waitForTags": false,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "2000",
                "vtp_uniqueTriggerId": "159551_52",
                "tag_id": 254
            }, {
                "function": "__lcl",
                "vtp_waitForTags": false,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "2000",
                "vtp_uniqueTriggerId": "159551_60",
                "tag_id": 255
            }, {
                "function": "__lcl",
                "vtp_waitForTags": false,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "2000",
                "vtp_uniqueTriggerId": "159551_62",
                "tag_id": 256
            }, {
                "function": "__lcl",
                "vtp_waitForTags": false,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "2000",
                "vtp_uniqueTriggerId": "159551_68",
                "tag_id": 257
            }, {
                "function": "__lcl",
                "vtp_waitForTags": false,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "2000",
                "vtp_uniqueTriggerId": "159551_71",
                "tag_id": 258
            }, {
                "function": "__lcl",
                "vtp_waitForTags": false,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "2000",
                "vtp_uniqueTriggerId": "159551_77",
                "tag_id": 259
            }, {
                "function": "__lcl",
                "vtp_waitForTags": false,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "2000",
                "vtp_uniqueTriggerId": "159551_79",
                "tag_id": 260
            }, {
                "function": "__lcl",
                "vtp_waitForTags": false,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "2000",
                "vtp_uniqueTriggerId": "159551_81",
                "tag_id": 261
            }, {
                "function": "__evl",
                "vtp_useOnScreenDuration": true,
                "vtp_useDomChangeListener": false,
                "vtp_elementSelector": "h2,h3,#footer,h1",
                "vtp_firingFrequency": "MANY_PER_ELEMENT",
                "vtp_selectorType": "CSS",
                "vtp_onScreenRatio": "25",
                "vtp_onScreenDuration": "3000",
                "vtp_uniqueTriggerId": "159551_82",
                "tag_id": 262
            }, {
                "function": "__evl",
                "vtp_useOnScreenDuration": true,
                "vtp_useDomChangeListener": false,
                "vtp_elementSelector": "h2,h3,h1",
                "vtp_firingFrequency": "MANY_PER_ELEMENT",
                "vtp_selectorType": "CSS",
                "vtp_onScreenRatio": "25",
                "vtp_onScreenDuration": "3000",
                "vtp_uniqueTriggerId": "159551_85",
                "tag_id": 263
            }, {
                "function": "__lcl",
                "vtp_waitForTags": false,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "2000",
                "vtp_uniqueTriggerId": "159551_88",
                "tag_id": 264
            }, {
                "function": "__lcl",
                "vtp_waitForTags": false,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "2000",
                "vtp_uniqueTriggerId": "159551_91",
                "tag_id": 265
            }, {
                "function": "__lcl",
                "vtp_waitForTags": false,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "2000",
                "vtp_uniqueTriggerId": "159551_111",
                "tag_id": 266
            }, {
                "function": "__lcl",
                "vtp_waitForTags": false,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "2000",
                "vtp_uniqueTriggerId": "159551_113",
                "tag_id": 267
            }, {
                "function": "__lcl",
                "vtp_waitForTags": false,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "2000",
                "vtp_uniqueTriggerId": "159551_115",
                "tag_id": 268
            }, {
                "function": "__lcl",
                "vtp_waitForTags": false,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "2000",
                "vtp_uniqueTriggerId": "159551_118",
                "tag_id": 269
            }, {
                "function": "__lcl",
                "vtp_waitForTags": false,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "2000",
                "vtp_uniqueTriggerId": "159551_120",
                "tag_id": 270
            }, {
                "function": "__sdl",
                "vtp_verticalThresholdUnits": "PERCENT",
                "vtp_verticalThresholdsPercent": "25,50,75,100",
                "vtp_verticalThresholdOn": true,
                "vtp_triggerStartOption": "WINDOW_LOAD",
                "vtp_horizontalThresholdOn": false,
                "vtp_uniqueTriggerId": "159551_128",
                "vtp_enableTriggerStartOption": true,
                "tag_id": 271
            }, {
                "function": "__evl",
                "vtp_useOnScreenDuration": false,
                "vtp_useDomChangeListener": true,
                "vtp_elementSelector": "#pokemon-character-slider,.mosaic.section,#homepage-video-slider",
                "vtp_firingFrequency": "ONCE_PER_ELEMENT",
                "vtp_selectorType": "CSS",
                "vtp_onScreenRatio": "50",
                "vtp_uniqueTriggerId": "159551_129",
                "tag_id": 272
            }, {
                "function": "__cl",
                "tag_id": 273
            }, {
                "function": "__lcl",
                "vtp_waitForTags": false,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "2000",
                "vtp_uniqueTriggerId": "159551_135",
                "tag_id": 274
            }, {
                "function": "__cl",
                "tag_id": 275
            }, {
                "function": "__lcl",
                "vtp_waitForTags": false,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "2000",
                "vtp_uniqueTriggerId": "159551_153",
                "tag_id": 276
            }, {
                "function": "__cl",
                "tag_id": 277
            }, {
                "function": "__cl",
                "tag_id": 278
            }, {
                "function": "__lcl",
                "vtp_waitForTags": false,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "2000",
                "vtp_uniqueTriggerId": "159551_161",
                "tag_id": 279
            }, {
                "function": "__lcl",
                "vtp_waitForTags": false,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "2000",
                "vtp_uniqueTriggerId": "159551_162",
                "tag_id": 280
            }, {
                "function": "__ytl",
                "vtp_progressThresholdsPercent": "25,50,100",
                "vtp_captureComplete": true,
                "vtp_captureStart": true,
                "vtp_fixMissingApi": true,
                "vtp_triggerStartOption": "DOM_READY",
                "vtp_radioButtonGroup1": "PERCENTAGE",
                "vtp_capturePause": false,
                "vtp_captureProgress": true,
                "vtp_uniqueTriggerId": "159551_165",
                "vtp_enableTriggerStartOption": true,
                "tag_id": 281
            }, {
                "function": "__cl",
                "tag_id": 282
            }, {
                "function": "__cl",
                "tag_id": 283
            }, {
                "function": "__lcl",
                "vtp_waitForTags": false,
                "vtp_checkValidation": false,
                "vtp_waitForTagsTimeout": "2000",
                "vtp_uniqueTriggerId": "159551_175",
                "tag_id": 284
            }, {
                "function": "__tg",
                "vtp_triggerIds": ["list", "159551_195_186", "159551_195_194"],
                "vtp_uniqueTriggerId": "159551_195",
                "tag_id": 285
            }, {
                "function": "__tg",
                "vtp_isListeningTag": true,
                "vtp_firingId": "159551_195_186",
                "tag_id": 286
            }, {
                "function": "__tg",
                "vtp_isListeningTag": true,
                "vtp_firingId": "159551_195_194",
                "tag_id": 288
            }, {
                "function": "__tl",
                "vtp_eventName": "gtm.timer",
                "vtp_interval": "5000",
                "vtp_limit": "1",
                "vtp_uniqueTriggerId": "159551_196",
                "tag_id": 289
            }, {
                "function": "__tl",
                "vtp_eventName": "gtm.timer",
                "vtp_interval": "5000",
                "vtp_limit": "1",
                "vtp_uniqueTriggerId": "159551_199",
                "tag_id": 290
            }, {
                "function": "__tl",
                "vtp_eventName": "gtm.timer",
                "vtp_interval": "5000",
                "vtp_limit": "1",
                "vtp_uniqueTriggerId": "159551_201",
                "tag_id": 291
            }, {
                "function": "__tg",
                "vtp_triggerIds": ["list", "159551_212_215", "159551_212_186"],
                "vtp_uniqueTriggerId": "159551_212",
                "tag_id": 292
            }, {
                "function": "__tg",
                "vtp_isListeningTag": true,
                "vtp_firingId": "159551_212_215",
                "tag_id": 293
            }, {
                "function": "__tg",
                "vtp_isListeningTag": true,
                "vtp_firingId": "159551_212_186",
                "tag_id": 295
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Evar uqsp=window.location.search;\nif(-1\u003Cuqsp.indexOf(\"country_name\")\u0026\u0026-1\u003Cuqsp.indexOf(\"country_code\")){var getParams=function(a){var c={},b=document.createElement(\"a\");b.href=a;a=b.search.substring(1);a=a.split(\"\\x26\");for(b=0;b\u003Ca.length;b++){var d=a[b].split(\"\\x3d\");c[d[0]]=decodeURIComponent(d[1])}return c},obj=getParams(uqsp),country_name=obj.country_name,country_code=obj.country_code;document.querySelector(\"input[name\\x3d'country']\").value=country_code;document.querySelector(\"li[data-option-value\\x3d'\"+country_code+\"']\").className+=\n\"selected\";document.querySelector(\"input[name\\x3d'country']\").closest(\".custom-select-menu\").querySelector(\"label[class*\\x3d'styled-select button-black']\").innerText=country_name};\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 181
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript src=\"https:\/\/cdn.cookielaw.org\/scripttemplates\/otSDKStub.js\" type=\"text\/javascript\" charset=\"UTF-8\" data-domain-script=\"d6bbcacc-8935-4719-a825-f6d8c39216e7\"\u003E\u003C\/script\u003E\n\n\u003Cscript type=\"text\/javascript\"\u003Ewindow.dataLayer=window.dataLayer||[];\nfunction OptanonWrapper(){window.dataLayer.push({event:\"OneTrustGroupsUpdated\"});console.log(\"OptanonWrapper called\");var a=document.getElementById(\"onetrust-accept-btn-handler\"),b=document.getElementsByClassName(\"onetrust-close-btn-handler onetrust-close-btn-ui banner-close-button onetrust-lg ot-close-icon\")[0],c=document.getElementById(\"accept-recommended-btn-handler\"),d=document.getElementsByClassName(\"save-preference-btn-handler onetrust-close-btn-handler\")[0];a\u0026\u0026a.addEventListener(\"click\",function(){console.log(\"Allowed all via Banner\")});\nb\u0026\u0026b.addEventListener(\"click\",function(){console.log(\"Allowed all via Banner\")});c\u0026\u0026c.addEventListener(\"click\",function(){console.log(\"Allowed all via Preference Center\")});d.addEventListener(\"click\",function(){console.log(\"Set custom settings via Preference Center\")})};\u003C\/script\u003E",
                "vtp_supportDocumentWrite": true,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "vtp_usePostscribe": true,
                "tag_id": 184
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var l=function(e,g,f,h){this.get=function(a){a+=\"\\x3d\";for(var b=document.cookie.split(\";\"),c=0,k=b.length;c\u003Ck;c++){for(var d=b[c];\" \"==d.charAt(0);)d=d.substring(1,d.length);if(0==d.indexOf(a))return d.substring(a.length,d.length)}return null};this.set=function(a,b){var c=new Date;c.setTime(c.getTime()+6048E5);c=\"; expires\\x3d\"+c.toGMTString();document.cookie=a+\"\\x3d\"+b+c+\"; path\\x3d\/; \"};this.check=function(){var a=this.get(f);if(a)a=a.split(\":\");else if(100!=e)\"v\"==g\u0026\u0026(e=Math.random()\u003E=\ne\/100?0:100),a=[g,e,0],this.set(f,a.join(\":\"));else return!0;var b=a[1];if(100==b)return!0;switch(a[0]){case \"v\":return!1;case \"r\":return b=a[2]%Math.floor(100\/b),a[2]++,this.set(f,a.join(\":\")),!b}return!0};this.go=function(){if(this.check()){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.src=h;document.body\u0026\u0026document.body.appendChild(a)}};this.start=function(){var a=this;\"complete\"!==document.readyState?window.addEventListener?window.addEventListener(\"load\",function(){a.go()},\n!1):window.attachEvent\u0026\u0026window.attachEvent(\"onload\",function(){a.go()}):a.go()}};try{(new l(100,\"r\",\"QSI_S_ZN_2uC4P98aKZSTHsG\",\"https:\/\/zn2uc4p98akzsthsg-pokemonintl.siteintercept.qualtrics.com\/SIE\/?Q_ZID\\x3dZN_2uC4P98aKZSTHsG\")).start()}catch(e){}})();\u003C\/script\u003E\u003Cdiv id=\"ZN_2uC4P98aKZSTHsG\"\u003E\u003C\/div\u003E\n",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 208
            }, {
                "function": "__html",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,c){if(void 0===c[b]){c[b]=function(){c[b].clients.push(this);this._init=[Array.prototype.slice.call(arguments)]};c[b].clients=[];for(var a=function(e){return function(){return this[\"_\"+e]=this[\"_\"+e]||[],this[\"_\"+e].push(Array.prototype.slice.call(arguments)),this}},d=\"blockEvents unblockEvents setSignedMode setAnonymousMode fetchUserSegments resetUUID fetchServerCookie addRecord fetchGlobalID set trackEvent trackPageview trackClicks ready\".split(\" \"),f=0;f\u003Cd.length;f++){var g=d[f];c[b].prototype[g]=\na(g)}a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=(\"https:\"===document.location.protocol?\"https:\":\"http:\")+\"\/\/cdn.treasuredata.com\/sdk\/3.1.0\/td.min.js\";d=document.getElementsByTagName(\"script\")[0];d.parentNode.insertBefore(a,d)}}(\"Treasure\",this);var td=new Treasure({database:\"src_pcom_webtracking\",useNewJavaScriptEndpoint:!0,host:\"eu01.records.in.treasuredata.com\",writeKey:\"183\/e79cce03dcf5ca68530238fd2f99831c8a529727\"}),tbl=\"pageviews\";td.setSignedMode();\ntd.set(\"$global\",\"td_global_id\",\"td_global_id\");td.trackPageview(tbl);\u003C\/script\u003E",
                "vtp_supportDocumentWrite": false,
                "vtp_enableIframeMode": false,
                "vtp_enableEditJsMacroBehavior": false,
                "tag_id": 209
            }, {
                "function": "__googtag",
                "metadata": ["map"],
                "once_per_event": true,
                "vtp_tagId": "G-0HYF2R3MBH",
                "vtp_configSettingsTable": ["list", ["map", "parameter", "page", "parameterValue", ["macro", 3]],
                    ["map", "parameter", "referrer", "parameterValue", ["macro", 5]],
                    ["map", "parameter", "send_page_view", "parameterValue", "false"]
                ],
                "tag_id": 203
            }],
            "predicates": [{
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.triggerGroup"
            }, {
                "function": "_re",
                "arg0": ["macro", 1],
                "arg1": "(^$|((^|,)159551_195($|,)))"
            }, {
                "function": "_cn",
                "arg0": ["macro", 17],
                "arg1": "gus-"
            }, {
                "function": "_cn",
                "arg0": ["macro", 18],
                "arg1": "C0002"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.linkClick"
            }, {
                "function": "_re",
                "arg0": ["macro", 1],
                "arg1": "(^$|((^|,)159551_62($|,)))"
            }, {
                "function": "_re",
                "arg0": ["macro", 0],
                "arg1": "OneTrustGroupsUpdated"
            }, {
                "function": "_css",
                "arg0": ["macro", 24],
                "arg1": "div.quicklink ul li a"
            }, {
                "function": "_re",
                "arg0": ["macro", 1],
                "arg1": "(^$|((^|,)159551_77($|,)))"
            }, {
                "function": "_cn",
                "arg0": ["macro", 17],
                "arg1": "copy-deck"
            }, {
                "function": "_re",
                "arg0": ["macro", 1],
                "arg1": "(^$|((^|,)159551_81($|,)))"
            }, {
                "function": "_cn",
                "arg0": ["macro", 20],
                "arg1": "strategy"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.elementVisibility"
            }, {
                "function": "_re",
                "arg0": ["macro", 1],
                "arg1": "(^$|((^|,)159551_82($|,)))"
            }, {
                "function": "_cn",
                "arg0": ["macro", 20],
                "arg1": "pokemon-news"
            }, {
                "function": "_re",
                "arg0": ["macro", 1],
                "arg1": "(^$|((^|,)159551_85($|,)))"
            }, {
                "function": "_re",
                "arg0": ["macro", 1],
                "arg1": "(^$|((^|,)159551_88($|,)))"
            }, {
                "function": "_css",
                "arg0": ["macro", 24],
                "arg1": "a.exit-link"
            }, {
                "function": "_re",
                "arg0": ["macro", 1],
                "arg1": "(^$|((^|,)159551_91($|,)))"
            }, {
                "function": "_css",
                "arg0": ["macro", 24],
                "arg1": "section#trading-card-slider li.highlight.loaded \u003E a"
            }, {
                "function": "_re",
                "arg0": ["macro", 1],
                "arg1": "(^$|((^|,)159551_113($|,)))"
            }, {
                "function": "_cn",
                "arg0": ["macro", 34],
                "arg1": "itemLink ugc-link"
            }, {
                "function": "_re",
                "arg0": ["macro", 1],
                "arg1": "(^$|((^|,)159551_115($|,)))"
            }, {
                "function": "_cn",
                "arg0": ["macro", 35],
                "arg1": "Mosaic"
            }, {
                "function": "_re",
                "arg0": ["macro", 1],
                "arg1": "(^$|((^|,)159551_120($|,)))"
            }, {
                "function": "_eq",
                "arg0": ["macro", 37],
                "arg1": "\/us\/"
            }, {
                "function": "_gt",
                "arg0": ["macro", 38],
                "arg1": "24"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.scrollDepth"
            }, {
                "function": "_re",
                "arg0": ["macro", 1],
                "arg1": "(^$|((^|,)159551_128($|,)))"
            }, {
                "function": "_cn",
                "arg0": ["macro", 17],
                "arg1": "button button"
            }, {
                "function": "_cn",
                "arg0": ["macro", 17],
                "arg1": "close"
            }, {
                "function": "_eq",
                "arg0": ["macro", 17],
                "arg1": "button button-lightblue right verify-code"
            }, {
                "function": "_eq",
                "arg0": ["macro", 17],
                "arg1": "button button-lightblue"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.click"
            }, {
                "function": "_cn",
                "arg0": ["macro", 40],
                "arg1": "simpleSubmit"
            }, {
                "function": "_cn",
                "arg0": ["macro", 41],
                "arg1": "Sidebar"
            }, {
                "function": "_re",
                "arg0": ["macro", 1],
                "arg1": "(^$|((^|,)159551_135($|,)))"
            }, {
                "function": "_cn",
                "arg0": ["macro", 17],
                "arg1": "category-tags"
            }, {
                "function": "_re",
                "arg0": ["macro", 1],
                "arg1": "(^$|((^|,)159551_153($|,)))"
            }, {
                "function": "_eq",
                "arg0": ["macro", 40],
                "arg1": "redeem-code"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.video"
            }, {
                "function": "_re",
                "arg0": ["macro", 1],
                "arg1": "(^$|((^|,)159551_165($|,)))"
            }, {
                "function": "_eq",
                "arg0": ["macro", 17],
                "arg1": "lightbox-image--image"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "trackOptanonEvent"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.timer"
            }, {
                "function": "_re",
                "arg0": ["macro", 1],
                "arg1": "(^$|((^|,)159551_196($|,)))"
            }, {
                "function": "_re",
                "arg0": ["macro", 1],
                "arg1": "(^$|((^|,)159551_199($|,)))"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.js"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.load"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "gtm.dom"
            }, {
                "function": "_cn",
                "arg0": ["macro", 37],
                "arg1": "\/us\/pokedex"
            }, {
                "function": "_eq",
                "arg0": ["macro", 54],
                "arg1": "www.pokemon.com"
            }, {
                "function": "_cn",
                "arg0": ["macro", 37],
                "arg1": "\/us\/pokemon-tcg\/"
            }, {
                "function": "_cn",
                "arg0": ["macro", 37],
                "arg1": "\/us\/pokemon-news\/scout-nessa-drednaw-and-bea-sirfetchd-in-pokemon-masters-ex\/"
            }, {
                "function": "_eq",
                "arg0": ["macro", 0],
                "arg1": "mosaic-click"
            }, {
                "function": "_cn",
                "arg0": ["macro", 20],
                "arg1": "\/pokemon-trainer-club\/sign-up\/"
            }, {
                "function": "_cn",
                "arg0": ["macro", 20],
                "arg1": "country_name="
            }, {
                "function": "_cn",
                "arg0": ["macro", 20],
                "arg1": "country_code="
            }],
            "rules": [
                [
                    ["if", 0, 1],
                    ["add", 0, 37, 83, 84]
                ],
                [
                    ["if", 2, 3, 4, 5],
                    ["add", 1, 22]
                ],
                [
                    ["if", 3, 4, 7, 8],
                    ["add", 2, 38]
                ],
                [
                    ["if", 3, 4, 9, 10],
                    ["add", 3, 23]
                ],
                [
                    ["if", 3, 11, 12, 13],
                    ["add", 4, 39]
                ],
                [
                    ["if", 3, 12, 14, 15],
                    ["add", 4, 39]
                ],
                [
                    ["if", 3, 4, 16],
                    ["add", 5, 24]
                ],
                [
                    ["if", 3, 4, 17, 18],
                    ["add", 6, 25]
                ],
                [
                    ["if", 3, 4, 19, 20],
                    ["add", 7, 26]
                ],
                [
                    ["if", 3, 4, 21, 22],
                    ["add", 8, 27]
                ],
                [
                    ["if", 3, 4, 23, 24],
                    ["add", 9, 28]
                ],
                [
                    ["if", 3, 25, 26, 27, 28],
                    ["add", 10, 29]
                ],
                [
                    ["if", 3, 29, 33],
                    ["unless", 30, 31, 32],
                    ["add", 11, 30]
                ],
                [
                    ["if", 3, 4, 35, 36],
                    ["add", 12, 31]
                ],
                [
                    ["if", 3, 6],
                    ["add", 13, 73, 80]
                ],
                [
                    ["if", 3, 4, 37, 38],
                    ["add", 14, 32]
                ],
                [
                    ["if", 3, 33, 34],
                    ["add", 15, 33],
                    ["block", 11, 30]
                ],
                [
                    ["if", 3, 32, 33, 39],
                    ["add", 16, 34]
                ],
                [
                    ["if", 3, 40, 41],
                    ["add", 17, 35]
                ],
                [
                    ["if", 3, 33, 42],
                    ["add", 18, 36]
                ],
                [
                    ["if", 3, 43],
                    ["add", 19]
                ],
                [
                    ["if", 44, 45],
                    ["add", 20]
                ],
                [
                    ["if", 44, 46],
                    ["add", 21]
                ],
                [
                    ["if", 47],
                    ["add", 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 59, 60, 61, 62, 63, 64, 65, 66, 67, 69, 70, 71, 72, 78, 82]
                ],
                [
                    ["if", 48],
                    ["add", 58, 74]
                ],
                [
                    ["if", 49],
                    ["add", 68]
                ],
                [
                    ["if", 47, 50, 51],
                    ["add", 75]
                ],
                [
                    ["if", 47, 51, 52],
                    ["add", 76]
                ],
                [
                    ["if", 47, 51, 53],
                    ["add", 77]
                ],
                [
                    ["if", 54],
                    ["add", 79]
                ],
                [
                    ["if", 48, 55, 56, 57],
                    ["add", 81]
                ],
                [
                    ["if", 6],
                    ["unless", 3],
                    ["block", 1, 3, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 81]
                ]
            ]
        },
        "runtime": [
            [50, "__googtag", [46, "a"],
                [50, "m", [46, "v", "w"],
                    [66, "x", [2, [15, "b"], "keys", [7, [15, "w"]]],
                        [46, [43, [15, "v"],
                            [15, "x"],
                            [16, [15, "w"],
                                [15, "x"]
                            ]
                        ]]
                    ]
                ],
                [50, "n", [46],
                    [36, [7, [17, [17, [15, "e"], "SCHEMA"], "EP_SERVER_CONTAINER_URL"],
                        [17, [17, [15, "e"], "SCHEMA"], "EP_TRANSPORT_URL"]
                    ]]
                ],
                [50, "o", [46, "v"],
                    [52, "w", ["n"]],
                    [65, "x", [15, "w"],
                        [46, [53, [52, "y", [16, [15, "v"],
                                [15, "x"]
                            ]],
                            [22, [15, "y"],
                                [46, [36, [15, "y"]]]
                            ]
                        ]]
                    ],
                    [36, [44]]
                ],
                [52, "b", ["require", "Object"]],
                [52, "c", ["require", "createArgumentsQueue"]],
                [52, "d", [13, [41, "$0"],
                    [3, "$0", ["require", "internal.getFlags"]],
                    ["$0"]
                ]],
                [52, "e", [15, "__module_gtag"]],
                [52, "f", ["require", "internal.gtagConfig"]],
                [52, "g", ["require", "getType"]],
                [52, "h", ["require", "internal.loadGoogleTag"]],
                [52, "i", ["require", "logToConsole"]],
                [52, "j", ["require", "makeNumber"]],
                [52, "k", ["require", "makeString"]],
                [52, "l", ["require", "makeTableMap"]],
                [52, "p", [30, [17, [15, "a"], "tagId"], ""]],
                [22, [30, [21, ["g", [15, "p"]], "string"],
                        [24, [2, [15, "p"], "indexOf", [7, "-"]], 0]
                    ],
                    [46, ["i", [0, "Invalid Measurement ID for the GA4 Configuration tag: ", [15, "p"]]],
                        [2, [15, "a"], "gtmOnFailure", [7]],
                        [36]
                    ]
                ],
                [52, "q", [30, [17, [15, "a"], "configSettingsVariable"],
                    [8]
                ]],
                [52, "r", [30, ["l", [30, [17, [15, "a"], "configSettingsTable"],
                        [7]
                    ], "parameter", "parameterValue"],
                    [8]
                ]],
                ["m", [15, "q"],
                    [15, "r"]
                ],
                [52, "s", [30, [17, [15, "a"], "eventSettingsVariable"],
                    [8]
                ]],
                [52, "t", [30, ["l", [30, [17, [15, "a"], "eventSettingsTable"],
                        [7]
                    ], "parameter", "parameterValue"],
                    [8]
                ]],
                ["m", [15, "s"],
                    [15, "t"]
                ],
                [52, "u", [15, "q"]],
                ["m", [15, "u"],
                    [15, "s"]
                ],
                [22, [30, [2, [15, "u"], "hasOwnProperty", [7, [17, [17, [15, "e"], "SCHEMA"], "EP_USER_PROPERTIES"]]],
                        [17, [15, "a"], "userProperties"]
                    ],
                    [46, [53, [52, "v", [30, [16, [15, "u"],
                                [17, [17, [15, "e"], "SCHEMA"], "EP_USER_PROPERTIES"]
                            ],
                            [8]
                        ]],
                        ["m", [15, "v"],
                            [30, ["l", [30, [17, [15, "a"], "userProperties"],
                                    [7]
                                ], "name", "value"],
                                [8]
                            ]
                        ],
                        [43, [15, "u"],
                            [17, [17, [15, "e"], "SCHEMA"], "EP_USER_PROPERTIES"],
                            [15, "v"]
                        ]
                    ]]
                ],
                [2, [15, "e"], "convertParameters", [7, [15, "u"],
                    [17, [15, "e"], "GOLD_BOOLEAN_FIELDS"],
                    [51, "", [7, "v"],
                        [36, [39, [20, "false", [2, ["k", [15, "v"]], "toLowerCase", [7]]], false, [28, [28, [15, "v"]]]]]
                    ]
                ]],
                [2, [15, "e"], "convertParameters", [7, [15, "u"],
                    [17, [15, "e"], "GOLD_NUMERIC_FIELDS"],
                    [51, "", [7, "v"],
                        [36, ["j", [15, "v"]]]
                    ]
                ]],
                [22, [16, [15, "d"], "enableDirectTagLoadingInGoogleTag"],
                    [46, [22, [16, [15, "d"], "enableLoadGoogleTagOptionsObject"],
                        [46, ["h", [15, "p"],
                            [8, "firstPartyUrl", ["o", [15, "u"]]]
                        ]],
                        [46, ["h", [15, "p"],
                            ["o", [15, "u"]]
                        ]]
                    ]]
                ],
                ["f", [15, "p"],
                    [15, "u"],
                    [8, "noTargetGroup", true]
                ],
                [2, [15, "a"], "gtmOnSuccess", [7]]
            ],
            [50, "__paused", [46, "a"],
                [2, [15, "a"], "gtmOnFailure", [7]]
            ],
            [52, "__module_gtag", [13, [41, "$0"],
                [3, "$0", [51, "", [7],
                    [50, "a", [46],
                        [50, "f", [46, "g", "h", "i"],
                            [65, "j", [15, "h"],
                                [46, [22, [2, [15, "g"], "hasOwnProperty", [7, [15, "j"]]],
                                    [46, [43, [15, "g"],
                                        [15, "j"],
                                        ["i", [16, [15, "g"],
                                            [15, "j"]
                                        ]]
                                    ]]
                                ]]
                            ]
                        ],
                        [52, "b", ["require", "Object"]],
                        [52, "c", [2, [15, "b"], "freeze", [7, [8, "EP_SERVER_CONTAINER_URL", "server_container_url", "EP_TRANSPORT_URL", "transport_url", "EP_USER_PROPERTIES", "user_properties"]]]],
                        [52, "d", [2, [15, "b"], "freeze", [7, [7, "allow_ad_personalization_signals", "allow_google_signals", "cookie_update", "update", "first_party_collection", "send_page_view"]]]],
                        [52, "e", [2, [15, "b"], "freeze", [7, [7, "cookie_expires", "event_timeout", "session_duration", "session_engaged_time", "engagement_time_msec"]]]],
                        [36, [8, "SCHEMA", [15, "c"], "GOLD_BOOLEAN_FIELDS", [15, "d"], "GOLD_NUMERIC_FIELDS", [15, "e"], "convertParameters", [15, "f"]]]
                    ],
                    [36, ["a"]]
                ]],
                ["$0"]
            ]]

        ],
        "entities": {
            "__googtag": {
                "1": 10
            }


        },
        "permissions": {
            "__googtag": {
                "logging": {
                    "environments": "debug"
                },
                "access_globals": {
                    "keys": [{
                        "key": "gtag",
                        "read": true,
                        "write": true,
                        "execute": true
                    }, {
                        "key": "dataLayer",
                        "read": true,
                        "write": true,
                        "execute": false
                    }]
                },
                "configure_google_tags": {
                    "allowedTagIds": "any"
                },
                "load_google_tags": {
                    "allowedTagIds": "any",
                    "allowFirstPartyUrls": true,
                    "allowedFirstPartyUrls": "any"
                }
            },
            "__paused": {}


        }



        ,
        "security_groups": {
            "google": [
                "__googtag"

            ]


        }



    };

    (function() {
        /*

         Copyright The Closure Library Authors.
         SPDX-License-Identifier: Apache-2.0
        */
        var C = this || self,
            D = function(n, v) {
                var w = n.split("."),
                    q = C;
                w[0] in q || "undefined" == typeof q.execScript || q.execScript("var " + w[0]);
                for (var t; w.length && (t = w.shift());) w.length || void 0 === v ? q = q[t] && q[t] !== Object.prototype[t] ? q[t] : q[t] = {} : q[t] = v
            };
        /*
         Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
        var E, F = function() {};
        (function() {
            function n(h, m) {
                h = h || "";
                m = m || {};
                for (var y in v) v.hasOwnProperty(y) && (m.N && (m["fix_" + y] = !0), m.G = m.G || m["fix_" + y]);
                var z = {
                        comment: /^\x3c!--/,
                        endTag: /^<\//,
                        atomicTag: /^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,
                        startTag: /^</,
                        chars: /^[^<]/
                    },
                    e = {
                        comment: function() {
                            var a = h.indexOf("--\x3e");
                            if (0 <= a) return {
                                content: h.substr(4, a),
                                length: a + 3
                            }
                        },
                        endTag: function() {
                            var a = h.match(q);
                            if (a) return {
                                tagName: a[1],
                                length: a[0].length
                            }
                        },
                        atomicTag: function() {
                            var a = e.startTag();
                            if (a) {
                                var b = h.slice(a.length);
                                if (b.match(new RegExp("</\\s*" + a.tagName + "\\s*>", "i"))) {
                                    var c = b.match(new RegExp("([\\s\\S]*?)</\\s*" + a.tagName + "\\s*>", "i"));
                                    if (c) return {
                                        tagName: a.tagName,
                                        g: a.g,
                                        content: c[1],
                                        length: c[0].length + a.length
                                    }
                                }
                            }
                        },
                        startTag: function() {
                            var a = h.match(w);
                            if (a) {
                                var b = {};
                                a[2].replace(t, function(c, d, k, g, r) {
                                    var u = k || g || r || B.test(d) && d || null,
                                        l = document.createElement("div");
                                    l.innerHTML = u;
                                    b[d] = l.textContent || l.innerText || u
                                });
                                return {
                                    tagName: a[1],
                                    g: b,
                                    s: !!a[3],
                                    length: a[0].length
                                }
                            }
                        },
                        chars: function() {
                            var a = h.indexOf("<");
                            return {
                                length: 0 <= a ? a : h.length
                            }
                        }
                    },
                    f = function() {
                        for (var a in z)
                            if (z[a].test(h)) {
                                var b = e[a]();
                                return b ? (b.type = b.type || a, b.text = h.substr(0, b.length), h = h.slice(b.length), b) : null
                            }
                    };
                m.G && function() {
                    var a = /^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,
                        b = /^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i,
                        c = [];
                    c.H = function() {
                        return this[this.length - 1]
                    };
                    c.v = function(l) {
                        var p = this.H();
                        return p && p.tagName && p.tagName.toUpperCase() === l.toUpperCase()
                    };
                    c.V = function(l) {
                        for (var p =
                                0, x; x = this[p]; p++)
                            if (x.tagName === l) return !0;
                        return !1
                    };
                    var d = function(l) {
                            l && "startTag" === l.type && (l.s = a.test(l.tagName) || l.s);
                            return l
                        },
                        k = f,
                        g = function() {
                            h = "</" + c.pop().tagName + ">" + h
                        },
                        r = {
                            startTag: function(l) {
                                var p = l.tagName;
                                "TR" === p.toUpperCase() && c.v("TABLE") ? (h = "<TBODY>" + h, u()) : m.oa && b.test(p) && c.V(p) ? c.v(p) ? g() : (h = "</" + l.tagName + ">" + h, u()) : l.s || c.push(l)
                            },
                            endTag: function(l) {
                                c.H() ? m.W && !c.v(l.tagName) ? g() : c.pop() : m.W && (k(), u())
                            }
                        },
                        u = function() {
                            var l = h,
                                p = d(k());
                            h = l;
                            if (p && r[p.type]) r[p.type](p)
                        };
                    f = function() {
                        u();
                        return d(k())
                    }
                }();
                return {
                    append: function(a) {
                        h += a
                    },
                    ea: f,
                    sa: function(a) {
                        for (var b;
                            (b = f()) && (!a[b.type] || !1 !== a[b.type](b)););
                    },
                    clear: function() {
                        var a = h;
                        h = "";
                        return a
                    },
                    ta: function() {
                        return h
                    },
                    stack: []
                }
            }
            var v = function() {
                    var h = {},
                        m = this.document.createElement("div");
                    m.innerHTML = "<P><I></P></I>";
                    h.va = "<P><I></P></I>" !== m.innerHTML;
                    m.innerHTML = "<P><i><P></P></i></P>";
                    h.ua = 2 === m.childNodes.length;
                    return h
                }(),
                w = /^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
                q = /^<\/([\-A-Za-z0-9_]+)[^>]*>/,
                t = /([\-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,
                B = /^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i;
            n.supports = v;
            for (var A in v);
            E = n
        })();
        (function() {
            function n() {}

            function v(e) {
                return void 0 !== e && null !== e
            }

            function w(e, f, a) {
                var b, c = e && e.length || 0;
                for (b = 0; b < c; b++) f.call(a, e[b], b)
            }

            function q(e, f, a) {
                for (var b in e) e.hasOwnProperty(b) && f.call(a, b, e[b])
            }

            function t(e, f) {
                q(f, function(a, b) {
                    e[a] = b
                });
                return e
            }

            function B(e, f) {
                e = e || {};
                q(f, function(a, b) {
                    v(e[a]) || (e[a] = b)
                });
                return e
            }

            function A(e) {
                try {
                    return y.call(e)
                } catch (a) {
                    var f = [];
                    w(e, function(b) {
                        f.push(b)
                    });
                    return f
                }
            }
            var h = {
                    J: n,
                    K: n,
                    L: n,
                    M: n,
                    O: n,
                    P: function(e) {
                        return e
                    },
                    done: n,
                    error: function(e) {
                        throw e;
                    },
                    fa: !1
                },
                m = this;
            if (!m.postscribe) {
                var y = Array.prototype.slice,
                    z = function() {
                        function e(a, b, c) {
                            var d = "data-ps-" + b;
                            if (2 === arguments.length) {
                                var k = a.getAttribute(d);
                                return v(k) ? String(k) : k
                            }
                            v(c) && "" !== c ? a.setAttribute(d, c) : a.removeAttribute(d)
                        }

                        function f(a, b) {
                            var c = a.ownerDocument;
                            t(this, {
                                root: a,
                                options: b,
                                l: c.defaultView || c.parentWindow,
                                i: c,
                                o: E("", {
                                    N: !0
                                }),
                                u: [a],
                                B: "",
                                C: c.createElement(a.nodeName),
                                j: [],
                                h: []
                            });
                            e(this.C, "proxyof", 0)
                        }
                        f.prototype.write = function() {
                            [].push.apply(this.h, arguments);
                            for (var a; !this.m &&
                                this.h.length;) a = this.h.shift(), "function" === typeof a ? this.U(a) : this.D(a)
                        };
                        f.prototype.U = function(a) {
                            var b = {
                                type: "function",
                                value: a.name || a.toString()
                            };
                            this.A(b);
                            a.call(this.l, this.i);
                            this.I(b)
                        };
                        f.prototype.D = function(a) {
                            this.o.append(a);
                            for (var b, c = [], d, k;
                                (b = this.o.ea()) && !(d = b && "tagName" in b ? !!~b.tagName.toLowerCase().indexOf("script") : !1) && !(k = b && "tagName" in b ? !!~b.tagName.toLowerCase().indexOf("style") : !1);) c.push(b);
                            this.ka(c);
                            d && this.X(b);
                            k && this.Y(b)
                        };
                        f.prototype.ka = function(a) {
                            var b = this.R(a);
                            b.F && (b.Z = this.B + b.F, this.B += b.proxy, this.C.innerHTML = b.Z, this.ia())
                        };
                        f.prototype.R = function(a) {
                            var b = this.u.length,
                                c = [],
                                d = [],
                                k = [];
                            w(a, function(g) {
                                c.push(g.text);
                                if (g.g) {
                                    if (!/^noscript$/i.test(g.tagName)) {
                                        var r = b++;
                                        d.push(g.text.replace(/(\/?>)/, " data-ps-id=" + r + " $1"));
                                        "ps-script" !== g.g.id && "ps-style" !== g.g.id && k.push("atomicTag" === g.type ? "" : "<" + g.tagName + " data-ps-proxyof=" + r + (g.s ? " />" : ">"))
                                    }
                                } else d.push(g.text), k.push("endTag" === g.type ? g.text : "")
                            });
                            return {
                                wa: a,
                                raw: c.join(""),
                                F: d.join(""),
                                proxy: k.join("")
                            }
                        };
                        f.prototype.ia = function() {
                            for (var a, b = [this.C]; v(a = b.shift());) {
                                var c = 1 === a.nodeType;
                                if (!c || !e(a, "proxyof")) {
                                    c && (this.u[e(a, "id")] = a, e(a, "id", null));
                                    var d = a.parentNode && e(a.parentNode, "proxyof");
                                    d && this.u[d].appendChild(a)
                                }
                                b.unshift.apply(b, A(a.childNodes))
                            }
                        };
                        f.prototype.X = function(a) {
                            var b = this.o.clear();
                            b && this.h.unshift(b);
                            a.src = a.g.src || a.g.ma;
                            a.src && this.j.length ? this.m = a : this.A(a);
                            var c = this;
                            this.ja(a, function() {
                                c.I(a)
                            })
                        };
                        f.prototype.Y = function(a) {
                            var b = this.o.clear();
                            b && this.h.unshift(b);
                            a.type =
                                a.g.type || a.g.TYPE || "text/css";
                            this.la(a);
                            b && this.write()
                        };
                        f.prototype.la = function(a) {
                            var b = this.T(a);
                            this.ba(b);
                            a.content && (b.styleSheet && !b.sheet ? b.styleSheet.cssText = a.content : b.appendChild(this.i.createTextNode(a.content)))
                        };
                        f.prototype.T = function(a) {
                            var b = this.i.createElement(a.tagName);
                            b.setAttribute("type", a.type);
                            q(a.g, function(c, d) {
                                b.setAttribute(c, d)
                            });
                            return b
                        };
                        f.prototype.ba = function(a) {
                            this.D('<span id="ps-style"/>');
                            var b = this.i.getElementById("ps-style");
                            b.parentNode.replaceChild(a,
                                b)
                        };
                        f.prototype.A = function(a) {
                            a.ca = this.h;
                            this.h = [];
                            this.j.unshift(a)
                        };
                        f.prototype.I = function(a) {
                            a !== this.j[0] ? this.options.error({
                                message: "Bad script nesting or script finished twice"
                            }) : (this.j.shift(), this.write.apply(this, a.ca), !this.j.length && this.m && (this.A(this.m), this.m = null))
                        };
                        f.prototype.ja = function(a, b) {
                            var c = this.S(a),
                                d = this.ha(c),
                                k = this.options.J;
                            a.src && (c.src = a.src, this.ga(c, d ? k : function() {
                                b();
                                k()
                            }));
                            try {
                                this.aa(c), a.src && !d || b()
                            } catch (g) {
                                this.options.error(g), b()
                            }
                        };
                        f.prototype.S = function(a) {
                            var b =
                                this.i.createElement(a.tagName);
                            q(a.g, function(c, d) {
                                b.setAttribute(c, d)
                            });
                            a.content && (b.text = a.content);
                            return b
                        };
                        f.prototype.aa = function(a) {
                            this.D('<span id="ps-script"/>');
                            var b = this.i.getElementById("ps-script");
                            b.parentNode.replaceChild(a, b)
                        };
                        f.prototype.ga = function(a, b) {
                            function c() {
                                a = a.onload = a.onreadystatechange = a.onerror = null
                            }
                            var d = this.options.error;
                            t(a, {
                                onload: function() {
                                    c();
                                    b()
                                },
                                onreadystatechange: function() {
                                    /^(loaded|complete)$/.test(a.readyState) && (c(), b())
                                },
                                onerror: function() {
                                    var k = {
                                        message: "remote script failed " + a.src
                                    };
                                    c();
                                    d(k);
                                    b()
                                }
                            })
                        };
                        f.prototype.ha = function(a) {
                            return !/^script$/i.test(a.nodeName) || !!(this.options.fa && a.src && a.hasAttribute("async"))
                        };
                        return f
                    }();
                m.postscribe = function() {
                    function e() {
                        var d = b.shift(),
                            k;
                        d && (k = d[d.length - 1], k.K(), d.stream = f.apply(null, d), k.L())
                    }

                    function f(d, k, g) {
                        function r(x) {
                            x = g.P(x);
                            c.write(x);
                            g.M(x)
                        }
                        c = new z(d, g);
                        c.id = a++;
                        c.name = g.name || c.id;
                        var u = d.ownerDocument,
                            l = {
                                close: u.close,
                                open: u.open,
                                write: u.write,
                                writeln: u.writeln
                            };
                        t(u, {
                            close: n,
                            open: n,
                            write: function() {
                                return r(A(arguments).join(""))
                            },
                            writeln: function() {
                                return r(A(arguments).join("") + "\n")
                            }
                        });
                        var p = c.l.onerror || n;
                        c.l.onerror = function(x, G, H) {
                            g.error({
                                qa: x + " - " + G + ":" + H
                            });
                            p.apply(c.l, arguments)
                        };
                        c.write(k, function() {
                            t(u, l);
                            c.l.onerror = p;
                            g.done();
                            c = null;
                            e()
                        });
                        return c
                    }
                    var a = 0,
                        b = [],
                        c = null;
                    return t(function(d, k, g) {
                        "function" === typeof g && (g = {
                            done: g
                        });
                        g = B(g, h);
                        d = /^#/.test(d) ? m.document.getElementById(d.substr(1)) : d.pa ? d[0] : d;
                        var r = [d, k, g];
                        d.da = {
                            cancel: function() {
                                r.stream ? r.stream.abort() :
                                    r[1] = n
                            }
                        };
                        g.O(r);
                        b.push(r);
                        c || e();
                        return d.da
                    }, {
                        streams: {},
                        ra: b,
                        na: z
                    })
                }();
                F = m.postscribe
            }
        })();
        D("google_tag_manager_external.postscribe.installPostscribe", function() {
            var n = window.google_tag_manager;
            n && (n.postscribe || (n.postscribe = window.postscribe || F))
        });
        D("google_tag_manager_external.postscribe.getPostscribe", function() {
            return window.google_tag_manager.postscribe
        });
    }).call(this);
    var aa, ba = function(a) {
            var b = 0;
            return function() {
                return b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                }
            }
        },
        ca = function(a) {
            return a.raw = a
        },
        da = function(a, b) {
            a.raw = b;
            return a
        },
        fa = function(a) {
            var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
            if (b) return b.call(a);
            if ("number" == typeof a.length) return {
                next: ba(a)
            };
            throw Error(String(a) + " is not an iterable or ArrayLike");
        },
        ha = function(a) {
            for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
            return c
        },
        ja = function(a) {
            return a instanceof Array ? a :
                ha(fa(a))
        },
        ka = "function" == typeof Object.create ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        ma;
    if ("function" == typeof Object.setPrototypeOf) ma = Object.setPrototypeOf;
    else {
        var na;
        a: {
            var oa = {
                    a: !0
                },
                qa = {};
            try {
                qa.__proto__ = oa;
                na = qa.a;
                break a
            } catch (a) {}
            na = !1
        }
        ma = na ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var ra = ma,
        sa = function(a, b) {
            a.prototype = ka(b.prototype);
            a.prototype.constructor = a;
            if (ra) ra(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else a[c] = b[c];
            a.Zn = b.prototype
        },
        ta = function() {
            for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
            return b
        };
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var ua = this || self,
        va = function(a) {
            return a
        };
    var wa = function(a, b) {
        this.h = a;
        this.s = b
    };
    var xa = function() {
        this.h = {};
        this.C = {}
    };
    aa = xa.prototype;
    aa.get = function(a) {
        return this.h["dust." + a]
    };
    aa.set = function(a, b) {
        a = "dust." + a;
        this.C.hasOwnProperty(a) || (this.h[a] = b)
    };
    aa.Uh = function(a, b) {
        this.set(a, b);
        this.C["dust." + a] = !0
    };
    aa.has = function(a) {
        return this.h.hasOwnProperty("dust." + a)
    };
    aa.remove = function(a) {
        a = "dust." + a;
        this.C.hasOwnProperty(a) || delete this.h[a]
    };
    var ya = function() {
        this.quota = {}
    };
    ya.prototype.reset = function() {
        this.quota = {}
    };
    var za = function(a, b) {
        this.X = a;
        this.M = function(c, d, e) {
            return c.apply(d, e)
        };
        this.C = b;
        this.s = new xa;
        this.h = this.F = void 0
    };
    za.prototype.add = function(a, b) {
        Aa(this, a, b, !1)
    };
    var Aa = function(a, b, c, d) {
        d ? a.s.Uh(b, c) : a.s.set(b, c)
    };
    za.prototype.set = function(a, b) {
        !this.s.has(a) && this.C && this.C.has(a) ? this.C.set(a, b) : this.s.set(a, b)
    };
    za.prototype.get = function(a) {
        return this.s.has(a) ? this.s.get(a) : this.C ? this.C.get(a) : void 0
    };
    za.prototype.has = function(a) {
        return !!this.s.has(a) || !(!this.C || !this.C.has(a))
    };
    var Ba = function(a) {
        var b = new za(a.X, a);
        a.F && (b.F = a.F);
        b.M = a.M;
        b.h = a.h;
        return b
    };
    var Ca = function() {},
        Fa = function(a) {
            return "function" === typeof a
        },
        k = function(a) {
            return "string" === typeof a
        },
        Ga = function(a) {
            return "number" === typeof a && !isNaN(a)
        },
        Ha = Array.isArray,
        Ia = function(a, b) {
            if (a && Ha(a))
                for (var c = 0; c < a.length; c++)
                    if (a[c] && b(a[c])) return a[c]
        },
        Ja = function(a, b) {
            if (!Ga(a) || !Ga(b) || a > b) a = 0, b = 2147483647;
            return Math.floor(Math.random() * (b - a + 1) + a)
        },
        La = function(a, b) {
            for (var c = new Ka, d = 0; d < a.length; d++) c.set(a[d], !0);
            for (var e = 0; e < b.length; e++)
                if (c.get(b[e])) return !0;
            return !1
        },
        l = function(a,
            b) {
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
        },
        Ma = function(a) {
            return !!a && ("[object Arguments]" === Object.prototype.toString.call(a) || Object.prototype.hasOwnProperty.call(a, "callee"))
        },
        Na = function(a) {
            return Math.round(Number(a)) || 0
        },
        Oa = function(a) {
            return "false" === String(a).toLowerCase() ? !1 : !!a
        },
        Pa = function(a) {
            var b = [];
            if (Ha(a))
                for (var c = 0; c < a.length; c++) b.push(String(a[c]));
            return b
        },
        Qa = function(a) {
            return a ? a.replace(/^\s+|\s+$/g, "") : ""
        },
        Sa = function() {
            return new Date(Date.now())
        },
        Ta = function() {
            return Sa().getTime()
        },
        Ka = function() {
            this.prefix = "gtm.";
            this.values = {}
        };
    Ka.prototype.set = function(a, b) {
        this.values[this.prefix + a] = b
    };
    Ka.prototype.get = function(a) {
        return this.values[this.prefix + a]
    };
    var Ua = function(a, b, c) {
            return a && a.hasOwnProperty(b) ? a[b] : c
        },
        Va = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = void 0;
                    try {
                        c()
                    } catch (d) {}
                }
            }
        },
        Wa = function(a, b) {
            for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
        },
        Xa = function(a, b) {
            for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []);
            return c
        },
        Ya = function(a, b) {
            return a.substring(0, b.length) === b
        },
        Za = function(a, b) {
            var c = z;
            b = b || [];
            for (var d = c, e = 0; e < a.length - 1; e++) {
                if (!d.hasOwnProperty(a[e])) return;
                d = d[a[e]];
                if (0 <= b.indexOf(d)) return
            }
            return d
        },
        $a = function(a, b) {
            for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++) d = d[e[f]] = {};
            d[e[e.length - 1]] = b;
            return c
        },
        ab = /^\w{1,9}$/,
        bb = function(a, b) {
            a = a || {};
            b = b || ",";
            var c = [];
            l(a, function(d, e) {
                ab.test(d) && e && c.push(d)
            });
            return c.join(b)
        },
        cb = function(a, b) {
            function c() {
                ++d === b && (e(), e = null, c.done = !0)
            }
            var d = 0,
                e = a;
            c.done = !1;
            return c
        };

    function db(a, b) {
        for (var c, d = 0; d < b.length && !(c = eb(a, b[d]), c instanceof wa); d++);
        return c
    }

    function eb(a, b) {
        try {
            var c = a.get(String(b[0]));
            if (!c || "function" !== typeof c.invoke) throw Error("Attempting to execute non-function " + b[0] + ".");
            return c.invoke.apply(c, [a].concat(b.slice(1)))
        } catch (e) {
            var d = a.F;
            d && d(e, b.context ? {
                id: b[0],
                line: b.context.line
            } : null);
            throw e;
        }
    };
    var fb = function() {
        this.C = new ya;
        this.h = new za(this.C)
    };
    fb.prototype.execute = function(a, b) {
        var c = Array.prototype.slice.call(arguments, 0);
        return this.s(c)
    };
    fb.prototype.s = function(a) {
        for (var b, c = 0; c < arguments.length; c++) b = eb(this.h, arguments[c]);
        return b
    };
    fb.prototype.F = function(a, b) {
        var c = Ba(this.h);
        c.h = a;
        for (var d, e = 1; e < arguments.length; e++) d = eb(c, arguments[e]);
        return d
    };
    var gb = function() {
        xa.call(this);
        this.s = !1
    };
    sa(gb, xa);
    var hb = function(a, b) {
        var c = [],
            d;
        for (d in a.h)
            if (a.h.hasOwnProperty(d)) switch (d = d.substr(5), b) {
                case 1:
                    c.push(d);
                    break;
                case 2:
                    c.push(a.get(d));
                    break;
                case 3:
                    c.push([d, a.get(d)])
            }
        return c
    };
    aa = gb.prototype;
    aa.set = function(a, b) {
        this.s || xa.prototype.set.call(this, a, b)
    };
    aa.Uh = function(a, b) {
        this.s || xa.prototype.Uh.call(this, a, b)
    };
    aa.remove = function(a) {
        this.s || xa.prototype.remove.call(this, a)
    };
    aa.Eb = function() {
        this.s = !0
    };
    aa.Hj = function() {
        return this.s
    };
    /*
     jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
    var ib = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,
        jb = function(a) {
            if (null == a) return String(a);
            var b = ib.exec(Object.prototype.toString.call(Object(a)));
            return b ? b[1].toLowerCase() : "object"
        },
        kb = function(a, b) {
            return Object.prototype.hasOwnProperty.call(Object(a), b)
        },
        lb = function(a) {
            if (!a || "object" != jb(a) || a.nodeType || a == a.window) return !1;
            try {
                if (a.constructor && !kb(a, "constructor") && !kb(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (c) {
                return !1
            }
            for (var b in a);
            return void 0 ===
                b || kb(a, b)
        },
        nb = function(a, b) {
            var c = b || ("array" == jb(a) ? [] : {}),
                d;
            for (d in a)
                if (kb(a, d)) {
                    var e = a[d];
                    "array" == jb(e) ? ("array" != jb(c[d]) && (c[d] = []), c[d] = nb(e, c[d])) : lb(e) ? (lb(c[d]) || (c[d] = {}), c[d] = nb(e, c[d])) : c[d] = e
                }
            return c
        };
    var ob = function(a) {
            for (var b = [], c = 0; c < a.length(); c++) a.has(c) && (b[c] = a.get(c));
            return b
        },
        pb = function(a) {
            if (void 0 == a || Ha(a) || lb(a)) return !0;
            switch (typeof a) {
                case "boolean":
                case "number":
                case "string":
                case "function":
                    return !0
            }
            return !1
        },
        qb = function(a) {
            return "number" === typeof a && 0 <= a && isFinite(a) && 0 === a % 1 || "string" === typeof a && "-" !== a[0] && a === "" + parseInt(a, 10)
        };
    var rb = function(a) {
        this.s = new gb;
        this.h = [];
        this.C = !1;
        a = a || [];
        for (var b in a) a.hasOwnProperty(b) && (qb(b) ? this.h[Number(b)] = a[Number(b)] : this.s.set(b, a[b]))
    };
    aa = rb.prototype;
    aa.toString = function(a) {
        if (a && 0 <= a.indexOf(this)) return "";
        for (var b = [], c = 0; c < this.h.length; c++) {
            var d = this.h[c];
            null === d || void 0 === d ? b.push("") : d instanceof rb ? (a = a || [], a.push(this), b.push(d.toString(a)), a.pop()) : b.push(String(d))
        }
        return b.join(",")
    };
    aa.set = function(a, b) {
        if (!this.C)
            if ("length" === a) {
                if (!qb(b)) throw Error("RangeError: Length property must be a valid integer.");
                this.h.length = Number(b)
            } else qb(a) ? this.h[Number(a)] = b : this.s.set(a, b)
    };
    aa.get = function(a) {
        return "length" === a ? this.length() : qb(a) ? this.h[Number(a)] : this.s.get(a)
    };
    aa.length = function() {
        return this.h.length
    };
    aa.Tb = function() {
        for (var a = hb(this.s, 1), b = 0; b < this.h.length; b++) a.push(b + "");
        return new rb(a)
    };
    aa.remove = function(a) {
        qb(a) ? delete this.h[Number(a)] : this.s.remove(a)
    };
    aa.pop = function() {
        return this.h.pop()
    };
    aa.push = function(a) {
        return this.h.push.apply(this.h, Array.prototype.slice.call(arguments))
    };
    aa.shift = function() {
        return this.h.shift()
    };
    aa.splice = function(a, b, c) {
        return new rb(this.h.splice.apply(this.h, arguments))
    };
    aa.unshift = function(a) {
        return this.h.unshift.apply(this.h, Array.prototype.slice.call(arguments))
    };
    aa.has = function(a) {
        return qb(a) && this.h.hasOwnProperty(a) || this.s.has(a)
    };
    aa.Eb = function() {
        this.C = !0;
        Object.freeze(this.h);
        this.s.Eb()
    };
    aa.Hj = function() {
        return this.C
    };
    var sb = function() {
        gb.call(this)
    };
    sa(sb, gb);
    sb.prototype.Tb = function() {
        return new rb(hb(this, 1))
    };

    function tb() {
        for (var a = ub, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
        return b
    }

    function vb() {
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        a += a.toLowerCase() + "0123456789-_";
        return a + "."
    }
    var ub, wb;

    function xb(a) {
        ub = ub || vb();
        wb = wb || tb();
        for (var b = [], c = 0; c < a.length; c += 3) {
            var d = c + 1 < a.length,
                e = c + 2 < a.length,
                f = a.charCodeAt(c),
                g = d ? a.charCodeAt(c + 1) : 0,
                h = e ? a.charCodeAt(c + 2) : 0,
                m = f >> 2,
                n = (f & 3) << 4 | g >> 4,
                p = (g & 15) << 2 | h >> 6,
                q = h & 63;
            e || (q = 64, d || (p = 64));
            b.push(ub[m], ub[n], ub[p], ub[q])
        }
        return b.join("")
    }

    function yb(a) {
        function b(m) {
            for (; d < a.length;) {
                var n = a.charAt(d++),
                    p = wb[n];
                if (null != p) return p;
                if (!/^[\s\xa0]*$/.test(n)) throw Error("Unknown base64 encoding at char: " + n);
            }
            return m
        }
        ub = ub || vb();
        wb = wb || tb();
        for (var c = "", d = 0;;) {
            var e = b(-1),
                f = b(0),
                g = b(64),
                h = b(64);
            if (64 === h && -1 === e) return c;
            c += String.fromCharCode(e << 2 | f >> 4);
            64 != g && (c += String.fromCharCode(f << 4 & 240 | g >> 2), 64 != h && (c += String.fromCharCode(g << 6 & 192 | h)))
        }
    };
    var zb = {},
        Ab = function(a, b) {
            zb[a] = zb[a] || [];
            zb[a][b] = !0
        },
        Bb = function() {
            delete zb.GA4_EVENT
        },
        Cb = function(a) {
            var b = zb[a];
            if (!b || 0 === b.length) return "";
            for (var c = [], d = 0, e = 0; e < b.length; e++) 0 === e % 8 && 0 < e && (c.push(String.fromCharCode(d)), d = 0), b[e] && (d |= 1 << e % 8);
            0 < d && c.push(String.fromCharCode(d));
            return xb(c.join("")).replace(/\.+$/, "")
        };
    var Db = Array.prototype.indexOf ? function(a, b) {
        return Array.prototype.indexOf.call(a, b, void 0)
    } : function(a, b) {
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    };
    var Eb, Fb = function() {
        if (void 0 === Eb) {
            var a = null,
                b = ua.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: va,
                        createScript: va,
                        createScriptURL: va
                    })
                } catch (c) {
                    ua.console && ua.console.error(c.message)
                }
                Eb = a
            } else Eb = a
        }
        return Eb
    };
    var Gb = function(a) {
        this.h = a
    };
    Gb.prototype.toString = function() {
        return this.h + ""
    };
    var Hb = function(a) {
            return a instanceof Gb && a.constructor === Gb ? a.h : "type_error:TrustedResourceUrl"
        },
        Jb = {},
        Kb = function(a) {
            var b = a,
                c = Fb(),
                d = c ? c.createScriptURL(b) : b;
            return new Gb(d, Jb)
        };
    var Lb = function(a) {
        this.h = a
    };
    Lb.prototype.toString = function() {
        return this.h.toString()
    };
    var Mb = function(a) {
            return a instanceof Lb && a.constructor === Lb ? a.h : "type_error:SafeUrl"
        },
        Nb = {},
        Ob = new Lb("about:invalid#zClosurez", Nb);
    var Pb, Qb;
    a: {
        for (var Rb = ["CLOSURE_FLAGS"], Sb = ua, Tb = 0; Tb < Rb.length; Tb++)
            if (Sb = Sb[Rb[Tb]], null == Sb) {
                Qb = null;
                break a
            }
        Qb = Sb
    }
    var Ub = Qb && Qb[610401301];
    Pb = null != Ub ? Ub : !1;

    function Vb() {
        var a = ua.navigator;
        if (a) {
            var b = a.userAgent;
            if (b) return b
        }
        return ""
    }
    var Wb, Xb = ua.navigator;
    Wb = Xb ? Xb.userAgentData || null : null;

    function Yb(a) {
        return Pb ? Wb ? Wb.brands.some(function(b) {
            var c = b.brand;
            return c && -1 != c.indexOf(a)
        }) : !1 : !1
    }

    function Zb(a) {
        return -1 != Vb().indexOf(a)
    };

    function $b() {
        return Pb ? !!Wb && 0 < Wb.brands.length : !1
    }

    function ac() {
        return $b() ? !1 : Zb("Opera")
    }

    function bc() {
        return Zb("Firefox") || Zb("FxiOS")
    }

    function cc() {
        return $b() ? Yb("Chromium") : (Zb("Chrome") || Zb("CriOS")) && !($b() ? 0 : Zb("Edge")) || Zb("Silk")
    };
    var dc = {},
        ec = function(a) {
            this.h = a
        };
    ec.prototype.toString = function() {
        return this.h.toString()
    };
    var fc = function(a) {
        return a instanceof ec && a.constructor === ec ? a.h : "type_error:SafeHtml"
    };
    /*

     SPDX-License-Identifier: Apache-2.0
    */
    var gc = ca([""]),
        hc = da(["\x00"], ["\\0"]),
        ic = da(["\n"], ["\\n"]),
        jc = da(["\x00"], ["\\u0000"]);

    function kc(a) {
        return -1 === a.toString().indexOf("`")
    }
    kc(function(a) {
        return a(gc)
    }) || kc(function(a) {
        return a(hc)
    }) || kc(function(a) {
        return a(ic)
    }) || kc(function(a) {
        return a(jc)
    });
    var lc = function(a) {
        this.om = a
    };

    function mc(a) {
        return new lc(function(b) {
            return b.substr(0, a.length + 1).toLowerCase() === a + ":"
        })
    }
    var nc = [mc("data"), mc("http"), mc("https"), mc("mailto"), mc("ftp"), new lc(function(a) {
        return /^[^:]*([/?#]|$)/.test(a)
    })];

    function oc(a, b) {
        b = void 0 === b ? nc : b;
        if (a instanceof Lb) return a;
        for (var c = 0; c < b.length; ++c) {
            var d = b[c];
            if (d instanceof lc && d.om(a)) return new Lb(a, Nb)
        }
    }

    function pc(a) {
        var b;
        b = void 0 === b ? nc : b;
        return oc(a, b) || Ob
    }
    var qc = "function" === typeof URL;

    function rc(a) {
        var b;
        a: if (qc) {
            var c;
            try {
                c = new URL(a)
            } catch (g) {
                b = "https:";
                break a
            }
            b = c.protocol
        } else {
            var d;
            b: {
                var e = document.createElement("a");
                try {
                    e.href = a
                } catch (g) {
                    d = void 0;
                    break b
                }
                var f = e.protocol;d = ":" === f || "" === f ? "https:" : f
            }
            b = d
        }
        if ("javascript:" !== b) return a
    }
    var sc = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;
    var tc = {};
    var uc = function() {},
        wc = function(a) {
            this.h = a
        };
    sa(wc, uc);
    wc.prototype.toString = function() {
        return this.h
    };

    function xc(a, b) {
        var c = [new wc(yc[0].toLowerCase(), tc)];
        if (0 === c.length) throw Error("");
        var d = c.map(function(f) {
                var g;
                if (f instanceof wc) g = f.h;
                else throw Error("");
                return g
            }),
            e = b.toLowerCase();
        if (d.every(function(f) {
                return 0 !== e.indexOf(f)
            })) throw Error('Attribute "' + b + '" does not match any of the allowed prefixes.');
        a.setAttribute(b, "true")
    }

    function zc(a) {
        var b = a.tagName;
        if ("SCRIPT" === b || "STYLE" === b) throw Error("");
    };

    function Ac(a, b) {
        var c = b instanceof Lb ? Mb(b) : rc(b);
        void 0 !== c && (a.action = c)
    };

    function Bc(a) {
        var b = a = Cc(a),
            c = Fb(),
            d = c ? c.createHTML(b) : b;
        return new ec(d, dc)
    }

    function Cc(a) {
        return null === a ? "null" : void 0 === a ? "undefined" : a
    };
    var z = window,
        C = document,
        Dc = navigator,
        Ec = C.currentScript && C.currentScript.src,
        Fc = function(a, b) {
            var c = z[a];
            z[a] = void 0 === c ? b : c;
            return z[a]
        },
        Gc = function(a, b) {
            b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function() {
                a.readyState in {
                    loaded: 1,
                    complete: 1
                } && (a.onreadystatechange = null, b())
            })
        },
        Hc = {
            async: 1,
            nonce: 1,
            onerror: 1,
            onload: 1,
            src: 1,
            type: 1
        },
        Ic = {
            onload: 1,
            src: 1,
            width: 1,
            height: 1,
            style: 1
        };

    function Jc(a, b, c) {
        b && l(b, function(d, e) {
            d = d.toLowerCase();
            c.hasOwnProperty(d) || a.setAttribute(d, e)
        })
    }
    var Kc = function(a, b, c, d, e) {
            var f = C.createElement("script");
            Jc(f, d, Hc);
            f.type = "text/javascript";
            f.async = d && !1 === d.async ? !1 : !0;
            var g;
            g = Kb(Cc(a));
            f.src = Hb(g);
            var h, m, n, p = null == (n = (m = (f.ownerDocument && f.ownerDocument.defaultView || window).document).querySelector) ? void 0 : n.call(m, "script[nonce]");
            (h = p ? p.nonce || p.getAttribute("nonce") || "" : "") && f.setAttribute("nonce", h);
            Gc(f, b);
            c && (f.onerror = c);
            if (e) e.appendChild(f);
            else {
                var q = C.getElementsByTagName("script")[0] || C.body || C.head;
                q.parentNode.insertBefore(f,
                    q)
            }
            return f
        },
        Lc = function() {
            if (Ec) {
                var a = Ec.toLowerCase();
                if (0 === a.indexOf("https://")) return 2;
                if (0 === a.indexOf("http://")) return 3
            }
            return 1
        },
        Mc = function(a, b, c, d, e) {
            var f;
            f = void 0 === f ? !0 : f;
            var g = e,
                h = !1;
            g || (g = C.createElement("iframe"), h = !0);
            Jc(g, c, Ic);
            d && l(d, function(n, p) {
                g.dataset[n] = p
            });
            f && (g.height = "0", g.width = "0", g.style.display = "none", g.style.visibility = "hidden");
            if (h) {
                var m = C.body && C.body.lastChild || C.body || C.head;
                m.parentNode.insertBefore(g, m)
            }
            Gc(g, b);
            void 0 !== a && (g.src = a);
            return g
        },
        Nc = function(a,
            b, c, d) {
            var e = new Image(1, 1);
            Jc(e, d, {});
            e.onload = function() {
                e.onload = null;
                b && b()
            };
            e.onerror = function() {
                e.onerror = null;
                c && c()
            };
            e.src = a
        },
        Oc = function(a, b, c, d) {
            a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
        },
        Pc = function(a, b, c) {
            a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
        },
        G = function(a) {
            z.setTimeout(a, 0)
        },
        Qc = function(a, b) {
            return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value : null
        },
        Rc = function(a) {
            var b = a.innerText ||
                a.textContent || "";
            b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
            b && (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
            return b
        },
        Sc = function(a) {
            var b = C.createElement("div"),
                c = b,
                d = Bc("A<div>" + a + "</div>");
            1 === c.nodeType && zc(c);
            c.innerHTML = fc(d);
            b = b.lastChild;
            for (var e = []; b.firstChild;) e.push(b.removeChild(b.firstChild));
            return e
        },
        Tc = function(a, b, c) {
            c = c || 100;
            for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
            for (var f = a, g = 0; f && g <= c; g++) {
                if (d[String(f.tagName).toLowerCase()]) return f;
                f = f.parentElement
            }
            return null
        },
        Uc = function(a) {
            var b;
            try {
                b = Dc.sendBeacon && Dc.sendBeacon(a)
            } catch (c) {
                Ab("TAGGING", 15)
            }
            b || Nc(a)
        },
        Vc = function(a, b) {
            var c = a[b];
            c && "string" === typeof c.animVal && (c = c.animVal);
            return c
        },
        Wc = function(a) {
            var b = {
                headers: {
                    "Attribution-Reporting-Eligible": "trigger"
                },
                keepalive: !0,
                attributionReporting: {
                    eventSourceEligible: !0,
                    triggerEligible: !0
                }
            };
            try {
                z.fetch(a, b)
            } catch (c) {}
        },
        Xc = function() {
            var a = z.performance;
            if (a && Fa(a.now)) return a.now()
        },
        Yc = function() {
            return z.performance || void 0
        };
    var Zc = function(a, b) {
            return H(this, a) && H(this, b)
        },
        $c = function(a, b) {
            return H(this, a) === H(this, b)
        },
        ad = function(a, b) {
            return H(this, a) || H(this, b)
        },
        bd = function(a, b) {
            a = H(this, a);
            b = H(this, b);
            return -1 < String(a).indexOf(String(b))
        },
        cd = function(a, b) {
            a = String(H(this, a));
            b = String(H(this, b));
            return a.substring(0, b.length) === b
        },
        dd = function(a, b) {
            a = H(this, a);
            b = H(this, b);
            switch (a) {
                case "pageLocation":
                    var c = z.location.href;
                    b instanceof sb && b.get("stripProtocol") && (c = c.replace(/^https?:\/\//, ""));
                    return c
            }
        };
    var ed = function(a, b) {
        gb.call(this);
        this.F = a;
        this.M = b
    };
    sa(ed, gb);
    ed.prototype.toString = function() {
        return this.F
    };
    ed.prototype.Tb = function() {
        return new rb(hb(this, 1))
    };
    ed.prototype.invoke = function(a, b) {
        return this.M.apply(new fd(this, a), Array.prototype.slice.call(arguments, 1))
    };
    ed.prototype.ab = function(a, b) {
        try {
            return this.invoke.apply(this, Array.prototype.slice.call(arguments, 0))
        } catch (c) {}
    };
    var fd = function(a, b) {
            this.s = a;
            this.h = b
        },
        H = function(a, b) {
            var c = a.h;
            return Ha(b) ? eb(c, b) : b
        },
        I = function(a) {
            return a.s.F
        };
    var gd = function() {
        this.map = new Map
    };
    gd.prototype.set = function(a, b) {
        this.map.set(a, b)
    };
    gd.prototype.get = function(a) {
        return this.map.get(a)
    };
    var hd = function() {
        this.keys = [];
        this.values = []
    };
    hd.prototype.set = function(a, b) {
        this.keys.push(a);
        this.values.push(b)
    };
    hd.prototype.get = function(a) {
        var b = this.keys.indexOf(a);
        if (-1 < b) return this.values[b]
    };

    function id() {
        try {
            return Map ? new gd : new hd
        } catch (a) {
            return new hd
        }
    };
    var jd = function(a) {
        if (a instanceof jd) return a;
        if (pb(a)) throw Error("Type of given value has an equivalent Pixie type.");
        this.h = a
    };
    jd.prototype.toString = function() {
        return String(this.h)
    };
    var ld = function(a) {
        gb.call(this);
        this.F = a;
        this.set("then", kd(this));
        this.set("catch", kd(this, !0));
        this.set("finally", kd(this, !1, !0))
    };
    sa(ld, sb);
    var kd = function(a, b, c) {
        b = void 0 === b ? !1 : b;
        c = void 0 === c ? !1 : c;
        return new ed("", function(d, e) {
            b && (e = d, d = void 0);
            c && (e = d);
            d instanceof ed || (d = void 0);
            e instanceof ed || (e = void 0);
            var f = Ba(this.h),
                g = function(m) {
                    return function(n) {
                        return c ? (m.invoke(f), a.F) : m.invoke(f, n)
                    }
                },
                h = a.F.then(d && g(d), e && g(e));
            return new ld(h)
        })
    };
    var nd = function(a, b, c) {
            var d = id(),
                e = function(g, h) {
                    for (var m = hb(g, 1), n = 0; n < m.length; n++) h[m[n]] = f(g.get(m[n]))
                },
                f = function(g) {
                    var h = d.get(g);
                    if (h) return h;
                    if (g instanceof rb) {
                        var m = [];
                        d.set(g, m);
                        for (var n = g.Tb(), p = 0; p < n.length(); p++) m[n.get(p)] = f(g.get(n.get(p)));
                        return m
                    }
                    if (g instanceof ld) return g.F;
                    if (g instanceof sb) {
                        var q = {};
                        d.set(g, q);
                        e(g, q);
                        return q
                    }
                    if (g instanceof ed) {
                        var r = function() {
                            for (var u = Array.prototype.slice.call(arguments, 0), v = 0; v < u.length; v++) u[v] = md(u[v], b, c);
                            var w = new za(b ? b.X :
                                new ya);
                            b && (w.h = b.h);
                            return f(g.invoke.apply(g, [w].concat(u)))
                        };
                        d.set(g, r);
                        e(g, r);
                        return r
                    }
                    var t = !1;
                    switch (c) {
                        case 1:
                            t = !0;
                            break;
                        case 2:
                            t = !1;
                            break;
                        case 3:
                            t = !1;
                            break;
                        default:
                    }
                    if (g instanceof jd && t) return g.h;
                    switch (typeof g) {
                        case "boolean":
                        case "number":
                        case "string":
                        case "undefined":
                            return g;
                        case "object":
                            if (null === g) return null
                    }
                };
            return f(a)
        },
        md = function(a, b, c) {
            var d = id(),
                e = function(g,
                    h) {
                    for (var m in g) g.hasOwnProperty(m) && h.set(m, f(g[m]))
                },
                f = function(g) {
                    var h = d.get(g);
                    if (h) return h;
                    if (Ha(g) || Ma(g)) {
                        var m = new rb([]);
                        d.set(g, m);
                        for (var n in g) g.hasOwnProperty(n) && m.set(n, f(g[n]));
                        return m
                    }
                    if (lb(g)) {
                        var p = new sb;
                        d.set(g, p);
                        e(g, p);
                        return p
                    }
                    if ("function" === typeof g) {
                        var q = new ed("", function(x) {
                            for (var y = Array.prototype.slice.call(arguments, 0), A = 0; A < y.length; A++) y[A] = nd(H(this, y[A]), b, c);
                            return f((0, this.h.M)(g, g, y))
                        });
                        d.set(g, q);
                        e(g, q);
                        return q
                    }
                    var v = typeof g;
                    if (null === g || "string" === v || "number" === v || "boolean" === v) return g;
                    var w = !1;
                    switch (c) {
                        case 1:
                            w = !0;
                            break;
                        case 2:
                            w = !1;
                            break;
                        default:
                    }
                    if (void 0 !== g && w) return new jd(g)
                };
            return f(a)
        };
    var od = function() {
        var a = !1;
        return a
    };
    var pd = {
        supportedMethods: "concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),
        concat: function(a, b) {
            for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
            for (var e = 1; e < arguments.length; e++)
                if (arguments[e] instanceof rb)
                    for (var f = arguments[e], g = 0; g < f.length(); g++) c.push(f.get(g));
                else c.push(arguments[e]);
            return new rb(c)
        },
        every: function(a, b) {
            for (var c = this.length(), d = 0; d < this.length() &&
                d < c; d++)
                if (this.has(d) && !b.invoke(a, this.get(d), d, this)) return !1;
            return !0
        },
        filter: function(a, b) {
            for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++) this.has(e) && b.invoke(a, this.get(e), e, this) && d.push(this.get(e));
            return new rb(d)
        },
        forEach: function(a, b) {
            for (var c = this.length(), d = 0; d < this.length() && d < c; d++) this.has(d) && b.invoke(a, this.get(d), d, this)
        },
        hasOwnProperty: function(a, b) {
            return this.has(b)
        },
        indexOf: function(a, b, c) {
            var d = this.length(),
                e = void 0 === c ? 0 : Number(c);
            0 > e && (e = Math.max(d + e, 0));
            for (var f =
                    e; f < d; f++)
                if (this.has(f) && this.get(f) === b) return f;
            return -1
        },
        join: function(a, b) {
            for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
            return c.join(b)
        },
        lastIndexOf: function(a, b, c) {
            var d = this.length(),
                e = d - 1;
            void 0 !== c && (e = 0 > c ? d + c : Math.min(c, e));
            for (var f = e; 0 <= f; f--)
                if (this.has(f) && this.get(f) === b) return f;
            return -1
        },
        map: function(a, b) {
            for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++) this.has(e) && (d[e] = b.invoke(a, this.get(e), e, this));
            return new rb(d)
        },
        pop: function() {
            return this.pop()
        },
        push: function(a,
            b) {
            return this.push.apply(this, Array.prototype.slice.call(arguments, 1))
        },
        reduce: function(a, b, c) {
            var d = this.length(),
                e, f = 0;
            if (void 0 !== c) e = c;
            else {
                if (0 === d) throw Error("TypeError: Reduce on List with no elements.");
                for (var g = 0; g < d; g++)
                    if (this.has(g)) {
                        e = this.get(g);
                        f = g + 1;
                        break
                    }
                if (g === d) throw Error("TypeError: Reduce on List with no elements.");
            }
            for (var h = f; h < d; h++) this.has(h) && (e = b.invoke(a, e, this.get(h), h, this));
            return e
        },
        reduceRight: function(a, b, c) {
            var d = this.length(),
                e, f = d - 1;
            if (void 0 !== c) e = c;
            else {
                if (0 ===
                    d) throw Error("TypeError: ReduceRight on List with no elements.");
                for (var g = 1; g <= d; g++)
                    if (this.has(d - g)) {
                        e = this.get(d - g);
                        f = d - (g + 1);
                        break
                    }
                if (g > d) throw Error("TypeError: ReduceRight on List with no elements.");
            }
            for (var h = f; 0 <= h; h--) this.has(h) && (e = b.invoke(a, e, this.get(h), h, this));
            return e
        },
        reverse: function() {
            for (var a = ob(this), b = a.length - 1, c = 0; 0 <= b; b--, c++) a.hasOwnProperty(b) ? this.set(c, a[b]) : this.remove(c);
            return this
        },
        shift: function() {
            return this.shift()
        },
        slice: function(a, b, c) {
            var d = this.length();
            void 0 === b && (b = 0);
            b = 0 > b ? Math.max(d + b, 0) : Math.min(b, d);
            c = void 0 === c ? d : 0 > c ? Math.max(d + c, 0) : Math.min(c, d);
            c = Math.max(b, c);
            for (var e = [], f = b; f < c; f++) e.push(this.get(f));
            return new rb(e)
        },
        some: function(a, b) {
            for (var c = this.length(), d = 0; d < this.length() && d < c; d++)
                if (this.has(d) && b.invoke(a, this.get(d), d, this)) return !0;
            return !1
        },
        sort: function(a, b) {
            var c = ob(this);
            void 0 === b ? c.sort() : c.sort(function(e, f) {
                return Number(b.invoke(a, e, f))
            });
            for (var d = 0; d < c.length; d++) c.hasOwnProperty(d) ? this.set(d, c[d]) : this.remove(d);
            return this
        },
        splice: function(a, b, c, d) {
            return this.splice.apply(this, Array.prototype.splice.call(arguments, 1, arguments.length - 1))
        },
        toString: function() {
            return this.toString()
        },
        unshift: function(a, b) {
            return this.unshift.apply(this, Array.prototype.slice.call(arguments, 1))
        }
    };
    var qd = function(a) {
        var b;
        b = Error.call(this, a);
        this.message = b.message;
        "stack" in b && (this.stack = b.stack)
    };
    sa(qd, Error);
    var rd = {
            charAt: 1,
            concat: 1,
            indexOf: 1,
            lastIndexOf: 1,
            match: 1,
            replace: 1,
            search: 1,
            slice: 1,
            split: 1,
            substring: 1,
            toLowerCase: 1,
            toLocaleLowerCase: 1,
            toString: 1,
            toUpperCase: 1,
            toLocaleUpperCase: 1,
            trim: 1
        },
        sd = new wa("break"),
        td = new wa("continue"),
        ud = function(a, b) {
            return H(this, a) + H(this, b)
        },
        vd = function(a, b) {
            return H(this, a) && H(this, b)
        },
        wd = function(a, b, c) {
            a = H(this, a);
            b = H(this, b);
            c = H(this, c);
            if (!(c instanceof rb)) throw Error("Error: Non-List argument given to Apply instruction.");
            if (null === a || void 0 === a) {
                var d = "TypeError: Can't read property " +
                    b + " of " + a + ".";
                if (od()) throw new qd(d);
                throw Error(d);
            }
            var e = "number" === typeof a;
            if ("boolean" === typeof a || e) {
                if ("toString" === b) {
                    if (e && c.length()) {
                        var f = nd(c.get(0));
                        try {
                            return a.toString(f)
                        } catch (y) {}
                    }
                    return a.toString()
                }
                var g = "TypeError: " + a + "." + b + " is not a function.";
                if (od()) throw new qd(g);
                throw Error(g);
            }
            if ("string" === typeof a) {
                if (rd.hasOwnProperty(b)) {
                    var h = 2;
                    h = 1;
                    var m = nd(c, void 0, h);
                    return md(a[b].apply(a, m), this.h)
                }
                var n = "TypeError: " + b + " is not a function";
                if (od()) throw new qd(n);
                throw Error(n);
            }
            if (a instanceof rb) {
                if (a.has(b)) {
                    var p = a.get(b);
                    if (p instanceof ed) {
                        var q = ob(c);
                        q.unshift(this.h);
                        return p.invoke.apply(p, q)
                    }
                    var r = "TypeError: " + b + " is not a function";
                    if (od()) throw new qd(r);
                    throw Error(r);
                }
                if (0 <= pd.supportedMethods.indexOf(b)) {
                    var t = ob(c);
                    t.unshift(this.h);
                    return pd[b].apply(a, t)
                }
            }
            if (a instanceof ed || a instanceof sb) {
                if (a.has(b)) {
                    var u = a.get(b);
                    if (u instanceof ed) {
                        var v = ob(c);
                        v.unshift(this.h);
                        return u.invoke.apply(u, v)
                    }
                    var w = "TypeError: " + b + " is not a function";
                    if (od()) throw new qd(w);
                    throw Error(w);
                }
                if ("toString" === b) return a instanceof ed ? a.F : a.toString();
                if ("hasOwnProperty" === b) return a.has.apply(a, ob(c))
            }
            if (a instanceof jd && "toString" === b) return a.toString();
            var x = "TypeError: Object has no '" + b + "' property.";
            if (od()) throw new qd(x);
            throw Error(x);
        },
        xd = function(a, b) {
            a = H(this, a);
            if ("string" !== typeof a) throw Error("Invalid key name given for assignment.");
            var c = this.h;
            if (!c.has(a)) throw Error("Attempting to assign to undefined value " + b);
            var d = H(this, b);
            c.set(a, d);
            return d
        },
        yd = function(a) {
            var b = Ba(this.h),
                c = db(b, Array.prototype.slice.apply(arguments));
            if (c instanceof wa) return c
        },
        zd = function() {
            return sd
        },
        Ad = function(a) {
            for (var b = H(this, a), c = 0; c < b.length; c++) {
                var d = H(this, b[c]);
                if (d instanceof wa) return d
            }
        },
        Bd = function(a) {
            for (var b = this.h, c = 0; c < arguments.length - 1; c += 2) {
                var d = arguments[c];
                if ("string" === typeof d) {
                    var e = H(this, arguments[c + 1]);
                    Aa(b, d, e, !0)
                }
            }
        },
        Cd = function() {
            return td
        },
        Dd = function(a, b) {
            return new wa(a, H(this, b))
        },
        Ed = function(a, b, c) {
            var d = new rb;
            b = H(this, b);
            for (var e = 0; e < b.length; e++) d.push(b[e]);
            var f = [51, a, d].concat(Array.prototype.splice.call(arguments, 2, arguments.length - 2));
            this.h.add(a, H(this, f))
        },
        Fd = function(a, b) {
            return H(this, a) / H(this, b)
        },
        Gd = function(a, b) {
            a = H(this, a);
            b = H(this, b);
            var c = a instanceof jd,
                d = b instanceof jd;
            return c || d ? c && d ? a.h == b.h : !1 : a == b
        },
        Hd = function(a) {
            for (var b, c = 0; c < arguments.length; c++) b = H(this, arguments[c]);
            return b
        };

    function Id(a, b, c, d) {
        for (var e = 0; e < b(); e++) {
            var f = a(c(e)),
                g = db(f, d);
            if (g instanceof wa) {
                if ("break" === g.h) break;
                if ("return" === g.h) return g
            }
        }
    }

    function Jd(a, b, c) {
        if ("string" === typeof b) return Id(a, function() {
            return b.length
        }, function(f) {
            return f
        }, c);
        if (b instanceof sb || b instanceof rb || b instanceof ed) {
            var d = b.Tb(),
                e = d.length();
            return Id(a, function() {
                return e
            }, function(f) {
                return d.get(f)
            }, c)
        }
    }
    var Kd = function(a, b, c) {
            a = H(this, a);
            b = H(this, b);
            c = H(this, c);
            var d = this.h;
            return Jd(function(e) {
                d.set(a, e);
                return d
            }, b, c)
        },
        Ld = function(a, b, c) {
            a = H(this, a);
            b = H(this, b);
            c = H(this, c);
            var d = this.h;
            return Jd(function(e) {
                var f = Ba(d);
                Aa(f, a, e, !0);
                return f
            }, b, c)
        },
        Md = function(a, b, c) {
            a = H(this, a);
            b = H(this, b);
            c = H(this, c);
            var d = this.h;
            return Jd(function(e) {
                var f = Ba(d);
                f.add(a, e);
                return f
            }, b, c)
        },
        Od = function(a, b, c) {
            a = H(this, a);
            b = H(this, b);
            c = H(this, c);
            var d = this.h;
            return Nd(function(e) {
                d.set(a, e);
                return d
            }, b, c)
        },
        Pd =
        function(a, b, c) {
            a = H(this, a);
            b = H(this, b);
            c = H(this, c);
            var d = this.h;
            return Nd(function(e) {
                var f = Ba(d);
                Aa(f, a, e, !0);
                return f
            }, b, c)
        },
        Qd = function(a, b, c) {
            a = H(this, a);
            b = H(this, b);
            c = H(this, c);
            var d = this.h;
            return Nd(function(e) {
                var f = Ba(d);
                f.add(a, e);
                return f
            }, b, c)
        };

    function Nd(a, b, c) {
        if ("string" === typeof b) return Id(a, function() {
            return b.length
        }, function(d) {
            return b[d]
        }, c);
        if (b instanceof rb) return Id(a, function() {
            return b.length()
        }, function(d) {
            return b.get(d)
        }, c);
        if (od()) throw new qd("The value is not iterable.");
        throw new TypeError("The value is not iterable.");
    }
    var Rd = function(a, b, c, d) {
            function e(p, q) {
                for (var r = 0; r < f.length(); r++) {
                    var t = f.get(r);
                    q.add(t, p.get(t))
                }
            }
            var f = H(this, a);
            if (!(f instanceof rb)) throw Error("TypeError: Non-List argument given to ForLet instruction.");
            var g = this.h;
            d = H(this, d);
            var h = Ba(g);
            for (e(g, h); eb(h, b);) {
                var m = db(h, d);
                if (m instanceof wa) {
                    if ("break" === m.h) break;
                    if ("return" === m.h) return m
                }
                var n = Ba(g);
                e(h, n);
                eb(n, c);
                h = n
            }
        },
        Sd = function(a, b, c) {
            var d = this.h,
                e = H(this, b);
            if (!(e instanceof rb)) throw Error("Error: non-List value given for Fn argument names.");
            var f = Array.prototype.slice.call(arguments, 2);
            return new ed(a, function() {
                return function(g) {
                    var h = Ba(d);
                    void 0 === h.h && (h.h = this.h.h);
                    for (var m = Array.prototype.slice.call(arguments, 0), n = 0; n < m.length; n++)
                        if (m[n] = H(this, m[n]), m[n] instanceof wa) return m[n];
                    for (var p = e.get("length"), q = 0; q < p; q++) q < m.length ? h.add(e.get(q), m[q]) : h.add(e.get(q), void 0);
                    h.add("arguments", new rb(m));
                    var r = db(h, f);
                    if (r instanceof wa) return "return" === r.h ? r.s : r
                }
            }())
        },
        Td = function(a) {
            a = H(this, a);
            var b = this.h,
                c = !1;
            if (c && !b.has(a)) throw new ReferenceError(a + " is not defined.");
            return b.get(a)
        },
        Ud = function(a, b) {
            var c;
            a = H(this, a);
            b = H(this, b);
            if (void 0 === a || null === a) {
                var d = "TypeError: Cannot read properties of " + a + " (reading '" + b + "')";
                if (od()) throw new qd(d);
                throw Error(d);
            }
            if (a instanceof sb || a instanceof rb || a instanceof ed) c = a.get(b);
            else if ("string" === typeof a) "length" === b ? c = a.length : qb(b) && (c = a[b]);
            else if (a instanceof jd) return;
            return c
        },
        Vd = function(a, b) {
            return H(this, a) > H(this, b)
        },
        Wd = function(a, b) {
            return H(this, a) >= H(this, b)
        },
        Xd = function(a, b) {
            a = H(this, a);
            b = H(this, b);
            a instanceof jd && (a = a.h);
            b instanceof jd && (b = b.h);
            return a === b
        },
        Yd = function(a, b) {
            return !Xd.call(this, a, b)
        },
        Zd = function(a, b, c) {
            var d = [];
            H(this, a) ? d = H(this, b) : c && (d = H(this, c));
            var e = db(this.h, d);
            if (e instanceof wa) return e
        },
        $d = function(a, b) {
            return H(this, a) < H(this, b)
        },
        ae = function(a, b) {
            return H(this, a) <= H(this, b)
        },
        be = function(a) {
            for (var b = new rb, c = 0; c < arguments.length; c++) {
                var d =
                    H(this, arguments[c]);
                b.push(d)
            }
            return b
        },
        ce = function(a) {
            for (var b = new sb, c = 0; c < arguments.length - 1; c += 2) {
                var d = H(this, arguments[c]) + "",
                    e = H(this, arguments[c + 1]);
                b.set(d, e)
            }
            return b
        },
        de = function(a, b) {
            return H(this, a) % H(this, b)
        },
        ee = function(a, b) {
            return H(this, a) * H(this, b)
        },
        fe = function(a) {
            return -H(this, a)
        },
        ge = function(a) {
            return !H(this, a)
        },
        he = function(a, b) {
            return !Gd.call(this, a, b)
        },
        ie = function() {
            return null
        },
        je = function(a, b) {
            return H(this, a) || H(this, b)
        },
        ke = function(a, b) {
            var c = H(this, a);
            H(this, b);
            return c
        },
        le = function(a) {
            return H(this, a)
        },
        me = function(a) {
            return Array.prototype.slice.apply(arguments)
        },
        ne = function(a) {
            return new wa("return", H(this, a))
        },
        oe = function(a, b, c) {
            a = H(this, a);
            b = H(this, b);
            c = H(this, c);
            if (null === a || void 0 === a) {
                var d = "TypeError: Can't set property " + b + " of " + a + ".";
                if (od()) throw new qd(d);
                throw Error(d);
            }(a instanceof ed || a instanceof rb || a instanceof sb) && a.set(b, c);
            return c
        },
        pe = function(a, b) {
            return H(this, a) - H(this, b)
        },
        qe = function(a, b, c) {
            a = H(this, a);
            var d = H(this, b),
                e = H(this, c);
            if (!Ha(d) ||
                !Ha(e)) throw Error("Error: Malformed switch instruction.");
            for (var f, g = !1, h = 0; h < d.length; h++)
                if (g || a === H(this, d[h]))
                    if (f = H(this, e[h]), f instanceof wa) {
                        var m = f.h;
                        if ("break" === m) return;
                        if ("return" === m || "continue" === m) return f
                    } else g = !0;
            if (e.length === d.length + 1 && (f = H(this, e[e.length - 1]), f instanceof wa && ("return" === f.h || "continue" === f.h))) return f
        },
        re = function(a, b, c) {
            return H(this, a) ? H(this, b) : H(this, c)
        },
        se = function(a) {
            a = H(this, a);
            return a instanceof ed ? "function" : typeof a
        },
        te = function(a) {
            for (var b =
                    this.h, c = 0; c < arguments.length; c++) {
                var d = arguments[c];
                "string" !== typeof d || b.add(d, void 0)
            }
        },
        ue = function(a, b, c, d) {
            var e = H(this, d);
            if (H(this, c)) {
                var f = db(this.h, e);
                if (f instanceof wa) {
                    if ("break" === f.h) return;
                    if ("return" === f.h) return f
                }
            }
            for (; H(this, a);) {
                var g = db(this.h, e);
                if (g instanceof wa) {
                    if ("break" === g.h) break;
                    if ("return" === g.h) return g
                }
                H(this, b)
            }
        },
        ve = function(a) {
            return ~Number(H(this, a))
        },
        we = function(a, b) {
            return Number(H(this, a)) << Number(H(this, b))
        },
        xe = function(a, b) {
            return Number(H(this, a)) >> Number(H(this,
                b))
        },
        ye = function(a, b) {
            return Number(H(this, a)) >>> Number(H(this, b))
        },
        ze = function(a, b) {
            return Number(H(this, a)) & Number(H(this, b))
        },
        Ae = function(a, b) {
            return Number(H(this, a)) ^ Number(H(this, b))
        },
        Be = function(a, b) {
            return Number(H(this, a)) | Number(H(this, b))
        },
        Ce = function() {},
        De = function(a, b, c, d, e) {
            var f = !0;
            try {
                var g = H(this, c);
                if (g instanceof wa) return g
            } catch (r) {
                if (!(r instanceof qd && a)) throw f = r instanceof qd, r;
                var h = Ba(this.h),
                    m = new jd(r);
                h.add(b, m);
                var n = H(this, d),
                    p = db(h, n);
                if (p instanceof wa) return p
            } finally {
                if (f &&
                    void 0 !== e) {
                    var q = H(this, e);
                    if (q instanceof wa) return q
                }
            }
        };
    var Fe = function() {
        this.h = new fb;
        Ee(this)
    };
    Fe.prototype.execute = function(a) {
        return this.h.s(a)
    };
    var Ee = function(a) {
        var b = function(c, d) {
            var e = new ed(String(c), d);
            e.Eb();
            a.h.h.set(String(c), e)
        };
        b("map", ce);
        b("and", Zc);
        b("contains", bd);
        b("equals", $c);
        b("or", ad);
        b("startsWith", cd);
        b("variable", dd)
    };
    var Ie = function() {
        this.h = new fb;
        He(this)
    };
    Ie.prototype.execute = function(a) {
        return Je(this.h.s(a))
    };
    var Ke = function(a, b, c) {
            return Je(a.h.F(b, c))
        },
        He = function(a) {
            var b = function(c, d) {
                var e = String(c),
                    f = new ed(e, d);
                f.Eb();
                a.h.h.set(e, f)
            };
            b(0, ud);
            b(1, vd);
            b(2, wd);
            b(3, xd);
            b(56, ze);
            b(57, we);
            b(58, ve);
            b(59, Be);
            b(60, xe);
            b(61, ye);
            b(62, Ae);
            b(53, yd);
            b(4, zd);
            b(5, Ad);
            b(52, Bd);
            b(6, Cd);
            b(49, Dd);
            b(7, be);
            b(8, ce);
            b(9, Ad);
            b(50, Ed);
            b(10, Fd);
            b(12, Gd);
            b(13, Hd);
            b(51, Sd);
            b(47, Kd);
            b(54, Ld);
            b(55, Md);
            b(63, Rd);
            b(64, Od);
            b(65, Pd);
            b(66, Qd);
            b(15, Td);
            b(16, Ud);
            b(17, Ud);
            b(18, Vd);
            b(19, Wd);
            b(20, Xd);
            b(21, Yd);
            b(22, Zd);
            b(23, $d);
            b(24, ae);
            b(25, de);
            b(26, ee);
            b(27, fe);
            b(28, ge);
            b(29, he);
            b(45, ie);
            b(30, je);
            b(32, ke);
            b(33, ke);
            b(34, le);
            b(35, le);
            b(46, me);
            b(36, ne);
            b(43, oe);
            b(37, pe);
            b(38, qe);
            b(39, re);
            b(67, De);
            b(40, se);
            b(44, Ce);
            b(41, te);
            b(42, ue)
        };

    function Je(a) {
        if (a instanceof wa || a instanceof ed || a instanceof rb || a instanceof sb || a instanceof jd || null === a || void 0 === a || "string" === typeof a || "number" === typeof a || "boolean" === typeof a) return a
    };

    function Le(a) {
        switch (a) {
            case 1:
                return "1";
            case 2:
            case 4:
                return "0";
            default:
                return "-"
        }
    };
    var Me = function() {
        var a = function(b) {
            return {
                toString: function() {
                    return b
                }
            }
        };
        return {
            kk: a("consent"),
            fi: a("convert_case_to"),
            gi: a("convert_false_to"),
            hi: a("convert_null_to"),
            ii: a("convert_true_to"),
            ji: a("convert_undefined_to"),
            un: a("debug_mode_metadata"),
            ka: a("function"),
            Tg: a("instance_name"),
            Sk: a("live_only"),
            Tk: a("malware_disabled"),
            Uk: a("metadata"),
            Xk: a("original_activity_id"),
            Jn: a("original_vendor_template_id"),
            In: a("once_on_load"),
            Wk: a("once_per_event"),
            ej: a("once_per_load"),
            Nn: a("priority_override"),
            On: a("respected_consent_types"),
            kj: a("setup_tags"),
            oe: a("tag_id"),
            pj: a("teardown_tags")
        }
    }();
    var Ne = [],
        Oe = {
            "\x00": "&#0;",
            '"': "&quot;",
            "&": "&amp;",
            "'": "&#39;",
            "<": "&lt;",
            ">": "&gt;",
            "\t": "&#9;",
            "\n": "&#10;",
            "\v": "&#11;",
            "\f": "&#12;",
            "\r": "&#13;",
            " ": "&#32;",
            "-": "&#45;",
            "/": "&#47;",
            "=": "&#61;",
            "`": "&#96;",
            "\u0085": "&#133;",
            "\u00a0": "&#160;",
            "\u2028": "&#8232;",
            "\u2029": "&#8233;"
        },
        Pe = function(a) {
            return Oe[a]
        },
        Qe = /[\x00\x22\x26\x27\x3c\x3e]/g;
    var Ue = /[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,
        Ve = {
            "\x00": "\\x00",
            "\b": "\\x08",
            "\t": "\\t",
            "\n": "\\n",
            "\v": "\\x0b",
            "\f": "\\f",
            "\r": "\\r",
            '"': "\\x22",
            "&": "\\x26",
            "'": "\\x27",
            "/": "\\/",
            "<": "\\x3c",
            "=": "\\x3d",
            ">": "\\x3e",
            "\\": "\\\\",
            "\u0085": "\\x85",
            "\u2028": "\\u2028",
            "\u2029": "\\u2029",
            $: "\\x24",
            "(": "\\x28",
            ")": "\\x29",
            "*": "\\x2a",
            "+": "\\x2b",
            ",": "\\x2c",
            "-": "\\x2d",
            ".": "\\x2e",
            ":": "\\x3a",
            "?": "\\x3f",
            "[": "\\x5b",
            "]": "\\x5d",
            "^": "\\x5e",
            "{": "\\x7b",
            "|": "\\x7c",
            "}": "\\x7d"
        },
        We = function(a) {
            return Ve[a]
        };
    Ne[8] = function(a) {
        if (null == a) return " null ";
        switch (typeof a) {
            case "boolean":
            case "number":
                return " " + a + " ";
            default:
                return "'" + String(String(a)).replace(Ue, We) + "'"
        }
    };
    var df = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,
        ef = {
            "\x00": "%00",
            "\u0001": "%01",
            "\u0002": "%02",
            "\u0003": "%03",
            "\u0004": "%04",
            "\u0005": "%05",
            "\u0006": "%06",
            "\u0007": "%07",
            "\b": "%08",
            "\t": "%09",
            "\n": "%0A",
            "\v": "%0B",
            "\f": "%0C",
            "\r": "%0D",
            "\u000e": "%0E",
            "\u000f": "%0F",
            "\u0010": "%10",
            "\u0011": "%11",
            "\u0012": "%12",
            "\u0013": "%13",
            "\u0014": "%14",
            "\u0015": "%15",
            "\u0016": "%16",
            "\u0017": "%17",
            "\u0018": "%18",
            "\u0019": "%19",
            "\u001a": "%1A",
            "\u001b": "%1B",
            "\u001c": "%1C",
            "\u001d": "%1D",
            "\u001e": "%1E",
            "\u001f": "%1F",
            " ": "%20",
            '"': "%22",
            "'": "%27",
            "(": "%28",
            ")": "%29",
            "<": "%3C",
            ">": "%3E",
            "\\": "%5C",
            "{": "%7B",
            "}": "%7D",
            "\u007f": "%7F",
            "\u0085": "%C2%85",
            "\u00a0": "%C2%A0",
            "\u2028": "%E2%80%A8",
            "\u2029": "%E2%80%A9",
            "\uff01": "%EF%BC%81",
            "\uff03": "%EF%BC%83",
            "\uff04": "%EF%BC%84",
            "\uff06": "%EF%BC%86",
            "\uff07": "%EF%BC%87",
            "\uff08": "%EF%BC%88",
            "\uff09": "%EF%BC%89",
            "\uff0a": "%EF%BC%8A",
            "\uff0b": "%EF%BC%8B",
            "\uff0c": "%EF%BC%8C",
            "\uff0f": "%EF%BC%8F",
            "\uff1a": "%EF%BC%9A",
            "\uff1b": "%EF%BC%9B",
            "\uff1d": "%EF%BC%9D",
            "\uff1f": "%EF%BC%9F",
            "\uff20": "%EF%BC%A0",
            "\uff3b": "%EF%BC%BB",
            "\uff3d": "%EF%BC%BD"
        },
        ff = function(a) {
            return ef[a]
        };
    Ne[16] = function(a) {
        return a
    };
    var hf;
    var jf = [],
        kf = [],
        lf = [],
        mf = [],
        nf = [],
        of = {},
        pf, qf, rf = function(a) {
            qf = qf || a
        },
        sf = function(a) {},
        tf, uf = [],
        vf = function(a, b) {
            var c = {};
            c[Me.ka] = "__" + a;
            for (var d in b) b.hasOwnProperty(d) && (c["vtp_" + d] = b[d]);
            return c
        },
        wf = function(a,
            b) {
            var c = a[Me.ka],
                d = b && b.event;
            if (!c) throw Error("Error: No function name given for function call.");
            var e = of [c],
                f = b && 2 === b.type && d.reportMacroDiscrepancy && e && -1 !== uf.indexOf(c),
                g = {},
                h = {},
                m;
            for (m in a) a.hasOwnProperty(m) && 0 === m.indexOf("vtp_") && (e && (g[m] = a[m]), !e || f) && (h[m.substr(4)] = a[m]);
            e && d && d.cachedModelValues && (g.vtp_gtmCachedValues = d.cachedModelValues);
            if (b) {
                if (null == b.name) {
                    var n;
                    a: {
                        var p = b.type,
                            q = b.index;
                        if (null == q) n = "";
                        else {
                            var r;
                            switch (p) {
                                case 2:
                                    r = jf[q];
                                    break;
                                case 1:
                                    r = mf[q];
                                    break;
                                default:
                                    n =
                                        "";
                                    break a
                            }
                            var t = r && r[Me.Tg];
                            n = t ? String(t) : ""
                        }
                    }
                    b.name = n
                }
                e && (g.vtp_gtmEntityIndex = b.index, g.vtp_gtmEntityName = b.name)
            }
            var u, v;
            e && (u = e(g));
            if (!e || f) v = hf(c, h, b);
            f && d && (pb(u) ? typeof u !== typeof v && d.reportMacroDiscrepancy(d.id, c) : u !== v && d.reportMacroDiscrepancy(d.id, c));
            return e ? u : v
        },
        yf = function(a, b, c) {
            c = c || [];
            var d = {},
                e;
            for (e in a) a.hasOwnProperty(e) && (d[e] = xf(a[e], b, c));
            return d
        },
        xf = function(a, b, c) {
            if (Ha(a)) {
                var d;
                switch (a[0]) {
                    case "function_id":
                        return a[1];
                    case "list":
                        d = [];
                        for (var e = 1; e < a.length; e++) d.push(xf(a[e],
                            b, c));
                        return d;
                    case "macro":
                        var f = a[1];
                        if (c[f]) return;
                        var g = jf[f];
                        if (!g || b.isBlocked(g)) return;
                        c[f] = !0;
                        var h = String(g[Me.Tg]);
                        try {
                            var m = yf(g, b, c);
                            m.vtp_gtmEventId = b.id;
                            b.priorityId && (m.vtp_gtmPriorityId = b.priorityId);
                            d = wf(m, {
                                event: b,
                                index: f,
                                type: 2,
                                name: h
                            });
                            tf && (d = tf.xl(d, m))
                        } catch (y) {
                            b.logMacroError && b.logMacroError(y, Number(f), h), d = !1
                        }
                        c[f] = !1;
                        return d;
                    case "map":
                        d = {};
                        for (var n = 1; n < a.length; n += 2) d[xf(a[n], b, c)] = xf(a[n + 1], b, c);
                        return d;
                    case "template":
                        d = [];
                        for (var p = !1, q = 1; q < a.length; q++) {
                            var r = xf(a[q],
                                b, c);
                            qf && (p = p || qf.km(r));
                            d.push(r)
                        }
                        return qf && p ? qf.zl(d) : d.join("");
                    case "escape":
                        d = xf(a[1], b, c);
                        if (qf && Ha(a[1]) && "macro" === a[1][0] && qf.lm(a)) return qf.Pm(d);
                        d = String(d);
                        for (var t = 2; t < a.length; t++) Ne[a[t]] && (d = Ne[a[t]](d));
                        return d;
                    case "tag":
                        var u = a[1];
                        if (!mf[u]) throw Error("Unable to resolve tag reference " + u + ".");
                        return d = {
                            Aj: a[2],
                            index: u
                        };
                    case "zb":
                        var v = {
                            arg0: a[2],
                            arg1: a[3],
                            ignore_case: a[5]
                        };
                        v[Me.ka] = a[1];
                        var w = zf(v, b, c),
                            x = !!a[4];
                        return x || 2 !== w ? x !== (1 === w) : null;
                    default:
                        throw Error("Attempting to expand unknown Value type: " +
                            a[0] + ".");
                }
            }
            return a
        },
        zf = function(a, b, c) {
            try {
                return pf(yf(a, b, c))
            } catch (d) {
                JSON.stringify(a)
            }
            return 2
        },
        Af = function(a) {
            var b = a[Me.ka];
            if (!b) throw Error("Error: No function name given for function call.");
            return !! of [b]
        };
    var Bf = function(a, b, c) {
        var d;
        d = Error.call(this, c);
        this.message = d.message;
        "stack" in d && (this.stack = d.stack);
        this.h = a
    };
    sa(Bf, Error);

    function Cf(a, b) {
        if (Ha(a)) {
            Object.defineProperty(a, "context", {
                value: {
                    line: b[0]
                }
            });
            for (var c = 1; c < a.length; c++) Cf(a[c], b[c])
        }
    };
    var Df = function(a, b) {
        var c;
        c = Error.call(this);
        this.message = c.message;
        "stack" in c && (this.stack = c.stack);
        this.Km = a;
        this.s = b;
        this.h = []
    };
    sa(Df, Error);
    var Ff = function() {
        return function(a, b) {
            a instanceof Df || (a = new Df(a, Ef));
            b && a.h.push(b);
            throw a;
        }
    };

    function Ef(a) {
        if (!a.length) return a;
        a.push({
            id: "main",
            line: 0
        });
        for (var b = a.length - 1; 0 < b; b--) Ga(a[b].id) && a.splice(b++, 1);
        for (var c = a.length - 1; 0 < c; c--) a[c].line = a[c - 1].line;
        a.splice(0, 1);
        return a
    };
    var If = function(a) {
            function b(r) {
                for (var t = 0; t < r.length; t++) d[r[t]] = !0
            }
            for (var c = [], d = [], e = Gf(a), f = 0; f < kf.length; f++) {
                var g = kf[f],
                    h = Hf(g, e);
                if (h) {
                    for (var m = g.add || [], n = 0; n < m.length; n++) c[m[n]] = !0;
                    b(g.block || [])
                } else null === h && b(g.block || []);
            }
            for (var p = [], q = 0; q < mf.length; q++) c[q] && !d[q] && (p[q] = !0);
            return p
        },
        Hf = function(a, b) {
            for (var c = a["if"] || [], d = 0; d < c.length; d++) {
                var e = b(c[d]);
                if (0 === e) return !1;
                if (2 === e) return null
            }
            for (var f = a.unless || [], g = 0; g < f.length; g++) {
                var h = b(f[g]);
                if (2 === h) return null;
                if (1 === h) return !1
            }
            return !0
        },
        Gf = function(a) {
            var b = [];
            return function(c) {
                void 0 === b[c] && (b[c] = zf(lf[c], a));
                return b[c]
            }
        };
    var Jf = {
        xl: function(a, b) {
            b[Me.fi] && "string" === typeof a && (a = 1 == b[Me.fi] ? a.toLowerCase() : a.toUpperCase());
            b.hasOwnProperty(Me.hi) && null === a && (a = b[Me.hi]);
            b.hasOwnProperty(Me.ji) && void 0 === a && (a = b[Me.ji]);
            b.hasOwnProperty(Me.ii) && !0 === a && (a = b[Me.ii]);
            b.hasOwnProperty(Me.gi) && !1 === a && (a = b[Me.gi]);
            return a
        }
    };
    var Kf = function() {
            this.h = {}
        },
        Mf = function(a, b) {
            var c = Lf.s,
                d;
            null != (d = c.h)[a] || (d[a] = []);
            c.h[a].push(function() {
                return b.apply(null, ja(ta.apply(0, arguments)))
            })
        };

    function Nf(a, b, c, d) {
        if (a)
            for (var e = 0; e < a.length; e++) {
                var f = void 0,
                    g = "A policy function denied the permission request";
                try {
                    f = a[e](b, c, d), g += "."
                } catch (h) {
                    g = "string" === typeof h ? g + (": " + h) : h instanceof Error ? g + (": " + h.message) : g + "."
                }
                if (!f) throw new Bf(c, d, g);
            }
    }

    function Of(a, b, c) {
        return function() {
            var d = arguments[0];
            if (d) {
                var e = a.h[d],
                    f = a.h.all;
                if (e || f) {
                    var g = c.apply(void 0, Array.prototype.slice.call(arguments, 0));
                    Nf(e, b, d, g);
                    Nf(f, b, d, g)
                }
            }
        }
    };
    var Pf = [],
        Qf = function(a) {
            return void 0 == Pf[a] ? !1 : Pf[a]
        };
    var Uf = function() {
            var a = data.permissions || {},
                b = Rf.ctid,
                c = this;
            this.s = new Kf;
            this.h = {};
            var d = Qf(15),
                e = {},
                f = {},
                g = Of(this.s, b, function() {
                    var h = arguments[0];
                    return h && e[h] ? e[h].apply(void 0, Array.prototype.slice.call(arguments, 0)) : {}
                });
            l(a, function(h, m) {
                var n = {};
                l(m, function(q, r) {
                    var t = Sf(q, r);
                    n[q] = t.assert;
                    e[q] || (e[q] = t.K);
                    d && t.sj && !f[q] && (f[q] = t.sj)
                });
                var p;
                d && (p = function(q) {
                    var r = ta.apply(1, arguments);
                    if (!n[q]) throw Tf(q, {}, "The requested additional permission " + q + " is not configured.");
                    g.apply(null, [q].concat(ja(r)))
                });
                c.h[h] = function(q, r) {
                    var t = n[q];
                    if (!t) throw Tf(q, {}, "The requested permission " + q + " is not configured.");
                    var u = Array.prototype.slice.call(arguments, 0);
                    t.apply(void 0, u);
                    g.apply(void 0, u);
                    if (d) {
                        var v = f[q];
                        v && v.apply(null, [p].concat(ja(u.slice(1))))
                    }
                }
            })
        },
        Vf = function(a) {
            return Lf.h[a] || function() {}
        };

    function Sf(a, b) {
        var c = vf(a, b);
        c.vtp_permissionName = a;
        c.vtp_createPermissionError = Tf;
        try {
            return wf(c)
        } catch (d) {
            return {
                assert: function(e) {
                    throw new Bf(e, {}, "Permission " + e + " is unknown.");
                },
                K: function() {
                    if (Qf(15)) throw new Bf(a, {}, "Permission " + a + " is unknown.");
                    for (var e = {}, f = 0; f < arguments.length; ++f) e["arg" + (f + 1)] = arguments[f];
                    return e
                }
            }
        }
    }

    function Tf(a, b, c) {
        return new Bf(a, b, c)
    };
    var Wf = !1;
    var Xf = {};
    Xf.qn = Oa('');
    Xf.Bl = Oa('');
    var Yf = Wf,
        Zf = Xf.Bl,
        $f = Xf.qn;
    var ng = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"];

    function og(a, b) {
        a = String(a);
        b = String(b);
        var c = a.length - b.length;
        return 0 <= c && a.indexOf(b, c) === c
    }
    var pg = new Ka;

    function qg(a, b, c) {
        var d = c ? "i" : void 0;
        try {
            var e = String(b) + d,
                f = pg.get(e);
            f || (f = new RegExp(b, d), pg.set(e, f));
            return f.test(a)
        } catch (g) {
            return !1
        }
    }

    function rg(a, b) {
        return 0 <= String(a).indexOf(String(b))
    }

    function sg(a, b) {
        return String(a) === String(b)
    }

    function tg(a, b) {
        return Number(a) >= Number(b)
    }

    function ug(a, b) {
        return Number(a) <= Number(b)
    }

    function vg(a, b) {
        return Number(a) > Number(b)
    }

    function wg(a, b) {
        return Number(a) < Number(b)
    }

    function xg(a, b) {
        return 0 === String(a).indexOf(String(b))
    };
    var Eg = /^[1-9a-zA-Z_-][1-9a-c][1-9a-v]\d$/;

    function Fg(a, b) {
        for (var c = "", d = !0; 7 < a;) {
            var e = a & 31;
            a >>= 5;
            d ? d = !1 : e |= 32;
            c = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [e] + c
        }
        a <<= 2;
        d || (a |= 32);
        return c = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [a | b] + c
    };
    var Gg = /^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|PixieMap|List|OpaqueValue)$/i,
        Hg = {
            Fn: "function",
            PixieMap: "Object",
            List: "Array"
        },
        J = function(a, b, c) {
            for (var d = 0; d < b.length; d++) {
                var e = Gg.exec(b[d]);
                if (!e) throw Error("Internal Error in " + a);
                var f = e[1],
                    g = "!" === e[2],
                    h = e[3],
                    m = c[d];
                if (null == m) {
                    if (g) throw Error("Error in " + a + ". Required argument " + f + " not supplied.");
                } else if ("*" !== h) {
                    var n = typeof m;
                    m instanceof ed ? n = "Fn" : m instanceof rb ? n = "List" : m instanceof sb ? n = "PixieMap" : m instanceof jd && (n =
                        "OpaqueValue");
                    if (n != h) throw Error("Error in " + a + ". Argument " + f + " has type " + (Hg[n] || n) + ", which does not match required type " + (Hg[h] || h) + ".");
                }
            }
        };

    function Ig(a) {
        return "" + a
    }

    function Jg(a, b) {
        var c = [];
        return c
    };
    var Kg = function(a, b) {
            var c = new ed(a, function() {
                for (var d = Array.prototype.slice.call(arguments, 0), e = 0; e < d.length; e++) d[e] = H(this, d[e]);
                try {
                    return b.apply(this, d)
                } catch (g) {
                    if (od()) throw new qd(g.message);
                    throw g;
                }
            });
            c.Eb();
            return c
        },
        Lg = function(a, b) {
            var c = new sb,
                d;
            for (d in b)
                if (b.hasOwnProperty(d)) {
                    var e = b[d];
                    Fa(e) ? c.set(d, Kg(a + "_" + d, e)) : lb(e) ? c.set(d, Lg(a + "_" + d,
                        e)) : (Ga(e) || k(e) || "boolean" === typeof e) && c.set(d, e)
                }
            c.Eb();
            return c
        };
    var Mg = function(a, b) {
        J(I(this), ["apiName:!string", "message:?string"], arguments);
        var c = {},
            d = new sb;
        return d = Lg("AssertApiSubject", c)
    };
    var Ng = function(a, b) {
        J(I(this), ["actual:?*", "message:?string"], arguments);
        if (a instanceof ld) throw Error("Argument actual cannot have type Promise. Assertions on asynchronous code aren't supported.");
        var c = {},
            d = new sb;
        return d = Lg("AssertThatSubject", c)
    };

    function Og(a) {
        return function() {
            for (var b = [], c = this.h, d = 0; d < arguments.length; ++d) b.push(nd(arguments[d], c));
            return md(a.apply(null, b))
        }
    }
    var Qg = function() {
        for (var a = Math, b = Pg, c = {}, d = 0; d < b.length; d++) {
            var e = b[d];
            a.hasOwnProperty(e) && (c[e] = Og(a[e].bind(a)))
        }
        return c
    };
    var Rg = function(a) {
        var b;
        return b
    };
    var Sg = function(a) {
        var b;
        return b
    };
    var Tg = function(a) {
        try {
            return encodeURI(a)
        } catch (b) {}
    };
    var Ug = function(a) {
        try {
            return encodeURIComponent(a)
        } catch (b) {}
    };

    function Vg(a, b) {
        var c = !1;
        return c
    }
    Vg.D = "internal.evaluateBooleanExpression";
    var $g = function(a) {
        J(I(this), ["message:?string"], arguments);
    };
    var ah = function(a, b) {
        J(I(this), ["min:!number", "max:!number"], arguments);
        return Ja(a, b)
    };
    var bh = function() {
        return (new Date).getTime()
    };
    var ch = function(a) {
        if (null === a) return "null";
        if (a instanceof rb) return "array";
        if (a instanceof ed) return "function";
        if (a instanceof jd) {
            a = a.h;
            if (void 0 === a.constructor || void 0 === a.constructor.name) {
                var b = String(a);
                return b.substring(8, b.length - 1)
            }
            return String(a.constructor.name)
        }
        return typeof a
    };
    var dh = function(a) {
        function b(c) {
            return function(d) {
                try {
                    return c(d)
                } catch (e) {
                    (Yf || $f) && a.call(this, e.message)
                }
            }
        }
        return {
            parse: b(function(c) {
                return md(JSON.parse(c))
            }),
            stringify: b(function(c) {
                return JSON.stringify(nd(c))
            })
        }
    };
    var ih = function(a) {
        return Na(nd(a, this.h))
    };
    var jh = function(a) {
        return Number(nd(a, this.h))
    };
    var kh = function(a) {
        return null === a ? "null" : void 0 === a ? "undefined" : a.toString()
    };
    var lh = function(a, b, c) {
        var d = null,
            e = !1;
        J(I(this), ["tableObj:!List", "keyColumnName:!string", "valueColumnName:!string"], arguments);
        d = new sb;
        for (var f = 0; f < a.length(); f++) {
            var g = a.get(f);
            g instanceof sb && g.has(b) && g.has(c) && (d.set(g.get(b), g.get(c)), e = !0)
        }
        return e ? d : null
    };
    var Pg = "floor ceil round max min abs pow sqrt".split(" ");
    var mh = function() {
            var a = {};
            return {
                Ol: function(b) {
                    return a.hasOwnProperty(b) ? a[b] : void 0
                },
                hn: function(b, c) {
                    a[b] = c
                },
                reset: function() {
                    a = {}
                }
            }
        },
        nh = function(a, b) {
            return function() {
                var c = Array.prototype.slice.call(arguments, 0);
                c.unshift(b);
                return ed.prototype.invoke.apply(a, c)
            }
        },
        oh = function(a, b) {
            J(I(this), ["apiName:!string", "mock:?*"], arguments);
        };
    var ph = {};
    var qh = function(a) {
        var b = new sb;
        if (a instanceof rb)
            for (var c = a.Tb(), d = 0; d < c.length(); d++) {
                var e = c.get(d);
                a.has(e) && b.set(e, a.get(e))
            } else if (a instanceof ed)
                for (var f = hb(a, 1), g = 0; g < f.length; g++) {
                    var h = f[g];
                    b.set(h, a.get(h))
                } else
                    for (var m = 0; m < a.length; m++) b.set(m, a[m]);
        return b
    };
    ph.keys = function(a) {
        J(I(this), ["input:!*"], arguments);
        if (a instanceof rb || a instanceof ed || "string" === typeof a) a = qh(a);
        if (a instanceof sb) return a.Tb();
        return new rb
    };
    ph.values = function(a) {
        J(I(this), ["input:!*"], arguments);
        if (a instanceof rb || a instanceof ed || "string" === typeof a) a = qh(a);
        if (a instanceof sb) return new rb(hb(a, 2));
        return new rb
    };
    ph.entries = function(a) {
        J(I(this), ["input:!*"], arguments);
        if (a instanceof rb || a instanceof ed || "string" === typeof a) a = qh(a);
        if (a instanceof sb) {
            for (var b = hb(a, 3), c = new rb, d = 0; d < b.length; d++) {
                var e = new rb(b[d]);
                c.push(e)
            }
            return c
        }
        return new rb
    };
    ph.freeze = function(a) {
        (a instanceof sb || a instanceof rb || a instanceof ed) && a.Eb();
        return a
    };
    ph.delete = function(a, b) {
        if (a instanceof sb && !a.Hj()) return a.remove(b), !0;
        return !1
    };
    var K = function(a, b, c) {
        var d = a.h.h;
        if (!d) throw Error("Missing program state.");
        if (d.Wm) {
            try {
                d.uj.apply(null, Array.prototype.slice.call(arguments, 1))
            } catch (e) {
                throw Ab("TAGGING", 21), e;
            }
            return
        }
        d.uj.apply(null, Array.prototype.slice.call(arguments, 1))
    };
    var rh = function() {
        this.h = {};
        this.s = {};
    };
    rh.prototype.get = function(a, b) {
        var c = this.h.hasOwnProperty(a) ? this.h[a] : void 0;
        return c
    };
    rh.prototype.add = function(a, b, c) {
        if (this.h.hasOwnProperty(a)) throw "Attempting to add a function which already exists: " + a + ".";
        if (this.s.hasOwnProperty(a)) throw "Attempting to add an API with an existing private API name: " + a + ".";
        this.h[a] = c ? void 0 : Fa(b) ? Kg(a, b) : Lg(a, b)
    };

    function sh(a, b) {
        var c = void 0;
        return c
    };

    function th() {
        var a = {};
        return a
    };
    var vh = function(a) {
            return uh ? C.querySelectorAll(a) : null
        },
        wh = function(a, b) {
            if (!uh) return null;
            if (Element.prototype.closest) try {
                return a.closest(b)
            } catch (e) {
                return null
            }
            var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector,
                d = a;
            if (!C.documentElement.contains(d)) return null;
            do {
                try {
                    if (c.call(d, b)) return d
                } catch (e) {
                    break
                }
                d = d.parentElement || d.parentNode
            } while (null !== d && 1 === d.nodeType);
            return null
        },
        xh = !1;
    if (C.querySelectorAll) try {
        var yh = C.querySelectorAll(":root");
        yh && 1 == yh.length && yh[0] == C.documentElement && (xh = !0)
    } catch (a) {}
    var uh = xh;
    var L = function(a) {
        Ab("GTM", a)
    };
    var N = {
            g: {
                Ea: "ad_personalization",
                J: "ad_storage",
                N: "ad_user_data",
                R: "analytics_storage",
                Va: "region",
                ud: "consent_updated",
                We: "wait_for_update",
                pk: "ads",
                ag: "all",
                qk: "maps",
                rk: "playstore",
                sk: "search",
                tk: "shopping",
                uk: "youtube",
                ki: "app_remove",
                li: "app_store_refund",
                mi: "app_store_subscription_cancel",
                ni: "app_store_subscription_convert",
                oi: "app_store_subscription_renew",
                dg: "add_payment_info",
                eg: "add_shipping_info",
                ac: "add_to_cart",
                bc: "remove_from_cart",
                fg: "view_cart",
                Hb: "begin_checkout",
                fc: "select_item",
                fb: "view_item_list",
                sb: "select_promotion",
                hb: "view_promotion",
                ra: "purchase",
                hc: "refund",
                Fa: "view_item",
                gg: "add_to_wishlist",
                wk: "exception",
                ri: "first_open",
                si: "first_visit",
                sa: "gtag.config",
                Pa: "gtag.get",
                ui: "in_app_purchase",
                ic: "page_view",
                xk: "screen_view",
                vi: "session_start",
                yk: "timing_complete",
                zk: "track_social",
                xd: "user_engagement",
                tb: "gclid",
                wa: "ads_data_redaction",
                ja: "allow_ad_personalization_signals",
                Xe: "allow_custom_scripts",
                Ye: "allow_display_features",
                yd: "allow_enhanced_conversions",
                ib: "allow_google_signals",
                Ga: "allow_interest_groups",
                Ak: "app_id",
                Bk: "app_installer_id",
                Ck: "app_name",
                Dk: "app_version",
                jc: "auid",
                wi: "auto_detection_enabled",
                Ib: "aw_remarketing",
                Ze: "aw_remarketing_only",
                zd: "discount",
                Ad: "aw_feed_country",
                Bd: "aw_feed_language",
                Z: "items",
                Cd: "aw_merchant_id",
                hg: "aw_basket_type",
                Ic: "campaign_content",
                Jc: "campaign_id",
                Kc: "campaign_medium",
                Lc: "campaign_name",
                Mc: "campaign",
                Nc: "campaign_source",
                Oc: "campaign_term",
                ub: "client_id",
                xi: "content_group",
                yi: "content_type",
                Qa: "conversion_cookie_prefix",
                Pc: "conversion_id",
                Ha: "conversion_linker",
                Jb: "conversion_api",
                af: "cookie_deprecation",
                Wa: "cookie_domain",
                Ka: "cookie_expires",
                Xa: "cookie_flags",
                kc: "cookie_name",
                Qc: "cookie_path",
                Ra: "cookie_prefix",
                mc: "cookie_update",
                nc: "country",
                xa: "currency",
                Dd: "customer_lifetime_value",
                Rc: "custom_map",
                zi: "gcldc",
                Ai: "debug_mode",
                ba: "developer_id",
                Bi: "disable_merchant_reported_purchases",
                Sc: "dc_custom_params",
                Ci: "dc_natural_search",
                ig: "dynamic_event_settings",
                jg: "affiliation",
                Ed: "checkout_option",
                bf: "checkout_step",
                kg: "coupon",
                Tc: "item_list_name",
                cf: "list_name",
                Di: "promotions",
                Uc: "shipping",
                df: "tax",
                Fd: "engagement_time_msec",
                Gd: "enhanced_client_id",
                Hd: "enhanced_conversions",
                lg: "enhanced_conversions_automatic_settings",
                Id: "estimated_delivery_date",
                ef: "euid_logged_in_state",
                Vc: "event_callback",
                Ek: "event_category",
                vb: "event_developer_id_string",
                Fk: "event_label",
                mg: "event",
                Jd: "event_settings",
                Kd: "event_timeout",
                Gk: "description",
                Hk: "fatal",
                Ei: "experiments",
                ff: "firebase_id",
                Ld: "first_party_collection",
                Md: "_x_20",
                kb: "_x_19",
                ng: "fledge",
                og: "flight_error_code",
                pg: "flight_error_message",
                Fi: "fl_activity_category",
                Gi: "fl_activity_group",
                qg: "fl_advertiser_id",
                Hi: "fl_ar_dedupe",
                rg: "match_id",
                Ii: "fl_random_number",
                Ji: "tran",
                Ki: "u",
                Nd: "gac_gclid",
                oc: "gac_wbraid",
                sg: "gac_wbraid_multiple_conversions",
                ug: "ga_restrict_domain",
                vg: "ga_temp_client_id",
                Od: "gdpr_applies",
                wg: "geo_granularity",
                wb: "value_callback",
                lb: "value_key",
                Ik: "google_ono",
                Kb: "google_signals",
                xg: "google_tld",
                Pd: "groups",
                yg: "gsa_experiment_id",
                zg: "iframe_state",
                Wc: "ignore_referrer",
                hf: "internal_traffic_results",
                Lb: "is_legacy_converted",
                yb: "is_legacy_loaded",
                Qd: "is_passthrough",
                jf: "_lps",
                La: "language",
                kf: "legacy_developer_id_string",
                Ma: "linker",
                qc: "accept_incoming",
                zb: "decorate_forms",
                W: "domains",
                Mb: "url_position",
                Ag: "method",
                Jk: "name",
                Xc: "new_customer",
                Bg: "non_interaction",
                Li: "optimize_id",
                Mi: "page_hostname",
                Yc: "page_path",
                Na: "page_referrer",
                Ab: "page_title",
                Cg: "passengers",
                Dg: "phone_conversion_callback",
                Ni: "phone_conversion_country_code",
                Eg: "phone_conversion_css_class",
                Oi: "phone_conversion_ids",
                Fg: "phone_conversion_number",
                Gg: "phone_conversion_options",
                Hg: "_protected_audience_enabled",
                Zc: "quantity",
                Rd: "redact_device_info",
                lf: "referral_exclusion_definition",
                Nb: "restricted_data_processing",
                Pi: "retoken",
                Kk: "sample_rate",
                nf: "screen_name",
                Bb: "screen_resolution",
                Qi: "search_term",
                Sa: "send_page_view",
                Ob: "send_to",
                Sd: "server_container_url",
                ad: "session_duration",
                Td: "session_engaged",
                pf: "session_engaged_time",
                Cb: "session_id",
                Ud: "session_number",
                bd: "delivery_postal_code",
                Lk: "temporary_client_id",
                qf: "topmost_url",
                Ri: "tracking_id",
                rf: "traffic_type",
                ya: "transaction_id",
                Pb: "transport_url",
                Ig: "trip_type",
                Qb: "update",
                Db: "url_passthrough",
                Wd: "_user_agent_architecture",
                Xd: "_user_agent_bitness",
                Yd: "_user_agent_full_version_list",
                Zd: "_user_agent_mobile",
                ae: "_user_agent_model",
                be: "_user_agent_platform",
                ce: "_user_agent_platform_version",
                de: "_user_agent_wow64",
                Ba: "user_data",
                Jg: "user_data_auto_latency",
                Kg: "user_data_auto_meta",
                Lg: "user_data_auto_multi",
                Mg: "user_data_auto_selectors",
                Ng: "user_data_auto_status",
                ee: "user_data_mode",
                fe: "user_data_settings",
                Ta: "user_id",
                Ya: "user_properties",
                Si: "_user_region",
                Og: "us_privacy_string",
                ia: "value",
                sc: "wbraid",
                Pg: "wbraid_multiple_conversions",
                Yi: "_host_name",
                Zi: "_in_page_command",
                aj: "_is_passthrough_cid",
                fd: "non_personalized_ads",
                ne: "_sst_parameters",
                jb: "conversion_label",
                Aa: "page_location",
                xb: "global_developer_id_string",
                Vd: "tc_privacy_string"
            }
        },
        Yh = {},
        Zh = Object.freeze((Yh[N.g.ja] = 1, Yh[N.g.Ye] = 1, Yh[N.g.yd] = 1, Yh[N.g.ib] = 1, Yh[N.g.Z] = 1, Yh[N.g.Wa] = 1, Yh[N.g.Ka] = 1, Yh[N.g.Xa] = 1, Yh[N.g.kc] = 1, Yh[N.g.Qc] = 1, Yh[N.g.Ra] =
            1, Yh[N.g.mc] = 1, Yh[N.g.Rc] = 1, Yh[N.g.ba] = 1, Yh[N.g.ig] = 1, Yh[N.g.Vc] = 1, Yh[N.g.Jd] = 1, Yh[N.g.Kd] = 1, Yh[N.g.Ld] = 1, Yh[N.g.ug] = 1, Yh[N.g.Kb] = 1, Yh[N.g.xg] = 1, Yh[N.g.Pd] = 1, Yh[N.g.hf] = 1, Yh[N.g.Lb] = 1, Yh[N.g.yb] = 1, Yh[N.g.Ma] = 1, Yh[N.g.lf] = 1, Yh[N.g.Nb] = 1, Yh[N.g.Sa] = 1, Yh[N.g.Ob] = 1, Yh[N.g.Sd] = 1, Yh[N.g.ad] = 1, Yh[N.g.pf] = 1, Yh[N.g.bd] = 1, Yh[N.g.Pb] = 1, Yh[N.g.Qb] = 1, Yh[N.g.fe] = 1, Yh[N.g.Ya] = 1, Yh[N.g.ne] = 1, Yh));
    Object.freeze([N.g.Aa, N.g.Na, N.g.Ab, N.g.La, N.g.nf, N.g.Ta, N.g.ff, N.g.xi]);
    var $h = {},
        ai = Object.freeze(($h[N.g.ki] = 1, $h[N.g.li] = 1, $h[N.g.mi] = 1, $h[N.g.ni] = 1, $h[N.g.oi] = 1, $h[N.g.ri] = 1, $h[N.g.si] = 1, $h[N.g.ui] = 1, $h[N.g.vi] = 1, $h[N.g.xd] = 1, $h)),
        bi = {},
        ci = Object.freeze((bi[N.g.dg] = 1, bi[N.g.eg] = 1, bi[N.g.ac] = 1, bi[N.g.bc] = 1, bi[N.g.fg] = 1, bi[N.g.Hb] = 1, bi[N.g.fc] = 1, bi[N.g.fb] = 1, bi[N.g.sb] = 1, bi[N.g.hb] = 1, bi[N.g.ra] = 1, bi[N.g.hc] = 1, bi[N.g.Fa] = 1, bi[N.g.gg] = 1, bi)),
        di = Object.freeze([N.g.ja, N.g.ib, N.g.mc, N.g.Wc, N.g.Qb]),
        ei = Object.freeze([].concat(di)),
        fi = Object.freeze([N.g.Ka, N.g.Kd, N.g.ad, N.g.pf,
            N.g.Fd
        ]),
        gi = Object.freeze([].concat(fi)),
        hi = {},
        ii = (hi[N.g.J] = "1", hi[N.g.R] = "2", hi[N.g.N] = "3", hi[N.g.Ea] = "4", hi),
        ji = {},
        ki = Object.freeze((ji[N.g.ja] = 1, ji[N.g.yd] = 1, ji[N.g.Ga] = 1, ji[N.g.Ib] = 1, ji[N.g.Ze] = 1, ji[N.g.zd] = 1, ji[N.g.Ad] = 1, ji[N.g.Bd] = 1, ji[N.g.Z] = 1, ji[N.g.Cd] = 1, ji[N.g.Qa] = 1, ji[N.g.Ha] = 1, ji[N.g.Wa] = 1, ji[N.g.Ka] = 1, ji[N.g.Xa] = 1, ji[N.g.Ra] = 1, ji[N.g.xa] = 1, ji[N.g.Dd] = 1, ji[N.g.ba] = 1, ji[N.g.Bi] = 1, ji[N.g.Hd] = 1, ji[N.g.Id] = 1, ji[N.g.ff] = 1, ji[N.g.Ld] = 1, ji[N.g.Lb] = 1, ji[N.g.yb] = 1, ji[N.g.La] = 1, ji[N.g.Xc] = 1, ji[N.g.Aa] =
            1, ji[N.g.Na] = 1, ji[N.g.Dg] = 1, ji[N.g.Eg] = 1, ji[N.g.Fg] = 1, ji[N.g.Gg] = 1, ji[N.g.Nb] = 1, ji[N.g.Sa] = 1, ji[N.g.Ob] = 1, ji[N.g.Sd] = 1, ji[N.g.bd] = 1, ji[N.g.ya] = 1, ji[N.g.Pb] = 1, ji[N.g.Qb] = 1, ji[N.g.Db] = 1, ji[N.g.Ba] = 1, ji[N.g.Ta] = 1, ji[N.g.ia] = 1, ji)),
        li = {},
        mi = Object.freeze((li[N.g.sk] = "s", li[N.g.uk] = "y", li[N.g.rk] = "p", li[N.g.tk] = "h", li[N.g.pk] = "a", li[N.g.qk] = "m", li));
    Object.freeze(N.g);
    var ni = {},
        oi = z.google_tag_manager = z.google_tag_manager || {},
        pi = Math.random();
    ni.Ug = "41h0";
    ni.me = Number("0") || 0;
    ni.fa = "dataLayer";
    ni.mk = "ChEIgMG4rQYQq4eU6eiO1vTvARIhANfDHr9f7m5Bp+/+EjV9ljqrbEgWotKgUh5VqTilH+fJGgKMFQ\x3d\x3d";
    var qi = {
            __cl: 1,
            __ecl: 1,
            __ehl: 1,
            __evl: 1,
            __fal: 1,
            __fil: 1,
            __fsl: 1,
            __hl: 1,
            __jel: 1,
            __lcl: 1,
            __sdl: 1,
            __tl: 1,
            __ytl: 1
        },
        ri = {
            __paused: 1,
            __tg: 1
        },
        si;
    for (si in qi) qi.hasOwnProperty(si) && (ri[si] = 1);
    var ti = Oa(""),
        ui, vi = !1;
    ui = vi;
    var wi, xi = !1;
    wi = xi;
    var yi, zi = !1;
    yi = zi;
    var Ai, Bi = !1;
    Ai = Bi;
    ni.wd = "www.googletagmanager.com";
    var Ci = "" + ni.wd + (ui ? "/gtag/js" : "/gtm.js"),
        Di = null,
        Ei = null,
        Fi = {},
        Gi = {},
        Hi = function() {
            var a = oi.sequence || 1;
            oi.sequence = a + 1;
            return a
        };
    ni.lk = "";
    var Ii = "";
    ni.zf = Ii;
    var Ji = new function() {
        this.h = "";
        this.s = !1;
        this.C = ""
    };
    var Ki = new Ka,
        Li = {},
        Mi = {},
        Pi = {
            name: ni.fa,
            set: function(a, b) {
                nb($a(a, b), Li);
                Ni()
            },
            get: function(a) {
                return Oi(a, 2)
            },
            reset: function() {
                Ki = new Ka;
                Li = {};
                Ni()
            }
        },
        Oi = function(a, b) {
            return 2 != b ? Ki.get(a) : Qi(a)
        },
        Qi = function(a, b) {
            var c = a.split(".");
            b = b || [];
            for (var d = Li, e = 0; e < c.length; e++) {
                if (null === d) return !1;
                if (void 0 === d) break;
                d = d[c[e]];
                if (-1 !== b.indexOf(d)) return
            }
            return d
        },
        Ri = function(a, b) {
            Mi.hasOwnProperty(a) || (Ki.set(a, b), nb($a(a, b), Li), Ni())
        },
        Si = function() {
            for (var a = ["gtm.allowlist", "gtm.blocklist", "gtm.whitelist",
                    "gtm.blacklist", "tagTypeBlacklist"
                ], b = 0; b < a.length; b++) {
                var c = a[b],
                    d = Oi(c, 1);
                if (Ha(d) || lb(d)) d = nb(d);
                Mi[c] = d
            }
        },
        Ni = function(a) {
            l(Mi, function(b, c) {
                Ki.set(b, c);
                nb($a(b), Li);
                nb($a(b, c), Li);
                a && delete Mi[b]
            })
        },
        Ti = function(a, b) {
            var c, d = 1 !== (void 0 === b ? 2 : b) ? Qi(a) : Ki.get(a);
            "array" === jb(d) || "object" === jb(d) ? c = nb(d) : c = d;
            return c
        };
    var Xi = [];

    function Yi(a) {
        switch (a) {
            case 24:
                return 3;
            case 45:
                return 14;
            case 56:
                return 11;
            case 57:
                return 12;
            case 61:
                return 13;
            case 58:
                return 15;
            case 97:
                return 16;
            case 100:
                return 17
        }
    }

    function Q(a) {
        Xi[a] = !0;
        var b = Yi(a);
        b && (Pf[b] = !0)
    }
    Q(5);
    Q(6);
    Q(7);
    Q(9);
    Q(10);
    Q(14);
    Q(11);
    Q(15);
    Q(18);
    Q(19);
    Q(20);
    Q(22);
    Q(23);
    Q(28);
    Q(29);
    Q(30);
    Q(32);
    Q(33);
    Q(37);
    Q(39);
    Q(42);
    Q(43);
    Q(44);
    Q(46);
    Q(47);
    Q(48);
    Q(50);
    Q(51);
    Q(52);
    Q(53);

    Q(58);
    Q(60);
    Q(63);
    Q(64);
    Q(65);

    Q(70);
    Q(79);
    Q(82);
    Q(83);
    Q(85);
    Q(86);
    Q(91);
    Q(92);
    Q(101);
    Q(100);

    function R(a) {
        return !!Xi[a]
    }
    var bj = function(a) {
        Ab("HEALTH", a)
    };
    var cj;
    try {
        cj = JSON.parse(yb("eyIwIjoiUEsiLCIxIjoiUEstU0QiLCIyIjpmYWxzZSwiMyI6Imdvb2dsZS5jb20ucGsiLCI0IjoiIiwiNSI6dHJ1ZSwiNiI6ZmFsc2UsIjciOiJhZF9zdG9yYWdlfGFuYWx5dGljc19zdG9yYWdlfGFkX3VzZXJfZGF0YXxhZF9wZXJzb25hbGl6YXRpb24ifQ"))
    } catch (a) {
        L(123), bj(2), cj = {}
    }
    var dj = function() {
            return cj["0"] || ""
        },
        ej = function() {
            return cj["1"] || ""
        },
        fj = function() {
            var a = !1;
            return a
        },
        gj = function() {
            var a = "";
            return a
        },
        hj = function() {
            var a = !1;
            return a
        },
        ij = function() {
            var a = "";
            return a
        };
    var oj = new function(a, b) {
        this.h = a;
        this.defaultValue = void 0 === b ? !1 : b
    }(1933);
    var pj = function(a) {
        pj[" "](a);
        return a
    };
    pj[" "] = function() {};
    var rj = function() {
        var a = qj,
            b = "th";
        if (a.th && a.hasOwnProperty(b)) return a.th;
        var c = new a;
        return a.th = c
    };
    var qj = function() {
        var a = {};
        this.h = function() {
            var b = oj.h,
                c = oj.defaultValue;
            return null != a[b] ? a[b] : c
        };
        this.s = function() {
            a[oj.h] = !0
        }
    };
    var sj = !1,
        tj = !1,
        uj = {},
        vj = {},
        wj = !1,
        xj = {
            ad_storage: !1,
            ad_user_data: !1,
            ad_personalization: !1
        };

    function yj() {
        var a = Fc("google_tag_data", {});
        return a.ics = a.ics || new zj
    }
    var zj = function() {
        this.entries = {};
        this.cps = {};
        this.waitPeriodTimedOut = this.wasSetLate = this.accessedAny = this.accessedDefault = this.usedSetCps = this.usedImplicit = this.usedUpdate = this.usedDefault = this.usedDeclare = this.active = !1;
        this.h = []
    };
    zj.prototype.default = function(a, b, c, d, e, f) {
        this.usedDefault || this.usedDeclare || !this.accessedDefault && !this.accessedAny || (this.wasSetLate = !0);
        this.usedDefault = this.active = !0;
        Ab("TAGGING", 19);
        void 0 == b ? Ab("TAGGING", 18) : Aj(this, a, "granted" === b, c, d, e, f)
    };
    zj.prototype.waitForUpdate = function(a, b) {
        for (var c = 0; c < a.length; c++) Aj(this, a[c], void 0, void 0, "", "", b)
    };
    var Aj = function(a, b, c, d, e, f, g) {
        var h = a.entries,
            m = h[b] || {},
            n = m.region,
            p = d && k(d) ? d.toUpperCase() : void 0;
        e = e.toUpperCase();
        f = f.toUpperCase();
        if (Bj(p, n, e, f)) {
            var q = !!(g && 0 < g && void 0 === m.update),
                r = {
                    region: p,
                    declare_region: m.declare_region,
                    implicit: m.implicit,
                    default: void 0 !== c ? c : m.default,
                    declare: m.declare,
                    update: m.update,
                    quiet: q
                };
            if ("" !== e || !1 !== m.default) h[b] = r;
            q && z.setTimeout(function() {
                h[b] === r && r.quiet && (Ab("TAGGING", 2), a.waitPeriodTimedOut = !0, a.clearTimeout(b, void 0), a.notifyListeners())
            }, g)
        }
    };
    aa = zj.prototype;
    aa.clearTimeout = function(a, b) {
        var c = [a],
            d;
        for (d in uj) uj.hasOwnProperty(d) && uj[d] === a && c.push(d);
        var e = this.entries[a] || {},
            f = this.getConsentState(a);
        if (e.quiet) {
            e.quiet = !1;
            for (var g = fa(c), h = g.next(); !h.done; h = g.next()) Cj(this, h.value)
        } else if (void 0 !== b && f !== b)
            for (var m = fa(c), n = m.next(); !n.done; n = m.next()) Cj(this, n.value)
    };
    aa.update = function(a, b) {
        this.usedDefault || this.usedDeclare || this.usedUpdate || !this.accessedAny || (this.wasSetLate = !0);
        this.usedUpdate = this.active = !0;
        if (void 0 != b) {
            var c = this.getConsentState(a),
                d = this.entries;
            (d[a] = d[a] || {}).update = "granted" === b;
            this.clearTimeout(a, c)
        }
    };
    aa.declare = function(a, b, c, d, e) {
        this.usedDeclare = this.active = !0;
        var f = this.entries,
            g = f[a] || {},
            h = g.declare_region,
            m = c && k(c) ? c.toUpperCase() : void 0;
        d = d.toUpperCase();
        e = e.toUpperCase();
        if (Bj(m, h, d, e)) {
            var n = {
                region: g.region,
                declare_region: m,
                declare: "granted" === b,
                implicit: g.implicit,
                default: g.default,
                update: g.update,
                quiet: g.quiet
            };
            if ("" !== d || !1 !== g.declare) f[a] = n
        }
    };
    aa.implicit = function(a, b) {
        this.usedImplicit = !0;
        var c = this.entries,
            d = c[a] = c[a] || {};
        !1 !== d.implicit && (d.implicit = "granted" === b)
    };
    aa.getConsentState = function(a) {
        var b = this.entries,
            c = b[a] || {},
            d = c.update;
        if (void 0 !== d) return d ? 1 : 2;
        d = c.default;
        if (void 0 !== d) return d ? 1 : 2;
        if (uj.hasOwnProperty(a)) {
            var e = b[uj[a]] || {};
            d = e.update;
            if (void 0 !== d) return d ? 1 : 2;
            d = e.default;
            if (void 0 !== d) return d ? 1 : 2
        }
        d = c.declare;
        if (void 0 !== d) return d ? 1 : 2;
        if (Qf(3)) {
            d = c.implicit;
            if (void 0 !== d) return d ? 3 : 4;
            if (xj.hasOwnProperty(a)) return Ab("TAGGING", 22), xj[a] ? 3 : 4
        }
        return 0
    };
    aa.setCps = function(a, b, c, d, e) {
        Dj(this.cps, a, b, c, d, e) && (this.usedSetCps = !0)
    };
    aa.addListener = function(a, b) {
        this.h.push({
            consentTypes: a,
            Gl: b
        })
    };
    var Cj = function(a, b) {
        for (var c = 0; c < a.h.length; ++c) {
            var d = a.h[c];
            Ha(d.consentTypes) && -1 !== d.consentTypes.indexOf(b) && (d.Nj = !0)
        }
    };
    zj.prototype.notifyListeners = function(a, b) {
        for (var c = 0; c < this.h.length; ++c) {
            var d = this.h[c];
            if (d.Nj) {
                d.Nj = !1;
                try {
                    d.Gl({
                        consentEventId: a,
                        consentPriorityId: b
                    })
                } catch (e) {}
            }
        }
    };

    function Bj(a, b, c, d) {
        return "" === c || a === d ? !0 : a === c ? b !== d : !a && !b
    }

    function Dj(a, b, c, d, e, f) {
        var g = a[b] || {},
            h = g.region,
            m = d && k(d) ? d.toUpperCase() : void 0;
        e = e.toUpperCase();
        f = f.toUpperCase();
        if (Bj(m, h, e, f)) {
            var n = {
                enabled: "granted" === c,
                region: m
            };
            if ("" !== e || !1 !== g.enabled) return a[b] = n, !0
        }
        return !1
    }
    var Ej = function(a) {
            var b = yj();
            b.accessedAny = !0;
            return (k(a) ? [a] : a).every(function(c) {
                switch (b.getConsentState(c)) {
                    case 1:
                    case 3:
                        return !0;
                    case 2:
                    case 4:
                        return !1;
                    default:
                        return !0
                }
            })
        },
        Fj = function(a) {
            var b = yj();
            b.accessedAny = !0;
            return b.getConsentState(a)
        },
        Gj = function(a) {
            var b = yj();
            b.accessedAny = !0;
            return !(b.entries[a] || {}).quiet
        },
        Hj = function() {
            if (!rj().h()) return !1;
            var a = yj();
            a.accessedAny = !0;
            return a.active
        },
        Ij = function(a, b) {
            yj().addListener(a, b)
        },
        Jj = function(a, b) {
            yj().notifyListeners(a, b)
        },
        Kj = function(a,
            b) {
            function c() {
                for (var e = 0; e < b.length; e++)
                    if (!Gj(b[e])) return !0;
                return !1
            }
            if (c()) {
                var d = !1;
                Ij(b, function(e) {
                    d || c() || (d = !0, a(e))
                })
            } else a({})
        },
        Lj = function(a, b) {
            function c() {
                for (var h = [], m = 0; m < e.length; m++) {
                    var n = e[m];
                    Ej(n) && !f[n] && h.push(n)
                }
                return h
            }

            function d(h) {
                for (var m = 0; m < h.length; m++) f[h[m]] = !0
            }
            var e = k(b) ? [b] : b,
                f = {},
                g = c();
            g.length !== e.length && (d(g), Ij(e, function(h) {
                function m(q) {
                    0 !== q.length && (d(q), h.consentTypes = q, a(h))
                }
                var n = c();
                if (0 !== n.length) {
                    var p = Object.keys(f).length;
                    n.length + p >= e.length ?
                        m(n) : z.setTimeout(function() {
                            m(c())
                        }, 500)
                }
            }))
        };

    function Mj() {}

    function Nj() {};
    var Oj = [N.g.J, N.g.R, N.g.N, N.g.Ea],
        Pj = function(a) {
            for (var b = a[N.g.Va], c = Array.isArray(b) ? b : [b], d = {
                    Ce: 0
                }; d.Ce < c.length; d = {
                    Ce: d.Ce
                }, ++d.Ce) l(a, function(e) {
                return function(f, g) {
                    if (f !== N.g.Va) {
                        var h = c[e.Ce],
                            m = dj(),
                            n = ej();
                        tj = !0;
                        sj && Ab("TAGGING", 20);
                        yj().declare(f, g, h, m, n)
                    }
                }
            }(d))
        },
        Qj = function(a) {
            var b = a[N.g.Va];
            b && L(40);
            var c = a[N.g.We];
            c && L(41);
            for (var d = Ha(b) ? b : [b], e = {
                    De: 0
                }; e.De < d.length; e = {
                    De: e.De
                }, ++e.De) l(a, function(f) {
                return function(g, h) {
                    if (g !== N.g.Va && g !== N.g.We) {
                        var m = d[f.De],
                            n = Number(c),
                            p = dj(),
                            q = ej();
                        sj = !0;
                        tj && Ab("TAGGING", 20);
                        yj().default(g, h, m, p, q, n)
                    }
                }
            }(e))
        },
        Rj = function(a, b) {
            l(a, function(c, d) {
                sj = !0;
                tj && Ab("TAGGING", 20);
                yj().update(c, d)
            });
            Jj(b.eventId, b.priorityId)
        },
        Sj = function(a) {
            for (var b = a[N.g.Va], c = Array.isArray(b) ? b : [b], d = {
                    Ee: 0
                }; d.Ee < c.length; d = {
                    Ee: d.Ee
                }, ++d.Ee) l(a, function(e) {
                return function(f, g) {
                    if (f !== N.g.Va) {
                        var h = c[e.Ee],
                            m = dj(),
                            n = ej();
                        yj().setCps(f, g, h, m, n)
                    }
                }
            }(d))
        },
        Tj = function(a) {
            for (var b = a[N.g.Va], c = Array.isArray(b) ? b : [b], d = {
                    kd: 0
                }; d.kd < c.length; d = {
                    kd: d.kd
                }, ++d.kd) a.hasOwnProperty(N.g.ag) &&
                l(mi, function(e) {
                    return function(f) {
                        Dj(vj, f, a[N.g.ag], c[e.kd], dj(), ej()) && (wj = !0)
                    }
                }(d)), l(a, function(e) {
                    return function(f, g) {
                        f !== N.g.Va && f !== N.g.ag && Dj(vj, f, g, c[e.kd], dj(), ej()) && (wj = !0)
                    }
                }(d))
        },
        Uj = function(a) {
            Array.isArray(a) || (a = [a]);
            return a.every(function(b) {
                return Ej(b)
            })
        },
        Vj = function(a, b) {
            Ij(a, b)
        },
        Wj = function(a, b) {
            Lj(a, b)
        },
        Xj = function(a, b) {
            Kj(a, b)
        },
        Yj = function() {
            var a = [N.g.J, N.g.Ea, N.g.N];
            yj().waitForUpdate(a, 500)
        },
        Zj = function(a) {
            for (var b = fa(a), c = b.next(); !c.done; c = b.next()) {
                var d = c.value;
                yj().clearTimeout(d,
                    void 0)
            }
            Jj()
        };
    var ak = function() {
        function a(b) {
            oi.pscdl = b
        }
        if (void 0 === oi.pscdl) try {
            "cookieDeprecationLabel" in Dc ? (a("pending"), Dc.cookieDeprecationLabel.getValue().then(a)) : a("noapi")
        } catch (b) {
            a("error")
        }
    };
    var bk = /[A-Z]+/,
        ck = /\s/,
        dk = function(a, b) {
            if (k(a)) {
                a = Qa(a);
                var c = a.indexOf("-");
                if (!(0 > c)) {
                    var d = a.substring(0, c);
                    if (bk.test(d)) {
                        var e = a.substring(c + 1),
                            f;
                        if (b) {
                            var g = function(n) {
                                var p = n.indexOf("/");
                                return 0 > p ? [n] : [n.substring(0, p), n.substring(p + 1)]
                            };
                            f = g(e);
                            if ("DC" === d && 2 === f.length) {
                                var h = g(f[1]);
                                2 === h.length && (f[1] = h[0], f.push(h[1]))
                            }
                        } else {
                            f = e.split("/");
                            for (var m = 0; m < f.length; m++)
                                if (!f[m] || ck.test(f[m]) && ("AW" !== d || 1 !== m)) return
                        }
                        return {
                            id: a,
                            prefix: d,
                            da: d + "-" + f[0],
                            P: f
                        }
                    }
                }
            }
        },
        fk = function(a, b) {
            for (var c = {}, d = 0; d < a.length; ++d) {
                var e = dk(a[d], b);
                e && (c[e.id] = e)
            }
            ek(c);
            var f = [];
            l(c, function(g, h) {
                f.push(h)
            });
            return f
        };

    function ek(a) {
        var b = [],
            c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                "AW" === d.prefix && d.P[1] && b.push(d.da)
            }
        for (var e = 0; e < b.length; ++e) delete a[b[e]]
    };
    var gk = function(a) {
            var b = String(a[Me.ka] || "").replace(/_/g, "");
            0 === b.indexOf("cvt") && (b = "cvt");
            return b
        },
        hk = 0 <= z.location.search.indexOf("?gtm_latency=") || 0 <= z.location.search.indexOf("&gtm_latency=");
    var jk = function(a, b) {
            var c = ik();
            c.pending || (c.pending = []);
            Ia(c.pending, function(d) {
                return d.target.ctid === a.ctid && d.target.isDestination === a.isDestination
            }) || c.pending.push({
                target: a,
                onLoad: b
            })
        },
        kk = function() {
            this.container = {};
            this.destination = {};
            this.canonical = {};
            this.pending = [];
            this.siloed = []
        },
        ik = function() {
            var a = Fc("google_tag_data", {}),
                b = a.tidr;
            b || (b = new kk, a.tidr = b);
            return b
        };
    var lk = {},
        mk = !1,
        Rf = {
            ctid: "GTM-V9L7",
            Ef: "159551",
            Lj: "GTM-V9L7",
            Mj: "GTM-V9L7"
        };
    lk.ie = Oa("");
    var pk = function() {
            var a = nk();
            return mk ? a.map(ok) : a
        },
        rk = function() {
            var a = qk();
            return mk ? a.map(ok) : a
        },
        tk = function() {
            return sk(Rf.ctid)
        },
        uk = function() {
            return sk(Rf.Ef || "_" + Rf.ctid)
        },
        nk = function() {
            return Rf.Lj ? Rf.Lj.split("|") : [Rf.ctid]
        },
        qk = function() {
            return Rf.Mj ? Rf.Mj.split("|") : []
        },
        vk = function(a) {
            var b = ik();
            return a.isDestination ? b.destination[a.ctid] : b.container[a.ctid]
        },
        sk = function(a) {
            return mk ? ok(a) : a
        },
        ok = function(a) {
            return "siloed_" + a
        },
        wk = function(a) {
            a = String(a);
            return mk && 0 === a.indexOf("siloed_") ?
                a.substring(7) : a
        },
        xk = function() {
            var a = !1;
            if (a) {
                var b = ik();
                if (b.siloed) {
                    for (var c = [], d = nk(), e = qk(), f = {}, g = 0; g < b.siloed.length; f = {
                            Ff: void 0
                        }, g++) f.Ff = b.siloed[g], !mk && Ia(f.Ff.isDestination ? e : d, function(h) {
                        return function(m) {
                            return m === h.Ff.ctid
                        }
                    }(f)) ? mk = !0 : c.push(f.Ff);
                    b.siloed = c
                }
            }
        };

    function yk() {
        var a = ik();
        if (a.pending) {
            for (var b, c = [], d = !1, e = pk(), f = rk(), g = {}, h = 0; h < a.pending.length; g = {
                    Oe: void 0
                }, h++) g.Oe = a.pending[h], Ia(g.Oe.target.isDestination ? f : e, function(m) {
                return function(n) {
                    return n === m.Oe.target.ctid
                }
            }(g)) ? d || (b = g.Oe.onLoad, d = !0) : c.push(g.Oe);
            a.pending = c;
            if (b) try {
                b(uk())
            } catch (m) {}
        }
    }
    var zk = function() {
            for (var a = ik(), b = pk(), c = 0; c < b.length; c++) {
                var d = a.container[b[c]];
                d ? (d.state = 2, d.containers = pk(), d.destinations = rk()) : a.container[b[c]] = {
                    state: 2,
                    containers: pk(),
                    destinations: rk()
                }
            }
            for (var e = rk(), f = 0; f < e.length; f++) {
                var g = a.destination[e[f]];
                g && 0 === g.state && L(93);
                g ? (g.state = 2, g.containers = pk(), g.destinations = rk()) : a.destination[e[f]] = {
                    state: 2,
                    containers: pk(),
                    destinations: rk()
                }
            }
            a.canonical[uk()] = {};
            yk()
        },
        Ak = function(a) {
            return !!ik().container[a]
        },
        Bk = function(a) {
            var b = ik().destination[a];
            return !!b && !!b.state
        },
        Ck = function() {
            return {
                ctid: tk(),
                isDestination: lk.ie
            }
        };

    function Dk(a) {
        var b = ik();
        (b.siloed = b.siloed || []).push(a)
    }
    var Ek = function() {
            var a = ik().container,
                b;
            for (b in a)
                if (a.hasOwnProperty(b) && 1 === a[b].state) return !0;
            return !1
        },
        Fk = function() {
            var a = {};
            l(ik().destination, function(b, c) {
                0 === c.state && (a[b] = c)
            });
            return a
        },
        Gk = function(a) {
            return !!(a && a.parent && a.context && 1 === a.context.source && 0 !== a.parent.ctid.indexOf("GTM-"))
        };
    var Hk = {
            sampleRate: "0.005000",
            hk: "",
            gk: Number("5"),
            ao: Number("")
        },
        Ik = [];

    function Jk(a) {
        Ik.push(a)
    }
    var Kk = !1,
        Lk;
    if (!(Lk = hk)) {
        var Mk = Math.random(),
            Nk = Hk.sampleRate;
        Lk = Mk < Number(Nk)
    }
    var Ok = Lk,
        Pk = "https://www.googletagmanager.com/a?id=" + Rf.ctid,
        Qk = void 0,
        Rk = {},
        Sk = void 0,
        Tk = new function() {
            var a = 5;
            0 < Hk.gk && (a = Hk.gk);
            this.h = 0;
            this.C = [];
            this.s = a
        },
        Uk = 1E3;

    function Vk(a, b) {
        var c = Qk;
        if (void 0 === c)
            if (b) c = Hi();
            else return "";
        for (var d = [Pk], e = 0; e < Ik.length; e++) {
            var f = Ik[e]({
                eventId: c,
                Hc: !!a,
                Vj: function() {
                    Kk = !0
                }
            });
            "&" === f[0] && d.push(f)
        }
        d.push("&z=0");
        return d.join("")
    }

    function Wk() {
        Sk && (z.clearTimeout(Sk), Sk = void 0);
        if (void 0 !== Qk && Xk) {
            var a;
            (a = Rk[Qk]) || (a = Tk.h < Tk.s ? !1 : 1E3 > Ta() - Tk.C[Tk.h % Tk.s]);
            if (a || 0 >= Uk--) L(1), Rk[Qk] = !0;
            else {
                var b = Tk.h++ % Tk.s;
                Tk.C[b] = Ta();
                var c = Vk(!0);
                Nc(c);
                if (Kk) {
                    var d = c.replace("/a?", "/td?");
                    Nc(d)
                }
                Xk = Kk = !1
            }
        }
    }
    var Xk = !1;

    function Yk(a) {
        Rk[a] || (a !== Qk && (Wk(), Qk = a), Xk = !0, Sk || (Sk = z.setTimeout(Wk, 500)), 2022 <= Vk().length && Wk())
    }
    var Zk = Ja();

    function $k() {
        Zk = Ja()
    }

    function al() {
        return ["&v=3&t=t", "&pid=" + Zk].join("")
    };
    var bl = "",
        cl = [];

    function dl(a) {
        var b = "";
        bl && (b = "&dl=" + encodeURIComponent(bl));
        0 < cl.length && (b += "&tdp=" + cl.join("."));
        a.Hc && (bl = "", cl.length = 0, b && a.Vj());
        return b
    };
    var el = [];

    function fl(a) {
        if (!el.length) return "";
        var b = "&tdc=" + el.join("!");
        a.Hc && (a.Vj(), el.length = 0);
        return b
    };
    var gl = /:[0-9]+$/,
        hl = /^\d+\.fls\.doubleclick\.net$/,
        il = function(a, b, c, d) {
            for (var e = [], f = fa(a.split("&")), g = f.next(); !g.done; g = f.next()) {
                var h = fa(g.value.split("=")),
                    m = h.next().value,
                    n = ha(h);
                if (decodeURIComponent(m.replace(/\+/g, " ")) === b) {
                    var p = n.join("=");
                    if (!c) return d ? p : decodeURIComponent(p.replace(/\+/g, " "));
                    e.push(d ? p : decodeURIComponent(p.replace(/\+/g, " ")))
                }
            }
            return c ? e : void 0
        },
        ll = function(a, b, c, d, e) {
            b && (b = String(b).toLowerCase());
            if ("protocol" === b || "port" === b) a.protocol = jl(a.protocol) || jl(z.location.protocol);
            "port" === b ? a.port = String(Number(a.hostname ? a.port : z.location.port) || ("http" === a.protocol ? 80 : "https" === a.protocol ? 443 : "")) : "host" === b && (a.hostname = (a.hostname || z.location.hostname).replace(gl, "").toLowerCase());
            return kl(a, b, c, d, e)
        },
        kl = function(a, b, c, d, e) {
            var f, g = jl(a.protocol);
            b && (b = String(b).toLowerCase());
            switch (b) {
                case "url_no_fragment":
                    f = ml(a);
                    break;
                case "protocol":
                    f = g;
                    break;
                case "host":
                    f = a.hostname.replace(gl, "").toLowerCase();
                    if (c) {
                        var h = /^www\d*\./.exec(f);
                        h && h[0] && (f = f.substr(h[0].length))
                    }
                    break;
                case "port":
                    f = String(Number(a.port) || ("http" === g ? 80 : "https" === g ? 443 : ""));
                    break;
                case "path":
                    a.pathname || a.hostname || Ab("TAGGING", 1);
                    f = "/" === a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
                    var m = f.split("/");
                    0 <= (d || []).indexOf(m[m.length - 1]) && (m[m.length - 1] = "");
                    f = m.join("/");
                    break;
                case "query":
                    f = a.search.replace("?", "");
                    e && (f = il(f, e, !1));
                    break;
                case "extension":
                    var n = a.pathname.split(".");
                    f = 1 < n.length ? n[n.length - 1] : "";
                    f = f.split("/")[0];
                    break;
                case "fragment":
                    f = a.hash.replace("#", "");
                    break;
                default:
                    f =
                        a && a.href
            }
            return f
        },
        jl = function(a) {
            return a ? a.replace(":", "").toLowerCase() : ""
        },
        ml = function(a) {
            var b = "";
            if (a && a.href) {
                var c = a.href.indexOf("#");
                b = 0 > c ? a.href : a.href.substr(0, c)
            }
            return b
        },
        nl = {},
        ol = 0,
        ql = function(a) {
            if (Qf(17)) {
                var b = nl[a];
                b || (b = pl(a), 5 > ol && (nl[a] = b, ol++));
                return b
            }
            return pl(a)
        },
        pl = function(a) {
            var b = C.createElement("a");
            a && (b.href = a);
            var c = b.pathname;
            "/" !== c[0] && (a || Ab("TAGGING", 1), c = "/" + c);
            var d = b.hostname.replace(gl, "");
            return {
                href: b.href,
                protocol: b.protocol,
                host: b.host,
                hostname: d,
                pathname: c,
                search: b.search,
                hash: b.hash,
                port: b.port
            }
        },
        rl = function(a) {
            function b(n) {
                var p = n.split("=")[0];
                return 0 > d.indexOf(p) ? n : p + "=0"
            }

            function c(n) {
                return n.split("&").map(b).filter(function(p) {
                    return void 0 !== p
                }).join("&")
            }
            var d = "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" "),
                e = ql(a),
                f = a.split(/[?#]/)[0],
                g = e.search,
                h = e.hash;
            "?" === g[0] && (g = g.substring(1));
            "#" === h[0] && (h = h.substring(1));
            g = c(g);
            h = c(h);
            "" !== g && (g = "?" + g);
            "" !== h && (h = "#" + h);
            var m = "" + f + g + h;
            "/" === m[m.length - 1] && (m = m.substring(0,
                m.length - 1));
            return m
        },
        sl = function(a) {
            var b = ql(z.location.href),
                c = ll(b, "host", !1);
            if (c && c.match(hl)) {
                var d = ll(b, "path").split(a + "=");
                if (1 < d.length) return d[1].split(";")[0].split("?")[0]
            }
        };
    var tl = {
            initialized: 11,
            complete: 12,
            interactive: 13
        },
        ul = {},
        vl = Object.freeze((ul[N.g.Sa] = !0, ul)),
        wl = 0 <= C.location.search.indexOf("?gtm_diagnostics=") || 0 <= C.location.search.indexOf("&gtm_diagnostics="),
        yl = function(a, b, c) {
            if (Ok && "config" === a && !(1 < dk(b).P.length)) {
                var d, e = Fc("google_tag_data", {});
                e.td || (e.td = {});
                d = e.td;
                var f = nb(c.F);
                nb(c.h, f);
                var g = [],
                    h;
                for (h in d) {
                    var m = xl(d[h], f);
                    m.length && (wl && console.log(m), g.push(h))
                }
                g.length && (g.length && Ok && el.push(b + "*" + g.join(".")), Ab("TAGGING", tl[C.readyState] ||
                    14));
                d[b] = f
            }
        };

    function zl(a, b) {
        var c = {},
            d;
        for (d in b) b.hasOwnProperty(d) && (c[d] = !0);
        for (var e in a) a.hasOwnProperty(e) && (c[e] = !0);
        return c
    }

    function xl(a, b, c, d) {
        c = void 0 === c ? {} : c;
        d = void 0 === d ? "" : d;
        if (a === b) return [];
        var e = function(q, r) {
                var t = r[q];
                return void 0 === t ? vl[q] : t
            },
            f;
        for (f in zl(a, b)) {
            var g = (d ? d + "." : "") + f,
                h = e(f, a),
                m = e(f, b),
                n = "object" === jb(h) || "array" === jb(h),
                p = "object" === jb(m) || "array" === jb(m);
            if (n && p) xl(h, m, c, g);
            else if (n || p || h !== m) c[g] = !0
        }
        return Object.keys(c)
    };
    var Al = function(a, b, c, d, e, f, g, h, m, n, p) {
            this.eventId = a;
            this.priorityId = b;
            this.h = c;
            this.M = d;
            this.C = e;
            this.F = f;
            this.s = g;
            this.eventMetadata = h;
            this.onSuccess = m;
            this.onFailure = n;
            this.isGtmEvent = p
        },
        Bl = function(a, b) {
            var c = [];
            switch (b) {
                case 3:
                    c.push(a.h);
                    c.push(a.M);
                    c.push(a.C);
                    c.push(a.F);
                    c.push(a.s);
                    break;
                case 2:
                    c.push(a.h);
                    break;
                case 1:
                    c.push(a.M);
                    c.push(a.C);
                    c.push(a.F);
                    c.push(a.s);
                    break;
                case 4:
                    c.push(a.h), c.push(a.M), c.push(a.C), c.push(a.F)
            }
            return c
        },
        S = function(a, b, c, d) {
            for (var e = fa(Bl(a, void 0 === d ? 3 :
                    d)), f = e.next(); !f.done; f = e.next()) {
                var g = f.value;
                if (void 0 !== g[b]) return g[b]
            }
            return c
        },
        Cl = function(a) {
            for (var b = {}, c = Bl(a, 4), d = fa(c), e = d.next(); !e.done; e = d.next())
                for (var f = Object.keys(e.value), g = fa(f), h = g.next(); !h.done; h = g.next()) b[h.value] = 1;
            return Object.keys(b)
        },
        Dl = function(a, b, c) {
            function d(n) {
                lb(n) && l(n, function(p, q) {
                    f = !0;
                    e[p] = q
                })
            }
            var e = {},
                f = !1,
                g = Bl(a, void 0 === c ? 3 : c);
            g.reverse();
            for (var h = fa(g), m = h.next(); !m.done; m = h.next()) d(m.value[b]);
            return f ? e : void 0
        },
        El = function(a) {
            for (var b = [N.g.Mc,
                    N.g.Ic, N.g.Jc, N.g.Kc, N.g.Lc, N.g.Nc, N.g.Oc
                ], c = Bl(a, 3), d = fa(c), e = d.next(); !e.done; e = d.next()) {
                for (var f = e.value, g = {}, h = !1, m = fa(b), n = m.next(); !n.done; n = m.next()) {
                    var p = n.value;
                    void 0 !== f[p] && (g[p] = f[p], h = !0)
                }
                var q = h ? g : void 0;
                if (q) return q
            }
            return {}
        },
        Fl = function(a, b) {
            this.uf = a;
            this.vf = b;
            this.C = {};
            this.Sb = {};
            this.h = {};
            this.F = {};
            this.ed = {};
            this.Rb = {};
            this.s = {};
            this.Oa = function() {};
            this.X = function() {};
            this.M = !1
        },
        Gl = function(a, b) {
            a.C = b;
            return a
        },
        Hl = function(a, b) {
            a.Sb = b;
            return a
        },
        Il = function(a, b) {
            a.h = b;
            return a
        },
        Jl = function(a, b) {
            a.F = b;
            return a
        },
        Kl = function(a, b) {
            a.ed = b;
            return a
        },
        Ll = function(a, b) {
            a.Rb = b;
            return a
        },
        Ml = function(a, b) {
            a.s = b || {};
            return a
        },
        Nl = function(a, b) {
            a.Oa = b;
            return a
        },
        Ol = function(a, b) {
            a.X = b;
            return a
        },
        Pl = function(a, b) {
            a.M = b;
            return a
        },
        Ql = function(a) {
            return new Al(a.uf, a.vf, a.C, a.Sb, a.h, a.F, a.Rb, a.s, a.Oa, a.X, a.M)
        };
    var Rl = {};

    function Sl(a, b, c) {
        Ok && void 0 !== a && (Rl[a] = Rl[a] || [], Rl[a].push(c + b), Yk(a))
    }

    function Tl(a) {
        var b = a.eventId,
            c = a.Hc,
            d = "",
            e = Rl[b] || [];
        e.length && (d += "&epr=" + e.join("."));
        c && delete Rl[b];
        return d
    };
    var Vl = function(a, b) {
            var c = dk(sk(a), !0);
            c && Ul.register(c, b)
        },
        Wl = function(a, b, c, d) {
            var e = dk(c, d.isGtmEvent);
            e && Ul.push("event", [b, a], e, d)
        },
        Xl = function(a, b, c, d) {
            var e = dk(c, d.isGtmEvent);
            e && Ul.push("get", [a, b], e, d)
        },
        Zl = function(a) {
            var b = dk(sk(a), !0),
                c;
            b ? c = Yl(Ul, b).h : c = {};
            return c
        },
        $l = function(a, b) {
            var c = dk(sk(a), !0);
            if (c) {
                var d = Ul,
                    e = nb(b);
                nb(Yl(d, c).h, e);
                Yl(d, c).h = e
            }
        },
        am = function() {
            this.status = 1;
            this.M = {};
            this.h = {};
            this.s = {};
            this.X = null;
            this.F = {};
            this.C = !1
        },
        bm = function(a, b, c, d) {
            var e = Ta();
            this.type =
                a;
            this.C = e;
            this.h = b;
            this.s = c;
            this.messageContext = d
        },
        cm = function() {
            this.s = {};
            this.C = {};
            this.h = []
        },
        Yl = function(a, b) {
            var c = b.da;
            return a.s[c] = a.s[c] || new am
        },
        dm = function(a, b, c, d) {
            if (d.h) {
                var e = Yl(a, d.h),
                    f = e.X;
                if (f) {
                    var g = nb(c),
                        h = nb(e.M[d.h.id]),
                        m = nb(e.F),
                        n = nb(e.h),
                        p = nb(a.C),
                        q = {};
                    if (Ok) try {
                        q = nb(Li)
                    } catch (v) {
                        L(72)
                    }
                    var r = d.h.prefix,
                        t = function(v) {
                            Sl(d.messageContext.eventId, r, v)
                        },
                        u = Ql(Pl(Ol(Nl(Ml(Kl(Jl(Ll(Il(Hl(Gl(new Fl(d.messageContext.eventId, d.messageContext.priorityId), g), h), m), n), p), q), d.messageContext.eventMetadata),
                            function() {
                                if (t) {
                                    var v = t;
                                    t = void 0;
                                    v("2");
                                    if (d.messageContext.onSuccess) d.messageContext.onSuccess()
                                }
                            }), function() {
                            if (t) {
                                var v = t;
                                t = void 0;
                                v("3");
                                if (d.messageContext.onFailure) d.messageContext.onFailure()
                            }
                        }), !!d.messageContext.isGtmEvent));
                    try {
                        Sl(d.messageContext.eventId, r, "1"), yl(d.type, d.h.id, u), f(d.h.id, b, d.C, u)
                    } catch (v) {
                        Sl(d.messageContext.eventId, r, "4")
                    }
                }
            }
        };
    cm.prototype.register = function(a, b, c) {
        var d = Yl(this, a);
        3 !== d.status && (d.X = b, d.status = 3, c && (nb(d.h, c), d.h = c), this.flush())
    };
    cm.prototype.push = function(a, b, c, d) {
        void 0 !== c && (1 === Yl(this, c).status && (Yl(this, c).status = 2, this.push("require", [{}], c, {})), Yl(this, c).C && (d.deferrable = !1));
        this.h.push(new bm(a, c, b, d));
        d.deferrable || this.flush()
    };
    cm.prototype.flush = function(a) {
        for (var b = this, c = [], d = !1, e = {}; this.h.length; e = {
                vc: void 0,
                lh: void 0
            }) {
            var f = this.h[0],
                g = f.h;
            if (f.messageContext.deferrable) !g || Yl(this, g).C ? (f.messageContext.deferrable = !1, this.h.push(f)) : c.push(f), this.h.shift();
            else {
                switch (f.type) {
                    case "require":
                        if (3 !== Yl(this, g).status && !a) {
                            this.h.push.apply(this.h, c);
                            return
                        }
                        break;
                    case "set":
                        l(f.s[0], function(r, t) {
                            nb($a(r, t), b.C)
                        });
                        break;
                    case "config":
                        var h = Yl(this, g);
                        e.vc = {};
                        l(f.s[0], function(r) {
                            return function(t, u) {
                                nb($a(t, u), r.vc)
                            }
                        }(e));
                        var m = !!e.vc[N.g.Qb];
                        delete e.vc[N.g.Qb];
                        var n = g.da === g.id;
                        m || (n ? h.F = {} : h.M[g.id] = {});
                        h.C && m || dm(this, N.g.sa, e.vc, f);
                        h.C = !0;
                        n ? nb(e.vc, h.F) : (nb(e.vc, h.M[g.id]), L(70));
                        d = !0;
                        break;
                    case "event":
                        e.lh = {};
                        l(f.s[0], function(r) {
                            return function(t, u) {
                                nb($a(t, u), r.lh)
                            }
                        }(e));
                        dm(this, f.s[1], e.lh, f);
                        break;
                    case "get":
                        var p = {},
                            q = (p[N.g.lb] = f.s[0], p[N.g.wb] = f.s[1], p);
                        dm(this, N.g.Pa, q, f)
                }
                this.h.shift();
                em(this, f)
            }
        }
        this.h.push.apply(this.h, c);
        d && this.flush()
    };
    var em = function(a, b) {
            if ("require" !== b.type)
                if (b.h)
                    for (var c = Yl(a, b.h).s[b.type] || [], d = 0; d < c.length; d++) c[d]();
                else
                    for (var e in a.s)
                        if (a.s.hasOwnProperty(e)) {
                            var f = a.s[e];
                            if (f && f.s)
                                for (var g = f.s[b.type] || [], h = 0; h < g.length; h++) g[h]()
                        }
        },
        Ul = new cm;

    function fm(a, b) {
        if ("" === a) return b;
        var c = Number(a);
        return isNaN(c) ? b : c
    };
    var gm = function(a, b) {
            var c = function() {};
            c.prototype = a.prototype;
            var d = new c;
            a.apply(d, Array.prototype.slice.call(arguments, 1));
            return d
        },
        hm = function(a) {
            var b = a;
            return function() {
                if (b) {
                    var c = b;
                    b = null;
                    c()
                }
            }
        };
    var im = function(a, b, c) {
        a.addEventListener && a.addEventListener(b, c, !1)
    };

    function jm() {
        return Pb ? !!Wb && !!Wb.platform : !1
    }

    function km() {
        return Zb("iPhone") && !Zb("iPod") && !Zb("iPad")
    }

    function lm() {
        km() || Zb("iPad") || Zb("iPod")
    };
    ac();
    $b() || Zb("Trident") || Zb("MSIE");
    Zb("Edge");
    !Zb("Gecko") || -1 != Vb().toLowerCase().indexOf("webkit") && !Zb("Edge") || Zb("Trident") || Zb("MSIE") || Zb("Edge"); - 1 != Vb().toLowerCase().indexOf("webkit") && !Zb("Edge") && Zb("Mobile");
    jm() || Zb("Macintosh");
    jm() || Zb("Windows");
    (jm() ? "Linux" === Wb.platform : Zb("Linux")) || jm() || Zb("CrOS");
    jm() || Zb("Android");
    km();
    Zb("iPad");
    Zb("iPod");
    lm();
    Vb().toLowerCase().indexOf("kaios");
    var mm = function(a, b, c, d) {
            for (var e = b, f = c.length; 0 <= (e = a.indexOf(c, e)) && e < d;) {
                var g = a.charCodeAt(e - 1);
                if (38 == g || 63 == g) {
                    var h = a.charCodeAt(e + f);
                    if (!h || 61 == h || 38 == h || 35 == h) return e
                }
                e += f + 1
            }
            return -1
        },
        nm = /#|$/,
        om = function(a, b) {
            var c = a.search(nm),
                d = mm(a, 0, b, c);
            if (0 > d) return null;
            var e = a.indexOf("&", d);
            if (0 > e || e > c) e = c;
            d += b.length + 1;
            return decodeURIComponent(a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " "))
        },
        pm = /[?&]($|#)/,
        qm = function(a, b, c) {
            for (var d, e = a.search(nm), f = 0, g, h = []; 0 <= (g = mm(a, f, b, e));) h.push(a.substring(f,
                g)), f = Math.min(a.indexOf("&", g) + 1 || e, e);
            h.push(a.slice(f));
            d = h.join("").replace(pm, "$1");
            var m, n = null != c ? "=" + encodeURIComponent(String(c)) : "";
            var p = b + n;
            if (p) {
                var q, r = d.indexOf("#");
                0 > r && (r = d.length);
                var t = d.indexOf("?"),
                    u;
                0 > t || t > r ? (t = r, u = "") : u = d.substring(t + 1, r);
                q = [d.slice(0, t), u, d.slice(r)];
                var v = q[1];
                q[1] = p ? v ? v + "&" + p : p : v;
                m = q[0] + (q[1] ? "?" + q[1] : "") + q[2]
            } else m = d;
            return m
        };
    var rm = function(a) {
            try {
                var b;
                if (b = !!a && null != a.location.href) a: {
                    try {
                        pj(a.foo);
                        b = !0;
                        break a
                    } catch (c) {}
                    b = !1
                }
                return b
            } catch (c) {
                return !1
            }
        },
        sm = function(a, b) {
            if (a)
                for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
        };

    function tm(a) {
        if (!a || !C.head) return null;
        var b = um("META");
        C.head.appendChild(b);
        b.httpEquiv = "origin-trial";
        b.content = a;
        return b
    }
    var vm = function(a) {
            if (z.top == z) return 0;
            if (void 0 === a ? 0 : a) {
                var b = z.location.ancestorOrigins;
                if (b) return b[b.length - 1] == z.location.origin ? 1 : 2
            }
            return rm(z.top) ? 1 : 2
        },
        um = function(a, b) {
            b = void 0 === b ? document : b;
            return b.createElement(String(a).toLowerCase())
        };

    function wm(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        a.google_image_requests || (a.google_image_requests = []);
        var e = um("IMG", a.document);
        if (c) {
            var f = function() {
                if (c) {
                    var g = a.google_image_requests,
                        h = Db(g, e);
                    0 <= h && Array.prototype.splice.call(g, h, 1)
                }
                e.removeEventListener && e.removeEventListener("load", f, !1);
                e.removeEventListener && e.removeEventListener("error", f, !1)
            };
            im(e, "load", f);
            im(e, "error", f)
        }
        d && (e.attributionSrc = "");
        e.src = b;
        a.google_image_requests.push(e)
    }
    var ym = function(a) {
            var b;
            b = void 0 === b ? !1 : b;
            var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe";
            sm(a, function(d, e) {
                if (d || 0 === d) c += "&" + e + "=" + encodeURIComponent("" + d)
            });
            xm(c, b)
        },
        xm = function(a, b) {
            var c = window,
                d;
            b = void 0 === b ? !1 : b;
            d = void 0 === d ? !1 : d;
            if (c.fetch) {
                var e = {
                    keepalive: !0,
                    credentials: "include",
                    redirect: "follow",
                    method: "get",
                    mode: "no-cors"
                };
                d && (e.mode = "cors", "setAttributionReporting" in XMLHttpRequest.prototype ? e.attributionReporting = {
                        eventSourceEligible: "true",
                        triggerEligible: "false"
                    } :
                    e.headers = {
                        "Attribution-Reporting-Eligible": "event-source"
                    });
                c.fetch(a, e)
            } else wm(c, a, void 0 === b ? !1 : b, void 0 === d ? !1 : d)
        };
    var zm = function() {};
    var Am = function(a) {
            void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
            void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
            return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
        },
        Bm = function(a, b) {
            b = void 0 === b ? {} : b;
            this.s = a;
            this.h = null;
            this.M = {};
            this.Oa = 0;
            var c;
            this.X = null != (c = b.mn) ? c : 500;
            var d;
            this.F = null != (d = b.Un) ? d : !1;
            this.C = null
        };
    sa(Bm, zm);
    var Dm = function(a) {
        return "function" === typeof a.s.__tcfapi || null != Cm(a)
    };
    Bm.prototype.addEventListener = function(a) {
        var b = this,
            c = {
                internalBlockOnErrors: this.F
            },
            d = hm(function() {
                return a(c)
            }),
            e = 0; - 1 !== this.X && (e = setTimeout(function() {
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, this.X));
        var f = function(g, h) {
            clearTimeout(e);
            g ? (c = g, c.internalErrorState = Am(c), c.internalBlockOnErrors = b.F, h && 0 === c.internalErrorState || (c.tcString = "tcunavailable", h || (c.internalErrorState = 3))) : (c.tcString = "tcunavailable", c.internalErrorState = 3);
            a(c)
        };
        try {
            Em(this, "addEventListener", f)
        } catch (g) {
            c.tcString =
                "tcunavailable", c.internalErrorState = 3, e && (clearTimeout(e), e = 0), d()
        }
    };
    Bm.prototype.removeEventListener = function(a) {
        a && a.listenerId && Em(this, "removeEventListener", null, a.listenerId)
    };
    var Gm = function(a, b, c) {
            var d;
            d = void 0 === d ? "755" : d;
            var e;
            a: {
                if (a.publisher && a.publisher.restrictions) {
                    var f = a.publisher.restrictions[b];
                    if (void 0 !== f) {
                        e = f[void 0 === d ? "755" : d];
                        break a
                    }
                }
                e = void 0
            }
            var g = e;
            if (0 === g) return !1;
            var h = c;
            2 === c ? (h = 0, 2 === g && (h = 1)) : 3 === c && (h = 1, 1 === g && (h = 0));
            var m;
            if (0 === h)
                if (a.purpose && a.vendor) {
                    var n = Fm(a.vendor.consents, void 0 === d ? "755" : d);
                    m = n && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC ? !0 : n && Fm(a.purpose.consents, b)
                } else m = !0;
            else m = 1 === h ? a.purpose && a.vendor ? Fm(a.purpose.legitimateInterests,
                b) && Fm(a.vendor.legitimateInterests, void 0 === d ? "755" : d) : !0 : !0;
            return m
        },
        Fm = function(a, b) {
            return !(!a || !a[b])
        },
        Em = function(a, b, c, d) {
            c || (c = function() {});
            if ("function" === typeof a.s.__tcfapi) {
                var e = a.s.__tcfapi;
                e(b, 2, c, d)
            } else if (Cm(a)) {
                Hm(a);
                var f = ++a.Oa;
                a.M[f] = c;
                if (a.h) {
                    var g = {};
                    a.h.postMessage((g.__tcfapiCall = {
                        command: b,
                        version: 2,
                        callId: f,
                        parameter: d
                    }, g), "*")
                }
            } else c({}, !1)
        },
        Cm = function(a) {
            if (a.h) return a.h;
            var b;
            a: {
                for (var c = a.s, d = 0; 50 > d; ++d) {
                    var e;
                    try {
                        e = !(!c.frames || !c.frames.__tcfapiLocator)
                    } catch (h) {
                        e = !1
                    }
                    if (e) {
                        b = c;
                        break a
                    }
                    var f;
                    b: {
                        try {
                            var g = c.parent;
                            if (g && g != c) {
                                f = g;
                                break b
                            }
                        } catch (h) {}
                        f = null
                    }
                    if (!(c = f)) break
                }
                b = null
            }
            a.h = b;
            return a.h
        },
        Hm = function(a) {
            a.C || (a.C = function(b) {
                try {
                    var c;
                    c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                    a.M[c.callId](c.returnValue, c.success)
                } catch (d) {}
            }, im(a.s, "message", a.C))
        },
        Im = function(a) {
            if (!1 === a.gdprApplies) return !0;
            void 0 === a.internalErrorState && (a.internalErrorState = Am(a));
            return "error" === a.cmpStatus || 0 !== a.internalErrorState ? a.internalBlockOnErrors ?
                (ym({
                    e: String(a.internalErrorState)
                }), !1) : !0 : "loaded" !== a.cmpStatus || "tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus ? !1 : !0
        };
    var Jm = {
        1: 0,
        3: 0,
        4: 0,
        7: 3,
        9: 3,
        10: 3
    };

    function Km() {
        var a = oi.tcf || {};
        return oi.tcf = a
    }
    var Lm = function() {
            return new Bm(z, {
                mn: -1
            })
        },
        Rm = function() {
            var a = Km(),
                b = Lm();
            Dm(b) && !Mm() && !Nm() && L(124);
            if (!a.active && Dm(b)) {
                Mm() && (a.active = !0, a.Yb = {}, a.cmpId = 0, a.tcfPolicyVersion = 0, yj().active = !0, a.tcString = "tcunavailable");
                Yj();
                try {
                    b.addEventListener(function(c) {
                        if (0 !== c.internalErrorState) Om(a), Zj([N.g.J, N.g.Ea, N.g.N]), yj().active = !0;
                        else if (a.gdprApplies = c.gdprApplies, a.cmpId = c.cmpId, a.enableAdvertiserConsentMode = c.enableAdvertiserConsentMode, Nm() && (a.active = !0), !Pm(c) || Mm() || Nm()) {
                            a.tcfPolicyVersion =
                                c.tcfPolicyVersion;
                            var d;
                            if (!1 === c.gdprApplies) {
                                var e = {},
                                    f;
                                for (f in Jm) Jm.hasOwnProperty(f) && (e[f] = !0);
                                d = e;
                                b.removeEventListener(c)
                            } else if (Pm(c)) {
                                var g = {},
                                    h;
                                for (h in Jm)
                                    if (Jm.hasOwnProperty(h))
                                        if ("1" === h) {
                                            var m, n = c,
                                                p = {
                                                    Ll: !0
                                                };
                                            p = void 0 === p ? {} : p;
                                            m = Im(n) ? !1 === n.gdprApplies || "tcunavailable" === n.tcString || void 0 === n.gdprApplies && !p.Ll || "string" !== typeof n.tcString || !n.tcString.length ? !0 : Gm(n, "1", 0) : !1;
                                            g["1"] = m
                                        } else g[h] = Gm(c, h, Jm[h]);
                                d = g
                            }
                            if (d) {
                                a.tcString = c.tcString || "tcempty";
                                a.Yb = d;
                                var q = {},
                                    r = (q[N.g.J] =
                                        a.Yb["1"] ? "granted" : "denied", q);
                                !0 !== a.gdprApplies ? (Zj([N.g.J, N.g.Ea, N.g.N]), yj().active = !0) : (r[N.g.Ea] = a.Yb["3"] && a.Yb["4"] ? "granted" : "denied", "number" === typeof a.tcfPolicyVersion && 4 <= a.tcfPolicyVersion ? r[N.g.N] = a.Yb["1"] && a.Yb["7"] ? "granted" : "denied" : Zj([N.g.N]), Rj(r, {
                                    eventId: 0
                                }, {
                                    gdprApplies: a ? a.gdprApplies : void 0,
                                    tcString: Qm() || ""
                                }))
                            }
                        } else Zj([N.g.J, N.g.Ea, N.g.N])
                    })
                } catch (c) {
                    Om(a), Zj([N.g.J, N.g.Ea, N.g.N]), yj().active = !0
                }
            }
        };

    function Om(a) {
        a.type = "e";
        a.tcString = "tcunavailable"
    }

    function Pm(a) {
        return "tcloaded" === a.eventStatus || "useractioncomplete" === a.eventStatus || "cmpuishown" === a.eventStatus
    }
    var Mm = function() {
        return !0 === z.gtag_enable_tcf_support
    };

    function Nm() {
        return !0 === Km().enableAdvertiserConsentMode
    }
    var Qm = function() {
            var a = Km();
            if (a.active) return a.tcString
        },
        Sm = function() {
            var a = Km();
            if (a.active && void 0 !== a.gdprApplies) return a.gdprApplies ? "1" : "0"
        },
        Tm = function(a) {
            if (!Jm.hasOwnProperty(String(a))) return !0;
            var b = Km();
            return b.active && b.Yb ? !!b.Yb[String(a)] : !0
        };
    var Um = [N.g.J, N.g.R, N.g.N, N.g.Ea],
        Vm = {},
        Wm = (Vm[N.g.J] = 1, Vm[N.g.R] = 2, Vm);

    function Xm(a) {
        if (void 0 === a) return 0;
        switch (S(a, N.g.ja)) {
            case void 0:
                return 1;
            case !1:
                return 3;
            default:
                return 2
        }
    }
    var Ym = function(a) {
            var b = Xm(a);
            if (3 === b) return !1;
            switch (Fj(N.g.Ea)) {
                case 1:
                case 3:
                    return !0;
                case 2:
                    return !1;
                case 4:
                    return 2 === b;
                case 0:
                    return !0;
                default:
                    return !1
            }
        },
        Zm = function() {
            return Hj() || !Ej(N.g.J) || !Ej(N.g.R)
        },
        $m = function() {
            var a = {},
                b;
            for (b in Wm) Wm.hasOwnProperty(b) && (a[Wm[b]] = Fj(b));
            return "G1" + Le(a[1] || 0) + Le(a[2] || 0)
        },
        an = {},
        bn = (an[N.g.J] = 0, an[N.g.R] = 1, an[N.g.N] = 2, an[N.g.Ea] = 3, an);

    function mn(a) {
        switch (a) {
            case void 0:
                return 1;
            case !0:
                return 3;
            case !1:
                return 2;
            default:
                return 0
        }
    }
    var nn = function(a) {
            for (var b = "1", c = 0; c < Um.length; c++) {
                var d = b,
                    e, f = Um[c],
                    g = uj[f];
                e = void 0 === g ? 0 : bn.hasOwnProperty(g) ? 12 | bn[g] : 8;
                var h = yj();
                h.accessedAny = !0;
                var m = h.entries[f] || {};
                e = e << 2 | mn(m.implicit);
                b = d + ("" + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [e] + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [mn(m.declare) << 4 | mn(m.default) << 2 | mn(m.update)])
            }
            var n = b,
                p;
            p = "" + (Hj() << 2 | Xm(a));
            return n + p
        },
        on = function() {
            if (!Ej(N.g.N)) return "-";
            var a = yj(),
                b = wj,
                c = a.cps,
                d =
                a.usedSetCps,
                e = {};
            if (b && d)
                for (var f in vj) vj.hasOwnProperty(f) && vj[f].enabled && c.hasOwnProperty(f) && c[f].enabled ? e[f] = {
                    enabled: !0,
                    region: vj[f].region
                } : e[f] = {
                    enabled: !1,
                    region: vj[f].region
                };
            else {
                var g = b ? vj : c,
                    h;
                for (h in g) g.hasOwnProperty(h) && (e[h] = {
                    enabled: g[h].enabled,
                    region: g[h].region
                })
            }
            for (var m = {}, n = fa(Object.keys(e)), p = n.next(); !p.done; p = n.next()) {
                var q = p.value;
                m[q] = e[q].enabled
            }
            for (var r = "", t = fa(Object.keys(mi)), u = t.next(); !u.done; u = t.next()) {
                var v = u.value;
                !1 !== m[v] && (r += mi[v])
            }
            return "" === r ?
                "-" : r
        },
        pn = function() {
            return cj["6"] || (Mm() || Nm()) && "1" === Sm() ? "1" : "0"
        },
        qn = function() {
            return (cj["6"] ? !0 : !(!Mm() && !Nm()) && "1" === Sm()) || yj().usedSetCps || !Ej(N.g.N)
        },
        rn = function() {
            var a = "0",
                b = "0",
                c;
            var d = Km();
            c = d.active ? d.cmpId : void 0;
            "number" === typeof c && 0 <= c && 4095 >= c && (a = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [c >> 6 & 63], b = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [c & 63]);
            var e = "0",
                f;
            var g = Km();
            f = g.active ? g.tcfPolicyVersion : void 0;
            "number" === typeof f &&
                0 <= f && 63 >= f && (e = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [f]);
            var h = 0;
            cj["6"] && (h |= 1);
            "1" === Sm() && (h |= 2);
            Mm() && (h |= 4);
            var m;
            var n = Km();
            m = void 0 !== n.enableAdvertiserConsentMode ? n.enableAdvertiserConsentMode ? "1" : "0" : void 0;
            "1" === m && (h |= 8);
            yj().waitPeriodTimedOut && (h |= 16);
            return "1" + a + b + e + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [h]
        };
    var sn = function() {
        var a = !1;
        return a
    };
    var tn = {
            UA: 1,
            AW: 2,
            DC: 3,
            G: 4,
            GF: 5,
            GT: 12,
            GTM: 14,
            HA: 6,
            MC: 7
        },
        un = function(a, b) {
            var c = Rf.ctid.split("-")[0].toUpperCase(),
                d = {};
            d.ctid = Rf.ctid;
            d.Vm = ni.me;
            d.Xm = ni.Ug;
            d.Am = lk.ie ? 2 : 1;
            d.uc = Rf.Ef;
            d.uc !== a && (d.Tf = a);
            R(71) ? d.Xj = 2 : R(72) && (d.Xj = 1);
            ui ? (d.Rf = tn[c], d.Rf || (d.Rf = 0)) : d.Rf = Ai ? 13 : 10;
            yi ? d.Ch = 1 : sn() ? d.Ch = 2 : d.Ch = 3;
            var e;
            var f = d.Rf,
                g = d.Ch;
            void 0 === f ? e = "" : (g || (g = 0), e = "" + Fg(1, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [f << 2 | g]);
            var h = d.Tn,
                m = 4 + e + (h ? "" + Fg(2, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [h] :
                    ""),
                n, p = d.Xm;
            n = p && Eg.test(p) ? "" + Fg(3, 2) + p : "";
            var q, r = d.Vm;
            q = r ? "" + Fg(4, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [r] : "";
            var t;
            var u = d.ctid;
            if (u && b) {
                var v = u.split("-"),
                    w = v[0].toUpperCase();
                if ("GTM" !== w && "OPT" !== w) t = "";
                else {
                    var x = v[1];
                    t = "" + Fg(5, 3) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [1 + x.length] + (d.Am || 0) + x
                }
            } else t = "";
            var y = d.Xj,
                A = d.uc,
                B = d.Tf,
                E = d.Yn;
            return m + n + q + t + (y ? "" + Fg(6, 1) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [y] :
                "") + (A ? "" + Fg(7, 3) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [A.length] + A : "") + (B ? "" + Fg(8, 3) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [B.length] + B : "") + (E ? "" + Fg(9, 3) + "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_" [E.length] + E : "")
        };
    var vn = function(a) {
        var b = 1,
            c, d, e;
        if (a)
            for (b = 0, d = a.length - 1; 0 <= d; d--) e = a.charCodeAt(d), b = (b << 6 & 268435455) + e + (e << 14), c = b & 266338304, b = 0 !== c ? b ^ c >> 21 : b;
        return b
    };
    var wn = function(a, b, c) {
        for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
            var g = e[f].split("="),
                h = g[0].replace(/^\s*|\s*$/g, "");
            if (h && h == a) {
                var m = g.slice(1).join("=").replace(/^\s*|\s*$/g, "");
                m && c && (m = decodeURIComponent(m));
                d.push(m)
            }
        }
        return d
    };
    var zn = function(a, b, c, d) {
            return xn(d) ? wn(a, String(b || yn()), c) : []
        },
        Cn = function(a, b, c, d, e) {
            if (xn(e)) {
                var f = An(a, d, e);
                if (1 === f.length) return f[0].id;
                if (0 !== f.length) {
                    f = Bn(f, function(g) {
                        return g.Gf
                    }, b);
                    if (1 === f.length) return f[0].id;
                    f = Bn(f, function(g) {
                        return g.Ne
                    }, c);
                    return f[0] ? f[0].id : void 0
                }
            }
        };

    function Dn(a, b, c, d) {
        var e = yn(),
            f = window;
        "null" !== f.origin && (f.document.cookie = a);
        var g = yn();
        return e != g || void 0 != c && 0 <= zn(b, g, !1, d).indexOf(c)
    }
    var Hn = function(a, b, c, d) {
            function e(w, x, y) {
                if (null == y) return delete h[x], w;
                h[x] = y;
                return w + "; " + x + "=" + y
            }

            function f(w, x) {
                if (null == x) return delete h[x], w;
                h[x] = !0;
                return w + "; " + x
            }
            if (!xn(c.Gb)) return 2;
            var g;
            void 0 == b ? g = a + "=deleted; expires=" + (new Date(0)).toUTCString() : (c.encode && (b = encodeURIComponent(b)), b = En(b), g = a + "=" + b);
            var h = {};
            g = e(g, "path", c.path);
            var m;
            c.expires instanceof Date ? m = c.expires.toUTCString() : null != c.expires && (m = "" + c.expires);
            g = e(g, "expires", m);
            g = e(g, "max-age", c.Em);
            g = e(g, "samesite",
                c.Ym);
            c.bn && (g = f(g, "secure"));
            var n = c.domain;
            if (n && "auto" === n.toLowerCase()) {
                for (var p = Fn(), q = void 0, r = !1, t = 0; t < p.length; ++t) {
                    var u = "none" !== p[t] ? p[t] : void 0,
                        v = e(g, "domain", u);
                    v = f(v, c.flags);
                    try {
                        d && d(a, h)
                    } catch (w) {
                        q = w;
                        continue
                    }
                    r = !0;
                    if (!Gn(u, c.path) && Dn(v, a, b, c.Gb)) return 0
                }
                if (q && !r) throw q;
                return 1
            }
            n && "none" !== n.toLowerCase() && (g = e(g, "domain", n));
            g = f(g, c.flags);
            d && d(a, h);
            return Gn(n, c.path) ? 1 : Dn(g, a, b, c.Gb) ? 0 : 1
        },
        In = function(a, b, c) {
            null == c.path && (c.path = "/");
            c.domain || (c.domain = "auto");
            return Hn(a,
                b, c)
        };

    function Bn(a, b, c) {
        for (var d = [], e = [], f, g = 0; g < a.length; g++) {
            var h = a[g],
                m = b(h);
            m === c ? d.push(h) : void 0 === f || m < f ? (e = [h], f = m) : m === f && e.push(h)
        }
        return 0 < d.length ? d : e
    }

    function An(a, b, c) {
        for (var d = [], e = zn(a, void 0, void 0, c), f = 0; f < e.length; f++) {
            var g = e[f].split("."),
                h = g.shift();
            if (!b || -1 !== b.indexOf(h)) {
                var m = g.shift();
                m && (m = m.split("-"), d.push({
                    id: g.join("."),
                    Gf: 1 * m[0] || 1,
                    Ne: 1 * m[1] || 1
                }))
            }
        }
        return d
    }
    var En = function(a) {
            a && 1200 < a.length && (a = a.substring(0, 1200));
            return a
        },
        Jn = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,
        Kn = /(^|\.)doubleclick\.net$/i,
        Gn = function(a, b) {
            return Kn.test(window.document.location.hostname) || "/" === b && Jn.test(a)
        },
        yn = function() {
            return "null" !== window.origin ? window.document.cookie : ""
        },
        Fn = function() {
            var a = [],
                b = window.document.location.hostname.split(".");
            if (4 === b.length) {
                var c = b[b.length - 1];
                if (parseInt(c, 10).toString() === c) return ["none"]
            }
            for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
            var e = window.document.location.hostname;
            Kn.test(e) || Jn.test(e) || a.push("none");
            return a
        },
        xn = function(a) {
            return a && rj().h() ? (k(a) ? [a] : a).every(function(b) {
                return Gj(b) && Ej(b)
            }) : !0
        },
        Ln = function(a) {
            if (!a) return 1;
            a = 0 === a.indexOf(".") ? a.substr(1) : a;
            return a.split(".").length
        },
        Mn = function(a) {
            if (!a || "/" === a) return 1;
            "/" !== a[0] && (a = "/" + a);
            "/" !== a[a.length - 1] && (a += "/");
            return a.split("/").length - 1
        };
    var Nn = function(a) {
            var b = Math.round(2147483647 * Math.random());
            return a ? String(b ^ vn(a) & 2147483647) : String(b)
        },
        On = function(a) {
            return [Nn(a), Math.round(Ta() / 1E3)].join(".")
        },
        Pn = function(a, b, c, d, e) {
            var f = Ln(b);
            return Cn(a, f, Mn(c), d, e)
        },
        Qn = function(a, b, c, d) {
            var e = "" + Ln(c),
                f = Mn(d);
            1 < f && (e += "-" + f);
            return [b, e, a].join(".")
        };

    function Rn(a, b, c, d) {
        var e, f = Number(null != a.Xb ? a.Xb : void 0);
        0 !== f && (e = new Date((b || Ta()) + 1E3 * (f || 7776E3)));
        return {
            path: a.path,
            domain: a.domain,
            flags: a.flags,
            encode: !!c,
            expires: e,
            Gb: d
        }
    };
    var Sn;
    var Wn = function() {
            var a = Tn,
                b = Un,
                c = Vn(),
                d = function(g) {
                    a(g.target || g.srcElement || {})
                },
                e = function(g) {
                    b(g.target || g.srcElement || {})
                };
            if (!c.init) {
                Oc(C, "mousedown", d);
                Oc(C, "keyup", d);
                Oc(C, "submit", e);
                var f = HTMLFormElement.prototype.submit;
                HTMLFormElement.prototype.submit = function() {
                    b(this);
                    f.call(this)
                };
                c.init = !0
            }
        },
        Xn = function(a, b, c, d, e) {
            var f = {
                callback: a,
                domains: b,
                fragment: 2 === c,
                placement: c,
                forms: d,
                sameHost: e
            };
            Vn().decorators.push(f)
        },
        Yn = function(a, b, c) {
            for (var d = Vn().decorators, e = {}, f = 0; f < d.length; ++f) {
                var g =
                    d[f],
                    h;
                if (h = !c || g.forms) a: {
                    var m = g.domains,
                        n = a,
                        p = !!g.sameHost;
                    if (m && (p || n !== C.location.hostname))
                        for (var q = 0; q < m.length; q++)
                            if (m[q] instanceof RegExp) {
                                if (m[q].test(n)) {
                                    h = !0;
                                    break a
                                }
                            } else if (0 <= n.indexOf(m[q]) || p && 0 <= m[q].indexOf(n)) {
                        h = !0;
                        break a
                    }
                    h = !1
                }
                if (h) {
                    var r = g.placement;
                    void 0 == r && (r = g.fragment ? 2 : 1);
                    r === b && Wa(e, g.callback())
                }
            }
            return e
        };

    function Vn() {
        var a = Fc("google_tag_data", {}),
            b = a.gl;
        b && b.decorators || (b = {
            decorators: []
        }, a.gl = b);
        return b
    };
    var Zn = /(.*?)\*(.*?)\*(.*)/,
        $n = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
        ao = /^(?:www\.|m\.|amp\.)+/,
        bo = /([^?#]+)(\?[^#]*)?(#.*)?/;

    function co(a) {
        var b = bo.exec(a);
        if (b) return {
            Ih: b[1],
            query: b[2],
            fragment: b[3]
        }
    }

    function eo(a, b) {
        var c = [Dc.userAgent, (new Date).getTimezoneOffset(), Dc.userLanguage || Dc.language, Math.floor(Ta() / 60 / 1E3) - (void 0 === b ? 0 : b), a].join("*"),
            d;
        if (!(d = Sn)) {
            for (var e = Array(256), f = 0; 256 > f; f++) {
                for (var g = f, h = 0; 8 > h; h++) g = g & 1 ? g >>> 1 ^ 3988292384 : g >>> 1;
                e[f] = g
            }
            d = e
        }
        Sn = d;
        for (var m = 4294967295, n = 0; n < c.length; n++) m = m >>> 8 ^ Sn[(m ^ c.charCodeAt(n)) & 255];
        return ((m ^ -1) >>> 0).toString(36)
    }

    function fo() {
        return function(a) {
            var b = ql(z.location.href),
                c = b.search.replace("?", ""),
                d = il(c, "_gl", !1, !0) || "";
            a.query = go(d) || {};
            var e = ll(b, "fragment"),
                f;
            var g = -1;
            if (Ya(e, "_gl=")) g = 4;
            else {
                var h = e.indexOf("&_gl=");
                0 < h && (g = h + 3 + 2)
            }
            if (0 > g) f = void 0;
            else {
                var m = e.indexOf("&", g);
                f = 0 > m ? e.substring(g) : e.substring(g, m)
            }
            a.fragment = go(f || "") || {}
        }
    }
    var ho = function(a) {
            var b = fo(),
                c = Vn();
            c.data || (c.data = {
                query: {},
                fragment: {}
            }, b(c.data));
            var d = {},
                e = c.data;
            e && (Wa(d, e.query), a && Wa(d, e.fragment));
            return d
        },
        go = function(a) {
            try {
                var b = io(a, 3);
                if (void 0 !== b) {
                    for (var c = {}, d = b ? b.split("*") : [], e = 0; e + 1 < d.length; e += 2) {
                        var f = d[e],
                            g = yb(d[e + 1]);
                        c[f] = g
                    }
                    Ab("TAGGING", 6);
                    return c
                }
            } catch (h) {
                Ab("TAGGING", 8)
            }
        };

    function io(a, b) {
        if (a) {
            var c;
            a: {
                for (var d = a, e = 0; 3 > e; ++e) {
                    var f = Zn.exec(d);
                    if (f) {
                        c = f;
                        break a
                    }
                    d = decodeURIComponent(d)
                }
                c = void 0
            }
            var g = c;
            if (g && "1" === g[1]) {
                var h = g[3],
                    m;
                a: {
                    for (var n = g[2], p = 0; p < b; ++p)
                        if (n === eo(h, p)) {
                            m = !0;
                            break a
                        }
                    m = !1
                }
                if (m) return h;
                Ab("TAGGING", 7)
            }
        }
    }

    function jo(a, b, c, d, e) {
        function f(p) {
            var q = p,
                r = (new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)")).exec(q),
                t = q;
            if (r) {
                var u = r[2],
                    v = r[4];
                t = r[1];
                v && (t = t + u + v)
            }
            p = t;
            var w = p.charAt(p.length - 1);
            p && "&" !== w && (p += "&");
            return p + n
        }
        d = void 0 === d ? !1 : d;
        e = void 0 === e ? !1 : e;
        var g = co(c);
        if (!g) return "";
        var h = g.query || "",
            m = g.fragment || "",
            n = a + "=" + b;
        d ? 0 !== m.substring(1).length && e || (m = "#" + f(m.substring(1))) : h = "?" + f(h.substring(1));
        return "" + g.Ih + h + m
    }

    function ko(a, b) {
        function c(n, p, q) {
            var r;
            a: {
                for (var t in n)
                    if (n.hasOwnProperty(t)) {
                        r = !0;
                        break a
                    }
                r = !1
            }
            if (r) {
                var u, v = [],
                    w;
                for (w in n)
                    if (n.hasOwnProperty(w)) {
                        var x = n[w];
                        void 0 !== x && x === x && null !== x && "[object Object]" !== x.toString() && (v.push(w), v.push(xb(String(x))))
                    }
                var y = v.join("*");
                u = ["1", eo(y), y].join("*");
                d ? (Qf(13) || Qf(11) || !p) && lo("_gl", u, a, p, q) : mo("_gl", u, a, p, q)
            }
        }
        var d = "FORM" === (a.tagName || "").toUpperCase(),
            e = Yn(b, 1, d),
            f = Yn(b, 2, d),
            g = Yn(b, 4, d),
            h = Yn(b, 3, d);
        c(e, !1, !1);
        c(f, !0, !1);
        Qf(11) && c(g, !0, !0);
        for (var m in h) h.hasOwnProperty(m) && no(m, h[m], a)
    }

    function no(a, b, c) {
        "a" === c.tagName.toLowerCase() ? mo(a, b, c) : "form" === c.tagName.toLowerCase() && lo(a, b, c)
    }

    function mo(a, b, c, d, e) {
        d = void 0 === d ? !1 : d;
        e = void 0 === e ? !1 : e;
        var f;
        if (f = c.href) {
            var g;
            if (!(g = !Qf(16) || d)) {
                var h = z.location.href,
                    m = co(c.href),
                    n = co(h);
                g = !(m && n && m.Ih === n.Ih && m.query === n.query && m.fragment)
            }
            f = g
        }
        if (f) {
            var p = jo(a, b, c.href, d, e);
            sc.test(p) && (c.href = p)
        }
    }

    function lo(a, b, c, d, e) {
        d = void 0 === d ? !1 : d;
        e = void 0 === e ? !1 : e;
        if (c && c.action) {
            var f = (c.method || "").toLowerCase();
            if ("get" !== f || d) {
                if ("get" === f || "post" === f) {
                    var g = jo(a, b, c.action, d, e);
                    sc.test(g) && (c.action = g)
                }
            } else {
                for (var h = c.childNodes || [], m = !1, n = 0; n < h.length; n++) {
                    var p = h[n];
                    if (p.name === a) {
                        p.setAttribute("value", b);
                        m = !0;
                        break
                    }
                }
                if (!m) {
                    var q = C.createElement("input");
                    q.setAttribute("type", "hidden");
                    q.setAttribute("name", a);
                    q.setAttribute("value", b);
                    c.appendChild(q)
                }
            }
        }
    }

    function Tn(a) {
        try {
            var b;
            a: {
                for (var c = a, d = 100; c && 0 < d;) {
                    if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
                        b = c;
                        break a
                    }
                    c = c.parentNode;
                    d--
                }
                b = null
            }
            var e = b;
            if (e) {
                var f = e.protocol;
                "http:" !== f && "https:" !== f || ko(e, e.hostname)
            }
        } catch (g) {}
    }

    function Un(a) {
        try {
            if (a.action) {
                var b = ll(ql(a.action), "host");
                ko(a, b)
            }
        } catch (c) {}
    }
    var oo = function(a, b, c, d) {
            Wn();
            Xn(a, b, "fragment" === c ? 2 : 1, !!d, !1)
        },
        po = function(a, b) {
            Wn();
            Xn(a, [kl(z.location, "host", !0)], b, !0, !0)
        },
        qo = function() {
            var a = C.location.hostname,
                b = $n.exec(C.referrer);
            if (!b) return !1;
            var c = b[2],
                d = b[1],
                e = "";
            if (c) {
                var f = c.split("/"),
                    g = f[1];
                e = "s" === g ? decodeURIComponent(f[2]) : decodeURIComponent(g)
            } else if (d) {
                if (0 === d.indexOf("xn--")) return !1;
                e = d.replace(/-/g, ".").replace(/\.\./g, "-")
            }
            var h = a.replace(ao, ""),
                m = e.replace(ao, ""),
                n;
            if (!(n = h === m)) {
                var p = "." + m;
                n = h.substring(h.length - p.length,
                    h.length) === p
            }
            return n
        },
        ro = function(a, b) {
            return !1 === a ? !1 : a || b || qo()
        };
    var so = ["1"],
        to = {},
        uo = {},
        zo = function(a, b) {
            b = void 0 === b ? !0 : b;
            var c = vo(a.prefix);
            if (!to[c])
                if (wo(c, a.path, a.domain)) {
                    var d = uo[vo(a.prefix)];
                    xo(a, d ? d.id : void 0, d ? d.Bh : void 0)
                } else {
                    var e = sl("auiddc");
                    if (e) Ab("TAGGING", 17), to[c] = e;
                    else if (b) {
                        var f = vo(a.prefix),
                            g = On();
                        if (0 === yo(f, g, a)) {
                            var h = Fc("google_tag_data", {});
                            h._gcl_au || (h._gcl_au = g)
                        }
                        wo(c, a.path, a.domain)
                    }
                }
        };

    function xo(a, b, c) {
        var d = vo(a.prefix),
            e = to[d];
        if (e) {
            var f = e.split(".");
            if (2 === f.length) {
                var g = Number(f[1]) || 0;
                if (g) {
                    var h = e;
                    b && (h = e + "." + b + "." + (c ? c : Math.floor(Ta() / 1E3)));
                    yo(d, h, a, 1E3 * g)
                }
            }
        }
    }

    function yo(a, b, c, d) {
        var e = Qn(b, "1", c.domain, c.path),
            f = Rn(c, d);
        f.Gb = Ao();
        return In(a, e, f)
    }

    function wo(a, b, c) {
        var d = Pn(a, b, c, so, Ao());
        if (!d) return !1;
        Bo(a, d);
        return !0
    }

    function Bo(a, b) {
        var c = b.split(".");
        5 === c.length ? (to[a] = c.slice(0, 2).join("."), uo[a] = {
            id: c.slice(2, 4).join("."),
            Bh: Number(c[4]) || 0
        }) : 3 === c.length ? uo[a] = {
            id: c.slice(0, 2).join("."),
            Bh: Number(c[2]) || 0
        } : to[a] = b
    }

    function vo(a) {
        return (a || "_gcl") + "_au"
    }

    function Co(a) {
        function b() {
            Ej(c) && a()
        }
        var c = Ao();
        Kj(function() {
            b();
            Ej(c) || Lj(b, c)
        }, c)
    }

    function Do(a) {
        var b = ho(!0),
            c = vo(a.prefix);
        Co(function() {
            var d = b[c];
            if (d) {
                Bo(c, d);
                var e = 1E3 * Number(to[c].split(".")[1]);
                if (e) {
                    Ab("TAGGING", 16);
                    var f = Rn(a, e);
                    f.Gb = Ao();
                    var g = Qn(d, "1", a.domain, a.path);
                    In(c, g, f)
                }
            }
        })
    }

    function Eo(a, b, c, d, e) {
        e = e || {};
        var f = function() {
            var g = {},
                h = Pn(a, e.path, e.domain, so, Ao());
            h && (g[a] = h);
            return g
        };
        Co(function() {
            oo(f, b, c, d)
        })
    }

    function Ao() {
        return Qf(14) ? ["ad_storage", "ad_user_data"] : ["ad_storage"]
    };
    var Fo = function(a) {
        for (var b = [], c = C.cookie.split(";"), d = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"), e = 0; e < c.length; e++) {
            var f = c[e].match(d);
            f && b.push({
                Wh: f[1],
                value: f[2],
                timestamp: Number(f[2].split(".")[1]) || 0
            })
        }
        b.sort(function(g, h) {
            return h.timestamp - g.timestamp
        });
        return b
    };

    function Go(a, b) {
        var c = Fo(a),
            d = {};
        if (!c || !c.length) return d;
        for (var e = 0; e < c.length; e++) {
            var f = c[e].value.split(".");
            if (!("1" !== f[0] || b && 3 > f.length || !b && 3 !== f.length) && Number(f[1])) {
                d[c[e].Wh] || (d[c[e].Wh] = []);
                var g = {
                    version: f[0],
                    timestamp: 1E3 * Number(f[1]),
                    aa: f[2]
                };
                b && 3 < f.length && (g.labels = f.slice(3));
                d[c[e].Wh].push(g)
            }
        }
        return d
    };
    var Ho = /^\w+$/,
        Io = /^[\w-]+$/,
        Jo = {
            aw: "_aw",
            dc: "_dc",
            gf: "_gf",
            ha: "_ha",
            gp: "_gp",
            gb: "_gb"
        };

    function Ko() {
        return Qf(14) ? ["ad_storage", "ad_user_data"] : ["ad_storage"]
    }
    var Lo = function(a) {
            return !rj().h() || Ej(a)
        },
        Mo = function(a) {
            function b() {
                var d = Lo(c);
                d && a();
                return d
            }
            var c = Ko();
            Kj(function() {
                b() || Lj(b, c)
            }, c)
        },
        Oo = function(a) {
            return No(a).map(function(b) {
                return b.aa
            })
        },
        No = function(a) {
            var b = [],
                c = zn(a, C.cookie, void 0, Ko());
            if (!c || 0 == c.length) return b;
            for (var d = {}, e = 0; e < c.length; d = {
                    aa: void 0
                }, e++) {
                var f = Po(c[e]);
                if (null != f) {
                    var g = f,
                        h = g.version;
                    d.aa = g.aa;
                    var m = g.timestamp,
                        n = g.labels,
                        p = Ia(b, function(q) {
                            return function(r) {
                                return r.aa === q.aa
                            }
                        }(d));
                    p ? (p.timestamp = Math.max(p.timestamp,
                        m), p.labels = Qo(p.labels, n || [])) : b.push({
                        version: h,
                        aa: d.aa,
                        timestamp: m,
                        labels: n
                    })
                }
            }
            b.sort(function(q, r) {
                return r.timestamp - q.timestamp
            });
            return Ro(b)
        };

    function Qo(a, b) {
        for (var c = {}, d = [], e = 0; e < a.length; e++) c[a[e]] = !0, d.push(a[e]);
        for (var f = 0; f < b.length; f++) c[b[f]] || d.push(b[f]);
        return d
    }

    function So(a) {
        return a && "string" == typeof a && a.match(Ho) ? a : "_gcl"
    }
    var Uo = function() {
            var a = ql(z.location.href),
                b = ll(a, "query", !1, void 0, "gclid"),
                c = ll(a, "query", !1, void 0, "gclsrc"),
                d = ll(a, "query", !1, void 0, "wbraid"),
                e = ll(a, "query", !1, void 0, "dclid");
            if (!b || !c || !d) {
                var f = a.hash.replace("#", "");
                b = b || il(f, "gclid", !1);
                c = c || il(f, "gclsrc", !1);
                d = d || il(f, "wbraid", !1)
            }
            return To(b, c, e, d)
        },
        To = function(a, b, c, d) {
            var e = {},
                f = function(g, h) {
                    e[h] || (e[h] = []);
                    e[h].push(g)
                };
            e.gclid = a;
            e.gclsrc = b;
            e.dclid = c;
            void 0 !== d && Io.test(d) && (e.wbraid = d, f(d, "gb"));
            if (void 0 !== a && a.match(Io)) switch (b) {
                case void 0:
                    f(a,
                        "aw");
                    break;
                case "aw.ds":
                    f(a, "aw");
                    f(a, "dc");
                    break;
                case "ds":
                    f(a, "dc");
                    break;
                case "3p.ds":
                    f(a, "dc");
                    break;
                case "gf":
                    f(a, "gf");
                    break;
                case "ha":
                    f(a, "ha")
            }
            c && f(c, "dc");
            return e
        },
        Wo = function(a) {
            var b = Uo();
            Mo(function() {
                Vo(b, !1, a)
            })
        };

    function Vo(a, b, c, d, e) {
        function f(w, x) {
            var y = Xo(w, g);
            y && (In(y, x, h), m = !0)
        }
        c = c || {};
        e = e || [];
        var g = So(c.prefix);
        d = d || Ta();
        var h = Rn(c, d, !0);
        h.Gb = Ko();
        var m = !1,
            n = Math.round(d / 1E3),
            p = function(w) {
                var x = ["GCL", n, w];
                0 < e.length && x.push(e.join("."));
                return x.join(".")
            };
        a.aw && f("aw", p(a.aw[0]));
        a.dc && f("dc", p(a.dc[0]));
        a.gf && f("gf", p(a.gf[0]));
        a.ha && f("ha", p(a.ha[0]));
        a.gp && f("gp", p(a.gp[0]));
        if (!m && a.gb) {
            var q = a.gb[0],
                r = Xo("gb", g),
                t = !1;
            if (!b)
                for (var u = No(r), v = 0; v < u.length; v++) u[v].aa === q && u[v].labels && 0 < u[v].labels.length &&
                    (t = !0);
            t || f("gb", p(q))
        }
    }
    var Zo = function(a, b) {
            var c = ho(!0);
            Mo(function() {
                for (var d = So(b.prefix), e = 0; e < a.length; ++e) {
                    var f = a[e];
                    if (void 0 !== Jo[f]) {
                        var g = Xo(f, d),
                            h = c[g];
                        if (h) {
                            var m = Math.min(Yo(h), Ta()),
                                n;
                            b: {
                                for (var p = m, q = zn(g, C.cookie, void 0, Ko()), r = 0; r < q.length; ++r)
                                    if (Yo(q[r]) > p) {
                                        n = !0;
                                        break b
                                    }
                                n = !1
                            }
                            if (!n) {
                                var t = Rn(b, m, !0);
                                t.Gb = Ko();
                                In(g, h, t)
                            }
                        }
                    }
                }
                Vo(To(c.gclid, c.gclsrc), !1, b)
            })
        },
        Xo = function(a, b) {
            var c = Jo[a];
            if (void 0 !== c) return b + c
        },
        Yo = function(a) {
            return 0 !== $o(a.split(".")).length ? 1E3 * (Number(a.split(".")[1]) || 0) : 0
        };

    function Po(a) {
        var b = $o(a.split("."));
        return 0 === b.length ? null : {
            version: b[0],
            aa: b[2],
            timestamp: 1E3 * (Number(b[1]) || 0),
            labels: b.slice(3)
        }
    }

    function $o(a) {
        return 3 > a.length || "GCL" !== a[0] && "1" !== a[0] || !/^\d+$/.test(a[1]) || !Io.test(a[2]) ? [] : a
    }
    var ap = function(a, b, c, d, e) {
            if (Ha(b) && "null" !== z.origin) {
                var f = So(e),
                    g = function() {
                        for (var h = {}, m = 0; m < a.length; ++m) {
                            var n = Xo(a[m], f);
                            if (n) {
                                var p = zn(n, C.cookie, void 0, Ko());
                                p.length && (h[n] = p.sort()[p.length - 1])
                            }
                        }
                        return h
                    };
                Mo(function() {
                    oo(g, b, c, d)
                })
            }
        },
        Ro = function(a) {
            return a.filter(function(b) {
                return Io.test(b.aa)
            })
        },
        bp = function(a, b) {
            if ("null" !== z.origin) {
                for (var c = So(b.prefix), d = {}, e = 0; e < a.length; e++) Jo[a[e]] && (d[a[e]] = Jo[a[e]]);
                Mo(function() {
                    l(d, function(f, g) {
                        var h = zn(c + g, C.cookie, void 0, Ko());
                        h.sort(function(t,
                            u) {
                            return Yo(u) - Yo(t)
                        });
                        if (h.length) {
                            var m = h[0],
                                n = Yo(m),
                                p = 0 !== $o(m.split(".")).length ? m.split(".").slice(3) : [],
                                q = {},
                                r;
                            r = 0 !== $o(m.split(".")).length ? m.split(".")[2] : void 0;
                            q[f] = [r];
                            Vo(q, !0, b, n, p)
                        }
                    })
                })
            }
        };

    function cp(a, b) {
        for (var c = 0; c < b.length; ++c)
            if (a[b[c]]) return !0;
        return !1
    }
    var dp = function(a) {
            function b(e, f, g) {
                g && (e[f] = g)
            }
            if (Hj()) {
                var c = Uo();
                if (cp(c, a)) {
                    var d = {};
                    b(d, "gclid", c.gclid);
                    b(d, "dclid", c.dclid);
                    b(d, "gclsrc", c.gclsrc);
                    b(d, "wbraid", c.wbraid);
                    po(function() {
                        return d
                    }, 3);
                    po(function() {
                        var e = {};
                        return e._up = "1", e
                    }, 1)
                }
            }
        },
        ep = function(a) {
            if (!Qf(11)) return null;
            var b = ho(!0).gad_source;
            if (null != b) return z.location.hash = "", b;
            if (Qf(12)) {
                var c = ql(z.location.href);
                b = ll(c, "query", !1, void 0, "gad_source");
                if (null != b) return b;
                var d = Uo();
                if (cp(d, a)) return "0"
            }
            return null
        },
        fp = function(a) {
            var b =
                ep(a);
            null != b && po(function() {
                var c = {};
                return c.gad_source = b, c
            }, 4)
        },
        gp = function(a, b, c, d) {
            var e = [];
            c = c || {};
            if (!Lo(Ko())) return e;
            var f = No(a);
            if (!f.length) return e;
            for (var g = 0; g < f.length; g++) - 1 === (f[g].labels || []).indexOf(b) ? e.push(0) : e.push(1);
            if (d) return e;
            if (1 !== e[0]) {
                var h = f[0],
                    m = f[0].timestamp,
                    n = [h.version, Math.round(m / 1E3), h.aa].concat(h.labels || [], [b]).join("."),
                    p = Rn(c, m, !0);
                p.Gb = Ko();
                In(a, n, p)
            }
            return e
        };

    function hp(a, b) {
        var c = So(b),
            d = Xo(a, c);
        if (!d) return 0;
        for (var e = No(d), f = 0, g = 0; g < e.length; g++) f = Math.max(f, e[g].timestamp);
        return f
    }

    function ip(a) {
        var b = 0,
            c;
        for (c in a)
            for (var d = a[c], e = 0; e < d.length; e++) b = Math.max(b, Number(d[e].timestamp));
        return b
    }
    var jp = function(a) {
        var b = Math.max(hp("aw", a), ip(Lo(Ko()) ? Go() : {}));
        return Math.max(hp("gb", a), ip(Lo(Ko()) ? Go("_gac_gb", !0) : {})) > b
    };
    var zp, Ap = !1;

    function Bp() {
        Ap = !0;
        zp = zp || {}
    }
    var Cp = function(a) {
        Ap || Bp();
        return zp[a]
    };
    var Dp = function(a, b, c) {
        this.target = a;
        this.eventName = b;
        this.o = c;
        this.h = {};
        this.metadata = nb(c.eventMetadata || {});
        this.isAborted = !1
    };
    Dp.prototype.copyToHitData = function(a, b, c) {
        var d = S(this.o, a);
        void 0 === d && (d = b);
        if (void 0 !== d && void 0 !== c && k(d) && R(50)) try {
            d = c(d)
        } catch (e) {}
        void 0 !== d && (this.h[a] = d)
    };
    var Ep = function(a) {
            return a.metadata.source_canonical_id
        },
        Fp = function(a, b, c) {
            var d = Cp(a.target.da);
            return d && d.hasOwnProperty(b) ? d[b] : c
        };

    function Jp(a) {
        var b = S(a.o, N.g.yb),
            c = S(a.o, N.g.Lb);
        b && !c ? (a.eventName !== N.g.sa && a.eventName !== N.g.xd && L(131), a.isAborted = !0) : !b && c && (L(132), a.isAborted = !0)
    }

    function Kp(a) {
        var b = Uj(N.g.J) ? oi.pscdl : "denied";
        a.h[N.g.af] = b
    };
    var Op = function() {
        oi.dedupe_gclid || (oi.dedupe_gclid = "" + On());
        return oi.dedupe_gclid
    };
    var Up = function(a, b, c, d) {
        var e = Lc(),
            f;
        if (1 === e) a: {
            var g = Ci;g = g.toLowerCase();
            for (var h = "https://" + g, m = "http://" + g, n = 1, p = C.getElementsByTagName("script"), q = 0; q < p.length && 100 > q; q++) {
                var r = p[q].src;
                if (r) {
                    r = r.toLowerCase();
                    if (0 === r.indexOf(m)) {
                        f = 3;
                        break a
                    }
                    1 === n && 0 === r.indexOf(h) && (n = 2)
                }
            }
            f = n
        }
        else f = e;
        return (2 === f || d || "http:" != z.location.protocol ? a : b) + c
    };
    var Wp = function(a, b, c) {
            if (z[a.functionName]) return b.Gh && G(b.Gh), z[a.functionName];
            var d = Vp();
            z[a.functionName] = d;
            if (a.Cf)
                for (var e = 0; e < a.Cf.length; e++) z[a.Cf[e]] = z[a.Cf[e]] || Vp();
            a.Kf && void 0 === z[a.Kf] && (z[a.Kf] = c);
            Kc(Up("https://", "http://", a.Sh), b.Gh, b.Jm);
            return d
        },
        Vp = function() {
            var a = function() {
                a.q = a.q || [];
                a.q.push(arguments)
            };
            return a
        },
        Xp = {
            functionName: "_googWcmImpl",
            Kf: "_googWcmAk",
            Sh: "www.gstatic.com/wcm/loader.js"
        },
        Yp = {
            functionName: "_gaPhoneImpl",
            Kf: "ga_wpid",
            Sh: "www.gstatic.com/gaphone/loader.js"
        },
        Zp = {
            jk: "",
            bl: "5"
        },
        $p = {
            functionName: "_googCallTrackingImpl",
            Cf: [Yp.functionName, Xp.functionName],
            Sh: "www.gstatic.com/call-tracking/call-tracking_" + (Zp.jk || Zp.bl) + ".js"
        },
        aq = {},
        bq = function(a, b, c, d) {
            L(22);
            if (c) {
                d = d || {};
                var e = Wp(Xp, d, a),
                    f = {
                        ak: a,
                        cl: b
                    };
                void 0 === d.Fb && (f.autoreplace = c);
                e(2, d.Fb, f, c, 0, Sa(), d.options)
            }
        },
        cq = function(a, b, c, d, e) {
            L(21);
            if (b && c) {
                e = e || {};
                for (var f = {
                        countryNameCode: c,
                        destinationNumber: b,
                        retrievalTime: Sa()
                    }, g = 0; g < a.length; g++) {
                    var h = a[g];
                    aq[h.id] ||
                        (h && "AW" === h.prefix && !f.adData && 2 <= h.P.length ? (f.adData = {
                            ak: h.P[0],
                            cl: h.P[1]
                        }, R(99) && (f.adData.dma = pn(), qn() && (f.adData.dmaCps = on()), Ym(d) ? f.adData.npa = 0 : f.adData.npa = 1), aq[h.id] = !0) : h && "UA" === h.prefix && !f.gaData && (f.gaData = {
                            gaWpid: h.da
                        }, aq[h.id] = !0))
                }(f.gaData || f.adData) && Wp($p, e)(e.Fb, f, e.options)
            }
        },
        dq = function() {
            var a = !1;
            return a
        },
        eq = function(a, b) {
            if (a)
                if (sn()) {} else {
                    if (k(a)) {
                        var c = dk(a);
                        if (!c) return;
                        a = c
                    }
                    var d = void 0,
                        e = !1,
                        f = S(b, N.g.Oi);
                    if (f && Ha(f)) {
                        d = [];
                        for (var g = 0; g < f.length; g++) {
                            var h = dk(f[g]);
                            h && (d.push(h), (a.id === h.id || a.id === a.da && a.da === h.da) && (e = !0))
                        }
                    }
                    if (!d || e) {
                        var m = S(b, N.g.Fg),
                            n;
                        if (m) {
                            Ha(m) ? n = m : n = [m];
                            var p = S(b, N.g.Dg),
                                q = S(b, N.g.Eg),
                                r = S(b, N.g.Gg),
                                t = S(b, N.g.Ni),
                                u = p || q,
                                v = 1;
                            "UA" !== a.prefix || d || (v = 5);
                            for (var w = 0; w < n.length; w++)
                                if (w < v)
                                    if (d) cq(d, n[w], t, b, {
                                        Fb: u,
                                        options: r
                                    });
                                    else if ("AW" === a.prefix && a.P[1]) dq() ? cq([a],
                                n[w], t || "US", b, {
                                    Fb: u,
                                    options: r
                                }) : bq(a.P[0], a.P[1], n[w], {
                                Fb: u,
                                options: r
                            });
                            else if ("UA" === a.prefix)
                                if (dq()) cq([a], n[w], t || "US", b, {
                                    Fb: u
                                });
                                else {
                                    var x = a.da,
                                        y = n[w],
                                        A = {
                                            Fb: u
                                        };
                                    L(23);
                                    if (y) {
                                        A = A || {};
                                        var B = Wp(Yp, A, x),
                                            E = {};
                                        void 0 !== A.Fb ? E.receiver = A.Fb : E.replace = y;
                                        E.ga_wpid = x;
                                        E.destination = y;
                                        B(2, Sa(), E)
                                    }
                                }
                        }
                    }
                }
        };

    function fq(a) {
        return {
            getDestinationId: function() {
                return a.target.da
            },
            getEventName: function() {
                return a.eventName
            },
            setEventName: function(b) {
                a.eventName = b
            },
            getHitData: function(b) {
                return a.h[b]
            },
            setHitData: function(b, c) {
                a.h[b] = c
            },
            setHitDataIfNotDefined: function(b, c) {
                void 0 === a.h[b] && (a.h[b] = c)
            },
            copyToHitData: function(b, c) {
                a.copyToHitData(b, c)
            },
            getMetadata: function(b) {
                return a.metadata[b]
            },
            setMetadata: function(b, c) {
                a.metadata[b] = c
            },
            isAborted: function() {
                return a.isAborted
            },
            abort: function() {
                a.isAborted = !0
            },
            getFromEventContext: function(b) {
                return S(a.o, b)
            },
            Dj: function() {
                return a
            },
            getHitKeys: function() {
                return Object.keys(a.h)
            }
        }
    };

    function mq(a, b) {
        if (a) {
            var c = "" + a;
            0 !== c.indexOf("http://") && 0 !== c.indexOf("https://") && (c = "https://" + c);
            "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
            return ql("" + c + b).href
        }
    }

    function nq() {
        return !!ni.zf && "SGTM_TOKEN" !== ni.zf.split("@@").join("")
    }

    function oq(a) {
        for (var b = fa([N.g.Sd, N.g.Pb]), c = b.next(); !c.done; c = b.next()) {
            var d = S(a, c.value);
            if (d) return d
        }
    };
    var qq = /^(www\.)?google(\.com?)?(\.[a-z]{2}t?)?$/,
        rq = /^www.googleadservices.com$/,
        tq = function(a) {
            a || (a = sq());
            return a.rn ? !1 : a.am || a.bm || a.dm || a.rh || a.If || a.Kl || a.Sl ? !0 : !1
        },
        sq = function() {
            var a = {},
                b = ho(!0);
            a.rn = !!b._up;
            var c = Uo();
            a.am = void 0 !== c.aw;
            a.bm = void 0 !== c.dc;
            a.dm = void 0 !== c.wbraid;
            var d = ql(z.location.href),
                e = ll(d, "query", !1, void 0, "gad");
            a.rh = void 0 !== e;
            if (!a.rh) {
                var f = d.hash.replace("#", ""),
                    g = il(f, "gad", !1);
                a.rh = void 0 !== g
            }
            a.If = void 0;
            if (R(58)) {
                var h = ll(d, "query", !1, void 0, "gad_source");
                a.If =
                    h;
                if (void 0 === a.If) {
                    var m = d.hash.replace("#", ""),
                        n = il(m, "gad_source", !1);
                    a.If = n
                }
            }
            var p = C.referrer ? ll(ql(C.referrer), "host") : "";
            a.Sl = qq.test(p);
            a.Kl = rq.test(p);
            return a
        };
    var uq = function() {
            var a = z.screen;
            return {
                width: a ? a.width : 0,
                height: a ? a.height : 0
            }
        },
        vq = function(a) {
            if (C.hidden) return !0;
            var b = a.getBoundingClientRect();
            if (b.top == b.bottom || b.left == b.right || !z.getComputedStyle) return !0;
            var c = z.getComputedStyle(a, null);
            if ("hidden" === c.visibility) return !0;
            for (var d = a, e = c; d;) {
                if ("none" === e.display) return !0;
                var f = e.opacity,
                    g = e.filter;
                if (g) {
                    var h = g.indexOf("opacity(");
                    0 <= h && (g = g.substring(h + 8, g.indexOf(")", h)), "%" == g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1)), f = Math.min(g,
                        f))
                }
                if (void 0 !== f && 0 >= f) return !0;
                (d = d.parentElement) && (e = z.getComputedStyle(d, null))
            }
            return !1
        };
    var wq = function() {
            var a = C.body,
                b = C.documentElement || a && a.parentElement,
                c, d;
            if (C.compatMode && "BackCompat" !== C.compatMode) c = b ? b.clientHeight : 0, d = b ? b.clientWidth : 0;
            else {
                var e = function(f, g) {
                    return f && g ? Math.min(f, g) : Math.max(f, g)
                };
                c = e(b ? b.clientHeight : 0, a ? a.clientHeight : 0);
                d = e(b ? b.clientWidth : 0, a ? a.clientWidth : 0)
            }
            return {
                width: d,
                height: c
            }
        },
        xq = function(a) {
            var b = wq(),
                c = b.height,
                d = b.width,
                e = a.getBoundingClientRect(),
                f = e.bottom - e.top,
                g = e.right - e.left;
            return f && g ? (1 - Math.min((Math.max(0 - e.left, 0) + Math.max(e.right -
                d, 0)) / g, 1)) * (1 - Math.min((Math.max(0 - e.top, 0) + Math.max(e.bottom - c, 0)) / f, 1)) : 0
        };
    var yq = [],
        zq = !(!z.IntersectionObserver || !z.IntersectionObserverEntry),
        Aq = function(a, b, c) {
            for (var d = new z.IntersectionObserver(a, {
                    threshold: c
                }), e = 0; e < b.length; e++) d.observe(b[e]);
            for (var f = 0; f < yq.length; f++)
                if (!yq[f]) return yq[f] = d, f;
            return yq.push(d) - 1
        },
        Bq = function(a, b, c) {
            function d(h, m) {
                var n = {
                        top: 0,
                        bottom: 0,
                        right: 0,
                        left: 0,
                        width: 0,
                        height: 0
                    },
                    p = {
                        boundingClientRect: h.getBoundingClientRect(),
                        intersectionRatio: m,
                        intersectionRect: n,
                        isIntersecting: 0 < m,
                        rootBounds: n,
                        target: h,
                        time: Ta()
                    };
                G(function() {
                    return a(p)
                })
            }
            for (var e = [], f = [], g = 0; g < b.length; g++) e.push(0), f.push(-1);
            c.sort(function(h, m) {
                return h - m
            });
            return function() {
                for (var h = 0; h < b.length; h++) {
                    var m = xq(b[h]);
                    if (m > e[h])
                        for (; f[h] < c.length - 1 && m >= c[f[h] + 1];) d(b[h], m), f[h]++;
                    else if (m < e[h])
                        for (; 0 <= f[h] && m <= c[f[h]];) d(b[h], m), f[h]--;
                    e[h] = m
                }
            }
        },
        Cq = function(a, b, c) {
            for (var d = 0; d < c.length; d++) 1 < c[d] ? c[d] = 1 : 0 > c[d] && (c[d] = 0);
            if (zq) {
                var e = !1;
                G(function() {
                    e ||
                        Bq(a, b, c)()
                });
                return Aq(function(f) {
                    e = !0;
                    for (var g = {
                            Fe: 0
                        }; g.Fe < f.length; g = {
                            Fe: g.Fe
                        }, g.Fe++) G(function(h) {
                        return function() {
                            return a(f[h.Fe])
                        }
                    }(g))
                }, b, c)
            }
            return z.setInterval(Bq(a, b, c), 1E3)
        },
        Dq = function(a) {
            zq ? 0 <= a && a < yq.length && yq[a] && (yq[a].disconnect(), yq[a] = void 0) : z.clearInterval(a)
        };
    var pr = {
        jl: Number('') || 500,
        Ok: Number('') || 5E3,
        bj: Number('') || 10,
        vk: Number('') || 5E3
    };

    function qr(a) {
        return a.performance && a.performance.now() || Date.now()
    }
    var rr = function(a, b) {
        var c;
        return c
    };
    var sr = "https://" + ni.wd,
        tr = sr + "/gtm/static/",
        ur = Number('') || 5,
        vr = Number('') || 50,
        wr = sr,
        xr = tr,
        yr = !1,
        zr = 0,
        Ar = Ja();

    function Jr() {
        var a = !1;
        return a
    }

    function Kr(a) {}

    function Mr(a, b, c) {}

    function Fr(a, b, c, d) {}

    function Lr(a, b, c, d, e) {}

    function Nr(a, b, c, d) {}

    function Or(a, b, c, d) {}

    function Pr(a) {
        var b = {},
            c = ["tv.1"],
            d = 0;
        var u = c.join("~");
        return {
            U: b,
            Nf: u
        }
    }
    var Qr = void 0;

    function Rr(a) {
        var b = "";
        return b
    };
    var Sr = function(a) {
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            128 > e ? b[c++] = e : (2048 > e ? b[c++] = e >> 6 | 192 : (55296 == (e & 64512) && d + 1 < a.length && 56320 == (a.charCodeAt(d + 1) & 64512) ? (e = 65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023), b[c++] = e >> 18 | 240, b[c++] = e >> 12 & 63 | 128) : b[c++] = e >> 12 | 224, b[c++] = e >> 6 & 63 | 128), b[c++] = e & 63 | 128)
        }
        return b
    };
    bc();
    km() || Zb("iPod");
    Zb("iPad");
    !Zb("Android") || cc() || bc() || ac() || Zb("Silk");
    cc();
    !Zb("Safari") || cc() || ($b() ? 0 : Zb("Coast")) || ac() || ($b() ? 0 : Zb("Edge")) || ($b() ? Yb("Microsoft Edge") : Zb("Edg/")) || ($b() ? Yb("Opera") : Zb("OPR")) || bc() || Zb("Silk") || Zb("Android") || lm();
    var Tr = {},
        Ur = null,
        Vr = function(a) {
            for (var b = [], c = 0, d = 0; d < a.length; d++) {
                var e = a.charCodeAt(d);
                255 < e && (b[c++] = e & 255, e >>= 8);
                b[c++] = e
            }
            var f = 4;
            void 0 === f && (f = 0);
            if (!Ur) {
                Ur = {};
                for (var g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), h = ["+/=", "+/", "-_=", "-_.", "-_"], m = 0; 5 > m; m++) {
                    var n = g.concat(h[m].split(""));
                    Tr[m] = n;
                    for (var p = 0; p < n.length; p++) {
                        var q = n[p];
                        void 0 === Ur[q] && (Ur[q] = p)
                    }
                }
            }
            for (var r = Tr[f], t = Array(Math.floor(b.length / 3)), u = r[64] || "", v = 0, w = 0; v < b.length - 2; v += 3) {
                var x = b[v],
                    y = b[v + 1],
                    A = b[v + 2],
                    B = r[x >> 2],
                    E = r[(x & 3) << 4 | y >> 4],
                    F = r[(y & 15) << 2 | A >> 6],
                    D = r[A & 63];
                t[w++] = "" + B + E + F + D
            }
            var M = 0,
                O = u;
            switch (b.length - v) {
                case 2:
                    M = b[v + 1], O = r[(M & 15) << 2] || u;
                case 1:
                    var P = b[v];
                    t[w] = "" + r[P >> 2] + r[(P & 3) << 4 | M >> 4] + O + u
            }
            return t.join("")
        };
    Object.freeze(new function() {});
    Object.freeze(new function() {});
    var Wr = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");

    function Xr(a) {
        var b;
        return null != (b = a.google_tag_data) ? b : a.google_tag_data = {}
    }

    function Yr() {
        var a = z.google_tag_data,
            b;
        if (null != a && a.uach) {
            var c = a.uach,
                d = Object.assign({}, c);
            c.fullVersionList && (d.fullVersionList = c.fullVersionList.slice(0));
            b = d
        } else b = null;
        return b
    }

    function Zr() {
        var a, b;
        return null != (b = null == (a = z.google_tag_data) ? void 0 : a.uach_promise) ? b : null
    }

    function $r(a) {
        var b, c;
        return "function" === typeof(null == (b = a.navigator) ? void 0 : null == (c = b.userAgentData) ? void 0 : c.getHighEntropyValues)
    }

    function as() {
        var a = z;
        if (!$r(a)) return null;
        var b = Xr(a);
        if (b.uach_promise) return b.uach_promise;
        var c = a.navigator.userAgentData.getHighEntropyValues(Wr).then(function(d) {
            null != b.uach || (b.uach = d);
            return d
        });
        return b.uach_promise = c
    };
    var bs, cs = function() {
            if ($r(z) && (bs = Ta(), !Zr())) {
                var a = as();
                a && (a.then(function() {
                    L(95);
                }), a.catch(function() {
                    L(96)
                }))
            }
        },
        es = function(a) {
            var b = ds.pn,
                c = function(g, h) {
                    try {
                        a(g, h)
                    } catch (m) {}
                },
                d = Yr();
            if (d) c(d);
            else {
                var e = Zr();
                if (e) {
                    b =
                        Math.min(Math.max(isFinite(b) ? b : 0, 0), 1E3);
                    var f = z.setTimeout(function() {
                        c.He || (c.He = !0, L(106), c(null, Error("Timeout")))
                    }, b);
                    e.then(function(g) {
                        c.He || (c.He = !0, L(104), z.clearTimeout(f), c(g))
                    }).catch(function(g) {
                        c.He || (c.He = !0, L(105), z.clearTimeout(f), c(null, g))
                    })
                } else c(null)
            }
        },
        fs = function(a, b) {
            a && (b.h[N.g.Wd] = a.architecture, b.h[N.g.Xd] = a.bitness, a.fullVersionList && (b.h[N.g.Yd] = a.fullVersionList.map(function(c) {
                    return encodeURIComponent(c.brand || "") + ";" + encodeURIComponent(c.version || "")
                }).join("|")),
                b.h[N.g.Zd] = a.mobile ? "1" : "0", b.h[N.g.ae] = a.model, b.h[N.g.be] = a.platform, b.h[N.g.ce] = a.platformVersion, b.h[N.g.de] = a.wow64 ? "1" : "0")
        };

    function gs() {
        return "attribution-reporting"
    }

    function hs(a) {
        var b;
        b = void 0 === b ? document : b;
        var c;
        return !(null == (c = b.featurePolicy) || !c.allowedFeatures().includes(a))
    };
    var is = !1;

    function js() {
        if (hs("join-ad-interest-group") && Fa(Dc.joinAdInterestGroup)) return !0;
        is || (tm('AymqwRC7u88Y4JPvfIF2F37QKylC04248hLCdJAsh8xgOfe/dVJPV3XS3wLFca1ZMVOtnBfVjaCMTVudWM//5g4AAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1RoaXJkUGFydHkiOnRydWV9'), is = !0);
        return hs("join-ad-interest-group") && Fa(Dc.joinAdInterestGroup)
    }

    function ks(a, b) {
        var c = void 0;
        try {
            c = C.querySelector('iframe[data-tagging-id="' + b + '"]')
        } catch (e) {}
        if (c) {
            var d = Number(c.dataset.loadTime);
            if (d && 6E4 > Ta() - d) {
                Ab("TAGGING", 9);
                return
            }
            try {
                c.parentNode.removeChild(c)
            } catch (e) {}
            c = void 0
        } else try {
            if (50 <= C.querySelectorAll('iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]').length) {
                Ab("TAGGING", 10);
                return
            }
        } catch (e) {}
        Mc(a, void 0, {
            allow: "join-ad-interest-group"
        }, {
            taggingId: b,
            loadTime: Ta()
        }, c)
    }

    function ls() {
        return "https://td.doubleclick.net"
    };
    var ms = RegExp("^UA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*(?:%3BUA-\\d+-\\d+%3A[\\w-]+(?:%2C[\\w-]+)*)*$"),
        ns = /^~?[\w-]+(?:\.~?[\w-]+)*$/,
        os = /^\d+\.fls\.doubleclick\.net$/,
        ps = /;gac=([^;?]+)/,
        qs = /;gacgb=([^;?]+)/,
        rs = /;gclaw=([^;?]+)/,
        ss = /;gclgb=([^;?]+)/;

    function ts(a, b) {
        if (os.test(C.location.host)) {
            var c = C.location.href.match(b);
            return c && 2 == c.length && c[1].match(ms) ? decodeURIComponent(c[1]) : ""
        }
        var d = [],
            e;
        for (e in a) {
            for (var f = [], g = a[e], h = 0; h < g.length; h++) f.push(g[h].aa);
            d.push(e + ":" + f.join(","))
        }
        return 0 < d.length ? d.join(";") : ""
    }
    var us = function(a, b, c) {
        var d = Lo(Ko()) ? Go("_gac_gb", !0) : {},
            e = [],
            f = !1,
            g;
        for (g in d) {
            var h = gp("_gac_gb_" + g, a, b, c);
            f = f || 0 !== h.length && h.some(function(m) {
                return 1 === m
            });
            e.push(g + ":" + h.join(","))
        }
        return {
            Jl: f ? e.join(";") : "",
            Il: ts(d, qs)
        }
    };

    function vs(a, b, c) {
        if (os.test(C.location.host)) {
            var d = C.location.href.match(c);
            if (d && 2 == d.length && d[1].match(ns)) return [{
                aa: d[1]
            }]
        } else return No((a || "_gcl") + b);
        return []
    }
    var ws = function(a) {
            return vs(a, "_aw", rs).map(function(b) {
                return b.aa
            }).join(".")
        },
        xs = function(a) {
            return vs(a, "_gb", ss).map(function(b) {
                return b.aa
            }).join(".")
        },
        ys = function(a, b) {
            var c = gp((b && b.prefix || "_gcl") + "_gb", a, b);
            return 0 === c.length || c.every(function(d) {
                return 0 === d
            }) ? "" : c.join(".")
        };
    var zs = function() {
        if (Fa(z.__uspapi)) {
            var a = "";
            try {
                z.__uspapi("getUSPData", 1, function(b, c) {
                    if (c && b) {
                        var d = b.uspString;
                        d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d)
                    }
                })
            } catch (b) {}
            return a
        }
    };
    var nt = {
        H: {
            Zh: "ads_conversion_hit",
            vd: "container_execute_start",
            di: "container_setup_end",
            Yf: "container_setup_start",
            ai: "container_blocking_end",
            bi: "container_execute_end",
            ei: "container_yield_end",
            Zf: "container_yield_start",
            Ui: "event_execute_end",
            Ti: "event_evaluation_end",
            Qg: "event_evaluation_start",
            Vi: "event_setup_end",
            he: "event_setup_start",
            Wi: "ga4_conversion_hit",
            je: "page_load",
            Kn: "pageview",
            Ub: "snippet_load",
            lj: "tag_callback_error",
            mj: "tag_callback_failure",
            nj: "tag_callback_success",
            oj: "tag_execute_end",
            gd: "tag_execute_start"
        }
    };

    function ot() {
        function a(c, d) {
            var e = Cb(d);
            e && b.push(c + "=" + e)
        }
        var b = [];
        a("&u", "GTM");
        a("&ut", "TAGGING");
        a("&h", "HEALTH");
        return b.join("")
    };
    var pt = !1;
    var Yt = function(a, b) {},
        Zt = function(a, b) {},
        $t = function(a, b) {},
        au = function(a, b) {},
        bu = function() {
            var a = {};
            return a
        },
        Qt = function(a) {
            a = void 0 === a ? !0 : a;
            var b = {};
            return b
        },
        cu = function() {},
        du = function(a, b) {},
        eu = function(a, b, c) {},
        fu = function() {};
    var gu = function(a, b) {
        var c = z,
            d, e = c.GooglebQhCsO;
        e || (e = {}, c.GooglebQhCsO = e);
        d = e;
        if (d[a]) return !1;
        d[a] = [];
        d[a][0] = b;
        return !0
    };
    var hu = function(a, b, c) {
        var d = om(a, "fmt");
        if (b) {
            var e = om(a, "random"),
                f = om(a, "label") || "";
            if (!e) return !1;
            var g = Vr(decodeURIComponent(f.replace(/\+/g, " ")) + ":" + decodeURIComponent(e.replace(/\+/g, " ")));
            if (!gu(g, b)) return !1
        }
        d && 4 != d && (a = qm(a, "rfmt", d));
        var h = qm(a, "fmt", 4);
        Kc(h, function() {
            z.google_noFurtherRedirects && b && b.call && (z.google_noFurtherRedirects = null, b())
        }, void 0, c, C.getElementsByTagName("script")[0].parentElement || void 0);
        return !0
    };
    var yu = function() {
            this.h = {}
        },
        zu = function(a, b, c) {
            null != c && (a.h[b] = c)
        },
        Au = function(a) {
            return Object.keys(a.h).map(function(b) {
                return encodeURIComponent(b) + "=" + encodeURIComponent(a.h[b])
            }).join("&")
        },
        Cu = function(a, b, c, d) {};

    function Eu(a, b) {
        if (data.entities && data.entities[a]) return data.entities[a][b]
    };
    var Gu = function(a, b, c) {
            c = void 0 === c ? !1 : c;
            var d = Fu(a);
            d.entity.push(b);
            d._entity || (d._entity = {
                internal: [],
                external: []
            });
            c ? d._entity.external.push(b) : d._entity.internal.push(b)
        },
        Hu = function() {
            var a = Fu(uk());
            if (R(92)) {
                var b, c;
                return [].concat(ja((null == a ? void 0 : null == (b = a._entity) ? void 0 : b.internal) || []), ja((null == a ? void 0 : null == (c = a._entity) ? void 0 : c.external) || []))
            }
            return a.entity
        },
        Iu = function(a, b, c) {
            c = void 0 === c ? !1 : c;
            var d = Fu(a);
            d.event && (d.event.push(b), d._event || (d._event = {
                    internal: [],
                    external: []
                }),
                c ? d._event.external.push(b) : d._event.internal.push(b))
        },
        Ju = function() {
            var a = Fu(uk());
            if (R(92)) {
                var b, c;
                return [].concat(ja((null == a ? void 0 : null == (b = a._event) ? void 0 : b.internal) || []), ja((null == a ? void 0 : null == (c = a._event) ? void 0 : c.external) || []))
            }
            return a.event || []
        };

    function Fu(a) {
        var b, c = oi.r;
        c || (c = new Ku, oi.r = c);
        b = c;
        var d = b.container[a];
        d || (d = {
            entity: [],
            event: [],
            _entity: {
                internal: [],
                external: []
            },
            _event: {
                internal: [],
                external: []
            }
        }, b.container[a] = d);
        return d
    }
    var Ku = function() {
            this.container = {};
            this.h = {}
        },
        Lu = function(a, b) {
            var c = a.container[b];
            c || (c = {
                entity: [],
                event: [],
                _entity: {
                    internal: [],
                    external: []
                },
                _event: {
                    internal: [],
                    external: []
                }
            }, a.container[b] = c);
            return c
        };
    Ku.prototype.addRestriction = function(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        if (!d || !this.h[b]) {
            var e = Lu(this, b);
            0 === a ? d ? e._entity.external.push(c) : e._entity.internal.push(c) : 1 === a && (d ? e._event.external.push(c) : e._event.internal.push(c))
        }
    };
    Ku.prototype.getRestrictions = function(a, b) {
        var c = Lu(this, b);
        if (0 === a) {
            var d, e;
            return [].concat(ja((null == c ? void 0 : null == (d = c._entity) ? void 0 : d.internal) || []), ja((null == c ? void 0 : null == (e = c._entity) ? void 0 : e.external) || []))
        }
        if (1 === a) {
            var f, g;
            return [].concat(ja((null == c ? void 0 : null == (f = c._event) ? void 0 : f.internal) || []), ja((null == c ? void 0 : null == (g = c._event) ? void 0 : g.external) || []))
        }
        return []
    };
    Ku.prototype.getExternalRestrictions = function(a, b) {
        var c = Lu(this, b),
            d, e;
        return 0 === a ? (null == c ? void 0 : null == (d = c._entity) ? void 0 : d.external) || [] : (null == c ? void 0 : null == (e = c._event) ? void 0 : e.external) || []
    };
    Ku.prototype.removeExternalRestrictions = function(a) {
        var b = Lu(this, a);
        b._event && (b._event.external = []);
        b._entity && (b._entity.external = []);
        this.h[a] = !0
    };
    var Mu = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),
        Nu = {
            cl: ["ecl"],
            customPixels: ["nonGooglePixels"],
            ecl: ["cl"],
            ehl: ["hl"],
            gaawc: ["googtag"],
            hl: ["ehl"],
            html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
            nonGooglePixels: [],
            nonGoogleScripts: ["nonGooglePixels"],
            nonGoogleIframes: ["nonGooglePixels"]
        },
        Ou = {
            cl: ["ecl"],
            customPixels: ["customScripts",
                "html"
            ],
            ecl: ["cl"],
            ehl: ["hl"],
            gaawc: ["googtag"],
            hl: ["ehl"],
            html: ["customScripts"],
            customScripts: ["html"],
            nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
            nonGoogleScripts: ["customScripts", "html"],
            nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
        },
        Pu = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" "),
        Su = function(a) {
            var b = Oi("gtm.allowlist") || Oi("gtm.whitelist");
            b && L(9);
            ui && (b = ["google", "gtagfl",
                "lcl", "zone"
            ]);
            Qu() && (ui ? L(116) : (L(117), Ru && (b = [], window.console && window.console.log && window.console.log("GTM blocked. See go/13687728."))));
            var c = b && Xa(Pa(b), Nu),
                d = Oi("gtm.blocklist") || Oi("gtm.blacklist");
            d || (d = Oi("tagTypeBlacklist")) && L(3);
            d ? L(8) : d = [];
            Qu() && (d = Pa(d), d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
            0 <= Pa(d).indexOf("google") && L(2);
            var e = d && Xa(Pa(d), Ou),
                f = {};
            return function(g) {
                var h = g && g[Me.ka];
                if (!h || "string" != typeof h) return !0;
                h = h.replace(/^_*/, "");
                if (void 0 !== f[h]) return f[h];
                var m = Gi[h] || [],
                    n = a(h, m);
                if (!R(89))
                    for (var p = Hu(), q = 0; q < p.length; q++) try {
                        n = n && p[q](h, m)
                    } catch (y) {
                        n = !1
                    }
                if (b) {
                    var r;
                    if (r = n) a: {
                        if (0 > c.indexOf(h))
                            if (m && 0 < m.length)
                                for (var t = 0; t < m.length; t++) {
                                    if (0 > c.indexOf(m[t])) {
                                        L(11);
                                        r = !1;
                                        break a
                                    }
                                } else {
                                    r = !1;
                                    break a
                                }
                        r = !0
                    }
                    n = r
                }
                var u = !1;
                if (d) {
                    var v = 0 <= e.indexOf(h);
                    if (v) u = v;
                    else {
                        var w = La(e, m || []);
                        w && L(10);
                        u = w
                    }
                }
                var x = !n || u;
                x || !(0 <= m.indexOf("sandboxedScripts")) || c && -1 !== c.indexOf("sandboxedScripts") || (x = La(e, Pu));
                return f[h] = x
            }
        },
        Ru = !1;
    Ru = !0;
    var Qu = function() {
            return Mu.test(z.location && z.location.hostname)
        },
        Tu = function() {
            if (mk) {
                var a = function(b) {
                    var c = vf(b),
                        d;
                    if (Af(c)) {
                        var e = c[Me.ka];
                        if (!e) throw "Error: No function name given for function call.";
                        var f = of [e];
                        d = !!f && !!f.runInSiloedMode
                    } else d = !!Eu(c[Me.ka], 4);
                    return d
                };
                R(89) ? Gu(uk(), function(b) {
                    return a(b.entityId)
                }) : Gu(uk(), a)
            }
        };
    var Vu = function(a, b, c, d, e) {
            if (!Uu() && !Ak(a)) {
                var f = "?id=" + encodeURIComponent(a) + "&l=" + ni.fa,
                    g = 0 === a.indexOf("GTM-");
                g || (f += "&cx=c");
                R(38) && (f += "&gtm=" + un());
                var h = nq();
                h && (f += "&sign=" + ni.zf);
                var m = c ? "/gtag/js" : "/gtm.js",
                    n = wi || yi ? mq(b, m + f) : void 0;
                if (!n) {
                    var p = ni.wd + m;
                    h && Ec && g && (p = Ec.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]);
                    n = Up("https://", "http://", p + f)
                }
                var q = a;
                d.siloed && (Dk({
                    ctid: q,
                    isDestination: !1
                }), q = ok(q));
                var r = q,
                    t = Ck();
                ik().container[r] = {
                    state: 1,
                    context: d,
                    parent: t
                };
                jk({
                        ctid: r,
                        isDestination: !1
                    },
                    e);
                Kc(n)
            }
        },
        Wu = function(a, b, c, d) {
            if (!Uu() && !Bk(a))
                if (Ek()) ik().destination[a] = {
                    state: 0,
                    transportUrl: b,
                    context: c,
                    parent: Ck()
                }, jk({
                    ctid: a,
                    isDestination: !0
                }, d), L(91);
                else {
                    var e = "/gtag/destination?id=" + encodeURIComponent(a) + "&l=" + ni.fa + "&cx=c";
                    R(38) && (e += "&gtm=" + un());
                    nq() && (e += "&sign=" + ni.zf);
                    var f = wi || yi ? mq(b, e) : void 0;
                    f || (f = Up("https://", "http://", ni.wd + e));
                    var g = a;
                    c.siloed && (Dk({
                        ctid: g,
                        isDestination: !0
                    }), g = ok(g));
                    ik().destination[g] = {
                        state: 1,
                        context: c,
                        parent: Ck()
                    };
                    jk({
                        ctid: g,
                        isDestination: !0
                    }, d);
                    Kc(f)
                }
        };

    function Uu() {
        if (sn()) {
            return !0
        }
        return !1
    };
    var Xu = !1,
        Yu = 0,
        Zu = [];

    function $u(a) {
        if (!Xu) {
            var b = C.createEventObject,
                c = "complete" == C.readyState,
                d = "interactive" == C.readyState;
            if (!a || "readystatechange" != a.type || c || !b && d) {
                Xu = !0;
                for (var e = 0; e < Zu.length; e++) G(Zu[e])
            }
            Zu.push = function() {
                for (var f = 0; f < arguments.length; f++) G(arguments[f]);
                return 0
            }
        }
    }

    function av() {
        if (!Xu && 140 > Yu) {
            Yu++;
            try {
                C.documentElement.doScroll("left"), $u()
            } catch (a) {
                z.setTimeout(av, 50)
            }
        }
    }
    var bv = function(a) {
        Xu ? a() : Zu.push(a)
    };
    var dv = function(a, b, c) {
        return {
            entityType: a,
            indexInOriginContainer: b,
            nameInOriginContainer: c,
            originContainerId: tk()
        }
    };
    var fv = function(a, b) {
            this.h = !1;
            this.F = [];
            this.M = {
                tags: []
            };
            this.X = !1;
            this.s = this.C = 0;
            ev(this, a, b)
        },
        gv = function(a, b, c, d) {
            if (ri.hasOwnProperty(b) || "__zone" === b) return -1;
            var e = {};
            lb(d) && (e = nb(d, e));
            e.id = c;
            e.status = "timeout";
            return a.M.tags.push(e) - 1
        },
        hv = function(a, b, c, d) {
            var e = a.M.tags[b];
            e && (e.status = c, e.executionTime = d)
        },
        iv = function(a) {
            if (!a.h) {
                for (var b = a.F, c = 0; c < b.length; c++) b[c]();
                a.h = !0;
                a.F.length = 0
            }
        },
        ev = function(a, b, c) {
            void 0 !== b && a.Bf(b);
            c && z.setTimeout(function() {
                return iv(a)
            }, Number(c))
        };
    fv.prototype.Bf = function(a) {
        var b = this,
            c = Va(function() {
                return G(function() {
                    a(tk(), b.M)
                })
            });
        this.h ? c() : this.F.push(c)
    };
    var jv = function(a) {
            a.C++;
            return Va(function() {
                a.s++;
                a.X && a.s >= a.C && iv(a)
            })
        },
        kv = function(a) {
            a.X = !0;
            a.s >= a.C && iv(a)
        };
    var lv = {},
        nv = function() {
            return z[mv()]
        },
        ov = !1;
    var pv = function(a) {
            z.GoogleAnalyticsObject || (z.GoogleAnalyticsObject = a || "ga");
            var b = z.GoogleAnalyticsObject;
            if (z[b]) z.hasOwnProperty(b);
            else {
                var c = function() {
                    c.q = c.q || [];
                    c.q.push(arguments)
                };
                c.l = Number(Sa());
                z[b] = c
            }
            return z[b]
        },
        qv = function(a) {
            if (Hj()) {
                var b = nv();
                b(a + "require", "linker");
                b(a + "linker:passthrough", !0)
            }
        };

    function mv() {
        return z.GoogleAnalyticsObject || "ga"
    }
    var rv = function(a) {},
        sv = function(a, b) {
            return function() {
                var c = nv(),
                    d = c && c.getByName && c.getByName(a);
                if (d) {
                    var e = d.get("sendHitTask");
                    d.set("sendHitTask", function(f) {
                        var g = f.get("hitPayload"),
                            h = f.get("hitCallback"),
                            m = 0 > g.indexOf("&tid=" + b);
                        m && (f.set("hitPayload", g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b), !0), f.set("hitCallback", void 0, !0));
                        e(f);
                        m && (f.set("hitPayload",
                            g, !0), f.set("hitCallback", h, !0), f.set("_x_19", void 0, !0), e(f))
                    })
                }
            }
        };
    var xv = {},
        yv = {};

    function zv(a, b) {
        if (Ok) {
            var c;
            c = b.match(/^(gtm|gtag)\./) ? encodeURIComponent(b) : "*";
            xv[a] = "&e=" + c + "&eid=" + a;
            Yk(a)
        }
    }

    function Av(a) {
        var b = a.eventId,
            c = a.Hc;
        if (!xv[b]) return "";
        var d = yv[b] ? "" : "&es=1";
        d += xv[b];
        c && (yv[b] = !0);
        return d
    };
    var Bv = {};

    function Cv(a, b) {
        Ok && (Bv[a] = Bv[a] || {}, Bv[a][b] = (Bv[a][b] || 0) + 1)
    }

    function Dv(a) {
        var b = a.eventId,
            c = a.Hc,
            d = Bv[b] || {},
            e = [],
            f;
        for (f in d) d.hasOwnProperty(f) && e.push("" + f + d[f]);
        c && delete Bv[b];
        return e.length ? "&md=" + e.join(".") : ""
    };
    var Ev = {},
        Fv = {};

    function Gv(a, b, c) {
        if (Ok && b) {
            var d = gk(b);
            Ev[a] = Ev[a] || [];
            Ev[a].push(c + d);
            var e = (Af(b) ? "1" : "2") + d;
            Fv[a] = Fv[a] || [];
            Fv[a].push(e);
            Yk(a)
        }
    }

    function Hv(a) {
        var b = a.eventId,
            c = a.Hc,
            d = "",
            e = Ev[b] || [];
        e.length && (d += "&tr=" + e.join("."));
        var f = Fv[b] || [];
        f.length && (d += "&ti=" + f.join("."));
        c && (delete Ev[b], delete Fv[b]);
        return d
    };

    function Iv(a, b, c, d) {
        var e = mf[a],
            f = Jv(a, b, c, d);
        if (!f) return null;
        var g = xf(e[Me.kj], c, []);
        if (g && g.length) {
            var h = g[0];
            f = Iv(h.index, {
                onSuccess: f,
                onFailure: 1 === h.Aj ? b.terminate : f,
                terminate: b.terminate
            }, c, d)
        }
        return f
    }

    function Jv(a, b, c, d) {
        function e() {
            if (f[Me.Tk]) h();
            else {
                var w = yf(f, c, []),
                    x = w[Me.kk];
                if (null != x)
                    for (var y = 0; y < x.length; y++)
                        if (!Uj(x[y])) {
                            h();
                            return
                        }
                var A = gv(c.Vb, String(f[Me.ka]), Number(f[Me.oe]), w[Me.Uk]),
                    B = !1;
                w.vtp_gtmOnSuccess = function() {
                    if (!B) {
                        B = !0;
                        var D = Ta() - F;
                        Gv(c.id, mf[a], "5");
                        hv(c.Vb, A, "success", D);
                        R(16) && eu(c, f, nt.H.nj);
                        g()
                    }
                };
                w.vtp_gtmOnFailure = function() {
                    if (!B) {
                        B = !0;
                        var D = Ta() - F;
                        Gv(c.id, mf[a], "6");
                        hv(c.Vb, A, "failure", D);
                        R(16) && eu(c, f, nt.H.mj);
                        h()
                    }
                };
                w.vtp_gtmTagId = f.tag_id;
                w.vtp_gtmEventId =
                    c.id;
                c.priorityId && (w.vtp_gtmPriorityId = c.priorityId);
                Gv(c.id, f, "1");
                var E = function() {
                    bj(3);
                    var D = Ta() - F;
                    Gv(c.id, f, "7");
                    hv(c.Vb, A, "exception", D);
                    R(16) && eu(c, f, nt.H.lj);
                    B || (B = !0, h())
                };
                R(16) && du(c, f);
                var F = Ta();
                try {
                    wf(w, {
                        event: c,
                        index: a,
                        type: 1
                    })
                } catch (D) {
                    E(D)
                }
                R(16) && eu(c, f, nt.H.oj)
            }
        }
        var f = mf[a],
            g = b.onSuccess,
            h = b.onFailure,
            m = b.terminate;
        if (c.isBlocked(f)) return null;
        var n = xf(f[Me.pj], c, []);
        if (n && n.length) {
            var p = n[0],
                q = Iv(p.index, {
                    onSuccess: g,
                    onFailure: h,
                    terminate: m
                }, c, d);
            if (!q) return null;
            g = q;
            h = 2 ===
                p.Aj ? m : q
        }
        if (f[Me.ej] || f[Me.Wk]) {
            var r = f[Me.ej] ? nf : c.jn,
                t = g,
                u = h;
            if (!r[a]) {
                e = Va(e);
                var v = Kv(a, r, e);
                g = v.onSuccess;
                h = v.onFailure
            }
            return function() {
                r[a](t, u)
            }
        }
        return e
    }

    function Kv(a, b, c) {
        var d = [],
            e = [];
        b[a] = Lv(d, e, c);
        return {
            onSuccess: function() {
                b[a] = Mv;
                for (var f = 0; f < d.length; f++) d[f]()
            },
            onFailure: function() {
                b[a] = Nv;
                for (var f = 0; f < e.length; f++) e[f]()
            }
        }
    }

    function Lv(a, b, c) {
        return function(d, e) {
            a.push(d);
            b.push(e);
            c()
        }
    }

    function Mv(a) {
        a()
    }

    function Nv(a, b) {
        b()
    };
    var Pv = function(a, b) {
            return 1 === arguments.length ? Ov("set", a) : Ov("set", a, b)
        },
        Qv = function(a, b) {
            return 1 === arguments.length ? Ov("config", a) : Ov("config", a, b)
        },
        Rv = function(a, b, c) {
            c = c || {};
            c[N.g.Ob] = a;
            return Ov("event", b, c)
        };

    function Ov(a) {
        return arguments
    }
    var Sv = function() {
        this.h = [];
        this.s = []
    };
    Sv.prototype.enqueue = function(a, b, c) {
        var d = this.h.length + 1;
        a["gtm.uniqueEventId"] = b;
        a["gtm.priorityId"] = d;
        c.eventId = b;
        c.fromContainerExecution = !0;
        c.priorityId = d;
        var e = {
            message: a,
            notBeforeEventId: b,
            priorityId: d,
            messageContext: c
        };
        this.h.push(e);
        for (var f = 0; f < this.s.length; f++) try {
            this.s[f](e)
        } catch (g) {}
    };
    Sv.prototype.listen = function(a) {
        this.s.push(a)
    };
    Sv.prototype.get = function() {
        for (var a = {}, b = 0; b < this.h.length; b++) {
            var c = this.h[b],
                d = a[c.notBeforeEventId];
            d || (d = [], a[c.notBeforeEventId] = d);
            d.push(c)
        }
        return a
    };
    Sv.prototype.prune = function(a) {
        for (var b = [], c = [], d = 0; d < this.h.length; d++) {
            var e = this.h[d];
            e.notBeforeEventId === a ? b.push(e) : c.push(e)
        }
        this.h = c;
        return b
    };
    var Uv = function(a, b, c) {
            c.eventMetadata = c.eventMetadata || {};
            c.eventMetadata.source_canonical_id = Rf.Ef;
            Tv().enqueue(a, b, c)
        },
        Wv = function() {
            var a = Vv;
            Tv().listen(a)
        };

    function Tv() {
        var a = oi.mb;
        a || (a = new Sv, oi.mb = a);
        return a
    }
    var Yv = function() {
            var a = oi.zones;
            a || (a = oi.zones = new Xv);
            return a
        },
        tw = {
            zone: 1,
            cn: 1,
            css: 1,
            ew: 1,
            eq: 1,
            ge: 1,
            gt: 1,
            lc: 1,
            le: 1,
            lt: 1,
            re: 1,
            sw: 1,
            um: 1
        },
        zw = {
            cl: ["ecl"],
            ecl: ["cl"],
            ehl: ["hl"],
            gaawc: ["googtag"],
            hl: ["ehl"]
        },
        Xv = function() {
            this.h = {};
            this.s = {};
            this.C = 0
        };
    aa = Xv.prototype;
    aa.isActive = function(a, b) {
        for (var c, d = 0; d < a.length && !(c = this.h[a[d]]); d++);
        if (!c) return !0;
        if (!this.isActive([c.Jh], b)) return !1;
        for (var e = 0; e < c.Ve.length; e++)
            if (this.s[c.Ve[e]].ld(b)) return !0;
        return !1
    };
    aa.getIsAllowedFn = function(a, b) {
        if (!this.isActive(a,
                b)) return function() {
            return !1
        };
        for (var c, d = 0; d < a.length && !(c = this.h[a[d]]); d++);
        if (!c) return function() {
            return !0
        };
        for (var e = [], f = 0; f < c.Ve.length; f++) {
            var g = this.s[c.Ve[f]];
            g.ld(b) && e.push(g)
        }
        if (!e.length) return function() {
            return !1
        };
        var h = this.getIsAllowedFn([c.Jh], b);
        return function(m, n) {
            n = n || [];
            if (!h(m, n)) return !1;
            for (var p = 0; p < e.length; ++p)
                if (e[p].C(m, n)) return !0;
            return !1
        }
    };
    aa.unregisterChild = function(a) {
        for (var b = 0; b < a.length; b++) delete this.h[a[b]]
    };
    aa.createZone = function(a, b) {
        var c = String(++this.C);
        this.s[c] = new Aw(a, b);
        return c
    };
    aa.updateZone = function(a, b, c) {
        var d = this.s[a];
        d && d.F(b, c)
    };
    aa.registerChild = function(a, b, c) {
        var d = this.h[a];
        if (!d && oi[a] || !d && Ak(a) || d && d.Jh !== b) return !1;
        if (d) return d.Ve.push(c), !1;
        this.h[a] = {
            Jh: b,
            Ve: [c]
        };
        return !0
    };
    var Aw = function(a, b) {
        this.h = [{
            eventId: a,
            ld: !0
        }];
        this.s = null;
        if (b) {
            this.s = {};
            for (var c = 0; c < b.length; c++) this.s[b[c]] = !0
        }
    };
    Aw.prototype.F = function(a, b) {
        var c = this.h[this.h.length - 1];
        a <= c.eventId || c.ld !== b && this.h.push({
            eventId: a,
            ld: b
        })
    };
    Aw.prototype.ld = function(a) {
        for (var b =
                this.h.length - 1; 0 <= b; b--)
            if (this.h[b].eventId <= a) return this.h[b].ld;
        return !1
    };
    Aw.prototype.C = function(a, b) {
        b = b || [];
        if (!this.s || tw[a] || this.s[a]) return !0;
        for (var c = 0; c < b.length; ++c)
            if (this.s[b[c]]) return !0;
        return !1
    };
    var Bw = function(a, b, c, d, e, f) {
            var g = Yv();
            c = c && Xa(c, zw);
            for (var h = g.createZone(a, c), m = 0; m < b.length; m++) {
                var n = String(b[m]);
                if (g.registerChild(n, tk(), h)) {
                    var p = n,
                        q = a,
                        r = d,
                        t = e,
                        u = f;
                    if (0 === p.indexOf("GTM-")) Vu(p, void 0, !1, {
                        source: 1,
                        fromContainerExecution: !0
                    });
                    else {
                        var v = Ov("js", Sa());
                        Vu(p, void 0, !0, {
                            source: 1,
                            fromContainerExecution: !0
                        });
                        var w = {
                            originatingEntity: t,
                            inheritParentConfig: u
                        };
                        R(40) || Uv(v, q, w);
                        Uv(Qv(p, r), q, w)
                    }
                }
            }
            return h
        },
        Cw = function(a, b, c) {
            Yv().updateZone(a, b, c)
        };
    var Dw = function(a) {
            var b = oi.zones;
            return b ? b.getIsAllowedFn(pk(), a) : function() {
                return !0
            }
        },
        Ew = function(a) {
            var b = oi.zones;
            return b ? b.isActive(pk(), a) : !0
        },
        Fw = function() {
            R(88) ? Iu(uk(), function(a) {
                return Ew(a.originalEventData["gtm.uniqueEventId"])
            }) : Iu(uk(), function(a, b) {
                return Ew(b)
            });
            R(89) && R(90) && Gu(uk(), function(a) {
                var b = a.entityId,
                    c = a.securityGroups;
                return Dw(a.originalEventData["gtm.uniqueEventId"])(b, c)
            })
        };
    var Iw = function(a, b) {
        for (var c = [], d = 0; d < mf.length; d++)
            if (a[d]) {
                var e = mf[d];
                var f = jv(b.Vb);
                try {
                    var g = Iv(d, {
                        onSuccess: f,
                        onFailure: f,
                        terminate: f
                    }, b, d);
                    if (g) {
                        var h = e[Me.ka];
                        if (!h) throw "Error: No function name given for function call.";
                        var m = of [h];
                        c.push({
                            Yj: d,
                            Oj: (m ? m.priorityOverride || 0 : 0) || Eu(e[Me.ka], 1) || 0,
                            execute: g
                        })
                    } else Gw(d, b), f()
                } catch (p) {
                    f()
                }
            }
        c.sort(Hw);
        for (var n = 0; n < c.length; n++) c[n].execute();
        return 0 < c.length
    };

    function Hw(a, b) {
        var c, d = b.Oj,
            e = a.Oj;
        c = d > e ? 1 : d < e ? -1 : 0;
        var f;
        if (0 !== c) f = c;
        else {
            var g = a.Yj,
                h = b.Yj;
            f = g > h ? 1 : g < h ? -1 : 0
        }
        return f
    }

    function Gw(a, b) {
        if (Ok) {
            var c = function(d) {
                var e = b.isBlocked(mf[d]) ? "3" : "4",
                    f = xf(mf[d][Me.kj], b, []);
                f && f.length && c(f[0].index);
                Gv(b.id, mf[d], e);
                var g = xf(mf[d][Me.pj], b, []);
                g && g.length && c(g[0].index)
            };
            c(a)
        }
    }
    var Lw = !1,
        Jw;
    var Rw = function(a) {
        var b = a["gtm.uniqueEventId"],
            c = a["gtm.priorityId"],
            d = a.event;
        if (R(16)) {}
        if ("gtm.js" === d) {
            if (Lw) return !1;
            Lw = !0
        }
        var e, f = !1,
            g = Ju(),
            h;
        if (R(88)) {
            var m = nb(a);
            h = g.every(function(w) {
                return w({
                    originalEventData: m
                })
            })
        } else h = g.every(function(w) {
            return w(d, b)
        });
        if (h) e = Dw(b);
        else {
            if ("gtm.js" !== d && "gtm.init" !== d && "gtm.init_consent" !==
                d) return !1;
            f = !0;
            e = Dw(Number.MAX_SAFE_INTEGER)
        }
        zv(b, d);
        var n = a.eventCallback,
            p = a.eventTimeout,
            q = nb(a),
            r = {
                id: b,
                priorityId: c,
                name: d,
                isBlocked: Nw(e, q),
                jn: [],
                logMacroError: function() {
                    L(6);
                    bj(0)
                },
                cachedModelValues: Ow(),
                Vb: new fv(function() {
                    if (R(16)) {}
                    n &&
                        n.apply(n, [].slice.call(arguments, 0))
                }, p),
                originalEventData: q
            };
        R(29) && (r.reportMacroDiscrepancy = Cv);
        R(16) && $t(r.id, r.name);
        var t = If(r);
        R(16) && au(r.id, r.name);
        f && (t = Pw(t));
        if (R(16)) {}
        var u = Iw(t, r),
            v = !1;
        kv(r.Vb);
        "gtm.js" !== d && "gtm.sync" !== d || rv(tk());
        return Qw(t, u) || v
    };

    function Ow() {
        var a = {};
        a.event = Ti("event", 1);
        a.ecommerce = Ti("ecommerce", 1);
        a.gtm = Ti("gtm");
        a.eventModel = Ti("eventModel");
        return a
    }

    function Nw(a, b) {
        var c = Su(a);
        return R(89) ? function(d) {
            if (c(d)) return !0;
            var e = d && d[Me.ka];
            if (!e || "string" != typeof e) return !0;
            e = e.replace(/^_*/, "");
            for (var f = Hu(), g = Gi[e] || [], h = fa(f), m = h.next(); !m.done; m = h.next()) {
                var n = m.value;
                try {
                    if (!n({
                            entityId: e,
                            securityGroups: g,
                            originalEventData: b
                        })) return !0
                } catch (p) {
                    return !0
                }
            }
            return !1
        } : c
    }

    function Pw(a) {
        for (var b = [], c = 0; c < a.length; c++)
            if (a[c]) {
                var d = String(mf[c][Me.ka]);
                if (qi[d] || void 0 !== mf[c][Me.Xk] || Eu(d, 2)) b[c] = !0
            }
        return b
    }

    function Qw(a, b) {
        if (!b) return b;
        for (var c = 0; c < a.length; c++)
            if (a[c] && mf[c] && !ri[String(mf[c][Me.ka])]) return !0;
        return !1
    }
    var Lf;
    var Sw = {},
        Tw = {},
        Uw = function(a, b) {
            for (var c = [], d = [], e = {}, f = 0; f < a.length; e = {
                    Kh: void 0,
                    qh: void 0
                }, f++) {
                var g = a[f];
                if (0 <= g.indexOf("-")) {
                    if (e.Kh = dk(g, b), e.Kh) {
                        var h = rk();
                        Ia(h, function(r) {
                            return function(t) {
                                return r.Kh.da === t
                            }
                        }(e)) ? c.push(g) : d.push(g)
                    }
                } else {
                    var m = Sw[g] || [];
                    e.qh = {};
                    m.forEach(function(r) {
                        return function(t) {
                            return r.qh[t] = !0
                        }
                    }(e));
                    for (var n = pk(), p = 0; p < n.length; p++)
                        if (e.qh[n[p]]) {
                            c = c.concat(rk());
                            break
                        }
                    var q = Tw[g] || [];
                    q.length && (c = c.concat(q))
                }
            }
            return {
                Cm: c,
                Fm: d
            }
        },
        Vw = function(a) {
            l(Sw, function(b,
                c) {
                var d = c.indexOf(a);
                0 <= d && c.splice(d, 1)
            })
        },
        Ww = function(a) {
            l(Tw, function(b, c) {
                var d = c.indexOf(a);
                0 <= d && c.splice(d, 1)
            })
        };
    var Xw = "HA GF G UA AW DC MC".split(" "),
        Yw = !1,
        Zw = !1;

    function $w(a, b) {
        a.hasOwnProperty("gtm.uniqueEventId") || Object.defineProperty(a, "gtm.uniqueEventId", {
            value: Hi()
        });
        b.eventId = a["gtm.uniqueEventId"];
        b.priorityId = a["gtm.priorityId"];
        return {
            eventId: b.eventId,
            priorityId: b.priorityId
        }
    }
    var ax = void 0,
        bx = void 0;

    function cx(a, b, c) {
        var d = nb(a);
        d.eventId = void 0;
        d.inheritParentConfig = void 0;
        Object.keys(b).some(function(f) {
            return void 0 !== b[f]
        }) && L(136);
        var e = nb(b);
        nb(c, e);
        Uv(Qv(pk()[0], e), a.eventId, d)
    }

    function dx(a) {
        for (var b = fa([N.g.Sd, N.g.Pb]), c = b.next(); !c.done; c = b.next()) {
            var d = c.value,
                e = a && a[d] || Ul.C[d];
            if (e) return e
        }
    }
    var ex = {
            config: function(a, b) {
                var c = R(30),
                    d = $w(a, b);
                if (!(2 > a.length) && k(a[1])) {
                    var e = {};
                    if (2 < a.length) {
                        if (void 0 != a[2] && !lb(a[2]) || 3 < a.length) return;
                        e = a[2]
                    }
                    var f = dk(a[1], b.isGtmEvent);
                    if (f) {
                        var g, h, m;
                        a: {
                            if (!lk.ie) {
                                var n = vk(Ck());
                                if (Gk(n)) {
                                    var p = n.parent,
                                        q = p.isDestination;
                                    m = {
                                        Lm: vk(p),
                                        Bm: q
                                    };
                                    break a
                                }
                            }
                            m = void 0
                        }
                        var r = m;
                        r && (g = r.Lm, h = r.Bm);
                        zv(d.eventId, "gtag.config");
                        var t = f.da,
                            u = f.id !== t;
                        if (u ? -1 === rk().indexOf(t) : -1 === pk().indexOf(t)) {
                            if (!(c && b.inheritParentConfig || e[N.g.yb])) {
                                var v = dx(e);
                                if (u) Wu(t, v, {
                                    source: 2,
                                    fromContainerExecution: b.fromContainerExecution
                                });
                                else if (c && void 0 !== g && -1 !== g.containers.indexOf(t)) {
                                    var w = e;
                                    ax ? cx(b, w, ax) : bx || (bx = nb(w))
                                } else Vu(t, v, !0, {
                                    source: 2,
                                    fromContainerExecution: b.fromContainerExecution
                                })
                            }
                        } else {
                            if (g && (L(128), h && L(130), c && b.inheritParentConfig)) {
                                var x;
                                var y = e;
                                bx ? (cx(b, bx, y), x = !1) : (!y[N.g.Qb] && ti && ax || (ax = nb(y)), x = !0);
                                x && g.containers && g.containers.join(",");
                                return
                            }
                            if (ti && !u && !e[N.g.Qb]) {
                                var A = Zw;
                                Zw = !0;
                                if (A) return
                            }
                            Yw || L(43);
                            if (!b.noTargetGroup)
                                if (u) {
                                    Ww(f.id);
                                    var B = f.id,
                                        E = e[N.g.Pd] ||
                                        "default";
                                    E = String(E).split(",");
                                    for (var F = 0; F < E.length; F++) {
                                        var D = Tw[E[F]] || [];
                                        Tw[E[F]] = D;
                                        0 > D.indexOf(B) && D.push(B)
                                    }
                                } else {
                                    Vw(f.id);
                                    var M = f.id,
                                        O = e[N.g.Pd] || "default";
                                    O = O.toString().split(",");
                                    for (var P = 0; P < O.length; P++) {
                                        var T = Sw[O[P]] || [];
                                        Sw[O[P]] = T;
                                        0 > T.indexOf(M) && T.push(M)
                                    }
                                }
                            delete e[N.g.Pd];
                            var Z = b.eventMetadata || {};
                            Z.hasOwnProperty("is_external_event") || (Z.is_external_event = !b.fromContainerExecution);
                            b.eventMetadata = Z;
                            delete e[N.g.Vc];
                            for (var W = u ? [f.id] : rk(), X = 0; X < W.length; X++) {
                                var la = e,
                                    ia = W[X],
                                    ea = nb(b),
                                    Da = dk(ia, ea.isGtmEvent);
                                Da && Ul.push("config", [la], Da, ea)
                            }
                        }
                    }
                }
            },
            consent: function(a, b) {
                if (3 === a.length) {
                    L(39);
                    var c = $w(a, b),
                        d = a[1],
                        e = a[2];
                    b.fromContainerExecution || (e[N.g.N] && L(139), e[N.g.Ea] && L(140));
                    "default" === d ? Qj(e) : "update" === d ? Rj(e, c) : "declare" === d ? b.fromContainerExecution && Pj(e) : R(62) && "core_platform_services" === d && Sj(e)
                }
            },
            event: function(a, b) {
                var c = a[1];
                if (!(2 > a.length) && k(c)) {
                    var d;
                    if (2 < a.length) {
                        if (!lb(a[2]) && void 0 != a[2] || 3 < a.length) return;
                        d = a[2]
                    }
                    var e = d,
                        f = {},
                        g = (f.event = c, f);
                    e && (g.eventModel =
                        nb(e), e[N.g.Vc] && (g.eventCallback = e[N.g.Vc]), e[N.g.Kd] && (g.eventTimeout = e[N.g.Kd]));
                    var h = $w(a, b),
                        m = h.eventId,
                        n = h.priorityId;
                    g["gtm.uniqueEventId"] = m;
                    n && (g["gtm.priorityId"] = n);
                    if ("optimize.callback" === c) return g.eventModel = g.eventModel || {}, g;
                    var p;
                    var q = d,
                        r = q && q[N.g.Ob];
                    void 0 === r && (r = Oi(N.g.Ob, 2), void 0 === r && (r = "default"));
                    if (k(r) || Ha(r)) {
                        var t;
                        b.isGtmEvent ? t = k(r) ? [r] : r : t = r.toString().replace(/\s+/g, "").split(",");
                        var u = Uw(t, b.isGtmEvent),
                            v = u.Cm,
                            w = u.Fm;
                        if (w.length)
                            for (var x = dx(q), y = 0; y < w.length; y++) {
                                var A =
                                    dk(w[y], b.isGtmEvent);
                                A && Wu(A.da, x, {
                                    source: 3,
                                    fromContainerExecution: b.fromContainerExecution
                                })
                            }
                        p = fk(v, b.isGtmEvent)
                    } else p = void 0;
                    var B = p;
                    if (B) {
                        zv(m, c);
                        for (var E = [], F = 0; F < B.length; F++) {
                            var D = B[F],
                                M = nb(b);
                            if (-1 !== Xw.indexOf(wk(D.prefix))) {
                                var O = nb(d),
                                    P = M.eventMetadata || {};
                                P.hasOwnProperty("is_external_event") || (P.is_external_event = !M.fromContainerExecution);
                                M.eventMetadata = P;
                                delete O[N.g.Vc];
                                Wl(c, O, D.id, M)
                            }
                            E.push(D.id)
                        }
                        g.eventModel = g.eventModel || {};
                        0 < B.length ? g.eventModel[N.g.Ob] = E.join() : delete g.eventModel[N.g.Ob];
                        Yw || L(43);
                        void 0 === b.noGtmEvent && b.eventMetadata && b.eventMetadata.syn_or_mod && (b.noGtmEvent = !0);
                        g.eventModel[N.g.Lb] && (b.noGtmEvent = !0);
                        return b.noGtmEvent ? void 0 : g
                    }
                }
            },
            get: function(a, b) {
                L(53);
                if (4 === a.length && k(a[1]) && k(a[2]) && Fa(a[3])) {
                    var c = dk(a[1], b.isGtmEvent),
                        d = String(a[2]),
                        e = a[3];
                    if (c) {
                        Yw || L(43);
                        var f = dx();
                        if (!Ia(rk(), function(h) {
                                return c.da === h
                            })) Wu(c.da, f, {
                            source: 4,
                            fromContainerExecution: b.fromContainerExecution
                        });
                        else if (-1 !== Xw.indexOf(wk(c.prefix))) {
                            $w(a, b);
                            var g = {};
                            Mj(nb((g[N.g.lb] = d,
                                g[N.g.wb] = e, g)));
                            Xl(d, function(h) {
                                G(function() {
                                    return e(h)
                                })
                            }, c.id, b)
                        }
                    }
                }
            },
            js: function(a, b) {
                if (2 == a.length && a[1].getTime) {
                    Yw = !0;
                    var c = $w(a, b),
                        d = c.eventId,
                        e = c.priorityId,
                        f = {};
                    return f.event = "gtm.js", f["gtm.start"] = a[1].getTime(), f["gtm.uniqueEventId"] = d, f["gtm.priorityId"] = e, f
                }
            },
            policy: function(a) {
                if (3 === a.length && k(a[1]) && Fa(a[2])) {
                    Mf(a[1], a[2]);
                    if (L(74), "all" === a[1]) {
                        L(75);
                        var b = !1;
                        try {
                            b = a[2](tk(), "unknown", {})
                        } catch (c) {}
                        b || L(76)
                    }
                } else {
                    L(73);
                }
            },
            set: function(a, b) {
                var c;
                2 == a.length && lb(a[1]) ? c = nb(a[1]) : 3 == a.length && k(a[1]) && (c = {}, lb(a[2]) || Ha(a[2]) ? c[a[1]] = nb(a[2]) : c[a[1]] = a[2]);
                if (c) {
                    var d = $w(a, b),
                        e = d.eventId,
                        f = d.priorityId;
                    nb(c);
                    var g = nb(c);
                    Ul.push("set", [g], void 0, b);
                    c["gtm.uniqueEventId"] = e;
                    f && (c["gtm.priorityId"] = f);
                    R(9) && delete c.event;
                    b.overwriteModelFields = !0;
                    return c
                }
            }
        },
        fx = {
            policy: !0
        };
    var gx = function(a) {
            var b = z[ni.fa].hide;
            if (b && void 0 !== b[a] && b.end) {
                b[a] = !1;
                var c = !0,
                    d;
                for (d in b)
                    if (b.hasOwnProperty(d) && !0 === b[d]) {
                        c = !1;
                        break
                    }
                c && (b.end(), b.end = null)
            }
        },
        hx = function(a) {
            var b = z[ni.fa],
                c = b && b.hide;
            c && c.end && (c[a] = !0)
        };
    var ix = !1,
        jx = [];

    function kx() {
        if (!ix) {
            ix = !0;
            for (var a = 0; a < jx.length; a++) G(jx[a])
        }
    }
    var lx = function(a) {
        ix ? G(a) : jx.push(a)
    };
    var Cx = function(a) {
        if (Bx(a)) return a;
        this.h = a
    };
    Cx.prototype.getUntrustedMessageValue = function() {
        return this.h
    };
    var Bx = function(a) {
        return !a || "object" !== jb(a) || lb(a) ? !1 : "getUntrustedMessageValue" in a
    };
    Cx.prototype.getUntrustedMessageValue = Cx.prototype.getUntrustedMessageValue;
    var Dx = 0,
        Ex = {},
        Fx = [],
        Gx = [],
        Hx = !1,
        Ix = !1;

    function Jx(a, b) {
        return a.messageContext.eventId - b.messageContext.eventId || a.messageContext.priorityId - b.messageContext.priorityId
    }
    var Kx = function(a) {
            return z[ni.fa].push(a)
        },
        Lx = function(a, b, c) {
            a.eventCallback = b;
            c && (a.eventTimeout = c);
            return Kx(a)
        },
        Mx = function(a, b) {
            if (!Ga(b) || 0 > b) b = 0;
            var c = oi[ni.fa],
                d = 0,
                e = !1,
                f = void 0;
            f = z.setTimeout(function() {
                e || (e = !0, a());
                f = void 0
            }, b);
            return function() {
                var g = c ? c.subscribers : 1;
                ++d === g && (f && (z.clearTimeout(f), f = void 0), e || (a(), e = !0))
            }
        };

    function Nx(a, b) {
        var c = a._clear || b.overwriteModelFields;
        l(a, function(e, f) {
            "_clear" !== e && (c && Ri(e), Ri(e, f))
        });
        Di || (Di = a["gtm.start"]);
        var d = a["gtm.uniqueEventId"];
        if (!a.event) return !1;
        "number" !== typeof d && (d = Hi(), a["gtm.uniqueEventId"] = d, Ri("gtm.uniqueEventId", d));
        return Rw(a)
    }

    function Ox(a) {
        if (null == a || "object" !== typeof a) return !1;
        if (a.event) return !0;
        if (Ma(a)) {
            var b = a[0];
            if ("config" === b || "event" === b || "js" === b || "get" === b) return !0
        }
        return !1
    }

    function Px() {
        var a;
        if (Gx.length) a = Gx.shift();
        else if (Fx.length) a = Fx.shift();
        else return;
        var b;
        var c = a;
        if (Hx || !Ox(c.message)) b = c;
        else {
            Hx = !0;
            var d = c.message["gtm.uniqueEventId"];
            "number" !== typeof d && (d = c.message["gtm.uniqueEventId"] = Hi());
            var e = {},
                f = {
                    message: (e.event = "gtm.init_consent", e["gtm.uniqueEventId"] = d - 2, e),
                    messageContext: {
                        eventId: d - 2
                    }
                },
                g = {},
                h = {
                    message: (g.event = "gtm.init", g["gtm.uniqueEventId"] = d - 1, g),
                    messageContext: {
                        eventId: d - 1
                    }
                };
            Fx.unshift(h, c);
            if (Ok) {
                var m = Rf.ctid;
                if (m) {
                    var n, p = vk(Ck());
                    n = p && p.context;
                    var q, r = ql(z.location.href);
                    q = r.hostname + r.pathname;
                    var t = n && n.fromContainerExecution,
                        u = n && n.source,
                        v = Rf.Ef,
                        w = lk.ie;
                    Ok && (bl || (bl = q), cl.push(m + ";" + v + ";" + (t ? 1 : 0) + ";" + (u || 0) + ";" + (w ? 1 : 0)))
                }
            }
            b = f
        }
        return b
    }

    function Qx() {
        for (var a = !1, b; !Ix && (b = Px());) {
            Ix = !0;
            delete Li.eventModel;
            Ni();
            var c = b,
                d = c.message,
                e = c.messageContext;
            if (null == d) Ix = !1;
            else {
                e.fromContainerExecution && Si();
                try {
                    if (Fa(d)) try {
                        d.call(Pi)
                    } catch (x) {} else if (Ha(d)) {
                        var f = d;
                        if (k(f[0])) {
                            var g = f[0].split("."),
                                h = g.pop(),
                                m = f.slice(1),
                                n = Oi(g.join("."), 2);
                            if (null != n) try {
                                n[h].apply(n, m)
                            } catch (x) {}
                        }
                    } else {
                        var p = void 0,
                            q = !1;
                        if (Ma(d)) {
                            a: {
                                if (d.length && k(d[0])) {
                                    var r = ex[d[0]];
                                    if (r && (!e.fromContainerExecution || !fx[d[0]])) {
                                        p = r(d, e);
                                        break a
                                    }
                                }
                                p = void 0
                            }(q = p &&
                                "set" === d[0] && !!p.event) && L(101)
                        }
                        else p = d;
                        if (p) {
                            var t = Nx(p, e);
                            a = t || a;
                            q && t && L(113)
                        }
                    }
                } finally {
                    e.fromContainerExecution && Ni(!0);
                    var u = d["gtm.uniqueEventId"];
                    if ("number" === typeof u) {
                        for (var v = Ex[String(u)] || [], w = 0; w < v.length; w++) Gx.push(Rx(v[w]));
                        v.length && Gx.sort(Jx);
                        delete Ex[String(u)];
                        u > Dx && (Dx = u)
                    }
                    Ix = !1
                }
            }
        }
        return !a
    }

    function Sx() {
        if (R(16)) {
            var a = Tx();
        }
        var b = Qx();
        if (R(16)) {}
        try {
            gx(tk())
        } catch (c) {}
        return b
    }

    function Vv(a) {
        if (Dx < a.notBeforeEventId) {
            var b = String(a.notBeforeEventId);
            Ex[b] = Ex[b] || [];
            Ex[b].push(a)
        } else Gx.push(Rx(a)), Gx.sort(Jx), G(function() {
            Ix || Qx()
        })
    }

    function Rx(a) {
        return {
            message: a.message,
            messageContext: a.messageContext
        }
    }
    var Ux = function() {
            function a(f) {
                var g = {};
                if (Bx(f)) {
                    var h = f;
                    f = Bx(h) ? h.getUntrustedMessageValue() : void 0;
                    g.fromContainerExecution = !0
                }
                return {
                    message: f,
                    messageContext: g
                }
            }
            var b = Fc(ni.fa, []),
                c = oi[ni.fa] = oi[ni.fa] || {};
            !0 === c.pruned && L(83);
            Ex = Tv().get();
            Wv();
            bv(function() {
                if (!c.gtmDom) {
                    c.gtmDom = !0;
                    var f = {};
                    b.push((f.event = "gtm.dom", f))
                }
            });
            lx(function() {
                if (!c.gtmLoad) {
                    c.gtmLoad = !0;
                    var f = {};
                    b.push((f.event = "gtm.load", f))
                }
            });
            c.subscribers = (c.subscribers || 0) + 1;
            var d = b.push;
            b.push = function() {
                var f;
                if (0 < oi.SANDBOXED_JS_SEMAPHORE) {
                    f = [];
                    for (var g = 0; g < arguments.length; g++) f[g] = new Cx(arguments[g])
                } else f = [].slice.call(arguments, 0);
                var h = f.map(function(q) {
                    return a(q)
                });
                Fx.push.apply(Fx, h);
                var m = d.apply(b, f),
                    n = Math.max(100, Number("1000") || 300);
                if (this.length > n)
                    for (L(4), c.pruned = !0; this.length > n;) this.shift();
                var p = "boolean" !== typeof m || m;
                return Qx() && p
            };
            var e = b.slice(0).map(function(f) {
                return a(f)
            });
            Fx.push.apply(Fx, e);
            if (Tx()) {
                if (R(16)) {}
                G(Sx)
            }
        },
        Tx = function() {
            var a = !0;
            return a
        };

    function Vx(a) {
        if (null == a || 0 === a.length) return !1;
        var b = Number(a),
            c = Ta();
        return b < c + 3E5 && b > c - 9E5
    }

    function Wx(a) {
        return a && 0 === a.indexOf("pending:") ? Vx(a.substr(8)) : !1
    };
    var qy = function() {};
    var ry = function() {};
    ry.prototype.toString = function() {
        return "undefined"
    };
    var sy = new ry;
    var uy = function() {
            (oi.rm = oi.rm || {})[uk()] = function(a) {
                if (ty.hasOwnProperty(a)) return ty[a]
            }
        },
        xy = function(a, b, c) {
            if (a instanceof vy) {
                var d = a,
                    e = d.h,
                    f = b,
                    g = Hi();
                wy[g] = [f, c];
                a = e.call(d, g);
                b = Ca
            }
            return {
                Fj: a,
                onSuccess: b
            }
        },
        yy = function(a) {
            var b = a ? 0 : 1;
            return function(c) {
                L(a ? 134 : 135);
                var d = wy[c];
                if (d && "function" === typeof d[b]) d[b]();
                wy[c] = void 0
            }
        },
        vy = function(a) {
            this.h = function(b) {
                for (var c = [], d = 0; d < a.length; d++) c.push(a[d] === sy ? b : a[d]);
                return c.join("")
            }
        };
    vy.prototype.toString = function() {
        return this.h("undefined")
    };
    vy.prototype.valueOf = vy.prototype.toString;
    var ty = {},
        wy = {};
    var zy = function(a, b, c) {
            var d = {
                event: b,
                "gtm.element": a,
                "gtm.elementClasses": Vc(a, "className"),
                "gtm.elementId": a["for"] || Qc(a, "id") || "",
                "gtm.elementTarget": a.formTarget || Vc(a, "target") || ""
            };
            c && (d["gtm.triggers"] = c.join(","));
            d["gtm.elementUrl"] = (a.attributes && a.attributes.formaction ? a.formAction : "") || a.action || Vc(a, "href") || a.src || a.code || a.codebase || "";
            return d
        },
        Ay = function(a) {
            oi.hasOwnProperty("autoEventsSettings") || (oi.autoEventsSettings = {});
            var b = oi.autoEventsSettings;
            b.hasOwnProperty(a) || (b[a] = {});
            return b[a]
        },
        By = function(a, b, c) {
            Ay(a)[b] = c
        },
        Cy = function(a, b, c, d) {
            var e = Ay(a),
                f = Ua(e, b, d);
            e[b] = c(f)
        },
        Dy = function(a, b, c) {
            var d = Ay(a);
            return Ua(d, b, c)
        },
        Ey = function(a, b) {
            Dy(a, "init", !1) || (By(a, "init", !0), b())
        },
        Fy = function(a) {
            return "string" === typeof a ? a : String(Hi())
        };
    var Ly = !!z.MutationObserver,
        My = void 0,
        Ny = function(a) {
            if (!My) {
                var b = function() {
                    var c = C.body;
                    if (c)
                        if (Ly)(new MutationObserver(function() {
                            for (var e = 0; e < My.length; e++) G(My[e])
                        })).observe(c, {
                            childList: !0,
                            subtree: !0
                        });
                        else {
                            var d = !1;
                            Oc(c, "DOMNodeInserted", function() {
                                d || (d = !0, G(function() {
                                    d = !1;
                                    for (var e = 0; e < My.length; e++) G(My[e])
                                }))
                            })
                        }
                };
                My = [];
                C.body ? b() : G(b)
            }
            My.push(a)
        },
        Oy = function(a) {
            if (My)
                for (var b = 0; b < My.length; b++) My[b] === a && My.splice(b, 1)
        };
    var Zy = function(a, b, c) {
        function d() {
            var g = a();
            f += e ? (Ta() - e) * g.playbackRate / 1E3 : 0;
            e = Ta()
        }
        var e = 0,
            f = 0;
        return {
            createEvent: function(g, h, m) {
                var n = a(),
                    p = n.ih,
                    q = void 0 !== m ? Math.round(m) : void 0 !== h ? Math.round(n.ih * h) : Math.round(n.wj),
                    r = void 0 !== h ? Math.round(100 * h) : 0 >= p ? 0 : Math.round(q / p * 100),
                    t = C.hidden ? !1 : .5 <= xq(c);
                d();
                var u = void 0;
                void 0 !== b && (u = [b]);
                var v = zy(c, "gtm.video", u);
                v["gtm.videoProvider"] = "youtube";
                v["gtm.videoStatus"] = g;
                v["gtm.videoUrl"] = n.url;
                v["gtm.videoTitle"] = n.title;
                v["gtm.videoDuration"] =
                    Math.round(p);
                v["gtm.videoCurrentTime"] = Math.round(q);
                v["gtm.videoElapsedTime"] = Math.round(f);
                v["gtm.videoPercent"] = r;
                v["gtm.videoVisible"] = t;
                return v
            },
            Tj: function() {
                e = Ta()
            },
            hd: function() {
                d()
            }
        }
    };
    var $y = z.clearTimeout,
        az = z.setTimeout,
        bz = function(a, b, c, d) {
            if (sn()) {
                b && G(b)
            } else return Kc(a, b, c, d)
        },
        cz = function() {
            return new Date
        },
        dz = function() {
            return z.location.href
        },
        ez = function(a) {
            return ll(ql(a), "fragment")
        },
        fz = function(a) {
            return ml(ql(a))
        },
        gz = function(a, b) {
            return Oi(a, b || 2)
        },
        hz = function(a, b, c) {
            return b ? Lx(a, b, c) : Kx(a)
        },
        iz = function(a, b) {
            z[a] = b
        },
        U = function(a, b, c) {
            b && (void 0 === z[a] || c && !z[a]) && (z[a] = b);
            return z[a]
        },
        jz = function(a, b, c) {
            return zn(a, b, void 0 === c ? !0 : !!c)
        },
        kz = function(a, b, c) {
            return 0 === In(a, b, c)
        },
        lz = function(a, b) {
            if (sn()) {
                b && G(b)
            } else Mc(a, b)
        },
        mz = function(a) {
            return !!Dy(a, "init", !1)
        },
        nz = function(a) {
            By(a, "init", !0)
        };

    function Kz(a, b) {
        function c(g) {
            var h = ql(g),
                m = ll(h, "protocol"),
                n = ll(h, "host", !0),
                p = ll(h, "port"),
                q = ll(h, "path").toLowerCase().replace(/\/$/, "");
            if (void 0 === m || "http" === m && "80" === p || "https" === m && "443" === p) m = "web", p = "default";
            return [m, n, p, q]
        }
        for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++)
            if (d[f] !== e[f]) return !1;
        return !0
    }

    function Lz(a) {
        return Mz(a) ? 1 : 0
    }

    function Mz(a) {
        var b = a.arg0,
            c = a.arg1;
        if (a.any_of && Array.isArray(c)) {
            for (var d = 0; d < c.length; d++) {
                var e = nb(a, {});
                nb({
                    arg1: c[d],
                    any_of: void 0
                }, e);
                if (Lz(e)) return !0
            }
            return !1
        }
        switch (a["function"]) {
            case "_cn":
                return rg(b, c);
            case "_css":
                var f;
                a: {
                    if (b) try {
                        for (var g = 0; g < ng.length; g++) {
                            var h = ng[g];
                            if (b[h]) {
                                f = b[h](c);
                                break a
                            }
                        }
                    } catch (m) {}
                    f = !1
                }
                return f;
            case "_ew":
                return og(b, c);
            case "_eq":
                return sg(b, c);
            case "_ge":
                return tg(b, c);
            case "_gt":
                return vg(b, c);
            case "_lc":
                return 0 <= String(b).split(",").indexOf(String(c));
            case "_le":
                return ug(b, c);
            case "_lt":
                return wg(b, c);
            case "_re":
                return qg(b, c, a.ignore_case);
            case "_sw":
                return xg(b, c);
            case "_um":
                return Kz(b, c)
        }
        return !1
    };

    function Nz() {
        var a = ["&cv=155", "&rv=" + ni.Ug, "&tc=" + mf.filter(function(b) {
            return b
        }).length];
        ni.me && a.push("&x=" + ni.me);
        Ji.h && a.push("&tag_exp=" + Ji.h);
        return a.join("")
    };

    function Oz() {
        var a = dj();
        return a.length ? "&exp_geo=" + a : ""
    }
    var Pz;

    function Qz() {
        try {
            null != Pz || (Pz = (new Intl.DateTimeFormat).resolvedOptions().timeZone)
        } catch (b) {}
        var a;
        return (null == (a = Pz) ? 0 : a.length) ? "&exp_tz=" + Pz : ""
    };
    var Rz = function() {
            return !1
        },
        Sz = function() {
            var a = {};
            return function(b, c, d) {}
        };

    function Tz() {
        var a = Uz;
        return function(b, c, d) {
            var e = d && d.event;
            Vz(c);
            var f = 0 === b.indexOf("__cvt_") ? void 0 : 1,
                g = new sb;
            l(c, function(r, t) {
                var u = md(t, void 0, f);
                void 0 === u && void 0 !== t && L(44);
                g.set(r, u)
            });
            a.h.h.F = Ff();
            var h = {
                uj: Vf(b),
                eventId: void 0 !== e ? e.id : void 0,
                priorityId: void 0 !== e ? e.priorityId : void 0,
                Bf: void 0 !== e ? function(r) {
                    return e.Vb.Bf(r)
                } : void 0,
                Wb: function() {
                    return b
                },
                log: function() {},
                Fl: {
                    index: d && d.index,
                    type: d && d.type,
                    name: d && d.name
                },
                Wm: !!Eu(b, 3),
                originalEventData: null == e ? void 0 : e.originalEventData
            };
            e && e.cachedModelValues && (h.cachedModelValues = {
                gtm: e.cachedModelValues.gtm,
                ecommerce: e.cachedModelValues.ecommerce
            });
            if (Rz()) {
                var m = Sz(),
                    n = void 0,
                    p = void 0;
                h.eb = {
                    Vh: [],
                    pe: {},
                    pb: function(r, t, u) {
                        1 === t && (n = r);
                        7 === t && (p = u);
                        m(r, t, u)
                    },
                    Dh: mh()
                };
                h.log = function(r, t) {
                    if (n) {
                        var u = Array.prototype.slice.call(arguments, 1);
                        m(n, 4, {
                            level: r,
                            source: p,
                            message: u
                        })
                    }
                }
            }
            var q = Ke(a, h, [b, g]);
            a.h.h.F = void 0;
            q instanceof wa && "return" === q.h && (q = q.s);
            return nd(q, void 0, f)
        }
    }

    function Vz(a) {
        var b = a.gtmOnSuccess,
            c = a.gtmOnFailure;
        Fa(b) && (a.gtmOnSuccess = function() {
            G(b)
        });
        Fa(c) && (a.gtmOnFailure = function() {
            G(c)
        })
    };

    function Wz(a, b) {
        var c = this;
    }
    Wz.O = "addConsentListener";
    var Xz;
    var Yz = function(a) {
        for (var b = 0; b < a.length; ++b)
            if (Xz) try {
                a[b]()
            } catch (c) {
                L(77)
            } else a[b]()
    };

    function Zz(a, b, c) {
        var d = this,
            e;
        return e
    }
    Zz.D = "internal.addDataLayerEventListener";

    function $z(a, b, c) {}
    $z.O = "addDocumentEventListener";

    function aA(a, b, c, d) {}
    aA.O = "addElementEventListener";

    function bA(a) {}
    bA.O = "addEventCallback";

    function fA(a) {}
    fA.D = "internal.addFormAbandonmentListener";

    function gA(a, b, c, d) {}
    gA.D = "internal.addFormData";
    var hA = {},
        iA = [],
        jA = {},
        kA = 0,
        lA = 0;

    function sA(a, b) {}
    sA.D = "internal.addFormInteractionListener";

    function zA(a, b) {}
    zA.D = "internal.addFormSubmitListener";

    function EA(a) {}
    EA.D = "internal.addGaSendListener";

    function FA(a) {
        if (!a) return {};
        var b = a.Fl;
        return dv(b.type, b.index, b.name)
    }

    function GA(a) {
        return a ? {
            originatingEntity: FA(a)
        } : {}
    };
    var HA = function(a, b) {
        this.tagId = a;
        this.uc = b
    };

    function IA(a, b, c) {
        var d = this;
        var e = function(w) {
                R(91) && (Gu(w, function(x) {
                    var y, A, B;
                    y = (null == (A = Fu(uk())) ? void 0 : null == (B = A._entity) ? void 0 : B.external) || [];
                    for (var E = fa(y), F = E.next(); !F.done; F = E.next()) {
                        var D = F.value;
                        if (!D(x)) return !1
                    }
                    return !0
                }, !0), Iu(w, function(x) {
                    var y, A, B;
                    y = (null == (A = Fu(uk())) ? void 0 : null == (B = A._event) ? void 0 : B.external) || [];
                    for (var E = fa(y), F = E.next(); !F.done; F = E.next()) {
                        var D = F.value;
                        if (!D(x)) return !1
                    }
                    return !0
                }, !0));
                m && m(new HA(a, w))
            },
            f = R(64);
        f ? J(I(this), ["tagId:!string", "options:?PixieMap"], arguments) : J(I(this), ["tagId:!string", "firstPartyUrl:?string", "onLoad:?Fn"], arguments);
        var g = nd(b, this.h, 1) || {},
            h = f ? g.firstPartyUrl : b,
            m = f ? g.onLoad : nd(c, this.h, 1),
            n = f && !0 === g.loadByDestination,
            p = f && !0 === g.isGtmEvent,
            q = f && !0 === g.siloed;
        Yz([function() {
            return K(d, "load_google_tags", a, h)
        }]);
        if (n) {
            if (Bk(a)) return
        } else if (Ak(a)) return;
        var r = 6,
            t = this.h.h;
        p && (r = 7);
        "__zone" === t.Wb() && (r = 1);
        var u = {
            source: r,
            fromContainerExecution: !0,
            siloed: q
        };
        if (n) Wu(a, h, u, e);
        else {
            var v = 0 === a.indexOf("GTM-");
            Vu(a, h, !v, u, e)
        }
        m && "__zone" === t.Wb() && Bw(Number.MIN_SAFE_INTEGER, [a], null, {}, FA(this.h.h));
        if (f) return q ? ok(a) : a;
    }
    IA.D = "internal.loadGoogleTag";

    function JA(a) {
        return new ed("", function(b) {
            b = H(this, b);
            if (b instanceof ed) return new ed("", function() {
                var c = ta.apply(0, arguments),
                    d = this,
                    e = nb(this.h.h);
                e.eventId = a.eventId;
                e.priorityId = a.priorityId;
                e.originalEventData = a.originalEventData;
                var f = c.map(function(h) {
                        return H(d, h)
                    }),
                    g = Ba(this.h);
                g.h = e;
                return b.ab.apply(b, [g].concat(ja(f)))
            })
        })
    };

    function KA(a, b, c) {
        var d = this;
    }
    KA.D = "internal.addGoogleTagRestriction";
    var LA = {},
        MA = [];
    var TA = function(a, b) {};
    TA.D = "internal.addHistoryChangeListener";

    function UA(a, b, c) {}
    UA.O = "addWindowEventListener";

    function VA(a, b) {
        return !0
    }
    VA.O = "aliasInWindow";

    function WA(a, b, c) {}
    WA.D = "internal.appendRemoteConfigParameter";

    function XA() {
        var a = 2;
        return a
    };

    function YA(a, b) {
        var c;
        return c
    }
    YA.O = "callInWindow";

    function ZA(a) {}
    ZA.O = "callLater";

    function $A(a) {}
    $A.D = "callOnDomReady";

    function aB(a) {}
    aB.D = "callOnWindowLoad";

    function bB(a, b) {
        var c;
        return c
    }
    bB.D = "internal.computeGtmParameter";

    function cB(a, b) {
        var c;
        var d = md(c, this.h, XA());
        void 0 === d && void 0 !== c && L(45);
        return d
    }
    cB.O = "copyFromDataLayer";

    function dB(a) {
        var b = void 0;
        return b
    }
    dB.D = "internal.copyFromDataLayerCache";

    function eB(a) {
        var b;
        return b
    }
    eB.O = "copyFromWindow";

    function fB(a) {
        var b = void 0;
        return md(b, this.h, XA())
    }
    fB.D = "internal.copyKeyFromWindow";

    function gB(a, b) {
        var c;
        return c
    }
    gB.D = "internal.copyPreHit";

    function hB(a, b) {
        var c = null,
            d = XA();
        J(I(this), ["functionPath:!string", "arrayPath:!string"], arguments);
        K(this, "access_globals", "readwrite", a);
        K(this, "access_globals", "readwrite", b);
        var e = [z, C],
            f = a.split("."),
            g = Za(f, e),
            h = f[f.length - 1];
        if (void 0 === g) throw Error("Path " + a + " does not exist.");
        var m = g[h];
        if (m && !Fa(m)) return null;
        if (m) return md(m, this.h, d);
        var n;
        m = function() {
            if (!Fa(n.push)) throw Error("Object at " + b + " in window is not an array.");
            n.push.call(n, arguments)
        };
        g[h] = m;
        var p = b.split("."),
            q = Za(p, e),
            r = p[p.length - 1];
        if (void 0 === q) throw Error("Path " + p + " does not exist.");
        n = q[r];
        void 0 === n && (n = [], q[r] = n);
        c = function() {
            m.apply(m, Array.prototype.slice.call(arguments, 0))
        };
        return md(c, this.h, d)
    }
    hB.O = "createArgumentsQueue";

    function iB(a) {
        var b;
        return md(b, this.h, 1)
    }
    iB.D = "internal.createGaCommandQueue";

    function jB(a) {
        var b;
        return md(b, this.h,
            XA())
    }
    jB.O = "createQueue";

    function kB(a, b) {
        var c = null;
        return c
    }
    kB.D = "internal.createRegex";

    function lB(a) {}
    lB.D = "internal.declareConsentState";

    function mB(a) {
        var b = "";
        return b
    }
    mB.D = "internal.decodeUrlHtmlEntities";

    function nB(a, b, c) {
        var d;
        return d
    }
    nB.D = "internal.decorateUrlWithGaCookies";

    function oB(a) {
        var b;
        return b
    }
    oB.D = "internal.detectUserProvidedData";

    function sB(a, b) {
        return b
    }
    sB.D = "internal.enableAutoEventOnClick";

    function xB(a, b) {
        return b
    }
    xB.D = "internal.enableAutoEventOnElementVisibility";

    function yB() {}
    yB.D = "internal.enableAutoEventOnError";
    var zB = {},
        AB = [],
        BB = {},
        CB = 0,
        DB = 0;

    function JB(a, b) {
        var c = this;
        return b
    }
    JB.D = "internal.enableAutoEventOnFormInteraction";

    function OB(a, b) {
        var c = this;
        return b
    }
    OB.D = "internal.enableAutoEventOnFormSubmit";

    function TB() {
        var a = this;
    }
    TB.D = "internal.enableAutoEventOnGaSend";
    var UB = {},
        VB = [];

    function bC(a, b) {
        var c = this;
        return b
    }
    bC.D = "internal.enableAutoEventOnHistoryChange";
    var cC = ["http://", "https://", "javascript:", "file://"];

    function gC(a, b) {
        var c = this;
        return b
    }
    gC.D = "internal.enableAutoEventOnLinkClick";
    var hC, iC;

    function tC(a, b) {
        var c = this;
        return b
    }
    tC.D = "internal.enableAutoEventOnScroll";

    function uC(a) {
        return function() {
            if (a.zc && a.Bc >= a.zc) a.xc && z.clearInterval(a.xc);
            else {
                a.Bc++;
                var b = Ta();
                Kx({
                    event: a.eventName,
                    "gtm.timerId": a.xc,
                    "gtm.timerEventNumber": a.Bc,
                    "gtm.timerInterval": a.interval,
                    "gtm.timerLimit": a.zc,
                    "gtm.timerStartTime": a.Se,
                    "gtm.timerCurrentTime": b,
                    "gtm.timerElapsedTime": b - a.Se,
                    "gtm.triggers": a.Xh
                })
            }
        }
    }

    function vC(a, b) {
        return b
    }
    vC.D = "internal.enableAutoEventOnTimer";
    var yc = ca(["data-gtm-yt-inspected-"]),
        wC = ["www.youtube.com", "www.youtube-nocookie.com"],
        xC, yC = !1;

    function IC(a, b) {
        var c = this;
        return b
    }
    IC.D = "internal.enableAutoEventOnYouTubeActivity";
    var JC;

    function KC(a) {
        var b = !1;
        return b
    }
    KC.D = "internal.evaluateMatchingRules";
    var oD = function() {
        var a = !0;
        Tm(7) && Tm(9) && Tm(10) || (a = !1);
        return a
    };
    var sD = function(a, b) {
            if (!b.isGtmEvent) {
                var c = S(b, N.g.lb),
                    d = S(b, N.g.wb),
                    e = S(b, c);
                if (void 0 === e) {
                    var f = void 0;
                    pD.hasOwnProperty(c) ? f = pD[c] : qD.hasOwnProperty(c) && (f = qD[c]);
                    1 === f && (f = rD(c));
                    k(f) ? nv()(function() {
                        var g = nv().getByName(a).get(f);
                        d(g)
                    }) : d(void 0)
                } else d(e)
            }
        },
        tD = function(a, b) {
            var c = a[N.g.Mb],
                d = b + ".",
                e = a[N.g.W] || "",
                f = void 0 === c ? !!a.use_anchor : "fragment" === c,
                g = !!a[N.g.zb];
            e = String(e).replace(/\s+/g, "").split(",");
            var h = nv();
            h(d + "require", "linker");
            h(d + "linker:autoLink", e, f, g)
        },
        xD = function(a,
            b, c) {
            if (Hj() || R(24))
                if (!c.isGtmEvent || !uD[a]) {
                    var d = !Uj(N.g.R),
                        e = function(f) {
                            var g, h, m = nv(),
                                n = vD(b, "", c),
                                p, q = n.createOnlyFields._useUp;
                            if (c.isGtmEvent || wD(b, n.createOnlyFields)) {
                                c.isGtmEvent && (g = "gtm" + Hi(), h = n.createOnlyFields, n.gtmTrackerName && (h.name = g));
                                m(function() {
                                    var t = m.getByName(b);
                                    t && (p = t.get("clientId"));
                                    c.isGtmEvent || m.remove(b)
                                });
                                m("create", a, c.isGtmEvent ? h : n.createOnlyFields);
                                d && Uj(N.g.R) && (d = !1, m(function() {
                                    var t = nv().getByName(c.isGtmEvent ? g : b);
                                    !t || t.get("clientId") == p && q || (c.isGtmEvent ? (n.fieldsToSet["&gcu"] = "1", n.fieldsToSet["&sst.gcut"] = ii[f]) : (n.fieldsToSend["&gcu"] = "1", n.fieldsToSend["&sst.gcut"] = ii[f]), t.set(n.fieldsToSet), c.isGtmEvent ? t.send("pageview") : t.send("pageview", n.fieldsToSend))
                                }));
                                c.isGtmEvent && m(function() {
                                    m.remove(g)
                                })
                            }
                        };
                    Wj(function() {
                        return e(N.g.R)
                    }, N.g.R);
                    Wj(function() {
                            return e(N.g.J)
                        },
                        N.g.J);
                    c.isGtmEvent && (uD[a] = !0)
                }
        },
        yD = function(a, b) {
            nq() && b && (a[N.g.kb] = b)
        },
        HD = function(a, b, c) {
            function d() {
                var P = S(c, N.g.Rc);
                h(function() {
                    if (!c.isGtmEvent && lb(P)) {
                        var T = u.fieldsToSend,
                            Z = m().getByName(n),
                            W;
                        for (W in P)
                            if (P.hasOwnProperty(W) && /^(dimension|metric)\d+$/.test(W) && void 0 != P[W]) {
                                var X = Z.get(rD(P[W]));
                                zD(T, W, X)
                            }
                    }
                })
            }

            function e() {
                if (u.displayfeatures) {
                    var P = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
                    p("require", "displayfeatures", void 0, {
                        cookieName: P
                    })
                }
            }
            var f = a,
                g, h = c.isGtmEvent ? pv(S(c, "gaFunctionName")) :
                pv();
            if (Fa(h)) {
                var m = nv,
                    n;
                c.isGtmEvent ? n = S(c, "name") || S(c, "gtmTrackerName") : n = "gtag_" + f.split("-").join("_");
                var p = function(P) {
                        var T = [].slice.call(arguments, 0);
                        T[0] = n ? n + "." + T[0] : "" + T[0];
                        h.apply(window, T)
                    },
                    q = function(P) {
                        var T = function(ea, Da) {
                                for (var pa = 0; Da && pa < Da.length; pa++) p(ea, Da[pa])
                            },
                            Z = c.isGtmEvent,
                            W = Z ? AD(u) : BD(b, c);
                        if (W) {
                            var X = {};
                            yD(X, P);
                            p("require", "ec", "ec.js", X);
                            Z && W.fh && p("set", "&cu", W.fh);
                            var la = W.action;
                            if (Z || "impressions" === la)
                                if (T("ec:addImpression", W.Gj), !Z) return;
                            if ("promo_click" ===
                                la || "promo_view" === la || Z && W.Qe) {
                                var ia = W.Qe;
                                T("ec:addPromo", ia);
                                if (ia && 0 < ia.length && "promo_click" === la) {
                                    Z ? p("ec:setAction", la, W.nb) : p("ec:setAction", la);
                                    return
                                }
                                if (!Z) return
                            }
                            "promo_view" !== la && "impressions" !== la && (T("ec:addProduct", W.Ec), p("ec:setAction", la, W.nb))
                        }
                    },
                    r = function(P) {
                        if (P) {
                            var T = {};
                            if (lb(P))
                                for (var Z in CD) CD.hasOwnProperty(Z) && DD(CD[Z], Z, P[Z], T);
                            yD(T, y);
                            p("require", "linkid", T)
                        }
                    },
                    t = function() {
                        if (sn()) {} else {
                            var P =
                                S(c, N.g.Li);
                            P && (p("require", P, {
                                dataLayer: ni.fa
                            }), p("require", "render"))
                        }
                    },
                    u = vD(n, b, c),
                    v = function(P, T, Z) {
                        Z && (T = "" + T);
                        u.fieldsToSend[P] = T
                    };
                !c.isGtmEvent && wD(n, u.createOnlyFields) && (h(function() {
                    m() && m().remove(n)
                }), ED[n] = !1);
                h("create", f, u.createOnlyFields);
                var w = c.isGtmEvent && u.fieldsToSet[N.g.kb] && R(87);
                if (!c.isGtmEvent && u.createOnlyFields[N.g.kb] || w) {
                    var x = wi || yi ? mq(c.isGtmEvent ? u.fieldsToSet[N.g.kb] : u.createOnlyFields[N.g.kb], "/analytics.js") : void 0;
                    x && (g = x)
                }
                var y = c.isGtmEvent ? u.fieldsToSet[N.g.kb] :
                    u.createOnlyFields[N.g.kb];
                if (y) {
                    var A = c.isGtmEvent ? u.fieldsToSet[N.g.Md] : u.createOnlyFields[N.g.Md];
                    A && !ED[n] && (ED[n] = !0, h(sv(n, A)))
                }
                c.isGtmEvent ? u.enableRecaptcha && p("require", "recaptcha", "recaptcha.js") : (d(), r(u.linkAttribution));
                var B = u[N.g.Ma];
                B && B[N.g.W] && tD(B, n);
                p("set", u.fieldsToSet);
                if (c.isGtmEvent) {
                    if (u.enableLinkId) {
                        var E = {};
                        yD(E, y);
                        p("require", "linkid", "linkid.js", E)
                    }
                    xD(f, n, c)
                }
                if (b === N.g.ic)
                    if (c.isGtmEvent) {
                        e();
                        if (u.remarketingLists) {
                            var F = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
                            p("require",
                                "adfeatures", {
                                    cookieName: F
                                })
                        }
                        q(y);
                        p("send", "pageview");
                        u.createOnlyFields._useUp && qv(n + ".")
                    } else t(), p("send", "pageview", u.fieldsToSend);
                else b === N.g.sa ? (t(), eq(f, c), S(c, N.g.Db) && (dp(["aw", "dc"]), qv(n + ".")), fp(["aw", "dc"]), 0 != u.sendPageView && p("send", "pageview", u.fieldsToSend), xD(f, n, c)) : b === N.g.Pa ? sD(n, c) : "screen_view" === b ? p("send", "screenview", u.fieldsToSend) : "timing_complete" === b ? (u.fieldsToSend.hitType = "timing", v("timingCategory", u.eventCategory, !0), c.isGtmEvent ? v("timingVar", u.timingVar, !0) :
                    v("timingVar", u.name, !0), v("timingValue", Na(u.value)), void 0 !== u.eventLabel && v("timingLabel", u.eventLabel, !0), p("send", u.fieldsToSend)) : "exception" === b ? p("send", "exception", u.fieldsToSend) : "" === b && c.isGtmEvent || ("track_social" === b && c.isGtmEvent ? (u.fieldsToSend.hitType = "social", v("socialNetwork", u.socialNetwork, !0), v("socialAction", u.socialAction, !0), v("socialTarget", u.socialTarget, !0)) : ((c.isGtmEvent || FD[b]) && q(y), c.isGtmEvent && e(), u.fieldsToSend.hitType = "event", v("eventCategory", u.eventCategory, !0), v("eventAction", u.eventAction || b, !0), void 0 !== u.eventLabel && v("eventLabel", u.eventLabel, !0), void 0 !== u.value && v("eventValue", Na(u.value))), p("send", u.fieldsToSend));
                var D = g && R(87) && !c.eventMetadata.suppress_script_load;
                if (!GD && (!c.isGtmEvent || D)) {
                    g = g || "https://www.google-analytics.com/analytics.js";
                    GD = !0;
                    var M = function() {
                            c.onFailure()
                        },
                        O = function() {
                            m().loaded || M()
                        };
                    sn() ? G(O) : Kc(g, O, M)
                }
            } else G(c.onFailure)
        },
        ID = function(a, b, c, d) {
            Xj(function() {
                HD(a, b, d)
            }, [N.g.R, N.g.J])
        },
        KD = function(a) {
            function b(e) {
                function f(h,
                    m) {
                    for (var n = 0; n < m.length; n++) {
                        var p = m[n];
                        if (e[p]) {
                            g[h] = e[p];
                            break
                        }
                    }
                }
                var g = nb(e);
                f("id", ["id", "item_id", "promotion_id"]);
                f("name", ["name", "item_name", "promotion_name"]);
                f("brand", ["brand", "item_brand"]);
                f("variant", ["variant", "item_variant"]);
                f("list", ["list_name", "item_list_name"]);
                f("position", ["list_position", "creative_slot", "index"]);
                (function() {
                    if (e.category) g.category = e.category;
                    else {
                        for (var h = "", m = 0; m < JD.length; m++) void 0 !== e[JD[m]] && (h && (h += "/"), h += e[JD[m]]);
                        h && (g.category = h)
                    }
                })();
                f("listPosition", ["list_position"]);
                f("creative", ["creative_name"]);
                f("list", ["list_name"]);
                f("position", ["list_position", "creative_slot"]);
                return g
            }
            for (var c = [], d = 0; a && d < a.length; d++) a[d] && lb(a[d]) && c.push(b(a[d]));
            return c.length ? c : void 0
        },
        LD = function(a) {
            return Uj(a)
        },
        MD = !1;
    var GD, ED = {},
        uD = {},
        ND = {},
        OD = Object.freeze((ND.page_hostname = 1, ND[N.g.ja] = 1, ND[N.g.ib] = 1, ND[N.g.Wa] = 1, ND[N.g.Ka] = 1, ND[N.g.Xa] = 1, ND[N.g.kc] =
            1, ND[N.g.Qc] = 1, ND[N.g.Ra] = 1, ND[N.g.mc] = 1, ND[N.g.Aa] = 1, ND[N.g.Yc] = 1, ND[N.g.Na] = 1, ND[N.g.Ab] = 1, ND)),
        PD = {},
        pD = Object.freeze((PD.client_storage = "storage", PD.sample_rate = 1, PD.site_speed_sample_rate = 1, PD.store_gac = 1, PD.use_amp_client_id = 1, PD[N.g.ub] = 1, PD[N.g.Ha] = "storeGac", PD[N.g.Wa] = 1, PD[N.g.Ka] = 1, PD[N.g.Xa] = 1, PD[N.g.kc] = 1, PD[N.g.Qc] = 1, PD[N.g.mc] = 1, PD)),
        QD = {},
        RD = Object.freeze((QD._cs = 1, QD._useUp = 1, QD.allowAnchor = 1, QD.allowLinker = 1, QD.alwaysSendReferrer = 1, QD.clientId = 1, QD.cookieDomain = 1, QD.cookieExpires =
            1, QD.cookieFlags = 1, QD.cookieName = 1, QD.cookiePath = 1, QD.cookieUpdate = 1, QD.legacyCookieDomain = 1, QD.legacyHistoryImport = 1, QD.name = 1, QD.sampleRate = 1, QD.siteSpeedSampleRate = 1, QD.storage = 1, QD.storeGac = 1, QD.useAmpClientId = 1, QD._cd2l = 1, QD)),
        SD = Object.freeze({
            anonymize_ip: 1
        }),
        TD = {},
        qD = Object.freeze((TD.campaign = {
                content: "campaignContent",
                id: "campaignId",
                medium: "campaignMedium",
                name: "campaignName",
                source: "campaignSource",
                term: "campaignKeyword"
            }, TD.app_id = 1, TD.app_installer_id = 1, TD.app_name = 1, TD.app_version =
            1, TD.description = "exDescription", TD.fatal = "exFatal", TD.language = 1, TD.page_hostname = "hostname", TD.transport_type = "transport", TD[N.g.xa] = "currencyCode", TD[N.g.Bg] = 1, TD[N.g.Aa] = "location", TD[N.g.Yc] = "page", TD[N.g.Na] = "referrer", TD[N.g.Ab] = "title", TD[N.g.nf] = 1, TD[N.g.Ta] = 1, TD)),
        UD = {},
        VD = Object.freeze((UD.content_id = 1, UD.event_action = 1, UD.event_category = 1, UD.event_label = 1, UD.link_attribution = 1, UD.name = 1, UD[N.g.Ma] = 1, UD[N.g.Ag] = 1, UD[N.g.Sa] = 1, UD[N.g.ia] = 1, UD)),
        WD = Object.freeze({
            displayfeatures: 1,
            enableLinkId: 1,
            enableRecaptcha: 1,
            eventAction: 1,
            eventCategory: 1,
            eventLabel: 1,
            gaFunctionName: 1,
            gtmEcommerceData: 1,
            gtmTrackerName: 1,
            linker: 1,
            remarketingLists: 1,
            socialAction: 1,
            socialNetwork: 1,
            socialTarget: 1,
            timingVar: 1,
            value: 1
        }),
        JD = Object.freeze(["item_category", "item_category2", "item_category3", "item_category4", "item_category5"]),
        XD = {},
        CD = Object.freeze((XD.levels = 1, XD[N.g.Ka] = "duration", XD[N.g.kc] = 1, XD)),
        YD = {},
        ZD = Object.freeze((YD.anonymize_ip = 1, YD.fatal = 1, YD.send_page_view = 1, YD.store_gac = 1, YD.use_amp_client_id = 1,
            YD[N.g.Ha] = 1, YD[N.g.Bg] = 1, YD)),
        DD = function(a, b, c, d) {
            if (void 0 !== c)
                if (ZD[b] && (c = Oa(c)), "anonymize_ip" !== b || c || (c = void 0), 1 === a) d[rD(b)] = c;
                else if (k(a)) d[a] = c;
            else
                for (var e in a) a.hasOwnProperty(e) && void 0 !== c[e] && (d[a[e]] = c[e])
        },
        rD = function(a) {
            return a && k(a) ? a.replace(/(_[a-z])/g, function(b) {
                return b[1].toUpperCase()
            }) : a
        },
        $D = {},
        FD = Object.freeze(($D.checkout_progress = 1, $D.select_content = 1, $D.set_checkout_option = 1, $D[N.g.ac] = 1, $D[N.g.bc] = 1, $D[N.g.Hb] = 1, $D[N.g.fc] = 1, $D[N.g.fb] = 1, $D[N.g.sb] = 1, $D[N.g.hb] =
            1, $D[N.g.ra] = 1, $D[N.g.hc] = 1, $D[N.g.Fa] = 1, $D)),
        aE = {},
        bE = Object.freeze((aE.checkout_progress = 1, aE.set_checkout_option = 1, aE[N.g.dg] = 1, aE[N.g.eg] = 1, aE[N.g.ac] = 1, aE[N.g.bc] = 1, aE[N.g.fg] = 1, aE[N.g.Hb] = 1, aE[N.g.ra] = 1, aE[N.g.hc] = 1, aE[N.g.gg] = 1, aE)),
        cE = {},
        dE = Object.freeze((cE.generate_lead = 1, cE.login = 1, cE.search = 1, cE.select_content = 1, cE.share = 1, cE.sign_up = 1, cE.view_search_results = 1, cE[N.g.fc] = 1, cE[N.g.fb] = 1, cE[N.g.sb] = 1, cE[N.g.hb] = 1, cE[N.g.Fa] = 1, cE)),
        eE = function(a) {
            var b = "general";
            bE[a] ? b = "ecommerce" : dE[a] ?
                b = "engagement" : "exception" === a && (b = "error");
            return b
        },
        fE = {},
        gE = Object.freeze((fE.view_search_results = 1, fE[N.g.fb] = 1, fE[N.g.hb] = 1, fE[N.g.Fa] = 1, fE)),
        zD = function(a, b, c) {
            a.hasOwnProperty(b) || (a[b] = c)
        },
        hE = function(a) {
            if (Ha(a)) {
                for (var b = [], c = 0; c < a.length; c++) {
                    var d = a[c];
                    if (void 0 != d) {
                        var e = d.id,
                            f = d.variant;
                        void 0 != e && void 0 != f && b.push(String(e) + "." + String(f))
                    }
                }
                return 0 < b.length ? b.join("!") : void 0
            }
        },
        vD = function(a, b, c) {
            var d = function(P) {
                    return S(c, P)
                },
                e = {},
                f = {},
                g = {},
                h = {},
                m = hE(d(N.g.Ei));
            !c.isGtmEvent && m &&
                zD(f, "exp", m);
            g["&gtm"] = un(c.eventMetadata.source_canonical_id, !0);
            c.isGtmEvent || (g._no_slc = !0);
            Hj() && (h._cs = LD);
            var n = d(N.g.Rc);
            if (!c.isGtmEvent && lb(n))
                for (var p in n)
                    if (n.hasOwnProperty(p) && /^(dimension|metric)\d+$/.test(p) && void 0 != n[p]) {
                        var q = d(String(n[p]));
                        void 0 !== q && zD(f, p, q)
                    }
            for (var r = !c.isGtmEvent, t = Cl(c), u = 0; u < t.length; ++u) {
                var v = t[u];
                if (c.isGtmEvent) {
                    var w = d(v);
                    WD.hasOwnProperty(v) ? e[v] = w : RD.hasOwnProperty(v) ? h[v] = w : g[v] = w
                } else {
                    var x = void 0;
                    x = v !== N.g.ba ? d(v) : Dl(c, v);
                    if (VD.hasOwnProperty(v)) DD(VD[v],
                        v, x, e);
                    else if (SD.hasOwnProperty(v)) DD(SD[v], v, x, g);
                    else if (qD.hasOwnProperty(v)) DD(qD[v], v, x, f);
                    else if (pD.hasOwnProperty(v)) DD(pD[v], v, x, h);
                    else if (/^(dimension|metric|content_group)\d+$/.test(v)) DD(1, v, x, f);
                    else if (v === N.g.ba) {
                        if (!MD) {
                            var y = bb(x);
                            y && (f["&did"] = y)
                        }
                        var A = void 0,
                            B = void 0;
                        b === N.g.sa ? A = bb(Dl(c, v), ".") : (A = bb(Dl(c, v, 1), "."), B = bb(Dl(c, v, 2), "."));
                        A && (f["&gdid"] = A);
                        B && (f["&edid"] = B)
                    } else v === N.g.Ra && 0 > t.indexOf(N.g.kc) && (h.cookieName = x + "_ga");
                    R(22) && OD[v] && (c.C.hasOwnProperty(v) || b === N.g.sa &&
                        c.h.hasOwnProperty(v)) && (r = !1)
                }
            }
            R(22) && r && (f["&jsscut"] = "1");
            !1 !== d(N.g.Ye) && !1 !== d(N.g.ib) && oD() || (g.allowAdFeatures = !1);
            Ym(c) ? R(26) && (g.allowAdPersonalizationSignals = !0) : g.allowAdPersonalizationSignals = !1;
            !c.isGtmEvent && d(N.g.Db) && (h._useUp = !0);
            if (c.isGtmEvent) {
                h.name = h.name || e.gtmTrackerName;
                var E = g.hitCallback;
                g.hitCallback = function() {
                    Fa(E) && E();
                    c.onSuccess()
                }
            } else {
                zD(h, "cookieDomain", "auto");
                zD(g, "forceSSL", !0);
                zD(e, "eventCategory", eE(b));
                gE[b] && zD(f, "nonInteraction", !0);
                "login" === b || "sign_up" ===
                    b || "share" === b ? zD(e, "eventLabel", d(N.g.Ag)) : "search" === b || "view_search_results" === b ? zD(e, "eventLabel", d(N.g.Qi)) : "select_content" === b && zD(e, "eventLabel", d(N.g.yi));
                var F = e[N.g.Ma] || {},
                    D = F[N.g.qc];
                D || 0 != D && F[N.g.W] ? h.allowLinker = !0 : !1 === D && zD(h, "useAmpClientId", !1);
                f.hitCallback = c.onSuccess;
                h.name = a
            }
            Zm() && (g["&gcs"] = $m());
            g["&gcd"] = nn(c);
            Hj() && (Uj(N.g.R) || (h.storage = "none"), Uj(N.g.J) || (g.allowAdFeatures = !1, h.storeGac = !1));
            qn() && (g["&dma_cps"] = on());
            g["&dma"] = pn();
            Dm(Lm()) && (g["&tcfd"] = rn());
            Ji.h &&
                (g["&tag_exp"] = Ji.h);
            var M = oq(c) || d(N.g.kb),
                O = d(N.g.Md);
            M && (c.isGtmEvent || (h[N.g.kb] = M), h._cd2l = !0);
            O && !c.isGtmEvent && (h[N.g.Md] = O);
            e.fieldsToSend = f;
            e.fieldsToSet = g;
            e.createOnlyFields = h;
            return e
        },
        AD = function(a) {
            var b = a.gtmEcommerceData;
            if (!b) return null;
            var c = {};
            b.currencyCode && (c.fh = b.currencyCode);
            if (b.impressions) {
                c.action = "impressions";
                var d = b.impressions;
                c.Gj = "impressions" === b.translateIfKeyEquals ? KD(d) : d
            }
            if (b.promoView) {
                c.action = "promo_view";
                var e = b.promoView.promotions;
                c.Qe = "promoView" === b.translateIfKeyEquals ?
                    KD(e) : e
            }
            if (b.promoClick) {
                c.action = "promo_click";
                var f = b.promoClick.promotions;
                c.Qe = "promoClick" === b.translateIfKeyEquals ? KD(f) : f;
                c.nb = b.promoClick.actionField;
                return c
            }
            for (var g in b)
                if (b.hasOwnProperty(g) && "translateIfKeyEquals" !== g && "impressions" !== g && "promoView" !== g && "promoClick" !== g && "currencyCode" !== g) {
                    c.action = g;
                    var h = b[g].products;
                    c.Ec = "products" === b.translateIfKeyEquals ? KD(h) : h;
                    c.nb = b[g].actionField;
                    break
                }
            return Object.keys(c).length ? c : null
        },
        BD = function(a, b) {
            function c(u) {
                return {
                    id: d(N.g.ya),
                    affiliation: d(N.g.jg),
                    revenue: d(N.g.ia),
                    tax: d(N.g.df),
                    shipping: d(N.g.Uc),
                    coupon: d(N.g.kg),
                    list: d(N.g.cf) || d(N.g.Tc) || u
                }
            }
            for (var d = function(u) {
                    return S(b, u)
                }, e = d(N.g.Z), f, g = 0; e && g < e.length && !(f = e[g][N.g.cf] || e[g][N.g.Tc]); g++);
            var h = d(N.g.Rc);
            if (lb(h))
                for (var m = 0; e && m < e.length; ++m) {
                    var n = e[m],
                        p;
                    for (p in h) h.hasOwnProperty(p) && /^(dimension|metric)\d+$/.test(p) && void 0 != h[p] && zD(n, p, n[h[p]])
                }
            var q = null,
                r = d(N.g.Di);
            if (a === N.g.ra || a === N.g.hc) q = {
                action: a,
                nb: c(),
                Ec: KD(e)
            };
            else if (a === N.g.ac) q = {
                action: "add",
                nb: c(),
                Ec: KD(e)
            };
            else if (a === N.g.bc) q = {
                action: "remove",
                nb: c(),
                Ec: KD(e)
            };
            else if (a === N.g.Fa) q = {
                action: "detail",
                nb: c(f),
                Ec: KD(e)
            };
            else if (a === N.g.fb) q = {
                action: "impressions",
                Gj: KD(e)
            };
            else if (a === N.g.hb) q = {
                action: "promo_view",
                Qe: KD(r) || KD(e)
            };
            else if ("select_content" === a && r && 0 < r.length || a === N.g.sb) q = {
                action: "promo_click",
                Qe: KD(r) || KD(e)
            };
            else if ("select_content" === a || a === N.g.fc) q = {
                action: "click",
                nb: {
                    list: d(N.g.cf) || d(N.g.Tc) || f
                },
                Ec: KD(e)
            };
            else if (a === N.g.Hb || "checkout_progress" === a) {
                var t = {
                    step: a ===
                        N.g.Hb ? 1 : d(N.g.bf),
                    option: d(N.g.Ed)
                };
                q = {
                    action: "checkout",
                    Ec: KD(e),
                    nb: nb(c(), t)
                }
            } else "set_checkout_option" === a && (q = {
                action: "checkout_option",
                nb: {
                    step: d(N.g.bf),
                    option: d(N.g.Ed)
                }
            });
            q && (q.fh = d(N.g.xa));
            return q
        },
        iE = {},
        wD = function(a, b) {
            var c = iE[a];
            iE[a] = nb(b);
            if (!c) return !1;
            for (var d in b)
                if (b.hasOwnProperty(d) && b[d] !== c[d]) return !0;
            for (var e in c)
                if (c.hasOwnProperty(e) && c[e] !== b[e]) return !0;
            return !1
        };

    function jE(a, b, c, d) {}
    jE.D = "internal.executeEventProcessor";

    function kE(a) {
        var b = void 0;
        return md(b, this.h, 1)
    }
    kE.D = "internal.executeJavascriptString";
    var lE = function(a) {
        var b;
        return b
    };

    function mE() {
        var a = new sb;
        return a
    }
    mE.O = "getContainerVersion";

    function nE(a, b) {
        b = void 0 === b ? !0 : b;
        var c;
        return c
    }
    nE.O = "getCookieValues";

    function oE() {
        return dj()
    }
    oE.D = "internal.getCountryCode";

    function pE() {
        var a = [];
        return md(a)
    }
    pE.D = "internal.getDestinationIds";

    function qE(a, b) {
        var c = "";
        return c
    }
    qE.D = "internal.getElementAttribute";

    function rE(a) {
        var b = null;
        return b
    }
    rE.D = "internal.getElementById";

    function sE(a) {
        var b = "";
        return b
    }
    sE.D = "internal.getElementInnerText";

    function tE(a, b) {
        var c = null;
        return c
    }
    tE.D = "internal.getElementProperty";

    function uE(a) {
        var b;
        return b
    }
    uE.D = "internal.getElementValue";

    function vE(a) {
        var b = 0;
        return b
    }
    vE.D = "internal.getElementVisibilityRatio";

    function wE(a) {
        var b = null;
        return b
    }
    wE.D = "internal.getElementsByCssSelector";

    function xE(a) {
        var b = void 0;
        return b
    }
    xE.D = "internal.getEventData";
    var yE = {};
    yE.enableAWFledge = R(6);
    yE.enableAdsConversionValidation = R(20);
    yE.enableAutoPiiOnPhoneAndAddress = R(27);
    yE.enableCachedEcommerceData = R(84);
    yE.enableCcdPreAutoPiiDetection = R(11);
    yE.enableCloudRecommentationsErrorLogging = R(69);
    yE.enableCloudRecommentationsSchemaIngestion = R(68);
    yE.enableCloudRetailInjectPurchaseMetadata = R(67);
    yE.enableCloudRetailLogging = R(66);
    yE.enableCloudRetailPageCategories = R(17);
    yE.enableConsentDisclosureActivity = R(32);
    yE.enableDCFledge = R(7);
    yE.enableDecodeUri = R(50);
    yE.enableDeferAllEnhancedMeasurement = R(34);
    yE.enableDirectTagLoadingInGoogleTag = R(60);
    yE.enableEuidAutoMode = R(10);
    yE.enableFormSkipValidation = R(28);
    yE.enableLoadGoogleTagOptionsObject = R(64);
    yE.enableUrlDecodeEventUsage = R(44);
    yE.enableV1HistoryEventInApi = R(74);
    yE.loadContainerForGtmEventTags = R(31);
    yE.useEnableAutoEventOnFormApis = R(21);
    yE.autoPiiEligible = hj();

    function zE() {
        return md(yE)
    }
    zE.D = "internal.getFlags";

    function AE() {
        return new jd(sy)
    }
    AE.D = "internal.getHtmlId";

    function BE(a, b) {
        var c;
        return c
    }
    BE.D = "internal.getProductSettingsParameter";

    function CE(a, b) {
        var c;
        return c
    }
    CE.O = "getQueryParameters";

    function DE(a, b) {
        var c;
        return c
    }
    DE.O = "getReferrerQueryParameters";

    function EE(a) {
        var b = "";
        return b
    }
    EE.O = "getReferrerUrl";

    function FE() {
        return ej()
    }
    FE.D = "internal.getRegionCode";

    function GE(a, b) {
        var c;
        return c
    }
    GE.D = "internal.getRemoteConfigParameter";

    function HE(a) {
        var b = "";
        return b
    }
    HE.O = "getUrl";

    function IE() {
        K(this, "get_user_agent");
        return Dc.userAgent
    }
    IE.O = "getUserAgent";

    function TE() {
        return z.gaGlobal = z.gaGlobal || {}
    }
    var UE = function() {
            var a = TE();
            a.hid = a.hid || Ja();
            return a.hid
        },
        VE = function(a, b) {
            var c = TE();
            if (void 0 == c.vid || b && !c.from_cookie) c.vid = a, c.from_cookie = b
        };
    var CF = function(a) {
            this.s = a;
            this.C = "";
            this.h = this.s
        },
        DF = function(a, b) {
            a.h = b;
            return a
        };

    function EF(a) {
        var b = a.search;
        return a.protocol + "//" + a.hostname + a.pathname + (b ? b + "&richsstsse" : "?richsstsse")
    }

    function FF(a, b, c) {
        if (a) {
            var d = a || [],
                e = lb(b) ? b : {};
            if (Array.isArray(d))
                for (var f = 0; f < d.length; f++) c(d[f], e)
        }
    };
    var UF = window,
        VF = document,
        WF = function(a) {
            var b = UF._gaUserPrefs;
            if (b && b.ioo && b.ioo() || VF.documentElement.hasAttribute("data-google-analytics-opt-out") || a && !0 === UF["ga-disable-" + a]) return !0;
            try {
                var c = UF.external;
                if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0
            } catch (f) {}
            for (var d = wn("AMP_TOKEN", String(VF.cookie), !0), e = 0; e < d.length; e++)
                if ("$OPT_OUT" == d[e]) return !0;
            return VF.getElementById("__gaOptOutExtension") ? !0 : !1
        };

    function eG(a) {
        l(a, function(c) {
            "_" === c.charAt(0) && delete a[c]
        });
        var b = a[N.g.Ya] || {};
        l(b, function(c) {
            "_" === c.charAt(0) && delete b[c]
        })
    };
    var mG = function(a, b) {};

    function lG(a, b) {
        var c = function() {};
        return c
    }

    function nG(a, b, c) {};
    var oG = lG;

    function qG(a, b, c) {
        var d = this;
        J(I(this), ["tagId:!string", "configuration:?PixieMap", "messageContext:?PixieMap"], arguments);
        var e = b ? nd(b) : {};
        Yz([function() {
            return K(d, "configure_google_tags", a, e)
        }]);
        var f = c ? nd(c) : {},
            g = this.h.h;
        f.originatingEntity = FA(g);
        Uv(Qv(a, e), g.eventId, f);
    }
    qG.D = "internal.gtagConfig";

    function rG() {
        var a = {};
        return a
    };

    function tG(a, b) {}
    tG.O = "gtagSet";

    function uG(a, b) {}
    uG.O = "injectHiddenIframe";

    function vG(a, b, c, d, e) {}
    vG.D = "internal.injectHtml";
    var zG = {};

    function BG(a, b, c, d) {}
    var CG = Object.freeze({
            dl: 1,
            id: 1
        }),
        DG = {};

    function EG(a, b, c, d) {}
    BG.O = "injectScript";
    EG.D = "internal.injectScript";

    function FG(a) {
        var b = !0;
        return b
    }
    FG.O = "isConsentGranted";

    function GG(a) {
        var b = !1;
        return b
    }
    GG.D = "internal.isEntityInfrastructure";
    var HG = function() {
        var a = dh(function(b) {
            this.h.h.log("error", b)
        });
        a.O = "JSON";
        return a
    };

    function IG(a) {
        var b = void 0;
        return md(b)
    }
    IG.D = "internal.legacyParseUrl";
    var JG = function() {
            return !1
        },
        KG = {
            getItem: function(a) {
                var b = null;
                return b
            },
            setItem: function(a,
                b) {
                return !1
            },
            removeItem: function(a) {}
        };

    function LG() {
        try {
            K(this, "logging")
        } catch (c) {
            return
        }
        if (!console) return;
        for (var a = Array.prototype.slice.call(arguments, 0), b = 0; b < a.length; b++) a[b] = nd(a[b], this.h);
        console.log.apply(console, a);
    }
    LG.O = "logToConsole";

    function MG(a, b) {}
    MG.D = "internal.mergeRemoteConfig";

    function NG(a, b, c) {
        c = void 0 === c ? !0 : c;
        var d = [];
        return d
    }
    NG.D = "internal.parseCookieValuesFromString";

    function OG(a) {
        var b = void 0;
        return b
    }
    OG.O = "parseUrl";

    function PG(a) {}
    PG.D = "internal.processAsNewEvent";

    function QG(a, b, c) {
        var d;
        return d
    }
    QG.D = "internal.pushToDataLayer";

    function RG(a, b) {
        var c = !1;
        return c
    }
    RG.O = "queryPermission";

    function SG() {
        var a = "";
        return a
    }
    SG.O = "readCharacterSet";

    function TG() {
        return ni.fa
    }
    TG.D = "internal.readDataLayerName";

    function UG() {
        var a = "";
        return a
    }
    UG.O = "readTitle";

    function VG(a, b) {
        var c = this;
    }
    VG.D = "internal.registerCcdCallback";

    function WG(a) {
        return !0
    }
    WG.D = "internal.registerDestination";
    var XG = Object.freeze(["config", "event", "get", "set"]);

    function YG(a, b, c) {}
    YG.D = "internal.registerGtagCommandListener";

    function ZG(a, b) {
        var c = !1;
        return c
    }
    ZG.D = "internal.removeDataLayerEventListener";

    function $G(a, b) {}
    $G.D = "internal.removeFormData";

    function aH() {}
    aH.O = "resetDataLayer";

    function bH(a, b, c, d) {}
    bH.D = "internal.sendGtagEvent";

    function cH(a, b, c) {}
    cH.O = "sendPixel";

    function dH(a, b) {}
    dH.D = "internal.setAnchorHref";

    function eH(a, b, c, d) {
        var e = this;
        d = void 0 === d ? !0 : d;
        var f = !1;
        return f
    }
    eH.O = "setCookie";

    function fH(a, b) {}
    fH.D = "internal.setCorePlatformServices";

    function gH(a, b) {}
    gH.D = "internal.setDataLayerValue";

    function hH(a) {}
    hH.O = "setDefaultConsentState";

    function iH(a, b) {}
    iH.D = "internal.setDelegatedConsentType";

    function jH(a, b) {}
    jH.D = "internal.setFormAction";

    function kH(a, b, c) {
        return !1
    }
    kH.O = "setInWindow";

    function lH(a, b, c) {}
    lH.D = "internal.setProductSettingsParameter";

    function mH(a, b, c) {}
    mH.D = "internal.setRemoteConfigParameter";

    function nH(a, b) {
        var c = this;
    }
    nH.D = "internal.setupConversionLinker";

    function oH(a, b, c, d) {
        var e = this;
    }
    oH.O = "sha256";

    function pH(a, b, c) {}
    pH.D = "internal.sortRemoteConfigParameters";
    var qH = {},
        rH = {};
    qH.O = "templateStorage";
    qH.getItem = function(a) {
        var b = null;
        return b
    };
    qH.setItem = function(a, b) {};
    qH.removeItem = function(a) {};
    qH.clear = function() {};

    function sH(a, b) {
        var c = !1;
        return c
    }
    sH.D = "internal.testRegex";
    var tH = function(a) {
        var b;
        return b
    };

    function uH(a) {
        var b;
        return b
    }
    uH.D = "internal.unsiloId";

    function vH(a) {}
    vH.O = "updateConsentState";
    var wH;

    function xH(a, b, c) {
        wH = wH || new rh;
        wH.add(a, b, c)
    }

    function yH(a, b) {
        var c = wH = wH || new rh;
        if (c.s.hasOwnProperty(a)) throw "Attempting to add a private function which already exists: " + a + ".";
        if (c.h.hasOwnProperty(a)) throw "Attempting to add a private function with an existing API name: " + a + ".";
        c.s[a] = Fa(b) ? Kg(a, b) : Lg(a, b)
    }

    function zH() {
        return function(a) {
            var b;
            var c = wH;
            if (c.h.hasOwnProperty(a)) b = c.get(a, this);
            else {
                var d;
                if (d = c.s.hasOwnProperty(a)) {
                    var e = !1,
                        f = this.h.h;
                    if (f) {
                        var g = f.Wb();
                        if (g) {
                            0 !== g.indexOf("__cvt_") && (e = !0);
                        }
                    } else e = !0;
                    d = e
                }
                if (d) {
                    var h = c.s.hasOwnProperty(a) ? c.s[a] : void 0;
                    b = h
                } else throw Error(a + " is not a valid API name.");
            }
            return b
        }
    };
    var AH = function() {
        var a = function(c) {
                return yH(c.D, c)
            },
            b = function(c) {
                return xH(c.O, c)
            };
        b(Wz);
        b(bA);
        b(VA);
        b(YA);
        b(ZA);
        b(cB);
        b(eB);
        b(hB);
        b(HG());
        b(jB);
        b(mE);
        b(nE);
        b(CE);
        b(DE);
        b(EE);
        b(HE);
        b(tG);
        b(uG);
        b(BG);
        b(FG);
        b(LG);
        b(OG);
        b(RG);
        b(SG);
        b(UG);
        b(cH);
        b(eH);
        b(hH);
        b(kH);
        b(oH);
        b(qH);
        b(vH);
        xH("Math", Qg());
        xH("Object", ph);
        xH("TestHelper", th());
        xH("assertApi", Mg);
        xH("assertThat", Ng);
        xH("decodeUri", Rg);
        xH("decodeUriComponent", Sg);
        xH("encodeUri", Tg);
        xH("encodeUriComponent", Ug);
        xH("fail", $g);
        xH("generateRandom",
            ah);
        xH("getTimestamp", bh);
        xH("getTimestampMillis", bh);
        xH("getType", ch);
        xH("makeInteger", ih);
        xH("makeNumber", jh);
        xH("makeString", kh);
        xH("makeTableMap", lh);
        xH("mock", oh);
        xH("fromBase64", lE, !("atob" in z));
        xH("localStorage", KG, !JG());
        xH("toBase64", tH, !("btoa" in z));
        a(Zz);
        a(gA);
        a(sA);
        a(zA);
        a(EA);
        a(KA);
        a(TA);
        a(WA);
        a($A);
        a(aB);
        a(dB);
        a(fB);
        a(gB);
        a(iB);
        a(kB);
        a(lB);
        a(mB);
        a(oB);
        a(sB);
        a(xB);
        a(yB);
        a(JB);
        a(OB);
        a(TB);
        a(bC);
        a(gC);
        a(tC);
        a(vC);
        a(IC);
        a(Vg);
        a(KC);
        a(jE);
        a(kE);
        a(oE);
        a(pE);
        a(qE);
        a(rE);
        a(sE);
        a(tE);
        a(uE);
        a(vE);
        a(wE);
        a(xE);
        a(zE);
        a(AE);
        a(BE);
        a(FE);
        a(GE);
        a(qG);
        a(EG);
        a(IG);
        a(IA);
        a(MG);
        a(NG);
        a(PG);
        a(QG);
        a(TG);
        a(VG);
        a(WG);
        a(YG);
        a(ZG);
        a($G);
        a(bH);
        a(dH);
        a(fH);
        a(iH);
        a(jH);
        a(lH);
        a(mH);
        a(pH);
        a(sH);
        yH("internal.GtagSchema", rG());
        R(53) && a(vG);
        R(79) && a(nB);
        R(85) && a(uH);
        R(83) && a(gH);
        R(96) && a(nH);
        R(101) && a(GG);
        return zH()
    };
    var Uz;

    function BH() {
        Uz.h.h.M = function(a, b, c) {
            oi.SANDBOXED_JS_SEMAPHORE = oi.SANDBOXED_JS_SEMAPHORE || 0;
            oi.SANDBOXED_JS_SEMAPHORE++;
            try {
                return a.apply(b, c)
            } finally {
                oi.SANDBOXED_JS_SEMAPHORE--
            }
        }
    }

    function CH(a) {
        void 0 !== a && l(a, function(b, c) {
            for (var d = 0; d < c.length; d++) {
                var e = c[d].replace(/^_*/, "");
                Gi[e] = Gi[e] || [];
                Gi[e].push(b)
            }
        })
    };
    var DH = encodeURI,
        V = encodeURIComponent,
        EH = function(a, b, c) {
            Nc(a, b, c)
        },
        FH = function(a, b) {
            if (!a) return !1;
            var c = ll(ql(a), "host");
            if (!c) return !1;
            for (var d = 0; b && d < b.length; d++) {
                var e = b[d] && b[d].toLowerCase();
                if (e) {
                    var f = c.length - e.length;
                    0 < f && "." != e.charAt(0) && (f--, e = "." + e);
                    if (0 <= f && c.indexOf(e, f) == f) return !0
                }
            }
            return !1
        },
        GH = function(a, b, c) {
            for (var d = {}, e = !1, f = 0; a && f < a.length; f++) a[f] && a[f].hasOwnProperty(b) &&
                a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c], e = !0);
            return e ? d : null
        };
    var Y = {
        securityGroups: {}
    };

    Y.securityGroups.sdl = ["google"],
        function() {
            function a() {
                return !!(Object.keys(m("horiz.pix")).length || Object.keys(m("horiz.pct")).length || Object.keys(m("vert.pix")).length || Object.keys(m("vert.pct")).length)
            }

            function b(y) {
                for (var A = [], B = y.split(","), E = 0; E < B.length; E++) {
                    var F = Number(B[E]);
                    if (isNaN(F)) return [];
                    p.test(B[E]) || A.push(F)
                }
                return A
            }

            function c() {
                var y = 0,
                    A = 0;
                return function() {
                    var B = wq(),
                        E = B.height;
                    y = Math.max(v.scrollLeft + B.width, y);
                    A = Math.max(v.scrollTop + E, A);
                    return {
                        gh: y,
                        hh: A
                    }
                }
            }

            function d() {
                t =
                    U("self");
                u = t.document;
                v = u.scrollingElement || u.body && u.body.parentNode;
                x = c()
            }

            function e(y, A, B, E) {
                var F = m(A),
                    D = {},
                    M;
                for (M in F)
                    if (D = {
                            sd: D.sd
                        }, D.sd = M, F.hasOwnProperty(D.sd)) {
                        var O = Number(D.sd);
                        y < O || (hz({
                            event: "gtm.scrollDepth",
                            "gtm.scrollThreshold": O,
                            "gtm.scrollUnits": B.toLowerCase(),
                            "gtm.scrollDirection": E,
                            "gtm.triggers": F[D.sd].join(",")
                        }), Cy("sdl", A, function(P) {
                            return function(T) {
                                delete T[P.sd];
                                return T
                            }
                        }(D), {}))
                    }
            }

            function f() {
                var y = x(),
                    A = y.gh,
                    B = y.hh,
                    E = A / v.scrollWidth * 100,
                    F = B / v.scrollHeight * 100;
                e(A, "horiz.pix", q.xf, r.Xi);
                e(E, "horiz.pct", q.wf, r.Xi);
                e(B, "vert.pix", q.xf, r.qj);
                e(F, "vert.pct", q.wf, r.qj);
                By("sdl", "pending", !1)
            }

            function g() {
                var y = 250,
                    A = !1;
                u.scrollingElement && u.documentElement && t.addEventListener && (y = 50, A = !0);
                var B = 0,
                    E = !1,
                    F = function() {
                        E ? B = az(F, y) : (B = 0, f(), mz("sdl") && !a() && (Pc(t, "scroll", D), Pc(t, "resize", D), By("sdl", "init", !1)));
                        E = !1
                    },
                    D = function() {
                        A && x();
                        B ? E = !0 : (B = az(F, y), By("sdl", "pending", !0))
                    };
                return D
            }

            function h(y, A, B) {
                if (A) {
                    var E = b(String(y));
                    Cy("sdl", B, function(F) {
                        for (var D =
                                0; D < E.length; D++) {
                            var M = String(E[D]);
                            F.hasOwnProperty(M) || (F[M] = []);
                            F[M].push(A)
                        }
                        return F
                    }, {})
                }
            }

            function m(y) {
                return Dy("sdl", y, {})
            }

            function n(y) {
                G(y.vtp_gtmOnSuccess);
                var A = y.vtp_uniqueTriggerId,
                    B = y.vtp_horizontalThresholdsPixels,
                    E = y.vtp_horizontalThresholdsPercent,
                    F = y.vtp_verticalThresholdUnits,
                    D = y.vtp_verticalThresholdsPixels,
                    M = y.vtp_verticalThresholdsPercent;
                switch (y.vtp_horizontalThresholdUnits) {
                    case q.xf:
                        h(B, A, "horiz.pix");
                        break;
                    case q.wf:
                        h(E, A, "horiz.pct")
                }
                switch (F) {
                    case q.xf:
                        h(D, A, "vert.pix");
                        break;
                    case q.wf:
                        h(M, A, "vert.pct")
                }
                mz("sdl") ? Dy("sdl", "pending") || (w || (d(), w = !0), G(function() {
                    return f()
                })) : (d(), w = !0, v && (nz("sdl"), By("sdl", "pending", !0), G(function() {
                    f();
                    if (a()) {
                        var O = g();
                        Oc(t, "scroll", O);
                        Oc(t, "resize", O)
                    } else By("sdl", "init", !1)
                })))
            }
            var p = /^\s*$/,
                q = {
                    wf: "PERCENT",
                    xf: "PIXELS"
                },
                r = {
                    qj: "vertical",
                    Xi: "horizontal"
                },
                t, u, v, w = !1,
                x;
            (function(y) {
                Y.__sdl = y;
                Y.__sdl.m = "sdl";
                Y.__sdl.isVendorTemplate = !0;
                Y.__sdl.priorityOverride = 0;
                Y.__sdl.isInfrastructure = !1;
                Y.__sdl.runInSiloedMode = !1
            })(function(y) {
                y.vtp_triggerStartOption ?
                    n(y) : lx(function() {
                        n(y)
                    })
            })
        }();
    Y.securityGroups.jsm = ["customScripts"],
        function() {
            (function(a) {
                Y.__jsm = a;
                Y.__jsm.m = "jsm";
                Y.__jsm.isVendorTemplate = !0;
                Y.__jsm.priorityOverride = 0;
                Y.__jsm.isInfrastructure = !1;
                Y.__jsm.runInSiloedMode = !1
            })(function(a) {
                if (void 0 !== a.vtp_javascript) {
                    var b = a.vtp_javascript;
                    try {
                        var c = U("google_tag_manager");
                        return c && c.e && c.e(b)
                    } catch (d) {}
                }
            })
        }();
    Y.securityGroups.c = ["google"],
        function() {
            (function(a) {
                Y.__c = a;
                Y.__c.m = "c";
                Y.__c.isVendorTemplate = !0;
                Y.__c.priorityOverride = 0;
                Y.__c.isInfrastructure = !1;
                Y.__c.runInSiloedMode = !0
            })(function(a) {
                return a.vtp_value
            })
        }();

    Y.securityGroups.d = ["google"],
        function() {
            (function(a) {
                Y.__d = a;
                Y.__d.m = "d";
                Y.__d.isVendorTemplate = !0;
                Y.__d.priorityOverride = 0;
                Y.__d.isInfrastructure = !1;
                Y.__d.runInSiloedMode = !1
            })(function(a) {
                var b = null,
                    c = null,
                    d = a.vtp_attributeName;
                if ("CSS" == a.vtp_selectorType) try {
                    var e = vh(a.vtp_elementSelector);
                    e && 0 < e.length && (b = e[0])
                } catch (f) {
                    b = null
                } else b = C.getElementById(a.vtp_elementId);
                b && (d ? c = function() {
                    if (b instanceof HTMLInputElement) {
                        var f = b;
                        if ("value" === d) return f.value;
                        if ("checked" === d && ("radio" === f.type ||
                                "checkbox" === f.type)) return f.checked
                    }
                    return Qc(b, d)
                }() : c = Rc(b));
                return Qa(String(b && c))
            })
        }();
    Y.securityGroups.e = ["google"],
        function() {
            (function(a) {
                Y.__e = a;
                Y.__e.m = "e";
                Y.__e.isVendorTemplate = !0;
                Y.__e.priorityOverride = 0;
                Y.__e.isInfrastructure = !1;
                Y.__e.runInSiloedMode = !0
            })(function(a) {
                return String(a.vtp_gtmCachedValues.event)
            })
        }();
    Y.securityGroups.f = ["google"],
        function() {
            (function(a) {
                Y.__f = a;
                Y.__f.m = "f";
                Y.__f.isVendorTemplate = !0;
                Y.__f.priorityOverride = 0;
                Y.__f.isInfrastructure = !1;
                Y.__f.runInSiloedMode = !1
            })(function(a) {
                var b = gz("gtm.referrer", 1) || C.referrer;
                return b ? a.vtp_component && "URL" != a.vtp_component ? ll(ql(String(b)), a.vtp_component, a.vtp_stripWww, a.vtp_defaultPages, a.vtp_queryKey) : fz(String(b)) : String(b)
            })
        }();
    Y.securityGroups.cl = ["google"],
        function() {
            function a(b) {
                var c = b.target;
                if (c) {
                    var d = zy(c, "gtm.click");
                    hz(d)
                }
            }(function(b) {
                Y.__cl = b;
                Y.__cl.m = "cl";
                Y.__cl.isVendorTemplate = !0;
                Y.__cl.priorityOverride = 0;
                Y.__cl.isInfrastructure = !1;
                Y.__cl.runInSiloedMode = !1
            })(function(b) {
                if (!mz("cl")) {
                    var c = U("document");
                    Oc(c, "click", a, !0);
                    nz("cl")
                }
                G(b.vtp_gtmOnSuccess)
            })
        }();
    Y.securityGroups.j = ["google"],
        function() {
            (function(a) {
                Y.__j = a;
                Y.__j.m = "j";
                Y.__j.isVendorTemplate = !0;
                Y.__j.priorityOverride = 0;
                Y.__j.isInfrastructure = !1;
                Y.__j.runInSiloedMode = !1
            })(function(a) {
                for (var b = String(a.vtp_name).split("."), c = U(b.shift()), d = 0; d < b.length; d++) c = c && c[b[d]];
                return c
            })
        }();
    Y.securityGroups.access_globals = ["google"],
        function() {
            function a(b, c, d) {
                var e = {
                    key: d,
                    read: !1,
                    write: !1,
                    execute: !1
                };
                switch (c) {
                    case "read":
                        e.read = !0;
                        break;
                    case "write":
                        e.write = !0;
                        break;
                    case "readwrite":
                        e.read = e.write = !0;
                        break;
                    case "execute":
                        e.execute = !0;
                        break;
                    default:
                        throw Error("Invalid " + b + " request " + c);
                }
                return e
            }(function(b) {
                Y.__access_globals = b;
                Y.__access_globals.m = "access_globals";
                Y.__access_globals.isVendorTemplate = !0;
                Y.__access_globals.priorityOverride = 0;
                Y.__access_globals.isInfrastructure = !1;
                Y.__access_globals.runInSiloedMode = !1
            })(function(b) {
                for (var c = b.vtp_keys || [], d = b.vtp_createPermissionError, e = [], f = [], g = [], h = 0; h < c.length; h++) {
                    var m = c[h],
                        n = m.key;
                    m.read && e.push(n);
                    m.write && f.push(n);
                    m.execute && g.push(n)
                }
                return {
                    assert: function(p, q, r) {
                        if (!k(r)) throw d(p, {}, "Key must be a string.");
                        if ("read" === q) {
                            if (-1 < e.indexOf(r)) return
                        } else if ("write" === q) {
                            if (-1 < f.indexOf(r)) return
                        } else if ("readwrite" === q) {
                            if (-1 < f.indexOf(r) && -1 < e.indexOf(r)) return
                        } else if ("execute" === q) {
                            if (-1 < g.indexOf(r)) return
                        } else throw d(p, {}, "Operation must be either 'read', 'write', or 'execute', was " + q);
                        throw d(p, {}, "Prohibited " + q + " on global variable: " + r + ".");
                    },
                    K: a
                }
            })
        }();
    Y.securityGroups.u = ["google"],
        function() {
            var a = function(b) {
                return {
                    toString: function() {
                        return b
                    }
                }
            };
            (function(b) {
                Y.__u = b;
                Y.__u.m = "u";
                Y.__u.isVendorTemplate = !0;
                Y.__u.priorityOverride = 0;
                Y.__u.isInfrastructure = !1;
                Y.__u.runInSiloedMode = !1
            })(function(b) {
                var c;
                c = (c = b.vtp_customUrlSource ? b.vtp_customUrlSource : gz("gtm.url", 1)) || dz();
                var d = b[a("vtp_component")];
                if (!d || "URL" == d) return fz(String(c));
                var e = ql(String(c)),
                    f;
                if ("QUERY" === d) a: {
                    var g = b[a("vtp_multiQueryKeys").toString()],
                        h = b[a("vtp_queryKey").toString()] ||
                        "",
                        m = b[a("vtp_ignoreEmptyQueryParam").toString()],
                        n;g ? Ha(h) ? n = h : n = String(h).replace(/\s+/g, "").split(",") : n = [String(h)];
                    for (var p = 0; p < n.length; p++) {
                        var q = ll(e, "QUERY", void 0, void 0, n[p]);
                        if (void 0 != q && (!m || "" !== q)) {
                            f = q;
                            break a
                        }
                    }
                    f = void 0
                }
                else f = ll(e, d, "HOST" == d ? b[a("vtp_stripWww")] : void 0, "PATH" == d ? b[a("vtp_defaultPages")] : void 0);
                return f
            })
        }();
    Y.securityGroups.v = ["google"],
        function() {
            (function(a) {
                Y.__v = a;
                Y.__v.m = "v";
                Y.__v.isVendorTemplate = !0;
                Y.__v.priorityOverride = 0;
                Y.__v.isInfrastructure = !1;
                Y.__v.runInSiloedMode = !1
            })(function(a) {
                var b = a.vtp_name;
                if (!b || !b.replace) return !1;
                var c = gz(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1);
                return void 0 !== c ? c : a.vtp_defaultValue
            })
        }();




    Y.securityGroups.ytl = ["google"],
        function() {
            function a() {
                var u = Math.round(1E9 * Math.random()) + "";
                return C.getElementById(u) ? a() : u
            }

            function b(u, v) {
                if (!u) return !1;
                for (var w = 0; w < p.length; w++)
                    if (0 <= u.indexOf("//" + p[w] + "/" + v)) return !0;
                return !1
            }

            function c(u, v) {
                var w = u.getAttribute("src");
                if (b(w, "embed/")) {
                    if (0 < w.indexOf("enablejsapi=1")) return !0;
                    if (v) {
                        var x = u.setAttribute,
                            y;
                        var A = -1 !== w.indexOf("?") ? "&" : "?";
                        if (-1 < w.indexOf("origin=")) y = w + A + "enablejsapi=1";
                        else {
                            if (!r) {
                                var B = U("document");
                                r = B.location.protocol +
                                    "//" + B.location.hostname;
                                B.location.port && (r += ":" + B.location.port)
                            }
                            y = w + A + "enablejsapi=1&origin=" + encodeURIComponent(r)
                        }
                        x.call(u, "src", y);
                        return !0
                    }
                }
                return !1
            }

            function d(u, v) {
                if (!u.getAttribute("data-gtm-yt-inspected-" + v.qb) && (u.setAttribute("data-gtm-yt-inspected-" + v.qb, "true"), c(u, v.xe))) {
                    u.id || (u.id = a());
                    var w = U("YT"),
                        x = w.get(u.id);
                    x || (x = new w.Player(u.id));
                    var y = f(x, v),
                        A = {},
                        B;
                    for (B in y) A = {
                        Je: A.Je
                    }, A.Je = B, y.hasOwnProperty(A.Je) && x.addEventListener(A.Je, function(E) {
                        return function(F) {
                            return y[E.Je](F.data)
                        }
                    }(A))
                }
            }

            function e(u) {
                G(function() {
                    function v() {
                        for (var x = w.getElementsByTagName("iframe"), y = x.length, A = 0; A < y; A++) d(x[A], u)
                    }
                    var w = U("document");
                    v();
                    Ny(v)
                })
            }

            function f(u, v) {
                var w, x;

                function y() {
                    T = Zy(function() {
                        return {
                            url: X,
                            title: la,
                            ih: W,
                            wj: u.getCurrentTime(),
                            playbackRate: ia
                        }
                    }, v.qb, u.getIframe());
                    W = 0;
                    la = X = "";
                    ia = 1;
                    return A
                }

                function A(Ea) {
                    switch (Ea) {
                        case q.PLAYING:
                            W = Math.round(u.getDuration());
                            X = u.getVideoUrl();
                            if (u.getVideoData) {
                                var Ra = u.getVideoData();
                                la = Ra ? Ra.title : ""
                            }
                            ia = u.getPlaybackRate();
                            v.ah ? hz(T.createEvent("start")) :
                                T.hd();
                            Z = m(v.Oh, v.Nh, u.getDuration());
                            return B(Ea);
                        default:
                            return A
                    }
                }

                function B() {
                    ea = u.getCurrentTime();
                    Da = cz().getTime();
                    T.Tj();
                    P();
                    return E
                }

                function E(Ea) {
                    var Ra;
                    switch (Ea) {
                        case q.ENDED:
                            return D(Ea);
                        case q.PAUSED:
                            Ra = "pause";
                        case q.BUFFERING:
                            var mb = u.getCurrentTime() - ea;
                            Ra = 1 < Math.abs((cz().getTime() - Da) / 1E3 * ia - mb) ? "seek" : Ra || "buffering";
                            u.getCurrentTime() && (v.Zg ? hz(T.createEvent(Ra)) : T.hd());
                            O();
                            return F;
                        case q.UNSTARTED:
                            return y(Ea);
                        default:
                            return E
                    }
                }

                function F(Ea) {
                    switch (Ea) {
                        case q.ENDED:
                            return D(Ea);
                        case q.PLAYING:
                            return B(Ea);
                        case q.UNSTARTED:
                            return y(Ea);
                        default:
                            return F
                    }
                }

                function D() {
                    for (; x;) {
                        var Ea = w;
                        $y(x);
                        Ea()
                    }
                    v.Yg && hz(T.createEvent("complete", 1));
                    return y(q.UNSTARTED)
                }

                function M() {}

                function O() {
                    x && ($y(x), x = 0, w = M)
                }

                function P() {
                    if (Z.length && 0 !== ia) {
                        var Ea = -1,
                            Ra;
                        do {
                            Ra = Z[0];
                            if (Ra.Ca > u.getDuration()) return;
                            Ea = (Ra.Ca - u.getCurrentTime()) / ia;
                            if (0 > Ea && (Z.shift(), 0 === Z.length)) return
                        } while (0 > Ea);
                        w = function() {
                            x = 0;
                            w = M;
                            0 < Z.length && Z[0].Ca === Ra.Ca && (Z.shift(), hz(T.createEvent("progress", Ra.Pe, Ra.Re)));
                            P()
                        };
                        x = az(w, 1E3 * Ea)
                    }
                }
                var T, Z = [],
                    W, X, la, ia, ea, Da, pa = y(q.UNSTARTED);
                x = 0;
                w = M;
                return {
                    onStateChange: function(Ea) {
                        pa = pa(Ea)
                    },
                    onPlaybackRateChange: function(Ea) {
                        ea = u.getCurrentTime();
                        Da = cz().getTime();
                        T.hd();
                        ia = Ea;
                        O();
                        P()
                    }
                }
            }

            function g(u) {
                for (var v = u.split(","), w = v.length, x = [], y = 0; y < w; y++) {
                    var A = parseInt(v[y], 10);
                    isNaN(A) || 100 < A || 0 > A || x.push(A / 100)
                }
                x.sort(function(B, E) {
                    return B - E
                });
                return x
            }

            function h(u) {
                for (var v = u.split(","), w = v.length, x = [], y = 0; y < w; y++) {
                    var A = parseInt(v[y], 10);
                    isNaN(A) || 0 > A || x.push(A)
                }
                x.sort(function(B,
                    E) {
                    return B - E
                });
                return x
            }

            function m(u, v, w) {
                var x = u.map(function(B) {
                    return {
                        Ca: B,
                        Re: B,
                        Pe: void 0
                    }
                });
                if (!v.length) return x;
                var y = v.map(function(B) {
                    return {
                        Ca: B * w,
                        Re: void 0,
                        Pe: B
                    }
                });
                if (!x.length) return y;
                var A = x.concat(y);
                A.sort(function(B, E) {
                    return B.Ca - E.Ca
                });
                return A
            }

            function n(u) {
                var v = !!u.vtp_captureStart,
                    w = !!u.vtp_captureComplete,
                    x = !!u.vtp_capturePause,
                    y = g(u.vtp_progressThresholdsPercent + ""),
                    A = h(u.vtp_progressThresholdsTimeInSeconds + ""),
                    B = !!u.vtp_fixMissingApi;
                if (v || w || x || y.length || A.length) {
                    var E = {
                            ah: v,
                            Yg: w,
                            Zg: x,
                            Nh: y,
                            Oh: A,
                            xe: B,
                            qb: void 0 === u.vtp_uniqueTriggerId ? "" : u.vtp_uniqueTriggerId
                        },
                        F = U("YT"),
                        D = function() {
                            e(E)
                        };
                    G(u.vtp_gtmOnSuccess);
                    if (F) F.ready && F.ready(D);
                    else {
                        var M = U("onYouTubeIframeAPIReady");
                        iz("onYouTubeIframeAPIReady", function() {
                            M && M();
                            D()
                        });
                        G(function() {
                            for (var O = U("document"), P = O.getElementsByTagName("script"), T = P.length, Z = 0; Z < T; Z++) {
                                var W = P[Z].getAttribute("src");
                                if (b(W, "iframe_api") || b(W, "player_api")) return
                            }
                            for (var X = O.getElementsByTagName("iframe"), la = X.length, ia = 0; ia < la; ia++)
                                if (!t &&
                                    c(X[ia], E.xe)) {
                                    bz("https://www.youtube.com/iframe_api");
                                    t = !0;
                                    break
                                }
                        })
                    }
                } else G(u.vtp_gtmOnSuccess)
            }
            var p = ["www.youtube.com", "www.youtube-nocookie.com"],
                q = {
                    UNSTARTED: -1,
                    ENDED: 0,
                    PLAYING: 1,
                    PAUSED: 2,
                    BUFFERING: 3,
                    CUED: 5
                },
                r, t = !1;
            (function(u) {
                Y.__ytl = u;
                Y.__ytl.m = "ytl";
                Y.__ytl.isVendorTemplate = !0;
                Y.__ytl.priorityOverride = 0;
                Y.__ytl.isInfrastructure = !1;
                Y.__ytl.runInSiloedMode = !1
            })(function(u) {
                u.vtp_triggerStartOption ? n(u) : bv(function() {
                    n(u)
                })
            })
        }();

    Y.securityGroups.aev = ["google"],
        function() {
            function a(r, t, u, v, w) {
                w || (w = "element");
                var x = t + "." + u,
                    y;
                if (n.hasOwnProperty(x)) y = n[x];
                else {
                    var A = r[w];
                    if (A && (y = v(A), n[x] = y, p.push(x), 35 < p.length)) {
                        var B = p.shift();
                        delete n[B]
                    }
                }
                return y
            }

            function b(r, t, u) {
                var v = r[q[t]];
                return void 0 !== v ? v : u
            }

            function c(r, t) {
                if (!r) return !1;
                var u = d(dz());
                Ha(t) || (t = String(t || "").replace(/\s+/g, "").split(","));
                for (var v = [u], w = 0; w < t.length; w++) {
                    var x = t[w];
                    if (x.hasOwnProperty("is_regex"))
                        if (x.is_regex) try {
                            x = new RegExp(x.domain)
                        } catch (B) {
                            continue
                        } else x =
                            x.domain;
                    var y = d(r);
                    if (x instanceof RegExp) {
                        if (x.test(y)) return !1
                    } else {
                        var A = x;
                        if (0 != A.length) {
                            if (0 <= y.indexOf(A)) return !1;
                            v.push(d(A))
                        }
                    }
                }
                return !FH(r, v)
            }

            function d(r) {
                m.test(r) || (r = "http://" + r);
                return ll(ql(r), "HOST", !0)
            }

            function e(r, t, u, v) {
                switch (r) {
                    case "SUBMIT_TEXT":
                        return a(t, u, "FORM." + r, f, "formSubmitElement") || v;
                    case "LENGTH":
                        var w = a(t, u, "FORM." + r, g);
                        return void 0 === w ? v : w;
                    case "INTERACTED_FIELD_ID":
                        return h(t, "id", v);
                    case "INTERACTED_FIELD_NAME":
                        return h(t, "name", v);
                    case "INTERACTED_FIELD_TYPE":
                        return h(t,
                            "type", v);
                    case "INTERACTED_FIELD_POSITION":
                        var x = t.interactedFormFieldPosition;
                        return void 0 === x ? v : x;
                    case "INTERACT_SEQUENCE_NUMBER":
                        var y = t.interactSequenceNumber;
                        return void 0 === y ? v : y;
                    default:
                        return v
                }
            }

            function f(r) {
                switch (r.tagName.toLowerCase()) {
                    case "input":
                        return Qc(r, "value");
                    case "button":
                        return Rc(r);
                    default:
                        return null
                }
            }

            function g(r) {
                if ("form" === r.tagName.toLowerCase() && r.elements) {
                    for (var t = 0, u = 0; u < r.elements.length; u++) Iy(r.elements[u]) && t++;
                    return t
                }
            }

            function h(r, t, u) {
                var v = r.interactedFormField;
                return v && Qc(v, t) || u
            }
            var m = /^https?:\/\//i,
                n = {},
                p = [],
                q = {
                    ATTRIBUTE: "elementAttribute",
                    CLASSES: "elementClasses",
                    ELEMENT: "element",
                    ID: "elementId",
                    HISTORY_CHANGE_SOURCE: "historyChangeSource",
                    HISTORY_NEW_STATE: "newHistoryState",
                    HISTORY_NEW_URL_FRAGMENT: "newUrlFragment",
                    HISTORY_OLD_STATE: "oldHistoryState",
                    HISTORY_OLD_URL_FRAGMENT: "oldUrlFragment",
                    TARGET: "elementTarget"
                };
            (function(r) {
                Y.__aev = r;
                Y.__aev.m = "aev";
                Y.__aev.isVendorTemplate = !0;
                Y.__aev.priorityOverride = 0;
                Y.__aev.isInfrastructure = !1;
                Y.__aev.runInSiloedMode = !1
            })(function(r) {
                var t = r.vtp_gtmEventId,
                    u = r.vtp_defaultValue,
                    v = r.vtp_varType,
                    w = r.vtp_gtmCachedValues.gtm;
                switch (v) {
                    case "TAG_NAME":
                        var x = w.element;
                        return x && x.tagName || u;
                    case "TEXT":
                        return a(w, t, v, Rc) || u;
                    case "URL":
                        var y;
                        a: {
                            var A = String(w.elementUrl || u || ""),
                                B = ql(A),
                                E = String(r.vtp_component || "URL");
                            switch (E) {
                                case "URL":
                                    y = A;
                                    break a;
                                case "IS_OUTBOUND":
                                    y = c(A, r.vtp_affiliatedDomains);
                                    break a;
                                default:
                                    y = ll(B, E, r.vtp_stripWww, r.vtp_defaultPages, r.vtp_queryKey)
                            }
                        }
                        return y;
                    case "ATTRIBUTE":
                        var F;
                        if (void 0 ===
                            r.vtp_attribute) F = b(w, v, u);
                        else {
                            var D = w.element;
                            F = D && Qc(D, r.vtp_attribute) || u || ""
                        }
                        return F;
                    case "MD":
                        var M = r.vtp_mdValue,
                            O = a(w, t, "MD", Vy);
                        return M && O ? Yy(O, M) || u : O || u;
                    case "FORM":
                        return e(String(r.vtp_component || "SUBMIT_TEXT"), w, t, u);
                    default:
                        return b(w, v, u)
                }
            })
        }();



    Y.securityGroups.smm = ["google"],
        function() {
            (function(a) {
                Y.__smm = a;
                Y.__smm.m = "smm";
                Y.__smm.isVendorTemplate = !0;
                Y.__smm.priorityOverride = 0;
                Y.__smm.isInfrastructure = !1;
                Y.__smm.runInSiloedMode = !1
            })(function(a) {
                var b = a.vtp_input,
                    c = GH(a.vtp_map, "key", "value") || {};
                return c.hasOwnProperty(b) ? c[b] : a.vtp_defaultValue
            })
        }();


    Y.securityGroups.lcl = [],
        function() {
            function a() {
                var e = U("document"),
                    f = 0,
                    g = R(65),
                    h = function(m) {
                        var n = m.target;
                        if (n && 3 !== m.which && !(m.uh || m.timeStamp && m.timeStamp === f)) {
                            f = m.timeStamp;
                            n = Tc(n, ["a", "area"], 100);
                            if (!n) return m.returnValue;
                            var p = m.defaultPrevented || !1 === m.returnValue,
                                q = Dy("lcl", p ? "nv.mwt" : "mwt", 0),
                                r;
                            r = p ? Dy("lcl", "nv.ids", []) : Dy("lcl", "ids", []);
                            if (g) {
                                for (var t = [], u = Dy("lcl", "aff.map", {}), v = fa(r), w = v.next(); !w.done; w = v.next()) {
                                    var x = w.value,
                                        y = u[x];
                                    y && !b(m, y, n) || t.push(x)
                                }
                                r = t
                            }
                            if (r.length) {
                                var A =
                                    zy(n, "gtm.linkClick", r),
                                    B = c(m, n, e);
                                g && (A["gtm.elementText"] = Rc(n), A["gtm.willOpenInNewWindow"] = !B);
                                if (B && !p && q && n.href) {
                                    var E = !!Ia(String(Vc(n, "rel") || "").split(" "), function(O) {
                                            return "noreferrer" === O.toLowerCase()
                                        }),
                                        F = U((Vc(n, "target") || "_self").substring(1)),
                                        D = !0,
                                        M = Mx(function() {
                                            var O;
                                            if (O = D && F) {
                                                var P;
                                                a: if (E) {
                                                    var T;
                                                    try {
                                                        T = new MouseEvent(m.type, {
                                                            bubbles: !0
                                                        })
                                                    } catch (Z) {
                                                        if (!e.createEvent) {
                                                            P = !1;
                                                            break a
                                                        }
                                                        T = e.createEvent("MouseEvents");
                                                        T.initEvent(m.type, !0, !0)
                                                    }
                                                    T.uh = !0;
                                                    m.target.dispatchEvent(T);
                                                    P = !0
                                                } else P = !1;
                                                O = !P
                                            }
                                            O && (F.location.href = Vc(n, "href"))
                                        }, q);
                                    if (hz(A, M, q)) D = !1;
                                    else return m.preventDefault && m.preventDefault(), m.returnValue = !1
                                } else hz(A, function() {}, q || 2E3);
                                return !0
                            }
                        }
                    };
                Oc(e, "click", h, !1);
                Oc(e, "auxclick", h, !1)
            }

            function b(e, f, g) {
                for (var h = ll(ql((g.attributes && g.attributes.formaction ? g.formAction : "") || g.action || Vc(g, "href") || g.src || g.code || g.codebase || ""), "host"), m = 0; m < f.length; m++) try {
                    if ((new RegExp(f[m])).test(h)) return !1
                } catch (n) {}
                return !0
            }

            function c(e, f, g) {
                if (2 === e.which || e.ctrlKey || e.shiftKey ||
                    e.altKey || e.metaKey) return !1;
                var h = Vc(f, "href");
                if (-1 !== h.indexOf(":") && !d.some(function(r) {
                        return 0 === h.indexOf(r)
                    })) return !1;
                var m = h.indexOf("#"),
                    n = Vc(f, "target");
                if (n && "_self" !== n && "_parent" !== n && "_top" !== n || 0 === m) return !1;
                if (0 < m) {
                    var p = fz(h),
                        q = fz(g.location);
                    return p !== q
                }
                return !0
            }
            var d = ["http://", "https://", "javascript:", "file://"];
            (function(e) {
                Y.__lcl = e;
                Y.__lcl.m = "lcl";
                Y.__lcl.isVendorTemplate = !0;
                Y.__lcl.priorityOverride = 0;
                Y.__lcl.isInfrastructure = !1;
                Y.__lcl.runInSiloedMode = !1
            })(function(e) {
                var f =
                    void 0 === e.vtp_waitForTags ? !0 : e.vtp_waitForTags,
                    g = void 0 === e.vtp_checkValidation ? !0 : e.vtp_checkValidation,
                    h = Number(e.vtp_waitForTagsTimeout);
                if (!h || 0 >= h) h = 2E3;
                var m = e.vtp_uniqueTriggerId || "0";
                if (f) {
                    var n = function(q) {
                        return Math.max(h, q)
                    };
                    Cy("lcl", "mwt", n, 0);
                    g || Cy("lcl", "nv.mwt", n, 0)
                }
                var p = function(q) {
                    q.push(m);
                    return q
                };
                Cy("lcl", "ids", p, []);
                g || Cy("lcl", "nv.ids", p, []);
                mz("lcl") || (a(), nz("lcl"));
                G(e.vtp_gtmOnSuccess)
            })
        }();
    Y.securityGroups.evl = ["google"],
        function() {
            function a() {
                var f = Number(gz("gtm.start")) || 0;
                return cz().getTime() - f
            }

            function b(f, g, h, m) {
                function n() {
                    if (!vq(f.target)) {
                        g.has(d.yf) || g.set(d.yf, "" + a());
                        g.has(d.Rg) || g.set(d.Rg, "" + a());
                        var q = 0;
                        g.has(d.Af) && (q = Number(g.get(d.Af)));
                        q += 100;
                        g.set(d.Af, "" + q);
                        if (q >= h) {
                            var r = zy(f.target, "gtm.elementVisibility", [g.h]),
                                t = xq(f.target);
                            r["gtm.visibleRatio"] = Math.round(1E3 * t) / 10;
                            r["gtm.visibleTime"] = h;
                            r["gtm.visibleFirstTime"] = Number(g.get(d.Rg));
                            r["gtm.visibleLastTime"] =
                                Number(g.get(d.yf));
                            hz(r);
                            m()
                        }
                    }
                }
                if (!g.has(d.ke) && (0 == h && n(), !g.has(d.dd))) {
                    var p = U("self").setInterval(n, 100);
                    g.set(d.ke, p)
                }
            }

            function c(f) {
                f.has(d.ke) && (U("self").clearInterval(Number(f.get(d.ke))), f.remove(d.ke))
            }
            var d = {
                    ke: "PollingId",
                    Rg: "FirstOnScreen",
                    yf: "RecentOnScreen",
                    Af: "TotalVisibleTime",
                    dd: "HasFired"
                },
                e = function(f, g) {
                    this.element = f;
                    this.h = g
                };
            e.prototype.has = function(f) {
                return !!this.element.dataset["gtmVis" + f + this.h]
            };
            e.prototype.get = function(f) {
                return this.element.dataset["gtmVis" + f + this.h]
            };
            e.prototype.set = function(f, g) {
                this.element.dataset["gtmVis" + f + this.h] = g
            };
            e.prototype.remove = function(f) {
                delete this.element.dataset["gtmVis" + f + this.h]
            };
            (function(f) {
                Y.__evl = f;
                Y.__evl.m = "evl";
                Y.__evl.isVendorTemplate = !0;
                Y.__evl.priorityOverride = 0;
                Y.__evl.isInfrastructure = !1;
                Y.__evl.runInSiloedMode = !1
            })(function(f) {
                function g() {
                    var x = !1,
                        y = null;
                    if ("CSS" === m) {
                        try {
                            y = vh(n)
                        } catch (D) {}
                        x = !!y && v.length != y.length
                    } else if ("ID" === m) {
                        var A = C.getElementById(n);
                        A && (y = [A], x = 1 != v.length || v[0] !== A)
                    }
                    y || (y = [], x = 0 < v.length);
                    if (x) {
                        for (var B = 0; B < v.length; B++) {
                            var E = new e(v[B], t);
                            c(E)
                        }
                        v = [];
                        for (var F = 0; F < y.length; F++) v.push(y[F]);
                        0 <= w && Dq(w);
                        0 < v.length && (w = Cq(h, v, [r]))
                    }
                }

                function h(x) {
                    var y = new e(x.target, t);
                    x.intersectionRatio >= r ? y.has(d.dd) || b(x, y, q, "ONCE" === u ? function() {
                        for (var A = 0; A < v.length; A++) {
                            var B = new e(v[A], t);
                            B.set(d.dd, "1");
                            c(B)
                        }
                        Dq(w);
                        p && Oy(g)
                    } : function() {
                        y.set(d.dd, "1");
                        c(y)
                    }) : (c(y), "MANY_PER_ELEMENT" === u && y.has(d.dd) && (y.remove(d.dd), y.remove(d.Af)), y.remove(d.yf))
                }
                var m = f.vtp_selectorType,
                    n;
                "ID" === m ? n = String(f.vtp_elementId) :
                    "CSS" === m && (n = String(f.vtp_elementSelector));
                var p = !!f.vtp_useDomChangeListener,
                    q = f.vtp_useOnScreenDuration && Number(f.vtp_onScreenDuration) || 0,
                    r = (Number(f.vtp_onScreenRatio) || 50) / 100,
                    t = f.vtp_uniqueTriggerId,
                    u = f.vtp_firingFrequency,
                    v = [],
                    w = -1;
                g();
                p && Ny(g);
                G(f.vtp_gtmOnSuccess)
            })
        }();

    Y.securityGroups.gaawe = ["google"],
        function() {
            function a(f, g, h) {
                for (var m = 0; m < g.length; m++) f.hasOwnProperty(g[m]) && (f[g[m]] = h(f[g[m]]))
            }

            function b(f, g, h) {
                var m = {},
                    n = function(u, v) {
                        m[u] = m[u] || v
                    },
                    p = function(u, v, w) {
                        w = void 0 === w ? !1 : w;
                        c.push(6);
                        if (u) {
                            m.items = m.items || [];
                            for (var x = {}, y = 0; y < u.length; x = {
                                    Me: void 0
                                }, y++) x.Me = {}, l(u[y], function(B) {
                                return function(E, F) {
                                    w && "id" === E ? B.Me.promotion_id = F : w && "name" === E ? B.Me.promotion_name = F : B.Me[E] = F
                                }
                            }(x)), m.items.push(x.Me)
                        }
                        if (v)
                            for (var A in v) d.hasOwnProperty(A) ? n(d[A],
                                v[A]) : n(A, v[A])
                    },
                    q;
                "dataLayer" === f.vtp_getEcommerceDataFrom ? (q = f.vtp_gtmCachedValues.eventModel) || (q = f.vtp_gtmCachedValues.ecommerce) : (q = f.vtp_ecommerceMacroData, lb(q) && q.ecommerce && !q.items && (q = q.ecommerce));
                if (lb(q)) {
                    var r = !1,
                        t;
                    for (t in q) q.hasOwnProperty(t) && (r || (c.push(5), r = !0), "currencyCode" === t ? n("currency", q.currencyCode) : "impressions" === t && g === N.g.fb ? p(q.impressions, null) : "promoClick" === t && g === N.g.sb ? p(q.promoClick.promotions, q.promoClick.actionField, !0) : "promoView" === t && g === N.g.hb ? p(q.promoView.promotions,
                        q.promoView.actionField, !0) : e.hasOwnProperty(t) ? g === e[t] && p(q[t].products, q[t].actionField) : m[t] = q[t]);
                    nb(m, h)
                }
            }
            var c = [],
                d = {
                    id: "transaction_id",
                    revenue: "value",
                    list: "item_list_name"
                },
                e = {
                    click: "select_item",
                    detail: "view_item",
                    add: "add_to_cart",
                    remove: "remove_from_cart",
                    checkout: "begin_checkout",
                    checkout_option: "checkout_option",
                    purchase: "purchase",
                    refund: "refund"
                };
            (function(f) {
                Y.__gaawe = f;
                Y.__gaawe.m = "gaawe";
                Y.__gaawe.isVendorTemplate = !0;
                Y.__gaawe.priorityOverride = 0;
                Y.__gaawe.isInfrastructure = !1;
                Y.__gaawe.runInSiloedMode = !1
            })(function(f) {
                var g;
                g = f.vtp_migratedToV2 ? String(f.vtp_measurementIdOverride) : String(f.vtp_measurementIdOverride || f.vtp_measurementId);
                if (k(g) && 0 === g.indexOf("G-")) {
                    var h = String(f.vtp_eventName),
                        m = {};
                    c = [];
                    f.vtp_sendEcommerceData && (ci.hasOwnProperty(h) || "checkout_option" === h) && b(f, h, m);
                    var n = f.vtp_eventSettingsVariable;
                    if (n)
                        for (var p in n) n.hasOwnProperty(p) && (m[p] = n[p]);
                    if (f.vtp_eventSettingsTable) {
                        var q = GH(f.vtp_eventSettingsTable, "parameter", "parameterValue"),
                            r;
                        for (r in q) m[r] = q[r]
                    }
                    var t = GH(f.vtp_eventParameters,
                            "name", "value"),
                        u;
                    for (u in t) t.hasOwnProperty(u) && (m[u] = t[u]);
                    var v = f.vtp_userDataVariable;
                    v && (m[N.g.Ba] = v);
                    if (m.hasOwnProperty(N.g.Ya) || f.vtp_userProperties) {
                        var w = m[N.g.Ya] || {};
                        nb(GH(f.vtp_userProperties, "name", "value"), w);
                        m[N.g.Ya] = w
                    }
                    var x = {
                        originatingEntity: dv(1, f.vtp_gtmEntityIndex, f.vtp_gtmEntityName)
                    };
                    if (0 < c.length) {
                        var y = {};
                        x.eventMetadata = (y.event_usage = c, y)
                    }
                    a(m, di, function(B) {
                        return Oa(B)
                    });
                    a(m, fi, function(B) {
                        return Number(B)
                    });
                    var A = f.vtp_gtmEventId;
                    x.noGtmEvent = !0;
                    Uv(Rv(g, h, m), A, x);
                    G(f.vtp_gtmOnSuccess)
                } else G(f.vtp_gtmOnFailure)
            })
        }();


    Y.securityGroups.load_google_tags = ["google"],
        function() {
            function a(b, c, d) {
                return {
                    tagId: c,
                    firstPartyUrl: d
                }
            }(function(b) {
                Y.__load_google_tags = b;
                Y.__load_google_tags.m = "load_google_tags";
                Y.__load_google_tags.isVendorTemplate = !0;
                Y.__load_google_tags.priorityOverride = 0;
                Y.__load_google_tags.isInfrastructure = !1;
                Y.__load_google_tags.runInSiloedMode = !1
            })(function(b) {
                var c = b.vtp_allowedTagIds || "specific",
                    d = b.vtp_allowFirstPartyUrls || !1,
                    e = b.vtp_allowedFirstPartyUrls || "specific",
                    f = b.vtp_urls || [],
                    g = b.vtp_tagIds || [],
                    h = b.vtp_createPermissionError;
                return {
                    assert: function(m, n, p) {
                        (function(q) {
                            if (!k(q)) throw h(m, {}, "Tag ID must be a string.");
                            if ("any" !== c && ("specific" !== c || -1 === g.indexOf(q))) throw h(m, {}, "Prohibited Tag ID: " + q + ".");
                        })(n);
                        (function(q) {
                            if (void 0 !== q) {
                                if (!k(q)) throw h(m, {}, "First party URL must be a string.");
                                if (d) {
                                    if ("any" === e) return;
                                    if ("specific" === e) try {
                                        if (Dg(ql(q), f)) return
                                    } catch (r) {
                                        throw h(m, {}, "Invalid first party URL filter.");
                                    }
                                }
                                throw h(m, {}, "Prohibited first party URL: " + q);
                            }
                        })(p)
                    },
                    K: a
                }
            })
        }();

    Y.securityGroups.tg = ["google"],
        function() {
            function a(g) {
                f.push(g);
                1 < f.length || G(function() {
                    var h = f.join(",");
                    f = [];
                    hz({
                        event: "gtm.triggerGroup",
                        "gtm.triggers": h
                    })
                })
            }

            function b(g, h) {
                var m = c[h],
                    n = m.indexOf(g); - 1 !== n && (m.splice(n, 1), m.length || a(h))
            }
            var c = {},
                d = {},
                e = [],
                f = [];
            (function(g) {
                Y.__tg = g;
                Y.__tg.m = "tg";
                Y.__tg.isVendorTemplate = !0;
                Y.__tg.priorityOverride = 0;
                Y.__tg.isInfrastructure = !1;
                Y.__tg.runInSiloedMode = !1
            })(function(g) {
                G(g.vtp_gtmOnSuccess);
                var h = g.vtp_uniqueTriggerId,
                    m = g.vtp_triggerIds,
                    n = g.vtp_firingId;
                if (g.vtp_isListeningTag) {
                    var p = d[n];
                    p ? b(n, p) : e.push(n)
                } else {
                    c[h] = m;
                    for (var q = 0, r; r = m[q]; q++) d[r] = h;
                    for (var t = 0; t < e.length; t++) b(e[t], h)
                }
            })
        }();
    Y.securityGroups.tl = ["google"],
        function() {
            function a(b) {
                return function() {
                    if (b.zc && b.Bc >= b.zc) b.xc && U("self").clearInterval(b.xc);
                    else {
                        b.Bc++;
                        var c = cz().getTime();
                        hz({
                            event: b.eventName,
                            "gtm.timerId": b.xc,
                            "gtm.timerEventNumber": b.Bc,
                            "gtm.timerInterval": b.interval,
                            "gtm.timerLimit": b.zc,
                            "gtm.timerStartTime": b.Se,
                            "gtm.timerCurrentTime": c,
                            "gtm.timerElapsedTime": c - b.Se,
                            "gtm.triggers": b.Xh
                        })
                    }
                }
            }(function(b) {
                Y.__tl = b;
                Y.__tl.m = "tl";
                Y.__tl.isVendorTemplate = !0;
                Y.__tl.priorityOverride = 0;
                Y.__tl.isInfrastructure = !1;
                Y.__tl.runInSiloedMode = !1
            })(function(b) {
                G(b.vtp_gtmOnSuccess);
                if (!isNaN(b.vtp_interval)) {
                    var c = {
                        eventName: b.vtp_eventName,
                        Bc: 0,
                        interval: Number(b.vtp_interval),
                        zc: isNaN(b.vtp_limit) ? 0 : Number(b.vtp_limit),
                        Xh: String(b.vtp_uniqueTriggerId || "0"),
                        Se: cz().getTime()
                    };
                    c.xc = U("self").setInterval(a(c), 0 > Number(b.vtp_interval) ? 0 : Number(b.vtp_interval))
                }
            })
        }();

    Y.securityGroups.ua = ["google"],
        function() {
            function a(m, n) {
                for (var p in m)
                    if (!h[p] && m.hasOwnProperty(p)) {
                        var q = g[p] ? Oa(m[p]) : m[p];
                        "anonymizeIp" != p || q || (q = void 0);
                        n[p] = q
                    }
            }

            function b(m) {
                var n = {};
                m.vtp_gaSettings && nb(GH(m.vtp_gaSettings.vtp_fieldsToSet, "fieldName", "value"), n);
                nb(GH(m.vtp_fieldsToSet, "fieldName", "value"), n);
                Oa(n.urlPassthrough) && (n._useUp = !0);
                m.vtp_transportUrl && (n._x_19 = m.vtp_transportUrl);
                return n
            }

            function c(m, n) {
                return void 0 === n ? n : m(n)
            }

            function d(m, n, p) {}

            function e(m, n) {
                if (!(f || R(87) && (wi || yi) && n._x_19 && !m.vtp_useDebugVersion && !m.vtp_useInternalVersion)) {
                    var p = m.vtp_useDebugVersion ? "u/analytics_debug.js" : "analytics.js";
                    m.vtp_useInternalVersion && !m.vtp_useDebugVersion && (p = "internal/" + p);
                    f = !0;
                    var q = m.vtp_gtmOnFailure,
                        r = wi || yi ? mq(n._x_19, "/analytics.js") : void 0,
                        t = Up("https:", "http:", "//www.google-analytics.com/" + p, n && !!n.forceSSL);
                    bz("analytics.js" === p && r ? r : t, function() {
                            var u = nv();
                            u && u.loaded || q();
                        },
                        q)
                }
            }
            var f, g = {
                    allowAnchor: !0,
                    allowLinker: !0,
                    alwaysSendReferrer: !0,
                    anonymizeIp: !0,
                    cookieUpdate: !0,
                    exFatal: !0,
                    forceSSL: !0,
                    javaEnabled: !0,
                    legacyHistoryImport: !0,
                    nonInteraction: !0,
                    useAmpClientId: !0,
                    useBeacon: !0,
                    storeGac: !0,
                    allowAdFeatures: !0,
                    allowAdPersonalizationSignals: !0,
                    _cd2l: !0
                },
                h = {
                    urlPassthrough: !0
                };
            (function(m) {
                Y.__ua = m;
                Y.__ua.m = "ua";
                Y.__ua.isVendorTemplate = !0;
                Y.__ua.priorityOverride = 0;
                Y.__ua.isInfrastructure = !1;
                Y.__ua.runInSiloedMode = !1
            })(function(m) {
                function n() {
                    if (m.vtp_doubleClick || "DISPLAY_FEATURES" == m.vtp_advertisingFeaturesType) v.displayfeatures = !0
                }
                var p = {},
                    q = {},
                    r = {};
                if (m.vtp_gaSettings) {
                    var t = m.vtp_gaSettings;
                    nb(GH(t.vtp_contentGroup, "index", "group"), p);
                    nb(GH(t.vtp_dimension, "index", "dimension"), q);
                    nb(GH(t.vtp_metric, "index", "metric"), r);
                    var u = nb(t);
                    u.vtp_fieldsToSet = void 0;
                    u.vtp_contentGroup = void 0;
                    u.vtp_dimension = void 0;
                    u.vtp_metric = void 0;
                    m = nb(m, u)
                }
                nb(GH(m.vtp_contentGroup, "index", "group"), p);
                nb(GH(m.vtp_dimension, "index",
                    "dimension"), q);
                nb(GH(m.vtp_metric, "index", "metric"), r);
                var v = b(m),
                    w = String(m.vtp_trackingId || ""),
                    x = "",
                    y = "",
                    A = "";
                m.vtp_setTrackerName && "string" == typeof m.vtp_trackerName ? "" !== m.vtp_trackerName && (A = m.vtp_trackerName, y = A + ".") : (A = "gtm" + Hi(), y = A + ".");
                var B = function(ia, ea) {
                    for (var Da in ea) ea.hasOwnProperty(Da) && (v[ia + Da] = ea[Da])
                };
                B("contentGroup", p);
                B("dimension", q);
                B("metric", r);
                m.vtp_enableEcommerce && (x = m.vtp_gtmCachedValues.event, v.gtmEcommerceData = d(m, v, x));
                if ("TRACK_EVENT" === m.vtp_trackType) x = "track_event",
                    n(), v.eventCategory = String(m.vtp_eventCategory), v.eventAction = String(m.vtp_eventAction), v.eventLabel = c(String, m.vtp_eventLabel), v.value = c(Na, m.vtp_eventValue);
                else if ("TRACK_PAGEVIEW" == m.vtp_trackType) {
                    if (x = N.g.ic, n(), "DISPLAY_FEATURES_WITH_REMARKETING_LISTS" == m.vtp_advertisingFeaturesType && (v.remarketingLists = !0), m.vtp_autoLinkDomains) {
                        var E = {};
                        E[N.g.W] = m.vtp_autoLinkDomains;
                        E.use_anchor = m.vtp_useHashAutoLink;
                        E[N.g.zb] = m.vtp_decorateFormsAutoLink;
                        v[N.g.Ma] = E
                    }
                } else "TRACK_SOCIAL" === m.vtp_trackType ?
                    (x = "track_social", v.socialNetwork = String(m.vtp_socialNetwork), v.socialAction = String(m.vtp_socialAction), v.socialTarget = String(m.vtp_socialActionTarget)) : "TRACK_TIMING" == m.vtp_trackType && (x = "timing_complete", v.eventCategory = String(m.vtp_timingCategory), v.timingVar = String(m.vtp_timingVar), v.value = Na(m.vtp_timingValue), v.eventLabel = c(String, m.vtp_timingLabel));
                m.vtp_enableRecaptcha && (v.enableRecaptcha = !0);
                m.vtp_enableLinkId && (v.enableLinkId = !0);
                var F = {};
                a(v, F);
                v.name || (F.gtmTrackerName = A);
                F.gaFunctionName =
                    m.vtp_functionName;
                void 0 !== m.vtp_nonInteraction && (F.nonInteraction = m.vtp_nonInteraction);
                var D = Ql(Pl(Ol(Nl(Gl(new Fl(m.vtp_gtmEventId, m.vtp_gtmPriorityId), F), m.vtp_gtmOnSuccess), m.vtp_gtmOnFailure), !0));
                R(87) && m.vtp_useDebugVersion && m.vtp_useInternalVersion && (D.eventMetadata.suppress_script_load = !0);
                ID(w, x, Date.now(), D);
                var M = pv(m.vtp_functionName);
                if (Fa(M)) {
                    var O = function(ia) {
                        var ea = [].slice.call(arguments, 0);
                        ea[0] = y + ea[0];
                        M.apply(window, ea)
                    };
                    if ("TRACK_TRANSACTION" == m.vtp_trackType) {} else if ("DECORATE_LINK" ==
                        m.vtp_trackType) {} else if ("DECORATE_FORM" == m.vtp_trackType) {} else if ("TRACK_DATA" == m.vtp_trackType) {}
                    e(m, v)
                } else G(m.vtp_gtmOnFailure)
            })
        }();

    Y.securityGroups.opt = ["google"],
        function() {
            var a = function() {},
                b = function(e) {
                    var f = U(ni.fa),
                        g = f && f.hide;
                    g && (g.end || !0 === g["GTM-V9L7"]) && (g[e] = !0)
                },
                c = function(e, f) {
                    var g = (f ? "https://www.googleoptimize.com/optimize.js" : "https://www.google-analytics.com/gtm/optimize.js") + "?id=" + encodeURIComponent(e),
                        h = ni.fa;
                    "dataLayer" !== h && (g += "&l=" + h);
                    return g
                },
                d = function(e) {
                    var f;
                    f = e.vtp_functionName ? e.vtp_functionName : e.vtp_gaSettings ? e.vtp_gaSettings.vtp_functionName : void 0;
                    var g = pv(f);
                    if (!Fa(g)) return a;
                    var h = e.vtp_optimizeContainerId;
                    g(mv() + ".require", h);
                    return function() {
                        g("provide", h, a)
                    }
                };
            (function(e) {
                Y.__opt = e;
                Y.__opt.m = "opt";
                Y.__opt.isVendorTemplate = !0;
                Y.__opt.priorityOverride = 10;
                Y.__opt.isInfrastructure = !1;
                Y.__opt.runInSiloedMode = !1
            })(function(e) {
                if (R(63)) {
                    var f = U(ni.fa),
                        g = f && f.hide;
                    if (g && g.end) try {
                        g.end(), g.end = void 0
                    } catch (p) {}
                    e.vtp_gtmOnSuccess()
                } else {
                    var h = e.vtp_optimizeContainerId;
                    b(h);
                    var m = d(e),
                        n = function() {
                            m();
                            e.vtp_gtmOnFailure()
                        };
                    bz(c(h, e.vtp_useOptimizeDomain), function() {
                        oi[h] ? e.vtp_gtmOnSuccess() : n()
                    }, n, {
                        gtm: "GTM-V9L7"
                    })
                }
            })
        }();



    Y.securityGroups.gas = ["google"],
        function() {
            (function(a) {
                Y.__gas = a;
                Y.__gas.m = "gas";
                Y.__gas.isVendorTemplate = !0;
                Y.__gas.priorityOverride = 0;
                Y.__gas.isInfrastructure = !1;
                Y.__gas.runInSiloedMode = !1
            })(function(a) {
                var b = nb(a),
                    c = b;
                c[Me.ka] = null;
                c[Me.Tg] = null;
                var d = b = c;
                d.vtp_fieldsToSet = d.vtp_fieldsToSet || [];
                var e = d.vtp_cookieDomain;
                void 0 !== e && (d.vtp_fieldsToSet.push({
                    fieldName: "cookieDomain",
                    value: e
                }), delete d.vtp_cookieDomain);
                return b
            })
        }();

    Y.securityGroups.remm = ["google"],
        function() {
            (function(a) {
                Y.__remm = a;
                Y.__remm.m = "remm";
                Y.__remm.isVendorTemplate = !0;
                Y.__remm.priorityOverride = 0;
                Y.__remm.isInfrastructure = !1;
                Y.__remm.runInSiloedMode = !1
            })(function(a) {
                for (var b = a.vtp_input, c = a.vtp_map || [], d = a.vtp_fullMatch, e = a.vtp_ignoreCase ? "gi" : "g", f = a.vtp_defaultValue, g = 0; g < c.length; g++) {
                    var h = c[g].key || "";
                    d && (h = "^" + h + "$");
                    var m = new RegExp(h, e);
                    if (m.test(b)) {
                        var n = c[g].value;
                        a.vtp_replaceAfterMatch && (n = String(b).replace(m, n));
                        f = n;
                        break
                    }
                }
                return f
            })
        }();

    Y.securityGroups.logging = ["google"],
        function() {
            function a() {
                return {}
            }(function(b) {
                Y.__logging = b;
                Y.__logging.m = "logging";
                Y.__logging.isVendorTemplate = !0;
                Y.__logging.priorityOverride = 0;
                Y.__logging.isInfrastructure = !1;
                Y.__logging.runInSiloedMode = !1
            })(function(b) {
                var c = b.vtp_environments || "debug",
                    d = b.vtp_createPermissionError;
                return {
                    assert: function(e) {
                        var f;
                        if (f = "all" !== c && !0) {
                            var g = !1;
                            f = !g
                        }
                        if (f) throw d(e, {}, "Logging is not enabled in all environments");
                    },
                    K: a
                }
            })
        }();

    Y.securityGroups.configure_google_tags = ["google"],
        function() {
            function a(b, c, d) {
                return {
                    tagId: c,
                    configuration: d
                }
            }(function(b) {
                Y.__configure_google_tags = b;
                Y.__configure_google_tags.m = "configure_google_tags";
                Y.__configure_google_tags.isVendorTemplate = !0;
                Y.__configure_google_tags.priorityOverride = 0;
                Y.__configure_google_tags.isInfrastructure = !1;
                Y.__configure_google_tags.runInSiloedMode = !1
            })(function(b) {
                var c = b.vtp_allowedTagIds || "specific",
                    d = b.vtp_tagIds || [],
                    e = b.vtp_createPermissionError;
                return {
                    assert: function(f,
                        g) {
                        if (!k(g)) throw e(f, {}, "Tag ID must be a string.");
                        if ("any" !== c && ("specific" !== c || -1 === d.indexOf(g))) throw e(f, {}, "Prohibited configuration for Tag ID: " + g + ".");
                    },
                    K: a
                }
            })
        }();


    Y.securityGroups.html = ["customScripts"],
        function() {
            function a(d, e, f, g) {
                return function() {
                    try {
                        if (0 < e.length) {
                            var h = e.shift(),
                                m = a(d, e, f, g);
                            if ("SCRIPT" == String(h.nodeName).toUpperCase() && "text/gtmscript" == h.type) {
                                var n = C.createElement("script");
                                n.async = !1;
                                n.type = "text/javascript";
                                n.id = h.id;
                                n.text = h.text || h.textContent || h.innerHTML || "";
                                h.charset && (n.charset = h.charset);
                                var p = h.getAttribute("data-gtmsrc");
                                p && (n.src = p, Gc(n, m));
                                d.insertBefore(n, null);
                                p || m()
                            } else if (h.innerHTML && 0 <= h.innerHTML.toLowerCase().indexOf("<script")) {
                                for (var q = []; h.firstChild;) q.push(h.removeChild(h.firstChild));
                                d.insertBefore(h, null);
                                a(h, q, m, g)()
                            } else d.insertBefore(h, null), m()
                        } else f()
                    } catch (r) {
                        G(g)
                    }
                }
            }

            function b(d) {
                if (C.body) {
                    var e = d.vtp_gtmOnFailure,
                        f = xy(d.vtp_html, d.vtp_gtmOnSuccess, e),
                        g = f.Fj,
                        h = f.onSuccess;
                    if (d.vtp_useIframe) {} else d.vtp_supportDocumentWrite ? c(g, h, e) : a(C.body, Sc(g), h, e)()
                } else az(function() {
                    b(d)
                }, 200)
            }
            var c = function(d, e, f) {
                bv(function() {
                    var g = google_tag_manager_external.postscribe.getPostscribe(),
                        h = {
                            done: e
                        },
                        m = C.createElement("div");
                    m.style.display = "none";
                    m.style.visibility = "hidden";
                    C.body.appendChild(m);
                    try {
                        g(m, d, h)
                    } catch (n) {
                        G(f)
                    }
                })
            };
            Y.__html = b;
            Y.__html.m =
                "html";
            Y.__html.isVendorTemplate = !0;
            Y.__html.priorityOverride = 0;
            Y.__html.isInfrastructure = !1;
            Y.__html.runInSiloedMode = !1
        }();

    Y.securityGroups.dbg = ["google"],
        function() {
            (function(a) {
                Y.__dbg = a;
                Y.__dbg.m = "dbg";
                Y.__dbg.isVendorTemplate = !0;
                Y.__dbg.priorityOverride = 0;
                Y.__dbg.isInfrastructure = !1;
                Y.__dbg.runInSiloedMode = !1
            })(function() {
                return !1
            })
        }();


    var aJ = {};
    aJ.onHtmlSuccess = yy(!0), aJ.onHtmlFailure = yy(!1);
    aJ.dataLayer = Pi;
    aJ.callback = function(a) {
        Fi.hasOwnProperty(a) && Fa(Fi[a]) && Fi[a]();
        delete Fi[a]
    };
    aJ.bootstrap = 0;
    aJ._spx = !1;

    function bJ() {
        oi[tk()] = oi[tk()] || aJ;
        zk();
        Ek() || l(Fk(), function(d, e) {
            Wu(d, e.transportUrl, e.context);
            L(92)
        });
        Wa(Gi, Y.securityGroups);
        var a = vk(Ck()),
            b, c = null == a ? void 0 : null == (b = a.context) ? void 0 : b.source;
        2 !== c && 4 !== c && 3 !== c || L(142);
        uy(), rf({
            km: function(d) {
                return d === sy
            },
            zl: function(d) {
                return new vy(d)
            },
            lm: function(d) {
                for (var e = !1, f = !1, g = 2; g < d.length; g++) e = e || 8 === d[g], f = f || 16 === d[g];
                return e && f
            },
            Pm: function(d) {
                var e;
                if (d === sy) e = d;
                else {
                    var f = Hi();
                    ty[f] = d;
                    e = 'google_tag_manager["rm"]["' +
                        uk() + '"](' + f + ")"
                }
                return e
            }
        });
        tf = Jf
    }
    (function(a) {
        function b() {
            m = C.documentElement.getAttribute("data-tag-assistant-present");
            Vx(m) && (h = g.Mk)
        }
        if (!z["__TAGGY_INSTALLED"]) {
            var c = !1;
            if (C.referrer) {
                var d = ql(C.referrer);
                c = "cct.google" === kl(d, "host")
            }
            if (!c) {
                var e = zn("googTaggyReferrer");
                c = e.length && e[0].length
            }
            c && (z["__TAGGY_INSTALLED"] = !0, Kc("https://cct.google/taggy/agent.js"))
        }
        if (Ai) a();
        else {
            var f = function(u) {
                    var v = "GTM",
                        w = "GTM";
                    ui ? (v = "OGT", w = "GTAG") : Ai && (w = v = "OPT");
                    var x = z["google.tagmanager.debugui2.queue"];
                    x || (x = [],
                        z["google.tagmanager.debugui2.queue"] = x, Kc("https://" + ni.wd + "/debug/bootstrap?id=" + Rf.ctid + "&src=" + w + "&cond=" + u + "&gtm=" + un()));
                    var y = {
                        messageType: "CONTAINER_STARTING",
                        data: {
                            scriptSource: Ec,
                            containerProduct: v,
                            debug: !1,
                            id: Rf.ctid,
                            targetRef: {
                                ctid: Rf.ctid,
                                isDestination: lk.ie
                            },
                            aliases: nk(),
                            destinations: qk()
                        }
                    };
                    y.data.resume = function() {
                        a()
                    };
                    ni.lk && (y.data.initialPublish = !0);
                    x.push(y)
                },
                g = {
                    Bn: 1,
                    Nk: 2,
                    Zk: 3,
                    nk: 4,
                    Mk: 5
                },
                h = void 0,
                m = void 0,
                n = ll(z.location, "query", !1, void 0, "gtm_debug");
            Vx(n) && (h = g.Nk);
            if (!h && C.referrer) {
                var p = ql(C.referrer);
                "tagassistant.google.com" === kl(p, "host") && (h = g.Zk)
            }
            if (!h) {
                var q = zn("__TAG_ASSISTANT");
                q.length && q[0].length && (h = g.nk)
            }
            h || b();
            if (!h && Wx(m)) {
                var r = function() {
                        if (t) return !0;
                        t = !0;
                        b();
                        h && Ec ? f(h) : a()
                    },
                    t = !1;
                Oc(C, "TADebugSignal", function() {
                    r()
                }, !1);
                z.setTimeout(function() {
                    r()
                }, 200)
            } else h && Ec ? f(h) : a()
        }
    })(function() {
        try {
            xk();
            if (R(16)) {}
            rj().s();
            Rm();
            (R(93) || R(94) || R(95)) &&
            ak();
            var a = uk();
            if (ik().canonical[a]) {
                var b = oi.zones;
                b && b.unregisterChild(pk());
                var c = Fu(uk());
                c._event && (c._event.external = []);
                c._entity && (c._entity.external = []);
            } else {
                cs();
                Ji.h = "71847096";
                Ji.s = Oa("");
                Ji.C = "";
                Tu();
                for (var d = data.resource || {}, e = d.macros || [], f = 0; f < e.length; f++) jf.push(e[f]);
                for (var g = d.tags || [], h = 0; h < g.length; h++) mf.push(g[h]);
                for (var m = d.predicates || [], n = 0; n < m.length; n++) lf.push(m[n]);
                for (var p = d.rules || [], q = 0; q < p.length; q++) {
                    for (var r = p[q], t = {}, u = 0; u < r.length; u++) {
                        var v = r[u][0];
                        t[v] = Array.prototype.slice.call(r[u], 1);
                        "if" !== v && "unless" !== v || sf(t[v])
                    }
                    kf.push(t)
                } of = Y;
                pf = Lz;
                Lf = new Uf;
                var w = data.sandboxed_scripts,
                    x = data.security_groups;
                a: {
                    var y = data.runtime || [],
                        A = data.runtime_lines;Uz = new Ie;BH();
                    hf = Tz();
                    var B = Uz,
                        E = AH(),
                        F = new ed("require", E);F.Eb();B.h.h.set("require", F);
                    for (var D = [], M = 0; M < y.length; M++) {
                        var O = y[M];
                        if (!Ha(O) || 3 > O.length) {
                            if (0 === O.length) continue;
                            break a
                        }
                        A && A[M] && A[M].length && Cf(O, A[M]);
                        try {
                            Uz.execute(O), R(29) && Ok && 50 === O[0] && D.push(O[1])
                        } catch (eh) {}
                    }
                    R(29) && (uf = D)
                }
                if (void 0 !== w)
                    for (var P = ["sandboxedScripts"], T = 0; T < w.length; T++) {
                        var Z = w[T].replace(/^_*/, "");
                        Gi[Z] = P
                    }
                CH(x);
                bJ();
                if (R(24) && !Ai) {
                    for (var W = cj["7"], X = W ? W.split("|") : [], la = {}, ia = 0; ia < X.length; ia++) la[X[ia]] = !0;
                    for (var ea =
                            0; ea < Oj.length; ea++) {
                        var Da = Oj[ea],
                            pa = Da,
                            Ea = la[Da] ? "granted" : "denied";
                        yj().implicit(pa, Ea)
                    }
                }
                Ux();
                Xu = !1;
                Yu = 0;
                if ("interactive" == C.readyState && !C.createEventObject || "complete" == C.readyState) $u();
                else {
                    Oc(C, "DOMContentLoaded", $u);
                    Oc(C, "readystatechange", $u);
                    if (C.createEventObject && C.documentElement.doScroll) {
                        var Ra = !0;
                        try {
                            Ra = !z.frameElement
                        } catch (eh) {}
                        Ra && av()
                    }
                    Oc(z, "load", $u)
                }
                ix = !1;
                "complete" === C.readyState ? kx() : Oc(z, "load", kx);
                Ok && (Jk(al), z.setInterval($k, 864E5));
                Jk(Nz);
                Jk(Av);
                Jk(ot);
                Jk(Tl);
                Jk(Hv);
                Jk(fl);
                Jk(Rr);
                Jk(dl);
                R(29) && Jk(Dv);
                R(102) && (Jk(Oz), Jk(Qz));
                google_tag_manager_external.postscribe.installPostscribe();
                qy();
                bj(1);
                Fw();
                Ei = Ta();
                aJ.bootstrap = Ei;
                if (R(16)) {}
            }
        } catch (eh) {
            if (bj(4), Ok) {
                var Ge = Vk(!0, !0);
                Nc(Ge)
            }
        }
    });

})()