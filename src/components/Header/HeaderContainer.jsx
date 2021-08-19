import React from 'react';
import Header from './Header';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { ac } from '../../redux/reducers/auth';
import authAPI from '../../api/auth';


class HeaderContainer extends React.Component {
    componentDidMount = () => {
        authAPI.autorise()
            .then(data => {
                if (data.resultCode === 0) {
                    this.props.setUserAuth(data.data);
                    authAPI.getUserInfo(data)
                    .then(data => {
                        console.log(data)
                        this.props.setUserData(data)
                    })
                }
            })
    }
    render = () => <Header{...this.props.headerData} />
}

const mapState = (state) => ({
    headerData: {
        loginedUser: state.auth.loginedUser,
        isAuth: state.auth.isAuth,
    }
})

export default connect(mapState, ac)(HeaderContainer)