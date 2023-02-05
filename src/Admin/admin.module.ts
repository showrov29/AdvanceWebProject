import { Module } from "@nestjs/common/decorators";
import { AdminController } from "./admin.controller";
import { AdminService } from "./admin.services";

@Module(
    {
        controllers: [AdminController],
        providers: [AdminService],
    }
)
export class AdminModule{}