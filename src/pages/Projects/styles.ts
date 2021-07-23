import styled from "styled-components";


export const Container = styled.div`
    position: absolute;
    top: 14vh;
    left: 12vw;
    width: 78vw;
    height: 80vh;
`;

export const ContainerProject = styled.div`
    width: 78vw;
    height: 80vh;

    display: flex;
    flex-direction: column;
    justify-content: center;

    background-color: #fff;
    box-shadow: 0.25vh 0.25vh 0.5vh rgb(0, 0, 0, 0.25);
    border-radius: 0.4vh;
`;

export const ContainerInfo = styled.div`
    width: 100%;
    height: 12vh;

    display: flex;
    flex-direction: column;
`;

export const ContainerTitle = styled.div`
    width: 100%;
    height: 12vh;

    display: flex;
`;

export const ContainerFiltro = styled.div`
    width: 100%;
    height: 12vh;

    border-bottom: 0.2vh solid #ccc;

    display: flex;
`;

export const Projects = styled.div`
    width: 100%;
    height: 80vh;

    display: flex;
    overflow: scroll;
`;

export const Left = styled.div`
    width: 50%;
    
    display: flex;
    flex-direction: column;
    align-items: center;

    overflow: hidden;
`;

export const Right = styled.div`
    width: 50%;

    display: flex;
    flex-direction: column;
    align-items: center;

    overflow: hidden;
`;
