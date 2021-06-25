import { v4 as uuid } from 'uuid';

export class Specification {
  id?: string;
  name: string;
  description: string;
  status: boolean;
  created_at: Date;
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
