import { ClientProviderOptions, Transport } from '@nestjs/microservices';

const AMQP_URL = 'amqp://127.0.0.1:5672';

export enum ServisesNames {
  UNIVERSITY = 'UNIVERSITY_SERVICE',
  DOCUMENTS = 'DOCUMENTS_SERVICE',
}

export const universityServiceConfig: ClientProviderOptions = {
  name: ServisesNames.UNIVERSITY,
  transport: Transport.RMQ,
  options: {
    urls: [AMQP_URL],
    queue: 'university_queue',
    queueOptions: {
      durable: false,
    },
  },
};

export const documentsServiceConfig: ClientProviderOptions = {
  name: ServisesNames.DOCUMENTS,
  transport: Transport.RMQ,
  options: {
    urls: [AMQP_URL],
    queue: 'documents_queue',
    queueOptions: {
      durable: false,
    },
  },
};
