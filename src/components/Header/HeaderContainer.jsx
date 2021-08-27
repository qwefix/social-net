import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { thunks } from '../../redux/reducers/auth';

class HeaderContainer extends React.Component {
    componentDidMount = () => {
        console.log(this.props)
        this.props.autorise()
    }
    render = () => <Header {...this.props.headerData} />
}

const mapState = (state) => ({
    headerData: {
        loginedUser: state.auth.loginedUser,
        isAuth: state.auth.isAuth,
    }
})

export default connect(mapState, thunks)(HeaderContainer)