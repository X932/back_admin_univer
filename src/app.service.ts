import { ServisesNames } from '@configs/services';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {
  constructor(@Inject(ServisesNames.UNIVERSITY) private client: ClientProxy) {}

  getHello(): Observable<string> {
    return this.client.send<string, string>({ cmd: 'get_students' }, 'hello ');
  }
}
