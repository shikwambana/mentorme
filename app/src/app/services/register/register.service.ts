/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NSystemService, NSessionStorageService } from 'neutrinos-seed-services';
// import { commonService } from "../common/common.service";

@Injectable()
export class registerService {

    systemService = NSystemService.getInstance();
    // appProperties;
    // accessToken;
    // registerUrl;
    // emailRegister;

    url = "http://localhost:3000/bhive-art/mentorme/auth/mentorme/register";
    urlBmodeller = 'http://127.0.0.1:24483/api';


    constructor(private http: HttpClient, private sessionStorage: NSessionStorageService, ) {
        // this.appProperties = this.systemService.getVal('properties');
        // console.log(this.appProperties);
        // this.registerUrl = this.appProperties.registerUrl;
        // this.bModellerURL = this.appProperties.modellerUrl + '/register';

    }


    getToken() {

        let myheaders = new Headers();
        myheaders.append('Content-Type', "application/json");
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

        this.http.post('http://localhost:3000/bhive-art/mentorme/auth/mentorme', body, { myheaders: Headers }).subscribe(res => {
            console.log("Get token", res);
        }, err => {
            console.log(" Token generation failed", err);
        });
    }


    register(person, pwd, headers) {
        console.log('Service called');

        return this.http.put(this.url, person, { headers: headers }).subscribe(res => {
            console.log(res, " Successfully registered");

            this.http.post(this.urlBmodeller + '/register', person).subscribe(res => {
                console.log("Sent to B modeller");
            }, err => {
                console.log(err, " Registration Failed");
            });

        }, err => {
            console.log(err, " Registration Failed");
        })
    }


}
