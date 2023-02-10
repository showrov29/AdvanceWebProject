import { IsEmail, IsNotEmpty, IsNumber, Length } from "class-validator";


export class PatientDTO{

    
    @Length(4,10)
    @IsNotEmpty()
    firstName:string;

    @Length(4,10)
    @IsNotEmpty()
    lastName:string;

    @IsNotEmpty()
    dob: string;

    @IsNotEmpty()
    @Length(11,11)
    phone: string;




    @IsEmail()
    @IsNotEmpty()
    email:string;
}