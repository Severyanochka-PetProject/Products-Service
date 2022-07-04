import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({
    name: "Categories",
    synchronize: false,
})
export class Categories extends BaseEntity {
    @PrimaryGeneratedColumn()
    id_category: number;

    @Column({
        length: 100
    })
    name: string;
}