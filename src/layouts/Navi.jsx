import React from 'react'
import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Menu, Container } from 'semantic-ui-react'
import CartSummary from './CartSummary'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'

export default function Navi() {

    const [isAuthenticated, setIsAuthenticated] = useState([true])

    const navigate = useNavigate()

    function handleSignOut(){
        setIsAuthenticated(false)
        navigate('ekmek-kapisi')
    }

    function handleSignIn(){
        setIsAuthenticated(true)
    }

    function handleSignUp(){
        navigate('kayit-ol')
    }

  return (
    <div>
         <Menu color='pink' inverted fixed>
                <Container>
                    <Menu.Item as={NavLink} to='ekmek-kapisi'
                        name='Ekmek Kapısı'
                    />
                    <Menu.Item as={NavLink} to='is-arayanlar'
                        name='İş Arayanlar'
                    />
                    <Menu.Item as={NavLink} to='is-ilanlari'
                        name='iş İlanları'
                    />
                     <Menu.Item as={NavLink} to='ozgecmis-bilgileri'
                        name='Özgeçmiş Bilgileri'
                    />
                    <Menu.Item as={NavLink} to='is-ilani-ver'
                        name='iş İlanı Ver'
                    />
                    <Menu.Menu position='right'>
                        <CartSummary />
                        {isAuthenticated?<SignedIn signOut = {handleSignOut} />:<SignedOut signIn = {handleSignIn} signUp = {handleSignUp} />}  
                    </Menu.Menu>
                </Container>
            </Menu>
    </div>
  )
}
