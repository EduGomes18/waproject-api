import { HttpModule, MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { CommonModule } from 'modules/common/module';
import { DatabaseModule } from 'modules/database/module';

import { DemandController } from './controllers/demand';

import { DemandRepository } from './repositories/demand';
import { DemandService } from './services/demand';

@Module({
  imports: [HttpModule, CommonModule, DatabaseModule],
  controllers: [DemandController],
  providers: [DemandRepository, DemandService]
})
export class DemandModule implements NestModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer.apply().forRoutes('*');
  }
}
