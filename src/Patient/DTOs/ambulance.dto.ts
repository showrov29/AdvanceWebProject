import { IsInt, IsNotEmpty, Length } from "class-validator";

export class AmbulanceDTO{

    @IsNotEmpty()
    @IsInt()
    id:number;
    @IsNotEmpty()
    @Length(2,100)
    location:string;
    @IsNotEmpty()
    @IsInt()
    hospitalId:number

}