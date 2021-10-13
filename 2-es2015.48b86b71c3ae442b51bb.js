(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"4GCU":function(e,t,s){"use strict";s.d(t,"a",function(){return p}),s.d(t,"b",function(){return y}),s.d(t,"c",function(){return f});var i=s("8dGy");class r extends i.a{constructor(){super(...arguments),this.active=!0}isSystemVisible(e){return!0}}var o=s("Womt");class n extends r{constructor(){super(...arguments),this.cameraZoom=100,this.cameraAngle=1,this.cameraRotation=1,this.cursorPosition=new o.y,this.flightMode=!0,this.actualZoom=100,this.actualAngle=1,this.actualRotation=1}getActualZoom(){return this.actualZoom}createView(e){const t=new o.s(.15,.18,20),s=new o.m({color:"cyan",side:o.f}),i=new o.l(t,s);e.add(i),e.renderOrder=100}updateModel(e){this.actualZoom=this.actualZoom+(this.cameraZoom-this.actualZoom)/25,this.actualRotation=this.actualRotation+(this.cameraRotation-this.actualRotation)/10,this.actualAngle=this.actualAngle+(this.cameraAngle-this.actualAngle)/10}updateView(e,t,s){this.flightMode?e.position.lerp(this.cursorPosition,.05):(e.position.x=e.position.x+(this.cursorPosition.x-e.position.x)/2,e.position.y=e.position.y+(this.cursorPosition.y-e.position.y)/2,e.position.z=e.position.z+(this.cursorPosition.z-e.position.z)/2);const i=new o.y,r=new o.y(0,0,1);i.set(Math.sin(this.actualRotation),Math.cos(this.actualRotation),Math.sin(this.actualAngle)),t.camera.position.copy(e.position),t.camera.position.addScaledVector(i,this.actualZoom),t.camera.lookAt(e.position),t.camera.up.copy(r)}}class a extends r{createView(e){this.material=new o.u({side:o.f,uniforms:{uSize1:{value:1},uSize2:{value:10},uColor:{value:new o.c("#2A4040")},uDistance:{value:8e3}},transparent:!0,vertexShader:"\n        varying vec3 worldPosition;\n        uniform float uDistance;\n        void main() {\n            vec3 pos = position.xyz * uDistance;\n            pos.xy += cameraPosition.xy;\n            worldPosition = pos;\n            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);\n        }\n      ",fragmentShader:"\n        varying vec3 worldPosition;\n\n        uniform float uSize1;\n        uniform float uSize2;\n        uniform vec3 uColor;\n        uniform float uDistance;\n\n        float getGrid(float size) {\n          vec2 r = worldPosition.xy / size;\n          vec2 grid = abs(fract(r - 0.5) - 0.5) / fwidth(r);\n          float line = min(grid.x, grid.y);\n          return 1.3 - min(line, 1.3);\n        }\n\n        void main() {\n          float d = 1.0 - min(distance(cameraPosition.xy, worldPosition.xy) / uDistance, 1.0);\n          float g1 = getGrid(uSize1);\n          float g2 = getGrid(uSize2);\n          gl_FragColor = vec4(uColor.rgb, mix(g2, g1, g1) * pow(d, 256.0));\n          gl_FragColor.a = mix(0.2 * gl_FragColor.a, gl_FragColor.a, g2);\n          if (gl_FragColor.a <= 0.0) discard;\n        }\n      ",extensions:{derivatives:!0}}),this.geometry=new o.p(2,2,1,1),this.mesh=new o.l(this.geometry,this.material),this.mesh.frustumCulled=!1,e.add(this.mesh),e.renderOrder=-100}updateView(e,t,s){t instanceof y||t instanceof f?(e.position.z=t.cursor.getPosition().z,e.visible=!0):e.visible=!1}}var c=s("UR3C");class l extends r{get settings(){return c.a.ruler}createView(e){const t=new o.i({color:"#009090",opacity:.5});t.transparent=!0;const s=new o.e(1,1,1,8);this.lineMesh=new o.l(s,t),e.add(this.lineMesh)}updateView(e,t,s){if(t instanceof y)if(this.settings.system&&this.settings.target){const t=this.settings.system.coords.distanceTo(this.settings.target.coords)*this.settings.measures;this.lineMesh.geometry.dispose(),this.lineMesh.geometry=new o.e(.2,.2,t),this.lineMesh.geometry.rotateX(.5*Math.PI),this.lineMesh.geometry.translate(0,0,t/2),e.position.copy(this.settings.system.coords),e.lookAt(this.settings.target.coords),e.visible=!0}else e.visible=!1;else e.visible=!1}}class m extends r{get settings(){return c.a.rangeFinder}createView(e){this.geometry=new o.s(1,2,20),this.material=new o.m({color:"teal",side:o.f,transparent:!0,opacity:.1}),this.ring=new o.l(this.geometry,this.material),e.add(this.ring)}updateView(e,t,s){if(t instanceof y)if(this.settings.rangeFrom===this.actualRangeFrom&&this.settings.rangeTo===this.actualRangeTo||this.resizeRing(),this.active&&this.settings.system&&this.actualRangeTo>0){const s=t.cursor.getPosition().z,i=1-Math.abs(this.settings.system.coords.z-s)/this.actualRangeTo;i>0?this.ring.scale.set(i,i,1):this.ring.scale.set(0,0,0),e.position.x=this.settings.system.coords.x,e.position.y=this.settings.system.coords.y,e.position.z=s-.1,e.visible=!0}else e.visible=!1;else e.visible=!1}isSystemVisible(e){if(this.active&&this.settings.system&&this.settings.system!==e){const t=Math.abs(this.settings.system.coords.distanceTo(e.coords));if(t<this.actualRangeFrom||t>this.actualRangeTo)return!1}return!0}resizeRing(){const e=new o.s(this.settings.rangeFrom,this.settings.rangeTo,40);this.geometry.copy(e),this.geometry.elementsNeedUpdate=!0,e.dispose(),this.actualRangeFrom=this.settings.rangeFrom,this.actualRangeTo=this.settings.rangeTo}}class u extends r{get settings(){return c.a.triangulate}createView(e){this.geometry=new o.a,this.fillMaterial=new o.m({color:"teal",side:o.f,transparent:!0,opacity:.1}),this.lineMaterial=new o.m({color:"teal",side:o.f,wireframe:!0}),this.triangle=new o.l(this.geometry,this.fillMaterial),this.triangle.frustumCulled=!1,this.triangleOutline=new o.h(this.geometry,this.lineMaterial),this.triangleOutline.frustumCulled=!1,e.add(this.triangle),e.add(this.triangleOutline)}updateView(e,t,s){this.settings.system1&&this.settings.system2&&this.settings.system3?(this.geometry.setFromPoints([this.settings.system1.coords,this.settings.system2.coords,this.settings.system3.coords]),e.visible=!0):e.visible=!1}}class d extends r{get system(){return c.a.selectedSystem}set system(e){c.a.selectedSystem=e}createView(e){const t=new o.d(.2,.4,16),s=new o.m({color:"cyan"}),i=new o.l(t,s);i.rotation.x-=.5*Math.PI,e.add(i)}updateView(e,t,s){t instanceof y&&this.system?(e.position.copy(this.system.coords),e.position.z+=.4,e.visible=!0):e.visible=!1}}class h extends r{get system(){return c.a.currentSystem}set system(e){c.a.currentSystem=e}createView(e){const t=new o.d(.2,.4,16),s=new o.m({color:"orange"}),i=new o.l(t,s);i.rotation.x-=.5*Math.PI,e.add(i)}updateView(e,t,s){t instanceof y&&this.system?(e.position.copy(this.system.coords),e.position.z+=.4,e.visible=!0):e.visible=!1}}const p=1e6;class g{constructor(e,t){this.camera=e,this.screen=t}update(e){for(const t of this.getSpaceObjects())t.run(e);for(const t of this.getSpaceObjects())t.update(e,this)}}class y extends g{constructor(){super(...arguments),this.cursor=new n,this.plane=new a,this.triangulation=new u,this.rangeFinder=new m,this.ruler=new l,this.current=new h,this.selected=new d}getSpaceObjects(){return[this.starSector,this.plane,this.triangulation,this.rangeFinder,this.ruler,this.selected,this.current,this.cursor]}isSystemVisible(e){for(const t of this.getSpaceObjects())if(t instanceof r&&!t.isSystemVisible(e))return!1;return!0}focusSystem(e){this.cursor.flightMode=!0,this.cursor.cursorPosition.copy(e.coords),this.cursor.cameraZoom>10&&(this.cursor.cameraZoom=10)}update(e){c.a.focusSystem&&(this.focusSystem(c.a.focusSystem),c.a.focusSystem=void 0),super.update(e)}}class f extends g{constructor(){super(...arguments),this.cursor=new n,this.plane=new a}getSpaceObjects(){return[this.starSystem,this.cursor,this.plane]}update(e){super.update(e)}}},N5T1:function(e,t,s){"use strict";s.d(t,"a",function(){return ie});var i=s("Womt"),r=s("QzY6"),o=s("PFai"),n=s("/xNU");class a extends n.b{}let c=(()=>{class e extends a{}return e.itemName="None",e.color="#5C5C5C",e})(),l=(()=>{class e extends a{}return e.itemName="Anarchy",e.color="#FFD600",e})(),m=(()=>{class e extends a{}return e.itemName="Colony",e.color="#BCFF00",e})(),u=(()=>{class e extends a{}return e.itemName="Democracy",e.color="#49FC02",e})(),d=(()=>{class e extends a{}return e.itemName="Imperial",e.color="#00FF09",e})(),h=(()=>{class e extends a{}return e.itemName="Corporate",e.color="#00FF71",e})(),p=(()=>{class e extends a{}return e.itemName="Communist",e.color="#00FFF0",e})(),g=(()=>{class e extends a{}return e.itemName="Feudal",e.color="#00A6FF",e})(),y=(()=>{class e extends a{}return e.itemName="Dictatorship",e.color="#0037FB",e})(),f=(()=>{class e extends a{}return e.itemName="Theocracy",e.color="#1D00FF",e})(),x=(()=>{class e extends a{}return e.itemName="Cooperative",e.color="#9200FF",e})(),w=(()=>{class e extends a{}return e.itemName="Patronage",e.color="#FF00FF",e})(),F=(()=>{class e extends a{}return e.itemName="Confederacy",e.color="#FE0100",e})(),b=(()=>{class e extends a{}return e.itemName="Prison colony",e.color="#F86000",e})(),N=(()=>{class e extends a{}return e.itemName="Workshop",e.color="#767875",e})(),v=(()=>{class e extends a{}return e.itemName="Detention centre",e.color="#680000",e})(),C=(()=>{class e extends a{}return e.itemName="Private ownership",e.color="#006700",e})(),M=(()=>{class e extends n.c{}return e.items=[c,l,m,u,d,h,p,g,y,f,x,w,F,b,N,v,C],e})();var S=s("NISJ"),P=s("sX/a");class A extends n.b{}let V=(()=>{class e extends A{}return e.itemName="None",e.color="#5C5C5C",e})(),z=(()=>{class e extends A{}return e.itemName="Retreat",e.color="#FE0201",e})(),R=(()=>{class e extends A{}return e.itemName="War",e.color="#FF7600",e})(),T=(()=>{class e extends A{}return e.itemName="Lockdown",e.color="#FFFF00",e})(),E=(()=>{class e extends A{}return e.itemName="Cinvil unrest",e.color="#74FF00",e})(),I=(()=>{class e extends A{}return e.itemName="Civil war",e.color="#009300",e})(),D=(()=>{class e extends A{}return e.itemName="Boom",e.color="#02FFFF",e})(),O=(()=>{class e extends A{}return e.itemName="Expansion",e.color="#287AFF",e})(),j=(()=>{class e extends A{}return e.itemName="Bust",e.color="#003CFA",e})(),k=(()=>{class e extends A{}return e.itemName="Outbreak",e.color="#5E00E8",e})(),B=(()=>{class e extends A{}return e.itemName="Famine",e.color="#E600E9",e})(),G=(()=>{class e extends A{}return e.itemName="Election",e.color="#873B09",e})(),Z=(()=>{class e extends A{}return e.itemName="Investment",e.color="#FFFFFF",e})(),$=(()=>{class e extends A{}return e.itemName="Civil liberty",e.color="#FD308B",e})(),U=(()=>{class e extends A{}return e.itemName="Incursion",e.color="#5B002C",e})(),W=(()=>{class e extends A{}return e.itemName="Blight",e.color="#C1335B",e})(),L=(()=>{class e extends A{}return e.itemName="Natural disaster",e.color="#FF0205",e})(),X=(()=>{class e extends A{}return e.itemName="Infrastructure failure",e.color="#C5762B",e})(),_=(()=>{class e extends A{}return e.itemName="Drought",e.color="#04FF9F",e})(),J=(()=>{class e extends A{}return e.itemName="Terrorist Attack",e.color="#737270",e})(),H=(()=>{class e extends A{}return e.itemName="Public holiday",e.color="#823DB4",e})(),Y=(()=>{class e extends n.c{}return e.items=[V,z,R,T,E,I,D,O,j,k,B,G,Z,$,U,W,L,X,_,J,H],e})();var q=s("UR3C"),K=s("8dGy"),Q=s("4GCU");class ee extends K.a{constructor(){super(...arguments),this.eccentricity=0,this.orbitalInclination=0,this.orbitalPeriod=1,this.$artificials=[]}get artificials(){return this.$artificials}addArtificial(e){this.attach(e),this.$artificials.push(e)}load(e){super.load(e),this.radius=ee.KmToLs(e.radius),this.orbitalPeriod=e.orbitalPeriod?e.orbitalPeriod:0,this.semiMajorAxis=ee.AuToLs(e.semiMajorAxis?e.semiMajorAxis:0),this.orbitalInclination=e.orbitalInclination?e.orbitalInclination:0,this.eccentricity=e.eccentricity?e.eccentricity:0}updateView(e,t,s){const i=24*this.orbitalPeriod*60*60*1e3,r=(s*=2e4)%i/i,o=2*Math.PI*(r||0);Math.tan(.0174532925*this.orbitalInclination),e.position.x=this.semiMajorAxis*(Math.sin(o)-this.eccentricity),e.position.y=Math.cos(o)*this.semiMajorAxis*Math.sqrt(1-this.eccentricity*this.eccentricity),e.visible&&t.screen.renderText(e,e.name,{fallOffStart:3e7,fallOff:16})}}class te extends ee{constructor(){super(...arguments),this.$planets=[]}get planets(){return this.$planets}addPlanet(e){this.attach(e),this.$planets.push(e)}load(e){if(super.load(e),e.planets)for(const t of e.planets){const e=new te;e.load(t),this.addPlanet(e)}}createView(e){if(e.name=this.name,this.getParent()instanceof te){const t=new i.v(this.radius,25,25),s=new i.m({color:"gray"});return this.bodyMesh=new i.l(t,s),e.add(this.bodyMesh),void(e.visible=!1)}const t=new i.v(this.radius,25,25),s=new i.m({color:"green"});this.bodyMesh=new i.l(t,s),e.add(this.bodyMesh)}updateView(e,t,s){super.updateView(e,t,s),t instanceof Q.c&&(this.getParent()instanceof te?this.bodyMesh.scale.setScalar(100):this.bodyMesh.scale.setScalar(2))}}class se extends ee{constructor(){super(...arguments),this.$planets=[]}get planets(){return this.$planets}addPlanet(e){this.attach(e),this.$planets.push(e)}load(e){if(super.load(e),e.planets)for(const t of e.planets){const e=new te;e.load(t),this.addPlanet(e)}}createView(e){e.name=this.name;const t=new i.v(this.radius,25,25),s=new i.m({color:"yellow"});this.starMesh=new i.l(t,s),e.add(this.starMesh)}updateView(e,t,s){super.updateView(e,t,s),t instanceof Q.c&&this.starMesh.scale.setScalar(10)}}class ie extends K.a{constructor(){super(...arguments),this.coords=new i.y,this.economies=[],this.$stars=[],this.$contacts=[]}get stars(){return this.$stars}get contacts(){return this.$contacts}addStar(e){this.attach(e),this.$stars.push(e)}load(e){super.load(e),e.coords&&this.coords.copy(e.coords);for(const t of e.stars){const e=new se;e.load(t),this.addStar(e)}}createView(e){e.name=this.name;const t=new i.v(.1,10,10);this.starMaterial=new i.m({color:this.getSystemColor()}),this.starMesh=new i.l(t,this.starMaterial),e.add(this.starMesh);const s=new i.i({color:"#006060",side:i.f,opacity:.5});s.transparent=!0;const r=new i.b(.2,10);this.baseMesh=new i.l(r,s),this.baseMesh.position.z=0,this.baseMesh.visible=!1,e.add(this.baseMesh);const o=new i.e(.015,.015,1,8);o.rotateX(.5*Math.PI),o.translate(0,0,.5),this.stemMesh=new i.l(o,s),this.stemMesh.visible=!1,e.add(this.stemMesh)}updateView(e,t,s){if(t instanceof Q.b){if(!t.isSystemVisible(this))return void(e.visible=!1);const s=t.cursor.getPosition(),i=s.z,r=e.position.distanceTo(s),o=t.cursor.getActualZoom()>30?t.cursor.getActualZoom():30;this.baseMesh.position.setZ(i-e.position.z),this.stemMesh.scale.z=i-e.position.z,this.baseMesh.visible=r<=10,this.stemMesh.visible=r<=10,this.starMaterial.color.set(this.getSystemColor()),e.visible=r<=o&&0!==this.starMaterial.color.getHex(),e.position.copy(this.coords),r<20&&t.screen.renderText(e,e.name.toUpperCase())}else e.visible=!0,this.baseMesh.visible=!1,this.stemMesh.visible=!1,this.starMesh.visible=!1}getSystemColor(){switch(q.a.starMode){case q.b.Realistic:break;case q.b.Allegiance:const e=o.a.items.find(e=>e.itemName===this.allegiance);if(e)return e.color;break;case q.b.Civilisation:break;case q.b.Government:const t=M.items.find(e=>e.itemName===this.government);if(t)return t.color;break;case q.b.Economy:if(this.economies.length>=1){const e=this.economies[0],t=r.a.items.find(t=>t.itemName===e);if(t)return t.color}break;case q.b.State:const s=Y.items.find(e=>e.itemName===this.factionState);if(s)return s.color;break;case q.b.Security:const i=S.a.items.find(e=>e.itemName===this.security);if(i)return i.color;break;case q.b.StarClass:const n=P.a.items.find(e=>e.itemName===this.starClass);if(n)return n.color}return"#505050"}}},NISJ:function(e,t,s){"use strict";s.d(t,"a",function(){return l});var i=s("/xNU");class r extends i.b{}let o=(()=>{class e extends r{}return e.itemName="High",e.color="#003BFD",e})(),n=(()=>{class e extends r{}return e.itemName="Medium",e.color="#00FEFF",e})(),a=(()=>{class e extends r{}return e.itemName="Low",e.color="#009500",e})(),c=(()=>{class e extends r{}return e.itemName="Anarchy",e.color="#FD0200",e})(),l=(()=>{class e extends i.c{}return e.items=[o,n,a,c],e})()},PFai:function(e,t,s){"use strict";s.d(t,"a",function(){return m});var i=s("/xNU");class r extends i.b{}let o=(()=>{class e extends r{}return e.itemName="None",e.color="#5C5C5C",e})(),n=(()=>{class e extends r{}return e.itemName="Federation",e.color="#FE0100",e})(),a=(()=>{class e extends r{}return e.itemName="Empire",e.color="#00A4FF",e})(),c=(()=>{class e extends r{}return e.itemName="Alliance",e.color="#02FF10",e})(),l=(()=>{class e extends r{}return e.itemName="Independent",e.color="#FBFC00",e})(),m=(()=>{class e extends i.c{}return e.items=[o,n,a,c,l],e})()},QzY6:function(e,t,s){"use strict";s.d(t,"a",function(){return y});var i=s("/xNU");class r extends i.b{}let o=(()=>{class e extends r{}return e.itemName="None",e.color="#5C5C5C",e})(),n=(()=>{class e extends r{}return e.itemName="Agriculture",e.color="#62FF00",e})(),a=(()=>{class e extends r{}return e.itemName="Extraction",e.color="#FF0000",e})(),c=(()=>{class e extends r{}return e.itemName="Tourism",e.color="#4800DC",e})(),l=(()=>{class e extends r{}return e.itemName="Colony",e.color="#1C62FF",e})(),m=(()=>{class e extends r{}return e.itemName="High Tech",e.color="#00FFFF",e})(),u=(()=>{class e extends r{}return e.itemName="Industrial",e.color="#FFFF00",e})(),d=(()=>{class e extends r{}return e.itemName="Military",e.color="#DC00DC",e})(),h=(()=>{class e extends r{}return e.itemName="Refinery",e.color="#FF6200",e})(),p=(()=>{class e extends r{}return e.itemName="Service",e.color="#002AFF",e})(),g=(()=>{class e extends r{}return e.itemName="Terraforming",e.color="#007E00",e})(),y=(()=>{class e extends i.c{}return e.items=[o,a,h,u,n,g,m,l,p,c,d],e})()},UR3C:function(e,t,s){"use strict";s.d(t,"b",function(){return i}),s.d(t,"a",function(){return a});var i=function(e){return e[e.Realistic=0]="Realistic",e[e.Allegiance=1]="Allegiance",e[e.Civilisation=2]="Civilisation",e[e.Government=3]="Government",e[e.Economy=4]="Economy",e[e.State=5]="State",e[e.Security=6]="Security",e[e.StarClass=7]="StarClass",e[e.Services=8]="Services",e[e.VisitedStars=9]="VisitedStars",e[e.Commodity=10]="Commodity",e}({});class r{constructor(){this.rangeFrom=10,this.rangeTo=20}}class o{}class n{constructor(){this.measures=1}}let a=(()=>{class e{}return e.starMode=i.Security,e.triangulate=new o,e.rangeFinder=new r,e.ruler=new n,e})()},"WGd+":function(e,t,s){"use strict";s.d(t,"a",function(){return o});var i=s("8dGy"),r=s("N5T1");class o extends i.a{constructor(){super(...arguments),this.systems=[]}load(e){for(const t of e){const e=new r.a;e.name=t.name,t.information?(e.allegiance=t.information.allegiance,e.government=t.information.government,e.population=t.information.population,e.security=t.information.security,e.factionState=t.information.factionState,e.economies.push(t.information.economy),t.information.secondEconomy&&e.economies.push(t.information.secondEconomy)):(e.allegiance="None",e.government="None",e.population=0,e.economies.push("None")),t.primaryStar&&(e.starClass=t.primaryStar.type),e.coords.set(t.coords.x,t.coords.z,t.coords.y),this.attach(e),this.systems.push(e)}}merge(e){for(const t of e.systems)this.attach(t),this.systems.push(t);e.systems=[]}find(e){e=e.toLowerCase();for(const t of this.systems)if(t.name.toLowerCase().startsWith(e))return t}createView(e){}updateView(e,t,s){}}},hn8X:function(e,t,s){"use strict";s.d(t,"a",function(){return l});var i=s("Womt"),r=s("lJxs"),o=s("N5T1"),n=s("WGd+"),a=s("fXoL"),c=s("tk/3");let l=(()=>{class e{constructor(e){this.httpClient=e}findStar(e){let t="systemName="+e;return t=t.concat("&showCoordinates=","1"),this.httpClient.get("https://www.edsm.net/api-v1/systems?"+t).pipe(Object(r.a)(e=>{for(const t of e)t.coords=new i.y(t.coords.x,t.coords.y,t.coords.z);return e}))}getStarSector(e,t=!1){if(t){let t="systemName="+e;return t=t.concat("&radius=","30"),t=t.concat("&showId=","1"),t=t.concat("&showCoordinates=","1"),t=t.concat("&showPermit=","1"),t=t.concat("&showInformation=","1"),t=t.concat("&showPrimaryStar=","1"),this.httpClient.get("https://www.edsm.net/api-v1/sphere-systems?"+t).pipe(Object(r.a)(e=>{const t=new n.a;return t.load(e),t}))}return this.httpClient.get("assets/data/edsm/sector-"+e+".json").pipe(Object(r.a)(e=>{const t=new n.a;return t.load(e),t}))}getStarSystem(e){return this.httpClient.get("assets/data/systems/"+e+".json").pipe(Object(r.a)(e=>{const t=new o.a;return t.load(e),t}))}}return e.\u0275fac=function(t){return new(t||e)(a.Vb(c.b))},e.\u0275prov=a.Hb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},"sX/a":function(e,t,s){"use strict";s.d(t,"a",function(){return F});var i=s("/xNU");class r extends i.b{}let o=(()=>{class e extends r{}return e.itemName="O-type stars",e.color="#0002FA",e})(),n=(()=>{class e extends r{}return e.itemName="B-type stars",e.color="#0B06F6",e})(),a=(()=>{class e extends r{}return e.itemName="A-type stars",e.color="#3419E4",e})(),c=(()=>{class e extends r{}return e.itemName="F-type stars",e.color="#56578F",e})(),l=(()=>{class e extends r{}return e.itemName="G-type stars",e.color="#8F8E34",e})(),m=(()=>{class e extends r{}return e.itemName="K-type stars",e.color="#B03313",e})(),u=(()=>{class e extends r{}return e.itemName="M-type stars",e.color="#FF1F02",e})(),d=(()=>{class e extends r{}return e.itemName="L-type stars",e.color="#FF1600",e})(),h=(()=>{class e extends r{}return e.itemName="T=type stars",e.color="#7A0000",e})(),p=(()=>{class e extends r{}return e.itemName="Y-type stars",e.color="#750000",e})(),g=(()=>{class e extends r{}return e.itemName="Proto stars",e.color="#7A0000",e})(),y=(()=>{class e extends r{}return e.itemName="Carbon stars",e.color="#929137",e})(),f=(()=>{class e extends r{}return e.itemName="Wolf-Rayet stars",e.color="#C4C5FE",e})(),x=(()=>{class e extends r{}return e.itemName="White dwarf stars",e.color="#545FF9",e})(),w=(()=>{class e extends r{}return e.itemName="Non sequence stars",e.color="#565857",e})(),F=(()=>{class e extends i.c{}return e.items=[o,n,a,c,l,m,u,d,h,p,g,y,f,x,w],e})()}}]);