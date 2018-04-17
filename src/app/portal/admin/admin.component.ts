import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MatDialogModule} from "@angular/material";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
 user: any;
  constructor(private as: AuthService) {
  }

  ngOnInit() {
    this.as.getProfile().subscribe(profile => {
        this.user = profile.user;
      },
      err =>{
        console.log(err);
        return false;
      });
  }

}
