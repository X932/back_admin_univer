import { ServisesNames } from '@configs/services';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {
  constructor(
    @Inject(ServisesNames.UNIVERSITY) private clientUniversity: ClientProxy,
    @Inject(ServisesNames.DOCUMENTS) private clientDocuments: ClientProxy,
  ) {}

  public getHello(): Observable<string> {
    return this.clientUniversity.send<string, string>(
      { cmd: 'get_students' },
      'hello ',
    );
  }

  public getDocs(): Observable<string> {
    return this.clientDocuments.send<string, string>(
      { cmd: 'get_docs' },
      'dddoooooocccsss ',
    );
  }
}
