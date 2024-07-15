import { Knex } from "knex";

const TABLE_NAME = "userRoles";

/**
 * Delete existing entries and seed values for table TABLE_NAME.
 *
 * @param   {Knex} knex
 * @returns {Promise}
 */
export function seed(knex: Knex): Promise<void> {
  return knex(TABLE_NAME)
    .del()
    .then(() => {
      return knex(TABLE_NAME).insert([
        {
          userId: 1,
          roleId: 1,
        },
        {
          userId: 2,
          roleId: 2,
        },
        {
          userId: 3,
          roleId: 2,
        },
      ]);
    });
}
