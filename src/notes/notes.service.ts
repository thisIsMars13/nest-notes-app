import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Note } from './schemas/notes.schema';
import mongoose from 'mongoose';

@Injectable()
export class NotesService {
    constructor(
        @InjectModel(Note.name)
        private noteModel: mongoose.Model<Note>
    ){}

    async findAll(): Promise<Note[]>{
        return await this.noteModel.find();;
    }

    async findById(id: string): Promise<Note>{
        const note = await this.noteModel.findById(id);
        return note;
    }

    async create(note: Note): Promise<Note>{
        return await this.noteModel.create(note);
    }

    async updateById(id: string, note: Note): Promise<Note>{
        return await this.noteModel.findByIdAndUpdate(id, note);
    }

    async deleteById(id: string): Promise<Note>{
        return await this.noteModel.findByIdAndDelete(id);
    }
}
