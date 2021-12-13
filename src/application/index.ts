console.log("index.ts");

import interWeekBank from "./repositories/interWeekBank.orm"
interWeekBank.connect();

import webApi  from "../webApi/api";
webApi.create();


