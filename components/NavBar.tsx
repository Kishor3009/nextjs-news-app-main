import NextLink from "next/link";
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";

const NavBar = () => {
	return (
		<Navbar bg="dark" variant="dark" sticky="top" expand="sm" collapseOnSelect>
			<Container>
				<Navbar.Toggle aria-controls="main-navbar" />
				<Navbar.Collapse id="main-navbar">
					<Nav>
						<Nav.Link href="/" as={NextLink}>
							Breaking
						</Nav.Link>
						<Nav.Link href="/search" as={NextLink}>
							Search
						</Nav.Link>
						<NavDropdown title={"Categories"} id="categories-dropdown">
							<NavDropdown.Item as={NextLink} href="/categories/business">
								Business
							</NavDropdown.Item>
							<NavDropdown.Item as={NextLink} href="/categories/entertainment">
								Entertainment
							</NavDropdown.Item>
							<NavDropdown.Item as={NextLink} href="/categories/general">
								General
							</NavDropdown.Item>
							<NavDropdown.Item as={NextLink} href="/categories/health">
								Health
							</NavDropdown.Item>
							<NavDropdown.Item as={NextLink} href="/categories/science">
								Science
							</NavDropdown.Item>
							<NavDropdown.Item as={NextLink} href="/categories/sports">
								Sports
							</NavDropdown.Item>
							<NavDropdown.Item as={NextLink} href="/categories/technology">
								Technology
							</NavDropdown.Item>
						</NavDropdown>
					</Nav>
					<Nav className="ml-auto">
						<a href="/auth.html" target="_blank" rel="noopener noreferrer">
							<Button variant="outline-light" className="mr-2">
								Sign In
							</Button>
						</a>
						<a href="/auth.html" target="_blank" rel="noopener noreferrer">
							<Button variant="outline-success">Login</Button>
						</a>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavBar;
