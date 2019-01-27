using System.Collections.Generic;

namespace insuranceApp.Application.Customers
{
    public interface ICustomerService
    {
        List<CustomerDto> GetAll();
        CustomerDto Get(int id);
        void Create(CustomerDto model);
        void Update(CustomerDto model);
        void Delete(CustomerDto model);
    }
}
