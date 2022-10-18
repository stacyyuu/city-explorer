import React from 'react';
import Image from 'react-bootstrap/Image';

class Header extends React.Component {
  render() {
    return (
      <>
        <h1>The City Explorer</h1>
        <Image 
        className = 'cityView'
        src = {'https://images.unsplash.com/photo-1493514789931-586cb221d7a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80'}
        alt = 'Night view of a city'
        />
      </>
    )
  }
}

export default Header;