/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
import { Injectable } from '@angular/core';
import { NSystemService, NSessionStorageService } from 'neutrinos-seed-services';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { reject } from 'q';

@Injectable()
export class tokenService {

    systemService = NSystemService.getInstance();
    appProperties: any;
    bModellerURL: string;
    token;

    constructor(private http: HttpClient, private session: NSessionStorageService) {
        this.appProperties = this.systemService.getVal('properties');
        this.bModellerURL = this.appProperties.modellerUrl + '/token';

    }

    getNewToken() {
        return new Promise((resolve, reject) => {

            this.http.post(this.bModellerURL, {}).subscribe(result => {
                this.token = result;
                this.session.setValue('accessToken', this.token.accessToken);
                this.session.setValue("refreshToken", this.token.refreshToken);

                console.log('got token from token service', this.token);
                return resolve(this.token.accessToken);

            },
                error => {
                    console.log('failed to get token', error)
                    return reject(error)
                });

            

        })
    }

    getToken() {

        if (!this.token) {
            this.token = sessionStorage.getItem('accessToken');
        }
        return this.token;
    }
}
