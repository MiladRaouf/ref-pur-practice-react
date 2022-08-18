import React, { useEffect, useRef } from "react";
import Form from "./Form";

const ParentComponent = () => {
    const inputType = useRef();

    useEffect(() => {
        inputType.current.focus();
    });

    return (
        <section className="main">
            <Form ref={inputType} />
        </section>
    );
};

export default ParentComponent;