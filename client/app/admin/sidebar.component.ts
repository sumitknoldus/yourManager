import {Component,Input, OnInit, Renderer, ElementRef, ViewChild,
  trigger,
  state,
  style,
  transition,
  animate} from '@angular/core';
import { Router } from '@angular/router';
import {User} from '../shared/model/user';

@Component({
    moduleId:module.id,
    selector: 'ym-sidebar-shared',
    templateUrl:'sidebar.component.html',
    styleUrls: ['header.css'],
    animations: [
        trigger('heroState', [
            state('inactive', style({
                backgroundColor: '#eee',
                transform: 'scale(1)'
            })),
            state('active',   style({
                backgroundColor: '#cfd8dc',
                transform: 'scale(1.1)'
            })),
            transition('inactive => active', animate('100ms ease-in')),
            transition('active => inactive', animate('100ms ease-out'))
        ])
    ]
})

export class SidebarComponent implements OnInit {

    l1 = 'inactive';
    l2 = 'inactive';
    l3 = 'inactive';
    l4 = 'inactive';
    l5 = 'inactive';

    @ViewChild('a1', '') a1: ElementRef;
    @ViewChild('a2', '') a2: ElementRef;
    @ViewChild('a3', '') a3: ElementRef;
    @ViewChild('a4', '') a4: ElementRef;
    @ViewChild('a5', '') a5: ElementRef;

    show: boolean = true;
    showSidebar: boolean = true;
    search = {value:''};
    @Input
    user = new User();
    constructor(private router: Router, private el: ElementRef, private renderer: Renderer) {};

    ngOnInit() {
        let role = JSON.parse(localStorage.getItem('user')).role;

        if (role === 'user') {
            this.showSidebar = false;
        }
    }

    searchAsset() {
        let val = this.search.value;
        this.search.value = '';
        this.listByEmpId(val);
    }

    setStyle(element: string) {
        this.renderer.setElementStyle(this.a1.nativeElement, 'backgroundColor', '#2d2d2d');
        this.renderer.setElementStyle(this.a2.nativeElement, 'backgroundColor', '#2d2d2d');
        this.renderer.setElementStyle(this.a3.nativeElement, 'backgroundColor', '#2d2d2d');
        this.renderer.setElementStyle(this.a5.nativeElement, 'backgroundColor', '#2d2d2d');
        this.renderer.setElementStyle(this.a4.nativeElement, 'backgroundColor', '#2d2d2d');
        this.applyStyle(element);
    }


    applyStyle(element : string) {
        switch(element) {
            case 'a1' :
                this.l1 = 'active';
                this.l2 = 'inactive';
                this.l3 = 'inactive';
                this.l4 = 'inactive';
                this.l5 = 'inactive';
                this.renderer.setElementStyle(this.a1.nativeElement, 'backgroundColor', '#26A69A');
                break;
            case 'a2' :
                this.l1 = 'inactive';
                this.l2 = 'active';
                this.l3 = 'inactive';
                this.l4 = 'inactive';
                this.l5 = 'inactive';
                this.renderer.setElementStyle(this.a2.nativeElement, 'backgroundColor', '#26A69A');
                break;
            case 'a3' :
                this.l1 = 'inactive';
                this.l2 = 'inactive';
                this.l3 = 'active';
                this.l4 = 'inactive';
                this.l5 = 'inactive';
                this.renderer.setElementStyle(this.a3.nativeElement, 'backgroundColor', '#26A69A');
                break;
            case 'a4' :
                this.l1 = 'inactive';
                this.l2 = 'inactive';
                this.l3 = 'inactive';
                this.l4 = 'active';
                this.l5 = 'inactive';
                this.renderer.setElementStyle(this.a4.nativeElement, 'backgroundColor', '#26A69A');
                break;
            case 'a5' :
                this.l1 = 'inactive';
                this.l2 = 'inactive';
                this.l3 = 'inactive';
                this.l4 = 'inactive';
                this.l5 = 'active';
                this.renderer.setElementStyle(this.a5.nativeElement, 'backgroundColor', '#26A69A');
                break;
            }

    }

    listByEmpId(empId:string) {
        this.router.navigate(['/admin/admin',empId]);
    }
}
