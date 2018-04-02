import { Injectable} from "@angular/core";
import { Router, CanActivate} from "@angular/router";
import { AuthService} from "../services/auth.service";

@Injectable()
export class AuthGuard implements CanActivate{
  constructor(private as:AuthService, private r: Router){

  }

  canActivate(){
    if(this.as.loggedIn()){
      return true;
    }else{
      this.r.navigate(['/login']);
      return false;
    }
  }
}
