import { IsEmail, IsNotEmpty, IsNumber, IsString, Length } from "class-validator";


export class PatientDTO{

    
    @Length(4,10)
    @IsNotEmpty()
    @IsString({message:"Invalid Name"})
    firstName:string;

    @Length(4,10)
    @IsNotEmpty()
    @IsString({message:"Invalid Name"})
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