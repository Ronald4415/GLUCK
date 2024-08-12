import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ImgService {
  private apiUrl = 'tu_api_de_backend';

  constructor(private http: HttpClient) { }

  uploadImageData(data: { name: string, description: string, image: string }): Observable<any> {
    // Ajusta la URL y el formato de la solicitud según tu API
    const uploadUrl = `${this.apiUrl}/upload`;
    return this.http.post(uploadUrl, data);
  }
}
