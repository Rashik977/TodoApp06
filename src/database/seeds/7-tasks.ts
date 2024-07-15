import { Knex } from "knex";

const TABLE_NAME = "tasks";

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
          title: "walk the dog",
          userId: 1,
          statusId: 1,
        },
        {
          title: "clean the house",
          userId: 2,
          statusId: 2,
        },
        {
          title: "do the laundry",
          userId: 2,
          statusId: 3,
        },
        {
          title: "wash the car",
          userId: 3,
          statusId: 1,
        },
        {
          title: "mow the lawn",
          userId: 3,
          statusId: 2,
        },
        {
          title: "take out the trash",
          userId: 3,
          statusId: 2,
        },
      ]);
    });
}
