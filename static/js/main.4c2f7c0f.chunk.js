(this.webpackJsonpreact_did_someone_touch_this=this.webpackJsonpreact_did_someone_touch_this||[]).push([[0],{14:function(e,t,a){},18:function(e,t,a){e.exports=a(34)},34:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(7),c=a.n(o),i=a(6),s=a(1),u=a(2),l=a(3),m=a(5),f=a(4),p=(a(14),a(16));function d(e){return g("BEFORE_IMAGE",e)}function h(e){return g("AFTER_IMAGE",e)}function g(e,t){return{type:"SET_IMAGE",payload:{imageName:e,imageData:t}}}var b=function(e){Object(m.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).imageVersion=void 0,n.resembleCallback=function(e,t){if(e)console.error("An error occured while comparing the images: ",e);else{var a=t.getImageDataUrl();n.props.setDiffImage(a)}},n.imageVersion=-1,n.state={},n}return Object(l.a)(a,[{key:"render",value:function(){return this.updateDiffImageIfNeeded(),r.a.createElement("div",{className:"images"},r.a.createElement("h2",null,"Difference"),function(e){if(e)return r.a.createElement("img",{src:e,alt:"Differences between the before and after pictures"})}(this.props.diffImageData))}},{key:"updateDiffImageIfNeeded",value:function(){var e=this.props.afterImage.updateCount+this.props.beforeImage.updateCount;if(e!==this.imageVersion){this.imageVersion=e;var t=this.props.afterImage.data,a=this.props.beforeImage.data;if(t&&a){Object(p.compare)(a,t,{output:{errorType:"movementDifferenceIntensity",transparency:.7,largeImageThreshold:1500,useCrossOrigin:!1,outputDiff:!0},scaleToSameSize:!0,ignore:"colors"},this.resembleCallback)}}}}]),a}(r.a.Component);var E=Object(i.b)((function(e,t){return Object(s.a)(Object(s.a)({},t),{},{beforeImage:e.images.before,afterImage:e.images.after,diffImageData:e.images.diff.data})}),(function(e){return{setDiffImage:function(t){return e(function(e){return g("DIFF_IMAGE",e)}(t))}}}))(b),v=a(17),O=a.n(v),I=function(e){Object(m.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).webcamRef=void 0,n.onClick=function(e){var t=n.webcamRef.current.getScreenshot();n.props.onPhoto(t)},n.webcamRef=r.a.createRef(),n}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.backgroundImage,t="take-image-div"+(e?" transparent-cam":"");return r.a.createElement("div",{className:t},e?r.a.createElement("img",{src:e,alt:""}):null,r.a.createElement(O.a,{ref:this.webcamRef,className:"cam",onClick:this.onClick,audio:!1,videoConstraints:G}))}}]),a}(r.a.Component),k=function(e){Object(m.a)(a,e);var t=Object(f.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"instructions"},r.a.createElement("h2",null,"How it works"),r.a.createElement("p",null,"This web application lets you detect if someone messed with your stuff. It does this by comparing pictures taken before and after you left it unsupervised. Then it highlights any differences it has found. (You could also use it to mess with peoples stuff and make sure that you leave it exactly like they left it. But don't do that: it's evil)"),r.a.createElement("h2",null,"Instructions"),r.a.createElement("ol",null,r.a.createElement("li",null,"Read these instructions"),r.a.createElement("li",null,"Select the settings you want to use"),r.a.createElement("li",null,"Take a image before you leave"),r.a.createElement("li",null,"Keep this website open (or download/save the image)"),r.a.createElement("li",null,"Take an image after you return. By default the image from before will be superimposed over the camera view to help you find the same angle / distance again"),r.a.createElement("li",null,"Check areas with detected changes (marked in pink)")))}}]),a}(r.a.Component),j=[];function y(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=j.length,n={number:a,name:e,canSkip:t};return j.push(n),a}var w=y("Intro",!0),S=y("Settings",!0),_=y("Before photo"),D=y("After photo"),C=y("Compare photos"),T=j;function N(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=e>=0&&e<T.length;if(t&&!a)throw new Error("Step is not in bounds: ".concat(e));return a}function A(e){N(e,!0);for(var t=e;t<T.length;t++)if(!T[t].canSkip)return t;return T.length-1}console.debug(j);var B=function(e){Object(m.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).renderStep=function(t){var a,n=["step"];return t.number<=e.props.lastSelectableStep?t.number===e.props.currentStep?n.push("selected"):(n.push("selectable"),a=function(){return e.props.goToStep(t.number)}):n.push("disabled"),r.a.createElement("li",{className:n.join(" "),key:t.number,onClick:a},t.name)},e}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"steps"},r.a.createElement("ul",null,T.map(this.renderStep)))}}]),a}(r.a.Component),M=Object(i.b)((function(e,t){return Object(s.a)(Object(s.a)({},t),{},{lastSelectableStep:e.steps.completed,currentStep:e.steps.current})}),(function(e){return{goToStep:function(t){return e({type:"GO_TO_STEP",payload:t})}}}))(B),R=function(e){Object(m.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).takeBeforeImage=function(t){e.props.setBeforeImage(t),e.props.completeStep()},e.takeAfterImage=function(t){e.props.setAfterImage(t),e.props.completeStep()},e}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,this.renderContents())}},{key:"renderContents",value:function(){switch(this.props.step){case w:return this.renderWithNextButton(r.a.createElement(k,null));case S:return this.renderWithNextButton(r.a.createElement("span",null,"TODO settings"));case _:return r.a.createElement(I,{onPhoto:this.takeBeforeImage});case D:return r.a.createElement(I,{onPhoto:this.takeAfterImage,backgroundImage:this.props.beforeImageData});case C:return r.a.createElement(E,null);default:return r.a.createElement("span",null,"Error: Unknown step")}}},{key:"renderWithNextButton",value:function(e){return r.a.createElement("div",null,e,r.a.createElement("button",{onClick:this.props.completeStep},"Next step"))}}]),a}(r.a.Component),P=Object(i.b)((function(e,t){return Object(s.a)(Object(s.a)({},t),{},{beforeImageData:e.images.before.data,afterImageData:e.images.after.data,step:e.steps.current})}),(function(e){return{setBeforeImage:function(t){return e(d(t))},setAfterImage:function(t){return e(h(t))},completeStep:function(){return e({type:"COMPLETE_STEP"})}}}))(R),G={facingMode:{ideal:"environment"}},F=function(e){Object(m.a)(a,e);var t=Object(f.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("span",{className:"err-msg"},"This website is still in pre alpha state. It is likely instable, buggy, ugly and might get broken from time to time."),r.a.createElement("div",{className:"app-contents"},r.a.createElement(M,null),r.a.createElement(P,null)))}},{key:"renderContents",value:function(){return this.props.beforeImageData?this.props.afterImageData?r.a.createElement(E,null):r.a.createElement(I,{onPhoto:this.props.setAfterImage,backgroundImage:this.props.beforeImageData}):r.a.createElement("div",null,r.a.createElement(k,null),r.a.createElement(I,{onPhoto:this.props.setBeforeImage}))}}]),a}(r.a.Component),x=Object(i.b)((function(e,t){return Object(s.a)(Object(s.a)({},t),{},{beforeImageData:e.images.before.data,afterImageData:e.images.after.data})}),(function(e){return{setBeforeImage:function(t){return e(d(t))},setAfterImage:function(t){return e(h(t))}}}))(F);var U=a(8);function V(e,t){return{data:t,updateCount:e.updateCount+1}}var L=function(e,t){switch(e||(console.warn("No state was supplied to reducer. Falling back to default values"),e=X),t.type){case"SET_IMAGE":return function(e,t){var a=t.payload,n=Object(s.a)({},e.images);switch(a.imageName){case"AFTER_IMAGE":n.after=V(n.after,a.imageData);break;case"BEFORE_IMAGE":n.before=V(n.before,a.imageData);break;case"DIFF_IMAGE":n.diff=V(n.diff,a.imageData);break;default:return console.warn('Unknown image name: "'.concat(a.imageName,'"')),e}return Object(s.a)(Object(s.a)({},e),{},{images:n})}(e,t);case"COMPLETE_STEP":return function(e){var t=e.steps.current+1;if(N(t)){var a=A(t);return a=Math.max(e.steps.completed,a),Object(s.a)(Object(s.a)({},e),{},{steps:{current:t,completed:a}})}return e}(e);case"GO_TO_STEP":return function(e,t){var a=t.payload;return N(a)&&a<=e.steps.completed?Object(s.a)(Object(s.a)({},e),{},{steps:Object(s.a)(Object(s.a)({},e.steps),{},{current:a})}):(console.warn("Can not switch to step ".concat(a,". State: ").concat(e.steps)),e)}(e,t);default:return console.warn('Unknown action type: "'.concat(t.type,'"')),e}},W={data:null,updateCount:0},X={images:{before:W,after:W,diff:W},steps:{current:0,completed:A(0)}},J=void 0;if(window.__REDUX_DEVTOOLS_EXTENSION__){J=window.__REDUX_DEVTOOLS_EXTENSION__({trace:!1,traceLimit:25})}var z=Object(U.b)(L,X,J);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i.a,{store:z},r.a.createElement(x,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.4c2f7c0f.chunk.js.map