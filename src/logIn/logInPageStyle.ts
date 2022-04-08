import styled from "styled-components";

const LogInPageStyle = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #c4dfe6;
  .text-field-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    width: 100%;
    min-width: 300px;
  }
  .button-container {
    width: 100%;
    height: 3rem;
    padding: 2rem 0rem;
    display: flex;
    justify-content: center;
    align-items: center;
    .log-in-button {
      width: 180px;
      height: 100%;
      color: #003b46;
      font-size: 1rem;
      font-weight: bold;
      cursor: pointer;
      border-radius: 10px;
      border: none;
    }
  }
`;
export default LogInPageStyle;
