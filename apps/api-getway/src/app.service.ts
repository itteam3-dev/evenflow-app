import { SERVICES_PORTS } from '@app/common';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `API getway os running on ${SERVICES_PORTS.API_GETWAY}`;
  }
}
