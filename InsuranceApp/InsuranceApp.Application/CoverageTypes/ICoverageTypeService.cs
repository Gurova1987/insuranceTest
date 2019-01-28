using System.Collections.Generic;

namespace insuranceApp.Application.CoverageTypes
{
    public interface ICoverageTypeService
    {
        List<CoverageTypeDto> GetAll();
    }
}
