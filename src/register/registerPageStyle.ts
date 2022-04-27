import styled from "styled-components";

const RegisterPageStyle = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .text-field-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    width: 100%;
    min-width: 18.75rem;
    padding-top: 1rem;
  }
  .button-container {
    width: 100%;
    height: 3rem;
    padding: 2rem 0rem;
    display: flex;
    justify-content: center;
    align-items: center;
    .log-in-button {
      width: 11.25rem;
      height: 100%;
      color: #003b46;
      font-size: 1rem;
      font-weight: bold;
      cursor: pointer;
      border-radius: 0.62rem;
      border: none;
    }
  }
`;
export default RegisterPageStyle;
