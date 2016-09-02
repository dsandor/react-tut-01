import React from 'react';
import {render} from 'react-dom';
import {Navbar, NavItem, Icon} from 'react-materialize';

class App extends React.Component {
  render () {
    return (
      <div>
        <Navbar brand='logo' right>
		    <NavItem href='get-started.html'><Icon>search</Icon></NavItem>
		    <NavItem href='get-started.html'><Icon>view_module</Icon></NavItem>
		    <NavItem href='get-started.html'><Icon>refresh</Icon></NavItem>
		    <NavItem href='get-started.html'><Icon>more_vert</Icon></NavItem>
		</Navbar>
		<p>This is the first view of your ReactJS application with Materialize.</p>
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));