import React from 'react'
import Library from './components/Library/Library'
import Button from './components/Button/Button'
import ColorSelector from './components/ColorSelector/ColorSelector'

function App() {
  // State
  const [library, setLibrary] = React.useState(1)
  const [isPressed, setIsPressed] = React.useState(false)
  const [keyPressed, setKeyPressed] = React.useState('')
  const [buttonColor, setButtonColor] = React.useState('firebrick')

  const numberOfLibraries = 3

  // Functions
  function changeLibrary() {
    setLibrary(prevLibrary => {
      if (prevLibrary < numberOfLibraries)
        return prevLibrary += 1
      else {
        return 1
      }
    })
  }

  function handleKeyPress(key) {
    setIsPressed(prevIsPressed => !prevIsPressed)
    setKeyPressed(key)
  }

  function changeButtonColor(color) {
    setButtonColor(color)
  }

  return (
    <main className="container">
      <Library
        library={library}
        setLibrary={setLibrary}
        changeLibrary={changeLibrary}
      />

      <Button
        library={library}
        buttonColor={buttonColor}
        isPressed={isPressed}
        keyPressed={keyPressed}
        handleKeyPress={handleKeyPress}
      />

      <ColorSelector
        color={buttonColor}
        changeButtonColor={changeButtonColor}
      />
    </main>
  )
}

export default App
