import { PatientDTO } from './../DTOs/patient.dto';
import { Body, Controller ,Delete,Get, Param, ParseArrayPipe, ParseIntPipe, Post, Put, Query, Request, UsePipes, ValidationPipe} from "@nestjs/common";
import { PatientService } from "../services/patient.service";



@Controller("/patient")
export class PatientController {

    constructor(private readonly patientService: PatientService){}
  
    @Get()
    getAllPatients(): any{
        return this.patientService.getAllPatients();
    }
    @Get("/:id")
    getPatientById(@Param('id',ParseIntPipe) id:number): any{
        return this.patientService.getPatientById(id);
    }
    @Get("/email")
    getPatient(@Query('em',ParseArrayPipe) em:string): any{
        return this.patientService.getPatientByEmail(em); 
    }
    @Delete("/delete/:id")
    deletePatient(@Param('id',ParseIntPipe) id:number): String{
        return this.patientService.deletePatient(id);
    }
    @Put("/edit/:id")
    @UsePipes(new ValidationPipe())
    editPatient(@Param('id',ParseIntPipe) id:number , @Body() data:PatientDTO): String{
        return this.patientService.editPatient(id,data) ;
    }
    @Post("/register")
    @UsePipes(new ValidationPipe())
    addUser(@Body() data:PatientDTO): any{
        return this.patientService.addUser(data);;
    }


}