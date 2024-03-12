import { configureStore } from "@reduxjs/toolkit";

import userslice from "./userslice";
import movieslice from "./movieslice";
import gptslice from "./gptslice";
const appstore=configureStore(
    {
        reducer:{
            user:userslice,
            movie:movieslice,
            gpt:gptslice,
        }
    }
)


export default appstore;



