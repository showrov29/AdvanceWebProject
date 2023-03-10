import { PrescriptionEntity } from './prescription.entity';
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('Appointment')
export class AppointmentEntity{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    name:string
    @Column()
    age:number

    @Column({default:true})
    status:boolean

    @Column()
    date:string;

    @OneToOne(()=> PrescriptionEntity)
    @JoinColumn()
    prescription:PrescriptionEntity
}