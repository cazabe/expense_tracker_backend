import { Injectable, NestMiddleware, HttpException, HttpStatus } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoginMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    try {
    console.log('Request...');
    //TODO Add just any middleware validation, no JWT
    if (!req.body) {
        throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
    next();
    } catch (error) {
        throw new HttpException('Forbidden', HttpStatus.BAD_REQUEST,{cause:error});
    }
  }
}
