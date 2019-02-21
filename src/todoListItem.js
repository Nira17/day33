import React from "react";

export default class TodoListItem extends React.Component {
    clickHandler = () => {
        this.props.handlerFunction(+this._reactInternalFiber.key)
    }

    render() {
        return (
            <li>
                <input type="checkbox" onClick={this.clickHandler}></input> <span>{this.props.text}</span>
            </li>
        )
    }
}