import { IsDate, IsDateString, IsEmail, IsNotEmpty, IsOptional, IsString, Length, Matches } from "class-validator";

export class BloodBankDto{

    @IsNotEmpty({message:"Please enter your name *"})
    @IsString({message: "Invalid. Address should be a string *"})
    bloodGroup: string;
    @IsNotEmpty({message:"Please enter the quantity of blood banks *"})
    quantity: string;
    @IsNotEmpty({message: "enter date *"})
    @Matches(/^\d{2}\/\d{2}\/\d{4}$/,
         {message: "Invalid date format.. mm/dd/yyyy"})
    dateOfCollection:string;
}
export class updateBloodBankDto{

    id:number;

    @IsOptional()
    @IsNotEmpty({message:"Please enter your name *"})
    @IsString({message: "Invalid. Address should be a string *"})
    bloodGroup: string;

    @IsOptional()
    @IsNotEmpty({message:"Please enter the helpline Number *"})
    @Length(3,3, {message:"Invalid helpline number*"})
    quantity: string;

    @IsOptional()
    @IsNotEmpty({message: "Please enter your email address*"})
    @Matches(/^\d{2}\/\d{2}\/\d{4}$/,
         {message: "Invalid date format.. mm/dd/yyyy"})
    dateOfCollection:string;
}