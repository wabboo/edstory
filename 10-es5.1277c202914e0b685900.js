function _createForOfIteratorHelper(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=_unsupportedIterableToArray(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var o=0,a=function(){};return{s:a,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,r=!0,c=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return r=t.done,t},e:function(t){c=!0,i=t},f:function(){try{r||null==n.return||n.return()}finally{if(c)throw i}}}}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(t,e):void 0}}function _arrayLikeToArray(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{C7Sl:function(t,e,n){"use strict";n.r(e),n.d(e,"CorporationsModule",(function(){return ft}));var o,a,i,r=n("ofXK"),c=n("IVc4"),s=n("tyNb"),l=n("fXoL"),f=n("OcQ2"),b=n("qO2F"),p=((o=function(){function t(e){_classCallCheck(this,t),this.router=e}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"onBack",value:function(){history.back()}},{key:"onExit",value:function(){this.router.navigateByUrl("/ship/cockpit")}}]),t}()).\u0275fac=function(t){return new(t||o)(l.Mb(s.b))},o.\u0275cmp=l.Gb({type:o,selectors:[["ng-component"]],decls:8,vars:0,consts:[[1,"content"],[1,"navigation"],[3,"click"]],template:function(t,e){1&t&&(l.Sb(0,"ed-window"),l.Sb(1,"div",0),l.Nb(2,"router-outlet"),l.Rb(),l.Sb(3,"div",1),l.Sb(4,"ed-button",2),l.ac("click",(function(){return e.onBack()})),l.vc(5,"Back"),l.Rb(),l.Sb(6,"ed-button",2),l.ac("click",(function(){return e.onExit()})),l.vc(7,"Exit"),l.Rb(),l.Rb(),l.Rb())},directives:[f.a,s.d,b.a],styles:["[_nghost-%COMP%]{height:100%;z-index:100}.content[_ngcontent-%COMP%], [_nghost-%COMP%]{display:flex;flex:1 1 auto;flex-direction:column}.content[_ngcontent-%COMP%]{overflow:hidden}.navigation[_ngcontent-%COMP%]{display:flex;flex-direction:row;margin-top:8px;padding-top:8px;border-top:1px solid rgba(187,44,0,.5)}.navigation[_ngcontent-%COMP%]   ed-button[_ngcontent-%COMP%]{width:160px;margin-right:16px;text-align:center}"]}),o),u=n("2Vo4"),d=function t(){_classCallCheck(this,t),this.contacts=[],this.goals=[],this.benefits=[],this.assignments=[]},g=n("tk/3"),m='[{"corporationID":2,"name":"Caine-Massey","logo":"logo11.png","affiliated":false,"contacts":0,"goals":0,"assignments":0,"benefits":0,"codex":0},{"corporationID":101,"name":"Canonn","logo":"logo10.png","affiliated":false,"contacts":0,"goals":0,"assignments":0,"benefits":0,"codex":0},{"corporationID":102,"name":"Fuel rats","logo":"logo8.png","affiliated":false,"contacts":0,"goals":0,"assignments":0,"benefits":0,"codex":0},{"corporationID":103,"name":"Hutton orbital truckers","logo":"logo9.png","affiliated":false,"contacts":0,"goals":0,"assignments":0,"benefits":0,"codex":0},{"corporationID":3,"name":"Mastapolos Mining","logo":"logo4.png","affiliated":false,"contacts":0,"goals":0,"assignments":0,"benefits":0,"codex":0},{"corporationID":4,"name":"Neomedical Industries","logo":"logo15.png","affiliated":false,"contacts":0,"goals":0,"assignments":0,"benefits":0,"codex":0},{"corporationID":5,"name":"Rockforth Corporation","logo":"logo12.png","affiliated":false,"contacts":0,"goals":0,"assignments":0,"benefits":0,"codex":0},{"corporationID":6,"name":"Sirius Corporation","logo":"logo6.png","affiliated":false,"contacts":0,"goals":0,"assignments":0,"benefits":0,"codex":0},{"corporationID":1,"name":"The Achilles Corporation","logo":"logo1.png","affiliated":false,"contacts":0,"goals":0,"assignments":0,"benefits":0,"codex":0},{"corporationID":7,"name":"Universal Cartographics","logo":"logo7.png","affiliated":false,"contacts":0,"goals":0,"assignments":0,"benefits":0,"codex":0},{"corporationID":8,"name":"Vandermeer Corporation","logo":"logo14.png","affiliated":false,"contacts":0,"goals":0,"assignments":0,"benefits":0,"codex":0},{"corporationID":9,"name":"WorldCraft","logo":"logo13.png","affiliated":false,"contacts":0,"goals":0,"assignments":0,"benefits":0,"codex":0}]',v=((a=function(){function t(e){_classCallCheck(this,t),this.httpClient=e}return _createClass(t,[{key:"getCorporations",value:function(){return new u.a(JSON.parse(m))}},{key:"getCorporation",value:function(t){var e,n=_createForOfIteratorHelper(JSON.parse(m));try{for(n.s();!(e=n.n()).done;){var o=e.value;if(o.corporationID==t){var a=new d;return a.corporationID=o.corporationID,a.name=o.name,a.logo=o.logo,new u.a(a)}}}catch(i){n.e(i)}finally{n.f()}}}]),t}()).\u0275fac=function(t){return new(t||a)(l.Wb(g.b))},a.\u0275prov=l.Ib({token:a,factory:a.\u0275fac,providedIn:"root"}),a),h=n("EY6u"),C=n("sP8S"),x=n("DE09"),y=["*"],S=((i=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||i)},i.\u0275cmp=l.Gb({type:i,selectors:[["ed-name-value"]],inputs:{name:"name"},ngContentSelectors:y,decls:4,vars:1,consts:[[1,"name"],[1,"value"]],template:function(t,e){1&t&&(l.hc(),l.Sb(0,"div",0),l.vc(1),l.Rb(),l.Sb(2,"div",1),l.gc(3),l.Rb()),2&t&&(l.Bb(1),l.wc(e.name))},styles:["[_nghost-%COMP%]{flex:1 1 auto;flex-direction:row}.name[_ngcontent-%COMP%], [_nghost-%COMP%]{display:flex}.name[_ngcontent-%COMP%]{flex:1 1 auto}.value[_ngcontent-%COMP%]{margin-right:8px}"]}),i);function _(t,e){if(1&t&&l.Nb(0,"img",8),2&t){var n=l.dc().$implicit;l.ic("src","assets/"+n.logo,l.pc)}}function O(t,e){if(1&t&&l.vc(0),2&t){var n=l.dc().$implicit;l.xc(" ",n.name," ")}}function w(t,e){1&t&&(l.Sb(0,"div",9),l.vc(1," Not affiliated "),l.Rb())}function k(t,e){if(1&t&&(l.Sb(0,"div",10),l.vc(1,"Details"),l.Rb(),l.Sb(2,"div",11),l.Sb(3,"ed-name-value",12),l.vc(4),l.Rb(),l.Sb(5,"ed-name-value",13),l.vc(6),l.Rb(),l.Sb(7,"ed-name-value",14),l.vc(8),l.Rb(),l.Sb(9,"ed-name-value",15),l.vc(10),l.Rb(),l.Sb(11,"ed-name-value",16),l.vc(12),l.Rb(),l.Rb()),2&t){var n=l.dc().$implicit;l.Bb(4),l.wc(n.contacts),l.Bb(2),l.wc(n.goals),l.Bb(2),l.wc(n.assignments),l.Bb(2),l.wc(n.benefits),l.Bb(2),l.wc(n.codex)}}function I(t,e){if(1&t&&(l.Sb(0,"div",2),l.Sb(1,"div",3),l.tc(2,_,1,1,"img",4),l.tc(3,O,1,1,"ng-template",null,5,l.uc),l.Rb(),l.tc(5,w,2,0,"div",6),l.tc(6,k,13,5,"ng-template",null,7,l.uc),l.Rb()),2&t){var n=e.$implicit,o=l.mc(4),a=l.mc(7);l.Bb(2),l.ic("ngIf",n.logo)("ngIfElse",o),l.Bb(3),l.ic("ngIf",!n.affiliated)("ngIfElse",a)}}var R,M,P=((R=function(){function t(e,n,o){_classCallCheck(this,t),this.router=e,this.route=n,this.corporationService=o,this.corporations=[]}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.corporationService.getCorporations().subscribe((function(e){t.corporations=e}))}},{key:"onSelectedChange",value:function(t){this.router.navigate([t.corporationID],{relativeTo:this.route})}}]),t}()).\u0275fac=function(t){return new(t||R)(l.Mb(s.b),l.Mb(s.a),l.Mb(v))},R.\u0275cmp=l.Gb({type:R,selectors:[["ng-component"]],decls:4,vars:1,consts:[["icon","corporation","name","Corporations","description","The corporations you are aware of"],["blockWidth","256px","blockHeight","272px","spacing","16px",3,"data","selectedChange"],[1,"corporationblock"],[1,"logo"],["height","100%",3,"src",4,"ngIf","ngIfElse"],["corporationName",""],["class","not-affiliated",4,"ngIf","ngIfElse"],["affiliatedTemplate",""],["height","100%",3,"src"],[1,"not-affiliated"],[1,"header"],[1,"stats"],["name","Contacts"],["name","Goals"],["name","Assignments"],["name","Benefits"],["name","Codex entries"]],template:function(t,e){1&t&&(l.Nb(0,"ed-title",0),l.Sb(1,"ed-frame"),l.Sb(2,"ed-list",1),l.ac("selectedChange",(function(t){return e.onSelectedChange(t)})),l.tc(3,I,8,4,"ng-template"),l.Rb(),l.Rb()),2&t&&(l.Bb(2),l.ic("data",e.corporations))},directives:[h.a,C.a,x.a,r.j,S],styles:["[_nghost-%COMP%]{flex:1 1 auto;flex-direction:column}[_nghost-%COMP%], ed-list[_ngcontent-%COMP%]{display:flex;height:100%}ed-list[_ngcontent-%COMP%]{flex:1 1 auto}.corporationblock[_ngcontent-%COMP%]{display:flex;flex:1 1 auto;flex-direction:column;margin:8px}.logo[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:100%;height:96px;border:1px dashed rgba(187,44,0,.5);margin-bottom:8px;align-items:center;justify-content:center}.header[_ngcontent-%COMP%]{padding-bottom:4px;margin-bottom:4px;border-bottom:1px solid rgba(187,44,0,.5)}.stats[_ngcontent-%COMP%]{color:rgba(187,44,0,.7);font-size:small}.stat[_ngcontent-%COMP%]{border-bottom:1px solid rgba(219,62,0,.63);padding-bottom:2px;margin-bottom:2px}.not-affiliated[_ngcontent-%COMP%]{display:flex;flex:1 1 auto;flex-direction:column;align-items:center;justify-content:center;color:rgba(187,44,0,.7);font-size:small}"]}),R),B=n("0MNC"),N=n("sC04"),A=["*"],D=((M=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||M)},M.\u0275cmp=l.Gb({type:M,selectors:[["ed-tab-title"]],ngContentSelectors:A,decls:1,vars:0,template:function(t,e){1&t&&(l.hc(),l.gc(0))},styles:["[_nghost-%COMP%]{display:flex;flex-direction:row;border-bottom:1px solid rgba(219,62,0,.63);font-size:xx-large;color:#fff;padding:8px;align-items:center}"]}),M),G=n("eihG"),E=n("dv7y"),T=n("l7vO"),j=n("65hZ");function F(t,e){if(1&t&&l.Nb(0,"img",5),2&t){var n=l.dc();l.ic("src","assets/"+n.corporation.logo,l.pc)}}var z,H=((z=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||z)},z.\u0275cmp=l.Gb({type:z,selectors:[["corporation-overview"]],inputs:{corporation:"corporation"},decls:26,vars:1,consts:[["size","300px"],["width","100%",3,"src",4,"ngIf"],[1,"profile"],["state","active"],[1,"prerequisites"],["width","100%",3,"src"]],template:function(t,e){1&t&&(l.Sb(0,"ed-frame",0),l.tc(1,F,1,1,"img",1),l.Sb(2,"ed-button-group"),l.Sb(3,"div",2),l.Sb(4,"h4"),l.vc(5,"Corporation profile"),l.Rb(),l.Sb(6,"ed-button",3),l.vc(7,"Overview"),l.Rb(),l.Sb(8,"ed-button",3),l.vc(9,"CEO"),l.Rb(),l.Sb(10,"ed-button",3),l.vc(11,"Charter"),l.Rb(),l.Rb(),l.Nb(12,"ed-frame-spacer"),l.Sb(13,"div",4),l.Sb(14,"h4"),l.vc(15,"Prerequisites for affiliation"),l.Rb(),l.Sb(16,"ed-button",3),l.vc(17,"Experience"),l.Rb(),l.Sb(18,"ed-button",3),l.vc(19,"Faction alliances"),l.Rb(),l.Sb(20,"ed-button",3),l.vc(21,"Fleet composition"),l.Rb(),l.Sb(22,"ed-button",3),l.vc(23,"Crimimal record"),l.Rb(),l.Rb(),l.Rb(),l.Rb(),l.Nb(24,"ed-frame-spacer"),l.Nb(25,"ed-frame")),2&t&&(l.Bb(1),l.ic("ngIf",e.corporation.logo))},directives:[C.a,r.j,T.a,b.a,j.a],styles:["[_nghost-%COMP%]{display:flex;flex:1 1 auto;flex-direction:row}.prerequisites[_ngcontent-%COMP%], .profile[_ngcontent-%COMP%]{margin-top:8px}"]}),z);function $(t,e){if(1&t&&(l.Nb(0,"div",2),l.Sb(1,"div",3),l.Sb(2,"div",4),l.vc(3),l.Rb(),l.Sb(4,"div",5),l.vc(5),l.Rb(),l.Rb()),2&t){var n=e.$implicit;l.Bb(3),l.wc(n.name),l.Bb(2),l.wc(n.title)}}var J,q=((J=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||J)},J.\u0275cmp=l.Gb({type:J,selectors:[["corporation-contacts"]],inputs:{corporation:"corporation"},decls:5,vars:1,consts:[["size","300px"],[3,"data"],[1,"potrait"],[1,"textblock"],[1,"contact-name"],[1,"contact-title"]],template:function(t,e){1&t&&(l.Sb(0,"ed-frame",0),l.Sb(1,"ed-list",1),l.tc(2,$,6,2,"ng-template"),l.Rb(),l.Rb(),l.Nb(3,"ed-frame-spacer"),l.Nb(4,"ed-frame")),2&t&&(l.Bb(1),l.ic("data",e.corporation.contacts))},directives:[C.a,x.a,j.a],styles:["[_nghost-%COMP%]{display:flex;flex:1 1 auto;flex-direction:row}.potrait[_ngcontent-%COMP%]{width:64px;height:64px;border:1px dashed rgba(187,44,0,.5);margin-right:8px}.contact-name[_ngcontent-%COMP%]{margin-top:8px}.contact-title[_ngcontent-%COMP%]{font-size:small;color:rgba(187,44,0,.7)}"]}),J);function L(t,e){1&t&&l.vc(0),2&t&&l.xc(" ",e.$implicit.name," ")}var Q,V=((Q=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||Q)},Q.\u0275cmp=l.Gb({type:Q,selectors:[["corporation-goals"]],inputs:{corporation:"corporation"},decls:3,vars:1,consts:[["blockHeight","192px",3,"data"]],template:function(t,e){1&t&&(l.Sb(0,"ed-frame"),l.Sb(1,"ed-list",0),l.tc(2,L,1,1,"ng-template"),l.Rb(),l.Rb()),2&t&&(l.Bb(1),l.ic("data",e.corporation.goals))},directives:[C.a,x.a],styles:["[_nghost-%COMP%]{display:flex;flex:1 1 auto;flex-direction:row}"]}),Q);function K(t,e){if(1&t&&(l.Nb(0,"div",2),l.Sb(1,"div",3),l.Sb(2,"div",4),l.vc(3),l.Rb(),l.Sb(4,"div",5),l.vc(5,"Dave Munster"),l.Rb(),l.Rb()),2&t){var n=e.$implicit;l.Bb(3),l.wc(n.name)}}var U,W,X,Y=((X=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||X)},X.\u0275cmp=l.Gb({type:X,selectors:[["corporation-assignments"]],inputs:{corporation:"corporation"},decls:5,vars:1,consts:[["size","400px"],[3,"data"],[1,"potrait"],[1,"textblock"],[1,"assignment-name"],[1,"assignment-contact"]],template:function(t,e){1&t&&(l.Sb(0,"ed-frame",0),l.Sb(1,"ed-list",1),l.tc(2,K,6,1,"ng-template"),l.Rb(),l.Rb(),l.Nb(3,"ed-frame-spacer"),l.Nb(4,"ed-frame")),2&t&&(l.Bb(1),l.ic("data",e.corporation.assignments))},directives:[C.a,x.a,j.a],styles:["[_nghost-%COMP%]{display:flex;flex:1 1 auto;flex-direction:row}.potrait[_ngcontent-%COMP%]{width:64px;height:64px;border:1px dashed rgba(187,44,0,.5);margin-right:8px}.assignment-name[_ngcontent-%COMP%]{margin-top:8px;color:#fff}"]}),X),Z=((W=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||W)},W.\u0275cmp=l.Gb({type:W,selectors:[["corporation-benefits"]],inputs:{corporation:"corporation"},decls:1,vars:0,template:function(t,e){1&t&&l.Nb(0,"ed-frame")},directives:[C.a],styles:["[_nghost-%COMP%]{display:flex;flex:1 1 auto;flex-direction:row}"]}),W),tt=((U=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||U)},U.\u0275cmp=l.Gb({type:U,selectors:[["corporation-codex"]],inputs:{corporation:"corporation"},decls:1,vars:0,template:function(t,e){1&t&&l.Nb(0,"ed-frame")},directives:[C.a],styles:["[_nghost-%COMP%]{display:flex;flex:1 1 auto;flex-direction:row}"]}),U),et=n("vtIR");function nt(t,e){if(1&t&&(l.Qb(0),l.Sb(1,"ed-tabs",3),l.Sb(2,"ed-tab-title"),l.Nb(3,"ed-icon",4),l.vc(4),l.Rb(),l.Sb(5,"ed-tab",5),l.Nb(6,"corporation-overview",6),l.Rb(),l.Sb(7,"ed-tab",7),l.Nb(8,"corporation-contacts",6),l.Rb(),l.Sb(9,"ed-tab",8),l.Nb(10,"corporation-goals",6),l.Rb(),l.Sb(11,"ed-tab",9),l.Nb(12,"corporation-assignments",6),l.Rb(),l.Sb(13,"ed-tab",10),l.Nb(14,"corporation-benefits",6),l.Rb(),l.Sb(15,"ed-tab",11),l.Nb(16,"corporation-codex",6),l.Rb(),l.Rb(),l.Pb()),2&t){var n=l.dc(2);l.Bb(4),l.xc(" \xa0",n.corporation.name," "),l.Bb(2),l.ic("corporation",n.corporation),l.Bb(1),l.ic("seperator",!0)("disabled",!n.corporation.affiliated),l.Bb(1),l.ic("corporation",n.corporation),l.Bb(1),l.ic("disabled",!n.corporation.affiliated),l.Bb(1),l.ic("corporation",n.corporation),l.Bb(1),l.ic("seperator",!0)("disabled",!n.corporation.affiliated),l.Bb(1),l.ic("corporation",n.corporation),l.Bb(1),l.ic("disabled",!n.corporation.affiliated),l.Bb(1),l.ic("corporation",n.corporation),l.Bb(1),l.ic("disabled",!n.corporation.affiliated),l.Bb(1),l.ic("corporation",n.corporation)}}function ot(t,e){if(1&t&&(l.Nb(0,"ed-title",12),l.Sb(1,"ed-tabs-navigator",3),l.Sb(2,"ed-tab",13),l.vc(3," Overview "),l.Rb(),l.Sb(4,"ed-tab",14),l.vc(5," Contacts "),l.Rb(),l.Sb(6,"ed-tab",15),l.vc(7," Goals "),l.Rb(),l.Sb(8,"ed-tab",16),l.vc(9," Assignments "),l.Rb(),l.Sb(10,"ed-tab",17),l.vc(11," Benefits "),l.Rb(),l.Sb(12,"ed-tab",18),l.vc(13," Codex "),l.Rb(),l.Rb()),2&t){var n=l.dc(2);l.ic("name",n.corporation.name),l.Bb(4),l.ic("seperator",!0),l.Bb(4),l.ic("seperator",!0)}}function at(t,e){if(1&t&&(l.Qb(0),l.tc(1,nt,17,14,"ng-container",1),l.tc(2,ot,14,3,"ng-template",null,2,l.uc),l.Pb()),2&t){var n=l.mc(3),o=l.dc();l.Bb(1),l.ic("ngIf",!o.compactMode)("ngIfElse",n)}}var it,rt,ct,st=[{path:"",component:p,children:[{path:"",component:P},{path:":id",component:(it=function(){function t(e,n,o){var a=this;_classCallCheck(this,t),this.route=e,this.breakpointObserver=n,this.corporationService=o,this.compactMode=!1,this.route.params.subscribe((function(t){a.corporationService.getCorporation(t.id).subscribe((function(t){a.corporation=t}))})),this.breakpointObserver.observe("(max-width: 1280px)").subscribe((function(t){a.compactMode=t.matches}))}return _createClass(t,[{key:"ngOnInit",value:function(){}}]),t}(),it.\u0275fac=function(t){return new(t||it)(l.Mb(s.a),l.Mb(B.a),l.Mb(v))},it.\u0275cmp=l.Gb({type:it,selectors:[["ng-component"]],decls:1,vars:1,consts:[[4,"ngIf"],[4,"ngIf","ngIfElse"],["compactTemplate",""],["activeTab","Overview"],["icon","corporation"],["name","Overview"],[3,"corporation"],["name","Contacts",3,"seperator","disabled"],["name","Goals",3,"disabled"],["name","Assignments",3,"seperator","disabled"],["name","Benefits",3,"disabled"],["name","Codex",3,"disabled"],["icon","corporation","description","Information about the corporation",3,"name"],["name","Overview","description","General information about the corporation"],["name","Contacts",3,"seperator"],["name","Goals"],["name","Assignments",3,"seperator"],["name","Benefits"],["name","Codex"]],template:function(t,e){1&t&&l.tc(0,at,4,2,"ng-container",0),2&t&&l.ic("ngIf",e.corporation)},directives:[r.j,N.a,D,G.a,E.a,H,q,V,Y,Z,tt,h.a,et.a],styles:["[_nghost-%COMP%]{display:flex;flex:1 1 auto;flex-direction:column;height:100%}ed-icon[icon=corporation][_ngcontent-%COMP%]{stroke:#fff;fill:#fff}"]}),it)}]}],lt=((ct=function t(){_classCallCheck(this,t)}).\u0275mod=l.Kb({type:ct}),ct.\u0275inj=l.Jb({factory:function(t){return new(t||ct)},imports:[[s.c.forChild(st)],s.c]}),ct),ft=((rt=function t(){_classCallCheck(this,t)}).\u0275mod=l.Kb({type:rt}),rt.\u0275inj=l.Jb({factory:function(t){return new(t||rt)},imports:[[r.b,c.a,lt]]}),rt)},l7vO:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var o=n("fXoL"),a=n("qO2F"),i=["*"],r=function(){var t=function(){function t(){_classCallCheck(this,t),this.buttons=new o.D,this.press=new o.n,this.subscriptions=[]}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.buttons.changes.subscribe((function(){t.resetSubscriptions()}))}},{key:"ngAfterViewInit",value:function(){this.resetSubscriptions()}},{key:"onPress",value:function(t){"active"===t.state&&(t.state="selected",this.resetActive(t),this.press.emit(t))}},{key:"resetSubscriptions",value:function(){var t,e=this,n=_createForOfIteratorHelper(this.subscriptions);try{for(n.s();!(t=n.n()).done;){t.value.unsubscribe()}}catch(r){n.e(r)}finally{n.f()}this.subscriptions=[];var o,a=_createForOfIteratorHelper(this.buttons.toArray());try{var i=function(){var t=o.value;e.subscriptions.push(t.press.subscribe((function(){return e.onPress(t)})))};for(a.s();!(o=a.n()).done;)i()}catch(r){a.e(r)}finally{a.f()}}},{key:"resetActive",value:function(t){var e,n=_createForOfIteratorHelper(this.buttons);try{for(n.s();!(e=n.n()).done;){var o=e.value;o!==t&&"selected"===o.state&&(o.state="active")}}catch(a){n.e(a)}finally{n.f()}}}]),t}();return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Gb({type:t,selectors:[["ed-button-group"]],contentQueries:function(t,e,n){var i;1&t&&o.Eb(n,a.a,!0),2&t&&o.lc(i=o.bc())&&(e.buttons=i)},outputs:{press:"press"},ngContentSelectors:i,decls:1,vars:0,template:function(t,e){1&t&&(o.hc(),o.gc(0))},styles:[""]}),t}()}}]);