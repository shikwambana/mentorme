/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NSystemService, NSessionStorageService } from 'neutrinos-seed-services';
// import { commonService } from "../common/common.service";
import { of } from 'rxjs/observable/of';
import { tap, catchError } from 'rxjs/operators';

@Injectable()
export class registerService {

    systemService = NSystemService.getInstance();
    // appProperties;
    accessToken;
    token;
    // registerUrl;
    // emailRegister;
    myheaders;

    url = "http://localhost:3000/bhive-art/mentorme/auth/mentorme/register";
    urlBmodeller = 'http://127.0.0.1:24483/api';
    
    

    constructor(private http: HttpClient, private sessionStorage: NSessionStorageService, ) {
        // this.appProperties = this.systemService.getVal('properties');
        // console.log(this.appProperties);
        // this.registerUrl = this.appProperties.registerUrl;
        // this.bModellerURL = this.appProperties.modellerUrl + '/register';
        this.myheaders = new HttpHeaders();
    }


    getToken() {

        return new Promise((resolve, reject) => { 

            // let myheaders = new Headers();
            this.myheaders.append('Content-Type', "application/json");
            let body = {
                "username": "neutrinosadmin@neutrinos.co", "password": "Neutrinos13579!#%&(", "uuid": "asdhhhsadasdasd",
                "platformDetails": {
                    "browser": "Chrome",
                    "browserVersion": "70.0.3538.110",
                    "platform": "Windows",
                    "platformVersion": "10",
                    "type": "browser",
                    "uuid": "asdhhhsadasdasd"
                }
            }

            return this.http
            .post('http://localhost:3000/bhive-art/mentorme/auth/mentorme', body, this.myheaders)
            .subscribe(res => {
                console.log("Got the token", res);
                this.accessToken = res;
                console.log('got token?', this.accessToken.accessToken);
                this.token = this.accessToken.accessToken;
                console.log('token', this.token);
                return resolve(res); 
            }, err => {
                console.log(" Token generation failed", err);
            });
                                   
            }
            
        );

    }

    register(person) {

       let headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.token });
       let options = { headers: headers };
        console.log(this.token);
        
        return this.http.put(this.url, person, options).subscribe(res => {
            console.log(res, " Successfully registered");

            // this.http.post(this.urlBmodeller + '/register', person).subscribe(res => {
            //     console.log("Sent to B modeller");
            // }, err => {
            //     console.log(err, "Could not run B Modeller");
            // });

        }, err => {
            console.log(err, " Registration Failed");
        })
    }

   

}

