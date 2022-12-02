import { ButtonStyled, Container, Content, ButtonYellow } from "./styles/styles"

import './style.scss'

const App = () => {


  return (

    <Container>
      <div>
        <input disabled />
      </div>
      <div className="especial-buttons" >
      <ButtonStyled className="on-ce">CE</ButtonStyled>
      <ButtonYellow></ButtonYellow>
      <ButtonYellow></ButtonYellow>
      <ButtonYellow></ButtonYellow>
      </div>
      <Content>
        <ButtonStyled>OFF</ButtonStyled>
        <ButtonStyled> √ </ButtonStyled>
        <ButtonStyled> % </ButtonStyled>
        <ButtonStyled> / </ButtonStyled>
        <ButtonStyled>7</ButtonStyled>
        <ButtonStyled>8</ButtonStyled>
        <ButtonStyled>9</ButtonStyled>
        <ButtonStyled>X</ButtonStyled>
        <ButtonStyled>4</ButtonStyled>
        <ButtonStyled>5</ButtonStyled>
        <ButtonStyled>6</ButtonStyled>
        <ButtonStyled> - </ButtonStyled>
        <ButtonStyled>1</ButtonStyled>
        <ButtonStyled>2</ButtonStyled>
        <ButtonStyled>3</ButtonStyled>
        <ButtonStyled className="plus"> + </ButtonStyled>
        <ButtonStyled>0</ButtonStyled>
        <ButtonStyled>.</ButtonStyled>
        <ButtonStyled> = </ButtonStyled>
      </Content>


    </Container>


  )
}

export default App
