using AutoMapper;
using insuranceApp.Application.Customers;
using insuranceApp.Domain.Customer;

namespace insuranceApp.WebApi
{
    public class AutoMapperConfig
    {
        public static void RegisterMappers()
        {
            Mapper.Initialize(cfg => {
                cfg.CreateMap<Customer, CustomerDto>();
                cfg.CreateMap<CustomerDto, Customer>();
            });
        }
    }
}