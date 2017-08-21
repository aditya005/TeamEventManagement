import { Component } from '@angular/core';
import { Service } from '../Service/json.service';
@Component({
    moduleId: module.id,
    selector: 'user',
    templateUrl: `user.html`,
    providers: [Service]
})
export class UserComponent {
    name: string;
    email = 'raju.user@gmail.com';
    address: address;
    hobbies: string[];
    showhobbies: boolean;
    posts: Posts[];
    constructor(private postsService: Service) {
        this.name = 'Somu';
        this.address = {
            street: '178',
            city: 'Piscataway',
            state: 'NJ'
        };
        this.hobbies = ['Dance', 'Singing'];
        this.showhobbies = false;
        this.postsService.getposts().subscribe(
            posts => {
                this.posts = posts;
            });
    }
    toggle() {
        if (this.showhobbies == true)
        { this.showhobbies = false; }
        else { this.showhobbies = true; }
    }
    Add(value: string) {
        this.hobbies.push(value);
    }
    Del(i: any) {
        this.hobbies.splice(i, 1);
    }
}
interface Posts {
    id: number;
    title: string;
    body: string;
}
interface address {
    street: string;
    city: string;
    state: string;
}