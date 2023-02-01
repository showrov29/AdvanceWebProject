import { IsEmail, IsNotEmpty, IsNumber, Length } from "class-validator";


export class PatientDTO{

    @IsNotEmpty()
    @IsNumber()
    id:number;

    @Length(4,20)
    @IsNotEmpty()
    name:string;

    @IsEmail()
    @IsNotEmpty()
    
    email:string;
}