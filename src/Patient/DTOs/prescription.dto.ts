import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, Length, Matches } from "class-validator";


export class PrescriptionDTO{

    @IsOptional()
    test:string

    @IsOptional()
    medicine:string

    @IsNotEmpty()
    @IsNumber()
    patientAge:number

    @IsNotEmpty()
    @IsString()
    patientName:string

    @IsNotEmpty()
    patient:any




    
}