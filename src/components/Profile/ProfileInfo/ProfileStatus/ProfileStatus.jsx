import React from 'react';

class ProfileStatus extends React.Component {
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    state = {
        isEdit: false,
        status: this.props.status
    }

    changeEdit = (toggle) => {
        this.setState({
            isEdit: toggle
        })
}

onChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
}
    render() {
        return <div>
            {this.state.isEdit &&
            <input onChange={this.onChange} autoFocus={true} onBlur={() => {
                this.props.updateStatus(this.state.status);
                this.changeEdit(false);
            }
            } value={this.state.status} type="text"/>
            }
            {
                !this.state.isEdit &&
                <span onDoubleClick={() => {
                    this.changeEdit(true)
                }}>{this.props.status}</span>
            }


        </div>
    }
}

export default ProfileStatus;