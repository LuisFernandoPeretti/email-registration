const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");


//middleware
app.use(cors());
app.use(express.json());

//routes



//create a register

app.post("/registers", async (req, res) => {
    try {
        const { email } = req.body;
        const { name } = req.body;
        const { surname } = req.body;
        const { cpf } = req.body;
        const { birth_date } = req.body;

        const newRegister = await pool.query(
            "INSERT INTO register ( email, name, surname, cpf, birth_date ) VALUES ($1, $2, $3, $4, $5) RETURNING *",
            [email, name, surname, cpf, birth_date]
        );

        res.json(newRegister.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
})

//get all register

app.get("/registers", async (req, res) => {
    try {
        const allRegisters = await pool.query("SELECT * FROM register")
        res.json(allRegisters.rows);
    } catch (err) {
        console.log(err.message);
    }
})

//get a register

app.get("/registers/:email", async (req, res) => {
    try {
        const { email } = req.params;
        //console.log(email);
        const register = await pool.query("SELECT * FROM register WHERE email = $1", [email]);

        res.json(register.rows);
    } catch (err) {
        console.error(err.message);
    }
})

//update a register

app.put("/registers/:email", async (req, res) => {
    try {
        const { email } = req.params;
        const { name } = req.body;
        const { surname } = req.body;
        const { cpf } = req.body;
        const { birth_date } = req.body;

        //console.log(email);
        //console.log(name);
        const updateRegister = await pool.query("UPDATE register SET name = $1, surname = $2, cpf = $3, birth_date = $4 WHERE email = $5", [name, surname, cpf, birth_date, email]);

        res.json("updated!");
    } catch (err) {
        console.error(err.message);
    }
})

//delete a register

app.delete("/registers/:email", async (req, res) => {
    try {
        const { email } = req.params;
        
        const deleteRegister = await pool.query("DELETE FROM register WHERE email = $1", [email]);

        res.json("deleted!");
    } catch (err) {
        console.error(err.message);
    }
})

app.listen(5000, () => {
    console.log("Server has startes on port 5000");
});