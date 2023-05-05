import { Component } from '@angular/core';
import { VerbService } from '../verb.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  currenttime!:Date
  constructor(private user:VerbService){
    user.ShowDate().subscribe(res=>
      this.currenttime=res
      )
  }
  
   
}
