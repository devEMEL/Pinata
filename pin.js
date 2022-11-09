
const pinataSDK = require('@pinata/sdk');
const path = require('path');
const fs = require('fs');

const imgPath = path.join(__dirname, '/CV.png');
const readableStreamForFile = fs.createReadStream(imgPath);
const options = {pinataMetadata: {name: 'CV_IMAGE'}};

const PINATA_API_KEY = '20920e24c80b3b3414da';
const PINATA_SECRET_API_KEY = 'ad6b41fb004778a2861aa3a5938bed441e22b7f9c878ffc193e5c118c4340356';
const pinata = new pinataSDK(PINATA_API_KEY, PINATA_SECRET_API_KEY);
// console.log(pinata);
pinata.pinFileToIPFS(readableStreamForFile, options).then((result) => {
    console.log(result['IpfsHash'])
    console.log('success');
}).catch(err => {
    console.log(err);
})
