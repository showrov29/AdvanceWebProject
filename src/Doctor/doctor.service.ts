import { Injectable } from '@nestjs/common';
import { DoctorForm } from "./doctor.dto";
import {DoctorEntity} from "./doctor.entity";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
//import { MailerService } from "@nestjs-modules/mailer/dist";


@Injectable()
export class DoctorService {

   constructor(
      @InjectRepository(DoctorEntity)
      private doctorRepo: Repository<DoctorEntity>,
      //private mailerService: MailerService
    ) {}

  getHello(): any {
   return this.doctorRepo.find();
}
 getAllDoctors(): any{
    return "Get all Doctors";
 }
 getDoctorById(id): any{
    return "get  doctor by id : "+id;
 }
 deleteDoctor(id):any {    
   return "delete  doctor by id : "+id;
}
 editDoctor(qry): any{
    return "Doctor id : "+qry.id+" and name : "+qry.name;
 }

    register (mydto:DoctorForm):any {
      const doctoraccount = new DoctorEntity()
      doctoraccount.name = mydto.name;
      doctoraccount.email = mydto.email;
      doctoraccount.password = mydto.password;
      doctoraccount.age = mydto.age;
     return this.doctorRepo.save(doctoraccount);
     
        }

 remove(name): string{
    return "Removed Medicine : "+name;
 }

updatedoc(id,name,email,password,age):any {
   return "Update Doctor name: " +name+" id:  "+ id+" email: " + email+" password: " +password+" age: " +age;
    }


   updateDoctorbyid(id,name,email,password,age):any {
      return "Update doctor where id " +id+" name:  "+ name+" email: " + email+" password: " +password+" age: " +age;
   }

 getPatientById(qry): any{
    return "Patient id : "+qry.id;
 }
 getHospital(name): string{
    return "Get hospital by name : "+name;
 }
 pres(medicine, id): any{
   return "Medicine no :"+id+"and medicine name: "+medicine;
 }
 test(test, id): any{
   return "Number of test :"+id+"and test name: "+test;
 }  





 /*async signup(mydto) {
   const salt = await bcrypt.genSalt();
   const hassedpassed = await bcrypt.hash(mydto.password, salt);
   mydto.password= hassedpassed;
   return this.doctorRepo.save(mydto);
   }
   
   async signin(mydto){
       console.log(mydto.password);
   const mydata= await this.doctorRepo.findOneBy({email: mydto.email});
   const isMatch= await bcrypt.compare(mydto.password, mydata.password);
   if(isMatch) {
   return 1;
   }
   else {
       return 0;
   }
   
   }
   
   async sendEmail(mydata){
    return   await this.mailerService.sendMail({
           to: mydata.email,
           subject: mydata.subject,
           text: mydata.text, 
         });
   
   }*/






 
}
