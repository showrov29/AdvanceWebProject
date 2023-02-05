import { PatientModule } from './Patient/module/patient.module';
import { PatientController } from './Patient/controllers/patient.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './Admin/admin.module';

@Module({
  imports: [PatientModule, AdminModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
