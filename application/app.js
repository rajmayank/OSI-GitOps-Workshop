const express = require('express');
const app = express();

// Port for Express app
const PORT = process.env.PORT || 3000;

// Get the background color
const bgColor = process.env.BG_COLOR || 'cornflowerblue';

// Get the application version
const appVersion = process.env.APP_VERSION || '0.0.1';

// The template
const htmlTemplate = `
<!DOCTYPE html>
<html>
<head>
  <title>GitOps Workshop Demo</title>
</head>
<body style="background-color: ${bgColor}; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; margin: 0;">
  <div style="font-family: 'Sans Serif'; font-size: 76px; color: white; font-weight: 700">The OSI Conference</div>
  <div style="font-family: 'Sans Serif'; font-size: 56px; color: white;">Application #${appVersion}</div>
</body>
</html>
`;

// The home route
app.get('/', (req, res) => {
  res.send(htmlTemplate);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

