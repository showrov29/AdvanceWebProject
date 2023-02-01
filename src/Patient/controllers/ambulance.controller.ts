import { AmbulanceDTO } from './../DTOs/ambulance.dto';
import { Body, Controller ,Delete,Get, Param, Post, Put, Query, Request, UsePipes, ValidationPipe} from "@nestjs/common";
import { AmbulanceService } from "../services/ambulance.service";



@Controller("/ambulance")
export class AmbulanceController {

    constructor(private readonly ambulanceService: AmbulanceService){}
    @Get("/:id")
    getAmbulanceById(@Query() qar): String{
        return this.ambulanceService.getByHospital(qar);
    }
    @Get()
    getAmbulances(): String{
        return this.ambulanceService.getAllAmbulance();
    }
    @Get("/:id")
    getAmbulance(@Param() data): String{
        return this.ambulanceService.getAmbulance(data); 
    }
    @Delete("/delete/:id")
    deleteAmbulance(@Param() prm): String{
        return this.ambulanceService.deleteAmbulance(prm);
    }
    @Put("/edit/:id")
    editAmbulance(@Param() qar): String{
        return this.ambulanceService.editAmbulance(qar) ;
    }
    @Post("/register")
    @UsePipes(new ValidationPipe())
    addAmbulance(@Body() data:AmbulanceDTO): String{
        return this.ambulanceService.addAmbulance(data);;
    }


}