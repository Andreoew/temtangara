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
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  background: ${(props) => props.theme['gray-800']};
  color: ${(props) => props.theme.white};
  border: 0;
  font-size: 13px;
  font-weight: 700;
  text-decoration: none;
  overflow: hidden;
  transition: .5s;
  letter-spacing: 4px;
  margin-left: 5px;
  box-shadow: none;
  cursor: pointer;


  :hover {
    background: ${(props) => props.theme['green-700']};
    color: rgb(10, 11, 21);
    border-radius: 5px;
  }

  span {
    position: absolute;
    display: block;
  }

  span:nth-child(1) {
    top: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #03e9f4);
    animation: btn-anim1 1s linear infinite;
  }

  @keyframes btn-anim1 {
    0% {
      left: -100%;
    }
    50%,
    100% {
      left: 100%;
    } 
    
  }

  span:nth-child(2) {
    top: -100%;
    right: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(180deg, transparent, #03e9f4);
    animation: btn-anim2 1s linear infinite;
    animation-delay: .25s;
  }

  @keyframes btn-anim2 {
    0% {
      top: -100%;
    }
    50%,
    100% {
      top: 100%;
    }
  }

  span:nth-child(3) {
    bottom: 0;
    right: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(270deg, transparent, #03e9f4);
    animation: btn-anim3 1s linear infinite;
    animation-delay: .5s;
  }

  @keyframes btn-anim3 {
    0% {
      right: -100%;
    }
    50%,
    100% {
      right: 100%;
    }
  }

  span:nth-child(4) {
    bottom: -100%;
    left: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(360deg, transparent, #03e9f4);
    animation: btn-anim4 1s linear infinite;
    animation-delay: .75s;
  }

  @keyframes btn-anim4 {
    0% {
      bottom: -100%;
    }
    50%,
    100% {
      bottom: 100%;
    }
  }

  







  /* height: 50px;
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
  } */
`