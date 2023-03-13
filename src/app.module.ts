import { PatientModule } from './Patient/module/patient.module';
import { PatientController } from './Patient/controllers/patient.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './Admin/admin.module';
import { DoctorModule } from './doctor/doctor.module';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { PatientService } from './Patient/services/patient.service';

@Module({
  imports: [PatientModule ,AdminModule, DoctorModule, TypeOrmModule.forRoot(
    { type: 'postgres',
     host: 'localhost',
     port: 5432,
     username: 'postgres',
     password: '1234',
     database: 'doctor_db',
     autoLoadEntities: true,
     synchronize: true,
   }
   ),],

  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
