function _createForOfIteratorHelper(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=_unsupportedIterableToArray(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var o=0,a=function(){};return{s:a,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,r=!0,c=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return r=t.done,t},e:function(t){c=!0,i=t},f:function(){try{r||null==n.return||n.return()}finally{if(c)throw i}}}}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(t,e):void 0}}function _arrayLikeToArray(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{C7Sl:function(t,e,n){"use strict";n.r(e),n.d(e,"CorporationsModule",(function(){return pt}));var o,a,i,r,c=n("ofXK"),s=n("IVc4"),l=n("tyNb"),f=n("fXoL"),b=n("OcQ2"),p=n("qO2F"),d=((o=function(){function t(e){_classCallCheck(this,t),this.router=e}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"onBack",value:function(){history.back()}},{key:"onExit",value:function(){this.router.navigateByUrl("/ship/center")}}]),t}()).\u0275fac=function(t){return new(t||o)(f.Mb(l.b))},o.\u0275cmp=f.Gb({type:o,selectors:[["ng-component"]],decls:8,vars:0,consts:[[1,"content"],[1,"navigation"],[3,"click"]],template:function(t,e){1&t&&(f.Sb(0,"ed-window"),f.Sb(1,"div",0),f.Nb(2,"router-outlet"),f.Rb(),f.Sb(3,"div",1),f.Sb(4,"ed-button",2),f.Zb("click",(function(){return e.onBack()})),f.vc(5,"Back"),f.Rb(),f.Sb(6,"ed-button",2),f.Zb("click",(function(){return e.onExit()})),f.vc(7,"Exit"),f.Rb(),f.Rb(),f.Rb())},directives:[b.a,l.e,p.a],styles:["[_nghost-%COMP%]{height:100%;z-index:100}.content[_ngcontent-%COMP%], [_nghost-%COMP%]{display:flex;flex:1 1 auto;flex-direction:column}.content[_ngcontent-%COMP%]{overflow:hidden}.navigation[_ngcontent-%COMP%]{display:flex;flex-direction:row;margin-top:8px;padding-top:8px;border-top:1px solid rgba(187,44,0,.5)}.navigation[_ngcontent-%COMP%]   ed-button[_ngcontent-%COMP%]{width:160px;margin-right:16px;text-align:center}"]}),o),u=n("2Vo4"),g=function t(){_classCallCheck(this,t),this.contacts=[],this.goals=[],this.benefits=[],this.assignments=[]},m=n("tk/3"),h='[{"corporationID":2,"name":"Caine-Massey","logo":"logo11.png","affiliated":false,"contacts":0,"goals":0,"assignments":0,"benefits":0,"codex":0},{"corporationID":101,"name":"Canonn","logo":"logo10.png","affiliated":false,"contacts":0,"goals":0,"assignments":0,"benefits":0,"codex":0},{"corporationID":102,"name":"Fuel rats","logo":"logo8.png","affiliated":false,"contacts":0,"goals":0,"assignments":0,"benefits":0,"codex":0},{"corporationID":103,"name":"Hutton orbital truckers","logo":"logo9.png","affiliated":false,"contacts":0,"goals":0,"assignments":0,"benefits":0,"codex":0},{"corporationID":3,"name":"Mastapolos Mining","logo":"logo4.png","affiliated":false,"contacts":0,"goals":0,"assignments":0,"benefits":0,"codex":0},{"corporationID":4,"name":"Neomedical Industries","logo":"logo15.png","affiliated":false,"contacts":0,"goals":0,"assignments":0,"benefits":0,"codex":0},{"corporationID":5,"name":"Rockforth Corporation","logo":"logo12.png","affiliated":false,"contacts":0,"goals":0,"assignments":0,"benefits":0,"codex":0},{"corporationID":6,"name":"Sirius Corporation","logo":"logo6.png","affiliated":false,"contacts":0,"goals":0,"assignments":0,"benefits":0,"codex":0},{"corporationID":1,"name":"The Achilles Corporation","logo":"logo1.png","affiliated":false,"contacts":0,"goals":0,"assignments":0,"benefits":0,"codex":0},{"corporationID":7,"name":"Universal Cartographics","logo":"logo7.png","affiliated":false,"contacts":0,"goals":0,"assignments":0,"benefits":0,"codex":0},{"corporationID":8,"name":"Vandermeer Corporation","logo":"logo14.png","affiliated":false,"contacts":0,"goals":0,"assignments":0,"benefits":0,"codex":0},{"corporationID":9,"name":"WorldCraft","logo":"logo13.png","affiliated":false,"contacts":0,"goals":0,"assignments":0,"benefits":0,"codex":0}]',v=((a=function(){function t(e){_classCallCheck(this,t),this.httpClient=e}return _createClass(t,[{key:"getCorporations",value:function(){return new u.a(JSON.parse(h))}},{key:"getCorporation",value:function(t){var e,n=_createForOfIteratorHelper(JSON.parse(h));try{for(n.s();!(e=n.n()).done;){var o=e.value;if(o.corporationID==t){var a=new g;return a.corporationID=o.corporationID,a.name=o.name,a.logo=o.logo,new u.a(a)}}}catch(i){n.e(i)}finally{n.f()}}}]),t}()).\u0275fac=function(t){return new(t||a)(f.Vb(m.b))},a.\u0275prov=f.Ib({token:a,factory:a.\u0275fac,providedIn:"root"}),a),x=n("EY6u"),C=["*"],y=((i=function(){function t(){_classCallCheck(this,t),this.flexBasis="auto",this.flexGrow=1,this.flexShrink=1}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"size",get:function(){return this.sizeValue},set:function(t){this.sizeValue=t,t?(this.flexBasis=this.sizeValue,this.flexGrow=void 0,this.flexShrink=void 0):(this.flexBasis="auto",this.flexGrow=1,this.flexShrink=1)}}]),t}()).\u0275fac=function(t){return new(t||i)},i.\u0275cmp=f.Gb({type:i,selectors:[["ed-frame"]],hostVars:6,hostBindings:function(t,e){2&t&&f.sc("flex-basis",e.flexBasis)("flex-grow",e.flexGrow)("flex-shrink",e.flexShrink)},inputs:{size:"size"},ngContentSelectors:C,decls:1,vars:0,template:function(t,e){1&t&&(f.gc(),f.fc(0))},styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;border:1px solid rgba(187,44,0,.5);padding:8px;overflow:hidden;-webkit-animation-name:flicker;animation-name:flicker;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}[_nghost-%COMP%]:hover{background:radial-gradient(circle at top,rgba(255,60,0,.15),transparent 50%)}"]}),i),S=n("DE09"),_=["*"],w=((r=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||r)},r.\u0275cmp=f.Gb({type:r,selectors:[["ed-name-value"]],inputs:{name:"name"},ngContentSelectors:_,decls:4,vars:1,consts:[[1,"name"],[1,"value"]],template:function(t,e){1&t&&(f.gc(),f.Sb(0,"div",0),f.vc(1),f.Rb(),f.Sb(2,"div",1),f.fc(3),f.Rb()),2&t&&(f.Bb(1),f.wc(e.name))},styles:["[_nghost-%COMP%]{flex:1 1 auto;flex-direction:row}.name[_ngcontent-%COMP%], [_nghost-%COMP%]{display:flex}.name[_ngcontent-%COMP%]{flex:1 1 auto}.value[_ngcontent-%COMP%]{margin-right:8px}"]}),r);function k(t,e){if(1&t&&f.Nb(0,"img",8),2&t){var n=f.cc().$implicit;f.hc("src","assets/"+n.logo,f.pc)}}function O(t,e){if(1&t&&f.vc(0),2&t){var n=f.cc().$implicit;f.xc(" ",n.name," ")}}function R(t,e){1&t&&(f.Sb(0,"div",9),f.vc(1," Not affiliated "),f.Rb())}function I(t,e){if(1&t&&(f.Sb(0,"div",10),f.vc(1,"Details"),f.Rb(),f.Sb(2,"div",11),f.Sb(3,"ed-name-value",12),f.vc(4),f.Rb(),f.Sb(5,"ed-name-value",13),f.vc(6),f.Rb(),f.Sb(7,"ed-name-value",14),f.vc(8),f.Rb(),f.Sb(9,"ed-name-value",15),f.vc(10),f.Rb(),f.Sb(11,"ed-name-value",16),f.vc(12),f.Rb(),f.Rb()),2&t){var n=f.cc().$implicit;f.Bb(4),f.wc(n.contacts),f.Bb(2),f.wc(n.goals),f.Bb(2),f.wc(n.assignments),f.Bb(2),f.wc(n.benefits),f.Bb(2),f.wc(n.codex)}}function M(t,e){if(1&t&&(f.Sb(0,"div",2),f.Sb(1,"div",3),f.tc(2,k,1,1,"img",4),f.tc(3,O,1,1,"ng-template",null,5,f.uc),f.Rb(),f.tc(5,R,2,0,"div",6),f.tc(6,I,13,5,"ng-template",null,7,f.uc),f.Rb()),2&t){var n=e.$implicit,o=f.mc(4),a=f.mc(7);f.Bb(2),f.hc("ngIf",n.logo)("ngIfElse",o),f.Bb(3),f.hc("ngIf",!n.affiliated)("ngIfElse",a)}}var P,B,N=((P=function(){function t(e,n,o){_classCallCheck(this,t),this.router=e,this.route=n,this.corporationService=o,this.corporations=[]}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.corporationService.getCorporations().subscribe((function(e){t.corporations=e}))}},{key:"onSelectedChange",value:function(t){this.router.navigate([t.corporationID],{relativeTo:this.route})}}]),t}()).\u0275fac=function(t){return new(t||P)(f.Mb(l.b),f.Mb(l.a),f.Mb(v))},P.\u0275cmp=f.Gb({type:P,selectors:[["ng-component"]],decls:4,vars:1,consts:[["icon","corporation","name","Corporations","description","The corporations you are aware of"],["blockWidth","256px","blockHeight","272px","spacing","16px",3,"data","selectedChange"],[1,"corporationblock"],[1,"logo"],["height","100%",3,"src",4,"ngIf","ngIfElse"],["corporationName",""],["class","not-affiliated",4,"ngIf","ngIfElse"],["affiliatedTemplate",""],["height","100%",3,"src"],[1,"not-affiliated"],[1,"header"],[1,"stats"],["name","Contacts"],["name","Goals"],["name","Assignments"],["name","Benefits"],["name","Codex entries"]],template:function(t,e){1&t&&(f.Nb(0,"ed-title",0),f.Sb(1,"ed-frame"),f.Sb(2,"ed-list",1),f.Zb("selectedChange",(function(t){return e.onSelectedChange(t)})),f.tc(3,M,8,4,"ng-template"),f.Rb(),f.Rb()),2&t&&(f.Bb(2),f.hc("data",e.corporations))},directives:[x.a,y,S.a,c.j,w],styles:["[_nghost-%COMP%]{flex:1 1 auto;flex-direction:column}[_nghost-%COMP%], ed-list[_ngcontent-%COMP%]{display:flex;height:100%}ed-list[_ngcontent-%COMP%]{flex:1 1 auto}.corporationblock[_ngcontent-%COMP%]{display:flex;flex:1 1 auto;flex-direction:column;margin:8px}.logo[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:100%;height:96px;border:1px dashed rgba(187,44,0,.5);margin-bottom:8px;align-items:center;justify-content:center}.header[_ngcontent-%COMP%]{padding-bottom:4px;margin-bottom:4px;border-bottom:1px solid rgba(187,44,0,.5)}.stats[_ngcontent-%COMP%]{color:rgba(187,44,0,.7);font-size:small}.stat[_ngcontent-%COMP%]{border-bottom:1px solid rgba(189,44,0,.5);padding-bottom:2px;margin-bottom:2px}.not-affiliated[_ngcontent-%COMP%]{display:flex;flex:1 1 auto;flex-direction:column;align-items:center;justify-content:center;color:rgba(187,44,0,.7);font-size:small}"]}),P),G=n("0MNC"),D=n("sC04"),A=["*"],E=((B=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||B)},B.\u0275cmp=f.Gb({type:B,selectors:[["ed-tab-title"]],ngContentSelectors:A,decls:1,vars:0,template:function(t,e){1&t&&(f.gc(),f.fc(0))},styles:["[_nghost-%COMP%]{display:flex;flex-direction:row;border-bottom:1px solid rgba(189,44,0,.5);font-size:xx-large;color:#fff;padding:8px;align-items:center}"]}),B),z=n("eihG"),T=n("dv7y"),j=n("l7vO"),V=n("65hZ");function $(t,e){if(1&t&&f.Nb(0,"img",5),2&t){var n=f.cc();f.hc("src","assets/"+n.corporation.logo,f.pc)}}var F,J=((F=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||F)},F.\u0275cmp=f.Gb({type:F,selectors:[["corporation-overview"]],inputs:{corporation:"corporation"},decls:26,vars:1,consts:[["size","300px"],["width","100%",3,"src",4,"ngIf"],[1,"profile"],["state","active"],[1,"prerequisites"],["width","100%",3,"src"]],template:function(t,e){1&t&&(f.Sb(0,"ed-frame",0),f.tc(1,$,1,1,"img",1),f.Sb(2,"ed-button-group"),f.Sb(3,"div",2),f.Sb(4,"h4"),f.vc(5,"Corporation profile"),f.Rb(),f.Sb(6,"ed-button",3),f.vc(7,"Overview"),f.Rb(),f.Sb(8,"ed-button",3),f.vc(9,"CEO"),f.Rb(),f.Sb(10,"ed-button",3),f.vc(11,"Charter"),f.Rb(),f.Rb(),f.Nb(12,"ed-frame-spacer"),f.Sb(13,"div",4),f.Sb(14,"h4"),f.vc(15,"Prerequisites for affiliation"),f.Rb(),f.Sb(16,"ed-button",3),f.vc(17,"Experience"),f.Rb(),f.Sb(18,"ed-button",3),f.vc(19,"Faction alliances"),f.Rb(),f.Sb(20,"ed-button",3),f.vc(21,"Fleet composition"),f.Rb(),f.Sb(22,"ed-button",3),f.vc(23,"Crimimal record"),f.Rb(),f.Rb(),f.Rb(),f.Rb(),f.Nb(24,"ed-frame-spacer"),f.Nb(25,"ed-frame")),2&t&&(f.Bb(1),f.hc("ngIf",e.corporation.logo))},directives:[y,c.j,j.a,p.a,V.a],styles:["[_nghost-%COMP%]{display:flex;flex:1 1 auto;flex-direction:row}.prerequisites[_ngcontent-%COMP%], .profile[_ngcontent-%COMP%]{margin-top:8px}"]}),F);function H(t,e){if(1&t&&(f.Nb(0,"div",2),f.Sb(1,"div",3),f.Sb(2,"div",4),f.vc(3),f.Rb(),f.Sb(4,"div",5),f.vc(5),f.Rb(),f.Rb()),2&t){var n=e.$implicit;f.Bb(3),f.wc(n.name),f.Bb(2),f.wc(n.title)}}var q,L=((q=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||q)},q.\u0275cmp=f.Gb({type:q,selectors:[["corporation-contacts"]],inputs:{corporation:"corporation"},decls:5,vars:1,consts:[["size","300px"],[3,"data"],[1,"potrait"],[1,"textblock"],[1,"contact-name"],[1,"contact-title"]],template:function(t,e){1&t&&(f.Sb(0,"ed-frame",0),f.Sb(1,"ed-list",1),f.tc(2,H,6,2,"ng-template"),f.Rb(),f.Rb(),f.Nb(3,"ed-frame-spacer"),f.Nb(4,"ed-frame")),2&t&&(f.Bb(1),f.hc("data",e.corporation.contacts))},directives:[y,S.a,V.a],styles:["[_nghost-%COMP%]{display:flex;flex:1 1 auto;flex-direction:row}.potrait[_ngcontent-%COMP%]{width:64px;height:64px;border:1px dashed rgba(187,44,0,.5);margin-right:8px}.contact-name[_ngcontent-%COMP%]{margin-top:8px}.contact-title[_ngcontent-%COMP%]{font-size:small;color:rgba(187,44,0,.7)}"]}),q);function Z(t,e){1&t&&f.vc(0),2&t&&f.xc(" ",e.$implicit.name," ")}var K,Q=((K=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||K)},K.\u0275cmp=f.Gb({type:K,selectors:[["corporation-goals"]],inputs:{corporation:"corporation"},decls:3,vars:1,consts:[["blockHeight","192px",3,"data"]],template:function(t,e){1&t&&(f.Sb(0,"ed-frame"),f.Sb(1,"ed-list",0),f.tc(2,Z,1,1,"ng-template"),f.Rb(),f.Rb()),2&t&&(f.Bb(1),f.hc("data",e.corporation.goals))},directives:[y,S.a],styles:["[_nghost-%COMP%]{display:flex;flex:1 1 auto;flex-direction:row}"]}),K);function U(t,e){if(1&t&&(f.Nb(0,"div",2),f.Sb(1,"div",3),f.Sb(2,"div",4),f.vc(3),f.Rb(),f.Sb(4,"div",5),f.vc(5,"Dave Munster"),f.Rb(),f.Rb()),2&t){var n=e.$implicit;f.Bb(3),f.wc(n.name)}}var W,X,Y,tt=((Y=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||Y)},Y.\u0275cmp=f.Gb({type:Y,selectors:[["corporation-assignments"]],inputs:{corporation:"corporation"},decls:5,vars:1,consts:[["size","400px"],[3,"data"],[1,"potrait"],[1,"textblock"],[1,"assignment-name"],[1,"assignment-contact"]],template:function(t,e){1&t&&(f.Sb(0,"ed-frame",0),f.Sb(1,"ed-list",1),f.tc(2,U,6,1,"ng-template"),f.Rb(),f.Rb(),f.Nb(3,"ed-frame-spacer"),f.Nb(4,"ed-frame")),2&t&&(f.Bb(1),f.hc("data",e.corporation.assignments))},directives:[y,S.a,V.a],styles:["[_nghost-%COMP%]{display:flex;flex:1 1 auto;flex-direction:row}.potrait[_ngcontent-%COMP%]{width:64px;height:64px;border:1px dashed rgba(187,44,0,.5);margin-right:8px}.assignment-name[_ngcontent-%COMP%]{margin-top:8px;color:#fff}"]}),Y),et=((X=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||X)},X.\u0275cmp=f.Gb({type:X,selectors:[["corporation-benefits"]],inputs:{corporation:"corporation"},decls:1,vars:0,template:function(t,e){1&t&&f.Nb(0,"ed-frame")},directives:[y],styles:["[_nghost-%COMP%]{display:flex;flex:1 1 auto;flex-direction:row}"]}),X),nt=((W=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||W)},W.\u0275cmp=f.Gb({type:W,selectors:[["corporation-codex"]],inputs:{corporation:"corporation"},decls:1,vars:0,template:function(t,e){1&t&&f.Nb(0,"ed-frame")},directives:[y],styles:["[_nghost-%COMP%]{display:flex;flex:1 1 auto;flex-direction:row}"]}),W),ot=n("vtIR");function at(t,e){if(1&t&&(f.Qb(0),f.Sb(1,"ed-tabs",3),f.Sb(2,"ed-tab-title"),f.Nb(3,"ed-icon",4),f.vc(4),f.Rb(),f.Sb(5,"ed-tab",5),f.Nb(6,"corporation-overview",6),f.Rb(),f.Sb(7,"ed-tab",7),f.Nb(8,"corporation-contacts",6),f.Rb(),f.Sb(9,"ed-tab",8),f.Nb(10,"corporation-goals",6),f.Rb(),f.Sb(11,"ed-tab",9),f.Nb(12,"corporation-assignments",6),f.Rb(),f.Sb(13,"ed-tab",10),f.Nb(14,"corporation-benefits",6),f.Rb(),f.Sb(15,"ed-tab",11),f.Nb(16,"corporation-codex",6),f.Rb(),f.Rb(),f.Pb()),2&t){var n=f.cc(2);f.Bb(4),f.xc(" \xa0",n.corporation.name," "),f.Bb(2),f.hc("corporation",n.corporation),f.Bb(1),f.hc("seperator",!0)("disabled",!n.corporation.affiliated),f.Bb(1),f.hc("corporation",n.corporation),f.Bb(1),f.hc("disabled",!n.corporation.affiliated),f.Bb(1),f.hc("corporation",n.corporation),f.Bb(1),f.hc("seperator",!0)("disabled",!n.corporation.affiliated),f.Bb(1),f.hc("corporation",n.corporation),f.Bb(1),f.hc("disabled",!n.corporation.affiliated),f.Bb(1),f.hc("corporation",n.corporation),f.Bb(1),f.hc("disabled",!n.corporation.affiliated),f.Bb(1),f.hc("corporation",n.corporation)}}function it(t,e){if(1&t&&(f.Nb(0,"ed-title",12),f.Sb(1,"ed-tabs-navigator",3),f.Sb(2,"ed-tab",13),f.vc(3," Overview "),f.Rb(),f.Sb(4,"ed-tab",14),f.vc(5," Contacts "),f.Rb(),f.Sb(6,"ed-tab",15),f.vc(7," Goals "),f.Rb(),f.Sb(8,"ed-tab",16),f.vc(9," Assignments "),f.Rb(),f.Sb(10,"ed-tab",17),f.vc(11," Benefits "),f.Rb(),f.Sb(12,"ed-tab",18),f.vc(13," Codex "),f.Rb(),f.Rb()),2&t){var n=f.cc(2);f.hc("name",n.corporation.name),f.Bb(4),f.hc("seperator",!0),f.Bb(4),f.hc("seperator",!0)}}function rt(t,e){if(1&t&&(f.Qb(0),f.tc(1,at,17,14,"ng-container",1),f.tc(2,it,14,3,"ng-template",null,2,f.uc),f.Pb()),2&t){var n=f.mc(3),o=f.cc();f.Bb(1),f.hc("ngIf",!o.compactMode)("ngIfElse",n)}}var ct,st,lt,ft=[{path:"",component:d,children:[{path:"",component:N},{path:":id",component:(ct=function(){function t(e,n,o){var a=this;_classCallCheck(this,t),this.route=e,this.breakpointObserver=n,this.corporationService=o,this.compactMode=!1,this.route.params.subscribe((function(t){a.corporationService.getCorporation(t.id).subscribe((function(t){a.corporation=t}))})),this.breakpointObserver.observe("(max-width: 1280px)").subscribe((function(t){a.compactMode=t.matches}))}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}(),ct.\u0275fac=function(t){return new(t||ct)(f.Mb(l.a),f.Mb(G.a),f.Mb(v))},ct.\u0275cmp=f.Gb({type:ct,selectors:[["ng-component"]],decls:1,vars:1,consts:[[4,"ngIf"],[4,"ngIf","ngIfElse"],["compactTemplate",""],["activeTab","Overview"],["icon","corporation"],["name","Overview"],[3,"corporation"],["name","Contacts",3,"seperator","disabled"],["name","Goals",3,"disabled"],["name","Assignments",3,"seperator","disabled"],["name","Benefits",3,"disabled"],["name","Codex",3,"disabled"],["icon","corporation","description","Information about the corporation",3,"name"],["name","Overview","description","General information about the corporation"],["name","Contacts",3,"seperator"],["name","Goals"],["name","Assignments",3,"seperator"],["name","Benefits"],["name","Codex"]],template:function(t,e){1&t&&f.tc(0,rt,4,2,"ng-container",0),2&t&&f.hc("ngIf",e.corporation)},directives:[c.j,D.a,E,z.a,T.a,J,L,Q,tt,et,nt,x.a,ot.a],styles:["[_nghost-%COMP%]{display:flex;flex:1 1 auto;flex-direction:column;height:100%}ed-icon[icon=corporation][_ngcontent-%COMP%]{stroke:#fff;fill:#fff}"]}),ct)}]}],bt=((lt=function t(){_classCallCheck(this,t)}).\u0275mod=f.Kb({type:lt}),lt.\u0275inj=f.Jb({factory:function(t){return new(t||lt)},imports:[[l.d.forChild(ft)],l.d]}),lt),pt=((st=function t(){_classCallCheck(this,t)}).\u0275mod=f.Kb({type:st}),st.\u0275inj=f.Jb({factory:function(t){return new(t||st)},imports:[[c.b,s.a,bt]]}),st)}}]);