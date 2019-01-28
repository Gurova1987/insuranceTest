using System.Collections.Generic;
using AutoMapper;
using insuranceApp.Domain.Coverage;
using insuranceApp.Infraestructure.DataAccess.Repositories;

namespace insuranceApp.Application.CoverageTypes
{
    public class CoverageTypeService : ICoverageTypeService
    {
        private readonly IRepositoryService<CoverageType> _coverageTypeRepository;

        public CoverageTypeService(IRepositoryService<CoverageType> coverageTypeRepository)
        {
            _coverageTypeRepository = coverageTypeRepository;
        }

        public List<CoverageTypeDto> GetAll()
        {
            var types = _coverageTypeRepository.GetAll();
            return Mapper.Map<List<CoverageTypeDto>>(types);
        }
    }
}
