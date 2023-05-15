import { useState } from "react";
import { Form, FormContainer, Input, SendButton, StyledLabel, RegisterButton } from "./styled";

function TelaLogin(props) {
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  //Funções
  function onChangeEmail(event){
    setEmail(event.target.value)
  }
  function onChangeSenha(event){
    setSenha(event.target.value)
  }

  const login = () => {
    props.mudarTela("TelaPrincipal")

    //Todos os dados
    console.log(
      "Email", email
    )
    console.log(
      "Senha", senha
    )

  }

  const mostrarTelaCadastro = () => {
    props.mudarTela("TelaCadastro")
  }

  return (
    <FormContainer >
      <h1>LOGIN</h1>

      <Form>
        <StyledLabel>E-mail:
          <Input value={email} onChange={onChangeEmail}/>
        </StyledLabel>

        <StyledLabel>Senha:
          <Input type={"password"} value={senha} onChange={onChangeSenha}/>
        </StyledLabel>

        <SendButton onClick={login}>Entrar</SendButton>

        <RegisterButton onClick={mostrarTelaCadastro}>Cadastre-se</RegisterButton>
      </Form>
    </FormContainer>
  );
}

export default TelaLogin;
