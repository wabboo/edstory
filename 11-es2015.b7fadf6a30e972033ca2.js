(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{C7Sl:function(t,o,e){"use strict";e.r(o),e.d(o,"CorporationsModule",function(){return U});var n=e("ofXK"),i=e("IVc4"),a=e("tyNb"),s=e("fXoL"),c=e("OcQ2"),r=e("qO2F");let l=(()=>{class t{constructor(t){this.router=t}ngOnInit(){}onBack(){history.back()}onExit(){this.router.navigateByUrl("/ship/cockpit")}}return t.\u0275fac=function(o){return new(o||t)(s.Lb(a.b))},t.\u0275cmp=s.Fb({type:t,selectors:[["ng-component"]],decls:8,vars:0,consts:[[1,"content"],[1,"navigation"],[3,"click"]],template:function(t,o){1&t&&(s.Rb(0,"ed-window"),s.Rb(1,"div",0),s.Mb(2,"router-outlet"),s.Qb(),s.Rb(3,"div",1),s.Rb(4,"ed-button",2),s.Yb("click",function(){return o.onBack()}),s.sc(5,"Back"),s.Qb(),s.Rb(6,"ed-button",2),s.Yb("click",function(){return o.onExit()}),s.sc(7,"Exit"),s.Qb(),s.Qb(),s.Qb())},directives:[c.a,a.d,r.a],styles:["[_nghost-%COMP%]{height:100%;z-index:100}.content[_ngcontent-%COMP%], [_nghost-%COMP%]{display:flex;flex:1 1 auto;flex-direction:column}.content[_ngcontent-%COMP%]{overflow:hidden}.navigation[_ngcontent-%COMP%]{display:flex;flex-direction:row;margin-top:8px;padding-top:8px;border-top:1px solid rgba(187,44,0,.5)}.navigation[_ngcontent-%COMP%]   ed-button[_ngcontent-%COMP%]{width:160px;margin-right:16px;text-align:center}"]}),t})();var b=e("2Vo4");class p{constructor(){this.contacts=[],this.goals=[],this.benefits=[],this.assignments=[]}}var f=e("tk/3");const d='[{"corporationID":2,"name":"Caine-Massey","logo":"logo11.png","affiliated":false,"contacts":0,"goals":0,"assignments":0,"benefits":0,"codex":0},{"corporationID":101,"name":"Canonn","logo":"logo10.png","affiliated":false,"contacts":0,"goals":0,"assignments":0,"benefits":0,"codex":0},{"corporationID":102,"name":"Fuel rats","logo":"logo8.png","affiliated":false,"contacts":0,"goals":0,"assignments":0,"benefits":0,"codex":0},{"corporationID":103,"name":"Hutton orbital truckers","logo":"logo9.png","affiliated":false,"contacts":0,"goals":0,"assignments":0,"benefits":0,"codex":0},{"corporationID":3,"name":"Mastapolos Mining","logo":"logo4.png","affiliated":false,"contacts":0,"goals":0,"assignments":0,"benefits":0,"codex":0},{"corporationID":4,"name":"Neomedical Industries","logo":"logo15.png","affiliated":false,"contacts":0,"goals":0,"assignments":0,"benefits":0,"codex":0},{"corporationID":5,"name":"Rockforth Corporation","logo":"logo12.png","affiliated":false,"contacts":0,"goals":0,"assignments":0,"benefits":0,"codex":0},{"corporationID":6,"name":"Sirius Corporation","logo":"logo6.png","affiliated":false,"contacts":0,"goals":0,"assignments":0,"benefits":0,"codex":0},{"corporationID":1,"name":"The Achilles Corporation","logo":"logo1.png","affiliated":false,"contacts":0,"goals":0,"assignments":0,"benefits":0,"codex":0},{"corporationID":7,"name":"Universal Cartographics","logo":"logo7.png","affiliated":false,"contacts":0,"goals":0,"assignments":0,"benefits":0,"codex":0},{"corporationID":8,"name":"Vandermeer Corporation","logo":"logo14.png","affiliated":false,"contacts":0,"goals":0,"assignments":0,"benefits":0,"codex":0},{"corporationID":9,"name":"WorldCraft","logo":"logo13.png","affiliated":false,"contacts":0,"goals":0,"assignments":0,"benefits":0,"codex":0}]';let g=(()=>{class t{constructor(t){this.httpClient=t}getCorporations(){return new b.a(JSON.parse(d))}getCorporation(t){const o=JSON.parse(d);for(const e of o)if(e.corporationID==t){const t=new p;return t.corporationID=e.corporationID,t.name=e.name,t.logo=e.logo,new b.a(t)}}}return t.\u0275fac=function(o){return new(o||t)(s.Vb(f.b))},t.\u0275prov=s.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var u=e("EY6u"),m=e("sP8S"),h=e("DE09");const x=["*"];let v=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=s.Fb({type:t,selectors:[["ed-name-value"]],inputs:{name:"name"},ngContentSelectors:x,decls:4,vars:1,consts:[[1,"name"],[1,"value"]],template:function(t,o){1&t&&(s.fc(),s.Rb(0,"div",0),s.sc(1),s.Qb(),s.Rb(2,"div",1),s.ec(3),s.Qb()),2&t&&(s.Bb(1),s.tc(o.name))},styles:["[_nghost-%COMP%]{flex:1 1 auto;flex-direction:row}.name[_ngcontent-%COMP%], [_nghost-%COMP%]{display:flex}.name[_ngcontent-%COMP%]{flex:1 1 auto}.value[_ngcontent-%COMP%]{margin-right:8px}"]}),t})();function C(t,o){if(1&t&&s.Mb(0,"img",8),2&t){const t=s.bc().$implicit;s.gc("src","assets/"+t.logo,s.nc)}}function M(t,o){if(1&t&&s.sc(0),2&t){const t=s.bc().$implicit;s.uc(" ",t.name," ")}}function O(t,o){1&t&&(s.Rb(0,"div",9),s.sc(1," Not affiliated "),s.Qb())}function Q(t,o){if(1&t&&(s.Rb(0,"div",10),s.sc(1,"Details"),s.Qb(),s.Rb(2,"div",11),s.Rb(3,"ed-name-value",12),s.sc(4),s.Qb(),s.Rb(5,"ed-name-value",13),s.sc(6),s.Qb(),s.Rb(7,"ed-name-value",14),s.sc(8),s.Qb(),s.Rb(9,"ed-name-value",15),s.sc(10),s.Qb(),s.Rb(11,"ed-name-value",16),s.sc(12),s.Qb(),s.Qb()),2&t){const t=s.bc().$implicit;s.Bb(4),s.tc(t.contacts),s.Bb(2),s.tc(t.goals),s.Bb(2),s.tc(t.assignments),s.Bb(2),s.tc(t.benefits),s.Bb(2),s.tc(t.codex)}}function R(t,o){if(1&t&&(s.Rb(0,"div",2),s.Rb(1,"div",3),s.qc(2,C,1,1,"img",4),s.qc(3,M,1,1,"ng-template",null,5,s.rc),s.Qb(),s.qc(5,O,2,0,"div",6),s.qc(6,Q,13,5,"ng-template",null,7,s.rc),s.Qb()),2&t){const t=o.$implicit,e=s.kc(4),n=s.kc(7);s.Bb(2),s.gc("ngIf",t.logo)("ngIfElse",e),s.Bb(3),s.gc("ngIf",!t.affiliated)("ngIfElse",n)}}let w=(()=>{class t{constructor(t,o,e){this.router=t,this.route=o,this.corporationService=e,this.corporations=[]}ngOnInit(){this.corporationService.getCorporations().subscribe(t=>{this.corporations=t})}onSelectedChange(t){this.router.navigate([t.corporationID],{relativeTo:this.route})}}return t.\u0275fac=function(o){return new(o||t)(s.Lb(a.b),s.Lb(a.a),s.Lb(g))},t.\u0275cmp=s.Fb({type:t,selectors:[["ng-component"]],decls:4,vars:1,consts:[["icon","corporation","name","Corporations","description","The corporations you are aware of"],["blockWidth","256px","blockHeight","272px","spacing","16px",3,"data","selectedChange"],[1,"corporationblock"],[1,"logo"],["height","100%",3,"src",4,"ngIf","ngIfElse"],["corporationName",""],["class","not-affiliated",4,"ngIf","ngIfElse"],["affiliatedTemplate",""],["height","100%",3,"src"],[1,"not-affiliated"],[1,"header"],[1,"stats"],["name","Contacts"],["name","Goals"],["name","Assignments"],["name","Benefits"],["name","Codex entries"]],template:function(t,o){1&t&&(s.Mb(0,"ed-title",0),s.Rb(1,"ed-frame"),s.Rb(2,"ed-list",1),s.Yb("selectedChange",function(t){return o.onSelectedChange(t)}),s.qc(3,R,8,4,"ng-template"),s.Qb(),s.Qb()),2&t&&(s.Bb(2),s.gc("data",o.corporations))},directives:[u.a,m.a,h.a,n.j,v],styles:["[_nghost-%COMP%]{flex:1 1 auto;flex-direction:column}[_nghost-%COMP%], ed-list[_ngcontent-%COMP%]{display:flex;height:100%}ed-list[_ngcontent-%COMP%]{flex:1 1 auto}.corporationblock[_ngcontent-%COMP%]{display:flex;flex:1 1 auto;flex-direction:column;margin:8px}.logo[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:100%;height:96px;border:1px dashed rgba(187,44,0,.5);margin-bottom:8px;align-items:center;justify-content:center}.header[_ngcontent-%COMP%]{padding-bottom:4px;margin-bottom:4px;border-bottom:1px solid rgba(187,44,0,.5)}.stats[_ngcontent-%COMP%]{color:rgba(187,44,0,.7);font-size:small}.stat[_ngcontent-%COMP%]{border-bottom:1px solid rgba(219,62,0,.63);padding-bottom:2px;margin-bottom:2px}.not-affiliated[_ngcontent-%COMP%]{display:flex;flex:1 1 auto;flex-direction:column;align-items:center;justify-content:center;color:rgba(187,44,0,.7);font-size:small}"]}),t})();var I=e("0MNC"),y=e("sC04");const P=["*"];let B=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=s.Fb({type:t,selectors:[["ed-tab-title"]],ngContentSelectors:P,decls:1,vars:0,template:function(t,o){1&t&&(s.fc(),s.ec(0))},styles:["[_nghost-%COMP%]{display:flex;flex-direction:row;border-bottom:1px solid rgba(219,62,0,.63);font-size:xx-large;color:#fff;padding:8px;align-items:center}"]}),t})();var _=e("eihG"),k=e("dv7y"),D=e("l7vO"),q=e("65hZ");function F(t,o){if(1&t&&s.Mb(0,"img",5),2&t){const t=s.bc();s.gc("src","assets/"+t.corporation.logo,s.nc)}}let S=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=s.Fb({type:t,selectors:[["corporation-overview"]],inputs:{corporation:"corporation"},decls:26,vars:1,consts:[["size","300px"],["width","100%",3,"src",4,"ngIf"],[1,"profile"],["state","active"],[1,"prerequisites"],["width","100%",3,"src"]],template:function(t,o){1&t&&(s.Rb(0,"ed-frame",0),s.qc(1,F,1,1,"img",1),s.Rb(2,"ed-button-group"),s.Rb(3,"div",2),s.Rb(4,"h4"),s.sc(5,"Corporation profile"),s.Qb(),s.Rb(6,"ed-button",3),s.sc(7,"Overview"),s.Qb(),s.Rb(8,"ed-button",3),s.sc(9,"CEO"),s.Qb(),s.Rb(10,"ed-button",3),s.sc(11,"Charter"),s.Qb(),s.Qb(),s.Mb(12,"ed-frame-spacer"),s.Rb(13,"div",4),s.Rb(14,"h4"),s.sc(15,"Prerequisites for affiliation"),s.Qb(),s.Rb(16,"ed-button",3),s.sc(17,"Experience"),s.Qb(),s.Rb(18,"ed-button",3),s.sc(19,"Faction alliances"),s.Qb(),s.Rb(20,"ed-button",3),s.sc(21,"Fleet composition"),s.Qb(),s.Rb(22,"ed-button",3),s.sc(23,"Crimimal record"),s.Qb(),s.Qb(),s.Qb(),s.Qb(),s.Mb(24,"ed-frame-spacer"),s.Mb(25,"ed-frame")),2&t&&(s.Bb(1),s.gc("ngIf",o.corporation.logo))},directives:[m.a,n.j,D.a,r.a,q.a],styles:["[_nghost-%COMP%]{display:flex;flex:1 1 auto;flex-direction:row}.prerequisites[_ngcontent-%COMP%], .profile[_ngcontent-%COMP%]{margin-top:8px}"]}),t})();function E(t,o){if(1&t&&(s.Mb(0,"div",2),s.Rb(1,"div",3),s.Rb(2,"div",4),s.sc(3),s.Qb(),s.Rb(4,"div",5),s.sc(5),s.Qb(),s.Qb()),2&t){const t=o.$implicit;s.Bb(3),s.tc(t.name),s.Bb(2),s.tc(t.title)}}let A=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=s.Fb({type:t,selectors:[["corporation-contacts"]],inputs:{corporation:"corporation"},decls:5,vars:1,consts:[["size","300px"],[3,"data"],[1,"potrait"],[1,"textblock"],[1,"contact-name"],[1,"contact-title"]],template:function(t,o){1&t&&(s.Rb(0,"ed-frame",0),s.Rb(1,"ed-list",1),s.qc(2,E,6,2,"ng-template"),s.Qb(),s.Qb(),s.Mb(3,"ed-frame-spacer"),s.Mb(4,"ed-frame")),2&t&&(s.Bb(1),s.gc("data",o.corporation.contacts))},directives:[m.a,h.a,q.a],styles:["[_nghost-%COMP%]{display:flex;flex:1 1 auto;flex-direction:row}.potrait[_ngcontent-%COMP%]{width:64px;height:64px;border:1px dashed rgba(187,44,0,.5);margin-right:8px}.contact-name[_ngcontent-%COMP%]{margin-top:8px}.contact-title[_ngcontent-%COMP%]{font-size:small;color:rgba(187,44,0,.7)}"]}),t})();function L(t,o){1&t&&s.sc(0),2&t&&s.uc(" ",o.$implicit.name," ")}let j=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=s.Fb({type:t,selectors:[["corporation-goals"]],inputs:{corporation:"corporation"},decls:3,vars:1,consts:[["blockHeight","192px",3,"data"]],template:function(t,o){1&t&&(s.Rb(0,"ed-frame"),s.Rb(1,"ed-list",0),s.qc(2,L,1,1,"ng-template"),s.Qb(),s.Qb()),2&t&&(s.Bb(1),s.gc("data",o.corporation.goals))},directives:[m.a,h.a],styles:["[_nghost-%COMP%]{display:flex;flex:1 1 auto;flex-direction:row}"]}),t})();function z(t,o){if(1&t&&(s.Mb(0,"div",2),s.Rb(1,"div",3),s.Rb(2,"div",4),s.sc(3),s.Qb(),s.Rb(4,"div",5),s.sc(5,"Dave Munster"),s.Qb(),s.Qb()),2&t){const t=o.$implicit;s.Bb(3),s.tc(t.name)}}let N=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=s.Fb({type:t,selectors:[["corporation-assignments"]],inputs:{corporation:"corporation"},decls:5,vars:1,consts:[["size","400px"],[3,"data"],[1,"potrait"],[1,"textblock"],[1,"assignment-name"],[1,"assignment-contact"]],template:function(t,o){1&t&&(s.Rb(0,"ed-frame",0),s.Rb(1,"ed-list",1),s.qc(2,z,6,1,"ng-template"),s.Qb(),s.Qb(),s.Mb(3,"ed-frame-spacer"),s.Mb(4,"ed-frame")),2&t&&(s.Bb(1),s.gc("data",o.corporation.assignments))},directives:[m.a,h.a,q.a],styles:["[_nghost-%COMP%]{display:flex;flex:1 1 auto;flex-direction:row}.potrait[_ngcontent-%COMP%]{width:64px;height:64px;border:1px dashed rgba(187,44,0,.5);margin-right:8px}.assignment-name[_ngcontent-%COMP%]{margin-top:8px;color:#fff}"]}),t})(),$=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=s.Fb({type:t,selectors:[["corporation-benefits"]],inputs:{corporation:"corporation"},decls:1,vars:0,template:function(t,o){1&t&&s.Mb(0,"ed-frame")},directives:[m.a],styles:["[_nghost-%COMP%]{display:flex;flex:1 1 auto;flex-direction:row}"]}),t})(),G=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=s.Fb({type:t,selectors:[["corporation-codex"]],inputs:{corporation:"corporation"},decls:1,vars:0,template:function(t,o){1&t&&s.Mb(0,"ed-frame")},directives:[m.a],styles:["[_nghost-%COMP%]{display:flex;flex:1 1 auto;flex-direction:row}"]}),t})();var J=e("vtIR");function T(t,o){if(1&t&&(s.Pb(0),s.Rb(1,"ed-tabs",3),s.Rb(2,"ed-tab-title"),s.Mb(3,"ed-icon",4),s.sc(4),s.Qb(),s.Rb(5,"ed-tab",5),s.Mb(6,"corporation-overview",6),s.Qb(),s.Rb(7,"ed-tab",7),s.Mb(8,"corporation-contacts",6),s.Qb(),s.Rb(9,"ed-tab",8),s.Mb(10,"corporation-goals",6),s.Qb(),s.Rb(11,"ed-tab",9),s.Mb(12,"corporation-assignments",6),s.Qb(),s.Rb(13,"ed-tab",10),s.Mb(14,"corporation-benefits",6),s.Qb(),s.Rb(15,"ed-tab",11),s.Mb(16,"corporation-codex",6),s.Qb(),s.Qb(),s.Ob()),2&t){const t=s.bc(2);s.Bb(4),s.uc(" \xa0",t.corporation.name," "),s.Bb(2),s.gc("corporation",t.corporation),s.Bb(1),s.gc("seperator",!0)("disabled",!t.corporation.affiliated),s.Bb(1),s.gc("corporation",t.corporation),s.Bb(1),s.gc("disabled",!t.corporation.affiliated),s.Bb(1),s.gc("corporation",t.corporation),s.Bb(1),s.gc("seperator",!0)("disabled",!t.corporation.affiliated),s.Bb(1),s.gc("corporation",t.corporation),s.Bb(1),s.gc("disabled",!t.corporation.affiliated),s.Bb(1),s.gc("corporation",t.corporation),s.Bb(1),s.gc("disabled",!t.corporation.affiliated),s.Bb(1),s.gc("corporation",t.corporation)}}function V(t,o){if(1&t&&(s.Mb(0,"ed-title",12),s.Rb(1,"ed-tabs-navigator",3),s.Rb(2,"ed-tab",13),s.sc(3," Overview "),s.Qb(),s.Rb(4,"ed-tab",14),s.sc(5," Contacts "),s.Qb(),s.Rb(6,"ed-tab",15),s.sc(7," Goals "),s.Qb(),s.Rb(8,"ed-tab",16),s.sc(9," Assignments "),s.Qb(),s.Rb(10,"ed-tab",17),s.sc(11," Benefits "),s.Qb(),s.Rb(12,"ed-tab",18),s.sc(13," Codex "),s.Qb(),s.Qb()),2&t){const t=s.bc(2);s.gc("name",t.corporation.name),s.Bb(4),s.gc("seperator",!0),s.Bb(4),s.gc("seperator",!0)}}function H(t,o){if(1&t&&(s.Pb(0),s.qc(1,T,17,14,"ng-container",1),s.qc(2,V,14,3,"ng-template",null,2,s.rc),s.Ob()),2&t){const t=s.kc(3),o=s.bc();s.Bb(1),s.gc("ngIf",!o.compactMode)("ngIfElse",t)}}const Y=[{path:"",component:l,children:[{path:"",component:w},{path:":id",component:(()=>{class t{constructor(t,o,e){this.route=t,this.breakpointObserver=o,this.corporationService=e,this.compactMode=!1,this.route.params.subscribe(t=>{this.corporationService.getCorporation(t.id).subscribe(t=>{this.corporation=t})}),this.breakpointObserver.observe("(max-width: 1280px)").subscribe(t=>{this.compactMode=t.matches})}ngOnInit(){}}return t.\u0275fac=function(o){return new(o||t)(s.Lb(a.a),s.Lb(I.a),s.Lb(g))},t.\u0275cmp=s.Fb({type:t,selectors:[["ng-component"]],decls:1,vars:1,consts:[[4,"ngIf"],[4,"ngIf","ngIfElse"],["compactTemplate",""],["activeTab","Overview"],["icon","corporation"],["name","Overview"],[3,"corporation"],["name","Contacts",3,"seperator","disabled"],["name","Goals",3,"disabled"],["name","Assignments",3,"seperator","disabled"],["name","Benefits",3,"disabled"],["name","Codex",3,"disabled"],["icon","corporation","description","Information about the corporation",3,"name"],["name","Overview","description","General information about the corporation"],["name","Contacts",3,"seperator"],["name","Goals"],["name","Assignments",3,"seperator"],["name","Benefits"],["name","Codex"]],template:function(t,o){1&t&&s.qc(0,H,4,2,"ng-container",0),2&t&&s.gc("ngIf",o.corporation)},directives:[n.j,y.a,B,_.a,k.a,S,A,j,N,$,G,u.a,J.a],styles:["[_nghost-%COMP%]{display:flex;flex:1 1 auto;flex-direction:column;height:100%}ed-icon[icon=corporation][_ngcontent-%COMP%]{stroke:#fff;fill:#fff}"]}),t})()}]}];let X=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=s.Jb({type:t}),t.\u0275inj=s.Ib({imports:[[a.c.forChild(Y)],a.c]}),t})(),U=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=s.Jb({type:t}),t.\u0275inj=s.Ib({imports:[[n.b,i.a,X]]}),t})()},l7vO:function(t,o,e){"use strict";e.d(o,"a",function(){return s});var n=e("fXoL"),i=e("qO2F");const a=["*"];let s=(()=>{class t{constructor(){this.buttons=new n.E,this.press=new n.n,this.subscriptions=[]}ngOnInit(){this.buttons.changes.subscribe(()=>{this.resetSubscriptions()})}ngAfterViewInit(){this.resetSubscriptions()}onPress(t){"active"===t.state&&(t.state="selected",this.resetActive(t),this.press.emit(t))}resetSubscriptions(){for(const t of this.subscriptions)t.unsubscribe();this.subscriptions=[];for(const t of this.buttons.toArray())this.subscriptions.push(t.press.subscribe(()=>this.onPress(t)))}resetActive(t){for(const o of this.buttons)o!==t&&"selected"===o.state&&(o.state="active")}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=n.Fb({type:t,selectors:[["ed-button-group"]],contentQueries:function(t,o,e){if(1&t&&n.Eb(e,i.a,1),2&t){let t;n.jc(t=n.Zb())&&(o.buttons=t)}},outputs:{press:"press"},ngContentSelectors:a,decls:1,vars:0,template:function(t,o){1&t&&(n.fc(),n.ec(0))},styles:[""]}),t})()}}]);