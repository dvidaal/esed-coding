import styled from "styled-components";

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;

  label {
    font-weight: 800;
  }

  input {
    margin-bottom: 16px;
    padding: 8px;
    border-radius: 2px;
    background-color: #e7e4e4;
    border: 0px;
    color: #000;
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

  .categories {
    margin-bottom: 30px;
    background-color: #e7e4e4;
  }

  .logo {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 20px;
  }
`;

export default FormStyled;
