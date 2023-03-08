import React from 'react'
import { Container, Menu } from 'semantic-ui-react'
import CartSummary from './CartSummary'

export default function Categories() {
  return (
    <div>
      <Menu pointing vertical>

        <Menu.Item
          name='Profil'
        />
        <Menu.Item
          name='Mesajlar'
        />
        <CartSummary />
        
   </Menu>
    </div>
  )
}
