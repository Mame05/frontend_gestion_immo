import { HttpInterceptorFn } from "@angular/common/http";

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
    //évite d'ajouter le JWT aux routes publiques comme /auth/login et /auth/register
    //On place ce bloc juste avant la récupération du token :
  if (
    req.url.includes('/auth/login') ||
    req.url.includes('/auth/register')
    ) {
  return next(req);
  }
  
  // On récupère ici le token
  const token = localStorage.getItem('token');

  console.log('Interceptor exécuté');
  console.log('Token :', token);

  // Si aucun token, on laisse passer la requête
  if (!token) {
    return next(req);
  }

  // Cloner la requête en ajoutant le JWT
  const clonedRequest = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`
    }
  });

  return next(clonedRequest);
};