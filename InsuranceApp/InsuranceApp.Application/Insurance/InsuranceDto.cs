﻿using System;
using insuranceApp.Domain.Coverage;
using insuranceApp.Domain.Risk;

namespace insuranceApp.Application.Insurance
{
    public class InsuranceDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public DateTime StartDate { get; set; }
        public int TermInMonths { get; set; }
        public decimal Price { get; set; }
        public int RiskTypeId { get; set; }
        public RiskType RiskType { get; set; }
        public int CoverageTypeId { get; set; }
        public decimal Coverage { get; set; }
        public CoverageType CoverageType { get; set; }
    }
}
