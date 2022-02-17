import { ServicesConfigs } from 'types-univer';
import { ClientProviderOptions, Transport } from '@nestjs/microservices';

export enum ServisesNames {
  UNIVERSITY = 'UNIVERSITY_SERVICE',
  DOCUMENTS = 'DOCUMENTS_SERVICE',
}

export const universityServiceConfig: ClientProviderOptions = {
  name: ServisesNames.UNIVERSITY,
  transport: Transport.RMQ,
  options: {
    urls: [ServicesConfigs.UniverOptions.url],
    queue: ServicesConfigs.UniverOptions.queue,
    queueOptions: {
      durable: false,
    },
  },
};

export const documentsServiceConfig: ClientProviderOptions = {
  name: ServisesNames.DOCUMENTS,
  transport: Transport.RMQ,
  options: {
    urls: [ServicesConfigs.DocumentOptions.url],
    queue: ServicesConfigs.DocumentOptions.queue,
    queueOptions: {
      durable: false,
    },
  },
};
