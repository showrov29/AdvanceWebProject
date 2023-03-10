import { Injectable } from "@nestjs/common";
import { IsBoolean, IsDate, IsDateString, IsInt, IsNotEmpty, IsOptional, IsString, Length } from "class-validator";

@Injectable()
export class AppointmentDTO{

    @IsNotEmpty()
    @IsString()
    date : string;

    @IsNotEmpty()
    @IsInt()
    age:number

    @IsNotEmpty()
    @IsString()
    @Length(4,20)
    name :string

    @IsOptional()
    @IsBoolean()
    status:boolean

    prescription:any
}