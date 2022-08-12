import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({
    name: "Brands",
    synchronize: false,
})
export class Brands extends BaseEntity {
    @PrimaryGeneratedColumn()
    id_brand: number;

    @Column({
        length: 100
    })
    name: string;
}