(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{C7Sl:function(t,o,e){"use strict";e.r(o),e.d(o,"CorporationsModule",(function(){return L}));var n=e("ofXK"),i=e("IVc4"),a=e("tyNb"),c=e("fXoL"),r=e("OcQ2"),s=e("qO2F");let l=(()=>{class t{constructor(t){this.router=t}ngOnInit(){}onBack(){history.back()}onExit(){this.router.navigateByUrl("/ship/cockpit")}}return t.\u0275fac=function(o){return new(o||t)(c.Mb(a.b))},t.\u0275cmp=c.Gb({type:t,selectors:[["ng-component"]],decls:8,vars:0,consts:[[1,"content"],[1,"navigation"],[3,"click"]],template:function(t,o){1&t&&(c.Sb(0,"ed-window"),c.Sb(1,"div",0),c.Nb(2,"router-outlet"),c.Rb(),c.Sb(3,"div",1),c.Sb(4,"ed-button",2),c.ac("click",(function(){return o.onBack()})),c.vc(5,"Back"),c.Rb(),c.Sb(6,"ed-button",2),c.ac("click",(function(){return o.onExit()})),c.vc(7,"Exit"),c.Rb(),c.Rb(),c.Rb())},directives:[r.a,a.d,s.a],styles:["[_nghost-%COMP%]{height:100%;z-index:100}.content[_ngcontent-%COMP%], [_nghost-%COMP%]{display:flex;flex:1 1 auto;flex-direction:column}.content[_ngcontent-%COMP%]{overflow:hidden}.navigation[_ngcontent-%COMP%]{display:flex;flex-direction:row;margin-top:8px;padding-top:8px;border-top:1px solid rgba(187,44,0,.5)}.navigation[_ngcontent-%COMP%]   ed-button[_ngcontent-%COMP%]{width:160px;margin-right:16px;text-align:center}"]}),t})();var b=e("2Vo4");class p{constructor(){this.contacts=[],this.goals=[],this.benefits=[],this.assignments=[]}}var d=e("tk/3");const f='[{"corporationID":2,"name":"Caine-Massey","logo":"logo11.png","affiliated":false,"contacts":0,"goals":0,"assignments":0,"benefits":0,"codex":0},{"corporationID":101,"name":"Canonn","logo":"logo10.png","affiliated":false,"contacts":0,"goals":0,"assignments":0,"benefits":0,"codex":0},{"corporationID":102,"name":"Fuel rats","logo":"logo8.png","affiliated":false,"contacts":0,"goals":0,"assignments":0,"benefits":0,"codex":0},{"corporationID":103,"name":"Hutton orbital truckers","logo":"logo9.png","affiliated":false,"contacts":0,"goals":0,"assignments":0,"benefits":0,"codex":0},{"corporationID":3,"name":"Mastapolos Mining","logo":"logo4.png","affiliated":false,"contacts":0,"goals":0,"assignments":0,"benefits":0,"codex":0},{"corporationID":4,"name":"Neomedical Industries","logo":"logo15.png","affiliated":false,"contacts":0,"goals":0,"assignments":0,"benefits":0,"codex":0},{"corporationID":5,"name":"Rockforth Corporation","logo":"logo12.png","affiliated":false,"contacts":0,"goals":0,"assignments":0,"benefits":0,"codex":0},{"corporationID":6,"name":"Sirius Corporation","logo":"logo6.png","affiliated":false,"contacts":0,"goals":0,"assignments":0,"benefits":0,"codex":0},{"corporationID":1,"name":"The Achilles Corporation","logo":"logo1.png","affiliated":false,"contacts":0,"goals":0,"assignments":0,"benefits":0,"codex":0},{"corporationID":7,"name":"Universal Cartographics","logo":"logo7.png","affiliated":false,"contacts":0,"goals":0,"assignments":0,"benefits":0,"codex":0},{"corporationID":8,"name":"Vandermeer Corporation","logo":"logo14.png","affiliated":false,"contacts":0,"goals":0,"assignments":0,"benefits":0,"codex":0},{"corporationID":9,"name":"WorldCraft","logo":"logo13.png","affiliated":false,"contacts":0,"goals":0,"assignments":0,"benefits":0,"codex":0}]';let g=(()=>{class t{constructor(t){this.httpClient=t}getCorporations(){return new b.a(JSON.parse(f))}getCorporation(t){const o=JSON.parse(f);for(const e of o)if(e.corporationID==t){const t=new p;return t.corporationID=e.corporationID,t.name=e.name,t.logo=e.logo,new b.a(t)}}}return t.\u0275fac=function(o){return new(o||t)(c.Wb(d.b))},t.\u0275prov=c.Ib({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var u=e("EY6u"),m=e("sP8S"),v=e("DE09");const h=["*"];let x=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=c.Gb({type:t,selectors:[["ed-name-value"]],inputs:{name:"name"},ngContentSelectors:h,decls:4,vars:1,consts:[[1,"name"],[1,"value"]],template:function(t,o){1&t&&(c.hc(),c.Sb(0,"div",0),c.vc(1),c.Rb(),c.Sb(2,"div",1),c.gc(3),c.Rb()),2&t&&(c.Bb(1),c.wc(o.name))},styles:["[_nghost-%COMP%]{flex:1 1 auto;flex-direction:row}.name[_ngcontent-%COMP%], [_nghost-%COMP%]{display:flex}.name[_ngcontent-%COMP%]{flex:1 1 auto}.value[_ngcontent-%COMP%]{margin-right:8px}"]}),t})();function C(t,o){if(1&t&&c.Nb(0,"img",8),2&t){const t=c.dc().$implicit;c.ic("src","assets/"+t.logo,c.pc)}}function S(t,o){if(1&t&&c.vc(0),2&t){const t=c.dc().$implicit;c.xc(" ",t.name," ")}}function O(t,o){1&t&&(c.Sb(0,"div",9),c.vc(1," Not affiliated "),c.Rb())}function w(t,o){if(1&t&&(c.Sb(0,"div",10),c.vc(1,"Details"),c.Rb(),c.Sb(2,"div",11),c.Sb(3,"ed-name-value",12),c.vc(4),c.Rb(),c.Sb(5,"ed-name-value",13),c.vc(6),c.Rb(),c.Sb(7,"ed-name-value",14),c.vc(8),c.Rb(),c.Sb(9,"ed-name-value",15),c.vc(10),c.Rb(),c.Sb(11,"ed-name-value",16),c.vc(12),c.Rb(),c.Rb()),2&t){const t=c.dc().$implicit;c.Bb(4),c.wc(t.contacts),c.Bb(2),c.wc(t.goals),c.Bb(2),c.wc(t.assignments),c.Bb(2),c.wc(t.benefits),c.Bb(2),c.wc(t.codex)}}function R(t,o){if(1&t&&(c.Sb(0,"div",2),c.Sb(1,"div",3),c.tc(2,C,1,1,"img",4),c.tc(3,S,1,1,"ng-template",null,5,c.uc),c.Rb(),c.tc(5,O,2,0,"div",6),c.tc(6,w,13,5,"ng-template",null,7,c.uc),c.Rb()),2&t){const t=o.$implicit,e=c.mc(4),n=c.mc(7);c.Bb(2),c.ic("ngIf",t.logo)("ngIfElse",e),c.Bb(3),c.ic("ngIf",!t.affiliated)("ngIfElse",n)}}let M=(()=>{class t{constructor(t,o,e){this.router=t,this.route=o,this.corporationService=e,this.corporations=[]}ngOnInit(){this.corporationService.getCorporations().subscribe(t=>{this.corporations=t})}onSelectedChange(t){this.router.navigate([t.corporationID],{relativeTo:this.route})}}return t.\u0275fac=function(o){return new(o||t)(c.Mb(a.b),c.Mb(a.a),c.Mb(g))},t.\u0275cmp=c.Gb({type:t,selectors:[["ng-component"]],decls:4,vars:1,consts:[["icon","corporation","name","Corporations","description","The corporations you are aware of"],["blockWidth","256px","blockHeight","272px","spacing","16px",3,"data","selectedChange"],[1,"corporationblock"],[1,"logo"],["height","100%",3,"src",4,"ngIf","ngIfElse"],["corporationName",""],["class","not-affiliated",4,"ngIf","ngIfElse"],["affiliatedTemplate",""],["height","100%",3,"src"],[1,"not-affiliated"],[1,"header"],[1,"stats"],["name","Contacts"],["name","Goals"],["name","Assignments"],["name","Benefits"],["name","Codex entries"]],template:function(t,o){1&t&&(c.Nb(0,"ed-title",0),c.Sb(1,"ed-frame"),c.Sb(2,"ed-list",1),c.ac("selectedChange",(function(t){return o.onSelectedChange(t)})),c.tc(3,R,8,4,"ng-template"),c.Rb(),c.Rb()),2&t&&(c.Bb(2),c.ic("data",o.corporations))},directives:[u.a,m.a,v.a,n.j,x],styles:["[_nghost-%COMP%]{flex:1 1 auto;flex-direction:column}[_nghost-%COMP%], ed-list[_ngcontent-%COMP%]{display:flex;height:100%}ed-list[_ngcontent-%COMP%]{flex:1 1 auto}.corporationblock[_ngcontent-%COMP%]{display:flex;flex:1 1 auto;flex-direction:column;margin:8px}.logo[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:100%;height:96px;border:1px dashed rgba(187,44,0,.5);margin-bottom:8px;align-items:center;justify-content:center}.header[_ngcontent-%COMP%]{padding-bottom:4px;margin-bottom:4px;border-bottom:1px solid rgba(187,44,0,.5)}.stats[_ngcontent-%COMP%]{color:rgba(187,44,0,.7);font-size:small}.stat[_ngcontent-%COMP%]{border-bottom:1px solid rgba(219,62,0,.63);padding-bottom:2px;margin-bottom:2px}.not-affiliated[_ngcontent-%COMP%]{display:flex;flex:1 1 auto;flex-direction:column;align-items:center;justify-content:center;color:rgba(187,44,0,.7);font-size:small}"]}),t})();var y=e("0MNC"),I=e("sC04");const P=["*"];let B=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=c.Gb({type:t,selectors:[["ed-tab-title"]],ngContentSelectors:P,decls:1,vars:0,template:function(t,o){1&t&&(c.hc(),c.gc(0))},styles:["[_nghost-%COMP%]{display:flex;flex-direction:row;border-bottom:1px solid rgba(219,62,0,.63);font-size:xx-large;color:#fff;padding:8px;align-items:center}"]}),t})();var _=e("eihG"),N=e("dv7y"),k=e("l7vO"),D=e("65hZ");function G(t,o){if(1&t&&c.Nb(0,"img",5),2&t){const t=c.dc();c.ic("src","assets/"+t.corporation.logo,c.pc)}}let E=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=c.Gb({type:t,selectors:[["corporation-overview"]],inputs:{corporation:"corporation"},decls:26,vars:1,consts:[["size","300px"],["width","100%",3,"src",4,"ngIf"],[1,"profile"],["state","active"],[1,"prerequisites"],["width","100%",3,"src"]],template:function(t,o){1&t&&(c.Sb(0,"ed-frame",0),c.tc(1,G,1,1,"img",1),c.Sb(2,"ed-button-group"),c.Sb(3,"div",2),c.Sb(4,"h4"),c.vc(5,"Corporation profile"),c.Rb(),c.Sb(6,"ed-button",3),c.vc(7,"Overview"),c.Rb(),c.Sb(8,"ed-button",3),c.vc(9,"CEO"),c.Rb(),c.Sb(10,"ed-button",3),c.vc(11,"Charter"),c.Rb(),c.Rb(),c.Nb(12,"ed-frame-spacer"),c.Sb(13,"div",4),c.Sb(14,"h4"),c.vc(15,"Prerequisites for affiliation"),c.Rb(),c.Sb(16,"ed-button",3),c.vc(17,"Experience"),c.Rb(),c.Sb(18,"ed-button",3),c.vc(19,"Faction alliances"),c.Rb(),c.Sb(20,"ed-button",3),c.vc(21,"Fleet composition"),c.Rb(),c.Sb(22,"ed-button",3),c.vc(23,"Crimimal record"),c.Rb(),c.Rb(),c.Rb(),c.Rb(),c.Nb(24,"ed-frame-spacer"),c.Nb(25,"ed-frame")),2&t&&(c.Bb(1),c.ic("ngIf",o.corporation.logo))},directives:[m.a,n.j,k.a,s.a,D.a],styles:["[_nghost-%COMP%]{display:flex;flex:1 1 auto;flex-direction:row}.prerequisites[_ngcontent-%COMP%], .profile[_ngcontent-%COMP%]{margin-top:8px}"]}),t})();function A(t,o){if(1&t&&(c.Nb(0,"div",2),c.Sb(1,"div",3),c.Sb(2,"div",4),c.vc(3),c.Rb(),c.Sb(4,"div",5),c.vc(5),c.Rb(),c.Rb()),2&t){const t=o.$implicit;c.Bb(3),c.wc(t.name),c.Bb(2),c.wc(t.title)}}let z=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=c.Gb({type:t,selectors:[["corporation-contacts"]],inputs:{corporation:"corporation"},decls:5,vars:1,consts:[["size","300px"],[3,"data"],[1,"potrait"],[1,"textblock"],[1,"contact-name"],[1,"contact-title"]],template:function(t,o){1&t&&(c.Sb(0,"ed-frame",0),c.Sb(1,"ed-list",1),c.tc(2,A,6,2,"ng-template"),c.Rb(),c.Rb(),c.Nb(3,"ed-frame-spacer"),c.Nb(4,"ed-frame")),2&t&&(c.Bb(1),c.ic("data",o.corporation.contacts))},directives:[m.a,v.a,D.a],styles:["[_nghost-%COMP%]{display:flex;flex:1 1 auto;flex-direction:row}.potrait[_ngcontent-%COMP%]{width:64px;height:64px;border:1px dashed rgba(187,44,0,.5);margin-right:8px}.contact-name[_ngcontent-%COMP%]{margin-top:8px}.contact-title[_ngcontent-%COMP%]{font-size:small;color:rgba(187,44,0,.7)}"]}),t})();function j(t,o){1&t&&c.vc(0),2&t&&c.xc(" ",o.$implicit.name," ")}let $=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=c.Gb({type:t,selectors:[["corporation-goals"]],inputs:{corporation:"corporation"},decls:3,vars:1,consts:[["blockHeight","192px",3,"data"]],template:function(t,o){1&t&&(c.Sb(0,"ed-frame"),c.Sb(1,"ed-list",0),c.tc(2,j,1,1,"ng-template"),c.Rb(),c.Rb()),2&t&&(c.Bb(1),c.ic("data",o.corporation.goals))},directives:[m.a,v.a],styles:["[_nghost-%COMP%]{display:flex;flex:1 1 auto;flex-direction:row}"]}),t})();function J(t,o){if(1&t&&(c.Nb(0,"div",2),c.Sb(1,"div",3),c.Sb(2,"div",4),c.vc(3),c.Rb(),c.Sb(4,"div",5),c.vc(5,"Dave Munster"),c.Rb(),c.Rb()),2&t){const t=o.$implicit;c.Bb(3),c.wc(t.name)}}let T=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=c.Gb({type:t,selectors:[["corporation-assignments"]],inputs:{corporation:"corporation"},decls:5,vars:1,consts:[["size","400px"],[3,"data"],[1,"potrait"],[1,"textblock"],[1,"assignment-name"],[1,"assignment-contact"]],template:function(t,o){1&t&&(c.Sb(0,"ed-frame",0),c.Sb(1,"ed-list",1),c.tc(2,J,6,1,"ng-template"),c.Rb(),c.Rb(),c.Nb(3,"ed-frame-spacer"),c.Nb(4,"ed-frame")),2&t&&(c.Bb(1),c.ic("data",o.corporation.assignments))},directives:[m.a,v.a,D.a],styles:["[_nghost-%COMP%]{display:flex;flex:1 1 auto;flex-direction:row}.potrait[_ngcontent-%COMP%]{width:64px;height:64px;border:1px dashed rgba(187,44,0,.5);margin-right:8px}.assignment-name[_ngcontent-%COMP%]{margin-top:8px;color:#fff}"]}),t})(),q=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=c.Gb({type:t,selectors:[["corporation-benefits"]],inputs:{corporation:"corporation"},decls:1,vars:0,template:function(t,o){1&t&&c.Nb(0,"ed-frame")},directives:[m.a],styles:["[_nghost-%COMP%]{display:flex;flex:1 1 auto;flex-direction:row}"]}),t})(),F=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=c.Gb({type:t,selectors:[["corporation-codex"]],inputs:{corporation:"corporation"},decls:1,vars:0,template:function(t,o){1&t&&c.Nb(0,"ed-frame")},directives:[m.a],styles:["[_nghost-%COMP%]{display:flex;flex:1 1 auto;flex-direction:row}"]}),t})();var Q=e("vtIR");function V(t,o){if(1&t&&(c.Qb(0),c.Sb(1,"ed-tabs",3),c.Sb(2,"ed-tab-title"),c.Nb(3,"ed-icon",4),c.vc(4),c.Rb(),c.Sb(5,"ed-tab",5),c.Nb(6,"corporation-overview",6),c.Rb(),c.Sb(7,"ed-tab",7),c.Nb(8,"corporation-contacts",6),c.Rb(),c.Sb(9,"ed-tab",8),c.Nb(10,"corporation-goals",6),c.Rb(),c.Sb(11,"ed-tab",9),c.Nb(12,"corporation-assignments",6),c.Rb(),c.Sb(13,"ed-tab",10),c.Nb(14,"corporation-benefits",6),c.Rb(),c.Sb(15,"ed-tab",11),c.Nb(16,"corporation-codex",6),c.Rb(),c.Rb(),c.Pb()),2&t){const t=c.dc(2);c.Bb(4),c.xc(" \xa0",t.corporation.name," "),c.Bb(2),c.ic("corporation",t.corporation),c.Bb(1),c.ic("seperator",!0)("disabled",!t.corporation.affiliated),c.Bb(1),c.ic("corporation",t.corporation),c.Bb(1),c.ic("disabled",!t.corporation.affiliated),c.Bb(1),c.ic("corporation",t.corporation),c.Bb(1),c.ic("seperator",!0)("disabled",!t.corporation.affiliated),c.Bb(1),c.ic("corporation",t.corporation),c.Bb(1),c.ic("disabled",!t.corporation.affiliated),c.Bb(1),c.ic("corporation",t.corporation),c.Bb(1),c.ic("disabled",!t.corporation.affiliated),c.Bb(1),c.ic("corporation",t.corporation)}}function H(t,o){if(1&t&&(c.Nb(0,"ed-title",12),c.Sb(1,"ed-tabs-navigator",3),c.Sb(2,"ed-tab",13),c.vc(3," Overview "),c.Rb(),c.Sb(4,"ed-tab",14),c.vc(5," Contacts "),c.Rb(),c.Sb(6,"ed-tab",15),c.vc(7," Goals "),c.Rb(),c.Sb(8,"ed-tab",16),c.vc(9," Assignments "),c.Rb(),c.Sb(10,"ed-tab",17),c.vc(11," Benefits "),c.Rb(),c.Sb(12,"ed-tab",18),c.vc(13," Codex "),c.Rb(),c.Rb()),2&t){const t=c.dc(2);c.ic("name",t.corporation.name),c.Bb(4),c.ic("seperator",!0),c.Bb(4),c.ic("seperator",!0)}}function K(t,o){if(1&t&&(c.Qb(0),c.tc(1,V,17,14,"ng-container",1),c.tc(2,H,14,3,"ng-template",null,2,c.uc),c.Pb()),2&t){const t=c.mc(3),o=c.dc();c.Bb(1),c.ic("ngIf",!o.compactMode)("ngIfElse",t)}}const W=[{path:"",component:l,children:[{path:"",component:M},{path:":id",component:(()=>{class t{constructor(t,o,e){this.route=t,this.breakpointObserver=o,this.corporationService=e,this.compactMode=!1,this.route.params.subscribe(t=>{this.corporationService.getCorporation(t.id).subscribe(t=>{this.corporation=t})}),this.breakpointObserver.observe("(max-width: 1280px)").subscribe(t=>{this.compactMode=t.matches})}ngOnInit(){}}return t.\u0275fac=function(o){return new(o||t)(c.Mb(a.a),c.Mb(y.a),c.Mb(g))},t.\u0275cmp=c.Gb({type:t,selectors:[["ng-component"]],decls:1,vars:1,consts:[[4,"ngIf"],[4,"ngIf","ngIfElse"],["compactTemplate",""],["activeTab","Overview"],["icon","corporation"],["name","Overview"],[3,"corporation"],["name","Contacts",3,"seperator","disabled"],["name","Goals",3,"disabled"],["name","Assignments",3,"seperator","disabled"],["name","Benefits",3,"disabled"],["name","Codex",3,"disabled"],["icon","corporation","description","Information about the corporation",3,"name"],["name","Overview","description","General information about the corporation"],["name","Contacts",3,"seperator"],["name","Goals"],["name","Assignments",3,"seperator"],["name","Benefits"],["name","Codex"]],template:function(t,o){1&t&&c.tc(0,K,4,2,"ng-container",0),2&t&&c.ic("ngIf",o.corporation)},directives:[n.j,I.a,B,_.a,N.a,E,z,$,T,q,F,u.a,Q.a],styles:["[_nghost-%COMP%]{display:flex;flex:1 1 auto;flex-direction:column;height:100%}ed-icon[icon=corporation][_ngcontent-%COMP%]{stroke:#fff;fill:#fff}"]}),t})()}]}];let X=(()=>{class t{}return t.\u0275mod=c.Kb({type:t}),t.\u0275inj=c.Jb({factory:function(o){return new(o||t)},imports:[[a.c.forChild(W)],a.c]}),t})(),L=(()=>{class t{}return t.\u0275mod=c.Kb({type:t}),t.\u0275inj=c.Jb({factory:function(o){return new(o||t)},imports:[[n.b,i.a,X]]}),t})()},l7vO:function(t,o,e){"use strict";e.d(o,"a",(function(){return c}));var n=e("fXoL"),i=e("qO2F");const a=["*"];let c=(()=>{class t{constructor(){this.buttons=new n.D,this.press=new n.n,this.subscriptions=[]}ngOnInit(){this.buttons.changes.subscribe(()=>{this.resetSubscriptions()})}ngAfterViewInit(){this.resetSubscriptions()}onPress(t){"active"===t.state&&(t.state="selected",this.resetActive(t),this.press.emit(t))}resetSubscriptions(){for(const t of this.subscriptions)t.unsubscribe();this.subscriptions=[];for(const t of this.buttons.toArray())this.subscriptions.push(t.press.subscribe(()=>this.onPress(t)))}resetActive(t){for(const o of this.buttons)o!==t&&"selected"===o.state&&(o.state="active")}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=n.Gb({type:t,selectors:[["ed-button-group"]],contentQueries:function(t,o,e){var a;1&t&&n.Eb(e,i.a,!0),2&t&&n.lc(a=n.bc())&&(o.buttons=a)},outputs:{press:"press"},ngContentSelectors:a,decls:1,vars:0,template:function(t,o){1&t&&(n.hc(),n.gc(0))},styles:[""]}),t})()}}]);