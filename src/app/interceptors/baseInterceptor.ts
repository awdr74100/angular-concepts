import { HttpRequest, HttpInterceptorFn, HttpHandlerFn, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@/environments/environment';

export const baseInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn,
): Observable<HttpEvent<unknown>> => {
  console.log(req.url.startsWith('/'));
  if (req.url.startsWith('/')) {
    const baseUrl = environment.apiUrl.replace(/\/+$/, '');

    console.log(baseUrl);
    console.log(req.url);
    console.log(baseUrl + req.url);

    const clonedReq = req.clone({
      url: baseUrl + req.url,
    });

    return next(clonedReq);
  } else {
    return next(req);
  }
};
