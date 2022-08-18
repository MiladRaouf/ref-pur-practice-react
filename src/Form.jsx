import React, { Component, createRef, Fragment, PureComponent } from "react";
import ReactDOM from 'react-dom/client';


class Form extends PureComponent {
    constructor() {
        super();

        this.state = { text: '' };
        this.inputType = createRef();
        this.counter = 0;
    }

    handleChangeText = () => {
        this.setState({
            text: this.inputType.current.value
        });
    };

    handleDeleteText = () => {
        this.inputType.current.value = '';
    };

    render() {
        return (
            <Fragment>
                <form onClick={e => e.preventDefault()}>
                    <input ref={this.inputType} type="text" placeholder="فعالیت مورد نظر خود را وارد کنید"></input>
                    <div className="button-box">
                        <button onClick={this.handleChangeText}>ثبت</button>
                        <button onClick={this.handleDeleteText}>حذف متن</button>
                    </div>
                </form>

                <h6 className="counter">{this.counter++}</h6>
            </Fragment>
        );
    }
}


export default Form;