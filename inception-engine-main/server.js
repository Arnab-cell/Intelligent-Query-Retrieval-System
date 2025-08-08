const express = require('express');
const app = express();
app.use(express.json());

app.post('/api/v1/hackrx/run', (req, res) => {
    // Simulate processing input data
    const input = req.body;
    console.log('Received:', input);
    res.status(200).json({ message: 'Webhook executed!', received: input });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));