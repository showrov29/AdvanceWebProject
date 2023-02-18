import { PatientEntity } from './patient.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity('Prescription')
export class PrescriptionEntity{
    @PrimaryGeneratedColumn()
    id:number

    @Column({type:'text'})
    test:string
    @Column({type:'text'})
    medicine:string

    @Column()
    patientAge:number

    @Column()
    patientName:string
    

    @ManyToOne(()=>PatientEntity,(patient)=>patient.prescriptions)
    patient:PatientEntity

}