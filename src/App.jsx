import { ButtonStyled, Container, Content, ButtonYellow } from "./styles/styles"

import './style.scss'
import { useEffect, useState } from "react"

const App = () => {


  
  
  const [firstValue, setFirstValue] = useState('0')
  const [inputValue, setinputValue] = useState('0')
  const [operation, setOperation] = useState('')

  
  const plusOperation = () =>{
    if(firstValue === '0'){
      setFirstValue(inputValue)
      setinputValue('0')
      setOperation('plus')

    }else{
      const result = parseFloat(firstValue) + parseFloat(inputValue)
      setinputValue(String(result))
      setOperation('')
      setFirstValue('0')
    }  
  }


  const minusOperation = () =>{
    if(firstValue === '0'){

      setOperation('minus')
      setFirstValue(inputValue)
      setinputValue('-')
      
      

    }
    
    else{
      if(Number(inputValue) < 0 ){

        const result = (Number(firstValue) + Number(inputValue))

        setinputValue(String(result))
        setOperation('')
        setFirstValue('0')

      }else{
        if(operation === 'minus'){
          const result = parseFloat(firstValue) - parseFloat(inputValue)
          setinputValue(String(result))
          setOperation('')
          setFirstValue('0')

        }
      }

    }   
  }

  const multiplyOperation = () =>{
    if(firstValue === '0'){
      setFirstValue(inputValue)
      setinputValue('0')
      setOperation('multiply')

    }else{
      const result = parseFloat(firstValue) * parseFloat(inputValue)
      setinputValue(String(result))
      setOperation('')
      setFirstValue('0')
    }   
  }

  

  

  const isOn = () => {
    if (inputValue !== '') {
      return true
    }
    return false
  }


  const iqual = () => {

    calculate(operation)
    

  }

  const calculate = (operation) =>{

    switch (operation){
      case 'plus':
      plusOperation()
        break

      case 'minus':
      minusOperation()
        break;
      
      case 'multiply':
        multiplyOperation()
        break;
    }

  }


  const changeValue = (newValue) => {

    
        if (inputValue === '0') {
          setinputValue(newValue)

        } else {
          setinputValue(newValue = inputValue + newValue)
        }

  }


  const ce = () => {
    setinputValue('0')
    setOperation('')
    setFirstValue('0')
    
  }

  const off = () => {
    setinputValue('')

  }

  console.log(`first = ${firstValue}`)
  console.log(`input = ${inputValue}`)
  console.log(operation)



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
        <ButtonStyled> √ </ButtonStyled>
        <ButtonStyled> % </ButtonStyled>
        <ButtonStyled> / </ButtonStyled>
        <ButtonStyled onClick={() => changeValue('7')}>7</ButtonStyled>
        <ButtonStyled onClick={() => changeValue('8')}>8</ButtonStyled>
        <ButtonStyled onClick={() => changeValue('9')}>9</ButtonStyled>
        <ButtonStyled onClick={multiplyOperation}>X</ButtonStyled>
        <ButtonStyled onClick={() => changeValue('4')}>4</ButtonStyled>
        <ButtonStyled onClick={() => changeValue('5')}>5</ButtonStyled>
        <ButtonStyled onClick={() => changeValue('6')}>6</ButtonStyled>
        <ButtonStyled onClick={minusOperation}> - </ButtonStyled>
        <ButtonStyled onClick={() => changeValue('1')}>1</ButtonStyled>
        <ButtonStyled onClick={() => changeValue('2')}>2</ButtonStyled>
        <ButtonStyled onClick={() => changeValue('3')}>3</ButtonStyled>
        <ButtonStyled className="plus" onClick={plusOperation} > + </ButtonStyled>
        <ButtonStyled onClick={() => changeValue('0')}>0</ButtonStyled>
        <ButtonStyled onClick={() => changeValue(',')}>.</ButtonStyled>
        <ButtonStyled onClick={() => iqual()}> = </ButtonStyled>
      </Content>


    </Container>


  )
}

export default App
