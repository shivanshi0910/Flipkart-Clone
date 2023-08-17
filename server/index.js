import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import { v4 as uuid} from 'uuid';

import Connection from './database/db.js';
import DefaultData from './default.js';
import Router from './routes/route.js';
//initialise express
const app = express();

//initialise dotenv(it will be used for password security)
dotenv.config();
app.use(cors());
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use('/',Router);
//this listen takes 2 parameters :
// 1.) port no.
// 2.) callback function


const PORT = 8000;
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
Connection(USERNAME , PASSWORD);

//the env file will never be passed when pushing our project to github


//it is responsible for making connection with database

app.listen(PORT , () => console.log(`Server is running successfully on port ${PORT} `));
DefaultData();

export let paytmMerchantKey = process.env.PAYTM_MERCHANT_KEY;
export let paytmParams = {};
paytmParams['MID'] = process.env.PAYTM_MID;
paytmParams['WEBSITE'] = process.env.PAYTM_WEBSITE;
paytmParams['CHANNEL_ID'] = process.env.PAYTM_CHANNEL_ID;
paytmParams['INDUSTRY_TYPE_ID'] = process.env.PAYTM_INDUSTRY_TYPE_ID;
paytmParams['ORDER_ID'] = uuid();
paytmParams['CUST_ID'] = process.env.PAYTM_CUST_ID;
paytmParams['TXN_AMOUNT'] = '100';
paytmParams['CALLBACK_URL'] = 'http://localhost:8000/callback';
paytmParams['EMAIL'] = 'codeforinterview@gmail.com';
paytmParams['MOBILE_NO'] = '1234567890';