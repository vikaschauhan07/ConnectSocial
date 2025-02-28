import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
// import { LoaderService } from '../Modules/main/Services/loader.service';
import { finalize } from 'rxjs';

export const coreInterceptor: HttpInterceptorFn = (req, next) => {
  // const loaderService = inject(LoaderService);
  // loaderService.showLoader();
  const authorizedRequest = req.clone({
    setHeaders: {
      Authorization: `Bearer ${sessionStorage.getItem('access-token')}`,
      'ngrok-skip-browser-warning': '69420',
    },
  });
  return next(authorizedRequest).pipe(
    finalize(() => {
      // loaderService.hideLoader();
    })
  );
};
