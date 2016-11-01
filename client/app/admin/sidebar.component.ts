import {Component,Input, OnInit, Renderer, ElementRef, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import {User} from "../shared/model/user";

@Component({
    moduleId:module.id,
    selector: 'ym-sidebar-shared',
    templateUrl:'sidebar.component.html',
    styleUrls: ['header.css']
})

export class SidebarComponent implements OnInit {

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

        if (role === 'user') this.showSidebar = false
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

        if(element == 'a1') {
            this.renderer.setElementStyle(this.a1.nativeElement, 'backgroundColor', '#26A69A');
        } else if(element == 'a2') {
            this.renderer.setElementStyle(this.a2.nativeElement, 'backgroundColor', '#26A69A');
        } else if(element == 'a3') {
            this.renderer.setElementStyle(this.a3.nativeElement, 'backgroundColor', '#26A69A');
        } else if(element == 'a4') {
            this.renderer.setElementStyle(this.a4.nativeElement, 'backgroundColor', '#26A69A');
        } else if(element == 'a5') {
            this.renderer.setElementStyle(this.a5.nativeElement, 'backgroundColor', '#26A69A');
        }
    }

    listByEmpId(empId:string) {
        this.router.navigate(['/admin/admin',empId]);
    }
}
