import { Request, Response } from "express"; 
import { getPersonDB } from "../repositorys/person.repository";
import { randomNumber } from "../services/randomNumber";

export async function getPerson(req:Request, res:Response){
    try{
        const person = await getPersonDB();
        const tamanho:number = person.rowCount;
        const pessoa = randomNumber(tamanho);
        res.status(200).send(person.rows[pessoa]);
    } catch (err){
        return res.status(500).send(err.message);
    };
};