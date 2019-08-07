/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NSystemService, NSnackbarService } from 'neutrinos-seed-services';
import { tokenService } from '../../services/token/token.service';
import { commonService } from "../../services/common/common.service";
import { Router } from '@angular/router';
// import { resolve } from 'path';
// import { reject } from 'q';


@Injectable()
export class registerService {

    systemService = NSystemService.getInstance();
    appProperties;
    accessToken;
    token;
    // registerUrl;
    // emailRegister;
    myheaders: HttpHeaders;
    res;

    url = "http://localhost:3000/bhive-art/mentorme/auth/mentorme/register";
    urlBmodeller: string;
    // urlBmodeller = 'http://127.0.0.1:24483/api';



    constructor(private http: HttpClient,
        private tokenService: tokenService,
        private snackBarService: NSnackbarService,
        private commService: commonService,
        private router: Router) {
        this.appProperties = this.systemService.getVal('properties');
        // console.log(this.appProperties);
        // this.registerUrl = this.appProperties.registerUrl;
        this.urlBmodeller = this.appProperties.modellerUrl;
        this.myheaders = new HttpHeaders();
    }

    //no longer in use
    // getToken() {

    //     return new Promise((resolve, reject) => {

    //         // let myheaders = new Headers();
    //         this.myheaders.append('Content-Type', "application/json");
    //         let body = {
    //             "username": "neutrinosadmin@neutrinos.co", "password": "Neutrinos13579!#%&(", "uuid": "asdhhhsadasdasd",
    //             "platformDetails": {
    //                 "browser": "Chrome",
    //                 "browserVersion": "70.0.3538.110",
    //                 "platform": "Windows",
    //                 "platformVersion": "10",
    //                 "type": "browser",
    //                 "uuid": "asdhhhsadasdasd"
    //             }
    //         }

    //         return this.http
    //             .post('http://localhost:3000/bhive-art/mentorme/auth/mentorme', body, this.myheaders)
    //             .subscribe(res => {
    //                 console.log("Got the token from register services", res);
    //                 this.accessToken = res;
    //                 console.log('got token?', this.accessToken.accessToken);
    //                 this.token = this.accessToken.accessToken;
    //                 console.log('token', this.token);
    //                 return resolve(res);
    //             }, err => {
    //                 console.log(" Token generation failed", err);
    //             });

    //     }

    //     );

    // }

    checkEmail(email) {

      return new Promise((resolve,reject) => {
            this.tokenService.getNewToken().then(res => {
                let data = {
                    'email': email,
                    'token': res
                }

                this.http.post(this.urlBmodeller + '/checkEmail', data).subscribe(res => {
                    // this.commService.alertsnackbar('Successfully registered', 'close');
                    console.log(res, "email checked");
                    this.res = res;
                    if (this.res.length == 0) {
                        console.log(res)
                        return resolve(false);
                    } else {
                        return resolve(true);
                    }
                }, err => {
                    console.log(err, "cannot check the email");
                    this.commService.alertsnackbar('Registration Failed', 'close');

                })

            })
        })
    }

    register(user, person) {

        this.tokenService.getNewToken().then(res => {

            this.token = res;

            let headers = new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.token
            });
            let options = { headers: headers };

            let data = {
                'user': user,
                'person': person,
                'token': this.token
            }

            return this.http.post(this.urlBmodeller + '/registerUser', data, options).subscribe(res => {
                this.commService.alertsnackbar('Successfully registered', 'close');
                this.router.navigate(['login']);


            }, err => {
                console.log(err, " Registration Failed");
                this.commService.alertsnackbar('Registration Failed', 'close');


            })

        });

    }

    checkMentor(details) {
        //check if there is a mentor assigned to person
        //add mentor to object


        return new Promise((resolve, reject) => {

            return this.http.post(this.urlBmodeller + '/checkMentor', details).subscribe(res => {



                console.log(res);
            }, err => {
                console.log(err);
            })

        })

        console.log('checking for mentors...')
        // this.mentor = this.possibleMentees.find(val => val.email_address == user);

        // //if mentor is there, contstruct object and push
        // if (this.mentor) {
        //     console.log(this.mentor);

        //     //mentor info
        //     let mentorInfo = {
        //         'full_name' : this.mentor.mentorName,
        //         'email_address' : this.mentor.mentor,
        //         'start_date' : new Date(),
        //         'end_date' : new Date()
        //     }

        //     //mentee info
        //     let menteeInfo = {
        //         'full_name' : this.person.personal_info.name + " " + this.person.personal_info.surname,
        //         'email_address' : this.person.contact_details.email_address,
        //         'start_date' : new Date(),
        //         'end_date' : new Date()
        //     }

        //     //add mentee to mentor's person document
        //     this.update('person',{ $push: {'mentoring.mentees' : menteeInfo }},{'contact_details.email_address' : this.mentor.mentor},{})

        //     //add mentor to mentee's person document
        //     this.person.mentoring.mentors.push(mentorInfo);

        //    }
    }


}

