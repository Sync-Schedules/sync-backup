import {Component, OnInit, ViewChild} from '@angular/core';
import { UserService} from "../../../services/user.service";
import { Observable} from "rxjs/Observable";
import 'rxjs/add/observable/of';
import { DataSource } from "@angular/cdk/collections";
import { Venue } from "../../../models/venue.model";
import {MatDialog, MatPaginator, MatSnackBar, MatSort, MatTableDataSource} from "@angular/material";
import {AddVenueComponent} from "../../../dialogs/add-venue/add-venue.component";
import {VenueService} from "../../../services/venue.service";
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-venue-data',
  providers: [VenueService],
  templateUrl: './venue-data.component.html',
  styleUrls: ['./venue-data.component.scss']
})
export class VenueDataComponent implements OnInit {

  displayedColumns = ['name', 'address', 'city', 'state', 'zip', 'phone', 'email', 'actions'];
  dataSource = new MatTableDataSource<Venue>();

  constructor(
    public dialog: MatDialog,
    private vs: VenueService,
    private as: AuthService,
    private snackBar: MatSnackBar,
    private router: Router) { }

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.vs.getVenue().subscribe(data => this.dataSource.data = data);
  }
  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  openDialog(): void {
    let dialogRef = this.dialog.open(AddVenueComponent, {width: '500px'});
    this.ngOnInit();
  }

  onRowClicked(row){
    console.log('Row clicked: ', row);
    this.ngOnInit();
  }

  DeleteVenue(_id) {
    this.as.deleteVenue(_id)
      .subscribe(data => {
        if (data.success){
          this.snackBar.open('User has been deleted', '', {duration: 3000});
          console.log(_id);
          this.ngOnInit();
        } else {
          this.snackBar.open('Error', 'Close', {duration: 2000})
        }

      });
    // console.log('Venue', _id, 'has been deleted');
    // this.ngOnInit();
    // return this.as.deleteUser()
  }

}
