import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class VerbService {

  constructor(private http: HttpClient) { }

  
ShowDate():Observable<Date>
{
  return new Observable(obs=>{
    setInterval(()=>obs.next(new Date()))
  })

}
}
