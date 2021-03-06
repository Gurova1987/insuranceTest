﻿using System.Collections.Generic;

namespace insuranceApp.Domain.Customer
{
    public class Customer
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }

        public ICollection<Insurance.Insurance> Insurances { get; set; }
    }
}
