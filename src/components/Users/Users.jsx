import React from "react";
import classes from './Users.module.css';
import axios from "axios";
import avatar from '../../img/ava.png'

class Users extends React.Component {
componentDidMount() {
    axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
        this.props.setUsers(response.data.items)
    })
}

    render() {
    return <div className={classes.usersWrapper}>
        {this.props.users.map(user => <div className={classes.user} key={user.id}>
            <div className={classes.follow}>
                <img src={user.photos.small != null ? user.photos.small : avatar } alt=""/>
                {user.followed
                    ? <button onClick={() => {
                        this.props.unfollow(user.id)
                    }}>Unfollow</button>
                    : <button onClick={() => {
                        this.props.follow(user.id)
                    }}>Follow</button>}
            </div>
            <div className={classes.description}>
                <div className={classes.info}>
                    <h2>{user.name}</h2>
                    <h3>{user.status}</h3>
                </div>
                <div className={classes.location}>
                    <div>'user.location.country'</div>
                    <div>'user.location.city'</div>
                </div>
            </div>
        </div>)}
    </div>
    }
}

export default Users;