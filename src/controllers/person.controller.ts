import { Request, Response } from "express"; 
import { getPersonDB } from "../repositorys/person.repository";
import { randomNumber } from "../services/randomNumber";
import httpStatus from "http-status";

export async function getPerson(req:Request, res:Response){
    try{
        const person = await getPersonDB();
        const tamanho:number = person.rowCount;
        const pessoa = randomNumber(tamanho);
        res.status(httpStatus.OK).send(person.rows[pessoa]);
    } catch (err){
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message);
    };
};