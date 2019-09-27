import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToshareService } from '../toshare.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private rt: Router, private ser: ToshareService) {}


 login(){
   this.ser.serLogin().subscribe(data=>{
     
   })
 }

  ngOnInit() {
  }

}
