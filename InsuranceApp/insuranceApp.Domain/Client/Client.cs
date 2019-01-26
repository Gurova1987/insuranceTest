using System.Collections.Generic;

namespace insuranceApp.Domain.Client
{
    public class Client
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }

        public ICollection<Insurance.Insurance> Insurances { get; set; }
    }
}
