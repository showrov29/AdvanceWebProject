import { PatientController } from './../controllers/patient.controller';
import { PatientService } from './../services/patient.service';
import { Module } from "@nestjs/common";

@Module({

    imports: [],
    providers: [PatientService],
    controllers: [PatientController],
})
export class PatientModule {
}