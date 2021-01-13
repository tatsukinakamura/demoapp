// const stripeAPI = require('stripe')(process.env.SECRET_KEY);
const stripeAPI = require('stripe')('sk_test_51GwdX6CT0XtjFEwPswYMJJCArGaXIeFNrlbzBN1ojuiFXYmqX9Bneygiq8rwj8JT29afm4cmA2cz75c55Z2quzS300izryToSd')

module.exports = stripeAPI;