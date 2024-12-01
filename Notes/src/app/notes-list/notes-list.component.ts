import { Component } from '@angular/core';
import {note} from "../../notes";
import { FormGroup, FormsModule, ReactiveFormsModule ,FormControl, Validators} from '@angular/forms';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-notes-list',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,RouterModule],
  templateUrl: './notes-list.component.html',
  styleUrl: './notes-list.component.scss'
})
export class NotesListComponent {
  notes = note;

  show(title: string)
  {
    alert(title);
  } 

  login = new FormGroup({
      username : new FormControl('',Validators.required),
      passwork : new FormControl('', Validators.required),
    
  });
}
