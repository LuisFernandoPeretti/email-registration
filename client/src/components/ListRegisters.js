import React, { Fragment, useEffect, useState } from "react";

import EditRegister from "./EditRegister";

const ListRegisters = () => {

    const [registers, setRegisters] = useState([]);

    //delete register function
    const deleteRegister = async (id) => {
        try {
            const deleteRegister = await fetch(`http://localhost:5000/registers/${id}`, {
                method: "DELETE"
            });
            
            //console.log(deleteRegister);
            setRegisters(registers.filter(register => register.email !== id));
        } catch (err) {
            console.error(err.message);
        }
    }

    const getRegisters = async () => {
        try {

            const response = await fetch("http://localhost:5000/registers");
            const jsonData = await response.json();

            //console.log(jsonData);
            setRegisters(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        getRegisters();
    }, []);

    console.log(registers);

    return (
        <Fragment>
            <table class="table mt-5 text-center">
            <thead>
                <tr>
                <th scope="col">Email</th>
                <th scope="col">Editar</th>
                <th scope="col">Deletar</th>
                </tr>
            </thead>
            <tbody>
                {/*                 <tr>
                <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr> */}
                {registers.map(register => (
                    <tr key={register.email}>
                        <td>{register.email}</td>
                        <td>
                            <EditRegister register={register}/>
                        </td>
                        <td>
                            <button className="btn btn-danger" onClick={() => deleteRegister(register.email)}>Deletar</button>
                        </td>
                    </tr>
                ))}
            </tbody>
            </table>
        </Fragment>
    )
}

export default ListRegisters;