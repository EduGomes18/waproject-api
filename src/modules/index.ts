import { Module } from '@nestjs/common';
import { RouterModule } from 'nest-router';

import { AdminModule } from './admin/module';
import { AppModule } from './app/module';
import { DemandModule } from './demand/module';

@Module({
  imports: [
    RouterModule.forRoutes([
      { path: '/admin', module: AdminModule },
      { path: '/app', module: AppModule },
      { path: '/admin', module: DemandModule }
    ]),
    AdminModule,
    AppModule,
    DemandModule
  ]
})
export class ApplicationModule {}
