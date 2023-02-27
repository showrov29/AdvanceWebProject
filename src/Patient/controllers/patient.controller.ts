import { PatientDTO } from './../DTOs/patient.dto';
import { Body, Controller ,Delete,Get, Param, ParseArrayPipe, ParseFilePipe, ParseIntPipe, Post, Put, Query, Request, UploadedFile, UseInterceptors, UsePipes, ValidationPipe} from "@nestjs/common";
import { PatientService } from "../services/patient.service";
import { FileInterceptor } from '@nestjs/platform-express/multer';
import multer from 'multer';



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
    @Get("/signup/user")
    login(@Body() em:PatientDTO): any{
        
            return this.patientService.login(em); 
     
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
    @Post("/profile/upload:id")
    @UseInterceptors(FileInterceptor('profilePic'))
    uploadProfile(@UploadedFile() file:Express.Multer.File ,@Param() id:any): any{
        
        console.log(file.originalname+id.id);
        
        
    }


}