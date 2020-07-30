import * as Knex from 'knex';
import { IDemand } from 'modules/database/interfaces/demand';

export async function seed(knex: Knex): Promise<any> {
  const firstDemand: IDemand = {
    name: 'Primeiro pedido',
    description: 'Este pedido é um teste, e esta é a descrição dele!',
    quantity: 10,
    value: 4650,
    createdDate: new Date(),
    updatedDate: new Date()
  };

  await knex.insert(firstDemand).into('Demand');
}
