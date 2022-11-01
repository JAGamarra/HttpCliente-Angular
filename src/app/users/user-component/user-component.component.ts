import { Component, OnInit, OnChanges } from '@angular/core';
import { User } from '../interfaces/users.interface';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css'],
})
export class UserComponentComponent implements OnInit {
  constructor(public userService: UserService) {}

  userId: string = '';

  newUser: User = {
    usuario: '',
    edad: 0,
    email: '',
  };

  userToUpdate: User = {
    usuario: '',
    edad: 0,
    email: '',
  };

  users: Array<User> = [];

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe((data: Array<User>) => {
      this.users = data;
      console.log(data);
    });
  }

  onSubmit() {
    if (!this.newUser.usuario && !this.newUser.email && !this.newUser.edad) {
      alert('Faltan campos');
      return;
    }
    this.addUser();
  }

  addUser() {
    this.userService.createUser(this.newUser).subscribe((data: any) => {
      console.log(data);
      this.getUsers();
    });
    this.newUser = {
      usuario: '',
      edad: 0,
      email: '',
    };
  }

  updateUser() {
    if (
      !this.newUser.usuario &&
      !this.newUser.email &&
      !this.newUser.edad &&
      !this.userId
    ) {
      alert('Faltan campos');
      return;
    }
    this.userService
      .updateUser(this.userToUpdate, this.userId)
      .subscribe((data: any) => {
        console.log(data);
        this.getUsers();
      });
    this.userToUpdate = {
      id: '',
      usuario: '',
      edad: 0,
      email: '',
    };
  }

  deleteUser(id: string) {
    this.userService.deleteUser(id).subscribe((data: any) => {
      console.log(data);
    });
  }
}
