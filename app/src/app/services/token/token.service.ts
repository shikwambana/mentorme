/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
import { Injectable } from '@angular/core';
import { NSystemService, NSessionStorageService } from 'neutrinos-seed-services';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class tokenService {

    systemService = NSystemService.getInstance();
    appProperties: any;
    bModellerURL: string;
    token;

    constructor(private http: HttpClient, private session : NSessionStorageService){
        this.appProperties = this.systemService.getVal('properties');
        this.bModellerURL = this.appProperties.modellerUrl + '/token';
     
    }

    generateToken(){
        if(!this.token){
            this.http.post(this.bModellerURL, {'hi' : 'ola'} ).subscribe(result => {
                this.token = result;
                this.session.setValue('accessToken',this.token.accessToken);
                 console.log('got token from token service');
                 },
                 error => {
                 console.log('failed to get token', error)
             });
        }else{
            console.log('already have token');
            this.session.setValue('accessToken',this.token.accessToken);
        }
       
    }

    getToken(){
        return this.token.accessToken;
    }
}
