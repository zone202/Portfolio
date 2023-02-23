import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html{
    @media (max-width: 1700px){
        font-size: 75%;
    }
}

body {
    background-color: #00b2f8;
    font-family: 'Cabin Sketch', cursive;
    overflow-x: hidden;
}
button {
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #04ffb4;
    background: transparent;
    color: white;
    transition: all 0.5s ease;
    font-family: 'Cabin Sketch', cursive;
    border-radius: 20px;

    &:hover{
        background-color: #04ffb4;
        color: black;
    }
}


    h2{
        font-weight: lighter;
        font-size: 4rem;
        text-shadow: 5px 5px 5px black;
    }
    h3{
        color: white;
    }
    h4{
        font-weight: bold;
        font-size: 2rem;
    }
    a{
        font-size: 1.1rem;
    }
    span {
        font-weight: bold;
        color: #04ffb4;
    }
    p{
        padding: 3rem 0rem;
        color: white;
        font-size: 1.4rem;
        line-height: 150%;
        text-shadow: 2px 2px 2px black;
        text-align: center;
    }

    .logoNav {width: 75px;
    }

    input {
        font-size: 20px;
        width: 50%;
        margin: 20px;
        color: gray;
        text-align: center;
        @media (max-width: 1000px) {
           width: 70%;
        }
    }

    textarea {
        width: 50%;
        margin: 20px;
        height: 100px;
        font-size: 20px;
        color: gray;
        text-align: center;
        padding-top: 30px;
        @media (max-width: 1000px) {
           width: 70%;
        }
    }

    label {
        font-size: 35px;
        color: white;
    }

    ::placeholder {
        text-align: center;
    }

    .EmailForm {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: 3px solid #04ffb4;
        background-color: gray;
        padding: 20px;
    }

`;

export default GlobalStyle;
