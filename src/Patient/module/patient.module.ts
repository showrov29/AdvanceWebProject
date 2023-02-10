import { AmbulanceEntity } from './../Entities/ambulance.entity';
import { PatientEntity } from './../Entities/patient.entity';
import { AmbulanceService } from './../services/ambulance.service';
import { PatientController } from './../controllers/patient.controller';
import { PatientService } from './../services/patient.service';
import { AmbulanceController } from '../controllers/ambulance.controller';

import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({

    imports: [TypeOrmModule.forFeature([AmbulanceEntity,PatientEntity])],
    providers: [PatientService,AmbulanceService],
    controllers: [PatientController,AmbulanceController],
})
export class PatientModule {
}