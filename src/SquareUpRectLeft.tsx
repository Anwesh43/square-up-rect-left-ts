import React from 'react'
import withContext from './withContext'
import {useStyle} from './hooks'

interface SURLProps {
    w : number, 
    h : number, 
    scale : number, 
    onClick : Function 
}

const SquareUpRectLeft = (props : SURLProps) => {
    const {
        w,
        h, 
        scale, 
        onClick
    } = props 
    const {squareStyle, barStyle} = useStyle(w, h, scale)
    return (
        <React.Fragment>
            <div style = {squareStyle()} onClick = {() => onClick()}>
            </div>
            <div style = {barStyle()}>
            </div>
        </React.Fragment>
    )
}

export default SquareUpRectLeft

