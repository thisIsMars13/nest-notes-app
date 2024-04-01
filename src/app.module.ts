import { Module } from '@nestjs/common';
import { NotesModule } from './notes/notes.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/task-app'),
    NotesModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
