import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod'
import { Observable } from 'rxjs';
import { filter, map, catchError } from 'rxjs/operators';
import { url } from 'inspector';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private http: HttpClient) { }
  getCall(){
    return this.http.get(environment.apiUrl);
  }
}
