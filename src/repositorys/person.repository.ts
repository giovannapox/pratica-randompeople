import { db } from "../database/databaseConnection";

export async function getPersonDB(){
    return db.query(`SELECT * FROM people;`);
};