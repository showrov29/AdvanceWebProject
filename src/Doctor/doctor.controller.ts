import {Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query, UsePipes, ValidationPipe,Session, 
  UploadedFile, UseInterceptors, FileTypeValidator,MaxFileSizeValidator, ParseFilePipe} from '@nestjs/common';
import { DoctorForm } from './doctor.dto';
import { DoctorService } from './doctor.service';
//import { FileInterceptor } from '@nestjs/platform-express';
//import { diskStorage } from 'multer';
//import { UnauthorizedException } from '@nestjs/common/exceptions';



@Controller("/doctor")
export class DoctorController {
  constructor(private readonly doctorService: DoctorService) {}

  @Get()
  getHello(): string {
    return this.doctorService.getHello();
  }
  @Get("/alldoc")
  getAllDoctors(): String{
      return this.doctorService.getAllDoctors();
  }

  @Get("/Id/:id")
      getDoctorById(@Param("id", ParseIntPipe) id:number): number{
          return this.doctorService.getDoctorById(id);
      }

      @Delete('/delete/:id')
      deleteDoctor(@Param('id', ParseIntPipe) id: number): any {
        return this.doctorService.deleteDoctor(id);
      }

  @Put("/edit/:id")
      editDoctor(@Query() qar): String{
          return this.doctorService.editDoctor(qar) ;
      }

    @Post('/register')
      @UsePipes(new ValidationPipe())
      register(@Body() mydto: DoctorForm): any {
          return this.doctorService.register(mydto);
        }

  @Delete("/remove/:name")
      remove(@Param("name") name:string): string{
      return this.doctorService.remove(name);
  }

    @Put("/update/")
    @UsePipes(new ValidationPipe())
    updatedoc( 
      @Body("id")  id:number,  
      @Body("name") name:string,
      @Body("email")  email:string, 
      @Body("password")  password:string,
      @Body("age")  age:number,

  
      ): any {
    return this.doctorService.updatedoc(id,name,email,password,age)
    }
    
    @Put("/update/:id")
  updateDoctorbyid( 
      @Body("name") name:string, 
      @Body("email") email:string, 
      @Body("password") password:number, 
      @Body("age")  age:number,
      
      @Param("id", ParseIntPipe) id:number
      ): any {
    return this.doctorService.updateDoctorbyid(id,name,email,password,age)
    }



  @Get("/Patient/:id")
      getPatientById(@Query() qry:any): any {
      return this.doctorService.getPatientById(qry);
  }

  @Get("/hospital/:name")
      getHospital(@Param("name") name:string): string{
      return this.doctorService.getHospital(name);
  }

  @Put("/prescription")
      pres(@Body("medicine") medicine:string,
              @Param("id") id:number): any{
      return this.doctorService.pres(medicine, id);
  }

  @Put("/test")
  test(@Body("test") test:string,
              @Param("id") id:number): any{
      return this.doctorService.test(test, id);
  }

  



 /* @Post('/signup')
@UseInterceptors(FileInterceptor('myfile',
{storage:diskStorage({
  destination: './uploads',
  filename: function (req, file, cb) {
    cb(null,Date.now()+file.originalname)
  }
})

}))
signup(@Body() mydto:DoctorForm,@UploadedFile(  new ParseFilePipe({
  validators: [
    new MaxFileSizeValidator({ maxSize: 16000 }),
    new FileTypeValidator({ fileType: 'png|jpg|jpeg|' }),
  ],
}),) file: Express.Multer.File){

mydto.filename = file.filename;  

return this.doctorService.signup(mydto);
console.log(file)
}
@Get('/signin')
signin(@Session() session, @Body() mydto:DoctorForm)
{
if(this.doctorService.signin(mydto))
{
  session.email = mydto.email;

  console.log(session.email);
  return {message:"success"};

}
else
{
  return {message:"invalid credentials"};
}
 
}
@Get('/signout')
signout(@Session() session)
{
  if(session.destroy())
  {
    return {message:"you are logged out"};
  }
  else
  {
    throw new UnauthorizedException("invalid actions");
  }
}
@Post('/sendemail')
sendEmail(@Body() mydata){
return this.doctorService.sendEmail(mydata);
}*/




}
