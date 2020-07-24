import {Request,Response } from 'express';



class IndexController {
    public index (req: Request,res: Response){
    res.json ({text:'hola otra vez'});
    }

}

export const indexController = new IndexController();