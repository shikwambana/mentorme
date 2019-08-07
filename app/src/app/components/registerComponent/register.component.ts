/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService, NSessionStorageService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { person } from '../../models/person.model';
import { registerService } from '../../services/register/register.service';
import { commonService } from "../../services/common/common.service";
import uid from 'tiny-uid';
import { FormBuilder } from '@angular/forms';
import { loaderComponent } from '../loaderComponent/loader.component';
import { MatDialog } from '@angular/material';
import { tokenService } from '../../services/token/token.service';
import { Router } from '@angular/router';


@Component({
    selector: 'bh-register',
    templateUrl: './register.template.html'
})

export class registerComponent extends NBaseComponent implements OnInit {
    mm: ModelMethods;
    date = new Date();
    possibleMentees = [];
    mentor;
    pwd;
    pwd2;
    emailCheck = false;
    alreadyRegistered = false;
    goLogin = false;
    canRegister = false;
    token;
    person: person;
    uid: string;
    user: { "userKey": string; "firstName": string; "lastName": string; "username": string; "displayName": string; "password": any; "groupList": string[]; };
    constructor(private bdms: NDataModelService,
        private registerService: registerService,
        private session: NSessionStorageService,
        private commService: commonService,
        private fb: FormBuilder,
        private dialog: MatDialog,
        private tokenService: tokenService,
        private router: Router) {
        super();
        this.mm = new ModelMethods(bdms);
    }

    ngOnInit() {
        // this.get('invites');

        this.person = new person();
        this.uid = uid();
    }

    login() {
        this.router.navigate(['/login']);
    }

    openDialog() {
        const dialogRef = this.dialog.open(loaderComponent, {
            data: { message: 'Registering' },
            width: '250px',
            disableClose: true
        });
    }

    checkEmail(email) {
        var emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.goLogin = false;
        this.canRegister = false;
        if (emailPattern.test(email)) {
            this.emailCheck = true
            this.registerService.checkEmail(email).then(res => {
                console.log('got a response', res)
                this.emailCheck = false;
                if (res == true) {
                    this.goLogin = true;
                } else {
                    this.canRegister = true;
                }

            });

        } else {
            console.log('not a valid email')
        }

    }

    register() {

        this.openDialog();
        this.tokenService.getNewToken().then(res => {
            this.person.personal_info.userKey = this.uid;
            this.person.personal_info.date_of_joining = new Date();
            this.user = {
                "userKey": this.person.personal_info.userKey,
                "firstName": this.person.personal_info.name,
                "lastName": this.person.personal_info.surname,
                "username": this.person.contact_details.email_address,
                "displayName": this.person.personal_info.name + " " + this.person.personal_info.surname,
                "password": this.pwd,
                "groupList": [
                    'mentee'
                ]
            }

            this.checkMentor(this.person.contact_details.email_address).then(res => {
                // this.registerService.register(this.user, this.person)
            }

            );
        })

    }

    checkMentor(user: string) {
        //check if there is a mentor assigned to person
        // add mentor to object
        return new Promise((resolve) => {
            return resolve(this.get('invites', { "email_address": user }))
        })


    }


    get(dataModelName, filter?, keys?, sort?, pagenumber?, pagesize?) {
        this.mm.get(dataModelName, filter, keys, sort, pagenumber, pagesize,
            result => {
                // On Success code here
                this.possibleMentees = result;
                console.log('got mentors', result);

                console.log('checking for mentors...')
                // this.mentor = this.possibleMentees.find(val => val.email_address == user);
                //if mentors are there, contstruct object and push

                if (this.possibleMentees) {

                    this.possibleMentees.forEach(mentor => {
                        console.log(mentor);

                        //mentor info
                        let mentorInfo = {
                            'full_name': mentor.mentorName,
                            'email_address': mentor.mentor,
                            'start_date': new Date(),
                            'end_date': new Date()
                        }

                        //mentee info
                        let menteeInfo = {
                            'full_name': this.person.personal_info.name + " " + this.person.personal_info.surname,
                            'email_address': this.person.contact_details.email_address,
                            'start_date': new Date(),
                            'end_date': new Date()
                        }

                        //add mentee to mentor's person document
                        this.update(
                            'person',
                            { $push: { 'mentoring.mentees': menteeInfo } },
                            { 'contact_details.email_address': mentor.mentor },
                            {});

                        console.log("deleting mentor", mentor._id)
                        this.deleteById('invites', mentor._id);
                        //add mentor to mentee's person document
                        this.person.mentoring.mentors.push(mentorInfo);
                        console.log(this.person.mentoring.mentors);

                    });

                }

                this.registerService.register(this.user, this.person)

                return result;
            },
            error => {
                // Handle errors here
                console.log(error);
            });
    }

    getById(dataModelName, dataModelId) {
        this.mm.getById(dataModelName, dataModelId,
            result => {
                // On Success code here
            },
            error => {
                // Handle errors here
            })
    }

    put(dataModelName, dataModelObject) {
        this.mm.put(dataModelName, dataModelObject,
            result => {
                // On Success code here
                // this.registerService.register(this.person);
                console.log(result)
            }, error => {
                // Handle errors here
                console.log(error);

            })
    }

    validatePut(formObj, dataModelName, dataModelObject) {
        this.mm.validatePut(formObj, dataModelName, dataModelObject,
            result => {
                // On Success code here
            }, error => {
                // Handle errors here
            })
    }

    update(dataModelName, update, filter, options) {
        const updateObject = {
            update: update,
            filter: filter,
            options: options
        };
        this.mm.update(dataModelName, updateObject,
            result => {
                //  On Success code here
                console.log('result', result)
            }, error => {
                // Handle errors here
                console.log(error)
            })
    }

    delete(dataModelName, filter) {
        this.mm.delete(dataModelName, filter,
            result => {
                // On Success code here
            }, error => {
                // Handle errors here
            })
    }

    deleteById(dataModelName, dataModelId) {
        this.mm.deleteById(dataModelName, dataModelId,
            result => {
                console.log("deleted mentor", result)
                // On Success code here
            }, error => {
                // Handle errors here
                console.log("failed to delete", error)
            })
    }

    updateById(dataModelName, dataModelId, dataModelObj) {
        this.mm.updateById(dataModelName, dataModelId, dataModelObj,
            result => {
                // On Success code here

            }, error => {
                // Handle errors here
            })
    }


}
