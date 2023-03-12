import { IsNotEmpty, IsEmail, IsInt, Matches, MinLength, MaxLength } from "class-validator";

export class DoctorForm {   
   
    
    @IsNotEmpty({ message: 'id is required' })
    @IsInt({ message: 'id must be ineger value' })
    id: number;
    
    @MinLength(3, { message: 'name must be at least 3 characters long' })
    @MaxLength(30, { message: 'name cannot be longer than 30 characters' })
    @IsNotEmpty({ message: 'Name is required' })
    name: string;
   
    @IsEmail({}, { message: 'Invalid email format' })
    email: string;

    @IsNotEmpty({ message: 'Password is required' })
    @Matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{6,64}$/gm, 
    {
        message:'Password must be between 6 to 64 characters long with 1 special character and 1 capital character',
    })    
      password: string;

    @IsInt({ message: 'Age must be ineger value' })
    age: number;

    @IsInt({ message: 'contact number must be ineger value' })
    contact: number;

    @IsNotEmpty({ message: 'specialist is required' })
    specialist: string;

    @IsNotEmpty({ message: 'passed_form is required' })
    passed_form: string;

    @IsNotEmpty({ message: 'id is required' })
    address: string;

    @IsNotEmpty({ message: 'designation is required' })
    designation: string;

    @IsInt({ message: 'salary must be ineger value' })
    salary: number;

    filename:string;


}
