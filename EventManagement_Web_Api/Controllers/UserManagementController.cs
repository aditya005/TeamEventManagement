﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace EventManagement_Web_Api.Controllers
{
    public class UserManagementController : ApiController
    {
        // GET: api/UserManagement
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/UserManagement/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/UserManagement
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/UserManagement/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/UserManagement/5
        public void Delete(int id)
        {
        }
    }
}
