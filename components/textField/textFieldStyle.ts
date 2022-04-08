import styled from "styled-components";

const TextFieldStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  .label-container {
    color: #003b46;
    padding: 0.5rem 0rem;
    text-align: left;
    font-weight: bold;
    font-size: 1.1rem;
  }
  .input-container {
    color: #003b46;
    font-size: 1rem;
    font-weight: 600;
    height: 3rem;
    border-radius: 10px;
    border: none;
  }
  .helper-text-container {
    color: red;
    text-align: left;
    padding: 0.5rem 0rem;
    font-weight: bold;
  }
`;

export default TextFieldStyle;
