import { DataSource } from "typeorm";

import { Food } from "./entity/Product";
import { Categories } from "./entity/Category";
import { Brands } from "./entity/Brand";
import { Manufacture } from "./entity/Manufacture";

const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: String(process.env.DB_PASSWORD),
    database: process.env.DB_DATABASE,
    entities: [Food, Categories, Brands, Manufacture],
    synchronize: true,
})

export default AppDataSource;