import { PatientModule } from './Patient/module/patient.module';
import { PatientController } from './Patient/controllers/patient.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { PatientService } from './Patient/services/patient.service';

@Module({
  imports: [PatientModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
