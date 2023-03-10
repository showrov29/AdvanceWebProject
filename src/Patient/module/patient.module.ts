import { AppoinmentService } from './../services/appointment.service';
import { AppointmentController } from './../controllers/appointment.controller';
import { AppointmentEntity } from './../Entities/appointment.entity';
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
import { MailerModule } from '@nestjs-modules/mailer';

@Module({

    imports: [
        MailerModule.forRoot({
            transport: {
              host: 'smtp.gmail.com',
                       port: 465,
                       ignoreTLS: true,
                       secure: true,
                       auth: {
                           user: 'showrovislam29@gmail.com',
                           pass: 'neafzjximddxaoff'
                       },
                      }
          }),
        
        TypeOrmModule.forFeature([AmbulanceEntity,PatientEntity,PrescriptionEntity,AppointmentEntity])],
    providers: [PatientService,AmbulanceService,PrescriptionsService,AppoinmentService],
    controllers: [PatientController,AmbulanceController,PrescriptionController,AppointmentController],
})
export class PatientModule {
}