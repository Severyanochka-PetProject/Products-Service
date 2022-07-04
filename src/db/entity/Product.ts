import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({
    name: "Food",
    synchronize: false,
})
export class Food extends BaseEntity {
    @PrimaryGeneratedColumn()
    id_food: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    price: number;

    @Column()
    discount: number;

    @Column()
    url: string;

    @Column()
    id_brand: number;

    @Column()
    id_manufacture: number;

    @Column()
    id_category: number;
}