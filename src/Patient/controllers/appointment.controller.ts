import { Controller, Get } from "@nestjs/common";

@Controller('appointment')
export class AppointmentController{
    @Get()
    getAppointments():any{

    }
    @Get('/:id')
    getAppointmentById():any{

    }

    
}