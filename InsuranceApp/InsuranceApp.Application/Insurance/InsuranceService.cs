using System.Collections.Generic;
using AutoMapper;
using insuranceApp.Infraestructure.DataAccess.Repositories;

namespace insuranceApp.Application.Insurance
{
    public class InsuranceService : IInsuranceService
    {
        private readonly IRepositoryService<Domain.Insurance.Insurance> _insuranceRepository;

        public InsuranceService(IRepositoryService<Domain.Insurance.Insurance> insuranceRepository)
        {
            _insuranceRepository = insuranceRepository;
        }

        public List<InsuranceDto> GetAll()
        {
            var customers = _insuranceRepository.GetAll();
            return Mapper.Map<List<InsuranceDto>>(customers);
        }

        public InsuranceDto Get(int id)
        {
            var customer = _insuranceRepository.Get(id);
            return Mapper.Map<InsuranceDto>(customer);
        }

        public void Create(InsuranceDto model)
        {
            var customerEntity = Mapper.Map<Domain.Insurance.Insurance>(model);
            _insuranceRepository.Add(customerEntity);
        }

        public void Update(InsuranceDto model)
        {
            var customerEntity = Mapper.Map<Domain.Insurance.Insurance>(model);
            _insuranceRepository.Update(customerEntity);
        }

        public void Delete(InsuranceDto model)
        {
            var customerEntity = Mapper.Map<Domain.Insurance.Insurance>(model);
            _insuranceRepository.Remove(customerEntity.Id);
        }
    }
}
