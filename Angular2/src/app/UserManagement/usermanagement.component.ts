import { Component, OnInit } from "@angular/core";
import { userManagementService } from "./usermanagement.service";
//import { Popup } from "ng2-opd-popup";

@Component({
    selector: "um-component",
    templateUrl: "./app/UserManagement/usermanagement.component.html"
})

export class userManagementComponent implements OnInit {
    ulist: any = [];
    user: any = null;
    edit: boolean = false;
    create: boolean = false;
    editUser: any = {};
    createUser: any = {};
    constructor(private _urserManagement: userManagementService) {

    }
    ngOnInit() {
        this._urserManagement.getUsers(null).subscribe((res) => { this.ulist = res; });
    }


    getUser(obj: any) {
        this.create = false;
        this.user = obj;
        this.editUser.UserName = this.user.UserName;
        this.editUser.FirstName = this.user.FirstName;
        this.editUser.LastName = this.user.LastName;
        this.editUser.Age = this.user.Age;
        this.editUser.Address = this.user.Address;
        this.editUser.Role = this.user.Role;
        this.editUser.Gender = this.user.Gender;
        this.editUser.PhoneNumber = this.user.PhoneNumber;
        this.editUser.Status = this.user.Status;

    }

    Editing() {
        this.edit = true;
        this.editUser.UserName = this.user.UserName;
        this.editUser.FirstName = this.user.FirstName;
        this.editUser.LastName = this.user.LastName;
        this.editUser.Age = this.user.Age;
        this.editUser.Address = this.user.Address;
        this.editUser.Role = this.user.Role;
        this.editUser.Gender = this.user.Gender;
        this.editUser.PhoneNumber = this.user.PhoneNumber;
        this.editUser.Status = this.user.Status;

      
    }
    Canceling() {
        this.edit = false;
        this.create = false;
        this.editUser = {};
        this.createUser = {};
    }
    Updating() {
        console.log("Updating");
        if (this.editUser.Password != this.editUser.ConfirmPassword) { this.Editing(); }
        else {
            
            var ur = this.user;
            var lur = this.editUser;
            this._urserManagement.editUser(this.editUser).subscribe((res) => { alert("Updated Successfully"); lur = ur; console.log(res); this.ngOnInit(); }, function (error) { console.log(error); });
            this.Canceling();
            this.Hiding();
            
        }
       
    }
    Deleting() {
        if (confirm("Are you sure you want to delete user : " + this.editUser.UserName + " ?")) {

            this._urserManagement.deleteUser(this.editUser.UserName).subscribe((res) => { alert("Deleted Successfully"); console.log(res); this.ngOnInit(); }, function (error) { console.log(error) });;
            this.Canceling();
            this.Hiding();
        }      
    }

    Hiding() {
        this.user = null;
        this.create = false;
    }

    Creating() {
        
        this.create = true;
        this.user = null;
        this.edit = false;
    }
    Submiting(obj: any) {
        this.createUser.Email = this.createUser.UserName;
        this._urserManagement.createUser(obj).subscribe((res) => { console.log(res); this.create = false; this.ngOnInit(); });
        
    }
 
}