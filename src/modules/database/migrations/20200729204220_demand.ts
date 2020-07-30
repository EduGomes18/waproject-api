import * as Knex from 'knex';

export async function up(knex: Knex): Promise<any> {
  await knex.schema.createTable('Demand', table => {
    table.increments('id').primary();
    table.string('name', 50).notNullable();
    table.text('description').nullable();
    table.integer('quantity').nullable();
    table.float('value').nullable();
    table.dateTime('createdDate').notNullable();
    table.dateTime('updatedDate').notNullable();
  });
}

export async function down(knex: Knex): Promise<any> {
  await knex.schema.dropTableIfExists('Demand');
}
