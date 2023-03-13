import { IsDate } from 'class-validator';
import { PatientDTO } from './../DTOs/patient.dto';
import { Body, Controller ,Delete,FileTypeValidator,Get, HttpException, HttpStatus, MaxFileSizeValidator, Param, ParseFilePipe, ParseIntPipe, Post, Put, Session, UnauthorizedException, UploadedFile, UseGuards, UseInterceptors, UsePipes, ValidationPipe} from "@nestjs/common";
import { PatientService } from "../services/patient.service";
import { FileInterceptor } from '@nestjs/platform-express/multer';
import multer, { diskStorage } from 'multer';
import { SessionGuard } from '../session.guard';




@Controller("/patient")
export class PatientController {

    constructor(private readonly patientService: PatientService){}
  
    @Get()
    getAllPatients(): any{
        return this.patientService.getAllPatients();
    }
    @Get("/profile")
    @UseGuards(SessionGuard)
    getPatientById(@Session() mysession): any{
        return this.patientService.getPatientById(mysession.userId);
    }
    @Get("/login/user")
     async login(@Session() mysession , @Body() data:PatientDTO){
        
      
        try{
            const user = await  this.patientService.login(data);
           
            mysession.userId=user.user.id;
            mysession.userEmail=user.user.email;
           console.log(mysession.userEmail);
           return user;
           
        }
        catch(err){
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: 'Login failed',
              }, HttpStatus.FORBIDDEN, {
                cause: err
              });
        }
        
         
          
           
           
     
    }
  

    @Delete("/delete/:id")
    deletePatient(@Param('id',ParseIntPipe) id:number): String{
        return this.patientService.deletePatient(id);
    }
    @Put("/edit")
    @UseGuards(SessionGuard)
    @UsePipes(new ValidationPipe())
    editPatient(@Session() mysession , @Body() data:PatientDTO): String{
        return this.patientService.editPatient(mysession.userId,data) ;
    }
    @Post("/register")
    @UsePipes(new ValidationPipe())
     addUser(@Body() data:PatientDTO): any{
        
        return this.patientService.addUser(data);
    }


    @Put("/profile/upload")
    @UseGuards(SessionGuard)
    @UseInterceptors(FileInterceptor('profilePic',{
        storage:diskStorage({
            destination:'./uploads/paitent/profile',
            filename: function(req,file,cb){
                cb(null,Date.now()+file.originalname);
            }
        })
    }))
    uploadProfile(@UploadedFile(new ParseFilePipe({
        validators: [
            new MaxFileSizeValidator({ maxSize: 1600000 }),
            new FileTypeValidator({ fileType: 'png|jpg|jpeg|' }),
          ],
    }),) file:Express.Multer.File ,@Session() mysession, @Body() data:PatientDTO ): any{
        
        console.log(file.originalname+mysession.userId);
        data.profilePic=file.filename;

        return this.patientService.uploadProfilePic(mysession.userId,data)
        
    }


    @Get('/logout')
    @UseGuards(SessionGuard)
    signout(@Session() mysession)
    {
    if(mysession.destroy())
    {
        return {message:"Logged out"};
    }
    else
    {
        throw new UnauthorizedException("Something went wrong");
    }
    }


}