import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AppStoreService {

  constructor(private http: HttpClient) { }

  loadAppStore(): Observable<any> {
    return this.http.get('https://api.com');
  }
}
