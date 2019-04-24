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
    person: any;
    myheaders: HttpHeaders;
    token: any;
    urlBmodeller: any;
    appProperties: any;
    systemService = NSystemService.getInstance();


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

        this.token = this.tokenService.getToken();
        let user = this.getUserObj();

        let headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.token
        });
        let options = { headers: headers};

        let data = {
            'user': user,
            'token': this.token
        }

         return this.http.post(this.urlBmodeller + '/getData', data, options).subscribe(res => {
            console.log(res[0]);
                
            this.storePersonLocally(res[0]);
            // this.commService.alertsnackbar('Got your data', 'close');
            // this.router.navigate(['login']);


        },
        err => {
            console.log(err, " Did not get data Failed");
            this.commService.alertsnackbar('Could not get data', 'close');


        }
        )


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
        

        // if(this.person.mentoring.mentees.length > 0){
        //     console.log('mentor')
        // }   
        // if(!this.person.mentoring.mentees){
        //     console.log('mentee')
        // }

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


}
