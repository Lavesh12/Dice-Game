import styled from "styled-components";

export const Button = styled.button`
color: white;
padding: 10px 18px;
background-color: #000000;
border-radius: 5px;
border: none;
min-width: 220px;
font-size: 16px;
border: 1px solid transparent;
cursor: pointer;
transition: 0.4s background ease-in;
&:hover{
    background: white;
    border: 1px solid black;
    color: black;
    transition: 0.3s background ease-in;
}

@media only screen and (max-width: 768px) {
        /* For mobile phones: */
      min-width: 122px;
    }

`;

export const OutlineButton = styled(Button)`
    background-color: white;
border: 1px solid black;
color: black;
&:hover{
    background: black;
    border: 1px solid transparent;
    color: white;
    transition: 0.3s background ease-in;
}
`;

