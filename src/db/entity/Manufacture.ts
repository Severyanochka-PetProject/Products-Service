import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({
    name: "Manufacture",
    synchronize: false,
})
export class Manufacture extends BaseEntity {
    @PrimaryGeneratedColumn()
    id_manufacture: number;

    @Column({
        length: 150
    })
    name: string;
}