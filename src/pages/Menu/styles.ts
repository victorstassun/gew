import styled from "styled-components";

export const ContainerNavbar = styled.div`
    width: 100%;
    height: 8vh;
    background-color: white;
    box-shadow: 0.1vh 0.1vh 0.5vh rgb(0, 0, 0, 0.25);
    position: absolute;
`;

export const Logo = styled.div`
    width: 4.2vw;
    height: 6vh;
    margin: 1vh 0 0 1vw;
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQ4AAAC7CAMAAACjH4DlAAAAV1BMVEUAV53///8AU5tXf7GwwNcATJgASZcATZjK1eQ3bKi9y97P2eYIWp9cgrMAVZysvdUjY6M9cKkAPZLq7vTj6fGVrMvE0OEdX6G4x9sAQZOHocRIdayjt9JHrH7XAAACT0lEQVR4nO3dTW/aQBRGYQoEkzhAPppCSf//7+yqUo7mXVzkIkPmPOurYXSWtplZLCRJkiRJkiTpn/2yV7HGcbfqVMqx3P3oVcyxmntXszEHmAPMAeYAc4A5wBxgDjAHmAPMAeYAc4A5wBxgDjAHmAPqOX4e1o3De5ps59brU3XJC6Ql36ctWc9x+P3QeNumyaEd3LykwdNbO3mBtOQ4bckLcgzt5GZMk89hycc0+BR/vizm2ExaMjEHmAPMAeYAc4A5wBxgDjAHmAPMAeYAc4A5wBxgDjAHzJtj2AT7tM9yjrhk/ML45nIMH+O2MT6mHtUcw7ldcTt+VnvMmuPhKU2+pr2Xc8Rn7rtucxzMYQ5zmMMc5jCHOcxhDnOYwxzmMIc5zGGO28zxyxxfHV+CuM8uciz2Qcc5yswB5gBzgDnAHGAOMAeYA8wB5gBzgDnAHGAOMAeYA/rIkZ6GRV3kiM9Kox5y5CfpZd8uR3zPUmYOMAeYA8wB5gBzgDnAHGAOMAeYA8wB5gBzgDnAHGAOuEaOePPX+n5zTPwP/mc6JOEccgx/0uRz+xnoxBMasnKOc9pl+YSGxTKddxFq1A/bmHp+R5IP9/3/53dcwT2f7nIF5gBzgDnAHGAOMAeYA8wB5gBzgDnAHGAOMAeYA8wBd5Nj0kVZZde4+WuIOcpL5v/1T7pGre7m7oU7vZbPT+5CfrEw965mYw4wB5gDzAHmAHOAOcAcYA4wB5gDzAHmAHOAOcAcYA4wB+Qcq07tjvHR8bJX+cWCJEmSJEmSpD79BWgzqLmuWN0LAAAAAElFTkSuQmCC");
    float: left;
    background-size: cover;
    background-position: center;
    cursor: pointer;
`;

export const PageIndicator = styled.div`
    width: 10vw;
    height: 8vh;
    margin-left: 3vw;
    float: left;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    a { 
        font-size: 2.3vh;
        font-weight: bold;
        color: #00579D;
        position: absolute;
    }

    &:after {
        content: "";
        width: 90%;
        height: 0.75vh;
        margin: 7.25vh 0 0 5%;
        background: #00579D;
        border-radius: 1vh 1vh 0 0;
    }
`;

export const SandwichMenu = styled.div`
    width: 2vw;
    height: 4vh;
    margin: 2.5vh 2vw 0 1vw;
    float: right;
    background-image: linear-gradient( to bottom, #00579D 20%, #FFF 20%, #FFF 40%, #00579D 40%, #00579D 60%, #FFF 60%, #FFF 80%, #00579D 80%);
`;

export const DropdownMenu = styled.div`
    width: 10vw;
    height: 20vh;
    background: #fff;
    box-shadow: 0.1vh 0.1vh 0.5vh rgb(0, 0, 0, 0.25);
    position: absolute;
    margin-top: 5.5vh;
    transform: translateX(-5.85vw);
    display: none;
    z-index: 10;

    ul { 
        width: 100%;
        height: 20vh;
        display: flex;
        flex-direction: column;

        li {
            width: 100%;
            height: 7vh;
            color: #00579D;
            list-style: none;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            &:hover {
                background-color: rgba(194, 194, 194, 0.25);
            }

            a {
                color: #005DA5;

                &:hover {
                    cursor: pointer;
                }
            }

            &:after {
                content: "";
                width: 90%;
                height: 0.1vh;
                margin: 5.5vh 0 0 5%;
                position: absolute;
                background: #c4c4c4;

                &::last-child {
                    display: none;
                }
            }
        }
    }

`;

export const LanguageIndicator = styled.div`
    width: 4vw;
    height: 6vh;
    margin: 1.5vh 1vw 1vh 0;
    float: right;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Flag = styled.div`
    width: 2vw;
    height: 3vh;
    border-radius: 0.1vh;
    background-image: url(../img/flag.svg);
    background-size: cover;
    background-position: center;
`;

export const VectorLanguage = styled.div`
    width: 1.4vw;
    height: 2vh;
    margin-left: 0.25vw;
    background-image: url(../img/arrow.svg);
    background-size: cover;
    background-position: center;
    transform: scale(0.65, 0.65);
    cursor: pointer;
`;