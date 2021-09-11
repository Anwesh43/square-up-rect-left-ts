import {useState, useEffect, CSSProperties} from 'react'

const scGap : number = 0.02 
const delay : number = 20 

export const useAnimatedScale = () => {
    const [scale, setScale] = useState(0)
    const [animated, setAnimated] = useState(false)
    return {
        scale, 
        start() {
            if (!animated) {
                setAnimated(true)
                const interval = setInterval(() => {
                    setScale((prev : number) => {
                        if (prev > 1) {
                            setAnimated(false)
                            clearInterval(interval)
                            return 0 
                        }
                        return prev + scGap 
                    })
                }, delay)
            }
        }
    }
}

export const useDimension = () => {
    const [w, setW] = useState(window.innerWidth)
    const [h, setH] = useState(window.innerHeight)
    useEffect(() => {
        window.onresize = () => {
            setW(window.innerWidth)
            setH(window.innerHeight)
        }
        return () => {
            window.onresize = () => {

            }
        }
    })
    return {
        w, 
        h, 
    }
}

export const useStyle = (w : number, h : number, scale : number) => {
    const position  = 'absolute'
    const size : number = Math.min(w, h) / 10
    const background : string = 'indigo'
    const sf : number = Math.sin(scale * Math.PI)
    return {
        squareStyle() : CSSProperties {
            const width : string = `${size}px`
            const height : string = `${size}px`
            const top = `${w / 2 - size / 2}px`
            const left = `${h / 2 - size / 2 - (h / 2 - size) * sf}px`
            return {
                position, 
                width,
                height, 
                top,
                left,
                background 
            }           
        },
        barStyle() : CSSProperties {
            const width : string = `${w * sf}px`
            const height : string = `${h / 2}px`
            const top : string = `${h / 2}px`
            const left : string = `${0}px`
            return {
                position, 
                left, 
                top, 
                width, 
                height, 
                background 
            }
        }
    }
}