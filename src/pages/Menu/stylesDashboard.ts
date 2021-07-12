import styled from "styled-components";

export const ContainerMenu = styled.div`
    width: 35vh;
    height: 80vh;
    margin-top: 14vh;
    margin-left: -11vw;
    background-color: white;
    border-radius: 0 2vh 2vh 0;
    box-shadow: 0px 4px 4px rgb(0, 0, 0, 0.25);
    border: 0.1vh solid rgba(153, 153, 153, 0.40);
    position: fixed;
    display: flex;
    justify-content: space-between;
    z-index: 10;

    &:after {
        content: "";
        width: 35vh;
        height: 75vh;
        margin-top: 2.5vh;
        position: absolute;
        border-right: 0.35vh solid #00579D;
    }
`;

export const ContainerInfo = styled.div`
    width: 32.5vh;
    height: 75vh;
    margin-top: 2.5vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
`;

export const UserImg = styled.div`
    width: 6vh;
    height: 7.25vh;
    background-image: url("https://raw.githubusercontent.com/ThiagoPetry/dev-frontend-ctw/350361ef83b3dc4530eed3c8860849b6e958d20c/Home/img/user.svg");
    background-position: center;
    background-size: cover;
    border-radius: 1vh;
    margin-left: 12.5vw;
    border: 1px solid #00579D;
`;

export const NewsImg = styled.div`
    width: 5vh;
    height: 4.6vh;
    background-image: url("https://raw.githubusercontent.com/ThiagoPetry/dev-frontend-ctw/350361ef83b3dc4530eed3c8860849b6e958d20c/Home/img/news.svg");
    background-position: center;
    background-size: cover;
    margin-left: 12.5vw;
    margin-bottom: 48vh;
    display: flex;
    justify-content: right;
`;

export const LineBlue = styled.div`
    width: 100%;
    height: 8vh;
    background-color: white;
    box-shadow: 0.1vh 0.1vh 0.8vh rgb(0, 0, 0, 0.35);
`;
export const RefreshImg = styled.div`
    width: 1.2vw;
    height: 2.55vh;
    background-image: url("https://raw.githubusercontent.com/ThiagoPetry/dev-frontend-ctw/350361ef83b3dc4530eed3c8860849b6e958d20c/Home/img/refresh.svg");
    background-position: center;
    background-size: cover;
    transform: translate(5vw, 16.5vh);
    position: absolute;
    display: none;
`;

export const DeleteImg = styled.div`
    width: 1.2vw;
    height: 2.6vh;
    background-image: url("https://raw.githubusercontent.com/ThiagoPetry/dev-frontend-ctw/350361ef83b3dc4530eed3c8860849b6e958d20c/Home/img/delete.svg");
    background-position: center;
    background-size: cover;
    transform: translate(7vw, 16.5vh);
    position: absolute;
    display: none;
`;

export const ContainerMsg = styled.div`
    width: 14vw;
    height: 22vw;
    margin-top: 11vw;
    margin-left: 1vw;
    position: absolute;
    display: none;
`;

export const Msg = styled.div`
    width: 14vw;
    height: 10vh;
    margin-top: 1vh;
    display: flex;
    justify-content: space-between;
`;

export const LineMsg = styled.div`
    width: 0.8vw;
    height: 10vh;
    background-color: #00579D;
    border-radius: 0px 0.6vh 0.6vh 0px;
`;

export const Aba = styled.div`
    width: 13.2vw;
    height: 10vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const TitleMsg = styled.div`
    width: 12vw;
    margin-left: 0.5vw;

    p {
        color: #00579D;
        font-weight: bold;
        font-size: 1vw;
        margin-top: 0.6vh;
    }
`;

export const TextMsg = styled.div`
    width: 12vw;
    margin-left: 0.5vw;

    p {
        color: #00579D;
        font-size: 1vw;
        margin-bottom: 1.4vh;
    }
`;

export const ExitImg = styled.div`
    width: 5vh;
    height: 5vh;
    background-image: url("https://raw.githubusercontent.com/ThiagoPetry/dev-frontend-ctw/350361ef83b3dc4530eed3c8860849b6e958d20c/Home/img/exit.svg");
    background-position: center;
    background-size: cover;
    margin-left: 12.5vw;
`;

export const BtnOpen = styled.div`
    content: "";
    width: 2vh;
    height: 2vh;
    margin-top: 38.8vh;
    margin-left: 16.4vw;
    position: absolute;
    background-color: white;
    border-radius: 0.1vh 0px 0.1vh 0px;
    border-top: 0.5vh solid #00579D; 
    border-right: 0.5vh solid #00579D; 
    transform: rotate(45deg);
    z-index: 90;
    cursor: pointer;
`;
