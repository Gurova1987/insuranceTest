using System;
using System.Collections.Generic;
using System.Linq;
using insuranceApp.Domain.Customer;
using insuranceApp.Infraestructure.DataAccess.Repositories;

namespace insuranceApp.Application.Customers
{
    public class CustomerService: ICustomerService
    {
        private IRepositoryService<Customer> _customerRepository;

        public CustomerService(IRepositoryService<Customer> customerRepository)
        {
            _customerRepository = customerRepository;
        }

        public List<CustomerDto> GetAll()
        {
            return (List<CustomerDto>) _customerRepository.GetAll().Select( x => new CustomerDto { FirstName = "Test" });
        }

        public CustomerDto Get(int id)
        {
            throw new NotImplementedException();
        }

        public void Create(CustomerDto model)
        {
            throw new NotImplementedException();
        }

        public void Update(CustomerDto model)
        {
            throw new NotImplementedException();
        }

        public void Delete(CustomerDto model)
        {
            throw new NotImplementedException();
        }
    }
}
