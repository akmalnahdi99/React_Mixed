const prod = {
  apiUrl: "https://api.tartil.online/api",
};

const dev = {
  apiUrl: "http://localhost:5000/api",
};

export const config = process.env.NODE_ENV === "development" ? dev : prod;