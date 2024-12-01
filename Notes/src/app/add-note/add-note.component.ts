import { Component, inject } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule ,FormControl, Validators} from '@angular/forms';
import { note } from '../../notes';
import { markAsUntransferable } from 'worker_threads';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-note',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-note.component.html',
  styleUrl: './add-note.component.scss'
})
export class AddNoteComponent {
  addNoteform = new FormGroup({
    title: new FormControl('',Validators.required),
    text: new FormControl('',Validators.required),
  })

  router = inject(Router);

  addNote()
  {
    let title = this.addNoteform.value?.title ?? '';
    let text = this.addNoteform.value?.text ?? '';

    if(this.addNoteform.valid){
      let ids = note.map((a)=> a.id);
      let maxId = 0;
      if(ids.length > 0){
        maxId = Math.max(...ids);
      }
      let newNote={
        id:maxId+1,
        title:title,
        text:text,
      };
      note.unshift(newNote);
      this.addNoteform.reset();
      this.router.navigateByUrl('/');
  }
  }
  Return(){
    this.router.navigateByUrl('/');
  }
}
