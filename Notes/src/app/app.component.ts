import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import {HeaderComponent} from "./header/header.component";
import {NotesListComponent} from "./notes-list/notes-list.component";
import { AddNoteComponent } from './add-note/add-note.component';
import {FormsModule} from "@angular/forms";
import { Router } from 'express';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent,NotesListComponent,
    AddNoteComponent,FormsModule,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Notes';

}
