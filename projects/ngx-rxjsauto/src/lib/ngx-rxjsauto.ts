import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export function rxAuto<T>(baseUrl: string, http: HttpClient) {
  const url = baseUrl;
  return {
    getHttp(params?: Record<string, any>): Observable<T> {
      let httpParams = new HttpParams();
      if (!params) {
        return http.get<T>(url);
      }
      Object.keys(params).forEach((key) => {
        if (params[key] || params[key] == 0) {
          httpParams = httpParams.append(key, params[key]);
          console.log('hello');
        }
      });
      return http.get<T>(url, { params: httpParams });
    },
    postHttp(data: T): Observable<T> {
      return http.post<T>(url, data);
    },
    putHttp(data: T): Observable<T> {
      return http.put<T>(url, data);
    },
  };
}
