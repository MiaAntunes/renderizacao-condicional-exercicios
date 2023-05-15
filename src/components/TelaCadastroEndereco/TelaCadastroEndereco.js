import { useState } from "react";
import { Form, FormContainer, Input, StyledLabel, SendButton, BackToLoginButton } from "./styled";

export function TelaCadastroEndereco(props) {
    const [endereco, setEndereco] = useState("")
    const [numero, setNumero] = useState("")
    const [complemento, setComplemento] = useState("")
    const [telefone, setTelefone] = useState("")
    //Função
    function onChangeEndereco(event){
        setEndereco(event.target.value)
    }
    function onChangeNumero(event){
        setNumero(event.target.value)
        
    }
    function onChangeComplemento(event){
        setComplemento(event.target.value)
        
    }
    function onChangeTelefone(event){
        setTelefone(event.target.value)
    }

    const mostrarTelaCadastroEnde = () => {
        props.mudarTela("TelaPrincipal")
        console.log(
            "Endereço",endereco
        )
        console.log(
            "Numero",numero
        )
        console.log(
            "Complemento",complemento
        )
        console.log(
            "Telefone",telefone
        )
    }
 

    return (
            <FormContainer>
                <h1>Endereço</h1>
                <Form>
                <StyledLabel>
                    Endereço: 
                    <Input type="text" id="endereco" value={endereco} onChange={onChangeEndereco} />
                </StyledLabel>

                <StyledLabel>
                    Número
                    <Input type="number" id="numero" value={numero} onChange={onChangeNumero}/>
                </StyledLabel>
                <StyledLabel>
                    Complemento: 
                    <Input type="text" id="complemento"  value={complemento} onChange={onChangeComplemento}/>
                </StyledLabel>
                <StyledLabel>
                    Telefone:
                    <Input type="number" id="telefone" value={telefone} onChange={onChangeTelefone}/>
                </StyledLabel>
                <SendButton onClick={mostrarTelaCadastroEnde}>Confirmar</SendButton>
                </Form>
            </FormContainer>
    )
}