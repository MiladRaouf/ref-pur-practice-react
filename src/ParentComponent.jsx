import React, { createRef, PureComponent } from "react";
import Form from "./Form";

class ParentComponent extends PureComponent {
    constructor() {
        super();

        this.FormRefrence = createRef();
    }

    handleDeleteTextFromForm = () => {
        this.FormRefrence.current.handleDeleteText();
    }

    render() {
        return (
            <section className="main">
                <Form ref={this.FormRefrence} />
                <button onClick={this.handleDeleteTextFromForm}>delete from ParentComponent</button>
            </section>
        )
    }
}

export default ParentComponent;