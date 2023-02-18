import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { PrescriptionEntity } from "./prescription.entity";

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

    @Column({length:15})
    password:string

    @Column({default:false})
    status:boolean

    @OneToMany(()=>PrescriptionEntity,(prescription)=>prescription.patient)
    prescriptions:PrescriptionEntity[]




}