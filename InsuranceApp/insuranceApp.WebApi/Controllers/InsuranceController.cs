using System.Collections.Generic;
using System.Web.Http;
using insuranceApp.Application.Insurance;

namespace insuranceApp.WebApi.Controllers
{
    public class InsuranceController : ApiController
    {
        private readonly IInsuranceService _insuranceService;

        public InsuranceController(IInsuranceService insuranceService)
        {
            _insuranceService = insuranceService;
        }

        // GET: api/Insurance
        public IEnumerable<InsuranceDto> Get()
        {
            return _insuranceService.GetAll();
        }

        // GET: api/Insurance/5
        public InsuranceDto Get(int id)
        {
            return _insuranceService.Get(id);
        }

        // POST: api/Insurance
        public void Post([FromBody]InsuranceDto model)
        {
            _insuranceService.Create(model);
        }

        // PUT: api/Insurance/5
        public void Put(int id, [FromBody]InsuranceDto model)
        {
            _insuranceService.Update(model);
        }

        // DELETE: api/Insurance/5
        public void Delete(int id)
        {
            var model = new InsuranceDto {Id = id};
            _insuranceService.Delete(model);
        }
    }
}
