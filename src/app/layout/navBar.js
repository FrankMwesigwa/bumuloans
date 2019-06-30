/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { logoutUser } from '../../store/auth/actions';

class NavBar extends Component {
    
    onLogoutClick = e => {
      e.preventDefault();
      //this.props.clearCurrentProfile();
      this.props.logoutUser();
    }
  
    render() {
        const { isAuthenticated } = this.props.auth;
        const authLinks = (
<div>
                     <Link to='/'>Books List</Link>
                <Link to='/books/add'>Add Book</Link>
                <a
                href=""
                onClick={this.onLogoutClick}
                className="nav-link"
              >LogOut</a>

                </div>
        )
    return (
        <div>
            {isAuthenticated ? authLinks : null}
            
        </div>
    )
    }
}

NavBar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth
  });
  
  export default connect(mapStateToProps, { logoutUser })(NavBar);
