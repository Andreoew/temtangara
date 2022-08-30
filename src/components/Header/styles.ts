import styled from "styled-components";


export const HeaderContainer = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;  
  margin-top: 0 auto;
  border: 0;
  
  a {
    margin-left: 30px;
    text-decoration: none;
    color: ${(props) => props.theme['gray-100']};
    box-shadow: none;
  }
`;

export const NewContactButton = styled.button`
  height: 50px;
  border: 0;
  background: ${(props) => props.theme['gray-800']};
  color: ${(props) => props.theme.white};
  font-weight: bold;
  padding: 0 1.25rem;
  border-radius: 6px;
  margin-left: 5px;
  cursor: pointer;
  box-shadow: none;

  
        

  &:hover {
    background: ${(props) => props.theme['green-700']};
    transition: background-color 0.2s;    
  }
`