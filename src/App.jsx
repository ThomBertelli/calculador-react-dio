import { ButtonStyled, Container, Content, ButtonYellow } from "./styles/styles"

import './style.scss'
import { useEffect, useState } from "react"

const App = () => {

  const [value, setValue] = useState('0')

  
  const changeValue = (newValue) => {

    if(value === '0'){
      setValue(newValue)

    }else{
      setValue(newValue = value + newValue)
    }    

  }

  const ce = ()=>{
    setValue('0')
  }



  return (

    <Container>
      <div>
        <input disabled value={value} />
      </div>
      <div className="especial-buttons" >
      <ButtonStyled className="on-ce" onClick={() =>ce()} >CE</ButtonStyled>
      <ButtonYellow></ButtonYellow>
      <ButtonYellow></ButtonYellow>
      <ButtonYellow></ButtonYellow>
      </div>
      <Content>
        <ButtonStyled>OFF</ButtonStyled>
        <ButtonStyled> √ </ButtonStyled>
        <ButtonStyled> % </ButtonStyled>
        <ButtonStyled> / </ButtonStyled>
        <ButtonStyled onClick={() =>changeValue('7')}>7</ButtonStyled>
        <ButtonStyled onClick={() =>changeValue('8')}>8</ButtonStyled>
        <ButtonStyled onClick={() =>changeValue('9')}>9</ButtonStyled>
        <ButtonStyled>X</ButtonStyled>
        <ButtonStyled onClick={() =>changeValue('4')}>4</ButtonStyled>
        <ButtonStyled onClick={() =>changeValue('5')}>5</ButtonStyled>
        <ButtonStyled onClick={() =>changeValue('6')}>6</ButtonStyled>
        <ButtonStyled onClick={() =>changeValue('')}> - </ButtonStyled>
        <ButtonStyled onClick={() =>changeValue('1')}>1</ButtonStyled>
        <ButtonStyled onClick={() =>changeValue('2')}>2</ButtonStyled>
        <ButtonStyled onClick={() =>changeValue('3')}>3</ButtonStyled>
        <ButtonStyled className="plus"> + </ButtonStyled>
        <ButtonStyled onClick={() =>changeValue('0')}>0</ButtonStyled>
        <ButtonStyled onClick={() =>changeValue(',')}>.</ButtonStyled>
        <ButtonStyled> = </ButtonStyled>
      </Content>


    </Container>


  )
}

export default App
