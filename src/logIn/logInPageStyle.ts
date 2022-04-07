import styled from "styled-components";

const LogInPageStyle = styled.div`
  .text-field-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
  .button-container {
    width: 180px;
    height: 2rem;
    padding: 2rem 0rem;
    .log-in-button {
      width: 100%;
      height: 100%;
      color: blue;
      font-weight: bold;
      cursor: pointer;
    }
  }
`;
export default LogInPageStyle;
