import React from 'react'
import { HeaderContainer } from './style'
import scilogo from '../../assets/logo.png'

export const Header = () => {
  return (
    <HeaderContainer>
        <img src={scilogo} alt="sci logo"></img>
        <div>
            Criar plano de contas SCI Visual Practice
        </div>
    </HeaderContainer>
  )
}
