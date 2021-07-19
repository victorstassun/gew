import styled from "styled-components";
import Complete from '../../assets/complete.svg';
import Up from '../../assets/up.svg';
import Down from '../../assets/down.svg';

export const ContainerHome = styled.div`
    position: absolute;
    top: 14vh;
    left: 12vw;
    width: 62vw;
    height: 80vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: #fff;
    box-shadow: 0.25vh 0.25vh rgb(0, 0, 0, 0.25);
    border-radius: 0.8vh;
`;

export const ContainerHomeTitle = styled.div`
    width: 95%;
    height: 10vh;
    border-bottom: 0.3vh solid #00579D;
    align-items: center;

    display: flex;
    justify-content: space-between;

    h1 {
        margin-left: 10px;
        color: #00579D;
        font-weight: 400;

        strong {
            color: #00579D;
        }
    }

    span {

    }
`;

export const ContainerHomeCards = styled.div`
    width: 95%;
    height: 30vh;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const GraphContainer = styled.div`
    
`;


export const CardContent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    h1 {
        font-size: 8vh;
        color: #00579D;
        text-shadow: 0.1vh 0.1vh 0.2vh rgb(0, 0, 0, 0.25);
    }

    #complete::after {
        content: '';
        width: 3vw;
        height: 4vh;
        position: absolute;
        margin-top: 3vh;
        background-size: cover;
        background-position: center;
        background-image: url(${Complete});
    }

    #up::after {
        content: '';
        width: 3vw;
        height: 4vh;
        position: absolute;
        margin-top: 3vh;
        margin-left: 0.1vw;
        background-size: cover;
        background-position: center;
        background-image: url(${Up});
    }

    #down::after {
        content: '';
        width: 3vw;
        height: 4vh;
        position: absolute;
        margin-top: 3vh;
        margin-left: 0.1vw;
        background-size: cover;
        background-position: center;
        background-image: url(${Down});
    }

    span {
        width: 1.8vh;
        height: 8.4vh;
        margin-right: 2vw;
        background-image: linear-gradient( to bottom, 
            #64C3D5 12.3%, #fff 15%, #fff 18%,
            #0091BD 19.3%, #0091BD 30.6%, #fff 30.6%, #fff 34.6%,
            #005DA5 36.6%, #005DA5 47.9%, #fff 47.9%, #fff 51.9%,
            #00579D 54.9%, #00579D 65.1%, #fff 65.1%, #fff 69.1%,
            #0075B1 72.1%, #0075B1 82.4%, #fff 82.4%, #fff 86.4%,
            #6AACDA 89.4%, #6AACDA 100%);
    }
    `;

export const Card = styled.div`
    width: 33%;
    height: 22vh;

    padding: 5px;
    margin-left: 10px;
    margin-right: 10px;

    border: 0.2vh solid #00579D;
    border-radius: 0.8vh;

    box-shadow: 0vh 0.4vh 0.4vh rgb(0, 0, 0, 0.25);

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    div {
        width: 100%;
        margin: 1.2vh 0 1.2vh 1vh;
        
        h2 {
            font-size: 2.5vh;
            color: #00579D;

            text-shadow: 0.1vh 0.1vh 0.2vh rgb(0, 0, 0, 0.25);
        }

        p {
            font-size: 1.6vh;
            color: #2382BA;
            text-shadow: 0.1vh 0.1vh 0.2vh rgb(0, 0, 0, 0.25);
            
            display: flex;
            align-items: center;


            strong {
                color: #00579D;
                margin-right: 5px;
            }

            #icon-eye {
                width: 2.2vh;
                height: 2.3vh;
                margin-left: 5px;

                color: #00579D;

                &:hover {
                    cursor: pointer;
                }
            
                &:active {
                    color: rgb(0, 87, 157, 0.8);
                }
                
            }
        }
    }
`;

export const ContainerHomeGraph = styled.div`
    width: 95%;
    height: 35vh;
    border-radius: 0.8vh;
`;

export const GraphTitle = styled.div`
    width: 100%;
    height: 5vh;
    background-color: #00579D;
    border-radius: 0.8vh 0.8vh 0 0;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
        color: #fff;
        font-size: 2.5vh;
    }
`;

export const Graph = styled.div`
    width: 100%;
    height: 30vh;
    border: 0.2vh solid #00579D;
    border-radius: 0 0 0.8vh 0.8vh;
`;
