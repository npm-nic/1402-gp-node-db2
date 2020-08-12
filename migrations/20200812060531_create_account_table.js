exports.up = function (knex) {
  return knex.schema.createTable("accounts", (tbl) => {
    tbl.increments("id");
    tbl.string("name", 256).notNullable().unique();
    tbl.string("email", 256);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("");
};
