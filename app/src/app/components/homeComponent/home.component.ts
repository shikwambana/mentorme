/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router';

import { ModelMethods } from '../../lib/model.methods';
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import { NDataModelService, NLogoutService } from 'neutrinos-seed-services';
import { metadataService } from '../../services/metadata/metadata.service';
import { MatDialog } from '@angular/material';

@Component({
    selector: 'bh-home',
    templateUrl: './home.template.html'
})

export class homeComponent extends NBaseComponent implements OnInit {
    mm: ModelMethods;
    user;
    menu;
    actionBtn = "add"
    showMenu = false;
    @ViewChild('toggleButton') toggleButton: ElementRef;
    @ViewChild('body') body: ElementRef;
    navigation = [
        {
            "icon": "event",
            "text": "Add Activity",
            "route": "log"
        },
        {
            "icon": "person_add",
            "text": "Invite Mentee",
            "route": "invite"
        },
        {
            "icon": "mode_comment",
            "text": "Text Mentee",
            "route": "broadcast"
        },
        {
            "icon": "plus_one",
            "text": "Add Goal",
            "route": "personalgoal"
        }
    ]

    constructor(private bdms: NDataModelService,
        private logoutService: NLogoutService,
        private router: Router,
        private metadata: metadataService,
        private activatedRoute: ActivatedRoute,
        private dialog: MatDialog,
        // private renderer: Renderer2
        ) {
        super();
        this.mm = new ModelMethods(bdms);
        // this.renderer.listen('window', 'click', (e: Event) => {

            // if (e.target !== this.toggleButton.nativeElement) {
            //     if(this.showMenu) {
            //         this.showMenu = false;
            //         this.actionBtn = "add";
            //         this.body.nativeElement.style.backgroundColor = "rgb(82, 82, 82) !important;"
            //     }
            // }
        // });
    }
    mentor: boolean;

    ngOnInit() {
        this.dialog.closeAll();

        this.metadata.getData();

        this.metadata.getMenu().subscribe(result => {
            this.menu = result;
            this.menu = this.menu.navbar.mentor;
        });
    }

    goto(nav){
        console.log(nav)
        this.router.navigate(['home/'+nav.route]);
        this.openMenu()
    }

    openMenu() {
        if (this.showMenu) {
            this.showMenu = false;
            this.actionBtn = "add";

        } else {
            this.showMenu = true;
            this.actionBtn = "clear";

        }


    }


    logoutUser() {
        this.logoutService.logout();
        this.router.navigate(['/login']);
    }

    get(dataModelName, filter?, keys?, sort?, pagenumber?, pagesize?) {
        this.mm.get(dataModelName, filter, keys, sort, pagenumber, pagesize,
            result => {
                // On Success code here
                this.metadata.storePersonLocally(result[0]);
            },
            error => {
                // Handle errors here
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
            }, error => {
                // Handle errors here
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
