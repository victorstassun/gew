import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-itens: center;
`;

export const Line = styled.div`  
    width: 70vh;
    border-radius: 1vh 1vh 0 0;
    background: #00579D;
    height: 0.75vw;
`;

export const LoginCont = styled.div`
    width: 70vh;
    height: 70vh;
    margin-top: 15vh;
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    align-items: center;
    flex-direction: column;
    border-radius: 1vh;
    border-left: 0.1vh solid rgba(0, 0, 0, 0.15);
    box-shadow: 0.4vh 0.4vh 0.4vh rgba(0, 0, 0, 0.4);

    img {
        width: 8.5vw;
        height: 12vh;
        position: absolute;
        margin-top: 10vh;
    }
`;

export const ContainerBottom = styled.div`
    width: 100%;
    height: 45vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
`;

export const ContainerInput = styled.div`
    width: 100%;
    height: 15vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
`;

export const User = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;

    label, input {
        transition: all 0.2s;
    }
   
    input {
        width: 21vw;
        height: 5vh;
        background-color: transparent;
        border: 0vh;
        border-bottom: 0.4vh solid #afafaf;
        border-radius: 0;
        outline: 0;
        font-size: 2vh;
        font-weight: bold;
        color: #333;
        padding: 1vh;
        z-index: 2;

        &:focus + label, .searchformfld &:not(:placeholder-shown) + label {
            transform: scale(0.9) translateY(-100%) translateX(-3vh); 
        }

        &:active + label {
            transform: scale(0.9) translateY(-100%) translateX(-3vh); 
        }

        &:valid + label {
            transform: scale(0.9) translateY(-100%) translateX(-3vh); 
        }

        &:first-child {
            margin-top: 6vh;
            margin-bottom: -3vh;
        }
    }

    label {
        width: 0vh;
        margin-top: -2vh;
        margin-left: -40vh;
        cursor: text;
        font-size: 2.3vh;
        padding: 1vh;
        color: #00579D;
        font-weight: bold;
        z-index: 0;
        text-shadow: 0.2vh 0.2vh 0.2vh rgba(0, 0, 0, 0.2);
    }
`;

export const ContainerBtn = styled.div`
    width: 100%;
    height: 25vh;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    margin-top: 8vh;

    button {
        width: 7vw;
        height: 5vh;
        border-radius: 1vh;
        border: 0;
        margin-right: 7vh;
        text-transform: uppercase;
        font-weight: 600;
        background-color: #005DA5;
        color: white;
        font-size: 2.2vh;
        box-shadow: 0vh 1vh 1vh rgba(0, 0, 0, 0.25);

        &:hover {
            cursor: pointer;
            background-color: rgb(0, 79, 139)
        }
    }

    a {
        color: #005DA5;
        font-size: 2.2vh;
        font-weight: bold;
        text-decoration: none;
        text-shadow: 0.2vh 0.2vh 0.2vh rgba(0, 0, 0, 0.2);
    }
`;