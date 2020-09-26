import { Menu, Segment } from 'semantic-ui-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  const [activeItem, setActiveItem] = useState('home')

  const handleItemClick = (e, { name }) => setActiveItem(name)
  return (
    <div>
      <Menu pointing secondary>
        <Menu.Item
          as={Link}
          to='/home'
          name='app'
          active={activeItem === 'app'}
          onClick={handleItemClick}
        />
        <Menu.Menu position='right'>
          <Menu.Item
            as={Link}
            to='/login'
            name='login'
            active={activeItem === 'login'}
            onClick={handleItemClick}
          />
        </Menu.Menu>
      </Menu>
    </div>
  )
}
