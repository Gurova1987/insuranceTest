using System.Collections.Generic;
using insuranceApp.Domain.Coverage;
using insuranceApp.Domain.Risk;

namespace insuranceApp.Infraestructure.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<insuranceApp.Infraestructure.DataAccess.InsuranceAppContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
        }

        protected override void Seed(insuranceApp.Infraestructure.DataAccess.InsuranceAppContext context)
        {
            var coverageTypes = new List<CoverageType>
            {
                new CoverageType {Name = "Terremoto"},
                new CoverageType {Name = "Incendio"},
                new CoverageType {Name = "Robo"},
                new CoverageType {Name = "Pérdida"}
            };

            var riskTypes = new List<RiskType>
            {
                new RiskType {Name = "Bajo"},
                new RiskType {Name = "Medio"},
                new RiskType {Name = "Medio-Alto"},
                new RiskType {Name = "Alto"}
            };

            context.CoverageTypes.AddRange(coverageTypes);
            context.RiskTypes.AddRange(riskTypes);
        }
    }
}
