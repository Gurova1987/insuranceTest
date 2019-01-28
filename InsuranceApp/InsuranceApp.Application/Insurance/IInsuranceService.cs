using System.Collections.Generic;

namespace insuranceApp.Application.Insurance
{
    public interface IInsuranceService
    {
        List<InsuranceDto> GetAll();
        InsuranceDto Get(int id);
        void Create(InsuranceDto model);
        void Update(InsuranceDto model);
        void Delete(InsuranceDto model);
    }
}
