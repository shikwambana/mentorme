import { user } from '../src/app/models/user.model';
import { personal_info } from '../src/app/models/personal_info.model';
import { contact_details } from '../src/app/models/contact_details.model';
import { mentoring } from '../src/app/models/mentoring.model';
import { mentors } from '../src/app/models/mentors.model';
import { mentees } from '../src/app/models/mentees.model';
import { goals } from '../src/app/models/goals.model';
import { activity_log } from '../src/app/models/activity_log.model';
import { comments } from '../src/app/models/comments.model';
import { person } from '../src/app/models/person.model';
import { invites } from '../src/app/models/invites.model';
import { potential } from '../src/app/models/potential.model';
import { resource } from '../src/app/models/resource.model';
//IMPORT NEW DATAMODEL

export class NDataModel {
user: user;
personal_info: personal_info;
contact_details: contact_details;
mentoring: mentoring;
mentors: mentors;
mentees: mentees;
goals: goals;
activity_log: activity_log;
comments: comments;
person: person;
invites: invites;
potential: potential;
resource: resource;
//DECLARE NEW VARIABLE

constructor() {
this.user = new user();
this.personal_info = new personal_info();
this.contact_details = new contact_details();
this.mentoring = new mentoring();
this.mentors = new mentors();
this.mentees = new mentees();
this.goals = new goals();
this.activity_log = new activity_log();
this.comments = new comments();
this.person = new person();
this.invites = new invites();
this.potential = new potential();
this.resource = new resource();
//CREATE NEW DM INSTANCE
    }
}