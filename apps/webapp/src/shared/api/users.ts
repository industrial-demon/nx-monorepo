
import {
     UsersApi,
   } from "./generated/users";
const dashboardPath = `http://localhost:4002`;

export const users = new UsersApi(undefined, dashboardPath)
 
