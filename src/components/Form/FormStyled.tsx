import styled from "styled-components";

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
  max-width: 460px;

  label {
    font-weight: 800;
  }

  input {
    margin-bottom: 16px;
    padding: 8px;
    border-radius: 2px;
    background-color: #e7e4e4;
    border: 0px;
  }

  select {
    margin-bottom: 16px;
    padding: 8px;
    border-radius: 2px;
    border: 0px;
    background-color: #e7e4e4;
    color: #000;
  }

  p {
    margin: 0;
    font-size: 0.8rem;
    color: #454444;
  }

  .button-container {
    display: flex;
    justify-content: end;
  }
`;

export default FormStyled;
