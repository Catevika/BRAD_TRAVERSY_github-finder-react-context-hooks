import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

// functional component beacause is stateless!
const Navbar = ({ title, icon }) => {
	return (
		<nav className='navbar bg-primary'>
			<h1>
				<i className={icon}></i> {title}
			</h1>
			<ul>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/about'>About</Link>
				</li>
			</ul>
		</nav>
	);
};

Navbar.defaultProps = {
	title: 'Github Finder',
	icon: 'fab fa-github'
};
// each property defined in the Navbar component in App.js is going to overwrite the default props

Navbar.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired
};
// define the types of the expected props and send an error message in the console if the inserted type is not the correct one

export default Navbar;
