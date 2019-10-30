import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
@Injectable()
export class ApiProvider {
 
  constructor(public http: HttpClient) { }
 
  getItems() {
    return this.http.get('https://fleetmanagementservice.herokuapp.com/api/geolocations')
  }
}