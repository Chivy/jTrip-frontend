
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../service/authentication.service';

@Injectable()
export class JwtTokenInterceptor implements HttpInterceptor {

    constructor(public auth: AuthenticationService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let interceptedRequest = req.clone(
            {
                setHeaders : {
                    Authorization: `Bearer ${this.auth.getToken()}`
                }
            }
        )
        return next.handle(interceptedRequest);
    }
}