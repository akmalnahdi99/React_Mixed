const prod = {
  apiUrl: "https://api.tartil.online/api",
  paymentUrl: "https://www.billplz-sandbox.com",
};

const dev = {
  apiUrl: "http://localhost:5000/api",
  paymentUrl: "https://www.billplz-sandbox.com",
};

export const config = process.env.NODE_ENV === "development" ? prod : prod;
