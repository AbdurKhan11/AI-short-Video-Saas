import { boolean, serial, varchar, pgTable } from "drizzle-orm/pg-core";

export const Users = pgTable('users',{
    id:serial('id').primaryKey(),
    name: varchar('name').notNull(),
    email:varchar('email').notNull(),
    image:varchar('imageURL'),
    subscription:boolean('Subscription').default(false)

})