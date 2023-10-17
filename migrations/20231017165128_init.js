/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createSchema('koa-todos-api')
    .createTable('todos', function(table) {
        table.increments();
        table.string('title');
        table.string('description');
        table.string('status');
        table.timestamps();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.withSchema('koa-todos-api')
        .dropTable('todos');
};
