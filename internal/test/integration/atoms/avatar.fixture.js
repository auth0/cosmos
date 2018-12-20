import React from 'react'
import { Avatar } from '@auth0/cosmos'

class Fixture extends React.Component {
  render() {
    return (
      <Avatar
        id="custom-id"
        type="user"
        image="https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&h=200&fit=crop&crop=faces&s=a72ca28288878f8404a795f39642a46f"
        size="medium"
        type="user"
      />
    )
  }
}

export default Fixture
