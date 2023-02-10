import { Injectable } from "@nestjs/common/decorators";
import { AdminForm } from "./admin.dto";
@Injectable()
export class AdminService
{
    getAdmin(): any{
        return "Get all Admin";
   }
   getAdminById(id): any{
      return "get admin by ID : "+id;
   }
   getDoctors(): string{
      return "All doctors...";
   } 
   getDoctorByIdName(qry): any{
      return "Doctor id : "+qry.id+" and name : "+qry.name;
   }
   regDoc(name, id): any{
      return "Admin registered name : "+name+" and Id : "+id;
   }
   removeDoc(name): string{
      return "Removed doctor : "+name;
   }
   updateDoc(name, id): any{
      return "Update doctor info where id :"+id+" name: "+name;
   }
   regStaff(mydto:AdminForm): any{
      return "staff Inserted name: " + mydto.name+" and id is " + mydto.id;
   }
   updateStaff(name, id): any{
      return "Staff updated name: "+name+" and id: "+id;
   }
   getPatientByIdName(qry): any{
      return "Patient id : "+qry.id+" and name : "+qry.name;
   }
   getHospital(name): string{
      return "Get hospital by name : "+name;
   }
}
