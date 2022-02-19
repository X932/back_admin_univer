import { Controller } from '@nestjs/common';
import { AuthRoutes } from './auth.routes';

@Controller(AuthRoutes.Main)
export class AuthController {}
