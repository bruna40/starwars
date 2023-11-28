import styled from 'styled-components';

export const SelectContainer = styled.div`
    display: flex;
    flex-direction: row;

    input {
        border-top-left-radius: 0.5rem;
        border-bottom-left-radius: 0.5rem;

        padding: 0.5rem;
        border: 1px solid #ccc;

        font-size: 1rem;
    }

    button {
        border-top-right-radius: 0.5rem;
        border-bottom-right-radius: 0.5rem;

        padding: 0.5rem;
        border: 1px solid #ccc;
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

export const SelectOptions = styled.div`
    select {
        margin: 0 1rem 0 1rem;
        padding: 0.5rem;
        border: 1px solid #ccc;
        border-radius: 0.5rem;
        background-color: #fff;
        color: #000;
        font-size: 1rem;
        font-weight: 500;
    }
`;
