import { Note } from './note.entity';
import { NOTE_REPOSITORY } from '../../core/constants';

export const notesProviders = [{
    provide: NOTE_REPOSITORY,
    useValue: Note,
}];