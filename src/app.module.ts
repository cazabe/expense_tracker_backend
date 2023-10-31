import { Module, NestModule,  MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoginMiddleware } from './common/middleware/loggin.middleware';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { User } from './user/entity/user.entity';
import { AuthModule } from './auth/auth.module';
import { ExpenseModule } from './expense/expense.module';
import { ExpenseTypeModule } from './expense_type/expense_type.module';
import { PaymentTypeModule } from './payment_type/payment_type.module';

const configService = new ConfigService();

@Module({
  
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: configService.get('DB_PORT'),
      username: configService.get('DB_USER'),
      password: configService.get('DB_PASSWORD'),
      database: configService.get('DB_NAME'),
      entities: [User],
      synchronize: true,
    }),
    UserModule,
    AuthModule,
    ExpenseModule,
    ExpenseTypeModule,
    PaymentTypeModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule implements NestModule{
    configure(consumer: MiddlewareConsumer) {
      consumer
        .apply(LoginMiddleware)
        .forRoutes({ path: 'user', method: RequestMethod.GET });
    }
 }
