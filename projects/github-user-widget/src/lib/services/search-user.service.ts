import { User } from './../interfaces/user.interface';
import { Injectable } from '@angular/core';
import * as api from '@mugan86/api-git-user';
/**
 * Service to take Github select user data in API
 */
@Injectable({
  providedIn: 'root'
})
export class SearchUserService {
  /**
   * Take select user in Github API
   * @param respuesta User to search in Github Api
   */
  takeApiData(respuesta: string): Promise<any>  {
    return new Promise(function (resolve: any) {
      api.getUsuario(respuesta)
          .then(
            (data: User) => {
              if (data.login === undefined) {
                console.log('no data');
              } else {
                console.log(data);
              }
              resolve(data);
            }
          ).
          catch((error: any) => {
            resolve(error);
          });
    });
  }
}
