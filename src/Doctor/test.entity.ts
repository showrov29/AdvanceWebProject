import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity("test")
export class TestEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  test_name: string;

  @Column()
  date: string;

  @Column()
  report_date: string;

  @Column()
  fees: number;

}