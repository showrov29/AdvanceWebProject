
import { Body, Injectable, Param, Query } from '@nestjs/common';

@Injectable()
export class AmbulanceService {
  getByHospital(@Query() qar): string {
    return ;
  }
  getAllAmbulance(): string {
    return "get all ambulance";
  }
  getAmbulance(@Param() data): string {
    return "get Ambulance with id " + data.id;
  }
  deleteAmbulance(@Param() prm): string {
    return "delete ambulance with id " + prm.id;
  }
  editAmbulance(@Param() qar): string {
    return "edit ambulance with id " + qar.id;
  }
  addAmbulance(@Body() data): any {
    return data;
  }
  
}