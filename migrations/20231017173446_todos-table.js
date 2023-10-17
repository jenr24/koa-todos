/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
        .createTable('todos', function(table) {
            table.increments('id');
            table.string('title', 255).notNullable();
            table.string('description', 255).notNullable();
            table.string('status', 15).notNullable();
            table.timestamp('createdAt').notNullable();
            table.timestamp('lastModified');
        })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema
    .dropTable('todos');
};
