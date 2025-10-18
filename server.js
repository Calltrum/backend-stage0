const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express()

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
    next();
});


app.get("/me", async (req, res) => {
    try {
        console.log("Fetching a cat fact...");
        const catFactResponse = await axios.get("https://catfact.ninja/fact", {
            timeout: 5000
        });
        console.log("Cat fact received!");

        const timestamp = new Date().toISOString();

        const response = {
            status: "success",
            user: {
                email: "bbabyboy115@gmail.com",
                name: "Callum Trace",
                stack: "Node,js/Express"
            },
            timestamp: timestamp,
            fact: catFactResponse.data.fact
        };

        res.setHeader("Content-Type", "application/json");
        res.status(200).json(response);

    } catch (error) {
        console.error("Error:", error.message);

        const timestamp = new Date().toISOString();

        res.setHeader("Content-Type", "application/json");
        res.status(200).json({
            status: "success",
            user: {
                email: "bbabyboy115@gmail.com",
                name: "Callum Trace",
                stack: "Node.js/Express"
            },
            timestamp: timestamp,
            fact: "Cat fact unavailable right now"
        });
    }

});

app.get("/", (req, res) => {
    res.json({
        message: "API is working! Try visiting /me",
        endpoints: {
            profile: "/me"
        }
    });
});

app.listen(PORT, () => {
    console.log("========================================");
    console.log(`✅Server is running`);
    console.log(`📍Local: http://localhost:${PORT}`)
    console.log(`🧪Test: http://localhost:${PORT}/me`)
    console.log("========================================")
});