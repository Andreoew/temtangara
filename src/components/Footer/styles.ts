import styled from "styled-components";

export const FooterContainerDiv = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;  
  position: absolute; 
  bottom: 0; 
  
  border-top: solid 1px ${(props) => props.theme['green-500']};

  div{   
    justify-content: center;
    margin: 20px;    
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.white};
    box-shadow: none;
  }
`;