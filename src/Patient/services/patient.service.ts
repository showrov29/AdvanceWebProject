import { PatientDTO } from './../DTOs/patient.dto';
import { PatientEntity } from './../Entities/patient.entity';
import { Body, Injectable, Param, Query, Request } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class PatientService {
  
  constructor (
    @InjectRepository(PatientEntity)
    private patinetReppo: Repository<PatientEntity>
    ){}

  getAllPatients():  any {
    return this.patinetReppo.find();
  }
  getPatientByEmail(email): any {
    return this.patinetReppo.findOneBy({email:email.em})
  }
  deletePatient(id): any {
    return this.patinetReppo.delete(id);
  }
  getPatientById( id): any {
    return this.patinetReppo.findOneBy({id:id});
  }
  editPatient( id,data): any {
     this.patinetReppo.update(id,data);
     
    return  (this.patinetReppo.update(id,data)); 
  }
  addUser( data:PatientDTO): any {
    return this.patinetReppo.save(data);
  }
  
}
