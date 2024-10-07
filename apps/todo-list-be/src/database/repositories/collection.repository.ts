import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Collection } from '../entities/collection.entity';

export const collectionRepositoryToken = 'COLLECTION_REPOSITORY';

@Injectable()
export class CollectionRepository extends Repository<Collection> {
  findById(id: number) {
    return this.findOne({ where: { id } });
  }

  findByLabel(label: string) {
    return this.find({ where: { label } });
  }

  createCollection(collection: Collection) {
    return this.save({ ...collection, user_id: collection });
  }

  updateCollection(collection: Collection) {
    // return this.update()
  }
}
