import { Injectable, NotFoundException } from '@nestjs/common';
import { IDemand } from 'modules/database/interfaces/demand';
import { Demand } from 'modules/database/models/demand';

import { DemandRepository } from '../repositories/demand';

@Injectable()
export class DemandService {
  constructor(private demandRepository: DemandRepository) {}

  public async save(model: IDemand): Promise<Demand> {
    if (model.id) return this.update(model);
    return this.create(model);
  }

  public async remove(demandId: number): Promise<void> {
    const demand = await this.demandRepository.findById(demandId);

    if (!demand) {
      throw new NotFoundException('not-found');
    }

    return this.demandRepository.remove(demandId);
  }

  private async create(model: IDemand): Promise<Demand> {
    const demand = await this.demandRepository.insert(model);

    return demand;
  }

  private async update(model: IDemand): Promise<Demand> {
    const demand = await this.demandRepository.findById(model.id);

    if (!demand) throw new NotFoundException('not-found');

    return this.demandRepository.update({ ...demand, ...model });
  }
}
