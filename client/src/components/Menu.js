import React, { Component } from 'react'
import { Dropdown, Icon, Input, Menu } from 'semantic-ui-react'

export default class MenuExampleSubMenu extends Component {
  
  state = {}

handleItemClick = (e, { name }) => {
    if (name === 'logout') {
      localStorage.clear(); // Clear user authentication tokens or other relevant data
      window.location.href = '/'; // Redirect to the login page
    } else {
      this.setState({ activeItem: name });

      // Handle additional menu item clicks
      if (name === 'liked') {
        // Redirect to the liked songs page or perform the desired action
        window.location.href = '/liked'; // Example: Redirect to the liked songs page
      }
    }
  };

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
                name='add songs'
                active={activeItem === 'add'}
                onClick={this.handleItemClick}
              >
                liked songs
              </Menu.Item>
              <Menu.Item
                name='liked songs'
                active={activeItem === 'liked'}
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
