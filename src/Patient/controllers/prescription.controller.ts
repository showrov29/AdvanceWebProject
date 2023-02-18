import { PrescriptionDTO } from './../DTOs/prescription.dto';
import { PrescriptionsService } from './../services/prescription.service';
import { PatientService } from './../services/patient.service';
import { Body, Controller, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { AmbulanceDTO } from "../DTOs/ambulance.dto";

@Controller("/prescription")
export class PrescriptionController{

    constructor(private readonly prescriptionService: PrescriptionsService){}
    @Post("/prescribe")
    @UsePipes(new ValidationPipe())
    addAmbulance(@Body() data:PrescriptionDTO): any{
        return this.prescriptionService.addPrescription(data);;
    }
}