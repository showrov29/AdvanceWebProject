import { PatientDTO } from './../DTOs/patient.dto';
import { Body, Controller ,Delete,Get, Param, Post, Put, Query, Request, UsePipes, ValidationPipe} from "@nestjs/common";
import { PatientService } from "../services/patient.service";



@Controller("/patient")
export class PatientController {

    constructor(private readonly patientService: PatientService){}
    @Get("/dashboard")
    getDashboard(): String{
        return this.patientService.getDashboard();
    }
    @Get()
    getAllPatients(): String{
        return this.patientService.getAllPatients();
    }
    @Get("/:id")
    getPatient(@Query() data): String{
        return this.patientService.getPatient(data); 
    }
    @Delete("/delete/:id")
    deletePatient(@Param() prm): String{
        return this.patientService.deletePatient(prm);
    }
    @Put("/edit/:id")
    editPatient(@Query() qar): String{
        return this.patientService.editPatient(qar) ;
    }
    @Post("/register")
    @UsePipes(new ValidationPipe())
    addUser(@Body() data:PatientDTO): String{
        return this.patientService.addUser(data);;
    }


}