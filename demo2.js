!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.beta=t():e.beta=t()}("undefined"!=typeof self?self:this,(()=>(()=>{"use strict";var e={};(e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})})(e);var t=function(){function e(e,t){this._store=[],this._storeIndex=0,this._storeUnits=[],this._storeUnitsIndex=0,this._storeGPUActions=[],this._storeGPUActionsIndex=0,this._needsUnitReRun=!0,this._unitFn=e,this.device=t}return e.prototype._nextStoreIndex=function(){var e=this._storeIndex;return this._storeIndex=e+1,e},e.prototype._nextStoreUnitsIndex=function(){var e=this._storeUnitsIndex;return this._storeUnitsIndex=e+1,e},e.prototype._nextStoreGPUActionsIndex=function(){var e=this._storeGPUActionsIndex;return this._storeGPUActionsIndex=e+1,e},e.prototype.runUnitIfNeeded=function(e){var t=!1;return this._storeUnits.forEach((function(e){var n=e();(null==n?void 0:n._ctx.runUnitIfNeeded(n))&&(t=!0)})),!(!this._needsUnitReRun&&!t||(this._storeIndex=0,this._storeUnitsIndex=0,this._storeGPUActionsIndex=0,this._needsUnitReRun=!1,Object.assign(e,this._unitFn(this)),0))},e.prototype.runGPUActionsIfNeeded=function(e){var t=this;this._storeUnits.forEach((function(t){var n=t();null==n||n._ctx.runGPUActionsIfNeeded(e)})),this.commandEncoder=e,this._storeGPUActions.forEach((function(e,n){var r=e[0];e[1],e[2]&&(r(t),t._storeGPUActions[n][2]=!1)})),this.commandEncoder=void 0},e.prototype._useProp=function(e){var t=this._nextStoreIndex(),n=this._store[t];if(n)return n;var r=this,o="function"==typeof e?e():e,i=function(){return o};return i.set=function(e){o!==e&&(o=e,r._needsUnitReRun=!0)},i.change=function(e){var t=e(o);o!==t&&(o=t,r._needsUnitReRun=!0)},i.mutate=function(e){e(o),r._needsUnitReRun=!0},this._store[t]=i,i},e.prototype._useUnitProp=function(e){var t=this._nextStoreUnitsIndex(),n=this._storeUnits[t];if(n)return n;var r=this,o="function"==typeof e?e():e,i=function(){return o};return i.set=function(e){o!==e&&(o=e,r._needsUnitReRun=!0)},i.change=function(e){var t=e(o);o!==t&&(o=t,r._needsUnitReRun=!0)},i.mutate=function(e){e(o),r._needsUnitReRun=!0},this._storeUnits[t]=i,i},e.prototype._useGPUResource=function(e,t){var n=this._nextStoreIndex(),r=this._store[n];if(!r){var o=e(this);return this._store[n]=[o,t],o}if(t.every((function(e,t){return e===r[1][t]})))return r[0];var i=e(this),u=r[0];return r[0]=i,r[1]=t,u&&"function"==typeof u.destroy&&u.destroy(),i},e.prototype._useGPUAction=function(e,t){var n=this._nextStoreGPUActionsIndex(),r=this._storeGPUActions[n];r?t.every((function(e,t){return e===r[1][t]}))||(r[0]=e,r[1]=t,r[2]=!0):this._storeGPUActions[n]=[e,t,!0]},e.prototype._useEffect=function(e,t){var n=this._nextStoreIndex(),r=this._store[n];if(r)t.every((function(e,t){return e===r[1][t]}))||(r[0]&&r[0](),r[0]=e({}),r[1]=t);else{var o=e({});this._store[n]=[o,t]}},e}(),n=function(){return n=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},n.apply(this,arguments)};function r(e){return e._useProp(void 0)}function o(e){return e._useUnitProp(void 0)}function i(e,r){return e._useUnitProp((function(){return function(e,r){var o=new t(r,e);return n(n({},r(o)),{_ctx:o})}(e.device,r)}))()}function u(e,t,n){return e._useGPUResource(t,n)}function a(e,t,n){e._useGPUAction(t,n)}const s=function(){function e(e){this._renders=[],this._canvasContext=e}return e.prototype.addRender=function(e){this._renders.includes(e)||this._renders.push(e)},e.prototype.outputFrame=function(e){var t=this._canvasContext.getCurrentTexture();this._renders.forEach((function(n){n.renderTarget.set(t),n.runFrame(e)}))},e}();function c(e){var t=r(e),n=u(e,(function(e){return e.device.createBuffer({size:144,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST})}),[]);return a(e,(function(e){var r=t();if(n){var o=0,i=1,u=0,a=1;r&&(r<1?a=1-(u=.5-.5*r):i=1-(o=.5-.5/r));var s=new Float32Array([1,1,0,1,i,u,-1,-1,0,1,o,a,-1,1,0,1,o,u,1,1,0,1,i,u,1,-1,0,1,i,a,-1,-1,0,1,o,a]);e.device.queue.writeBuffer(n,0,s,0,s.length)}}),[n,t()]),{aspectFillRatio:t,vertexSourceCount:6,vertexSourceTotalBytes:144,vertexSourceStrideBytes:24,vertexSourceXYZWOffsetBytes:0,vertexSourceUVOffsetBytes:16,vertexSourceAsGPUBuffer:n}}function f(e){var t=function(e){var t,n,i=o(e),s=o(e),c=o(e),f=r(e),d=null===(t=i())||void 0===t?void 0:t.cameraSourceAsGPUBuffer,l=null===(n=c())||void 0===n?void 0:n.textureSourceAsGPUTexture,v=u(e,(function(e){return e.device.createShaderModule({code:"@group(0) @binding(0) var<uniform> use_matrix: mat4x4<f32>;\n@group(0) @binding(1) var use_sampler: sampler;\n@group(0) @binding(2) var use_texture: texture_2d<f32>;\n\nstruct VertexOutput {\n  @builtin(position) pos: vec4<f32>;\n  @location(0) uv: vec2<f32>;\n}\n\n@stage(vertex)\nfn vertexRenderUV(\n  @location(0) pos_in: vec4<f32>,\n  @location(1) uv_in: vec2<f32>,\n) ->\n  VertexOutput\n{\n  var out: VertexOutput;\n  out.pos = pos_in;\n  out.uv = uv_in;\n  return out;\n}\n\n@stage(vertex)\nfn vertexRenderUVWithMatrix(\n  @location(0) pos_in: vec4<f32>,\n  @location(1) uv_in: vec2<f32>,\n) ->\n  VertexOutput\n{\n  var out: VertexOutput;\n  out.pos = use_matrix * pos_in;\n  out.uv = uv_in;\n  return out;\n}\n\n@stage(fragment)\nfn fragmentRenderUV(\n  @location(0) uv_in : vec2<f32>\n) ->\n  @location(0) vec4<f32>\n{\n  return textureSample(use_texture, use_sampler, uv_in.xy);\n}\n"})}),[]),p=u(e,(function(e){var t=s();if(t)return e.device.createRenderPipeline({vertex:{module:v,entryPoint:d?"vertexRenderUVWithMatrix":"vertexRenderUV",buffers:[{arrayStride:t.vertexSourceStrideBytes,attributes:[{shaderLocation:0,offset:t.vertexSourceXYZWOffsetBytes,format:"float32x4"},{shaderLocation:1,offset:t.vertexSourceUVOffsetBytes,format:"float32x2"}]}]},fragment:{module:v,entryPoint:"fragmentRenderUV",targets:[{format:"rgba8unorm"}]},primitive:{topology:"triangle-list"},depthStencil:{depthWriteEnabled:!0,depthCompare:"less",format:"depth24plus"},layout:void 0})}),[v,s()]),h=u(e,(function(e){return e.device.createSampler({magFilter:"linear",minFilter:"linear"})}),[]),x=u(e,(function(e){if(p&&l){var t=[{binding:1,resource:h},{binding:2,resource:l.createView()}];return d&&t.unshift({binding:0,resource:{buffer:d}}),e.device.createBindGroup({layout:p.getBindGroupLayout(0),entries:t})}}),[p,d,l,h]),_=u(e,(function(e){return e.device.createTexture({size:[300,300],format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT})}),[]);return a(e,(function(e){var t=s(),n=f();if(t&&n&&p&&x){var r=e.commandEncoder.beginRenderPass({colorAttachments:[{view:n.createView(),clearValue:{r:0,g:0,b:0,a:1},loadOp:"clear",storeOp:"store"}],depthStencilAttachment:{view:_.createView(),depthClearValue:1,depthLoadOp:"clear",depthStoreOp:"store"}});r.setPipeline(p),r.setVertexBuffer(0,t.vertexSourceAsGPUBuffer),r.setBindGroup(0,x),r.draw(t.vertexSourceCount,1,0,0),r.end()}}),[s(),f(),p,x]),{cameraSource:i,textureSource:c,vertexSource:s,renderTarget:f}}(e),n=t.textureSource,s=t.vertexSource,f=t.renderTarget,d=i(e,c);return s.set(d),d.aspectFillRatio.set(850/1275),{textureSource:n,renderTarget:f}}function d(e){var t=this,n=function(e){var t,n,o,i,s=r(e),c=r(e),f=null!==(n=null===(t=s())||void 0===t?void 0:t.width)&&void 0!==n?n:16,d=null!==(i=null===(o=s())||void 0===o?void 0:o.height)&&void 0!==i?i:16,l=u(e,(function(e){return e.device.createTexture({label:c(),size:[f,d,1],format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT})}),[f,d,c()]);return a(e,(function(e){var t=s();t&&l&&e.device.queue.copyExternalImageToTexture({source:t},{texture:l},[t.width,t.height])}),[s(),l]),{imageBitmap:s,label:c,textureSourceAsGPUTexture:l}}(e),o=n.imageBitmap,i=n.label,s=n.textureSourceAsGPUTexture,c=i;return function(e,n,r,o){e._useEffect((function(e){var r,o,i,u,a=!1;return(r=t,o=void 0,i=void 0,u=function(){var e,t;return function(e,t){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!((o=(o=u.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=t.call(e,u)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}}(this,(function(n){switch(n.label){case 0:return(e=c())?((t=document.createElement("img")).src=e,[4,t.decode()]):[2];case 1:return n.sent(),[4,createImageBitmap(t)];case 2:return[2,n.sent()]}}))},new(i||(i=Promise))((function(e,t){function n(e){try{s(u.next(e))}catch(e){t(e)}}function a(e){try{s(u.throw(e))}catch(e){t(e)}}function s(t){var r;t.done?e(t.value):(r=t.value,r instanceof i?r:new i((function(e){e(r)}))).then(n,a)}s((u=u.apply(r,o||[])).next())}))).then((function(e){return a||n(e)})).catch((function(e){console.error(e),a=!0})),function(){a=!0}}),o)}(e,o.set,0,[c()]),{url:c,textureSourceAsGPUTexture:s}}var l=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function u(e){try{s(r.next(e))}catch(e){i(e)}}function a(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,a)}s((r=r.apply(e,t||[])).next())}))},v=function(e,t){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!((o=(o=u.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=t.call(e,u)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};function p(e){return void 0===e&&(e="high-performance"),l(this,void 0,void 0,(function(){var t;return v(this,(function(n){switch(n.label){case 0:if(!navigator.gpu)throw new Error("Your browser doesn't have WebGPU enabled!");return[4,navigator.gpu.requestAdapter({powerPreference:e})];case 1:if(!(t=n.sent()))throw new Error("Failed to get the GPU adapter!");return[2,t.requestDevice()]}}))}))}function h(){var e=document.querySelector("canvas.main");if(!e)throw new Error("The main canvas wasn't found in the HTML!");return e}function x(e,t){return l(this,void 0,void 0,(function(){var n;return v(this,(function(r){if(!(n=e.getContext("webgpu")))throw new Error("Failed to get a WebGPU canvas context!");return n.configure({device:t,format:_(),alphaMode:"opaque"}),[2,n]}))}))}function _(){var e,t,n=null===(t=null===(e=navigator.gpu)||void 0===e?void 0:e.getPreferredCanvasFormat)||void 0===t?void 0:t.bind(navigator.gpu);return n?n():"rgba8unorm"}var y;return y=function(e){var t=i(e,d);t.url.set("./assets/fireweed.jpg");var n=i(e,f),r=n.renderTarget;return function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(n,["renderTarget"]).textureSource.set(t),{renderTarget:r}},function(e){l(this,void 0,void 0,(function(){function e(){!function(e,t){var n=e.createCommandEncoder();t(n),e.queue.submit([n.finish()])}(r,i),requestAnimationFrame(e)}var r,o,i;return v(this,(function(u){switch(u.label){case 0:return[4,p()];case 1:return r=u.sent(),[4,x(h(),r)];case 2:return o=u.sent(),i=function(e,r){var o=function(e,r){var o=new t(r,e),i=n(n({},r(o)),{_ctx:o});return i.runFrame=function(e){return function(e,t){var n=e._ctx;n.runUnitIfNeeded(e),n.runGPUActionsIfNeeded(t)}(i,e)},i}(e,y),i=new s(r);return i.addRender(o),function(e){i.outputFrame(e)}}(r,o),requestAnimationFrame(e),[2]}}))})).catch((function(e){document.querySelector("body").innerHTML=e,console.error(e)}))}(),e})()));
//# sourceMappingURL=demo2.js.map