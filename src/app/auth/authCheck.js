import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authenticated } from '../../store/users/actions';

export default function(ComposedClass, reload) {
  class AuthenticationCheck extends Component {
    state = {
      loading: true
    };

    componentDidMount = () => {
      this.props.dispatch(authenticated());
    };

    componentWillReceiveProps = nextProps => {
      //console.log(nextProps);
      this.setState({ loading: false });

      if (!nextProps.user.login.isAuth) {
        if (reload) {
          this.props.history.push('/login');
        }
      } else {
        if (reload === false) {
          this.props.history.push('/user');
        }
      }
    };
    render() {
      if (this.state.loading) {
        return <div className="spinner">Loading...</div>;
      }
      return <ComposedClass {...this.props} user={this.props.user} />;
    }
  }

  const mapStateToProps = state => ({
    user: state.user
  });

  return connect(mapStateToProps)(AuthenticationCheck);
}