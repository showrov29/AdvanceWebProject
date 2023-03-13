import { AmbulanceDTO } from './../DTOs/ambulance.dto';
import { Body, Controller ,Delete,Get, HttpException, HttpStatus, Param, ParseArrayPipe, ParseBoolPipe, ParseEnumPipe, ParseIntPipe, ParseUUIDPipe, Post, Put, Query, Request, Session, UseGuards, UsePipes, ValidationPipe} from "@nestjs/common";
import { AmbulanceService } from "../services/ambulance.service";
import { SessionGuard } from '../session.guard';




@Controller("/ambulance")
export class AmbulanceController {
    
    constructor(private readonly ambulanceService: AmbulanceService){}
    @Get("/:id")
    @UseGuards(SessionGuard)
    getAmbulanceById(@Param('id',ParseIntPipe) id:number): any{

        try{
            return this.ambulanceService.getAmbulance(id);

        }
        catch(err){
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: err,
              }, HttpStatus.FORBIDDEN, {
                cause: err
              });
        }

       
    }
    @Put("/available")
    @UseGuards(SessionGuard)
    getAmbulanceByStatus(@Query('status',ParseBoolPipe)status?:boolean): any{
        try{
            
            return this.ambulanceService.getAmbulanceByStatus(status);
        }
        catch(err){
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: 'something went wrong',
              }, HttpStatus.FORBIDDEN, {
                cause: err
              });
        }
    }
    @Put("/booked/profile")
    @UseGuards(SessionGuard)
    getAmbulanceByProfile(@Session()mysession): any{
        try{
            
            // console.log(mysession.userId);
            const id=mysession.userId;
            console.log(id);
            
            const x= this.ambulanceService.getAmbulanceByProfile(id);
            return x;
        }
        catch(err){
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: 'something went wrong',
              }, HttpStatus.FORBIDDEN, {
                cause: err
              });
        }
    }

    @Get()
    @UseGuards(SessionGuard)

    getAmbulances(): any{
        try{
            return this.ambulanceService.getAllAmbulance();
           
        }
        catch(err){
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: 'something went wrong',
              }, HttpStatus.FORBIDDEN, {
                cause: err
              });
        }
    }
  
    @Delete("/delete/:id")
    @UseGuards(SessionGuard)
    deleteAmbulance(@Param('id',ParseIntPipe) id:number ): any{
        try{
            return this.ambulanceService.deleteAmbulance(id);
            
        }
        catch(err){
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: 'something went wrong',
              }, HttpStatus.FORBIDDEN, {
                cause: err
              });
        }

    }
    @Put("/edit/:id")
    @UseGuards(SessionGuard)
    editAmbulance(@Param('id',ParseIntPipe) id:number,@Body() data:AmbulanceDTO ): any{
        
        try{
            return this.ambulanceService.editAmbulance(id,data) ;
        }
        catch(err){
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: 'something went wrong',
              }, HttpStatus.FORBIDDEN, {
                cause: err
              });
        }

    }
    @Post("/register")
    @UseGuards(SessionGuard)
    @UsePipes(new ValidationPipe())
    addAmbulance(@Body() data:AmbulanceDTO): any{
        try{
            return this.ambulanceService.addAmbulance(data);
        }
        catch(err){
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: 'something went wrong',
              }, HttpStatus.FORBIDDEN, {
                cause: err
              });
        }
    }


}