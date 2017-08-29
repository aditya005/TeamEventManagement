using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using EventManagement_Web_Api.Models;
using EventManagement_Web_Api.ViewModels;
using Microsoft.AspNet.Identity.EntityFramework;

namespace EventManagement_Web_Api.Repository
{
    public class UserManagementRepo
    {
        TeamEventManagementEntities db = new TeamEventManagementEntities();
        public string getUserId(string userName)
        {
            return db.AspNetUsers.First(x => x.UserName == userName).Id;
        }
        public User getUser(string userName)
        {
            UserInfo ur = db.UserInfoes.First(m => m.UserName == userName);
            User Ur = new User() {
                Id = ur.Id,
                FirstName = ur.FirstName,
                LastName = ur.LastName,
                Gender = ur.Gender,
                Age = ur.Age,
                Address = ur.Address,
                Email = ur.Email,
                PhoneNumber = ur.PhoneNumber,
                Status = ur.Status,
                UserName = ur.UserName,
                Role = ur.Name//Role
            };
            return Ur;
        }

        public List<User> getUser()
        {
            List<UserInfo> uList = db.UserInfoes.ToList();
            List<User> UList = new List<User>();

            foreach(UserInfo ur in uList)
            {
                User Ur = new User()
                {
                    Id = ur.Id,
                    FirstName = ur.FirstName,
                    LastName = ur.LastName,
                    Gender = ur.Gender,
                    Age = ur.Age,
                    Address = ur.Address,
                    Email = ur.Email,
                    PhoneNumber = ur.PhoneNumber,
                    Status = ur.Status,
                    UserName = ur.UserName,
                    Role = ur.Name  //Role
                };
                UList.Add(Ur);
            }
            return UList;
        }

        public void editUser(User ur)  {
            AspNetUser Ur = db.AspNetUsers.First(m => m.UserName == ur.UserName);
            if (ur.FirstName != null)
            {
                Ur.FirstName = ur.FirstName;
            }
            
            if(ur.LastName != null)
            {
                Ur.LastName = ur.LastName;
            }
           if(ur.Gender != null)
            {
                Ur.Gender = ur.Gender;
            }
            
           if(ur.Age != 0)
            {
                Ur.Age = ur.Age;
            }
            
           if(ur.Address != null)
            {
                Ur.Address = ur.Address;
            }
            
           if(ur.Email != null)
            {
                Ur.Email = ur.Email;
            }
            
           if(ur.PhoneNumber != null)
            {
                Ur.PhoneNumber = ur.PhoneNumber;
            }

           if(ur.Password != null)
            {
                Ur.PasswordHash = null;
            }

            Ur.Status = ur.Status;
            if(ur.Role != null)
            {
                setRole(ur.UserName, ur.Role);
            }
            

            db.SaveChanges();
        }

        public void setRole(string UserName, string Role)
        {
            string UserId = db.AspNetUsers.First(x => x.UserName == UserName).Id;
            string RoleId = db.AspNetRoles.First(x => x.Name == Role.ToLower()).Id;
            db.sp_AddUserRole(UserId, RoleId);
            db.SaveChanges();
        }
        
        public void deleteUser(string UserName)
        {
            var user = db.AspNetUsers.First(x => x.UserName == UserName);
            db.AspNetUsers.Remove(user);
            db.SaveChanges();
        }
    }
}