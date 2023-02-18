import {  PrescriptionController } from './../controllers/prescription.controller';
import { PrescriptionsService } from './../services/prescription.service';
import { PrescriptionEntity } from './../Entities/prescription.entity';
import { AmbulanceEntity } from './../Entities/ambulance.entity';
import { PatientEntity } from './../Entities/patient.entity';
import { AmbulanceService } from './../services/ambulance.service';
import { PatientController } from './../controllers/patient.controller';
import { PatientService } from './../services/patient.service';
import { AmbulanceController } from '../controllers/ambulance.controller';

import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({

    imports: [TypeOrmModule.forFeature([AmbulanceEntity,PatientEntity,PrescriptionEntity])],
    providers: [PatientService,AmbulanceService,PrescriptionsService],
    controllers: [PatientController,AmbulanceController,PrescriptionController],
})
export class PatientModule {
}