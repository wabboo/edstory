function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _createSuper(e){var t=_isNativeReflectConstruct();return function(){var n,r=_getPrototypeOf(e);if(t){var i=_getPrototypeOf(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return _possibleConstructorReturn(this,n)}}function _possibleConstructorReturn(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{lmR2:function(e,t,n){"use strict";n.r(t),n.d(t,"MenuModule",(function(){return Q}));var r,i,s=n("ofXK"),c=n("IVc4"),o=n("fXoL"),a=((r=function e(){_classCallCheck(this,e)}).\u0275mod=o.Kb({type:r}),r.\u0275inj=o.Jb({factory:function(e){return new(e||r)},imports:[[s.b,c.a]]}),r),u=n("tyNb"),h=((i=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(e){return new(e||i)},i.\u0275cmp=o.Gb({type:i,selectors:[["app-menu"]],decls:1,vars:0,template:function(e,t){1&e&&o.Nb(0,"router-outlet")},directives:[u.d],styles:["[_nghost-%COMP%]{display:flex;flex:1 1 auto;flex-direction:column;height:100%;justify-content:center;align-items:center;background:url(/edstory/assets/backgrounds/main2.jpg);background-size:cover}"]}),i),l=n("4A+J"),d=n("OcQ2"),f=n("OEjf"),p=n("eihG");function g(e,t){1&e&&o.Nb(0,"ed-icon",3)}function b(e,t){1&e&&o.Nb(0,"ed-icon",4)}var m,k,v,y=["*"],C=((m=function(){function e(){_classCallCheck(this,e),this.state="active",this.checkedChange=new o.n}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"getCssClass",value:function(){var e=" checked";switch(this.checkedValue||(e=" unchecked"),this.state){case"active":return"container active"+e;case"selected":return"container selected"+e;case"disabled":return"container disabled"+e;case"blocked":return"container blocked"+e}}},{key:"onClick",value:function(){"active"===this.state&&(this.checked=!this.checked)}},{key:"checked",get:function(){return this.checkedValue},set:function(e){this.checkedValue=e,this.checkedChange.emit(e)}}]),e}()).\u0275fac=function(e){return new(e||m)},m.\u0275cmp=o.Gb({type:m,selectors:[["ed-check"]],inputs:{state:"state",checked:"checked"},outputs:{checkedChange:"checkedChange"},ngContentSelectors:y,decls:4,vars:3,consts:[[3,"ngClass","click"],["icon","checked","size","3",4,"ngIf"],["icon","unchecked","size","3",4,"ngIf"],["icon","checked","size","3"],["icon","unchecked","size","3"]],template:function(e,t){1&e&&(o.gc(),o.Sb(0,"div",0),o.Zb("click",(function(){return t.onClick()})),o.sc(1,g,1,0,"ed-icon",1),o.sc(2,b,1,0,"ed-icon",2),o.fc(3),o.Rb()),2&e&&(o.hc("ngClass",t.getCssClass()),o.Bb(1),o.hc("ngIf",t.checked),o.Bb(1),o.hc("ngIf",!t.checked))},directives:[s.h,s.j,p.a],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;margin-bottom:4px}.container[_ngcontent-%COMP%]{box-sizing:border-box;height:4vh;display:flex;flex-direction:row;align-items:center;padding-left:.5vw;font-size:1.7vh}ed-icon[_ngcontent-%COMP%]{margin-right:8px}.checked[_ngcontent-%COMP%]{color:#ff6105;stroke:#ff6105}.unchecked[_ngcontent-%COMP%]{color:rgba(187,44,0,.7);stroke:rgba(187,44,0,.7)}.active[_ngcontent-%COMP%]{background:rgba(64,8,0,.55)}.container.active[_ngcontent-%COMP%]:hover{background:#f07b05;color:rgba(54,14,0,.95)}.selected[_ngcontent-%COMP%]{background:rgba(175,16,0,.5);color:#ff6105;border-right:8px solid #ff6105}.container.selected[_ngcontent-%COMP%]:hover{background:#f07b05;color:rgba(54,14,0,.95)}.disabled[_ngcontent-%COMP%]{background:rgba(48,48,48,.69);color:#fff;stroke:#fff;fill:#fff}.blocked[_ngcontent-%COMP%]{background:rgba(56,0,0,.38);color:#8e0000;stroke:#8e0000;fill:#8e0000}.container.blocked[_ngcontent-%COMP%]:hover{background:#8e0000;color:#000;stroke:#000;fill:#000}"]}),m),w=n("65hZ"),_=n("UNDe"),S=n("qO2F"),M=n("F/yl"),O=((k=function(){function e(t,n,r){var i=this;_classCallCheck(this,e),this.router=t,this.route=n,this.commanderService=r,this.commanderService.features.subscribe((function(e){i.features=e}))}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"updateFeatures",value:function(){this.commanderService.features.next(this.features)}},{key:"onBack",value:function(){history.back()}},{key:"onNavigateExperiment",value:function(e){this.router.navigate(["experiments",e],{relativeTo:this.route})}}]),e}()).\u0275fac=function(e){return new(e||k)(o.Mb(u.b),o.Mb(u.a),o.Mb(l.a))},k.\u0275cmp=o.Gb({type:k,selectors:[["ng-component"]],decls:34,vars:8,consts:[[1,"columns"],["state","blocked",3,"checked","checkedChange"],[3,"checked","checkedChange"],[3,"press"],["name","The Grid",3,"press"],["name","WebGL space viewer",3,"press"]],template:function(e,t){1&e&&(o.Sb(0,"ed-window"),o.Sb(1,"div",0),o.Sb(2,"ed-column"),o.Sb(3,"h1"),o.uc(4,"Updates"),o.Rb(),o.Sb(5,"ed-check",1),o.Zb("checkedChange",(function(e){return t.features.odyssey=e}))("checkedChange",(function(){return t.updateFeatures()})),o.uc(6,"Odyssey"),o.Rb(),o.Sb(7,"ed-check",2),o.Zb("checkedChange",(function(e){return t.features.fleetCarriers=e}))("checkedChange",(function(){return t.updateFeatures()})),o.uc(8,"Fleet carriers"),o.Rb(),o.Nb(9,"ed-frame-spacer"),o.Sb(10,"h1"),o.uc(11,"Alterations"),o.Rb(),o.Sb(12,"ed-check",2),o.Zb("checkedChange",(function(e){return t.features.corporations=e}))("checkedChange",(function(){return t.updateFeatures()})),o.uc(13,"Corporations"),o.Rb(),o.Sb(14,"ed-check",2),o.Zb("checkedChange",(function(e){return t.features.altNavigationPanel=e}))("checkedChange",(function(){return t.updateFeatures()})),o.uc(15,"Alternative navigation panel"),o.Rb(),o.Sb(16,"ed-check",1),o.Zb("checkedChange",(function(e){return t.features.advisors=e}))("checkedChange",(function(){return t.updateFeatures()})),o.uc(17,"Advisors"),o.Rb(),o.Sb(18,"ed-check",1),o.Zb("checkedChange",(function(e){return t.features.passengerLines=e}))("checkedChange",(function(){return t.updateFeatures()})),o.uc(19,"Passenger lines"),o.Rb(),o.Sb(20,"ed-check",1),o.Zb("checkedChange",(function(e){return t.features.mechanic=e}))("checkedChange",(function(){return t.updateFeatures()})),o.uc(21,"Mechanic"),o.Rb(),o.Sb(22,"ed-check",1),o.Zb("checkedChange",(function(e){return t.features.restructuredShipPanels=e}))("checkedChange",(function(){return t.updateFeatures()})),o.uc(23,"Restructured internal/external panels"),o.Rb(),o.Nb(24,"ed-frame-filler"),o.Sb(25,"ed-button",3),o.Zb("press",(function(){return t.onBack()})),o.uc(26,"Back to ship"),o.Rb(),o.Rb(),o.Nb(27,"ed-frame-spacer"),o.Sb(28,"ed-column"),o.Sb(29,"h1"),o.uc(30,"Experiments"),o.Rb(),o.Sb(31,"ed-tile",4),o.Zb("press",(function(){return t.onNavigateExperiment("thegrid")})),o.Rb(),o.Nb(32,"ed-frame-spacer"),o.Sb(33,"ed-tile",5),o.Zb("press",(function(){return t.onNavigateExperiment("space")})),o.Rb(),o.Rb(),o.Rb(),o.Rb()),2&e&&(o.Bb(5),o.hc("checked",t.features.odyssey),o.Bb(2),o.hc("checked",t.features.fleetCarriers),o.Bb(5),o.hc("checked",t.features.corporations),o.Bb(2),o.hc("checked",t.features.altNavigationPanel),o.Bb(2),o.hc("checked",t.features.advisors),o.Bb(2),o.hc("checked",t.features.passengerLines),o.Bb(2),o.hc("checked",t.features.mechanic),o.Bb(2),o.hc("checked",t.features.restructuredShipPanels))},directives:[d.a,f.a,C,w.a,_.a,S.a,M.a],styles:["[_nghost-%COMP%]{display:flex;flex:1 1 auto;flex-direction:column;width:100%}.columns[_ngcontent-%COMP%]{display:flex;flex:1 1 auto;flex-direction:row}ed-column[_ngcontent-%COMP%]{flex:50%}h1[_ngcontent-%COMP%]{padding:1vh}"]}),k),P=n("krhP"),x=n("U6jI"),R=[[["ed-grid-layer"]]],E=["ed-grid-layer"],X=((v=function(){function e(t){var n=this;_classCallCheck(this,e),this.gamepadService=t,this.resolutionX=20,this.resolutionY=15,this.cursorX=0,this.cursorY=0,this.gamepadService.controller1.subscribe((function(e){e.dPadLeft===P.a.Click&&(n.cursorX-=1,n.cursorX<0&&(n.cursorX=0)),e.dPadRight===P.a.Click&&(n.cursorX+=1,n.cursorX>=n.resolutionX&&(n.cursorX=n.resolutionX-1)),e.dPadUp===P.a.Click&&(n.cursorY-=1,n.cursorY<0&&(n.cursorY=0)),e.dPadDown===P.a.Click&&(n.cursorY+=1,n.cursorY>=n.resolutionY&&(n.cursorY=n.resolutionY-1))}))}return _createClass(e,[{key:"ngOnInit",value:function(){this.backgroundSize=this.getWidth()+" "+this.getHeight()}},{key:"getWidth",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return 100/this.resolutionX*e+"% "}},{key:"getHeight",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return 100/this.resolutionY*e+"%"}},{key:"getTop",value:function(e){return e*(100/this.resolutionY)+"%"}},{key:"getLeft",value:function(e){return e*(100/this.resolutionX)+"%"}},{key:"onMouseMove",value:function(e){if(e.target instanceof HTMLElement){var t=e.target.clientHeight;this.cursorX=Math.floor(e.offsetX/(e.target.clientWidth/this.resolutionX)),this.cursorY=Math.floor(e.offsetY/(t/this.resolutionY)),this.cursorX<0&&(this.cursorX=0),this.cursorY<0&&(this.cursorY=0),this.cursorX>=this.resolutionX&&(this.cursorX=this.resolutionX-1),this.cursorY>=this.resolutionY&&(this.cursorY=this.resolutionY-1)}}}]),e}()).\u0275fac=function(e){return new(e||v)(o.Mb(x.a))},v.\u0275cmp=o.Gb({type:v,selectors:[["ed-grid"]],inputs:{resolutionX:"resolutionX",resolutionY:"resolutionY"},ngContentSelectors:E,decls:4,vars:10,consts:[[1,"container",3,"mousemove"],[1,"raster"],[1,"cursor"]],template:function(e,t){1&e&&(o.gc(R),o.Sb(0,"div",0),o.Zb("mousemove",(function(e){return t.onMouseMove(e)})),o.Nb(1,"div",1),o.Nb(2,"div",2),o.fc(3),o.Rb()),2&e&&(o.Bb(1),o.rc("background-size",t.backgroundSize),o.Bb(1),o.rc("top",t.getTop(t.cursorY))("left",t.getLeft(t.cursorX))("width",t.getWidth())("height",t.getHeight()))},styles:["[_nghost-%COMP%]{display:flex;flex:0 0 auto;flex-direction:column;height:100%}.container[_ngcontent-%COMP%]{position:relative;border:1px solid rgba(187,44,0,.5)}.container[_ngcontent-%COMP%], .raster[_ngcontent-%COMP%]{width:100%;height:100%}.raster[_ngcontent-%COMP%]{top:0;left:0;background-image:linear-gradient(90deg,rgba(187,44,0,.5) 1px,transparent 0),linear-gradient(180deg,rgba(187,44,0,.5) 1px,transparent 0)}.cursor[_ngcontent-%COMP%], .raster[_ngcontent-%COMP%]{position:absolute}.cursor[_ngcontent-%COMP%]{width:5%;height:5%;background:#f07b05}"]}),v);function Y(e,t){if(1&e){var n=o.Tb();o.Sb(0,"div",1),o.Zb("mousemove",(function(e){return o.nc(n),o.cc().onMouseMove(e)})),o.uc(1),o.Rb()}if(2&e){var r=t.$implicit,i=o.cc();o.rc("left",i.grid.getLeft(r.x))("top",i.grid.getTop(r.y))("width",i.grid.getWidth(r.width))("height",i.grid.getHeight(r.height)),o.Bb(1),o.wc(" ",r.name,"\n")}}var z,j,H,I,N,L,W,Z,B=function e(t,n,r,i,s){_classCallCheck(this,e),this.x=t,this.y=n,this.width=r,this.height=i,this.name=s},F=((j=function(){function e(t){_classCallCheck(this,e),this.grid=t,this.elements=[]}return _createClass(e,[{key:"ngOnInit",value:function(){this.elements.push(new B(2,2,2,2,"Element 1")),this.elements.push(new B(5,5,4,4,"Element 2")),this.elements.push(new B(10,5,6,4,"Element 3"))}},{key:"onMouseMove",value:function(e){e.stopPropagation()}}]),e}()).\u0275fac=function(e){return new(e||j)(o.Mb(X))},j.\u0275cmp=o.Gb({type:j,selectors:[["ed-grid-layer"]],inputs:{name:"name"},decls:1,vars:1,consts:[["class","block",3,"left","top","width","height","mousemove",4,"ngFor","ngForOf"],[1,"block",3,"mousemove"]],template:function(e,t){1&e&&o.sc(0,Y,2,9,"div",0),2&e&&o.hc("ngForOf",t.elements)},directives:[s.i],styles:["[_nghost-%COMP%]{top:0;left:0;width:100%;height:100%}.block[_ngcontent-%COMP%], [_nghost-%COMP%]{position:absolute}.block[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;background:rgba(64,8,0,.55);border:1px solid rgba(187,44,0,.5);font-size:1vw}"]}),j),T=((z=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(e){return new(e||z)},z.\u0275cmp=o.Gb({type:z,selectors:[["ng-component"]],decls:4,vars:0,consts:[["resolutionX","20","resolutionY","15"],["name","Power"],["name","Heat"]],template:function(e,t){1&e&&(o.Sb(0,"ed-window"),o.Sb(1,"ed-grid",0),o.Nb(2,"ed-grid-layer",1),o.Nb(3,"ed-grid-layer",2),o.Rb(),o.Rb())},directives:[d.a,X,F],styles:["[_nghost-%COMP%]{display:flex;flex:1 1 auto;flex-direction:column;width:100%}"]}),z),A=n("vHk7"),G=n("Womt"),V=((H=function(){function e(t){_classCallCheck(this,e),this.element=t,this.loader=new G.b,this.renderer=new G.l,this.scene=new G.i,this.camera=new G.g(60,window.innerWidth/window.innerHeight,1e-4,1e6),this.hud=new G.f}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.element.nativeElement.appendChild(this.renderer.domElement),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setAnimationLoop((function(){e.renderFrame()})),this.camera.position.z=100,this.camera.position.y=-150,this.camera.rotation.x=1,this.scene.background=this.loader.load(["assets/backgrounds/space.jpg","assets/backgrounds/space.jpg","assets/backgrounds/space.jpg","assets/backgrounds/space.jpg","assets/backgrounds/space.jpg","assets/backgrounds/space.jpg"])}},{key:"ngOnDestroy",value:function(){this.scene.dispose(),this.renderer.dispose()}},{key:"onResize",value:function(e){this.renderer.setSize(window.innerWidth,window.innerHeight),this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix()}},{key:"resetViewport",value:function(e){this.scene.children=[],e.linkToScene(this.scene)}},{key:"applyGamepadStateToMapCamera",value:function(e){var t=new G.k;this.camera.getWorldDirection(t),t.z=0,this.camera.position.addScaledVector(t,e.leftStickAxisY*(5/this.camera.zoom)),t.applyAxisAngle(new G.k(0,0,1),.5*Math.PI),this.camera.position.addScaledVector(t,5/this.camera.zoom*-e.leftStickAxisX),this.camera.rotateOnWorldAxis(new G.k(0,0,1),-e.rightStickAxisX/(50*this.camera.zoom)),this.camera.rotateOnWorldAxis(t,-e.rightStickAxisY/(50*this.camera.zoom)),e.leftTrigger&&(this.camera.zoom=1,this.camera.updateProjectionMatrix()),e.rightTrigger&&(this.camera.zoom+=this.camera.zoom/50,this.camera.updateProjectionMatrix())}},{key:"renderFrame",value:function(){this.tick=Date.now(),this.run(this.tick),this.renderer.render(this.scene,this.camera)}},{key:"updateHud",value:function(){this.hud.children=[];var e=new G.h(5,5,1,1),t=new G.e({color:"blue",opacity:.5,transparent:!0,side:G.c}),n=new G.d(e,t);this.hud.add(n);var r=new G.k,i=new G.k;this.camera.getWorldDirection(r),this.camera.getWorldPosition(i),this.hud.position.copy(this.camera.position),this.hud.position.addScaledVector(r,5),this.hud.rotation.copy(this.camera.rotation)}}]),e}()).\u0275fac=function(e){return new(e||H)(o.Mb(o.l))},H.\u0275dir=o.Hb({type:H,hostBindings:function(e,t){1&e&&o.Zb("resize",(function(e){return t.onResize(e)}),!1,o.mc)}}),H),D=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"applyMouse",value:function(e,t){this.deltaX=e.clientX-this.x,this.deltaY=e.clientY-this.y,this.x=e.clientX,this.y=e.clientY,(this.deltaX||this.deltaY)&&(this.userInput=!0)}},{key:"applyWheel",value:function(e,t){this.deltaZ=e.deltaY,this.deltaZ&&(this.userInput=!0)}}]),e}(),J=n("PqYM"),$=((N=function(){function e(){_classCallCheck(this,e),this.state=new o.n,this.keyMouseState=new D,this.tick=0}return _createClass(e,[{key:"attach",value:function(e){var t=this;this.domElement&&(this.domElement.removeEventListener("mousemove",(function(e){t.mouseHandler(e)})),this.domElement.removeEventListener("mousedown",(function(e){t.mouseHandler(e)})),this.domElement.removeEventListener("mouseup",(function(e){t.mouseHandler(e)})),this.domElement.removeEventListener("wheel",(function(e){t.wheelHandler(e)}))),this.domElement=e,this.domElement.addEventListener("mousemove",(function(e){t.mouseHandler(e)})),this.domElement.addEventListener("mousedown",(function(e){t.mouseHandler(e)})),this.domElement.addEventListener("mouseup",(function(e){t.mouseHandler(e)})),this.domElement.addEventListener("wheel",(function(e){t.wheelHandler(e)})),this.processState()}},{key:"mouseHandler",value:function(e){this.keyMouseState.applyMouse(e,this.tick)}},{key:"wheelHandler",value:function(e){this.keyMouseState.applyWheel(e,this.tick)}},{key:"processState",value:function(){var e=this;this.tick+=1,this.keyMouseState.userInput&&(this.state.emit(this.keyMouseState),this.keyMouseState.userInput=!1),Object(J.a)(16.67).subscribe((function(){return e.processState()}))}}]),e}()).\u0275fac=function(e){return new(e||N)},N.\u0275prov=o.Ib({token:N,factory:N.\u0275fac,providedIn:"root"}),N),K=((I=function(e){_inherits(n,e);var t=_createSuper(n);function n(e,r,i){var s;return _classCallCheck(this,n),(s=t.call(this,e)).gamepadService=r,s.keyMouseService=i,s.mode="map",s.keyMouseService.attach(e.nativeElement),s.keyMouseService.state.subscribe((function(e){})),s.gamepadService.controller1.subscribe((function(e){switch(s.mode){case"map":s.applyGamepadStateToMapCamera(e)}})),s}return _createClass(n,[{key:"run",value:function(e){this.starSystem&&this.starSystem.run(e)}},{key:"starSystem",get:function(){return this.$starSystem},set:function(e){this.$starSystem=e,this.$starSystem&&this.resetViewport(this.$starSystem)}}]),n}(V)).\u0275fac=function(e){return new(e||I)(o.Mb(o.l),o.Mb(x.a),o.Mb($))},I.\u0275cmp=o.Gb({type:I,selectors:[["space-viewport-system"]],inputs:{mode:"mode",starSystem:"starSystem"},features:[o.yb],decls:0,vars:0,template:function(e,t){},styles:["[_nghost-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;overflow:hidden}"]}),I),U=[{path:"",component:h,children:[{path:"",component:O},{path:"experiments/thegrid",component:T},{path:"experiments/space",component:(L=function(){function e(t){var n=this;_classCallCheck(this,e),this.spaceService=t,this.spaceService.getStarSystem("okinura").subscribe((function(e){n.starSystem=e}))}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}(),L.\u0275fac=function(e){return new(e||L)(o.Mb(A.a))},L.\u0275cmp=o.Gb({type:L,selectors:[["ng-component"]],decls:1,vars:1,consts:[[3,"starSystem"]],template:function(e,t){1&e&&o.Nb(0,"space-viewport-system",0),2&e&&o.hc("starSystem",t.starSystem)},directives:[K],styles:[""]}),L)}]}],q=((Z=function e(){_classCallCheck(this,e)}).\u0275mod=o.Kb({type:Z}),Z.\u0275inj=o.Jb({factory:function(e){return new(e||Z)},imports:[[u.c.forChild(U)],u.c]}),Z),Q=((W=function e(){_classCallCheck(this,e)}).\u0275mod=o.Kb({type:W}),W.\u0275inj=o.Jb({factory:function(e){return new(e||W)},imports:[[s.b,a,c.a,q]]}),W)}}]);