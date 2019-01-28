using System.Collections.Generic;

namespace insuranceApp.Application.RiskTypes
{
    public interface IRiskTypeService
    {
        List<RiskTypeDto> GetAll();
    }
}
