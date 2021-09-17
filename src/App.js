import React from "react";
import "./App.sass";
import Navbar from "./components/Navbar/Navbar";
import {Route, withRouter} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./REDUX/appReduser";
import Preloader from "./components/common/Preloader/Preloader";
import {withSuspense} from "./components/hoc/withSuspense";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer')); // Ленивая загрузка
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer')); // Ленивая загрузка


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }
    render() {
        // debugger;
        if(!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>

                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={withSuspense(DialogsContainer)}/>
                    <Route path='/profile/:userId?'
                           render={withSuspense(ProfileContainer)}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                    <Route path='/users'
                           render={() => <UsersContainer/>}/>
                    <Route path='/login' component={LoginPage}/>

                </div>
            </div>
        )
    }
}

const mapStateToProps =(state) =>({
    initialized: state.app.initialized
})

export default  compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App)