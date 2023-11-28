import styled from 'styled-components';

const Button = styled.button`
    margin: 0 1rem 0 1rem;
    padding: 0.72rem;
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
`;
export default Button;
