import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("bloodBank")
export class BloodBankEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    bloodGroup : string;

    @Column()
    quantity: string;

    @Column()
    dateOfCollection: string;

}