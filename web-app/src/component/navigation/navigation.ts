// Libraries
import {Component}         from '@angular/core';


@Component({
    selector    : 'navigation',
    templateUrl : './navigation.html',
})
export class NavigationComponent { 
    public isCollapsed: boolean = true;
}