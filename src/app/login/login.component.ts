import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }


 public Rout():void{
    this.router.navigate(["home"]);
  }

<<<<<<< HEAD
  user_login()
  {
    this.router.navigate(['/EditProduct']);
  }


=======
>>>>>>> 3da60c47e4ab20863858b53c20f0e67a1f5bf17a
}
