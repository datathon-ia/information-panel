import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { HttpClient, HttpParams } from '@angular/common/http'
import { environment } from 'src/environments/environment'
import { Accident } from '../interfaces/accident'

@Injectable({
  providedIn: 'root'
})
export class AccidentService {
  constructor(private http: HttpClient) {}

  list(): Observable<Accident[]> {
    return this.http.get(environment.apiBaseUrl + 'accidents').pipe(
      map((res: Accident[]) => {
        return res
      })
    )
  }
}
