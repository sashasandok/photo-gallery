import axios from 'axios'

console.log(`Uploadcare.Simple public_key:${process.env.UPLOAD_SECRET_KEY}`);

const instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  headers:
    {
      'Content-Type': 'application/json',
      Accept: 'application/vnd.uploadcare-v0.5+json',
      Authorization: `Uploadcare.Simple public_key:${process.env.UPLOAD_SECRET_KEY}`,
    }
});

export default instance;