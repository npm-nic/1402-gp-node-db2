exports.up = function (knex) {
  return knex.schema.createTable("characters", (tbl) => {
    tbl.increments("id");
    tbl.string("name", 256).notNullable().unique();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("characters");
};
