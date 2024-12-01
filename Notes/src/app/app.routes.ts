import { Routes,provideRouter } from '@angular/router';
import { NotesListComponent } from './notes-list/notes-list.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { NoteDetailComponent } from './note-detail/note-detail.component';
import { NotFoundError } from 'rxjs';

export const routes: Routes = [
    {path: '', component: NotesListComponent},
    {path:'add', component: AddNoteComponent},
    {path:'note/:id',component: NoteDetailComponent},
    {path: '**', title: 'page not found',component: NotFoundError}
];
