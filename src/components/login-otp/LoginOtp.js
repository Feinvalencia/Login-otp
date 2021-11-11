import React, { useState } from 'react'
import OtpField from 'react-otp-field';
import {Container, BoxButton, BoxImg, ButtonGo, Arrow, Content, Logo} from '../login/Styles'


const LoginOtp = () => {

    const [value, setValue] = useState('');

    return (
        <Container>
            <Content>
                <BoxImg >
                    <Logo src="/logo.png"/>
                </BoxImg>
                <OtpField
                    value={value}
                    onChange={setValue}
                    numInputs={5}
                    onChangeRegex={/^([0-9]{0,})$/}
                    autoFocus
                    separator={<span>-</span>}
                    inputProps={{ className: 'otp-field__input', disabled: false }}
                />
                <BoxButton>
                    <ButtonGo>
                        Continuar
                        <Arrow/>
                    </ButtonGo>
                </BoxButton>

            </Content>
        </Container>
    )
}

export default LoginOtp
