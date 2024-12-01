import { Component, inject } from '@angular/core';
import { note } from '../../notes';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormGroup, FormsModule, ReactiveFormsModule ,FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-note-detail',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule],
  templateUrl: './note-detail.component.html',
  styleUrl: './note-detail.component.scss'
})
export class NoteDetailComponent {
  activeRoute = inject(ActivatedRoute);
  id = Number(this.activeRoute.snapshot.paramMap.get('id'));
  note = note.find((a)=> a.id == this.id);

  router = inject(Router);

  editForm = new FormGroup({
    title: new FormControl('',Validators.required),
    text: new FormControl('',Validators.required),
  })

  divy = false;
  discribtion = 'open edit note'
  edit()
  {
    this.divy = !this.divy;
    this.discribtion = this.divy ? 'close edit note' : 'open edit note';
  }
  editContent(){
    if(this.editForm.valid){
      if (this.editForm.value.title && this.editForm.value.text){ {
        note[this.id-1].id = this.id;
        note[this.id-1].title = this.editForm.value.title;
        note[this.id-1].text = this.editForm.value.text;
      }
  }
}
  }
}
