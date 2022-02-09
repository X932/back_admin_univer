import { ClientProviderOptions, Transport } from '@nestjs/microservices';

export enum ServisesNames {
  UNIVERSITY = 'UNIVERSITY_SERVICE',
}

export const universityServiceConfig: ClientProviderOptions = {
  name: ServisesNames.UNIVERSITY,
  transport: Transport.RMQ,
  options: {
    urls: ['amqp://127.0.0.1:5672'],
    queue: 'university_queue',
    queueOptions: {
      durable: false,
    },
  },
};
