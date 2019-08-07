/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { goalsService } from '../goals/goals.service'
import { mentorService } from '../mentor/mentor.service'
import { tokenService } from '../../services/token/token.service';
import { commonService } from "../../services/common/common.service";
import { NSystemService } from 'neutrinos-seed-services';
import { person } from '../../models/person.model';

@Injectable()
export class metadataService {

    url = 'http://localhost:24483/api/';

    user;
    // person: any;
    myheaders: HttpHeaders;
    token: any;
    urlBmodeller: any;
    appProperties: any;
    systemService = NSystemService.getInstance();
    person;
    //        {
    //     "_id": "5d45fe11b3a6e5437c0cccb9",
    //     "personal_info": {
    //         "name": "lol",
    //         "surname": "haha",
    //         "date_of_birth": "2019-08-05T22:00:00.000Z",
    //         "date_of_joining": "2019-08-03T21:35:07.903Z",
    //         "userKey": "jvzbr59"
    //     },
    //     "contact_details": {
    //         "email_address": "alphie@unswerve.tech"
    //     },
    //     "mentoring": {
    //         "mentors": [],
    //         "mentees": [
    //             {
    //                 "full_name": "JT Mahlangu",
    //                 "email_address": "alphabase27@gmail.com",
    //                 "start_date": "2019-08-05T07:29:16.937Z",
    //                 "end_date": "2019-08-05T07:29:16.937Z"
    //             },
    //             {
    //                 "full_name": "Hope is Alive",
    //                 "email_address": "alphabase27@gmail.com",
    //                 "start_date": "2019-08-05T07:35:23.224Z",
    //                 "end_date": "2019-08-05T07:35:23.224Z"
    //             }
    //         ],
    //         "potential": []
    //     },
    //     "goals": [
    //         {
    //             "author": "lol haha",
    //             "author_email": "alphie@unswerve.tech",
    //             "title": "finish the app",
    //             "category": "Psychologial",
    //             "description": "no description needed",
    //             "start_date": "2019-08-06T22:00:00.000Z",
    //             "comments": [],
    //             "status": "In Progress",
    //             "note": "not at all",
    //             "end_date": "2019-08-07T22:00:00.000Z"
    //         },
    //         {
    //             "author": "lol haha",
    //             "author_email": "alphie@unswerve.tech",
    //             "title": "Meet Tshifhiwa",
    //             "category": "Psychologial",
    //             "description": "no description needed",
    //             "start_date": "2019-08-17T22:00:00.000Z",
    //             "comments": [],
    //             "status": "In Progress",
    //             "note": "not at all",
    //             "end_date": "2019-08-07T22:00:00.000Z"
    //         },
    //         {
    //             "author": "sing",
    //             "author_email": "alphie@unswerve.tech",
    //             "title": "finish the app",
    //             "category": "Psychologial",
    //             "description": "no description needed",
    //             "start_date": "2019-08-16T22:00:00.000Z",
    //             "comments": [],
    //             "status": "In Progress",
    //             "note": "not at all",
    //             "end_date": "2019-08-07T22:00:00.000Z"
    //         },
    //         {
    //             "author": "lol haha",
    //             "author_email": "alphie@unswerve.tech",
    //             "title": "laugh",
    //             "category": "Psychologial",
    //             "description": "no description needed",
    //             "start_date": "2019-08-06T22:00:00.000Z",
    //             "comments": [],
    //             "status": "In Progress",
    //             "note": "not at all",
    //             "end_date": "2019-08-07T22:00:00.000Z"
    //         }
            
    //     ],
    //     "activity_log": []
    // }


    constructor(private http: HttpClient,
        private goalsService: goalsService,
        private mentorService: mentorService,
        private tokenService: tokenService,
        private commService: commonService, ) {
        this.appProperties = this.systemService.getVal('properties');
        this.myheaders = new HttpHeaders();
        this.urlBmodeller = this.appProperties.modellerUrl;

    }
    //categories for goals
    categories = [
        { 'name': 'Spiritual' },
        { 'name': 'Mental' },
        { 'name': 'Physical' },
        { 'name': 'Psychologial' },
        { 'name': 'Emotional' }
    ];

    //list of mentees
    mentees;
    //menu for mentor, displayed at the bottom nav bar
    menu = [
        {
            'icon': 'track_changes',
            'name': 'Goals',
            'url': 'goals'
        },
        {
            'icon': 'dashboard',
            'name': 'Activity Feed',
            'url': 'feed'
        },
        {
            'icon': 'people_outline',
            'name': 'Mentees List',
            'url': 'mentees'
        }
    ]


    //get person data from database
    getData() {

        let user = this.getUserObj();
        if(user){
            this.token = sessionStorage.getItem('accessToken');
        }else{
            this.token = this.tokenService.getToken();
        }

        let headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.token
        });
        let options = { headers: headers };

        let data = {
            'user': user,
            'token': this.token
        }

        return new Promise((resolve, reject) => {
            this.http.post(this.urlBmodeller + '/getData', data, options).toPromise().then(res => {
                console.log('hahahaha   ', res);
                this.storePersonLocally(res[0]);
                resolve(res);
            }, err => {
                reject(err);
            });
        });
    }


    //return goal categories
    getCategory() {
        return this.categories;
    }

    //return mentees array from person object
    getMentees() {
        return this.mentorService.menteeList();
    }

    //get menu from b modeller
    getMenu() {

        return this.http.get(this.url + '/menu', {
            responseType: 'json'
        });
    }

    //get user object from session storage
    getUserObj() {
        this.user = JSON.parse(sessionStorage.getItem('userObj'));
        return this.user;
        //   console.log(this.user);
    }

    //after getting the person document, store it in a local variable 
    //this.person is where the current users info will all be found
    storePersonLocally(person_document) {
        this.person = person_document;

        if (this.person.mentoring.mentees) {
            let mentees = [];

            for (let i = 0; i < this.person.mentoring.mentees.length; i++) {
                mentees.push(this.person.mentoring.mentees[i].email_address);
            }
            this.mentorService.getMentees(mentees);
        }
        this.setGoals(this.person.goals);

    }

    //return person object
    getPerson() {
        return this.person;
    }

    //return session storage user object
    getUserInfo() {
        return this.user;
    }

    //send goals to goalsService to be displayed in goal component 
    setGoals(goals) {
        this.goalsService.setSessionGoals(goals);
    }

    getGoals() {
         return this.person.goals;
    }

    //get the different data
    getMetaData(data) {
        return this.person[data];
    }

}
