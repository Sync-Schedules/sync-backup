import {Component, OnInit, ViewChild} from '@angular/core';
import { UserService} from "../../../services/user.service";
import 'rxjs/add/observable/of';
import { User} from "../../../models/user.model";
import {MatDialog, MatPaginator, MatSnackBar, MatSort, MatTableDataSource} from "@angular/material";
import {AddUserComponent} from "../../../dialogs/add-user/add-user.component";
import {ConfirmDialogComponent} from "../../../dialogs/delete-dialog/confirm-dialog.component";
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";
import {EditUserComponent} from "../../../dialogs/edit-user/edit-user.component";

@Component({
  selector: 'usertable',
  providers: [UserService],
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  displayedColumns = ['name', 'last', 'username', 'email', 'role', 'actions'];
  dataSource = new MatTableDataSource<User>();
  user:any;


  constructor(
    public dialog: MatDialog,
    private us: UserService,
    private as: AuthService,
    private snackBar: MatSnackBar,
    private router: Router) {
  }

  // resultsLength = 0;
  // isLoadingResults = true;
  // isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.us.getUser().subscribe(data => this.dataSource.data = data);
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
    let dialogRef = this.dialog.open(AddUserComponent, {width: '500px'});
    this.ngOnInit();
  }


  onRowClicked(row){
    console.log('Row clicked: ', row);
    this.ngOnInit();
  }

  DeleteUser(_id) {
    this.as.deleteUser(_id)
      .subscribe(data => {
        if (data.success) {
          this.ngOnInit();
          this.snackBar.open('User has been deleted', '', {duration: 3000});
        } else{
          this.snackBar.open('ERROR', '',{duration:2000} )
        }
      });
    // this.router.navigate(['./admin']);
  }

  updateUser(_id){
    // this.as.updateUser(_id)
    //   .subscribe(data => {
    //     console.log(data);
    //     if(data.success){
    //       this.snackBar.open('User Updated', '', {duration: 3000});
    //       console.log(_id)
    //     }
    //   });
    console.log(_id);
    this.dialog.open(EditUserComponent, {width: '500px'});
    this.ngOnInit();
  }

}
