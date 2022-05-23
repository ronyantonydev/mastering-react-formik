import styled from "styled-components";

const TextFieldStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: blue;

  .label-container {
    color: #444;
    text-align: left;
    font-size: 0.9rem;
    padding: 0.8rem 0rem;
  }
  .input-container {
    color: #003b46;
    font-size: 1rem;
    font-weight: 600;
    height: 3rem;
    border-radius: 0.62rem;
    border: 1px solid #cacaca;
    border-radius: 0;
    background-color: #fefefe;
    box-shadow: inset 0 1px 2px hsl(0deg 0% 4% / 10%);
    font-family: inherit;
    font-size: 1rem;
    font-weight: 400;
    color: #0a0a0a;
    padding-left: 1rem;
    ::placeholder {
      font-size: 0.8rem;
    }
  }
  .helper-text-container {
    color: #f44336;
    text-align: left;
    padding: 0.5rem 0rem;
  }
`;

export default TextFieldStyle;
