import React from "react";

export const CreateForm = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            return <Component {...this.props} />
        }


    }
    return RedirectComponent;

}
