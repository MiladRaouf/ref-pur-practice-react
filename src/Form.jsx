import React, { forwardRef, Fragment, useRef, useState } from "react";
import ReactDOM from 'react-dom/client';


let counter = 0;

const Form = (prop, ref) => {
    const [text, setText] = useState('');

    const handleChangeText = () => {
        setText(ref.current.value);
    };

    const handleDeleteText = () => {
        ref.current.value = '';
    };

    return (
        <Fragment>
            <form onClick={e => e.preventDefault()}>
                <input ref={ref} type="text" placeholder="کلمه خود را وارد کنید"></input>
                <div className="button-box">
                    <button className="save" onClick={handleChangeText}>ثبت</button>
                    <button className="delete" onClick={handleDeleteText}>حذف متن</button>
                </div>
            </form>

            <h6 className="counter">{counter++}</h6>
        </Fragment>
    );
};


export default forwardRef(Form);