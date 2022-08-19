import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";
import { Food } from "./Product";

@Entity({
    name: "Basket",
    synchronize: false,
})
export class Basket extends BaseEntity {
    @PrimaryGeneratedColumn()
    id_basket: number;

    @Column()
    count: number;

    @Column()
    id_user: number;

    @Column()
    id_food: number;

    @OneToOne(() => Food)
    @JoinColumn({ name: "id_food" })
    product: Food;
}