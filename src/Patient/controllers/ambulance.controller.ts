import { AmbulanceDTO } from './../DTOs/ambulance.dto';
import { Body, Controller ,Delete,Get, Param, ParseArrayPipe, ParseEnumPipe, ParseIntPipe, ParseUUIDPipe, Post, Put, Query, Request, UsePipes, ValidationPipe} from "@nestjs/common";
import { AmbulanceService } from "../services/ambulance.service";
import { number } from 'yup';


enum bol {
    true = 'true',
    
  }

@Controller("/ambulance")
export class AmbulanceController {
    
    constructor(private readonly ambulanceService: AmbulanceService){}
    @Get("/:id")
    getAmbulanceById(@Param('id',ParseIntPipe) id:number): any{
        return this.ambulanceService.getAmbulance(id);
    }
    @Get("/available")
    getAmbulanceByStatus(@Query('status',ParseArrayPipe) status:boolean): any{
        return this.ambulanceService.getAmbulanceByStatus(status);
    }
    @Get()
    getAmbulances(): any{
        return this.ambulanceService.getAllAmbulance();
    }
  
    @Delete("/delete/:id")
    deleteAmbulance(@Param('id',ParseIntPipe) id:number ): any{
        return this.ambulanceService.deleteAmbulance(id);
    }
    @Put("/edit/:id")
    editAmbulance(@Param('id',ParseIntPipe) id:number,@Body() data:AmbulanceDTO ): any{
        return this.ambulanceService.editAmbulance(id,data) ;
    }
    @Post("/register")
    @UsePipes(new ValidationPipe())
    addAmbulance(@Body() data:AmbulanceDTO): any{
        return this.ambulanceService.addAmbulance(data);;
    }


}