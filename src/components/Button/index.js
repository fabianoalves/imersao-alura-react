import styled from 'styled-components';

const Button = styled.button`
    color: var(--white);
    background: var(--black);
    border: 1px solid var(--white);
    padding: 16px 24px;
    font-size: 16px;
    border-radius: 5px;
    font-weight: bold;
    text-decoration: none;
    transition: opacity .3s;

    &:hover,
    &:focus{
        opacity: .5;
    }

    @media(max-width: 800px){
        position: fixed;
        left:0;
        right: 0;
        bottom: 0;
        background-color: var(--primary);
        color: var(--white);
        outline:0;
        text-align: center;
        border:0;
        border-radius:0;

    }
`;

// const Button = styled.button`
//     color: var(--white);
//     border: 1px solid var(--white);
//     box-sizing: border-box;
//     cursor: pointer;
//     padding: 16px 24px;
//     font-style: normal;
//     font-weight: bold;
//     font-size: 16px;
//     outline: none;
//     border-radius: 5px;
//     text-decoration: none;
//     display: inline-block;
//     transition: opacity .3s;
//     }
//     &:hover,
//     &:focus {
//     opacity: .5;
//     }
// `;

export default Button;
