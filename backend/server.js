const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors()); // Allow frontend to access backend

// Route to send symptoms to the AI model
app.post('/analyze-symptoms', async (req, res) => {
    try {
        const response = await axios.post('http://127.0.0.1:4000/predict', { //http://localhost:4000/predict 
            symptoms: req.body.symptoms
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Failed to connect to AI model" });
    }
});

//http://localhost:4000/predict 
const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Backend running on http://localhost:${PORT}`);
});