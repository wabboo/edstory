!function(){function e(t,n){return(e=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(t,n)}function t(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var c,o=r(e);if(t){var i=r(this).constructor;c=Reflect.construct(o,arguments,i)}else c=o.apply(this,arguments);return n(this,c)}}function n(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{lmR2:function(n,r,o){"use strict";o.r(r),o.d(r,"MenuModule",function(){return D});var s,a=o("ofXK"),u=o("DzGr"),h=o("IVc4"),l=o("tyNb"),f=o("fXoL"),d=((s=function(){function e(){c(this,e)}return i(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(e){return new(e||s)},s.\u0275cmp=f.Fb({type:s,selectors:[["app-menu"]],decls:1,vars:0,template:function(e,t){1&e&&f.Mb(0,"router-outlet")},directives:[l.d],styles:["[_nghost-%COMP%]{display:flex;flex:1 1 auto;flex-direction:column;height:100%;justify-content:center;align-items:center;background:url(/assets/backgrounds/main2.jpg);background-size:cover}"]}),s),g=o("4A+J"),b=o("OcQ2"),p=o("OEjf"),m=o("eihG");function k(e,t){1&e&&f.Mb(0,"ed-icon",3)}function v(e,t){1&e&&f.Mb(0,"ed-icon",4)}var y,C,M,w=["*"],O=((y=function(){function e(){c(this,e),this.state="active",this.checkedChange=new f.n}return i(e,[{key:"checked",get:function(){return this.checkedValue},set:function(e){this.checkedValue=e,this.checkedChange.emit(e)}},{key:"ngOnInit",value:function(){}},{key:"getCssClass",value:function(){var e=" checked";switch(this.checkedValue||(e=" unchecked"),this.state){case"active":return"container active"+e;case"selected":return"container selected"+e;case"disabled":return"container disabled"+e;case"blocked":return"container blocked"+e}}},{key:"onClick",value:function(){"active"===this.state&&(this.checked=!this.checked)}}]),e}()).\u0275fac=function(e){return new(e||y)},y.\u0275cmp=f.Fb({type:y,selectors:[["ed-check"]],inputs:{state:"state",checked:"checked"},outputs:{checkedChange:"checkedChange"},ngContentSelectors:w,decls:4,vars:3,consts:[[3,"ngClass","click"],["icon","checked","size","3",4,"ngIf"],["icon","unchecked","size","3",4,"ngIf"],["icon","checked","size","3"],["icon","unchecked","size","3"]],template:function(e,t){1&e&&(f.fc(),f.Rb(0,"div",0),f.Yb("click",function(){return t.onClick()}),f.qc(1,k,1,0,"ed-icon",1),f.qc(2,v,1,0,"ed-icon",2),f.ec(3),f.Qb()),2&e&&(f.gc("ngClass",t.getCssClass()),f.Bb(1),f.gc("ngIf",t.checked),f.Bb(1),f.gc("ngIf",!t.checked))},directives:[a.h,a.j,m.a],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;margin-bottom:4px}.container[_ngcontent-%COMP%]{box-sizing:border-box;height:4vh;display:flex;flex-direction:row;align-items:center;padding-left:.5vw;font-size:1.7vh}ed-icon[_ngcontent-%COMP%]{margin-right:8px}.checked[_ngcontent-%COMP%]{color:#ff6105;stroke:#ff6105}.unchecked[_ngcontent-%COMP%]{color:rgba(187,44,0,.7);stroke:rgba(187,44,0,.7)}.active[_ngcontent-%COMP%]{background:rgba(64,8,0,.55)}.container.active[_ngcontent-%COMP%]:hover{background:#f07b05;color:rgba(54,14,0,.95)}.selected[_ngcontent-%COMP%]{background:rgba(175,16,0,.5);color:#ff6105;border-right:8px solid #ff6105}.container.selected[_ngcontent-%COMP%]:hover{background:#f07b05;color:rgba(54,14,0,.95)}.disabled[_ngcontent-%COMP%]{background:rgba(48,48,48,.6862745098039216);color:#fff;stroke:#fff;fill:#fff}.blocked[_ngcontent-%COMP%]{background:rgba(56,0,0,.3764705882352941);color:#8e0000;stroke:#8e0000;fill:#8e0000}.container.blocked[_ngcontent-%COMP%]:hover{background:#8e0000;color:#000;stroke:#000;fill:#000}"]}),y),P=o("65hZ"),x=o("UNDe"),Y=o("qO2F"),_=o("F/yl"),S=((C=function(){function e(t,n,r){var o=this;c(this,e),this.router=t,this.route=n,this.commanderService=r,this.commanderService.features.subscribe(function(e){o.features=e})}return i(e,[{key:"ngOnInit",value:function(){}},{key:"updateFeatures",value:function(){this.commanderService.features.next(this.features)}},{key:"onBack",value:function(){history.back()}},{key:"onNavigateExperiment",value:function(e){this.router.navigate(["experiments",e],{relativeTo:this.route})}}]),e}()).\u0275fac=function(e){return new(e||C)(f.Lb(l.b),f.Lb(l.a),f.Lb(g.a))},C.\u0275cmp=f.Fb({type:C,selectors:[["ng-component"]],decls:34,vars:8,consts:[[1,"columns"],["state","blocked",3,"checked","checkedChange"],[3,"checked","checkedChange"],[3,"press"],["name","The Grid",3,"press"],["name","WebGL space viewer",3,"press"]],template:function(e,t){1&e&&(f.Rb(0,"ed-window"),f.Rb(1,"div",0),f.Rb(2,"ed-column"),f.Rb(3,"h1"),f.sc(4,"Updates"),f.Qb(),f.Rb(5,"ed-check",1),f.Yb("checkedChange",function(e){return t.features.odyssey=e})("checkedChange",function(){return t.updateFeatures()}),f.sc(6,"Odyssey"),f.Qb(),f.Rb(7,"ed-check",2),f.Yb("checkedChange",function(e){return t.features.fleetCarriers=e})("checkedChange",function(){return t.updateFeatures()}),f.sc(8,"Fleet carriers"),f.Qb(),f.Mb(9,"ed-frame-spacer"),f.Rb(10,"h1"),f.sc(11,"Alterations"),f.Qb(),f.Rb(12,"ed-check",2),f.Yb("checkedChange",function(e){return t.features.corporations=e})("checkedChange",function(){return t.updateFeatures()}),f.sc(13,"Corporations"),f.Qb(),f.Rb(14,"ed-check",2),f.Yb("checkedChange",function(e){return t.features.altNavigationPanel=e})("checkedChange",function(){return t.updateFeatures()}),f.sc(15,"Alternative navigation panel"),f.Qb(),f.Rb(16,"ed-check",1),f.Yb("checkedChange",function(e){return t.features.advisors=e})("checkedChange",function(){return t.updateFeatures()}),f.sc(17,"Advisors"),f.Qb(),f.Rb(18,"ed-check",1),f.Yb("checkedChange",function(e){return t.features.passengerLines=e})("checkedChange",function(){return t.updateFeatures()}),f.sc(19,"Passenger lines"),f.Qb(),f.Rb(20,"ed-check",1),f.Yb("checkedChange",function(e){return t.features.mechanic=e})("checkedChange",function(){return t.updateFeatures()}),f.sc(21,"Mechanic"),f.Qb(),f.Rb(22,"ed-check",1),f.Yb("checkedChange",function(e){return t.features.restructuredShipPanels=e})("checkedChange",function(){return t.updateFeatures()}),f.sc(23,"Restructured internal/external panels"),f.Qb(),f.Mb(24,"ed-frame-filler"),f.Rb(25,"ed-button",3),f.Yb("press",function(){return t.onBack()}),f.sc(26,"Back to ship"),f.Qb(),f.Qb(),f.Mb(27,"ed-frame-spacer"),f.Rb(28,"ed-column"),f.Rb(29,"h1"),f.sc(30,"Experiments"),f.Qb(),f.Rb(31,"ed-tile",4),f.Yb("press",function(){return t.onNavigateExperiment("thegrid")}),f.Qb(),f.Mb(32,"ed-frame-spacer"),f.Rb(33,"ed-tile",5),f.Yb("press",function(){return t.onNavigateExperiment("space")}),f.Qb(),f.Qb(),f.Qb(),f.Qb()),2&e&&(f.Bb(5),f.gc("checked",t.features.odyssey),f.Bb(2),f.gc("checked",t.features.fleetCarriers),f.Bb(5),f.gc("checked",t.features.corporations),f.Bb(2),f.gc("checked",t.features.altNavigationPanel),f.Bb(2),f.gc("checked",t.features.advisors),f.Bb(2),f.gc("checked",t.features.passengerLines),f.Bb(2),f.gc("checked",t.features.mechanic),f.Bb(2),f.gc("checked",t.features.restructuredShipPanels))},directives:[b.a,p.a,O,P.a,x.a,Y.a,_.a],styles:["[_nghost-%COMP%]{display:flex;flex:1 1 auto;flex-direction:column;width:100%}.columns[_ngcontent-%COMP%]{display:flex;flex:1 1 auto;flex-direction:row}ed-column[_ngcontent-%COMP%]{flex:50%}h1[_ngcontent-%COMP%]{padding:1vh}"]}),C),R=o("krhP"),X=o("U6jI"),F=[[["ed-grid-layer"]]],Q=["ed-grid-layer"],B=((M=function(){function e(t){var n=this;c(this,e),this.gamepadService=t,this.resolutionX=20,this.resolutionY=15,this.cursorX=0,this.cursorY=0,this.gamepadService.controller1.subscribe(function(e){e.dPadLeft===R.a.Click&&(n.cursorX-=1,n.cursorX<0&&(n.cursorX=0)),e.dPadRight===R.a.Click&&(n.cursorX+=1,n.cursorX>=n.resolutionX&&(n.cursorX=n.resolutionX-1)),e.dPadUp===R.a.Click&&(n.cursorY-=1,n.cursorY<0&&(n.cursorY=0)),e.dPadDown===R.a.Click&&(n.cursorY+=1,n.cursorY>=n.resolutionY&&(n.cursorY=n.resolutionY-1))})}return i(e,[{key:"ngOnInit",value:function(){this.backgroundSize=this.getWidth()+" "+this.getHeight()}},{key:"getWidth",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return 100/this.resolutionX*e+"% "}},{key:"getHeight",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return 100/this.resolutionY*e+"%"}},{key:"getTop",value:function(e){return e*(100/this.resolutionY)+"%"}},{key:"getLeft",value:function(e){return e*(100/this.resolutionX)+"%"}},{key:"onMouseMove",value:function(e){if(e.target instanceof HTMLElement){var t=e.target.clientHeight;this.cursorX=Math.floor(e.offsetX/(e.target.clientWidth/this.resolutionX)),this.cursorY=Math.floor(e.offsetY/(t/this.resolutionY)),this.cursorX<0&&(this.cursorX=0),this.cursorY<0&&(this.cursorY=0),this.cursorX>=this.resolutionX&&(this.cursorX=this.resolutionX-1),this.cursorY>=this.resolutionY&&(this.cursorY=this.resolutionY-1)}}}]),e}()).\u0275fac=function(e){return new(e||M)(f.Lb(X.a))},M.\u0275cmp=f.Fb({type:M,selectors:[["ed-grid"]],inputs:{resolutionX:"resolutionX",resolutionY:"resolutionY"},ngContentSelectors:Q,decls:4,vars:10,consts:[[1,"container",3,"mousemove"],[1,"raster"],[1,"cursor"]],template:function(e,t){1&e&&(f.fc(F),f.Rb(0,"div",0),f.Yb("mousemove",function(e){return t.onMouseMove(e)}),f.Mb(1,"div",1),f.Mb(2,"div",2),f.ec(3),f.Qb()),2&e&&(f.Bb(1),f.pc("background-size",t.backgroundSize),f.Bb(1),f.pc("top",t.getTop(t.cursorY))("left",t.getLeft(t.cursorX))("width",t.getWidth())("height",t.getHeight()))},styles:["[_nghost-%COMP%]{display:flex;flex:0 0 auto;flex-direction:column;height:100%}.container[_ngcontent-%COMP%]{position:relative;border:1px solid rgba(187,44,0,.5)}.container[_ngcontent-%COMP%], .raster[_ngcontent-%COMP%]{width:100%;height:100%}.raster[_ngcontent-%COMP%]{top:0;left:0;background-image:linear-gradient(90deg,rgba(187,44,0,.5) 1px,transparent 0),linear-gradient(180deg,rgba(187,44,0,.5) 1px,transparent 0)}.cursor[_ngcontent-%COMP%], .raster[_ngcontent-%COMP%]{position:absolute}.cursor[_ngcontent-%COMP%]{width:5%;height:5%;background:#f07b05}"]}),M);function L(e,t){if(1&e){var n=f.Sb();f.Rb(0,"div",1),f.Yb("mousemove",function(e){return f.mc(n),f.bc().onMouseMove(e)}),f.sc(1),f.Qb()}if(2&e){var r=t.$implicit,c=f.bc();f.pc("left",c.grid.getLeft(r.x))("top",c.grid.getTop(r.y))("width",c.grid.getWidth(r.width))("height",c.grid.getHeight(r.height)),f.Bb(1),f.uc(" ",r.name,"\n")}}var j,I,E,z,T,H,N=function e(t,n,r,o,i){c(this,e),this.x=t,this.y=n,this.width=r,this.height=o,this.name=i},J=((I=function(){function e(t){c(this,e),this.grid=t,this.elements=[]}return i(e,[{key:"ngOnInit",value:function(){this.elements.push(new N(2,2,2,2,"Element 1")),this.elements.push(new N(5,5,4,4,"Element 2")),this.elements.push(new N(10,5,6,4,"Element 3"))}},{key:"onMouseMove",value:function(e){e.stopPropagation()}}]),e}()).\u0275fac=function(e){return new(e||I)(f.Lb(B))},I.\u0275cmp=f.Fb({type:I,selectors:[["ed-grid-layer"]],inputs:{name:"name"},decls:1,vars:1,consts:[["class","block",3,"left","top","width","height","mousemove",4,"ngFor","ngForOf"],[1,"block",3,"mousemove"]],template:function(e,t){1&e&&f.qc(0,L,2,9,"div",0),2&e&&f.gc("ngForOf",t.elements)},directives:[a.i],styles:["[_nghost-%COMP%]{top:0;left:0;width:100%;height:100%}.block[_ngcontent-%COMP%], [_nghost-%COMP%]{position:absolute}.block[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;background:rgba(64,8,0,.55);border:1px solid rgba(187,44,0,.5);font-size:1vw}"]}),I),W=((j=function(){function e(){c(this,e)}return i(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(e){return new(e||j)},j.\u0275cmp=f.Fb({type:j,selectors:[["ng-component"]],decls:4,vars:0,consts:[["resolutionX","20","resolutionY","15"],["name","Power"],["name","Heat"]],template:function(e,t){1&e&&(f.Rb(0,"ed-window"),f.Rb(1,"ed-grid",0),f.Mb(2,"ed-grid-layer",1),f.Mb(3,"ed-grid-layer",2),f.Qb(),f.Qb())},directives:[b.a,B,J],styles:["[_nghost-%COMP%]{display:flex;flex:1 1 auto;flex-direction:column;width:100%}"]}),j),G=o("vHk7"),V=o("Jrv8"),$=o("FCE/"),q=((E=function(n){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&e(t,n)}(o,n);var r=t(o);function o(e,t,n){var i;return c(this,o),(i=r.call(this,e)).gamepadService=t,i.keyMouseService=n,i.mode="map",i.keyMouseService.attach(e.nativeElement),i.keyMouseService.state.subscribe(function(e){switch(i.mode){case"map":i.applyMouseStateToMapCamera(e)}}),i.gamepadService.controller1.subscribe(function(e){switch(i.mode){case"map":i.applyGamepadStateToMapCamera(e)}}),i}return i(o,[{key:"starSystem",get:function(){return this.$starSystem},set:function(e){this.$starSystem=e,this.$starSystem&&this.resetViewport(this.$starSystem)}},{key:"run",value:function(e){this.starSystem&&this.starSystem.run(e)}}]),o}(V.a)).\u0275fac=function(e){return new(e||E)(f.Lb(f.l),f.Lb(X.a),f.Lb($.a))},E.\u0275cmp=f.Fb({type:E,selectors:[["space-viewport-system"]],inputs:{mode:"mode",starSystem:"starSystem"},features:[f.yb],decls:0,vars:0,template:function(e,t){},styles:["[_nghost-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;overflow:hidden}"]}),E),A=[{path:"",component:d,children:[{path:"",component:S},{path:"experiments/thegrid",component:W},{path:"experiments/space",component:(z=function(){function e(t){var n=this;c(this,e),this.spaceService=t,this.spaceService.getStarSystem("okinura").subscribe(function(e){n.starSystem=e})}return i(e,[{key:"ngOnInit",value:function(){}}]),e}(),z.\u0275fac=function(e){return new(e||z)(f.Lb(G.a))},z.\u0275cmp=f.Fb({type:z,selectors:[["ng-component"]],decls:1,vars:1,consts:[[3,"starSystem"]],template:function(e,t){1&e&&f.Mb(0,"space-viewport-system",0),2&e&&f.gc("starSystem",t.starSystem)},directives:[q],styles:[""]}),z)}]}],U=((H=function e(){c(this,e)}).\u0275fac=function(e){return new(e||H)},H.\u0275mod=f.Jb({type:H}),H.\u0275inj=f.Ib({imports:[[l.c.forChild(A)],l.c]}),H),D=((T=function e(){c(this,e)}).\u0275fac=function(e){return new(e||T)},T.\u0275mod=f.Jb({type:T}),T.\u0275inj=f.Ib({imports:[[a.b,u.a,h.a,U]]}),T)}}])}();