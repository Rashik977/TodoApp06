import { Knex } from "knex";

const TABLE_NAME = "rolePermissions";

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
          roleId: 1,
          permissionId: 1,
        },
        {
          roleId: 1,
          permissionId: 2,
        },
        {
          roleId: 1,
          permissionId: 3,
        },
        {
          roleId: 1,
          permissionId: 4,
        },
        {
          roleId: 1,
          permissionId: 5,
        },
        {
          roleId: 1,
          permissionId: 6,
        },
        {
          roleId: 1,
          permissionId: 7,
        },
        {
          roleId: 1,
          permissionId: 8,
        },
        {
          roleId: 2,
          permissionId: 5,
        },
        {
          roleId: 2,
          permissionId: 6,
        },
        {
          roleId: 2,
          permissionId: 7,
        },
        {
          roleId: 2,
          permissionId: 8,
        },
      ]);
    });
}
