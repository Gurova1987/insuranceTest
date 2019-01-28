using System;
using System.Collections.Generic;
using insuranceApp.Domain.Coverage;
using insuranceApp.Domain.Risk;

namespace insuranceApp.Domain.Insurance
{
    public class Insurance
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public DateTime StartDate { get; set; }
        public int TermInMonths { get; set; }
        public decimal Price { get; set; }
        public int RiskTypeId { get; set; }
        public virtual RiskType RiskType { get; set; }
        public int CoverageTypeId { get; set; }
        public decimal Coverage { get; set; }
        public virtual CoverageType CoverageType { get; set; }
    }
}
