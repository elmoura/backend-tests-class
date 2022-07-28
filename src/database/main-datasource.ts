import 'dotenv/config'
import { join } from "path";
import { DataSource } from "typeorm";

const migrationsPattern = join(process.cwd(), 'migrations', '**.ts');
const entitiesPattern = join(process.cwd(), 'src', '**', '**.entity.ts');

export const mainDataSource = new DataSource({
  type: 'postgres',
  url: process.env.DB_URL,
  entities: [entitiesPattern],
  migrations: [migrationsPattern]
});
