import { useState } from "react";
import { Form, FormContainer, Input, StyledLabel, SendButton, BackToLoginButton } from "./styled";

function TelaCadastro(props) {
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [confirmacaoSenha, setConfirmacao] = useState("")

  //Função
  function onChangeNome(event){
    setNome(event.target.value)
  }
  function onChangeEmail(event){
    setEmail(event.target.value)
  }
  function onChangeSenha(event){
    setSenha(event.target.value)
  }
  function onChangeConfirmacaoSenha(event){
    setConfirmacao(event.target.value)   
  }
  const cadastrar = () => {
    // fluxo de cadastro (ainda veremos)
    if(confirmacaoSenha === senha){
      props.mudarTela("TelaCadastroEndereco")
    }else{
      alert("Erro! As senhas não são compatíveis")
    }

    //Todos os dados
    console.log(
      "Nome", nome
    )
    console.log(
      "Email", email
    )
    console.log(
      "Senha", senha
    )
  }

  const mostrarTelaLogin = () => {
    props.mudarTela("TelaLogin")
  }

  return (
    <FormContainer>
      <h1>Cadastro </h1>

      <Form>
        <StyledLabel htmlFor="titulo">
          Nome:
          <Input id="titulo" value={nome} onChange={onChangeNome} />
        </StyledLabel>

        <StyledLabel htmlFor="foto">
          E-mail:
          <Input id="foto" value={email} onChange={onChangeEmail} />
        </StyledLabel>

        <StyledLabel htmlFor="descricao">
          Senha:
          <Input id="descricao" value={senha} onChange={onChangeSenha}/>
        </StyledLabel>

        <StyledLabel htmlFor="descricao">
          Confirmação da senha:
          <Input id="descricao" value={confirmacaoSenha} onChange={onChangeConfirmacaoSenha} />
        </StyledLabel>

        <SendButton onClick={cadastrar}>Cadastrar</SendButton>

        <BackToLoginButton onClick={mostrarTelaLogin}>Já possuo cadastro</BackToLoginButton>
      </Form>
    </FormContainer>
  );
}

export default TelaCadastro;
