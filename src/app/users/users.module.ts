import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserComponentComponent } from './user-component/user-component.component';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [UserComponentComponent],
  imports: [CommonModule, FormsModule],
  exports: [UserComponentComponent],
  providers: [UserService],
})
export class UsersModule {}
