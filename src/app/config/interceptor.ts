import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpErrorResponse, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

@Injectable()
export class Interceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const Authorization = localStorage.getItem("token") ? `Bearer ${localStorage.getItem("token")}` : null;
    const req = request.clone({
      setHeaders: {
        Authorization
      }
    });
    return next.handle(req).pipe(
      tap((e) => {
        console.log(e.type);
      },
      err => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            console.log(err.error.response);
          }
        }
      })
    );
  }
}
