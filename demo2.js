!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.beta=t():e.beta=t()}("undefined"!=typeof self?self:this,(()=>(()=>{"use strict";var e={};function t(e){return e._useProp(void 0)}function r(e,t){return e._useProp((()=>Object.assign(Object.assign({},t(e)),{_ctx:e})))._current}function n(e,t){return e._useGPUResource(t)}function c(e,t,r){t._useGPUUpdate(e,r)}(e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})})(e);class u{constructor(e){this._renders=[],this._canvasContext=e}addRender(e){this._renders.includes(e)||this._renders.push(e)}outputFrame(e){const t=this._canvasContext.getCurrentTexture();this._renders.forEach((r=>{r.renderTarget.setAndNotify(t),r.runFrame(e,[r.renderTarget])}))}}function o(e){const r=t(e),u=n(e,(e=>e.device.createBuffer({size:144,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST})));return c([u],e,(e=>{if(!u.current)return;var t=0,n=1,c=0,o=1;r.current&&(r.current<1?o=1-(c=.5-.5*r.current):n=1-(t=.5-.5/r.current));const i=new Float32Array([1,1,0,1,n,c,-1,-1,0,1,t,o,-1,1,0,1,t,c,1,1,0,1,n,c,1,-1,0,1,n,o,-1,-1,0,1,t,o]);e.device.queue.writeBuffer(u.current,0,i,0,i.length)})),{aspectFillRatio:r,vertexSourceCount:6,vertexSourceTotalBytes:144,vertexSourceStrideBytes:24,vertexSourceXYZWOffsetBytes:0,vertexSourceUVOffsetBytes:16,vertexSourceAsGPUBuffer:u}}function i(e){const{textureSource:u,vertexSource:i,renderTarget:s}=function(e){const r=t(e),u=t(e),o=t(e),i=t(e),s=n(e,(e=>e.device.createShaderModule({code:"@group(0) @binding(0) var<uniform> use_matrix: mat4x4<f32>;\n@group(0) @binding(1) var use_sampler: sampler;\n@group(0) @binding(2) var use_texture: texture_2d<f32>;\n\nstruct VertexOutput {\n  @builtin(position) pos: vec4<f32>;\n  @location(0) uv: vec2<f32>;\n}\n\n@stage(vertex)\nfn vertexRenderUV(\n  @location(0) pos_in: vec4<f32>,\n  @location(1) uv_in: vec2<f32>,\n) ->\n  VertexOutput\n{\n  var out: VertexOutput;\n  out.pos = pos_in;\n  out.uv = uv_in;\n  return out;\n}\n\n@stage(vertex)\nfn vertexRenderUVWithMatrix(\n  @location(0) pos_in: vec4<f32>,\n  @location(1) uv_in: vec2<f32>,\n) ->\n  VertexOutput\n{\n  var out: VertexOutput;\n  out.pos = use_matrix * pos_in;\n  out.uv = uv_in;\n  return out;\n}\n\n@stage(fragment)\nfn fragmentRenderUV(\n  @location(0) uv_in : vec2<f32>\n) ->\n  @location(0) vec4<f32>\n{\n  return textureSample(use_texture, use_sampler, uv_in.xy);\n}\n"}))),a=n(e,(e=>{var t;if(u.current)return e.device.createRenderPipeline({vertex:{module:s.current,entryPoint:(null===(t=r.current)||void 0===t?void 0:t.cameraSourceAsGPUBuffer)?"vertexRenderUVWithMatrix":"vertexRenderUV",buffers:[{arrayStride:u.current.vertexSourceStrideBytes,attributes:[{shaderLocation:0,offset:u.current.vertexSourceXYZWOffsetBytes,format:"float32x4"},{shaderLocation:1,offset:u.current.vertexSourceUVOffsetBytes,format:"float32x2"}]}]},fragment:{module:s.current,entryPoint:"fragmentRenderUV",targets:[{format:"rgba8unorm"}]},primitive:{topology:"triangle-list"},depthStencil:{depthWriteEnabled:!0,depthCompare:"less",format:"depth24plus"},layout:void 0})})),d=n(e,(e=>e.device.createSampler({magFilter:"linear",minFilter:"linear"}))),f=n(e,(e=>{var t,n,c,u;if(!a.current)return;if(!(null===(t=o.current)||void 0===t?void 0:t.textureSourceAsGPUTexture.current))return;const i=[{binding:1,resource:d.current},{binding:2,resource:null===(n=o.current)||void 0===n?void 0:n.textureSourceAsGPUTexture.current.createView()}];return(null===(c=r.current)||void 0===c?void 0:c.cameraSourceAsGPUBuffer)&&i.unshift({binding:0,resource:{buffer:null===(u=r.current)||void 0===u?void 0:u.cameraSourceAsGPUBuffer.current}}),e.device.createBindGroup({layout:a.current.getBindGroupLayout(0),entries:i})})),h=n(e,(e=>e.device.createTexture({size:[300,300],format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT})));return c([i],e,(e=>{var t,n;if(null===(t=r.current)||void 0===t||t.cameraSourceAsGPUBuffer.current,null===(n=o.current)||void 0===n||n.textureSourceAsGPUTexture.current,!u.current)return;if(!i.current)return;if(!a.current)return;if(!f.current)return;const c=e.commandEncoder.beginRenderPass({colorAttachments:[{view:i.current.createView(),clearValue:{r:0,g:0,b:0,a:1},loadOp:"clear",storeOp:"store"}],depthStencilAttachment:{view:h.current.createView(),depthClearValue:1,depthLoadOp:"clear",depthStoreOp:"store"}});c.setPipeline(a.current),c.setVertexBuffer(0,u.current.vertexSourceAsGPUBuffer.current),c.setBindGroup(0,f.current),c.draw(u.current.vertexSourceCount,1,0,0),c.end()})),{cameraSource:r,textureSource:o,vertexSource:u,renderTarget:i}}(e),a=r(e,o);return i.set(a),a.aspectFillRatio.set(850/1275),{textureSource:u,renderTarget:s}}function s(e){const{imageBitmap:r,label:u,textureSourceAsGPUTexture:o}=function(e){const r=t(e),u=t(e),o=n(e,(e=>{if(r.current)return e.device.createTexture({label:u.current,size:[r.current.width,r.current.height,1],format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT})}));return c([o],e,(e=>{r.current&&o.current&&e.device.queue.copyExternalImageToTexture({source:r.current},{texture:o.current},[r.current.width,r.current.height])})),{imageBitmap:r,label:u,textureSourceAsGPUTexture:o}}(e),i=u;return function(e,t){e._useEffect((e=>{const t=i.current;if(console.log({currentURL:t}),!t)return()=>{};var n=!1;const c=document.createElement("img");return c.src=t,c.decode().then((()=>n?void 0:createImageBitmap(c))).then((e=>{!n&&e&&r.set(e)})).catch(console.error),()=>{n=!0}}))}(e),{url:i,textureSourceAsGPUTexture:o}}class a{constructor(e,t){this._changeAtNextTick=!1,this._changedClockNumber=0,this._producedClockNumber=0,this._producerOperations=[],this._current=e,this._next=e,this._ctx=t}_attachProducerOperation(e){this._producerOperations.push(e)}_runIfNeededAt(e){return this._changeAtNextTick?(this._current=this._next,this._changeAtNextTick=!1,this._changedClockNumber=e,!0):this._changedClockNumber>=e}_produceIfNeededAt(e){this._producedClockNumber>=e||(this._producerOperations.forEach((t=>t._produceIfNeededAt(e))),this._producedClockNumber=e)}get current(){const e=this._ctx._currentAction;if(!e)throw new Error("It's only possible to read properties from within a reactive context");return e._attachDependency(this),this._current}getNonReactively(){return this._current}get readOnly(){return this}set(e){this._current!==e&&this.setAndNotify(e)}setAndNotify(e){this._next=e,this.notify()}change(e){this.set(e(this._current))}mutate(e){e(this._current),this.notify()}notify(){this._changeAtNextTick=!0}}class d{constructor(e,t){this._deps=new Set,this._cachedClockNumber=0,this._producedClockNumber=0,this._producerOperations=[],this._ctx=e,this._fn=t}_attachDependency(e){this._deps.add(e)}_attachProducerOperation(e){this._producerOperations.push(e)}_runIfNeededAt(e){if(this._cachedClockNumber>=e)return!0;var t=!1;if(this._deps.forEach((r=>{r._runIfNeededAt(e)&&(t=!0)})),!t&&this._cachedClockNumber>0)return!1;const r=this._ctx._currentAction;this._ctx._currentAction=this;const n=this._cachedResult;return"object"==typeof n&&"destroy"in n&&"function"==typeof n.destroy&&n.destroy(),this._cachedResult=this._fn(this._ctx),this._cachedClockNumber=e,this._ctx._currentAction=r,!0}_produceIfNeededAt(e){this._producedClockNumber>=e||(this._producerOperations.forEach((t=>t._produceIfNeededAt(e))),this._producedClockNumber=e)}get current(){const e=this._ctx._currentAction;if(!e)throw new Error("It's only possible to read properties from within a reactive context");return e._attachDependency(this),this._runIfNeededAt(this._ctx._currentClockNumber),this._cachedResult}getNonReactively(){return this._cachedResult}}class f{constructor(e,t){this._deps=new Set,this._producedClockNumber=0,this._ctx=e,this._fn=t}_attachDependency(e){this._deps.add(e)}_produceIfNeededAt(e){if(this._producedClockNumber>=e)return;this._producedClockNumber=e,this._deps.forEach((t=>t._runIfNeededAt(e))),this._deps.forEach((t=>t._produceIfNeededAt(e)));const t=this._ctx._currentAction;this._ctx._currentAction=this,this._fn(this._ctx),this._ctx._currentAction=t}}class h{constructor(e,t){this._deps=new Set,this._lastClockNumber=0,this._ctx=e,this._fn=t}_attachDependency(e){this._deps.add(e)}_runIfNeededAt(e){if(this._lastClockNumber>=e)return!0;var t=!1;if(this._deps.forEach((r=>{r._runIfNeededAt(e)&&(t=!0)})),!t&&this._lastClockNumber>0)return!1;const r=this._lastCancelFn;r&&r();const n=this._ctx._currentAction;this._ctx._currentAction=this,this._lastCancelFn=this._fn(this._ctx),this._ctx._currentAction=n,this._lastClockNumber=e}}class _{constructor(e){this._currentClockNumber=1,this._effects=[],this._device=e}get commandEncoder(){return this._commandEncoder}get device(){return this._device}_useProp(e){return new a("function"==typeof e?e():e,this)}_useGPUResource(e){return new d(this,e)}_useGPUUpdate(e,t){const r=new f(this,t);e.forEach((e=>e._attachProducerOperation(r)))}_useEffect(e){this._effects.push(new h(this,e))}}var l=function(e,t,r,n){return new(r||(r=Promise))((function(c,u){function o(e){try{s(n.next(e))}catch(e){u(e)}}function i(e){try{s(n.throw(e))}catch(e){u(e)}}function s(e){var t;e.done?c(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(o,i)}s((n=n.apply(e,t||[])).next())}))};function p(){var e,t;const r=null===(t=null===(e=navigator.gpu)||void 0===e?void 0:e.getPreferredCanvasFormat)||void 0===t?void 0:t.bind(navigator.gpu);return r?r():"rgba8unorm"}var v;return v=e=>{const t=r(e,s);t.url.set("./assets/fireweed.jpg");const n=r(e,i),{renderTarget:c}=n;return function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var c=0;for(n=Object.getOwnPropertySymbols(e);c<n.length;c++)t.indexOf(n[c])<0&&Object.prototype.propertyIsEnumerable.call(e,n[c])&&(r[n[c]]=e[n[c]])}return r}(n,["renderTarget"]).textureSource.set(t),{renderTarget:c}},function(e){(()=>l(this,void 0,void 0,(function*(){const e=yield function(e="high-performance"){return l(this,void 0,void 0,(function*(){if(!navigator.gpu)throw new Error("Your browser doesn't have WebGPU enabled!");const t=yield navigator.gpu.requestAdapter({powerPreference:e});if(!t)throw new Error("Failed to get the GPU adapter!");return t.requestDevice()}))}(),t=yield function(e,t){return l(this,void 0,void 0,(function*(){const r=e.getContext("webgpu");if(!r)throw new Error("Failed to get a WebGPU canvas context!");return r.configure({device:t,format:p(),alphaMode:"opaque"}),r}))}(function(){const e=document.querySelector("canvas.main");if(!e)throw new Error("The main canvas wasn't found in the HTML!");return e}(),e),r=((e,t)=>{const r=function(e,t){const r=new _(e),n=Object.assign(Object.assign({},t(r)),{_ctx:r});return n.runFrame=(e,t)=>{r._currentClockNumber+=1,r._commandEncoder=e;const n=r._currentClockNumber;t.forEach((e=>e._produceIfNeededAt(n))),r._effects.forEach((e=>e._runIfNeededAt(n))),r._commandEncoder=void 0},n}(e,v),n=new u(t);return n.addRender(r),function(e){n.outputFrame(e)}})(e,t);requestAnimationFrame((function t(){!function(e,t){const r=e.createCommandEncoder();t(r),e.queue.submit([r.finish()])}(e,r),requestAnimationFrame(t)}))})))().catch((e=>{document.querySelector("body").innerHTML=e,console.error(e)}))}(),e})()));
//# sourceMappingURL=demo2.js.map