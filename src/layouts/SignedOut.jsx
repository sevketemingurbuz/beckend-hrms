import React from 'react'
import { Button, Menu } from 'semantic-ui-react'

export default function SignedOut({signIn, signUp}) {
  return (
    <div>
        <Menu.Item>
            <Button onClick={signUp} primary>Kayıt Ol</Button>
            <Button onClick={signIn} primary style={{marginLeft: "0.5em"}}>Giriş Yap</Button>
        </Menu.Item>
    </div>
  )
}
