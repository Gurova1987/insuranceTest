using insuranceApp.Application.Customers;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using insuranceApp.Domain.Customer;
using insuranceApp.Infraestructure.DataAccess;

namespace insuranceApp.WebApi.Controllers
{
    public class CustomerController : ApiController
    {
        private ICustomerService _customerService;

        public CustomerController(ICustomerService customerService)
        {
            _customerService = customerService;
        }

        // GET: api/Customer
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Customer/5
        public CustomerDto Get(int id)
        {
            return _customerService.Get(id);
        }

        // POST: api/Customer
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Customer/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Customer/5
        public void Delete(int id)
        {
        }
    }
}
