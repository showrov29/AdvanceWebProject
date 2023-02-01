import { Body, Injectable, Param, Query, Request } from '@nestjs/common';

@Injectable()
export class PatientService {
  getDashboard(): string {
    return 'Dashboard';
  }
  getAllPatients(): string {
    return "get all patients";
  }
  getPatient(@Query() data): string {
    return "get patient with id " + data.id;
  }
  deletePatient(@Param() prm): string {
    return "delete patient with id " + prm.id;
  }
  editPatient(@Query() qar): string {
    return "edit patient with id " + qar.id;
  }
  addUser( data): any {
    return data;
  }
  
}
