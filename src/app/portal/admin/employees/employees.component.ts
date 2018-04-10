import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Observable} from 'rxjs/Observable';
import {merge} from 'rxjs/observable/merge';
import {of as observableOf} from 'rxjs/observable/of';
import {catchError} from 'rxjs/operators/catchError';
import {map} from 'rxjs/operators/map';
import {startWith} from 'rxjs/operators/startWith';
import {switchMap} from 'rxjs/operators/switchMap';
import {AuthService} from "../../../services/auth.service";


@Component({
  selector: 'app-employees',
  providers:[AuthService],
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  user = new MatTableDataSource();
  displayedColumns = [
    'name',
    'last',
    'username',
    'email',
    'password',
    'role'
  ];
  resultsLength = 0;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private as: AuthService) {
  }

  ngOnInit() {
    this.as.getProfile().subscribe(users => {
      this.user = users;
    })
  }


}

