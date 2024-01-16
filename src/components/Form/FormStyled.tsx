import styled from "styled-components";

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
  max-width: 460px;

  label {
    font-weight: 800;
  }

  input,
  select {
    margin-bottom: 16px;
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #ccc;
    background-color: #f9f9f9;
  }

  p {
    margin: 0;
  }
`;

export default FormStyled;
