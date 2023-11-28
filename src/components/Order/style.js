import styled from 'styled-components';

export const OrderContainer = styled.div`
    display: flex;

    button {
        margin: 0 1rem 0 1rem;
        padding: 0.5rem;
        border: 1px solid #ccc;
        border-radius: 0.5rem;
        background-color: #fff;
        color: #000;
        font-size: 1rem;
        font-weight: 500;
        cursor: pointer;

        &:hover {
            background-color: #ccc;
            color: #fff;
        }
    }
    
`;

export const OrderRadio = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 1rem 0 1rem;
    gap: 0.5rem;

    input {
        margin-right: 0.5rem;
    }

`;

export const OrderSelect = styled.select`
    margin: 0 1rem 0 1rem;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    background-color: #fff;
    color: #000;
    font-size: 1rem;
    font-weight: 500;
    height: 2.4rem;
    margin-top: 0.15rem;
`;
