import React, { Fragment, useEffect, useState } from "react";

const ListRegisters = () => {

    const [registers, setRegisters] = useState([])

    const getRegisters = async () => {
        try {

            const response = await fetch("http://localhost:5000/registers");
            const jsonData = await response.json()

            setRegisters(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        getRegisters();
    }, [])

    console.log(registers)

    return (
    <Fragment>
        {" "}
        <table class="table mt-5 text-center">
        <thead>
            <tr>
            <th scope="col">Email</th>
            <th scope="col">Editar</th>
            <th scope="col">Excluir</th>
            </tr>
        </thead>
        <tbody>
            {/*<tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            </tr>*/}
            {registers.map(register => (
                <tr>
                    <td>{register.email}</td>
                    <td>Editar</td>
                    <td>Deletar</td>
                </tr>
            ))}
        </tbody>
        </table>
    </Fragment>
    )
};

export default ListRegisters;