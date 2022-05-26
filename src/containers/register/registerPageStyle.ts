import styled from "styled-components";

const RegisterPageStyle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  .form-container {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 100%;
  }
  .name-container {
    box-shadow: 3px 2px 20px #bbb;
    padding: 2rem;
    .register-title {
      width: 100%;
      text-align: start;
      text-transform: uppercase;
      font-weight: 400;
    }
    .label-description {
      width: 100%;
      text-align: start;
      padding: 1rem 0rem;
    }
  }
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
  .password-container {
    box-shadow: 3px 2px 20px #bbb;
    padding: 2rem;
  }
  .personal-container {
    box-shadow: 3px 2px 20px #bbb;
    padding: 2rem;
    display: flex;
    gap: 1.5rem;
    flex-direction: column;
    .number-container {
      display: flex;
      width: 100%;
      gap: 2%;
      .country-field {
        width: 49%;
      }
      .number-field {
        width: 49%;
      }
    }
  }
  .more-data-container {
    box-shadow: 3px 2px 20px #bbb;
    padding: 2rem;
    #text-area-field {
      min-height: 5rem !important;
    }
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
