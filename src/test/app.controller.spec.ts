import { Test, TestingModule } from '@nestjs/testing';
import { HttpStatus, INestApplication } from '@nestjs/common';
import { AppModule } from 'app.module';
import * as request from 'supertest';
import { ClientsModule } from '@nestjs/microservices';
import {
  documentsServiceConfig,
  universityServiceConfig,
} from '@configs/services';
import { AppController } from '../app.controller';

describe('AppController', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        AppModule,
        ClientsModule.register([
          universityServiceConfig,
          documentsServiceConfig,
        ]),
      ],
      controllers: [AppController],
    }).compile();

    app = module.createNestApplication();
    await app.init();
  });

  describe('test route', () => {
    test('test getTest handler', () => {
      return request(app.getHttpServer())
        .get('/t')
        .expect(HttpStatus.OK)
        .expect('works');
    });
  });
});
