using System.Collections.Generic;
using AutoMapper;
using insuranceApp.Domain.Customer;
using insuranceApp.Infraestructure.DataAccess.Repositories;

namespace insuranceApp.Application.Customers
{
    public class CustomerService: ICustomerService
    {
        private readonly IRepositoryService<Customer> _customerRepository;

        public CustomerService(IRepositoryService<Customer> customerRepository)
        {
            _customerRepository = customerRepository;
        }

        public List<CustomerDto> GetAll()
        {
            var customers = _customerRepository.GetAll();
            return Mapper.Map<List<CustomerDto>>(customers);
        }

        public CustomerDto Get(int id)
        {
            var customer = _customerRepository.Get(id);
            return Mapper.Map<CustomerDto>(customer);
        }

        public void Create(CustomerDto model)
        {
            var customerEntity = Mapper.Map<Customer>(model);
            _customerRepository.Add(customerEntity);
        }

        public void Update(CustomerDto model)
        {
            var customerEntity = Mapper.Map<Customer>(model);
            _customerRepository.Update(customerEntity);
        }

        public void Delete(CustomerDto model)
        {
            var customerEntity = Mapper.Map<Customer>(model);
            _customerRepository.Remove(customerEntity);
        }
    }
}
