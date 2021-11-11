import React, { useState, useEffect } from 'react'
import OtpField from 'react-otp-field';
import {Arrow,BoxButton,BoxImg,BoxInput,ButtonGo,Container,Content,Input,Logo} from './Styles'

const Login = ({data, setLogged}) => {
    const [paso, setPaso] = useState(0);
    const [otp, setOtp] = useState('');

   
    const [inputValue, setInputValue] = useState('')

    const handleChange = ({target}) =>{
        setInputValue(target.value)
    }
    
    const handleSubmit =(e) =>{
        e.preventDefault()
        if(paso === 0){
            if(data.inicioSesion.email === inputValue){
                setPaso(paso + 1)
            }
            else{
            alert("no es igual")
            }
        }
        else{
            if(data.inicioSesion.otp === otp){
                console.log(otp)
                setPaso(paso + 1)
                setLogged(true);
            }
            else{
            alert("El OTP no es el mismo")
            }   
        }
        
    }

    return (
        <Container>
            <Content>
                <BoxImg >
                    <Logo src="/logo.png"/>
                </BoxImg>
                <form onSubmit={handleSubmit}>
                    {paso === 0?
                    <>
                        <BoxInput>
                            <Input value={inputValue} onChange={handleChange} placeholder="Email"/>
                        </BoxInput>
                        
                    </>:
                    <OtpField
                    value={otp}
                    onChange={setOtp}
                    numInputs={5}
                    onChangeRegex={/^([0-9]{0,})$/}
                    autoFocus
                    separator={<span>-</span>}
                    inputProps={{ className: 'otp-field__input', disabled: false }}
                />
                    }
                    <BoxButton>
                            <ButtonGo onClick={handleSubmit} name="Iniciar">
                                Continuar
                                <Arrow/>
                            </ButtonGo>
                        </BoxButton>
                </form>

            </Content>
        </Container>
    )
}

export default Login
