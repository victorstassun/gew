import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-itens: center;

    div {
        width: 70vh;
        height: 70vh;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        border-radius: 1.5vh;
        border-left: 1px solid rgba(0, 0, 0, 0.08);
        box-shadow: 1vh 1vh 1vh rgba(0, 0, 0, 0.25);
    }
`;
