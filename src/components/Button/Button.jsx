import React from 'react'
import './button.css'
import samples from '../samples'
import {nanoid} from 'nanoid'


function Button(props) {
    // Effects
    React.useEffect(() => {
        function onKeyUp(event) {
            const key = event.key
            const sample = samples.find(item => item.key === key)
            const path = `${process.env.PUBLIC_URL}/assets/library_${props.library}/${sample.src}`
            const audio = new Audio(path)
    
            audio.play()
            props.handleKeyPress(key)
        }

        window.addEventListener('keyup', onKeyUp);
        return () => window.removeEventListener('keyup', onKeyUp);
    }, [props.library]);

    React.useEffect(() => {
        function onKeyDown(event) {
            if (event.repeat) {
                return
            }
            props.handleKeyPress(event.key)
        }

        window.addEventListener('keydown', onKeyDown)
        return () => window.removeEventListener('keydown', onKeyDown);
    }, [])

    // Elements
    const buttons = samples.map(sample => {
        const path = `${process.env.PUBLIC_URL}/assets/library_${props.library}/${sample.src}`
        const lightColors = ['palegoldenrod', 'aliceblue']
        const style = {'background': props.buttonColor,
            'color': (lightColors.includes(props.buttonColor) ? 'black' : 'white'),
        }
        
        return(
            <button
                key={nanoid()}
                className={props.isPressed && (props.keyPressed === sample.key) ? 'btn-pressed' : 'btn'}
                onClick={() => (new Audio(path)).play()}
                style={style}
            >
                <div>
                    <img
                        className="btn-icon"
                        src={`${process.env.PUBLIC_URL}/assets/icons/${sample.icon}`}
                    />
                    <h3 className="btn-label">{sample.key.toUpperCase()}: {sample.id}</h3>
                </div>
            </button>
        )
    })

    return(
        <div className="btn-container">
            {buttons}
        </div>
    )
}

export default Button
