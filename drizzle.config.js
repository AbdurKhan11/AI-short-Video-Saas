/** @type {import ("drizzle-kit").Config} */

export default {
  schema: './configs/schema.js',
  dialect: 'postgresql',
  dbCredentials: {
    url: "postgresql://neondb_owner:XAhHf4WUdM5m@ep-super-dew-a5ijvckt.us-east-2.aws.neon.tech/neondb?sslmode=require"
  },
};
