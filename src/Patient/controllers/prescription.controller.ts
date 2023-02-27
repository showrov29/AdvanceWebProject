import { PrescriptionDTO } from './../DTOs/prescription.dto';
import { PrescriptionsService } from './../services/prescription.service';
import { PatientService } from './../services/patient.service';
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UsePipes, ValidationPipe } from "@nestjs/common";
import { AmbulanceDTO } from "../DTOs/ambulance.dto";

@Controller("/prescription")
export class PrescriptionController{

    constructor(private readonly prescriptionService: PrescriptionsService){}
    @Post("/prescribe")
    @UsePipes(new ValidationPipe())
    addAmbulance(@Body() data:PrescriptionDTO): any{
        return this.prescriptionService.addPrescription(data);
    }

    @Get("/:id")
    getPrescriptionById(@Param() id:any): any{
        return this.prescriptionService.getPrescriptionByPatientId(id);
    }
   
    @Get()
    getPrescription(): any{
        return this.prescriptionService.getAllPrescription();
    }

    @Delete("/delete/:id")
    deleteAmbulance(@Param('id',ParseIntPipe) id:number ): any{
        return this.prescriptionService.deletePrescription(id);
    }
    @Put("/edit/:id")
    editAmbulance(@Param('id',ParseIntPipe) id:number,@Body() data:AmbulanceDTO ): any{
        return this.prescriptionService.editPrescription(id,data) ;
    }

}

