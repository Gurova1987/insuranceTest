using insuranceApp.Application.RiskTypes;
using System.Collections.Generic;
using System.Web.Http;

namespace insuranceApp.WebApi.Controllers
{
    public class RiskTypeController : ApiController
    {
        private readonly IRiskTypeService _riskTypeService;

        public RiskTypeController(IRiskTypeService riskTypeService)
        {
            _riskTypeService = riskTypeService;
        }

        // GET: api/RiskType
        public IEnumerable<RiskTypeDto> Get()
        {
            return _riskTypeService.GetAll();
        }
    }
}
