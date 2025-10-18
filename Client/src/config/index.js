const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://your-backend-vercel-url.vercel.app/api' // यह URL आपको backend deploy के बाद मिलेगा
  : 'http://localhost:5000/api';

export { API_BASE_URL };