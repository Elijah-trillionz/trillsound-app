const express = require('express');
const cors = require('cors');

const app = express();

// body parser
app.use(express.json());

// cors policy
app.use(cors());

// routes
app.use('/api/', require('./routes/client'));
app.use('/api/admin', require('./routes/admin'));

// port - listener
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
