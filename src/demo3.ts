/// <reference types="@webgpu/types" />

import runDemo from "./common/runDemo"

import TextureSourceBitmap from "./gpu-fu/TextureSourceBitmap"
import TextureFilterConvolve from "./gpu-fu/TextureFilterConvolve"
import RenderTextureRect from "./gpu-fu/RenderTextureRect"
import OutputCanvas from "./gpu-fu/OutputCanvas"

runDemo(async (device, canvasContext) => {
  const textureSource = await TextureSourceBitmap.fromURL(
    "./assets/fireweed.jpg",
  )

  const sobelHorizontal = new TextureFilterConvolve()
  sobelHorizontal.setTextureSource(textureSource)
  sobelHorizontal.setKernel3x3(
    // Sobel Horizontal Kernel (with scaling and bias to center on gray)
    [1, 2, 1],
    [0, 0, 0],
    [-1, -2, -1],
    { scale: 0.5, bias: 0.5 },
  )

  const renderUV = new RenderTextureRect()
  renderUV.setTextureSource(sobelHorizontal)

  const output = new OutputCanvas(canvasContext)
  output.addRender(renderUV)

  console.log(canvasContext.getCurrentTexture())

  return function frame(ctx, frame) {
    output.outputFrame(ctx, frame)
  }
})