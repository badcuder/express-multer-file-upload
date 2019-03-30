import express from "express";
import cors from "cors";

const bodyParser = require('body-parser');
import {UploadService} from "./services";

const APP = express();
APP.use(cors());
APP.use([
    bodyParser.json(),
    bodyParser.urlencoded({
        extended: true,
    })
]);

APP.get('/', (req, res) => {
    console.log('REQUEST AT ROOT...');
    res.json({status: true});
});
APP.use("/api/upload", UploadService);

APP.listen(8082, () => {
    console.log('SERVER IS LISTENING AT PORT 8082');
});
