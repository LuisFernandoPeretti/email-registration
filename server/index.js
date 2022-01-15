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

        res.json(newRegister.row[0]);
    } catch (err) {
        console.error(err.message);
    }
})

//get all register

//get a register

//delete a register

app.listen(5000, () => {
    console.log("Server has startes on port 5000");
});