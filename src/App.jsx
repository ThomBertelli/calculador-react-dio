import { ButtonStyled, Container, Content, ButtonYellow } from "./styles/styles"

import './style.scss'
import { useEffect, useState } from "react"

const App = () => {




  const [firstValue, setFirstValue] = useState('--')
  const [inputValue, setinputValue] = useState('--')
  const [operation, setOperation] = useState('')


  const plusOperation = () => {
    if (firstValue === '--') {
      setFirstValue(inputValue)
      setinputValue('--')
      setOperation('plus')

    } else {
      const result = parseFloat(firstValue) + parseFloat(inputValue)
      setinputValue(String(result))
      setOperation('')
      setFirstValue('--')
    }
  }


  const minusOperation = () => {


    if (operation === 'minus' || operation === '') {



      if (firstValue === '--') {

        setOperation('minus')
        setFirstValue(inputValue)
        setinputValue('-')



      }

      else {
        if (Number(inputValue) < 0) {

          const result = (Number(firstValue) + Number(inputValue))

          setinputValue(String(result))
          setOperation('')
          setFirstValue('--')

        } else {
          if (operation === 'minus') {
            const result = parseFloat(firstValue) - parseFloat(inputValue)
            setinputValue(String(result))
            setOperation('')
            setFirstValue('--')

          }
        }

      }
    } else {
      setinputValue('-')
    }
  }

  const multiplyOperation = () => {
    if (firstValue === '--') {
      setFirstValue(inputValue)
      setinputValue('--')
      setOperation('multiply')

    } else {
      const result = parseFloat(firstValue) * parseFloat(inputValue)
      setinputValue(String(result))
      setOperation('')
      setFirstValue('--')
    }
  }

  const divideOperation = () => {
    if (firstValue === '--') {
      setFirstValue(inputValue)
      setinputValue('--')
      setOperation('divide')

    } else {
      const result = parseFloat(firstValue) / parseFloat(inputValue)
      setinputValue(String(result))
      setOperation('')
      setFirstValue('--')
    }
  }

  const percentOperation = () => {
    if (firstValue === '--') {
      setFirstValue(inputValue)
      setinputValue('--')
      setOperation('percent')

    } else {


      const result = (parseFloat(inputValue) * parseFloat(firstValue) / 100) + parseFloat(firstValue)
      setinputValue(String(result))
      setOperation('')
      setFirstValue('--')
    }
  }

  const squareOperation = () => {
    if (firstValue === '--') {
      setFirstValue(inputValue)
      setinputValue('--')
      setOperation('square')

    } else {


      const result = Math.sqrt( parseFloat(firstValue))
      setinputValue(String(result))
      setOperation('')
      setFirstValue('--')
    }
  }


  const iqual = () => {

    calculate(operation)


  }

  const calculate = (operation) => {

    switch (operation) {
      case 'plus':
        plusOperation()
        break

      case 'minus':
        minusOperation()
        break;

      case 'multiply':
        multiplyOperation()
        break;

      case 'divide':
        divideOperation()
        break;

      case 'percent':
        percentOperation()
        break;

      case 'square':
      squareOperation()
      break;
    }

  }
  


  const changeValue = (newValue) => {


    if (inputValue === '--') {
      setinputValue(newValue)

    } else {
      setinputValue(newValue = inputValue + newValue)
    }

  }


  const ce = () => {
    setinputValue('--')
    setOperation('')
    setFirstValue('--')

  }

  const off = () => {
    setinputValue('')

  }

  return (

    <Container>
      <div>
        <input disabled value={inputValue} />
      </div>
      <div className="especial-buttons" >
        <ButtonStyled className="on-ce" onClick={() => ce()} >CE</ButtonStyled>
        <ButtonYellow></ButtonYellow>
        <ButtonYellow></ButtonYellow>
        <ButtonYellow></ButtonYellow>
      </div>
      <Content>
        <ButtonStyled onClick={() => off()}>OFF</ButtonStyled>
        <ButtonStyled onClick={squareOperation}> √ </ButtonStyled>
        <ButtonStyled onClick={percentOperation} > % </ButtonStyled>
        <ButtonStyled onClick={divideOperation} > / </ButtonStyled>
        <ButtonStyled onClick={() => changeValue('7')}>7</ButtonStyled>
        <ButtonStyled onClick={() => changeValue('8')}>8</ButtonStyled>
        <ButtonStyled onClick={() => changeValue('9')}>9</ButtonStyled>
        <ButtonStyled onClick={multiplyOperation}>X</ButtonStyled>
        <ButtonStyled onClick={() => changeValue('4')}>4</ButtonStyled>
        <ButtonStyled onClick={() => changeValue('5')}>5</ButtonStyled>
        <ButtonStyled onClick={() => changeValue('6')}>6</ButtonStyled>
        <ButtonStyled onClick={minusOperation}>-</ButtonStyled>
        <ButtonStyled onClick={() => changeValue('1')}>1</ButtonStyled>
        <ButtonStyled onClick={() => changeValue('2')}>2</ButtonStyled>
        <ButtonStyled onClick={() => changeValue('3')}>3</ButtonStyled>
        <ButtonStyled className="plus" onClick={plusOperation} > + </ButtonStyled>
        <ButtonStyled onClick={() => changeValue('0')}>0</ButtonStyled>
        <ButtonStyled onClick={() => changeValue('.')}>.</ButtonStyled>
        <ButtonStyled onClick={() => iqual()}> = </ButtonStyled>
      </Content>


    </Container>


  )
}

export default App
