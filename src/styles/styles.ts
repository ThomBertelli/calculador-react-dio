import styled from 'styled-components'

export const Content = styled.div`
    width:200px;
    background-color:#181717;
    display:grid;
    grid-gap:10px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-auto-rows: 35px;
    

`

export const Container = styled.div`
    width:230px;
    height:360px;
    background-color:#181717;
    display:flex;
    flex-direction:column;
    gap:20px;
    align-items:center;
    border-radius:15px;

`

export const ButtonStyled = styled.button`
    width:40px;
    height:33px;
    background-color: #000000;
    color:#ffffff;
    border:none;
    border-radius:8px;
    font-size:16px;
    font-weight:bold;

`

export const ButtonYellow = styled.button`
    width: 40px;
    height:15px;
    border-radius:50%;
    background-color:#fdf37c;
    border:none;




`