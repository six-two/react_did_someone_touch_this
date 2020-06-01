(this.webpackJsonpreact_did_someone_touch_this=this.webpackJsonpreact_did_someone_touch_this||[]).push([[0],{17:function(e,t,a){e.exports=a(34)},33:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(7),c=a.n(o),i=a(6),s=a(2),u=a(3),l=a(5),m=a(4),p=a(1);function f(e,t){return{type:"SET_IMAGE",payload:{imageName:e,imageData:t}}}var d=[];function g(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=d.length,n={number:a,name:e,canSkip:t};return d.push(n),a}var h=g("Intro",!0),b=g("Settings",!0),v=g("Before photo"),E=g("After photo"),O=g("Compare photos"),j=d;function y(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=e>=0&&e<j.length;if(t&&!a)throw new Error("Step is not in bounds: ".concat(e));return a}function k(e){y(e,!0);for(var t=e;t<j.length;t++)if(!j[t].canSkip)return t;return j.length-1}console.debug(d);var I=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).renderStep=function(t){var a,n=["step"];return t.number<=e.props.lastSelectableStep?t.number===e.props.currentStep?n.push("selected"):(n.push("selectable"),a=function(){return e.props.goToStep(t.number)}):n.push("disabled"),r.a.createElement("li",{className:n.join(" "),key:t.number,onClick:a},t.name)},e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("ul",{className:"step-list"},j.map(this.renderStep))}}]),a}(r.a.Component),w=Object(i.b)((function(e,t){return Object(p.a)(Object(p.a)({},t),{},{lastSelectableStep:e.steps.completed,currentStep:e.steps.current})}),(function(e){return{goToStep:function(t){return e({type:"GO_TO_STEP",payload:t})}}}))(I),S=a(15),C=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).imageVersion=void 0,n.resembleCallback=function(e,t){if(e)console.error("An error occured while comparing the images: ",e);else{var a=t.getImageDataUrl();n.props.setDiffImage(a)}},n.imageVersion=-1,n.state={},n}return Object(u.a)(a,[{key:"render",value:function(){return this.updateDiffImageIfNeeded(),r.a.createElement("div",{className:"diff-view"},r.a.createElement("img",{src:this.props.diffImageData,alt:"Differences between the before and after pictures"}))}},{key:"updateDiffImageIfNeeded",value:function(){var e=this.props.afterImage.updateCount+this.props.beforeImage.updateCount;if(e!==this.imageVersion){this.imageVersion=e;var t=this.props.afterImage.data,a=this.props.beforeImage.data;if(t&&a){Object(S.compare)(a,t,{output:{errorType:"movementDifferenceIntensity",transparency:.7,largeImageThreshold:1500,useCrossOrigin:!1,outputDiff:!0},scaleToSameSize:!0,ignore:"colors"},this.resembleCallback)}}}}]),a}(r.a.Component);var _=Object(i.b)((function(e,t){return Object(p.a)(Object(p.a)({},t),{},{beforeImage:e.images.before,afterImage:e.images.after,diffImageData:e.images.diff.data})}),(function(e){return{setDiffImage:function(t){return e(function(e){return f("DIFF_IMAGE",e)}(t))}}}))(C),N=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"instructions"},r.a.createElement("h2",null,"How it works"),r.a.createElement("p",null,"This web application lets you detect if someone messed with your stuff. It does this by comparing pictures taken before and after you left it unsupervised. Then it highlights any differences it has found. (You could also use it to mess with peoples stuff and make sure that you leave it exactly like they left it. But don't do that: it's evil)"),r.a.createElement("h2",null,"Instructions"),r.a.createElement("ol",null,r.a.createElement("li",null,"Read these instructions"),r.a.createElement("li",null,"Select the settings you want to use"),r.a.createElement("li",null,"Take a image before you leave"),r.a.createElement("li",null,"Keep this website open (or download/save the image)"),r.a.createElement("li",null,"Take an image after you return. By default the image from before will be superimposed over the camera view to help you find the same angle / distance again"),r.a.createElement("li",null,"Check areas with detected changes (marked in pink)")))}}]),a}(r.a.Component),T=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onChange=function(t){e.props.onChange(t.target.value)},e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("select",{onChange:this.onChange,value:this.props.value},r.a.createElement("option",{value:"",key:-1,disabled:!0,hidden:!0},this.props.prompt?this.props.prompt:"Choose a option"),this.props.options.map((function(e,t){return r.a.createElement("option",{value:e,key:t},e)})))}}],[{key:"defaultValue",value:function(){return""}}]),a}(r.a.Component),D=["Use webcam","Upload image"],A=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"settings"},r.a.createElement("h2",null,"Settings"),r.a.createElement("span",{className:"label"},"Image source:"),r.a.createElement(T,{options:D,value:this.props.imageSource,onChange:this.props.setImageSource}))}}]),a}(r.a.Component),U=Object(i.b)((function(e,t){return Object(p.a)(Object(p.a)({},t),{},{imageSource:e.settings.imageSource})}),(function(e){return{setImageSource:function(t){return e(function(e){return{type:"SET_IMAGE_SOURCE",payload:e}}(t))}}}))(A),R=a(16),M=a.n(R),B={facingMode:{ideal:"environment"}},F=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).webcamRef=void 0,n.onClick=function(e){var t=n.webcamRef.current.getScreenshot();n.props.onPhoto(t)},n.webcamRef=r.a.createRef(),n}return Object(u.a)(a,[{key:"render",value:function(){var e=this.props.backgroundImage,t="take-image-div"+(e?" transparent-cam":"");return r.a.createElement("div",{className:t},r.a.createElement(M.a,{ref:this.webcamRef,className:"cam",onClick:this.onClick,audio:!1,videoConstraints:B}),e?r.a.createElement("img",{src:e,alt:"",onClick:this.onClick}):null)}}]),a}(r.a.Component),G=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).onChange=function(e){var t=e.target.files;if(t&&t[0]){var a=new FileReader;a.onload=n.onFileUploaded,a.readAsDataURL(t[0])}},n.onFileUploaded=function(e){n.props.setImage(e.target.result)},n.state={},n}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"image-upload"},r.a.createElement("div",null,"Upload your image"),r.a.createElement("input",{type:"file",onChange:this.onChange}))}}]),a}(r.a.Component),x=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"get-image"},this.renderContents())}},{key:"renderContents",value:function(){switch(this.props.imageSource){case"Use webcam":return r.a.createElement(F,{onPhoto:this.props.onImage,backgroundImage:this.props.backgroundImage});case"Upload image":return r.a.createElement(G,{setImage:this.props.onImage});default:throw new Error('Unknown image source: "'.concat(this.props.imageSource,'"'))}}}]),a}(r.a.Component),P=Object(i.b)((function(e,t){return Object(p.a)(Object(p.a)({},t),{},{imageSource:e.settings.imageSource})}),(function(e){return{}}))(x),V=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).takeBeforeImage=function(t){e.props.setBeforeImage(t),e.props.completeStep()},e.takeAfterImage=function(t){e.props.setAfterImage(t),e.props.completeStep()},e}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"step-content"},this.renderContents())}},{key:"renderContents",value:function(){switch(this.props.step){case h:return this.renderWithNextButton(r.a.createElement(N,null));case b:return this.renderWithNextButton(r.a.createElement(U,null));case v:return r.a.createElement(P,{onImage:this.takeBeforeImage});case E:return r.a.createElement(P,{onImage:this.takeAfterImage,backgroundImage:this.props.beforeImageData});case O:return r.a.createElement(_,null);default:return r.a.createElement("span",null,"Error: Unknown step")}}},{key:"renderWithNextButton",value:function(e){return r.a.createElement("div",null,e,r.a.createElement("button",{className:"next-button",onClick:this.props.completeStep},"Next step"))}}]),a}(r.a.Component),L=Object(i.b)((function(e,t){return Object(p.a)(Object(p.a)({},t),{},{beforeImageData:e.images.before.data,afterImageData:e.images.after.data,step:e.steps.current})}),(function(e){return{setBeforeImage:function(t){return e(function(e){return f("BEFORE_IMAGE",e)}(t))},setAfterImage:function(t){return e(function(e){return f("AFTER_IMAGE",e)}(t))},completeStep:function(){return e({type:"COMPLETE_STEP"})}}}))(V),W=(a(33),function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"err-msg"},"This website is still in pre alpha state. It is likely instable, buggy, ugly and might get broken from time to time."),r.a.createElement("div",{className:"app-contents"},r.a.createElement(w,null),r.a.createElement(L,null)))}}]),a}(r.a.Component));var X=a(8);function J(e,t){return{data:t,updateCount:e.updateCount+1}}var z=function(e,t){switch(e||(console.warn("No state was supplied to reducer. Falling back to default values"),e=K),t.type){case"SET_IMAGE":return function(e,t){var a=t.payload,n=Object(p.a)({},e.images);switch(a.imageName){case"AFTER_IMAGE":n.after=J(n.after,a.imageData);break;case"BEFORE_IMAGE":n.before=J(n.before,a.imageData);break;case"DIFF_IMAGE":n.diff=J(n.diff,a.imageData);break;default:return console.warn('Unknown image name: "'.concat(a.imageName,'"')),e}return Object(p.a)(Object(p.a)({},e),{},{images:n})}(e,t);case"COMPLETE_STEP":return function(e){var t=e.steps.current+1;if(y(t)){var a=k(t);return a=Math.max(e.steps.completed,a),Object(p.a)(Object(p.a)({},e),{},{steps:{current:t,completed:a}})}return e}(e);case"GO_TO_STEP":return function(e,t){var a=t.payload;return y(a)&&a<=e.steps.completed?Object(p.a)(Object(p.a)({},e),{},{steps:Object(p.a)(Object(p.a)({},e.steps),{},{current:a})}):(console.warn("Can not switch to step ".concat(a,". State: ").concat(e.steps)),e)}(e,t);case"SET_IMAGE_SOURCE":return function(e,t){var a=t.payload;return Object(p.a)(Object(p.a)({},e),{},{settings:Object(p.a)(Object(p.a)({},e.settings),{},{imageSource:a})})}(e,t);default:return console.warn('Unknown action type: "'.concat(t.type,'"')),e}},H={data:null,updateCount:0},K={images:{before:H,after:H,diff:H},steps:{current:0,completed:k(0)},settings:{imageSource:"Use webcam"}},Y=void 0;if(window.__REDUX_DEVTOOLS_EXTENSION__){Y=window.__REDUX_DEVTOOLS_EXTENSION__({trace:!1,traceLimit:25})}var q=Object(X.b)(z,K,Y);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i.a,{store:q},r.a.createElement(W,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.102ecb86.chunk.js.map