using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using insuranceApp.Domain.Customer;
using insuranceApp.Infraestructure.DataAccess.Repositories;

namespace insuranceApp.Application.Customers
{
    public class CustomerService: ICustomerService
    {
        private readonly IRepositoryService<Customer> _customerRepository;
        private readonly IRepositoryService<Domain.Insurance.Insurance> _insuranceRepository;
        private readonly IRepositoryService<CustomerInsurances> _insuranceCustomerRepository;

        public CustomerService(IRepositoryService<Customer> customerRepository, IRepositoryService<Domain.Insurance.Insurance> insuranceRepository, IRepositoryService<CustomerInsurances> insuranceCustomerRepository)
        {
            _customerRepository = customerRepository;
            _insuranceRepository = insuranceRepository;
            _insuranceCustomerRepository = insuranceCustomerRepository;
        }

        public List<CustomerDto> GetAll()
        {
            var customers = _customerRepository.GetAll();
            return Mapper.Map<List<CustomerDto>>(customers);
        }

        public CustomerDto Get(int id)
        {
            var customer = _customerRepository.Get(id);
            var insuraceReferences =
                _insuranceCustomerRepository.GetAllByCondition(x => x.CustomerId == customer.Id)
                    .Select(y => y.InsuranceId);
            customer.Insurances = _insuranceRepository.GetAllByCondition(x => insuraceReferences.Contains(x.Id));
            return Mapper.Map<CustomerDto>(customer);
        }

        public void Create(CustomerDto model)
        {
            var customerEntity = Mapper.Map<Customer>(model);
            foreach (var relationItem in customerEntity.Insurances)
            {
                var relation = new CustomerInsurances { CustomerId = customerEntity.Id, InsuranceId = relationItem.Id };
                _insuranceCustomerRepository.Add(relation);
            }
            _customerRepository.Add(customerEntity);
        }

        public void Update(CustomerDto model)
        {
            var customerEntity = Mapper.Map<Customer>(model);

            // Remove old references
            var insuraceReferences = _insuranceCustomerRepository.GetAllByCondition(x => x.CustomerId == model.Id);
            foreach (var insurance in insuraceReferences)
            {
                _insuranceCustomerRepository.Remove(insurance.Id);
            }

            // Add new references
            foreach (var relationItem in customerEntity.Insurances)
            {
                var relation = new CustomerInsurances { CustomerId = customerEntity.Id, InsuranceId = relationItem.Id };
                _insuranceCustomerRepository.Add(relation);
            }
            _customerRepository.Update(customerEntity);
        }

        public void Delete(CustomerDto model)
        {
            var customerEntity = Mapper.Map<Customer>(model);
            _customerRepository.Remove(customerEntity.Id);
        }
    }
}
