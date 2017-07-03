import { UUID } from './uuid';

import { Injectable } from '@angular/core';

@Injectable()
export class UuidService {
  constructor() { }
  public generate(): string {
    return UUID.UUID();
  }
}
