import styled from 'styled-components';

export const Wrapper = styled.div`
    max-width: 800px;
    background: #ebfeff;
    border-radius: 10px;
    border: 2px solid #0085a3;
    padding: 20px;
    box-shadow: 0 4px 7px rgba(0, 0, 0, 0.2), 0 4px 7px rgba(0, 0, 0, 0.27);
    text-align: center;
    font-size: 1rem;

p {
    font-size: 2rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
    color:black;
  }
`
type ButtonWrapperProps ={
    correct: boolean;
    userClicked: boolean;
}


export const ButtonWrapperProps = styled.div<ButtonWrapperProps>`
    transition: all 0.3s ease;
    
    :hover {
      opacity: 0.8;
    }

    button {
        cursor: pointer;
        user-select: none;
        font-size: 1rem;
        height: 3rem;
        width: 10rem;
        margin: 5px 0;
        background: ${({correct, userClicked}) =>
        correct
        ? 'linear-gradient(90deg, #56ffa4, #59bc86)'
        : !correct && userClicked
        ? 'linear-gradient(90deg,#ff5656,#c16868)'
        : 'linear-gradient(90deg,#56ccff,#6eafb4)'};
        border: 3px solid #fff;
        box-shadow: 0 4px 7px rgba(0, 0, 0, 0.2), 0 4px 7px rgba(0, 0, 0, 0.27);
        border-radius: 10px;
        color: #fff;
        text-shadow: 0 4px 7px rgba(0, 0, 0, 0.2), 0 4px 7px rgba(0, 0, 0, 0.27);
        }
    `
