import React from 'react'
import { Dropdown, Image, Menu } from 'semantic-ui-react'

export default function SignedIn({signOut}) {
  return (
    <div>
        <Menu.Item>
            <Image avatar spaced="right" src="https://scontent.fkco5-1.fna.fbcdn.net/v/t31.18172-8/11008582_10204128730963725_5540494496967947042_o.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_ohc=j3B3zlFcRWwAX_IIV55&_nc_ht=scontent.fkco5-1.fna&oh=00_AfAE4DervTGTRRiRdAdmlUxx9BEOqfM5V9ehpIbPa1JoLw&oe=6420536A"></Image>
            <Dropdown pointing="top right" text='Şevket'>
                <Dropdown.Menu>
                    <Dropdown.Item text="Bilgilerim" icon="info" />
                    <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out" />  
                </Dropdown.Menu>
            </Dropdown>
        </Menu.Item>
    </div>
  )
}
