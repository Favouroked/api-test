//company ID: 484929849
//customer ID: 573839293
const axios = require('axios');

async function fetchWallet(id) {
    const url = "https://api.okra.ng/v2/mock-api/fetch-wallet";
    const data = { id };
    const response = await axios({
       method: 'post',
       url, data
    });
    return response.data.data.wallet;
}

async function payCustomer(company, user, amount) {
    const url = "https://api.okra.ng/v2/mock-api/pay";
    const data = { 'from_id': company, 'to_id': user, amount };
    return axios({
        method: 'post',
        url, data
    });
}

async function refundCustomer(company, user, amount) {
    let walletBefore = await fetchWallet(user);
    console.log(`Wallet before refund: ${JSON.stringify(walletBefore)}`);
    await payCustomer(company, user, amount);
    let walletAfter = await fetchWallet(user);
    console.log(`Wallet after refund: ${JSON.stringify(walletAfter)}`);
}

refundCustomer('484929849', '573839293', 2003.0);
