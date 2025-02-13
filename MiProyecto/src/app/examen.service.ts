import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExamenService {
  private apiUrl = 'https://zenquotes.io/api/random';

  constructor(private http: HttpClient) {}

  obtenerFrase() {
    return this.http.get(this.apiUrl);
  }
}
