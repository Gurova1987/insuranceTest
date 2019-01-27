using System.Collections.Generic;
using insuranceApp.Domain.Insurance;

namespace insuranceApp.Application.Customers
{
    public class CustomerDto
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }

        public ICollection<Insurance> Insurances { get; set; }
    }
}
