const axios = require('axios');

const url = 'https://i.cygnus.finance/api/user';

const headers = {
    'accept': '*/*',
    'accept-encoding': 'gzip, deflate, br, zstd',
    'accept-language': 'en-US,en;q=0.8',
    'content-type': 'application/json',
    'cookie': 'privy-session=t; privy-token=eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1HT1FOYWNITnJBZ2RSdVVUOVl2NTNtU0k3Y0gxVHVBOXJ0dERZbmlkS1EifQ.eyJzaWQiOiJjbTgwZmsxNGUwMDBmZmhnNDQ1emdicmdrIiwiaXNzIjoicHJpdnkuaW8iLCJpYXQiOjE3NDE0NTE5OTcsImF1ZCI6ImNtN2Y3Y2E4bTAwM3cxMXZmdDE1Mnd6N2YiLCJzdWIiOiJkaWQ6cHJpdnk6Y204MGZrMTVuMDAwaGZoZzQ4OThxMTh1aiIsImV4cCI6MTc0MTQ1NTU5N30.zEcHm5PynP7LMU66oC-FaqIuJkhICAQacuVO86s46c0i_NXA1w3Yr_0mL11rYuT2dhaUsNXkybT03SHXooH7oA; privy-id-token=eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1HT1FOYWNITnJBZ2RSdVVUOVl2NTNtU0k3Y0gxVHVBOXJ0dERZbmlkS1EifQ.eyJjciI6IjE3NDE0NTE5OTciLCJsaW5rZWRfYWNjb3VudHMiOiJbe1widHlwZVwiOlwiaW5zdGFncmFtX29hdXRoXCIsXCJzdWJqZWN0XCI6XCI5Nzg5NDA3MDc0NDA1NDUxXCIsXCJ1c2VybmFtZVwiOlwia2hhaXJ1bHJpemFsNjY0MVwiLFwibHZcIjoxNzQxNDUxOTk3fSx7XCJ0eXBlXCI6XCJ3YWxsZXRcIixcImFkZHJlc3NcIjpcIjB4MGE2RWJmMzcyYkQ4NzkwZjA3NDFBQTcxRDdERTdCRTIzNTM3MzUxQlwiLFwiY2hhaW5fdHlwZVwiOlwiZXRoZXJldW1cIixcIndhbGxldF9jbGllbnRfdHlwZVwiOlwicHJpdnlcIixcImx2XCI6MTc0MTQ1MjAwMH1dIiwiaXNzIjoicHJpdnkuaW8iLCJpYXQiOjE3NDE0NTI2NjcsImF1ZCI6ImNtN2Y3Y2E4bTAwM3cxMXZmdDE1Mnd6N2YiLCJzdWIiOiJkaWQ6cHJpdnk6Y204MGZrMTVuMDAwaGZoZzQ4OThxMTh1aiIsImV4cCI6MTc0MTQ1NjI2N30.LSvjtZpTbTFdZ8U2iBYil6ZT7frVCxA--cyN3fBJgj8EyqVq8v91PgMbgPG_O6dixQGlbSc9oNse5OLrUkmdkA', //GANTI INI
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
    id: "ab0399a9-b734-48a4-ae01-0e5d08e76f9e", //GANTI INI
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
