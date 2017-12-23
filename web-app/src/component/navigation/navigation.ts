// Libraries
import {Component}         from '@angular/core';


@Component({
    selector    : 'navigation',
    templateUrl : './navigation.html',
    styleUrls: ['./navigation.scss']
})
export class NavigationComponent { 
    public isCollapsed: boolean = true;
}