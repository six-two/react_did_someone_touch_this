(this.webpackJsonpreact_did_someone_touch_this=this.webpackJsonpreact_did_someone_touch_this||[]).push([[0],{27:function(e,t,a){e.exports=a(47)},46:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(7),s=a.n(o),i=a(8),c=a(1),l=a(13),u=[];function m(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=u.length,n={number:a,name:e,canSkip:t};return u.push(n),a}m("Before photo"),m("Do your thing",!0),m("After photo"),m("Compare photos");var p=u;u=[],m("Before photo"),m("After photo"),m("Compare photos");var g=u;function h(e,t){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=t>=0&&t<e.length;if(a&&!n)throw new Error("Step is not in bounds: ".concat(t));return n}function f(e,t){h(e,t,!0);for(var a=t;a<e.length;a++)if(!e[a].canSkip)return a;return e.length-1}function E(e){var t=e.steps.current+1;if(h(e.steps.list,t)){var a=f(e.steps.list,t);return a=Math.max(e.steps.completed,a),Object(c.a)(Object(c.a)({},e),{},{steps:Object(c.a)(Object(c.a)({},e.steps),{},{current:t,completed:a})})}return e}function d(e,t){return{data:t,updateCount:e.updateCount+1}}var b=function(e,t){switch(e||(console.warn("No state was supplied to reducer. Falling back to default values"),e=y),t.type){case"SET_IMAGE":return function(e,t){var a=t.payload,n=Object(c.a)({},e.images);switch(a.imageName){case"AFTER_IMAGE":n.after=d(n.after,a.imageData);break;case"BEFORE_IMAGE":n.before=d(n.before,a.imageData),function(e){var t=document.createElement("img");t.onload=function(e){console.log("image dimendion: ".concat(t.naturalWidth,"x").concat(t.naturalHeight))},t.src=e}(a.imageData);break;default:return console.warn('Unknown image name: "'.concat(a.imageName,'"')),e}return E(Object(c.a)(Object(c.a)({},e),{},{images:n}))}(e,t);case"COMPLETE_STEP":return E(e);case"GO_TO_STEP":return function(e,t){var a=t.payload;return h(e.steps.list,a)&&a<=e.steps.completed?Object(c.a)(Object(c.a)({},e),{},{steps:Object(c.a)(Object(c.a)({},e.steps),{},{current:a})}):(console.warn("Can not switch to step ".concat(a,". ReduxState: ").concat(e.steps)),e)}(e,t);case"SET_IMAGE_SOURCE":return function(e,t){var a=t.payload;return Object(c.a)(Object(c.a)({},e),{},{settings:Object(c.a)(Object(c.a)({},e.settings),{},{imageSource:a})})}(e,t);case"SET_SCREEN":var a=t.payload;if("SCREEN_STEPS"===a){var n="SOURCE_WEBCAM"===e.settings.imageSource;e=Object(c.a)(Object(c.a)({},e),{},{steps:Object(c.a)(Object(c.a)({},e.steps),{},{list:n?p:g})})}return Object(c.a)(Object(c.a)({},e),{},{screen:a});case"SET_COMPARE_TYPE":var r=t.payload;return Object(c.a)(Object(c.a)({},e),{},{comparisonType:r});case"SET_SCREENSHOT_FORMAT":var o=t.payload;return Object(c.a)(Object(c.a)({},e),{},{settings:Object(c.a)(Object(c.a)({},e.settings),{},{screenshotFormat:o})});case"SET_PREFERRED_RES":var s=t.payload;return Object(c.a)(Object(c.a)({},e),{},{settings:Object(c.a)(Object(c.a)({},e.settings),{},{preferredResolution:s})});case"SET_ENABLE_BEFORE_OVERLAY":var i=t.payload;return Object(c.a)(Object(c.a)({},e),{},{settings:Object(c.a)(Object(c.a)({},e.settings),{},{overlayBeforeImage:i})});case"@@INIT":return e;default:return console.warn('Unknown action type: "'.concat(t.type,'"')),e}},v={data:null,updateCount:0},y={images:{before:v,after:v},steps:{current:0,completed:0,list:[]},settings:{imageSource:"SOURCE_WEBCAM",screenshotFormat:"png",preferredResolution:{width:1920,height:1080},overlayBeforeImage:!0},comparisonType:"COMPARE_SLIDER_RIGHT_LEFT",screen:"SCREEN_MENU"},O=void 0;if(window.__REDUX_DEVTOOLS_EXTENSION__){O=window.__REDUX_DEVTOOLS_EXTENSION__({trace:!1,traceLimit:25})}var S=Object(l.b)(b,y,O),I=S.dispatch;function w(e){_("BEFORE_IMAGE",e)}function C(e){_("AFTER_IMAGE",e)}function _(e,t){I({type:"SET_IMAGE",payload:{imageName:e,imageData:t}})}function k(e){I({type:"GO_TO_STEP",payload:e})}function N(e){I({type:"SET_IMAGE_SOURCE",payload:e})}function j(e){I({type:"SET_SCREENSHOT_FORMAT",payload:e})}function R(e){return r.a.createElement("button",{className:"button",onClick:function(t){return a=e.screen,void I({type:"SET_SCREEN",payload:a});var a}},e.label)}function T(){return r.a.createElement("div",{className:"screen-menu"},r.a.createElement(R,{label:"Start",screen:"SCREEN_STEPS"}),r.a.createElement(R,{label:"Settings",screen:"SCREEN_SETTINGS"}),r.a.createElement(R,{label:"How it works",screen:"SCREEN_HOW_IT_WORKS"}),r.a.createElement(R,{label:"Privacy policy",screen:"SCREEN_PRIVACY"}))}function A(){return r.a.createElement("div",{className:"screen-instructions"},r.a.createElement("h2",null,"How it works"),r.a.createElement("p",null,"This web application lets you detect if someone messed with your stuff. It does this by comparing pictures taken before and after you left it unsupervised. Then it highlights any differences it has found. (You could also use it to mess with peoples stuff and make sure that you leave it exactly like they left it. But don't do that: it's evil)"),r.a.createElement("h2",null,"Instructions"),r.a.createElement("ol",null,r.a.createElement("li",null,"(Optional) Select the settings you want to use"),r.a.createElement("li",null,"Take a image before you leave"),r.a.createElement("li",null,"Keep this website open (or download/save the image)"),r.a.createElement("li",null,"Take an image after you return. By default the image from before will be superimposed over the camera view to help you find the same angle / distance again"),r.a.createElement("li",null,"Compare the two images using the different comparison tools")),r.a.createElement(R,{label:"Back",screen:"SCREEN_MENU"}))}var M=a(3),D=a(4),B=a(6),P=a(5);function F(e){return void 0===e.show||e.show?r.a.createElement("div",{className:"setting"},r.a.createElement("span",{className:"label"},e.label,e.hint&&r.a.createElement("abbr",{title:e.hint.text}," (".concat(e.hint.trigger,")"))),e.children):null}var U=a(26),x=a(25);function L(e){var t=Object(x.a)(e.optionMap.entries());return r.a.createElement("select",{value:e.value,onChange:function(t){return e.onValueChange(t.target.value)}},t.map((function(e){var t=Object(U.a)(e,2),a=t[0],n=t[1];return r.a.createElement("option",{key:a,value:a},n)})))}var G=new Map;G.set("SOURCE_WEBCAM","Use webcam / camera"),G.set("SOURCE_FILE","Use local image files");var H=new Map;H.set("png","PNG"),H.set("jpeg","JPEG"),H.set("webp","WEBP");var V=new Map;V.set("640x480","480p"),V.set("1280x720","720p (HD)"),V.set("1920x1080","1080p (Full HD)"),V.set("3840x2160","2160p (4K UHD)");var W=function(e){Object(B.a)(a,e);var t=Object(P.a)(a);function a(){return Object(M.a)(this,a),t.apply(this,arguments)}return Object(D.a)(a,[{key:"render",value:function(){var e=this,t="SOURCE_WEBCAM"===this.props.imageSource;return r.a.createElement("div",{className:"screen-settings"},r.a.createElement("h1",null,"Settings"),r.a.createElement(F,{label:"Image source"},r.a.createElement(L,{optionMap:G,value:this.props.imageSource,onValueChange:N})),r.a.createElement(F,{label:"Photo format",show:t},r.a.createElement(L,{optionMap:H,value:this.props.screenshotFormat,onValueChange:j})),r.a.createElement(F,{label:"Resolution",hint:{trigger:"*",text:"The browser will request this resolution, but depending on your hardware the actual resolution may differ"},show:t},r.a.createElement(L,{optionMap:V,value:this.props.preferredResolution,onValueChange:this.onResolutionChange})),r.a.createElement(F,{label:"Image overlay",hint:{trigger:"?",text:"Enabling this option will overlay the image you took before on the camera view, so that you can find the alignment and position that you used before"},show:t},r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",checked:this.props.isBeforeOverlayEnabled,onChange:function(t){return a=!e.props.isBeforeOverlayEnabled,void I({type:"SET_ENABLE_BEFORE_OVERLAY",payload:a});var a}}),"help you find the same perspective again")),r.a.createElement(R,{label:"Back",screen:"SCREEN_MENU"}))}},{key:"onResolutionChange",value:function(e){try{var t=e.split("x",2),a=Number(t[0]),n=Number(t[1]);I({type:"SET_PREFERRED_RES",payload:{width:a,height:n}})}catch(r){console.error('Can not parse resolution: "'.concat(e,'"'),r)}}}]),a}(r.a.Component),Y=Object(i.b)((function(e,t){var a=e.settings.preferredResolution;return Object(c.a)(Object(c.a)({},t),{},{imageSource:e.settings.imageSource,screenshotFormat:e.settings.screenshotFormat,preferredResolution:"".concat(a.width,"x").concat(a.height),isBeforeOverlayEnabled:e.settings.overlayBeforeImage})}))(W);function z(){return r.a.createElement("div",{className:"screen-privacy"},r.a.createElement("h1",null,"Privacy policy"),r.a.createElement("p",null,r.a.createElement("span",{className:"bold"},"I do not collect any information about you. "),'This app is designed to work locally and to never send any data to any servers. That means that any photos that you take or "upload" will never leave your browser. I also do not use local data storage (like cookies), which means that all data will be lost when you leave or reload the website.'),r.a.createElement("h2",null,"Third party libraries"),r.a.createElement("p",null,"To realize this website (without spending years developing it) I use some third party libraries. They handle tasks like accessing the camera / webcam and managing the state of the application. As far as I can tell none of them send any data back home."),r.a.createElement("h2",null,"Hosting provider"),r.a.createElement("p",null,"GitHub Pages is used to host this web application. Their ",r.a.createElement("a",{href:"https://docs.github.com/en/github/site-policy/github-privacy-statement#github-pages"},"privacy policy"),r.a.createElement("abbr",{title:"Last checked on July 10, 2020"},"*")," states:",r.a.createElement("blockquote",{className:"ludwig"},"Please note that GitHub may collect User Personal Information from visitors to your GitHub Pages website, including logs of visitor IP addresses, to comply with legal obligations, and to maintain the security and integrity of the Website and the Service.")),r.a.createElement("h2",null,"Contact"),r.a.createElement("span",null,"If you notice any errors in this document or any activity that is not in line with this policy, please send an email with your findings to",r.a.createElement("a",{href:"mailto:info@six-two.dev"}," info@six-two.dev")),r.a.createElement("br",null),r.a.createElement(R,{label:"Back",screen:"SCREEN_MENU"}))}function J(e){return!1!==e.log&&console.warn("[ErrorMessage]",e.message),r.a.createElement("div",{className:"err-msg"},e.message)}function K(e){return!1!==e.log&&console.warn("[BugMessage]",e.message),r.a.createElement("div",{className:"err-msg"},r.a.createElement("div",{className:"bold"},"Ooops, this should not happen. You have probably found a bug!"),e.message)}function X(e){if(!e.imageData)return null;var t=e.fileName;return void 0!==e.autoDetectFormat&&!0!==e.autoDetectFormat||(t+="."+function(e){try{var t=e.match(/^data:image\/([a-zA-Z]+)/);if(t){var a=t[0].split("/")[1];return console.debug("Auto detect image format:",a),a}}catch(n){console.error("Internal error in detectImageFormat",n)}return console.warn('Auto detect format failed. Data url looks like "'.concat(e.slice(0,100),'" (cut off after 100 characters)')),"unknown.png"}(e.imageData)),r.a.createElement("a",{className:"button",href:e.imageData,download:t},e.buttonText)}function q(e){return e.beforeImage?r.a.createElement("div",{className:"step-between"},r.a.createElement("h2",null,"Do your thing"),"Below is the image you have taken. If it is looking ok, you can go and do your stuff.",r.a.createElement("span",{className:"important-hint"}," DO NOT close or reload this tab, or the image will be lost! "),"When you return go to the next step.",r.a.createElement("br",null),"If you want to make sure you don't loose it click the ",r.a.createElement("code",null,"Download image")," button below. If you do not like the image, go back to the previous step and take another image.",r.a.createElement("img",{src:e.beforeImage,alt:""}),r.a.createElement(X,{buttonText:"Download image",fileName:"webcam-image",imageData:e.beforeImage})):r.a.createElement("div",null,"Before image not found: please go back to the previous step")}var Z=a(19),Q=function(e){Object(B.a)(a,e);var t=Object(P.a)(a);function a(e){var n;return Object(M.a)(this,a),(n=t.call(this,e)).resembleCallback=function(e,t){if(e)console.error("An error occured while comparing the images: ",e),n.setState({errorMessage:"An error occured while comparing the images: ".concat(e)});else{var a=t.getImageDataUrl();n.setState({diffImage:a})}},n.state={diffImage:null,errorMessage:null},n}return Object(D.a)(a,[{key:"render",value:function(){return this.state.errorMessage?r.a.createElement(J,{message:this.state.errorMessage}):this.state.diffImage?r.a.createElement("div",{className:"diff-view"},r.a.createElement("div",{className:"instructions"},"Differences between the images are marked in pink. If almost everything is maked pink, choose a different method to do a manual comparison."),r.a.createElement("img",{src:this.state.diffImage,alt:""}),r.a.createElement(X,{buttonText:"Download comparison image",fileName:"before-after-compare",imageData:this.state.diffImage})):(this.calculateDiffImage(),r.a.createElement("div",null,"Comparing images..."))}},{key:"calculateDiffImage",value:function(){var e=this.props.afterImage,t=this.props.beforeImage;if(e&&t){Object(Z.compare)(t,e,{output:{errorType:"movementDifferenceIntensity",largeImageThreshold:1500,useCrossOrigin:!1,outputDiff:!0},scaleToSameSize:!0,ignore:"colors"},this.resembleCallback)}else this.setState({errorMessage:"Before or after image is empty or undefined"})}}]),a}(r.a.Component),$=a(20),ee=a.n($);function te(e){return r.a.createElement("div",{className:"image-diff left-right-slider"},r.a.createElement("div",{className:"instructions"},"Move the slider around to compare the images."),r.a.createElement(ee.a,{leftImage:e.beforeImage,leftImageLabel:"Before",rightImage:e.afterImage,rightImageLabel:"After",sliderLineColor:"red",handle:r.a.createElement(r.a.Fragment,null)}))}var ae=a(24),ne=(a(45),ae.a),re=function(e){Object(B.a)(a,e);var t=Object(P.a)(a);function a(e){var n;return Object(M.a)(this,a),(n=t.call(this,e)).onOpacityChange=function(e){e!==n.state.sliderValue&&n.setState({sliderValue:e})},n.state={sliderValue:50},n}return Object(D.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"img-diff crossfade"},r.a.createElement("div",{className:"instructions"},"Move the slider around to compare the images."),r.a.createElement("div",{className:"slider-div"},r.a.createElement("span",null,"Before"),r.a.createElement(ne,{min:0,max:100,value:this.state.sliderValue,onChange:this.onOpacityChange}),r.a.createElement("span",null,"After")),r.a.createElement("div",{className:"overlay-container"},r.a.createElement("img",{src:this.props.beforeImage,alt:""}),r.a.createElement("img",{className:"on-top",src:this.props.afterImage,alt:"",style:{opacity:this.state.sliderValue/100}})))}}]),a}(r.a.Component),oe=new Map;oe.set("COMPARE_AUTOMATIC","Automatic"),oe.set("COMPARE_SLIDER_RIGHT_LEFT","Slider: Right - Left"),oe.set("COMPARE_CROSSFADE","Crossfade");var se=function(e){Object(B.a)(a,e);var t=Object(P.a)(a);function a(){return Object(M.a)(this,a),t.apply(this,arguments)}return Object(D.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"diff-view"},r.a.createElement("div",{className:"type-chooser"},r.a.createElement("span",null,"Comparison method: "),r.a.createElement(L,{optionMap:oe,value:this.props.type,onValueChange:function(e){I({type:"SET_COMPARE_TYPE",payload:e})}})),this.renderContents())}},{key:"renderContents",value:function(){var e=this.props.beforeImage;if(!e)return r.a.createElement(K,{message:"Before image is missing"});var t=this.props.afterImage;if(!t)return r.a.createElement(K,{message:"After image is missing"});switch(this.props.type){case"COMPARE_AUTOMATIC":return r.a.createElement(Q,{beforeImage:e,afterImage:t});case"COMPARE_CROSSFADE":return r.a.createElement(re,{beforeImage:e,afterImage:t});case"COMPARE_SLIDER_RIGHT_LEFT":return r.a.createElement(te,{beforeImage:e,afterImage:t});default:return r.a.createElement(K,{message:"Unknown compare type: ".concat(this.props.type)})}}}]),a}(r.a.Component),ie=Object(i.b)((function(e,t){return Object(c.a)(Object(c.a)({},t),{},{beforeImage:e.images.before.data,afterImage:e.images.after.data,type:e.comparisonType})}))(se),ce=a(23),le=a.n(ce),ue=function(e){Object(B.a)(a,e);var t=Object(P.a)(a);function a(e){var n;return Object(M.a)(this,a),(n=t.call(this,e)).webcamRef=void 0,n.onClick=function(e){var t=n.webcamRef.current.getScreenshot();t&&n.props.onPhoto(t)},n.webcamRef=r.a.createRef(),n}return Object(D.a)(a,[{key:"render",value:function(){var e=this.props.backgroundImage,t="take-image-div"+(e?" transparent-cam":""),a=S.getState().settings.screenshotFormat,n=S.getState().settings.preferredResolution,o={facingMode:{ideal:"environment"},width:{ideal:n.width},height:{ideal:n.height}};return r.a.createElement("div",{className:t},r.a.createElement(le.a,{ref:this.webcamRef,className:"cam",onClick:this.onClick,audio:!1,videoConstraints:o,forceScreenshotSourceSize:!0,screenshotFormat:"image/".concat(a)}),e?r.a.createElement("img",{src:e,alt:"",onClick:this.onClick}):null)}}]),a}(r.a.Component);function me(e){return r.a.createElement("label",{className:"button file-select"},r.a.createElement("input",{type:"file",onChange:pe(e)}),e.label)}function pe(e){return function(t){var a=t.target.files;if(a&&a[0]){var n=new FileReader;n.onload=function(t){var a=t.target.result,n=document.createElement("img");n.onload=function(){return e.onSuccess(a)},n.onerror=e.onError,n.src=a},n.readAsDataURL(a[0])}t.target.value=null}}var ge=function(e){Object(B.a)(a,e);var t=Object(P.a)(a);function a(e){var n;return Object(M.a)(this,a),(n=t.call(this,e)).onError=function(){n.setState({hasError:!0})},n.state={hasError:!1},n}return Object(D.a)(a,[{key:"render",value:function(){return this.props.image?r.a.createElement("div",{className:"image-upload"},r.a.createElement("img",{src:this.props.image,alt:""}),this.renderFileInputButton("Use a different image")):r.a.createElement("div",{className:"image-upload"},this.state.hasError&&r.a.createElement(J,{message:"The file you uploaded can is not a valid image. Please try again."}),this.renderFileInputButton("Select image"))}},{key:"renderFileInputButton",value:function(e){return r.a.createElement(me,{onSuccess:this.props.setImage,onError:this.onError,label:e})}}]),a}(r.a.Component);var he=function(e){var t=S.getState().settings.imageSource;switch(t){case"SOURCE_WEBCAM":return function(e){return r.a.createElement("div",{className:"step-get-image"},r.a.createElement("h2",null,"Take a photo"),r.a.createElement("div",{className:"instructions"},"First allow this website access to your camera. Then touch/click the image below to take a photo."),r.a.createElement(ue,{onPhoto:e.onImage,backgroundImage:e.backgroundImage}),r.a.createElement(X,{buttonText:"Download last image taken",fileName:"webcam-image",imageData:e.currentImage}))}(e);case"SOURCE_FILE":return function(e){return r.a.createElement("div",{className:"step-get-image"},r.a.createElement("h2",null,"Select an image"),r.a.createElement(ge,{image:e.currentImage,setImage:e.onImage}))}(e);default:return r.a.createElement(K,{message:'Unknown image source: "'.concat(t,'"')})}},fe=function(e){Object(B.a)(a,e);var t=Object(P.a)(a);function a(){var e;Object(M.a)(this,a);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).renderStep=function(t){var a,n=["step"];return t.number<=e.props.lastSelectableStep?t.number===e.props.currentStep?n.push("selected"):(n.push("selectable"),a=function(){return k(t.number)}):n.push("disabled"),r.a.createElement("li",{className:n.join(" "),key:t.number,onClick:a},t.name)},e}return Object(D.a)(a,[{key:"render",value:function(){var e=this.props.currentStep;return r.a.createElement("div",{className:"step-header"},r.a.createElement("ul",{className:"list"},this.props.stepList.map(this.renderStep)),r.a.createElement("div",{className:"buttons"},this.goToStepButton("Previous",e-1),this.goToStepButton("Next",e+1)))}},{key:"goToStepButton",value:function(e,t){var a=Boolean(0<=t&&t<=this.props.lastSelectableStep)?void 0:"disabled";return r.a.createElement("button",{className:a,onClick:function(e){return k(t)}},e)}}]),a}(r.a.Component),Ee=Object(i.b)((function(e,t){return Object(c.a)(Object(c.a)({},t),{},{lastSelectableStep:e.steps.completed,currentStep:e.steps.current,stepList:e.steps.list})}))(fe),de=function(e){Object(B.a)(a,e);var t=Object(P.a)(a);function a(){return Object(M.a)(this,a),t.apply(this,arguments)}return Object(D.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(Ee,null),r.a.createElement("div",{className:"step-content"},this.renderContents()),this.renderNextButtonIfPossible())}},{key:"renderContents",value:function(){var e=this.props.stepList[this.props.step].name;switch(e){case"Before photo":return r.a.createElement(he,{onImage:w,currentImage:this.props.beforeImageData});case"Do your thing":return r.a.createElement(q,{beforeImage:this.props.beforeImageData});case"After photo":var t=this.props.overlayBeforeImage&&this.props.beforeImageData||void 0;return r.a.createElement(he,{onImage:C,currentImage:this.props.afterImageData,backgroundImage:t});case"Compare photos":return r.a.createElement(ie,null);default:return r.a.createElement(K,{message:'Unknown step: "'.concat(e,'"')})}}},{key:"renderNextButtonIfPossible",value:function(){var e=this.props.stepList;if(e[this.props.step].canSkip){var t=this.props.step+1;if(t<e.length){return r.a.createElement("button",{className:"button",onClick:function(e){return k(t)}},"Next step")}}return null}}]),a}(r.a.Component),be=Object(i.b)((function(e,t){return Object(c.a)(Object(c.a)({},t),{},{beforeImageData:e.images.before.data,afterImageData:e.images.after.data,overlayBeforeImage:e.settings.overlayBeforeImage,step:e.steps.current,stepList:e.steps.list})}))(de);var ve=Object(i.b)((function(e,t){return Object(c.a)(Object(c.a)({},t),{},{screen:e.screen})}))((function(e){switch(e.screen){case"SCREEN_MENU":return r.a.createElement(T,null);case"SCREEN_STEPS":return r.a.createElement(be,null);case"SCREEN_SETTINGS":return r.a.createElement(Y,null);case"SCREEN_HOW_IT_WORKS":return r.a.createElement(A,null);case"SCREEN_PRIVACY":return r.a.createElement(z,null);default:return r.a.createElement(K,{message:'Unknown screen: "'.concat(e.screen,'"')})}}));a(46);function ye(){return r.a.createElement("div",{className:"app"},r.a.createElement(ve,null))}s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i.a,{store:S},r.a.createElement(ye,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.c7093a6b.chunk.js.map