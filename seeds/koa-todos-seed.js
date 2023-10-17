/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('todos').del()
  await knex('todos').insert([
    {id: 1, title: 'rowValue1', description: 'description', status: 'done', createdAt: new Date(), lastModified: null },
    {id: 2, title: 'rowValue2', description: 'description', status: 'done', createdAt: new Date(), lastModified: null },
    {id: 3, title: 'rowValue3', description: 'description', status: 'done', createdAt: new Date(), lastModified: null }
  ]);
};
