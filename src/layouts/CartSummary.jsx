import React from 'react'
import { Dropdown } from 'semantic-ui-react'

export default function CartSummary() {
  return (
    <div>
      <Dropdown item text='Paylaş'>
        <Dropdown.Menu>
          <Dropdown.Item>İlan Paylaş</Dropdown.Item>
          <Dropdown.Item>Özgeçmiş Paylaş</Dropdown.Item>
          <Dropdown.Item>Sosyal Medyada Paylaş</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>  
    </div>
  )
}
