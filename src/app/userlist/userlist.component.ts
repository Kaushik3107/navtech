import { Component, OnInit } from '@angular/core';
import { ContactuserService } from '../contactuser.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css'],
})
export class UserlistComponent implements OnInit {
  users: [] | undefined = [];

  constructor(private contactService: ContactuserService) {}
  ngOnInit(): void {
    this.contactService.getUSer().subscribe((res: any) => {
      this.users = res;
    });
  }
}
