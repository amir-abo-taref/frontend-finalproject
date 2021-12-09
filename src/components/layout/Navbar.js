import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
	const authLinks = (
		<ul className="nav-links">
			<li>
			<Link to="/MemoryGame">
					<i className="fas fa-gamepad"></i>{" "}
					<span className="hide-sm">Memory-Game</span>
				</Link>
			<Link to="/recipe">
					<i className="fas fa-archive"></i>{" "}
					<span className="hide-sm">recipe</span>
				</Link>
			<Link to="/Diet">
					<i className="fas fa-apple-alt"></i>{" "}
					<span className="hide-sm">Diet</span>
				</Link>
				<Link to="/Meal">
					<i className="fas fa-hamburger"></i>{" "}
					<span className="hide-sm">Meal</span>
				</Link>
				<Link to="/dashboard">
					<i className="fas fa-grin-alt"></i>{" "}
					<span className="hide-sm">Dashboard</span>
				</Link>
			</li>
			<li>
				<Link onClick={logout} to="/" replace>
					<i className="fas fa-sign-out-alt"></i>{" "}
					<span className="hide-sm"> &nbsp;Logout</span>
				</Link>
			</li>
		</ul>
	);
	const guestLinks = (
		<ul className="nav-links">
			<li>
				<Link to="/register">
				<i className="fas fa-registered"></i>{" "}
					<span className="hide-sm"> &nbsp;Register</span>
				</Link>
			</li>
			<li>
				<Link to="/login">
				<i className="fas fa-sign-in-alt"></i>{" "}
					<span className="hide-sm"> &nbsp;Login</span>
				</Link>
			</li>
		</ul>
	);

	return (
		<nav className="navbar bg-dark">
			<h1>
				<Link to="/">HOME</Link>
			</h1>
			{!loading && (
				<Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
			)}
		</nav>
	);
};

Navbar.propTypes = {
	logout: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
