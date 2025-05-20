import { Component, inject } from '@angular/core';
import User from '../../types/user';
import { UserService } from '../../services/user.service';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  users: User[] = [];
  userService = inject(UserService);
  ngOnInit() {
    this.userService.getUsers().subscribe((res) => {
      this.users = res;
      console.log(this.users);
    });
  }

  delete(id: string) {
    const ok = confirm('Are you sure want to delete user?');
    if (ok) {
      this.userService.deleteUser(id).subscribe((res) => {
        alert('User Deleted Successfully');
        this.users = this.users.filter((u) => u._id != id);
      });
    }
  }
}
