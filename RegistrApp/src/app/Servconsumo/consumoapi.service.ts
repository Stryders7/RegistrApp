import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsumoapiService {

  private BASE_URL = 'https://rickandmortyapi.com/api';

  constructor(
    private http : HttpClient
  ) { }
  getPersonajes():Observable<any>{
    return this.http.get(`${this.BASE_URL}/character`);
  }
}
