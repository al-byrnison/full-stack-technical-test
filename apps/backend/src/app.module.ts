import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://al-byrnison:abcd1234@tasks.isdkbbg.mongodb.net/tasksdb?retryWrites=true&w=majority',
    ),
    TaskModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../', 'frontend/dist')
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
