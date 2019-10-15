import React, { useState } from 'react';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	NavItem,
	Button,
	ButtonGroup,
} from 'reactstrap';
import { Link } from 'react-router-dom';

interface NavBarProps {
	user?: string;
}
const NavBar = (props: NavBarProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const [user, setUser] = useState('');
	const toggle = () => setIsOpen(!isOpen);

	return (
		<div>
			<Navbar fixed='top' color='dark' dark expand='md'>
				<NavbarBrand href='/'>WeCode Gym</NavbarBrand>
				<NavbarToggler onClick={toggle} />

				<Collapse isOpen={isOpen} navbar>
					<Nav className='ml-auto' navbar>
						<NavItem>
							<ButtonGroup>
								<Button
									color='primary'
									onClick={() => setUser('email@email.com')}
									active={user === 'email@email.com'}
								>
									Logged In
								</Button>
								<Button
									color='primary'
									onClick={() => setUser('')}
									active={user === ''}
								>
									Logged Out
								</Button>
							</ButtonGroup>
						</NavItem>
						{!user && (
							<NavItem>
								<Button outline color='primary'>
									<Link to='/login'>Login</Link>
								</Button>
							</NavItem>
						)}
						{user && (
							<UncontrolledDropdown nav inNavbar>
								<DropdownToggle nav caret>
									{user}
								</DropdownToggle>
								<DropdownMenu right>
									<DropdownItem onClick={() => setUser('')}>
										Logout
									</DropdownItem>
								</DropdownMenu>
							</UncontrolledDropdown>
						)}
					</Nav>
				</Collapse>
			</Navbar>
		</div>
	);
};

export default NavBar;
