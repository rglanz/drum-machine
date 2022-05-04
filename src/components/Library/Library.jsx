import React from 'react'
import './library.css'

function Library(props) {
    const nLibraries = JSON.stringify([1, 2, 3])

    React.useEffect(() => {
        function onKeyUp(event) {
            const key = event.key
            if (nLibraries.includes(String(key))) {
                props.setLibrary(Number(key))
            }
        }

        window.addEventListener('keyup', onKeyUp);
        return () => window.removeEventListener('keyup', onKeyUp);
      }, []);

    return(
        <div className="library-text">
            <button
                className="library-btn"
                onClick={props.changeLibrary}
            >
                Library {props.library}
            </button>
        </div>
    )
}

export default Library
