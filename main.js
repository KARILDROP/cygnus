const axios = require('axios');

const url = 'https://i.cygnus.finance/api/user';

const headers = {
    'accept': '*/*',
    'accept-encoding': 'gzip, deflate, br, zstd',
    'accept-language': 'en-US,en;q=0.8',
    'content-type': 'application/json',
    'cookie': [
    {
        "domain": "i.cygnus.finance",
        "expirationDate": 1744043995,
        "hostOnly": true,
        "httpOnly": false,
        "name": "privy-session",
        "path": "/",
        "sameSite": "strict",
        "secure": true,
        "session": false,
        "storeId": null,
        "value": "t"
    },
    {
        "domain": "i.cygnus.finance",
        "expirationDate": 1741455547.795792,
        "hostOnly": true,
        "httpOnly": true,
        "name": "_vcrcs",
        "path": "/",
        "sameSite": "no_restriction",
        "secure": true,
        "session": false,
        "storeId": null,
        "value": "1.1741451950.3600.ZWNkYmM3YmQ4ODQ5ZTRkM2Y2ZTVlNTg1NTM5ODk0ZmI=.7738e4c086147067e6b72013c1e4299a"
    },
    {
        "domain": "i.cygnus.finance",
        "expirationDate": 1741455597,
        "hostOnly": true,
        "httpOnly": false,
        "name": "privy-token",
        "path": "/",
        "sameSite": "strict",
        "secure": true,
        "session": false,
        "storeId": null,
        "value": "eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1HT1FOYWNITnJBZ2RSdVVUOVl2NTNtU0k3Y0gxVHVBOXJ0dERZbmlkS1EifQ.eyJzaWQiOiJjbTgwZmsxNGUwMDBmZmhnNDQ1emdicmdrIiwiaXNzIjoicHJpdnkuaW8iLCJpYXQiOjE3NDE0NTE5OTcsImF1ZCI6ImNtN2Y3Y2E4bTAwM3cxMXZmdDE1Mnd6N2YiLCJzdWIiOiJkaWQ6cHJpdnk6Y204MGZrMTVuMDAwaGZoZzQ4OThxMTh1aiIsImV4cCI6MTc0MTQ1NTU5N30.zEcHm5PynP7LMU66oC-FaqIuJkhICAQacuVO86s46c0i_NXA1w3Yr_0mL11rYuT2dhaUsNXkybT03SHXooH7oA"
    }
], //GANTI INI
    'origin': 'https://i.cygnus.finance',
    'referer': 'https://i.cygnus.finance/',
    'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Brave";v="134"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'sec-gpc': '1',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36'
};

const data = {
    id: "khairulrizal6641", //GANTI INI
    power: 5 , //GANTI INI
    energy: 10,
    lastPlayAt: "2025-03-08T09:51:57.566Z"
};

axios.post(url, data, { headers })
    .then(response => {
        console.log('Response:', response.data);
    })
    .catch(error => {
        console.error('Error:', error.response ? error.response.data : error.message);
    });
