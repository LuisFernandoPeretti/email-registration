import React, { Fragment, useState } from "react";

const InputRegister = () => {

    const [email, setEmail] = useState("e-mail");

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const body = { email };
            const response = await fetch("http://localhost:5000/registers", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            console.log(response);
        } catch (err) {
            console.error(err.message);
        }
    }

    return (
        <Fragment>
            <h1 className="text-center mt-5">Lista de Cadastros</h1>
            <form className="d-flex mt-5" onSubmit={onSubmitForm}>
                <input
                    type="text"
                    className="form-control"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                >
                </input>
                <button className="btn btn-success">Cadastrar</button>
            </form>
        </Fragment>
    )
}

export default InputRegister;