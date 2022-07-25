!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.beta=t():e.beta=t()}("undefined"!=typeof self?self:this,(()=>(()=>{"use strict";var e={};function t(e){return e._useProp(void 0)}function r(e,t){return e._useProp((()=>Object.assign(Object.assign({},t(e)),{_ctx:e})))._current}function n(e,t){return e._useGPUResource(t)}function u(e,t,r){t._useGPUUpdate(e,r)}(e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})})(e);class i{constructor(e){this._renders=[],this._canvasContext=e}addRender(e){this._renders.includes(e)||this._renders.push(e)}outputFrame(e){const t=this._canvasContext.getCurrentTexture();t.width=this._canvasContext.canvas.width,t.height=this._canvasContext.canvas.height,t.format="rgba8unorm",this._renders.forEach((r=>{r.renderTarget.setAndNotify(t),r.runFrame(e,[r.renderTarget])}))}}const c={xyzwOffsetBytes:0,uvOffsetBytes:4*Float32Array.BYTES_PER_ELEMENT,strideBytes:6*Float32Array.BYTES_PER_ELEMENT};function o(e){const r=t(e),i=n(e,(e=>e.device.createBuffer({size:6*c.strideBytes,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST})));return u([i],e,(e=>{if(!i.current)return;var t=0,n=1,u=0,c=1;r.current&&(r.current<1?c=1-(u=.5-.5*r.current):n=1-(t=.5-.5/r.current));const o=new Float32Array([1,1,0,1,n,u,-1,-1,0,1,t,c,-1,1,0,1,t,u,1,1,0,1,n,u,1,-1,0,1,n,c,-1,-1,0,1,t,c]);e.device.queue.writeBuffer(i.current,0,o,0,o.length)})),{aspectFillRatio:r,resultVertexBuffer:i,resultVertexBufferLayout:c}}function s(e){const{textureSource:i,vertexBuffer:c,vertexBufferLayout:s,renderTarget:a}=function(e){const r=t(e),i=t(e),c=t(e),o=t(e),s=t(e),a=n(e,(e=>e.device.createShaderModule({code:"@group(0) @binding(0) var<uniform> use_matrix: mat4x4<f32>;\n@group(0) @binding(1) var use_sampler: sampler;\n@group(0) @binding(2) var use_texture: texture_2d<f32>;\n\nstruct VertexOutput {\n  @builtin(position) pos: vec4<f32>,\n  @location(0) uv: vec2<f32>,\n}\n\n@stage(vertex)\nfn vertexRenderUV(\n  @location(0) pos_in: vec4<f32>,\n  @location(1) uv_in: vec2<f32>,\n) ->\n  VertexOutput\n{\n  var out: VertexOutput;\n  out.pos = pos_in;\n  out.uv = uv_in;\n  return out;\n}\n\n@stage(vertex)\nfn vertexRenderUVWithMatrix(\n  @location(0) pos_in: vec4<f32>,\n  @location(1) uv_in: vec2<f32>,\n) ->\n  VertexOutput\n{\n  var out: VertexOutput;\n  out.pos = use_matrix * pos_in;\n  out.uv = uv_in;\n  return out;\n}\n\n@stage(fragment)\nfn fragmentRenderUV(\n  @location(0) uv_in : vec2<f32>\n) ->\n  @location(0) vec4<f32>\n{\n  return textureSample(use_texture, use_sampler, uv_in.xy);\n}\n"}))),d=n(e,(e=>{if(c.current&&s.current)return e.device.createRenderPipeline({layout:"auto",primitive:{topology:"triangle-list"},vertex:{module:a.current,entryPoint:r.current?"vertexRenderUVWithMatrix":"vertexRenderUV",buffers:[{arrayStride:c.current.strideBytes,attributes:[{shaderLocation:0,offset:c.current.xyzwOffsetBytes,format:"float32x4"},{shaderLocation:1,offset:c.current.uvOffsetBytes,format:"float32x2"}]}]},fragment:{module:a.current,entryPoint:"fragmentRenderUV",targets:[{format:s.current.format}]},depthStencil:{depthWriteEnabled:!0,depthCompare:"less",format:"depth24plus"}})})),f=n(e,(e=>e.device.createSampler({magFilter:"linear",minFilter:"linear"}))),h=n(e,(e=>{if(!d.current)return;if(!o.current)return;const t=[{binding:1,resource:f.current},{binding:2,resource:o.current.createView()}];return r.current&&t.unshift({binding:0,resource:{buffer:r.current}}),e.device.createBindGroup({layout:d.current.getBindGroupLayout(0),entries:t})})),_=n(e,(e=>{if(s.current)return e.device.createTexture({size:{width:s.current.width,height:s.current.height},format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT})}));return u([s],e,(e=>{if(!i.current)return;if(!c.current)return;if(!s.current)return;if(!_.current)return;if(!d.current)return;if(!h.current)return;const t=i.current.size/c.current.strideBytes,r=e.commandEncoder.beginRenderPass({colorAttachments:[{view:s.current.createView(),clearValue:{r:0,g:0,b:0,a:1},loadOp:"clear",storeOp:"store"}],depthStencilAttachment:{view:_.current.createView(),depthClearValue:1,depthLoadOp:"clear",depthStoreOp:"store"}});r.setPipeline(d.current),r.setVertexBuffer(0,i.current),r.setBindGroup(0,h.current),r.draw(t,1,0,0),r.end()})),{cameraMatrixBuffer:r,textureSource:o,vertexBuffer:i,vertexBufferLayout:c,renderTarget:s}}(e),d=r(e,o);c.setFrom(d.resultVertexBuffer),s.set(d.resultVertexBufferLayout);const f=function(e,t){return e._useDerived((e=>{if(i.current&&a.current)return i.current.width*a.current.height/(i.current.height*a.current.width)}))}(e);return d.aspectFillRatio.setFrom(f),{textureSource:i,renderTarget:a}}function a(e){const r=t(e),i=t(e),c=n(e,(e=>{var t,r;return(null===(t=i.current)||void 0===t?void 0:t.byteLength)&&e.device.createBuffer({size:null===(r=i.current)||void 0===r?void 0:r.byteLength,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})}));u([c],e,(e=>{c.current&&i.current&&e.device.queue.writeBuffer(c.current,0,i.current,0,i.current.length)}));const o=n(e,(e=>{var t;let r;if(10===(null===(t=i.current)||void 0===t?void 0:t.length))return r="@group(0) @binding(0) var<uniform> kernel_3x3: Kernel3x3;\n@group(0) @binding(1) var texture_in: texture_2d<f32>;\n@group(0) @binding(2) var texture_out: texture_storage_2d<rgba8unorm, write>;\n\nstruct Kernel3x3 {\n  bias: f32,\n  aa: f32,\n  ba: f32,\n  ca: f32,\n  ab: f32,\n  bb: f32,\n  cb: f32,\n  ac: f32,\n  bc: f32,\n  cc: f32,\n}\n\n// TODO: What is the most likely optimal workgroup size?\n@stage(compute) @workgroup_size(32, 1, 1)\nfn computeTextureFilterConvolve3x3(\n  @builtin(global_invocation_id) global_id: vec3<u32>,\n) {\n  let b = vec2<i32>(global_id.xy);\n  let a = max(b - 1, vec2<i32>(0));\n  let c = min(b + 1, min(\n    textureDimensions(texture_in),\n    textureDimensions(texture_out),\n  ));\n\n  var sum = vec4<f32>(kernel_3x3.bias);\n\n  sum = sum + kernel_3x3.aa * textureLoad(texture_in, vec2<i32>(a.x, a.y), 0);\n  sum = sum + kernel_3x3.ba * textureLoad(texture_in, vec2<i32>(b.x, a.y), 0);\n  sum = sum + kernel_3x3.ca * textureLoad(texture_in, vec2<i32>(c.x, a.y), 0);\n\n  sum = sum + kernel_3x3.ab * textureLoad(texture_in, vec2<i32>(a.x, b.y), 0);\n  sum = sum + kernel_3x3.bb * textureLoad(texture_in, vec2<i32>(b.x, b.y), 0);\n  sum = sum + kernel_3x3.cb * textureLoad(texture_in, vec2<i32>(c.x, b.y), 0);\n\n  sum = sum + kernel_3x3.ac * textureLoad(texture_in, vec2<i32>(a.x, c.y), 0);\n  sum = sum + kernel_3x3.bc * textureLoad(texture_in, vec2<i32>(b.x, c.y), 0);\n  sum = sum + kernel_3x3.cc * textureLoad(texture_in, vec2<i32>(c.x, c.y), 0);\n\n  textureStore(texture_out, b, sum);\n}\n",e.device.createComputePipeline({layout:"auto",compute:{module:e.device.createShaderModule({code:"@group(0) @binding(0) var<uniform> kernel_3x3: Kernel3x3;\n@group(0) @binding(1) var texture_in: texture_2d<f32>;\n@group(0) @binding(2) var texture_out: texture_storage_2d<rgba8unorm, write>;\n\nstruct Kernel3x3 {\n  bias: f32,\n  aa: f32,\n  ba: f32,\n  ca: f32,\n  ab: f32,\n  bb: f32,\n  cb: f32,\n  ac: f32,\n  bc: f32,\n  cc: f32,\n}\n\n// TODO: What is the most likely optimal workgroup size?\n@stage(compute) @workgroup_size(32, 1, 1)\nfn computeTextureFilterConvolve3x3(\n  @builtin(global_invocation_id) global_id: vec3<u32>,\n) {\n  let b = vec2<i32>(global_id.xy);\n  let a = max(b - 1, vec2<i32>(0));\n  let c = min(b + 1, min(\n    textureDimensions(texture_in),\n    textureDimensions(texture_out),\n  ));\n\n  var sum = vec4<f32>(kernel_3x3.bias);\n\n  sum = sum + kernel_3x3.aa * textureLoad(texture_in, vec2<i32>(a.x, a.y), 0);\n  sum = sum + kernel_3x3.ba * textureLoad(texture_in, vec2<i32>(b.x, a.y), 0);\n  sum = sum + kernel_3x3.ca * textureLoad(texture_in, vec2<i32>(c.x, a.y), 0);\n\n  sum = sum + kernel_3x3.ab * textureLoad(texture_in, vec2<i32>(a.x, b.y), 0);\n  sum = sum + kernel_3x3.bb * textureLoad(texture_in, vec2<i32>(b.x, b.y), 0);\n  sum = sum + kernel_3x3.cb * textureLoad(texture_in, vec2<i32>(c.x, b.y), 0);\n\n  sum = sum + kernel_3x3.ac * textureLoad(texture_in, vec2<i32>(a.x, c.y), 0);\n  sum = sum + kernel_3x3.bc * textureLoad(texture_in, vec2<i32>(b.x, c.y), 0);\n  sum = sum + kernel_3x3.cc * textureLoad(texture_in, vec2<i32>(c.x, c.y), 0);\n\n  textureStore(texture_out, b, sum);\n}\n"}),entryPoint:"computeTextureFilterConvolve3x3"}})})),s=n(e,(e=>{if(r.current)return e.device.createTexture({format:"rgba8unorm",size:{width:r.current.width,height:r.current.height},usage:GPUTextureUsage.COPY_DST|GPUTextureUsage.STORAGE_BINDING|GPUTextureUsage.TEXTURE_BINDING})})),a=n(e,(e=>o.current&&c.current&&r.current&&s.current&&e.device.createBindGroup({layout:o.current.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:c.current}},{binding:1,resource:r.current.createView()},{binding:2,resource:s.current.createView()}]})));return u([s],e,(e=>{if(!r.current)return;if(!o.current)return;if(!a.current)return;const t=e.commandEncoder.beginComputePass();t.setPipeline(o.current),t.setBindGroup(0,a.current),t.dispatchWorkgroups(r.current.width/32,r.current.height/1),t.end()})),{textureSource:r,setKernel3x3:function(e,t,r,n={}){var u,c;if(n.scale||n.normalize){var o=null!==(u=n.scale)&&void 0!==u?u:1;if(n.normalize){var s=0;s=e.reduce(((e,t)=>e+t),s),s=t.reduce(((e,t)=>e+t),s),0!==(s=r.reduce(((e,t)=>e+t),s))&&(o/=s)}1!==o&&(e=e.map((e=>e*o)),t=t.map((e=>e*o)),r=r.map((e=>e*o)))}const a=new Float32Array(10);a[0]=null!==(c=n.bias)&&void 0!==c?c:0,a.set(e,1),a.set(t,4),a.set(r,7),i.set(a)},resultTexture:s}}function d(e){const{imageBitmap:r,label:i,resultTexture:c}=function(e){const r=t(e),i=t(e),c=n(e,(e=>{if(r.current)return e.device.createTexture({label:i.current,size:{width:r.current.width,height:r.current.height},format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT})}));return u([c],e,(e=>{r.current&&c.current&&e.device.queue.copyExternalImageToTexture({source:r.current},{texture:c.current},{width:r.current.width,height:r.current.height})})),{imageBitmap:r,label:i,resultTexture:c}}(e),o=i;return function(e,t){e._useEffect((e=>{const t=o.current;if(!t)return()=>{};var n=!1;const u=document.createElement("img");return u.src=t,u.decode().then((()=>n?void 0:createImageBitmap(u))).then((e=>{!n&&e&&r.set(e)})).catch(console.error),()=>{n=!0}}))}(e),{url:o,resultTexture:c}}Float32Array.BYTES_PER_ELEMENT,Float32Array.BYTES_PER_ELEMENT;class f{constructor(e,t){this._changeAtNextTick=!1,this._changedClockNumber=0,this._producedClockNumber=0,this._producerOperations=[],this._current=e,this._next=e,this._ctx=t}_attachProducerOperation(e){this._producerOperations.push(e)}_runIfNeededAt(e){const t=this._readingFrom;return t&&!this._changeAtNextTick?t._runIfNeededAt(e):this._changeAtNextTick?(delete this._readingFrom,this._current=this._next,this._changeAtNextTick=!1,this._changedClockNumber=e,!0):this._changedClockNumber>=e}_produceIfNeededAt(e){var t;if(this._producedClockNumber>=e)return!0;var r=!1;return(null===(t=this._readingFrom)||void 0===t?void 0:t._produceIfNeededAt(e))&&(r=!0),this._producerOperations.forEach((t=>{t._produceIfNeededAt(e)&&(r=!0)})),!(!r&&this._changedClockNumber<e&&this._producedClockNumber>0||(this._producedClockNumber=e,0))}get current(){const e=this._ctx._currentAction;if(!e)throw new Error("It's only possible to read properties from within a reactive context");e._attachDependency(this);const t=this._readingFrom;return t?t.current:this._current}getNonReactively(){const e=this._readingFrom;return e?e.getNonReactively():this._current}get readOnly(){return this}setFrom(e){this._readingFrom=e}set(e){this._current!==e&&(this._next=e,this.notify())}setAndNotify(e){this._next=e,this.notify()}change(e){if(this._readingFrom)throw new Error("changing a property that was set from another property is not yet supported");this.set(e(this._current))}mutate(e){if(this._readingFrom)throw new Error("mutating a property that was set from another property is not yet supported");e(this._current),this.notify()}notify(){this._changeAtNextTick=!0}}class h{constructor(e,t){this._deps=new Set,this._cachedClockNumber=0,this._producedClockNumber=0,this._producerOperations=[],this._ctx=e,this._fn=t}_attachDependency(e){this._deps.add(e)}_attachProducerOperation(e){this._producerOperations.push(e)}_runIfNeededAt(e){if(this._cachedClockNumber>=e)return!0;var t=!1;if(this._deps.forEach((r=>{r._runIfNeededAt(e)&&(t=!0)})),!t&&this._cachedClockNumber>0)return!1;const r=this._ctx._currentAction;this._ctx._currentAction=this;const n=this._cachedResult;return"object"==typeof n&&"destroy"in n&&"function"==typeof n.destroy&&n.destroy(),this._cachedResult=this._fn(this._ctx),this._cachedClockNumber=e,this._ctx._currentAction=r,!0}_produceIfNeededAt(e){if(this._producedClockNumber>=e)return!0;var t=!1;return this._deps.forEach((r=>{r._produceIfNeededAt(e)&&(t=!0)})),this._producerOperations.forEach((r=>{r._produceIfNeededAt(e)&&(t=!0)})),!(!t&&this._producedClockNumber>0||(this._producedClockNumber=e,0))}get current(){const e=this._ctx._currentAction;if(!e)throw new Error("It's only possible to read properties from within a reactive context");return e._attachDependency(this),this._runIfNeededAt(this._ctx._currentClockNumber),this._cachedResult}getNonReactively(){return this._cachedResult}}class _{constructor(e,t){this._deps=new Set,this._producedClockNumber=0,this._ctx=e,this._fn=t}_attachDependency(e){this._deps.add(e)}_produceIfNeededAt(e){if(this._producedClockNumber>=e)return!1;const t=this._producedClockNumber;this._producedClockNumber=e;var r=!1;if(this._deps.forEach((t=>{t._runIfNeededAt(e)&&(r=!0)})),this._deps.forEach((t=>{t._produceIfNeededAt(e)&&(r=!0)})),!r&&t>0)return!1;const n=this._ctx._currentAction;return this._ctx._currentAction=this,this._fn(this._ctx),this._ctx._currentAction=n,!0}}class l{constructor(e,t){this._deps=new Set,this._lastClockNumber=0,this._ctx=e,this._fn=t}_attachDependency(e){this._deps.add(e)}_runIfNeededAt(e){if(this._lastClockNumber>=e)return!0;var t=!1;if(this._deps.forEach((r=>{r._runIfNeededAt(e)&&(t=!0)})),!t&&this._lastClockNumber>0)return!1;const r=this._lastCancelFn;r&&r();const n=this._ctx._currentAction;this._ctx._currentAction=this,this._lastCancelFn=this._fn(this._ctx),this._ctx._currentAction=n,this._lastClockNumber=e}}class x{constructor(e){this._currentClockNumber=1,this._effects=[];const t=e.createBuffer.bind(e);e.createBuffer=e=>{const r=t(e);return r.size=e.size,r.usage=e.usage,r};const r=e.createTexture.bind(e);e.createTexture=e=>{const t=r(e);return t.width=e.size.width,t.height=e.size.height,t.format=e.format,t},this._device=e}get commandEncoder(){return this._commandEncoder}get device(){return this._device}_useProp(e){return new f("function"==typeof e?e():e,this)}_useGPUResource(e){return new h(this,e)}_useGPUUpdate(e,t){const r=new _(this,t);e.forEach((e=>e._attachProducerOperation(r)))}_useEffect(e){this._effects.push(new l(this,e))}_useDerived(e){return new h(this,e)}}var m=function(e,t,r,n){return new(r||(r=Promise))((function(u,i){function c(e){try{s(n.next(e))}catch(e){i(e)}}function o(e){try{s(n.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?u(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(c,o)}s((n=n.apply(e,t||[])).next())}))};function p(){var e,t;const r=null===(t=null===(e=navigator.gpu)||void 0===e?void 0:e.getPreferredCanvasFormat)||void 0===t?void 0:t.bind(navigator.gpu);return r?r():"rgba8unorm"}var g;return g=e=>{const t=r(e,d);t.url.set("./assets/fireweed.jpg");const n=r(e,a);n.textureSource.setFrom(t.resultTexture),n.setKernel3x3([1,2,1],[0,0,0],[-1,-2,-1],{scale:.5,bias:.5});const u=r(e,s),{renderTarget:i}=u;return function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var u=0;for(n=Object.getOwnPropertySymbols(e);u<n.length;u++)t.indexOf(n[u])<0&&Object.prototype.propertyIsEnumerable.call(e,n[u])&&(r[n[u]]=e[n[u]])}return r}(u,["renderTarget"]).textureSource.setFrom(n.resultTexture),{renderTarget:i}},function(e){(()=>m(this,void 0,void 0,(function*(){const e=yield function(e="high-performance"){return m(this,void 0,void 0,(function*(){if(!navigator.gpu)throw new Error("Your browser doesn't have WebGPU enabled!");const t=yield navigator.gpu.requestAdapter({powerPreference:e});if(!t)throw new Error("Failed to get the GPU adapter!");return t.requestDevice()}))}(),t=yield function(e,t){return m(this,void 0,void 0,(function*(){const r=e.getContext("webgpu");if(!r)throw new Error("Failed to get a WebGPU canvas context!");return r.configure({device:t,format:p(),alphaMode:"opaque",compositingAlphaMode:"opaque"}),r}))}(function(){const e=document.querySelector("canvas.main");if(!e)throw new Error("The main canvas wasn't found in the HTML!");return e}(),e),r=((e,t)=>{const r=function(e,t){const r=new x(e),n=Object.assign(Object.assign({},t(r)),{_ctx:r});return n.runFrame=(e,t)=>{r._currentClockNumber+=1,r._commandEncoder=e;const n=r._currentClockNumber;t.forEach((e=>e._produceIfNeededAt(n))),r._effects.forEach((e=>e._runIfNeededAt(n))),r._commandEncoder=void 0},n}(e,g),n=new i(t);return n.addRender(r),function(e){n.outputFrame(e)}})(e,t);requestAnimationFrame((function t(){!function(e,t){const r=e.createCommandEncoder();t(r),e.queue.submit([r.finish()])}(e,r),requestAnimationFrame(t)}))})))().catch((e=>{document.querySelector("body").innerHTML=e,console.error(e)}))}(),e})()));
//# sourceMappingURL=demo3.js.map