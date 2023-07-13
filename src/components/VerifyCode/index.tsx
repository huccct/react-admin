import React, { useEffect, useRef } from 'react'

interface IProps {
  identifyCode?: string // 默认注册码
  fontSizeMin?: number // 字体最小值
  fontSizeMax?: number // 字体最大值
  backgroundColorMin?: number // 验证码图片背景色最小值
  backgroundColorMax?: number // 验证码图片背景色最小值
  dotColorMin?: number // 背景干扰点最小值
  dotColorMax?: number // 背景干扰点最小值
  contentWidth?: number // 容器宽度
  contentHeight?: number // 容器高度
}
const Identify = ({
  identifyCode = '1234',
  fontSizeMin = 25,
  fontSizeMax = 35,
  contentWidth = 100,
  contentHeight = 40
}: {
  identifyCode?: string // 默认注册码
  fontSizeMin?: number // 字体最小值
  fontSizeMax?: number // 字体最大值
  backgroundColorMin?: number // 验证码图片背景色最小值
  backgroundColorMax?: number // 验证码图片背景色最小值
  dotColorMin?: number // 背景干扰点最小值
  dotColorMax?: number // 背景干扰点最小值
  contentWidth?: number // 容器宽度
  contentHeight?: number // 容器高度
}) => {
  const canvasRef = useRef(null)

  const randomNum = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min) + min)
  }

  const randomColor = (min: number, max: number) => {
    let r = randomNum(min, max)
    let g = randomNum(min, max)
    let b = randomNum(min, max)
    return 'rgb(' + r + ',' + g + ',' + b + ')'
  }

  const drawPic = () => {
    let canvas = document.getElementById('id-canvas') as HTMLCanvasElement
    let ctx = canvas.getContext('2d') as CanvasRenderingContext2D
    ctx.textBaseline = 'bottom'
    ctx.fillStyle = '#e6ecfd'
    ctx.fillRect(0, 0, contentWidth, contentHeight)

    for (let i = 0; i < identifyCode.length; i++) {
      drawText(ctx, identifyCode[i], i)
    }
    drawLine(ctx)
    drawDot(ctx)
  }

  const drawText = (ctx: CanvasRenderingContext2D, txt: string, i: number) => {
    ctx.fillStyle = randomColor(50, 160) // 随机生成字体颜色
    ctx.font = randomNum(fontSizeMin, fontSizeMax) + 'px SimHei' // 随机生成字体大小
    let x = (i + 1) * (contentWidth / (identifyCode.length + 1))
    let y = randomNum(fontSizeMax, contentHeight - 5)
    const deg = randomNum(-30, 30)
    // 修改坐标原点和旋转角度
    ctx.translate(x, y)
    ctx.rotate((deg * Math.PI) / 180)
    ctx.fillText(txt, 0, 0)
    // 恢复坐标原点和旋转角度
    ctx.rotate((-deg * Math.PI) / 180)
    ctx.translate(-x, -y)
  }

  const drawLine = (ctx: any) => {
    // 绘制干扰线
    for (let i = 0; i < 4; i++) {
      ctx.strokeStyle = randomColor(100, 200)
      ctx.beginPath()
      ctx.moveTo(randomNum(0, contentWidth), randomNum(0, contentHeight))
      ctx.lineTo(randomNum(0, contentWidth), randomNum(0, contentHeight))
      ctx.stroke()
    }
  }

  const drawDot = (ctx: any) => {
    // 绘制干扰点
    for (let i = 0; i < 30; i++) {
      ctx.fillStyle = randomColor(0, 255)
      ctx.beginPath()
      ctx.arc(
        randomNum(0, contentWidth),
        randomNum(0, contentHeight),
        1,
        0,
        2 * Math.PI
      )
      ctx.fill()
    }
  }

  useEffect(() => {
    drawPic()
  }, [])

  useEffect(() => {
    drawPic()
  }, [identifyCode])

  return (
    <div className="cursor-pointer" style={{ height: contentHeight + 'px' }}>
      <canvas
        ref={canvasRef}
        id="id-canvas"
        className="h-full"
        width={contentWidth}
        height={contentHeight}
      ></canvas>
    </div>
  )
}

export default Identify
