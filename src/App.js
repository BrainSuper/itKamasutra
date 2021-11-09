import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import {Route, BrowserRouter} from "react-router-dom";


const App = (props) => {

    return (
        <BrowserRouter>
            <div className='wrapper'>
                <Header/>
                <Navbar friends={props.state.friends}/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={() => <Dialogs
                               dispatch={props.dispatch}
                               profilePage={props.state.profilePage}
                               state={props.state.dialogsPage}
                               />}/>
                    <Route path='/profile' render={() => <Profile
                        dispatch={props.dispatch}  profilePage={props.state.profilePage}/>}/>
                    <Route path='/news' component={News}/>
                </div>

            </div>
        </BrowserRouter>
    );
}


export default App;
