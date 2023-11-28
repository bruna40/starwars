import styled from 'styled-components';

export const HeaderContainer = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

export const Title = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin-top: 2rem;
    margin-bottom: 2rem;

    h1 {
        font-size: 5rem;
        color: ${(props) => props.theme['gray-100']};
    }

    input {
        margin-top: 1rem;
        width: 30rem;
        height: 3rem;
        border-radius: 0.5rem;
        border: 0;
        padding-left: 1rem;
        font-size: 1.5rem;
    }
`;

export const Search = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
    width: 100%;

`;
