/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class metadataService {

    url = 'http://localhost:24483/api/';

    user;

     constructor(private http: HttpClient){}
    //categories for goals
    categories = [
        {'name' : 'Spiritual'}, 
        { 'name' : 'Mental'}, 
        { 'name' : 'Physical'}, 
        { 'name' : 'Psychologial'}, 
        { 'name' : 'Emotional'} 
    ];

    //list of mentees
    mentees = [
        {
            'name' : 'Lesego Matsobane',
            'LatestGoal' : 'Get 5 mentees',
            'latestComment' : 'I got 3 mentors so far',
            'date_of_joining' : '22 April 2017',
            'phone_number' : '076327812'
        },
         {
            'name' : 'Jacket Nyambo',
            'LatestGoal' : 'Do devotion everyday this week',
            'latestComment' : 'I forgot to do it today',
            'date_of_joining' : '18 January 2016',
            'phone_number' : '076327812'
        },
         {
            'name' : 'Andrea Nyambo',
            'LatestGoal' : 'Stay confident throughout the day',
            'latestComment' : 'I made post it notes to remind me',
            'date_of_joining' : '2 March 2018',
            'phone_number' : '076327812'
        },
         {
            'name' : 'Sipho Dibakoane',
            'LatestGoal' : 'Stay focused on one task',
            'latestComment' : 'I am working on an assignment',
            'date_of_joining' : '2 March 2018',
            'phone_number' : '076327812'
        },
         {
            'name' : 'Vuyo Shabangu',
            'LatestGoal' : 'Start outreaching',
            'latestComment' : 'I start on friday',
            'date_of_joining' : '2 March 2018',
            'phone_number' : '076327812'
        }];

    //menu for mentor, displayed at the bottom nav bar
    menu = [
        {
            'icon' : 'track_changes',
            'name' : 'Goals',
            'url' : 'goals'
        },
        {
            'icon' : 'dashboard',
            'name' : 'Activity Feed',
            'url' : 'feed'
        },
        {
            'icon' : 'people_outline',
            'name' : 'Mentees List',
            'url' : 'mentees'
        }
    ]

    category() {
        return this.categories;
    }

    getMentees() {
        // console.log('getting mentees');
        return this.mentees;

    }

    getMenu() {
        return this.http.get(this.url + '/menu', {
            responseType: 'json'
        });
    }

    getUserObj(){
      this.user =  JSON.parse(sessionStorage.getItem('userObj'));
      return this.user;
    //   console.log(this.user);
    }

    getUserInfo(){
        return this.user;
    }
}
