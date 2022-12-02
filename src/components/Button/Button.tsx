import { ButtonStyled } from "../../styles/styles"
import { IButtonStyled } from "./Types"

const Button = ({onChange} :IButtonStyled)   => {

    return(
        <ButtonStyled onChange={onChange}> </ButtonStyled>
    )

}


export {Button}