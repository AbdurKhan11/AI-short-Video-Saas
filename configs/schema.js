import { boolean, serial } from "drizzle-orm/mysql-core";
import { pgTable } from "drizzle-orm/pg-core";

export const User = pgTable('users',{
    id:serial('id').primaryKey(),
    name: varchar('name').notNull(),
    email:varchar('email').notNull(),
    image:varchar('imageURL'),
    subscription:boolean('Subscription').default(false)

})