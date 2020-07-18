import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpErrorResponse, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

@Injectable()
export class Interceptor implements HttpInterceptor {
  constructor(private _router: Router, private _snackbar: MatSnackBar) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const Authorization = localStorage.getItem("token") ? `Bearer ${localStorage.getItem("token")}` : "";
    const req = request.clone({
      setHeaders: {
        Authorization
      }
    });
    return next.handle(req).pipe(
      tap((e: any) => {
        console.log(e.type, e.body, req.url);
      },
      err => {
        if (err instanceof HttpErrorResponse) {
          console.log(err.error.response || err.error || err.message, req.headers.keys());
          if (err.status === 401) {
            console.log(err.error.response);
            this._snackbar.open(err.error.response, "Ok", {
             duration: 5 * 1000
            });
            setTimeout(() => {
             this._router.navigateByUrl("/login");
            }, 2000);
          }
        }
      })
    );
  }
}
