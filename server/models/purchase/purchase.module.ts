import { Module } from '@nestjs/common';
import { PurchaseService } from './purchase.service';
import { PurchaseController } from './purchase.controller';
import { PrismaModule } from 'server/prisma/prisma.module';

@Module({
  controllers: [PurchaseController],
  imports: [PrismaModule],
  providers: [PurchaseService],
})
export class PurchaseModule {}
