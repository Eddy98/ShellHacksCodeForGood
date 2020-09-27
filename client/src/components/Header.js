import { Menu, Dropdown } from 'semantic-ui-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import firebase from '../firebase'

export default function Header(props) {
  const [activeItem, setActiveItem] = useState('home')

  async function logout() {
    await firebase.logout()
    props.loginEvent()
  }

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
          {!firebase.getCurrentUsername() ? (
            <Menu.Item
              as={Link}
              to='/login'
              name='login'
              active={activeItem === 'login'}
              onClick={handleItemClick}
            />
          ) : (
            <Dropdown
              pointing
              item
              className='email'
              text={firebase.getCurrentUsername()}
            >
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to='/history'>
                  My History
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={logout}>
                  <p className='logout'>Logout</p>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          )}
        </Menu.Menu>
      </Menu>
    </div>
  )
}
