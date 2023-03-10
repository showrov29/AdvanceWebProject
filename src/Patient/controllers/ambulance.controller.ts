import { AmbulanceDTO } from './../DTOs/ambulance.dto';
import { Body, Controller ,Delete,Get, Param, ParseArrayPipe, ParseBoolPipe, ParseEnumPipe, ParseIntPipe, ParseUUIDPipe, Post, Put, Query, Request, UseGuards, UsePipes, ValidationPipe} from "@nestjs/common";
import { AmbulanceService } from "../services/ambulance.service";
import { SessionGuard } from '../session.guard';




@Controller("/ambulance")
export class AmbulanceController {
    
    constructor(private readonly ambulanceService: AmbulanceService){}
    @Get("/:id")
    @UseGuards(SessionGuard)
    getAmbulanceById(@Param('id',ParseIntPipe) id:number): any{
        return this.ambulanceService.getAmbulance(id);
    }
    @Put("/available")
    @UseGuards(SessionGuard)
    getAmbulanceByStatus(@Query('status',ParseBoolPipe)status?:boolean): any{
        return this.ambulanceService.getAmbulanceByStatus(status);
    }
    @Get()
    getAmbulances(): any{
        return this.ambulanceService.getAllAmbulance();
    }
  
    @Delete("/delete/:id")
    @UseGuards(SessionGuard)
    deleteAmbulance(@Param('id',ParseIntPipe) id:number ): any{
        return this.ambulanceService.deleteAmbulance(id);
    }
    @Put("/edit/:id")
    @UseGuards(SessionGuard)
    editAmbulance(@Param('id',ParseIntPipe) id:number,@Body() data:AmbulanceDTO ): any{
        return this.ambulanceService.editAmbulance(id,data) ;
    }
    @Post("/register")
    @UseGuards(SessionGuard)
    @UsePipes(new ValidationPipe())
    addAmbulance(@Body() data:AmbulanceDTO): any{
        return this.ambulanceService.addAmbulance(data);;
    }


}