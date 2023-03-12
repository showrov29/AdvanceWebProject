import { IsNotEmpty, IsInt} from "class-validator";

export class TestDTO {   
   
    
    @IsNotEmpty({ message: 'id is required' })
    @IsInt({ message: 'id must be ineger value' })
    id: number;
    
    @IsNotEmpty({ message: 'Name is required' })
    test_name: string;

    @IsNotEmpty({ message: 'expdate is required' })
    date: string;

    @IsNotEmpty({ message: 'report date is required' })
    report_date: string;

    @IsInt({ message: 'price must be ineger value' })
    fees: number;



}
