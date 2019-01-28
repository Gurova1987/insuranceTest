using AutoMapper;
using insuranceApp.Application.CoverageTypes;
using insuranceApp.Application.Customers;
using insuranceApp.Application.Insurance;
using insuranceApp.Application.RiskTypes;
using insuranceApp.Domain.Coverage;
using insuranceApp.Domain.Customer;
using insuranceApp.Domain.Insurance;
using insuranceApp.Domain.Risk;

namespace insuranceApp.WebApi
{
    public class AutoMapperConfig
    {
        public static void RegisterMappers()
        {
            Mapper.Initialize(cfg => {
                cfg.CreateMap<Customer, CustomerDto>();
                cfg.CreateMap<CustomerDto, Customer>();

                cfg.CreateMap<Insurance, InsuranceDto>();
                cfg.CreateMap<InsuranceDto, Insurance>();
                
                cfg.CreateMap<RiskType, RiskTypeDto>();
                cfg.CreateMap<RiskTypeDto, RiskType>();

                cfg.CreateMap<CoverageType, CoverageTypeDto>();
                cfg.CreateMap<CoverageTypeDto, CoverageType>();
            });
        }
    }
}