import styled from "styled-components";

export const Card = styled.div`
    width: 36vw;
    height: 20vh;

    margin-top: 3vh;

    display: flex;
    justify-content: center;
    flex-direction: row;
`;

export const CardStatus = styled.div`
    width: 1vw;
    height: 100%;
    background-color: #00579D;
    border-radius: 5px 0px 0px 5px;
    display: flex;
    flex-direction: row;
`;

export const CardBox = styled.div`
    width: 35vw;
    height: 100%;
    display: flex;
    flex-direction: row;

    border: 0.1vh solid rgb(0, 0, 0, 0.15);
    border-left: 0;
    border-radius: 0px 5px 5px 0px;
    box-shadow: 2px 2px 3px rgb(0, 0, 0, 0.25);

    transition: all 0.2s;

    &:hover {
        box-shadow: 4px 4px 6px rgb(0, 0, 0, 0.25);
        cursor: pointer;
    }
`;

export const BoxLeft = styled.div`
    width: 24vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    div {
        display: flex;
        flex-direction: column;
        padding: 5px;

        strong { 
            color: #222;
        }

        p {
            font-size: 2.2vh;
            padding: 2px;
            padding-left: 10px;
            text-shadow: 1px 1px 2px rgb(0, 0, 0, 0.2);
            color: #5B5B5B;

            strong {
                font-weight: 500;
                color: #000
            }
        }

        h1 {
            font-size: 2.1vh;
            font-weight: bold;
            padding-top: 2px;
            padding-left: 12px;
        }

        &:first-child p:first-child {
            color: #229FC6;
        }

        &:last-child {
            flex-direction: row;
        }
        
        &:last-child p:last-child {
            margin-left: 4vw;
        }
        
        &:last-child p {
            color: #787676;
        } 
    }
`;

export const BoxRight = styled.div`
    width: 13vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    div {
        display: flex;
        flex-direction: column;
        padding: 5px;

        strong { 
            color: #000;
            font-weight: 500;
        }

        p {
            font-size: 2.2vh;
            padding: 2px;
            padding-left: 0.6vw;
            text-shadow: 1px 1px 2px rgb(0, 0, 0, 0.2);
            color: #5B5B5B;
        }

        h1 {
            font-size: 2.2vh;
            font-weight: bold;
            padding-top: 2px;
            padding-left: 12px;
        }

        &:last-child p:last-child {
            padding-top: 1.7vh;
            padding-bottom: 4vh;
            text-align: left;
        }
        
        &:last-child p {
            color: #5B5B5B;
        }
        
        &:last-child strong {
            font-weight: 500;
        }
    }
`;
