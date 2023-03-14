import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { BloodBankDto, updateBloodBankDto } from "../dto/bloodBank.dto";
import { BloodBankEntity } from "../entity/bloodBank.entity";

@Injectable()
export class BloodBankService {
    constructor(
        @InjectRepository(BloodBankEntity)
        private bloodBankRepo: Repository<BloodBankEntity>
      ) {}
 
    getBloodBank() {
        return this.bloodBankRepo.find();
    }
    getBloodBankById(id):any {
        return this.bloodBankRepo.findOneBy({ id });
    }

    getBloodBankByIdName(qry):any {
        return this.bloodBankRepo.findOneBy({ id:qry.id });
   }
   insertBloodBank(mydto: BloodBankDto): any{
    const adminaccount = new BloodBankEntity()
    adminaccount.bloodGroup = mydto.bloodGroup;
    adminaccount.quantity = mydto.quantity;
    adminaccount.dateOfCollection = mydto.dateOfCollection;
    //adminaccount.status = mydto.status;
    return this.bloodBankRepo.save(adminaccount);
    }

    updateBloodBankById(myData:BloodBankDto, id): any{
        return this.bloodBankRepo.update(id, myData);
    }
    updateBloodBankPat(myData:updateBloodBankDto, id): any{
        return this.bloodBankRepo.update(id, myData);
    }
    
    removeBloodBankById(id): any{
        return this.bloodBankRepo.delete(id);
    }
    
}