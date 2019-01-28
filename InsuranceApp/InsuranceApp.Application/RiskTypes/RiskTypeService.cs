using System.Collections.Generic;
using AutoMapper;
using insuranceApp.Domain.Risk;
using insuranceApp.Infraestructure.DataAccess.Repositories;

namespace insuranceApp.Application.RiskTypes
{
    public class RiskTypeService: IRiskTypeService
    {
        private readonly IRepositoryService<RiskType> _riskTypeRepository;

        public RiskTypeService(IRepositoryService<RiskType> riskTypeRepository)
        {
            _riskTypeRepository = riskTypeRepository;
        }

        public List<RiskTypeDto> GetAll()
        {
            var types = _riskTypeRepository.GetAll();
            return Mapper.Map<List<RiskTypeDto>>(types);
        }
    }
}
