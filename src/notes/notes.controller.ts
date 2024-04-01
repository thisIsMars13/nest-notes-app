import { Body, Controller, Get, HttpException, Param, Post, Put, Delete } from '@nestjs/common';
import { NotesService } from './notes.service';
import { Note } from './schemas/notes.schema';
import { CreateNoteDto } from './dto/create_note.dto';
import { UpdateNoteDto } from './dto/update_note.dto';
import mongoose from 'mongoose';

@Controller('/api/notes')
export class NotesController {
    constructor(private noteService: NotesService){}

    // METHOD: /GET '/api/notes'
    @Get()
    async getAllNotes(): Promise<Note[]>{
        return await this.noteService.findAll();
    }

    // METHOD: /GET '/api/notes/:id'
    @Get(':id')
    async getNote(@Param('id') id: string): Promise<Note>{
        return await this.noteService.findById(id);
    }

    // METHOD: /POST '/api/notes'
    @Post()
    async createNote(@Body() note: CreateNoteDto): Promise<Note>{
        return await this.noteService.create(note);
    }

    // METHOD: /PUT '/api/notes/:id'
    @Put(':id')
    async updateNote(@Param('id') id: string, @Body() note: UpdateNoteDto): Promise<Note>{
        const isValidId = mongoose.Types.ObjectId.isValid(id);
        if(!isValidId) throw new HttpException('Invalid Id', 404);

        return await this.noteService.updateById(id, note);
    }

    @Delete(':id')
    async deleteBook(@Param('id')id: string, ): Promise<Note> {
      return this.noteService.deleteById(id);
    }
}
