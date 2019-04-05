/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
// import { BDataModelService } from '../service/bDataModel.service';
import { NDataModelService, NSessionStorageService } from 'neutrinos-seed-services';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { person } from '../../models/person.model';
import { registerService } from '../../services/register/register.service';
import uid from 'tiny-uid';

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

    // Tukiso member variables
    person: person;
    uid: string;
    constructor(private bdms: NDataModelService, private registerService: registerService, private session: NSessionStorageService) {
        super();
        this.mm = new ModelMethods(bdms);
    }

    ngOnInit() {
        
        //Get token
    //    this.registerService.getToken().then(result => {
    //      this.accessToken = result;  
    //      console.log('it works ',this.accessToken);
    //    }, error => {
    //        console.log(error, 'could not get token');
    //    });        
        // this.get('invites');
        this.person = new person();
        this.uid = uid();
    }

    register() {
        this.person.personal_info.userKey = this.uid;
        console.log(this.person.personal_info)
        let user = {
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

        this.checkMentor(this.person.contact_details.email_address);

        if(this.registerService.register(user, this.person)){
            // this.put('person',this.person);
        }
    }

    checkMentor(user) {

        this.mentor = this.possibleMentees.find(val => val.email_address == user);
        if (this.mentor) {
            delete this.mentor._id;
            console.log(this.mentor);

            this.person.mentoring.mentors.push(this.mentor);
        } else {
            this.person.personal_info.userKey = uid(7);
        }
    }


    get(dataModelName, filter?, keys?, sort?, pagenumber?, pagesize?) {
        this.mm.get(dataModelName, filter, keys, sort, pagenumber, pagesize,
            result => {
                // On Success code here
                this.possibleMentees = result;
                // console.log(this.possibleMentees);
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
            }, error => {
                // Handle errors here
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
                // On Success code here
            }, error => {
                // Handle errors here
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
