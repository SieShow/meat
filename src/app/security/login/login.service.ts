import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import { MEAT_API } from '../../app.api'

@Injectable()
export class LoginService {

    constructor(private http: HttpClient) {
    }

    login(email: string, password: string): Observable<any> {
        return this.http.post(`${MEAT_API}/login`, { email: email,  })
    }
}
