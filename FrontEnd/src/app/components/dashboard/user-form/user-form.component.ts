import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import User from '../../../types/user';
import { UserService } from '../../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  imports: [ReactiveFormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css',
})
export class UserFormComponent {
  formBuilder = inject(FormBuilder);
  userForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    age: [''],
    address: [''],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  userService = inject(UserService);
  router = inject(Router);
  route = inject(ActivatedRoute);

  editUserId!: string;
  ngOnInit() {
    this.editUserId = this.route.snapshot.params['id'];
    if(this.editUserId){
      this.userService.getUser(this.editUserId).subscribe((res)=>{
        this.userForm.patchValue(res);
      })
    }
  }

  addUser() {
    if (this.userForm.invalid) {
      alert('Please provide all field with valid data');
      return;
    }
    const model: User = this.userForm.value;
    this.userService.addUser(model).subscribe((res) => {
      alert('User Add Successfully');
      this.router.navigateByUrl('/');
    });
  }

  updateUser(){
    if (this.userForm.invalid) {
      alert('Please provide all field with valid data');
      return;
    }
    const model: User = this.userForm.value;
    this.userService.updateUser(this.editUserId, model).subscribe((res)=>{
      alert('User Update Successfully');
      this.router.navigateByUrl('/');
    })
  }

}
