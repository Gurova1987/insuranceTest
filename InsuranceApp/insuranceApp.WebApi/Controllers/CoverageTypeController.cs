using insuranceApp.Application.CoverageTypes;
using System.Collections.Generic;
using System.Web.Http;

namespace insuranceApp.WebApi.Controllers
{
    public class CoverageTypeController : ApiController
    {
        private readonly ICoverageTypeService _coverageTypeService;

        public CoverageTypeController(ICoverageTypeService coverageTypeService)
        {
            _coverageTypeService = coverageTypeService;
        }

        // GET: api/CoverageType
        public IEnumerable<CoverageTypeDto> Get()
        {
            return _coverageTypeService.GetAll();
        }
    }
}
