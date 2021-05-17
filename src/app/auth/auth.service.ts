import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  register(_data) {
    const data = _data;
    delete data.confirmPassword;
    return this.httpClient.post('/api/auth/register', data);
  }

  login(data) {
    return this.httpClient
      .post<{ accessToken }>('/api/auth/login', data)
      .pipe(
        map(({ accessToken }) => {
          localStorage.setItem('access-token', accessToken);
        }),
      );
  }
}
