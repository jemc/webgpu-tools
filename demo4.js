!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.beta=t():e.beta=t()}("undefined"!=typeof self?self:this,(()=>(()=>{"use strict";var e={};(e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})})(e);var t=function(){function e(e,t){this._store=[],this._storeIndex=0,this._storeUnits=[],this._storeUnitsIndex=0,this._storeGPUActions=[],this._storeGPUActionsIndex=0,this._needsUnitReRun=!0,this._unitFn=e,this.device=t}return e.prototype._nextStoreIndex=function(){var e=this._storeIndex;return this._storeIndex=e+1,e},e.prototype._nextStoreUnitsIndex=function(){var e=this._storeUnitsIndex;return this._storeUnitsIndex=e+1,e},e.prototype._nextStoreGPUActionsIndex=function(){var e=this._storeGPUActionsIndex;return this._storeGPUActionsIndex=e+1,e},e.prototype.runUnitIfNeeded=function(e){var t=!1;return this._storeUnits.forEach((function(e){var n=e[0];e[1],(null==n?void 0:n._ctx.runUnitIfNeeded(n))&&(t=!0)})),!(!this._needsUnitReRun&&!t||(this._storeIndex=0,this._storeUnitsIndex=0,this._storeGPUActionsIndex=0,this._needsUnitReRun=!1,Object.assign(e,this._unitFn(this)),0))},e.prototype.runGPUActionsIfNeeded=function(e){var t=this;this._storeUnits.forEach((function(t){var n=t[0];t[1],null==n||n._ctx.runGPUActionsIfNeeded(e)})),this.commandEncoder=e,this._storeGPUActions.forEach((function(e,n){var r=e[0];e[1],e[2]&&(r(t),t._storeGPUActions[n][2]=!1)})),this.commandEncoder=void 0},e.prototype._useProp=function(e){var t=this._nextStoreIndex(),n=this._store[t];if(n)return n;var r=this,o=[];return o[0]="function"==typeof e?e():e,o[1]=function(e){var t=o[0],n="function"==typeof e?e(t):e;n!==t&&(o[0]=n,r._needsUnitReRun=!0)},this._store[t]=o,o},e.prototype._useUnitProp=function(e){var t=this._nextStoreUnitsIndex(),n=this._storeUnits[t];if(n)return n;var r=this,o=[];return o[0]="function"==typeof e?e():e,o[1]=function(e){var t=o[0],n="function"==typeof e?e(t):e;n!==t&&(o[0]=n,r._needsUnitReRun=!0)},this._storeUnits[t]=o,o},e.prototype._useGPUResource=function(e,t){var n=this._nextStoreIndex(),r=this._store[n];if(!r){var o=e(this);return this._store[n]=[o,t],o}if(t.every((function(e,t){return e===r[1][t]})))return r[0];var i=e(this),u=r[0];return r[0]=i,r[1]=t,u&&"function"==typeof u.destroy&&u.destroy(),i},e.prototype._useGPUAction=function(e,t){var n=this._nextStoreGPUActionsIndex(),r=this._storeGPUActions[n];r?t.every((function(e,t){return e===r[1][t]}))||(r[0]=e,r[1]=t,r[2]=!0):this._storeGPUActions[n]=[e,t,!0]},e.prototype._useEffect=function(e,t){var n=this._nextStoreIndex(),r=this._store[n];if(r)t.every((function(e,t){return e===r[1][t]}))||(r[0]&&r[0](),r[0]=e({}),r[1]=t);else{var o=e({});this._store[n]=[o,t]}},e}(),n=function(){return n=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},n.apply(this,arguments)};function r(e){return e._useProp(void 0)}function o(e,t){return e._useProp(t)}function i(e){return e._useUnitProp(void 0)}function u(e,r){return e._useUnitProp((function(){return function(e,r){var o=new t(r,e);return n(n({},r(o)),{_ctx:o})}(e.device,r)}))[0]}function a(e,t,n){return e._useGPUResource(t,n)}function s(e,t,n){e._useGPUAction(t,n)}var c=1e-6,f="undefined"!=typeof Float32Array?Float32Array:Array;function d(){var e=new f(16);return f!=Float32Array&&(e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0),e[0]=1,e[5]=1,e[10]=1,e[15]=1,e}function l(e,t,n){var r,o,i,u,a,s,c,f,d,l,v,h,p=n[0],x=n[1],y=n[2];return t===e?(e[12]=t[0]*p+t[4]*x+t[8]*y+t[12],e[13]=t[1]*p+t[5]*x+t[9]*y+t[13],e[14]=t[2]*p+t[6]*x+t[10]*y+t[14],e[15]=t[3]*p+t[7]*x+t[11]*y+t[15]):(r=t[0],o=t[1],i=t[2],u=t[3],a=t[4],s=t[5],c=t[6],f=t[7],d=t[8],l=t[9],v=t[10],h=t[11],e[0]=r,e[1]=o,e[2]=i,e[3]=u,e[4]=a,e[5]=s,e[6]=c,e[7]=f,e[8]=d,e[9]=l,e[10]=v,e[11]=h,e[12]=r*p+a*x+d*y+t[12],e[13]=o*p+s*x+l*y+t[13],e[14]=i*p+c*x+v*y+t[14],e[15]=u*p+f*x+h*y+t[15]),e}Math.random,Math.PI,Math.hypot||(Math.hypot=function(){for(var e=0,t=arguments.length;t--;)e+=arguments[t]*arguments[t];return Math.sqrt(e)});function v(){var e=new f(3);return f!=Float32Array&&(e[0]=0,e[1]=0,e[2]=0),e}function h(e,t,n){var r=new f(3);return r[0]=e,r[1]=t,r[2]=n,r}function p(e){var t=o(e,0),n=t[0],r=t[1],i=o(e,0),u=i[0],f=i[1],p=o(e,0),x=p[0],y=p[1],g=o(e,5),m=g[0],_=g[1],b=o(e,0),U=b[0],P=b[1],w=o(e,0),S=w[0],T=w[1],R=a(e,(function(e){return e.device.createBuffer({size:64,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})}),[]);return s(e,(function(e){var t=60*Math.PI/180,r=d();!function(e,t,n,r,o){var i,u=1/Math.tan(t/2);e[0]=u/n,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=u,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[11]=-1,e[12]=0,e[13]=0,e[15]=0,null!=o&&o!==1/0?(i=1/(r-o),e[10]=(o+r)*i,e[14]=2*o*r*i):(e[10]=-1,e[14]=-2*r)}(r,t,1,1,2e3);var o,i,a,s,f,p,y,g,_,b,P,w,T,G=h(n,u,x),M=d();l(M,M,G),o=M,i=M,a=S,s=Math.sin(a),f=Math.cos(a),p=i[0],y=i[1],g=i[2],_=i[3],b=i[8],P=i[9],w=i[10],T=i[11],i!==o&&(o[4]=i[4],o[5]=i[5],o[6]=i[6],o[7]=i[7],o[12]=i[12],o[13]=i[13],o[14]=i[14],o[15]=i[15]),o[0]=p*f-b*s,o[1]=y*f-P*s,o[2]=g*f-w*s,o[3]=_*f-T*s,o[8]=p*s+b*f,o[9]=y*s+P*f,o[10]=g*s+w*f,o[11]=_*s+T*f,function(e,t,n){var r=Math.sin(n),o=Math.cos(n),i=t[4],u=t[5],a=t[6],s=t[7],c=t[8],f=t[9],d=t[10],l=t[11];t!==e&&(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[4]=i*o+c*r,e[5]=u*o+f*r,e[6]=a*o+d*r,e[7]=s*o+l*r,e[8]=c*o-i*r,e[9]=f*o-u*r,e[10]=d*o-a*r,e[11]=l*o-s*r}(M,M,U),l(M,M,h(0,0,m));var A=v();!function(e,t){e[0]=t[12],e[1]=t[13],e[2]=t[14]}(A,M);var E=h(0,1,0),I=d();!function(e,t,n,r){var o,i,u,a,s,f,d,l,v,h,p=t[0],x=t[1],y=t[2],g=r[0],m=r[1],_=r[2],b=n[0],U=n[1],P=n[2];Math.abs(p-b)<c&&Math.abs(x-U)<c&&Math.abs(y-P)<c?function(e){e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1}(e):(d=p-b,l=x-U,v=y-P,o=m*(v*=h=1/Math.hypot(d,l,v))-_*(l*=h),i=_*(d*=h)-g*v,u=g*l-m*d,(h=Math.hypot(o,i,u))?(o*=h=1/h,i*=h,u*=h):(o=0,i=0,u=0),a=l*u-v*i,s=v*o-d*u,f=d*i-l*o,(h=Math.hypot(a,s,f))?(a*=h=1/h,s*=h,f*=h):(a=0,s=0,f=0),e[0]=o,e[1]=a,e[2]=d,e[3]=0,e[4]=i,e[5]=s,e[6]=l,e[7]=0,e[8]=u,e[9]=f,e[10]=v,e[11]=0,e[12]=-(o*p+i*x+u*y),e[13]=-(a*p+s*x+f*y),e[14]=-(d*p+l*x+v*y),e[15]=1)}(I,A,G,E);var O=d();!function(e,t,n){var r=t[0],o=t[1],i=t[2],u=t[3],a=t[4],s=t[5],c=t[6],f=t[7],d=t[8],l=t[9],v=t[10],h=t[11],p=t[12],x=t[13],y=t[14],g=t[15],m=n[0],_=n[1],b=n[2],U=n[3];e[0]=m*r+_*a+b*d+U*p,e[1]=m*o+_*s+b*l+U*x,e[2]=m*i+_*c+b*v+U*y,e[3]=m*u+_*f+b*h+U*g,m=n[4],_=n[5],b=n[6],U=n[7],e[4]=m*r+_*a+b*d+U*p,e[5]=m*o+_*s+b*l+U*x,e[6]=m*i+_*c+b*v+U*y,e[7]=m*u+_*f+b*h+U*g,m=n[8],_=n[9],b=n[10],U=n[11],e[8]=m*r+_*a+b*d+U*p,e[9]=m*o+_*s+b*l+U*x,e[10]=m*i+_*c+b*v+U*y,e[11]=m*u+_*f+b*h+U*g,m=n[12],_=n[13],b=n[14],U=n[15],e[12]=m*r+_*a+b*d+U*p,e[13]=m*o+_*s+b*l+U*x,e[14]=m*i+_*c+b*v+U*y,e[15]=m*u+_*f+b*h+U*g}(O,r,I);var B=O;e.device.queue.writeBuffer(R,0,B,0,B.length)}),[R,n,u,x,m,U,S]),{targetX:n,targetY:u,targetZ:x,cameraDistance:m,cameraLatitudeRadians:U,cameraLongitudeRadians:S,setTargetX:r,setTargetY:f,setTargetZ:y,setCameraDistance:_,setCameraLatitudeRadians:P,setCameraLongitudeRadians:T,cameraSourceAsGPUBuffer:R}}function x(e){var t=p(e),n=r(e),o=n[0],i=n[1];return function(e,n,r){e._useEffect((function(e){if(!o)return function(){};var n=Math.PI/2-.05,r=0,i=0,u=function(e){var o=e.clientX-r,u=e.clientY-i;if(r=e.clientX,i=e.clientY,e.altKey){var a=t.cameraLongitudeRadians,s=t.cameraLatitudeRadians,c=.02,f=c*u*Math.cos(s),d=c*(o*-Math.cos(a)+u*Math.sin(s)*Math.sin(a)),l=c*(o*Math.sin(a)+u*Math.sin(s)*Math.cos(a));t.setTargetX((function(e){return e+d})),t.setTargetY((function(e){return e+f})),t.setTargetZ((function(e){return e+l}))}else t.setCameraLongitudeRadians((function(e){return e-.01*o})),t.setCameraLatitudeRadians((function(e){return Math.min(n,Math.max(-n,e-.01*u))}))},a=function(e){o.style.cursor="grabbing",r=e.clientX,i=e.clientY,o.addEventListener("pointermove",u),o.setPointerCapture(e.pointerId)},s=function(e){o.style.cursor="grab",o.removeEventListener("pointermove",u)};return o.style.cursor="grab",o.addEventListener("pointerdown",a),o.addEventListener("pointerup",s),function(){o.style.cursor="auto",o.removeEventListener("pointerdown",a),o.removeEventListener("pointerup",s),o.removeEventListener("pointermove",u)}}),r)}(e,0,[o]),Object.assign(t,{setCanvas:i})}v();const y=function(){function e(e){this._renders=[],this._canvasContext=e}return e.prototype.addRender=function(e){this._renders.includes(e)||this._renders.push(e)},e.prototype.outputFrame=function(e){var t=this._canvasContext.getCurrentTexture();this._renders.forEach((function(n){n.setRenderTarget(t),n.runFrame(e)}))},e}();function g(e){var t=i(e),n=t[0],o=t[1],u=i(e),c=u[0],f=u[1],d=i(e),l=d[0],v=d[1],h=r(e),p=h[0],x=h[1],y=null==n?void 0:n.cameraSourceAsGPUBuffer,g=null==l?void 0:l.textureSourceAsGPUTexture,m=a(e,(function(e){return e.device.createShaderModule({code:"@group(0) @binding(0) var<uniform> use_matrix: mat4x4<f32>;\n@group(0) @binding(1) var use_sampler: sampler;\n@group(0) @binding(2) var use_texture: texture_2d<f32>;\n\nstruct VertexOutput {\n  @builtin(position) pos: vec4<f32>;\n  @location(0) uv: vec2<f32>;\n}\n\n@stage(vertex)\nfn vertexRenderUV(\n  @location(0) pos_in: vec4<f32>,\n  @location(1) uv_in: vec2<f32>,\n) ->\n  VertexOutput\n{\n  var out: VertexOutput;\n  out.pos = pos_in;\n  out.uv = uv_in;\n  return out;\n}\n\n@stage(vertex)\nfn vertexRenderUVWithMatrix(\n  @location(0) pos_in: vec4<f32>,\n  @location(1) uv_in: vec2<f32>,\n) ->\n  VertexOutput\n{\n  var out: VertexOutput;\n  out.pos = use_matrix * pos_in;\n  out.uv = uv_in;\n  return out;\n}\n\n@stage(fragment)\nfn fragmentRenderUV(\n  @location(0) uv_in : vec2<f32>\n) ->\n  @location(0) vec4<f32>\n{\n  return textureSample(use_texture, use_sampler, uv_in.xy);\n}\n"})}),[]),_=a(e,(function(e){return c&&e.device.createRenderPipeline({vertex:{module:m,entryPoint:y?"vertexRenderUVWithMatrix":"vertexRenderUV",buffers:[{arrayStride:c.vertexSourceStrideBytes,attributes:[{shaderLocation:0,offset:c.vertexSourceXYZWOffsetBytes,format:"float32x4"},{shaderLocation:1,offset:c.vertexSourceUVOffsetBytes,format:"float32x2"}]}]},fragment:{module:m,entryPoint:"fragmentRenderUV",targets:[{format:"rgba8unorm"}]},primitive:{topology:"triangle-list"},depthStencil:{depthWriteEnabled:!0,depthCompare:"less",format:"depth24plus"},layout:void 0})}),[m,c]),b=a(e,(function(e){return e.device.createSampler({magFilter:"linear",minFilter:"linear"})}),[]),U=a(e,(function(e){if(_&&g){var t=[{binding:1,resource:b},{binding:2,resource:g.createView()}];return y&&t.unshift({binding:0,resource:{buffer:y}}),e.device.createBindGroup({layout:_.getBindGroupLayout(0),entries:t})}}),[_,y,g,b]),P=a(e,(function(e){return e.device.createTexture({size:[300,300],format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT})}),[]);return s(e,(function(e){if(l&&c&&_&&U&&p){var t=e.commandEncoder.beginRenderPass({colorAttachments:[{view:p.createView(),clearValue:{r:0,g:0,b:0,a:1},loadOp:"clear",storeOp:"store"}],depthStencilAttachment:{view:P.createView(),depthClearValue:1,depthLoadOp:"clear",depthStoreOp:"store"}});t.setPipeline(_),t.setVertexBuffer(0,c.vertexSourceAsGPUBuffer),t.setBindGroup(0,U),t.draw(c.vertexSourceCount,1,0,0),t.end()}}),[l,c,_,U,p]),{setCameraMatrixSource:o,setTextureSource:v,setVertexSource:f,setRenderTarget:x}}function m(e){var t=this,n=function(e){var t,n,o=r(e),i=o[0],u=o[1],c=r(e),f=c[0],d=c[1],l=null!==(t=null==i?void 0:i.width)&&void 0!==t?t:16,v=null!==(n=null==i?void 0:i.height)&&void 0!==n?n:16,h=a(e,(function(e){return e.device.createTexture({label:f,size:[l,v,1],format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT})}),[l,v,f]);return s(e,(function(e){i&&h&&e.device.queue.copyExternalImageToTexture({source:i},{texture:h},[i.width,i.height])}),[i,h]),{setImageBitmap:u,setLabel:d,textureSourceAsGPUTexture:h}}(e),o=n.setImageBitmap,i=n.setLabel,u=n.textureSourceAsGPUTexture,c=r(e),f=c[0],d=c[1];return i(f),function(e,n,r,o){e._useEffect((function(e){var r,o,i,u,a=!1;return(r=t,o=void 0,i=void 0,u=function(){var e;return function(e,t){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!((o=(o=u.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=t.call(e,u)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}}(this,(function(t){switch(t.label){case 0:return f?((e=document.createElement("img")).src=f,[4,e.decode()]):[2];case 1:return t.sent(),[4,createImageBitmap(e)];case 2:return[2,t.sent()]}}))},new(i||(i=Promise))((function(e,t){function n(e){try{s(u.next(e))}catch(e){t(e)}}function a(e){try{s(u.throw(e))}catch(e){t(e)}}function s(t){var r;t.done?e(t.value):(r=t.value,r instanceof i?r:new i((function(e){e(r)}))).then(n,a)}s((u=u.apply(r,o||[])).next())}))).then((function(e){return a||n(e)})).catch((function(e){console.error(e),a=!0})),function(){a=!0}}),o)}(e,o,0,[f]),{setURL:d,textureSourceAsGPUTexture:u}}function _(e){var t=a(e,(function(e){return e.device.createBuffer({size:1440,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST})}),[]);return s(e,(function(e){if(t){var n=(1+Math.sqrt(5))/2,r=new Float32Array([n,1,0,1,1,0,0,n,1,1,1,1,1,0,n,1,0,1,n,1,0,1,1,0,1,0,n,1,1,1,n,-1,0,1,0,1,n,1,0,1,1,0,n,-1,0,1,1,1,1,0,-n,1,0,1,n,1,0,1,1,0,1,0,-n,1,1,1,0,n,-1,1,0,1,n,1,0,1,1,0,0,n,-1,1,1,1,0,n,1,1,0,1,-1,0,n,1,1,0,1,0,n,1,1,1,0,n,1,1,0,1,0,-n,1,1,1,0,n,-1,0,1,1,1,1,0,n,1,0,1,0,-n,-1,1,1,0,1,0,-n,1,1,1,n,-1,0,1,0,1,-1,0,-n,1,1,0,0,n,-1,1,1,1,1,0,-n,1,0,1,-n,1,0,1,1,0,0,n,1,1,1,1,0,n,-1,1,0,1,1,0,n,1,1,0,-1,0,n,1,1,1,0,-n,1,1,0,1,n,-1,0,1,1,0,0,-n,1,1,1,1,0,-n,-1,1,0,1,1,0,-n,1,1,0,0,-n,-1,1,1,1,-1,0,-n,1,0,1,0,n,-1,1,1,0,-1,0,-n,1,1,1,-n,1,0,1,0,1,0,n,1,1,1,0,-n,1,0,1,1,1,-1,0,n,1,0,1,-n,-1,0,1,1,0,0,-n,1,1,1,1,-1,0,n,1,0,1,-n,-1,0,1,1,0,0,-n,-1,1,1,1,0,-n,1,1,0,1,-n,-1,0,1,1,0,-1,0,-n,1,1,1,0,-n,-1,1,0,1,-n,-1,0,1,1,0,-n,1,0,1,1,1,-1,0,-n,1,0,1,-n,-1,0,1,1,0,-1,0,n,1,1,1,-n,1,0,1,0,1]);e.device.queue.writeBuffer(t,0,r,0,r.length)}}),[t]),{vertexSourceCount:60,vertexSourceTotalBytes:1440,vertexSourceStrideBytes:24,vertexSourceXYZWOffsetBytes:0,vertexSourceUVOffsetBytes:16,vertexSourceAsGPUBuffer:t}}var b=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function u(e){try{s(r.next(e))}catch(e){i(e)}}function a(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,a)}s((r=r.apply(e,t||[])).next())}))},U=function(e,t){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!((o=(o=u.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=t.call(e,u)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};function P(e){return void 0===e&&(e="high-performance"),b(this,void 0,void 0,(function(){var t;return U(this,(function(n){switch(n.label){case 0:if(!navigator.gpu)throw new Error("Your browser doesn't have WebGPU enabled!");return[4,navigator.gpu.requestAdapter({powerPreference:e})];case 1:if(!(t=n.sent()))throw new Error("Failed to get the GPU adapter!");return[2,t.requestDevice()]}}))}))}function w(){var e=document.querySelector("canvas.main");if(!e)throw new Error("The main canvas wasn't found in the HTML!");return e}function S(e,t){return b(this,void 0,void 0,(function(){var n;return U(this,(function(r){if(!(n=e.getContext("webgpu")))throw new Error("Failed to get a WebGPU canvas context!");return n.configure({device:t,format:T(),alphaMode:"opaque"}),[2,n]}))}))}function T(){var e,t,n=null===(t=null===(e=navigator.gpu)||void 0===e?void 0:e.getPreferredCanvasFormat)||void 0===t?void 0:t.bind(navigator.gpu);return n?n():"rgba8unorm"}var R;return R=function(e){var t=u(e,x),n=u(e,_),r=u(e,m);r.setURL("./assets/fireweed.jpg"),t.setCanvas(w());var o=u(e,g),i=o.setRenderTarget,a=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(o,["setRenderTarget"]);return a.setCameraMatrixSource(t),a.setTextureSource(r),a.setVertexSource(n),{setRenderTarget:i}},function(e){b(this,void 0,void 0,(function(){function e(){!function(e,t){var n=e.createCommandEncoder();t(n),e.queue.submit([n.finish()])}(r,i),requestAnimationFrame(e)}var r,o,i;return U(this,(function(u){switch(u.label){case 0:return[4,P()];case 1:return r=u.sent(),[4,S(w(),r)];case 2:return o=u.sent(),i=function(e,r){var o=function(e,r){var o=new t(r,e),i=n(n({},r(o)),{_ctx:o});return i.runFrame=function(e){return function(e,t){var n=e._ctx;n.runUnitIfNeeded(e),n.runGPUActionsIfNeeded(t)}(i,e)},i}(e,R),i=new y(r);return i.addRender(o),function(e){i.outputFrame(e)}}(r,o),requestAnimationFrame(e),[2]}}))})).catch((function(e){document.querySelector("body").innerHTML=e,console.error(e)}))}(),e})()));
//# sourceMappingURL=demo4.js.map