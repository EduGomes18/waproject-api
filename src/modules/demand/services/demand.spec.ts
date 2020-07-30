import { NotFoundException } from '@nestjs/common';
import { IDemand } from 'modules/database/interfaces/demand';

import { DemandRepository } from '../repositories/demand';
import { DemandService } from './demand';

/* eslint-disable max-len */
describe('DemandService', () => {
  let demandRepository: DemandRepository;
  let service: DemandService;

  const demand: IDemand = {
    name: 'Testing Demands',
    description: 'This is a demand description',
    quantity: 10,
    value: 5421
  };

  beforeEach(async () => {
    demandRepository = new DemandRepository();

    service = new DemandService(demandRepository);
  });

  it('should create a new demand', async () => {
    jest.spyOn(demandRepository, 'insert').mockImplementationOnce(demand => Promise.resolve({ ...demand } as any));

    const result = await service.save(demand);

    expect(result).not.toBeFalsy();
    expect(result).toEqual(demand);
  });

  it('should update a demand', async () => {
    jest.spyOn(demandRepository, 'findById').mockResolvedValueOnce({ id: 1 } as any);
    jest.spyOn(demandRepository, 'update').mockImplementationOnce(demand => Promise.resolve({ ...demand } as any));

    const result = await service.save({ id: 1, ...demand });

    expect(result).not.toBeFalsy();
    expect(result).toEqual({ id: 1, ...demand });
  });

  it('should throw NotFoundException when try to update a not found demand', async () => {
    jest.spyOn(demandRepository, 'findById').mockResolvedValueOnce(null);

    try {
      await service.save({ id: 1, ...demand });
      fail();
    } catch (err) {
      expect(err).toBeInstanceOf(NotFoundException);
    }
  });

  it('should remove a demand', async () => {
    jest.spyOn(demandRepository, 'findById').mockResolvedValueOnce({ id: 1 } as any);
    jest.spyOn(demandRepository, 'remove').mockResolvedValueOnce({ id: 1 } as any);

    await service.remove({ id: 1 } as any);
  });

  it('should throw NotFoundException when try to remove a not found demand', async () => {
    jest.spyOn(demandRepository, 'findById').mockResolvedValueOnce(null);

    try {
      await service.remove({ id: 1 } as any);
      fail();
    } catch (err) {
      expect(err).toBeInstanceOf(NotFoundException);
    }
  });
});
