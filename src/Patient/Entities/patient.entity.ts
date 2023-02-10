import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Patient')
export class PatientEntity {

    @PrimaryGeneratedColumn()
    id:number

    @Column()
    firstName:string
    
    @Column()
    lastName:string

    @Column()
    dob:string

    @Column({length:11})
    phone:string

    
    @Column()
    email:string

    @Column({default:"New"})
    status:string




}