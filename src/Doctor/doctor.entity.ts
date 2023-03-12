import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { MedicineEntity } from "./medicine.entity";


@Entity("doctor")
export class DoctorEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  age: number;

  @Column()
  contact: number;

  @Column()
  specialist: string;

  @Column()
  passed_form: string;

  @Column()
  address: string;

  @Column()
  designation: string;

  @Column()
  salary: number;

  @Column()
  filename: string;

  @OneToMany(() => MedicineEntity, (medicine) => medicine.doctor)
  medicines: MedicineEntity[]




}