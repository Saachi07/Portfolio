module.exports = (req, res) => {
  const allowedOrigins = [
    'https://Saachi07.github.io/Portfolio/', // your GitHub Pages URL
  ];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'POST') {
    // You can process the form data here if needed
    return res.status(200).json({ success: true, message: 'Form received!' });
  }

  res.setHeader('Allow', ['POST', 'OPTIONS']);
  return res.status(405).end('Method Not Allowed');
};