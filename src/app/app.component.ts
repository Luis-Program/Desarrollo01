import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'desarrollo01';

  constructor(private router: Router){

  }

  private testString(): string{
    return ''
  }

  public routerToLogin(): void{
    this.router.navigate(['/path01']);
  }
  public routerToView(): void{
    this.router.navigate(['/ViewProduct']);
  }
  public routerToCreate(): void{
    this.router.navigate(['/CreateProduct']);
  }
  public routerToEdit(): void{
    this.router.navigate(['/EditProduct']);
  }
  public routerToHome(): void{
    this.router.navigate(['/Home']);
  }
}
