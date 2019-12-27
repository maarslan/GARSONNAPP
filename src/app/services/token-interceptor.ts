import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpRequest, HttpHandler } from '@angular/common/http';
import { TokenService } from './token.service';
import { Observable } from 'rxjs';
import { from } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor(private tokenService: TokenService) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return from(this.tokenService.GetToken()).pipe(switchMap(token => {
            const headersConfig = {
                'Content-type': 'application/json',
                Accept: 'application/json'
            };

            if (token) {

                // tslint:disable-next-line: no-string-literal
                headersConfig['Authorization'] = token;
            }
            // tslint:disable-next-line: variable-name
            const _req = req.clone({ setHeaders: headersConfig });
            return next.handle(_req);

        })
        );
    }
}
