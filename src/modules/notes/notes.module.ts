import { Module } from '@nestjs/common';
import { NotesController } from './notes.controller';
import { notesProviders } from './notes.providers';
import { NotesService } from './notes.service';

@Module({
  providers: [NotesService, ...notesProviders],
  controllers: [NotesController],
  
})
export class NotesModule {}
