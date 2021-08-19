import React from 'react';
import Header from './Header';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { ac } from '../../redux/reducers/auth';

class HeaderContainer extends React.Component {
    componentDidMount = () => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, { withCredentials: true })
            .then(response => {
                if (response.data.resultCode === 0) {
                    this.props.setUserAuth(response.data.data);
                    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${response.data.data.id}`)
                    .then(response => {
                        this.props.setUserData(response.data)
                    })
                }
            })
    }
    // componentDidUpdate=()=>{console.log(this.props)}
    render = () => <Header{...this.props.headerData} />
}

const mapState = (state) => ({
    headerData: {
        loginedUser: state.auth.loginedUser,
        isAuth: state.auth.isAuth,
    }
})

export default connect(mapState, ac)(HeaderContainer)