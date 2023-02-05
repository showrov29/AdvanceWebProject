import { Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { AdminService } from "./admin.services";

@Controller("/admin")
export class AdminController
{
    //constructor(private readonly adminService : adminService){}
    @Get()
    getAdmin(): any {
        return "get all admins.. na ashe na";
    }

    @Get("/Id/:id")
        getAdminById(@Param() param): string{
            return "get admin by id : "+param.id;
        }

    @Get("/docList")
    getDoctors(): any{
        return "get doctor list ";
    }

    @Get("/docId/:id")
    getDoctorById(@Param() param): string{
        return "get doctor by ID : "+param.id;
    }

    @Get("/docName/:name")
    getDoctorByName(@Param() param): string{
        return "get doctor by name : "+param.name;
    }

    @Post("/regDoc/:id/:name")
    regDoc(@Param() param): any{
        return "Register Doctor by Id :" +param.id + " and name " +param.name;
    }

    @Delete("/rmvDoc/:name")
    removeDoc(@Param() param): string{
        return "Remove Doctor :"+param.name
    }

    @Put("updateDoc/:id")
    updateDoc(@Param() param):string{
        return "Update Doctor by Id : "+param.id
    }

    @Post("/regStaff/:id/:name")
    regStaff(@Param() param): any{
        return "Register Staff by Id :" +param.id + " and name " +param.name;
    }

    @Put("updateStaff/:id")
    updateStaff(@Param() param):string{
        return "Update Staff by Id : "+param.id
    }

    @Get("/Patient")
    getPatient(): any {
        return "get all Patient...";
    }

    @Get("/hospital/:name")
    getHospital(@Param() param): string{
        return "get hospital by name : "+param.name;
    }
   

}