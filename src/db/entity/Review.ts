import { BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Food } from "./Product";
import { User } from "./User";

@Entity({
    name: "Reviews",
    synchronize: false,
})
export class Review extends BaseEntity {
    @PrimaryGeneratedColumn()
    id_review: number;

    @Column()
    date: Date;
    
    @Column()
    text: string;

    @Column({
        default: null
    })
    stars: number;

    @Column()
    id_user: number;

    @Column()
    id_food: number;

    @OneToOne(() => Food)
    @JoinColumn({ name: "id_food" })
    product: Food;

    @OneToOne(() => User)
    @JoinColumn({ name: "id_user" })
    user: User
}