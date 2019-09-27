import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ToshareService {

  constructor(@Inject (HttpClient) public ht) { }

  serLogin() {
     return this.ht.get('auth/linkedin');
  }
}
