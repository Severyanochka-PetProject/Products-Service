import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";
import { Brands } from "./Brand";
import { Categories } from "./Category";
import { Manufacture } from "./Manufacture";

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

    @OneToOne(() => Categories)
    @JoinColumn({ name: "id_category" })
    category: Categories

    @OneToOne(() => Brands)
    @JoinColumn({ name: "id_brand" })
    brand: Brands

    @OneToOne(() => Manufacture)
    @JoinColumn({ name: "id_manufacture" })
    manufacture: Manufacture
}