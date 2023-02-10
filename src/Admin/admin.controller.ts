import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { AdminService } from "./admin.services";
import { AdminForm } from "./admin.dto";

@Controller("/admin")
export class AdminController
{
    constructor(private adminService : AdminService){}
    @Get()
    getAdmin(): any {
        return this.adminService.getAdmin();
    }

    @Get("/Id/:id")
        getAdminById(@Param("id") id:number): number{
            return this.adminService.getAdminById(id);
            //return "get admin by id : "+param.id;
        }

    @Get("/docList")
    getDoctors(): string{
        return this.adminService.getDoctors();
        //return "get doctor list ";
    }

    @Get("/docId")
    getDoctorByIdName(@Query() qry:any): any{
        return this.adminService.getDoctorByIdName(qry);
        //return "get doctor by ID : "+param.id;
    }

    @Post("/regDoc")
    regDoc(@Body("name") name:string,
            @Body("id") id:number): any{
        return this.adminService.regDoc(name, id);
                //return "Register Doctor by Id :" +param.id + " and name " +param.name;
    }

    @Delete("/rmvDoc/:name")
    removeDoc(@Param("name") name:string): string{
        return this.adminService.removeDoc(name);
        //return "Remove Doctor :"+param.name
    }

    @Put("updateDoc/:id")
    updateDoc(@Body("name") name:string,
                @Param("id") id:number): any{
        return this.adminService.updateDoc(name, id);
                    //return "Update Doctor by Id : "+param.id
    }

    @Post("/regStaff")
    regStaff(@Body() mydto:AdminForm): any{
        return this.adminService.regStaff(mydto);
        //return "Register Staff by Id :" +param.id + " and name " +param.name;
    }

    @Put("updateStaff")
    updateStaff(@Body("name") name:string,
                @Body("id") id:number): any{
        return this.adminService.updateStaff(name, id);
                    //return "Update Staff by Id : "+param.id
    }

    @Get("/Patient")
    getPatientByIdName(@Query() qry:any): any {
        return this.adminService.getPatientByIdName(qry);
        //return "get all Patient...";
    }

    @Get("/hospital/:name")
    getHospital(@Param("name") name:string): string{
        return this.adminService.getHospital(name);
        //return "get hospital by name : "+param.name;
    }
   

}