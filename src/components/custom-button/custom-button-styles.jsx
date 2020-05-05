import styled , {css} from 'styled-components'

const googleButton=css`
    background-color: #4285f4;
    color: white;
    transition: 300ms;
    border: none;

    &:hover{
        background-color: #357ae8;
        border:none;
    }
`

const invertedStyle=css`
    background-color: white;
    color: black;
    border: .2px solid black;
    transition: 300ms;
    &:hover{
        background-color: black;
        color: white;
        border: none;
    }
`
const buttonStyle=css`
    background-color: black;
    color: white;
    transition: 300ms;
        &:hover {
            background-color: white;
            color: black;
            border: .2px solid black;
            }
`

const getButtonStyles = props =>{
    if (props.isGoogleSignIn){
        return googleButton
    }

    return props.inverted ? invertedStyle : buttonStyle
}

export const CustomButtonContainer=styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    cursor: pointer;
    display: flex;
    justify-content: center;
    ${getButtonStyles}
`