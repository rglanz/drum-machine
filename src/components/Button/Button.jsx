import React from 'react'
import './button.css'
import samples from '../samples'
import {nanoid} from 'nanoid'


function Button(props) {
    const allowedKeys = ['q', 'w', 'e', 'a', 's', 'd', 'z', 'x', 'c']

    // Effects
    React.useEffect(() => {
        function onKeyUp({key}) {
            if (!allowedKeys.includes(key)) {
                return
            }

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
        function onKeyDown({key, repeat}) {
            if (!allowedKeys.includes(key)) {
                return
            }
            if (repeat) {
                return
            }

            props.handleKeyPress(key)
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
                <section>
                    <img
                        className="btn-icon"
                        src={`${process.env.PUBLIC_URL}/assets/icons/${sample.icon}`}
                    />
                    <h3 className="btn-label">{sample.key.toUpperCase()}: {sample.id}</h3>
                </section>
            </button>
        )
    })

    return(
        <section className="btn-container">
            {buttons}
        </section>
    )
}

export default Button
