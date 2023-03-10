import { PrescriptionDTO } from './../DTOs/prescription.dto';
import { PrescriptionsService } from './../services/prescription.service';
import { PatientService } from './../services/patient.service';
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Session, UseGuards, UsePipes, ValidationPipe } from "@nestjs/common";
import { AmbulanceDTO } from "../DTOs/ambulance.dto";
import { SessionGuard } from '../session.guard';

@Controller("/prescription")
export class PrescriptionController{

    constructor(private readonly prescriptionService: PrescriptionsService){}
    @Post("/prescribe")
    @UseGuards(SessionGuard)
    @UsePipes(new ValidationPipe())
    addAmbulance(@Body() data:PrescriptionDTO): any{
        return this.prescriptionService.addPrescription(data);
    }

    @Get("/myprescription")
    @UseGuards(SessionGuard)
    getPrescriptionById(@Session() mysession): any{
        return this.prescriptionService.getPrescriptionByPatientId(mysession.userId);
    }
   
    @Get()
    getPrescription(): any{
        return this.prescriptionService.getAllPrescription();
    }

    @Delete("/delete/:id")
    @UseGuards(SessionGuard)
    deleteAmbulance(@Param('id',ParseIntPipe) id:number ): any{
        return this.prescriptionService.deletePrescription(id);
    }
    @Put("/edit/:id")
    @UseGuards(SessionGuard)
    editAmbulance(@Param('id',ParseIntPipe) id:number,@Body() data:PrescriptionDTO ): any{
        return this.prescriptionService.editPrescription(id,data) ;
    }

}

