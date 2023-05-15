import React, { Component } from 'react'
import { Dropdown, Icon, Input, Menu } from 'semantic-ui-react'

export default class MenuExampleSubMenu extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div style={{ position: 'absolute', top: 0, right: 0 }}>
        <Menu vertical>
          <Menu.Item>
            <Input placeholder='Search...' />
          </Menu.Item>

          <Menu.Item>
            PROFILE
            <Menu.Menu>
              <Menu.Item
                name='profile'
                active={activeItem === 'profile'}
                onClick={this.handleItemClick}
              >
                profile
              </Menu.Item>
              <Menu.Item
                name='liked songs'
                active={activeItem === 'add'}
                onClick={this.handleItemClick}
              >
                liked songs
              </Menu.Item>
              <Menu.Item
                name='liked songs'
                active={activeItem === 'about'}
                onClick={this.handleItemClick}
              >
                {/* Remove */}
              </Menu.Item>
            </Menu.Menu>
          </Menu.Item>

          <Menu.Item
            name='logout'
            active={activeItem === 'logout'}
            onClick={this.handleItemClick}
          >
            {/* <Icon name='grid layout' />
            Browse
          </Menu.Item>
          <Menu.Item
            name='messages'
            active={activeItem === 'messages'}
            onClick={this.handleItemClick} */}
          {/* > */}
            {/* Messages */}
          </Menu.Item>

          {/* <Dropdown item text='More'>
            <Dropdown.Menu>
              <Dropdown.Item icon='edit' text='Edit Profile' />
              <Dropdown.Item icon='globe' text='Choose Language' />
              <Dropdown.Item icon='settings' text='Account Settings' />
            </Dropdown.Menu>
          </Dropdown> */}
        </Menu>
      </div>
    )
  }
}
