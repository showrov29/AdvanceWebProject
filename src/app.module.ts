import { PatientModule } from './Patient/module/patient.module';
import { PatientController } from './Patient/controllers/patient.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
<<<<<<< HEAD
import { TypeOrmModule } from '@nestjs/typeorm';
// import { PatientService } from './Patient/services/patient.service';

@Module({
  imports: [PatientModule ,TypeOrmModule.forRoot(
    { type: 'postgres',
     host: 'localhost',
     port: 5432,
     username: 'postgres',
     password: 'root',
     database: 'healthcare',
     autoLoadEntities: true,
     synchronize: true,
   }
   ),],
=======
import { AdminModule } from './Admin/admin.module';

@Module({
  imports: [PatientModule, AdminModule],
>>>>>>> origin/main
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
