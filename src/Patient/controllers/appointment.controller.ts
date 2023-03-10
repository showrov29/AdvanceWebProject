import { AppointmentDTO } from './../DTOs/appointment.dto';
import { AppoinmentService } from './../services/appointment.service';
import { Body, Controller, Delete, Get, Post, Put, Session, UseGuards, UsePipes, ValidationPipe } from "@nestjs/common";
import { SessionGuard } from '../session.guard';


@Controller('appointment')
export class AppointmentController{

    constructor(private readonly appointmentService: AppoinmentService){}
  
    @Get()
    @UseGuards(SessionGuard)
    getAppointments():any{
        return this.appointmentService.getAllAppointments();
    }
    @Get('/:id')
    @UseGuards(SessionGuard)
    getAppointmentById():any{

    }
    @Get('/myappointments')
    @UseGuards(SessionGuard)
    getAppointmentByProfile(@Session() mysession ):any{
        return this.appointmentService.getAppointmentByProfile(mysession.UserId)

    }

    @Put('/update')
    @UseGuards(SessionGuard)
    updateAppointment(@Session() mysession,@Body() data ):any{
        return this.appointmentService.editAppointment(mysession.userId,data)
    }

    @Delete('/delete')
    @UseGuards(SessionGuard)
    deleteAppointment(@Session() mysession ):any {
        return this.appointmentService.deleteAppointment(mysession.userId);
    }

    @Post('/add')
    @UseGuards(SessionGuard)
    @UsePipes(new ValidationPipe())
    makeAppointment(@Body() appointmentData:AppointmentDTO,@Session() mysession ):any {
            return this.appointmentService.addAppointment(appointmentData,mysession);
    }


    
}