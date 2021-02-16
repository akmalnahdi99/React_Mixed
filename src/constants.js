const prod = {
  apiUrl: "https://api.tartil.online/api",
  paymentUrl: "https://www.billplz-sandbox.com",
};

const dev = {
  apiUrl: "http://localhost:5000/api",
  paymentUrl: "https://www.billplz-sandbox.com",
};


//Devs should add this file to .gitIgnore and modify it as they wish
//Devs do not commit this file if you change it
//TASK-TO-WAN Please revert this line and commit it, 
export const config = process.env.NODE_ENV === "development" ? prod : prod;
