using insuranceApp.Application.Customers;
using System.Collections.Generic;
using System.Web.Http;

namespace insuranceApp.WebApi.Controllers
{
    public class CustomerController : ApiController
    {
        private readonly ICustomerService _customerService;

        public CustomerController(ICustomerService customerService)
        {
            _customerService = customerService;
        }

        // GET: api/Customer
        public IEnumerable<CustomerDto> Get()
        {
            return _customerService.GetAll();
        }

        // GET: api/Customer/5
        public CustomerDto Get(int id)
        {
            return _customerService.Get(id);
        }

        // POST: api/Customer
        public void Post([FromBody]CustomerDto model)
        {
            _customerService.Create(model);
        }

        // PUT: api/Customer/5
        public void Put(int id, [FromBody]CustomerDto model)
        {
            _customerService.Update(model);
        }

        // DELETE: api/Customer/5
        public void Delete(CustomerDto model)
        {
            _customerService.Delete(model);
        }
    }
}
