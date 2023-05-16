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
              </Menu.Item>
            </Menu.Menu>
          </Menu.Item>

          <Menu.Item
            name='logout'
            active={activeItem === 'logout'}
            onClick={this.handleItemClick}
          >
          </Menu.Item>

        </Menu>
      </div>
    )
  }
}
