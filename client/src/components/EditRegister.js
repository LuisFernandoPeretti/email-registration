import React, { Fragment, useState } from "react";

const EditRegister = ({ register }) => {
    const [name, setName] = useState(register.name);

    //edit name function

    const updateName = async e => {
        e.preventDefault();
        try {
            const body = { name }
            const response = await fetch(`http://localhost:5000/registers/${register.email}`, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });

            //console.log(response);
            window.location = "/";
        } catch (err) {
            console.error(err.message);
        }
    }

    //console.log(register);
    return (
        <Fragment>
            <button type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target={`#id${register.name}`}
            >
                Editar
            </button>

            <div class="modal fade"
                id={`id${register.name}`}
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
                onClick={() => setName(register.name)}
            >
            
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Cadastro</h5>
                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                        onClick={() => setName(register.name)}
                    >
                        
                    </button>
                </div>

                <div class="modal-body">
                    <input type='text' className="form-control" value={name} onChange={e => setName(e.target.value)}></input>
                </div>
                <div class="modal-footer">
                    <button
                        type="button"
                        class="btn btn-primary"
                        data-bs-dismiss="modal"
                        onClick={e => updateName(e)}
                    >
                    Editar
                    </button>
                        <button type="button"
                        class="btn btn-danger"
                        data-bs-dismiss="modal"
                        onClick={() => setName(register.name)}
                    >
                        Close
                    </button>
                </div>
                </div>
            </div>
            </div>
        </Fragment>
    )
}

export default EditRegister;