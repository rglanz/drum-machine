import React from 'react'
import './color_selector.css'
import {nanoid} from 'nanoid'

function ColorSelector(props) {
    const colors = [
        {color: 'firebrick'},
        {color: 'chocolate'},
        {color: 'palegoldenrod'},
        {color: 'olivedrab'},
        {color: 'steelblue'},
        {color: 'blueviolet'},
        {color: 'aliceblue'},
        {color: 'slategray'},
    ]

    const colorArray = colors.map(color => {
        const buttonColor = color.color
        const style = {'background': buttonColor}
        return (
            <button
                key={nanoid()}
                className="color-btn"
                onClick={(color) => props.changeButtonColor(buttonColor)}
                style={style}>
            </button>
        ) 
    })

    return(
        <section className="color-container">
            {colorArray}
        </section> 
    )
}

export default ColorSelector
