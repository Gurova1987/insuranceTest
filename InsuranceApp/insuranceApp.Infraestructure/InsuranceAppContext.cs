using System.Data.Entity;
using insuranceApp.Domain.Client;
using insuranceApp.Domain.Coverage;
using insuranceApp.Domain.Insurance;
using insuranceApp.Domain.Risk;

namespace insuranceApp.Infraestructure
{
    public class InsuranceAppContext: DbContext
    {
        public InsuranceAppContext() : base("name=InsuranceAppConnectionString")
        {
            Database.SetInitializer(new CreateDatabaseIfNotExists<InsuranceAppContext>());
        }

        public DbSet<Client> Clients { get; set; }
        public DbSet<Insurance> Insurances { get; set; }
        public DbSet<RiskType> RiskTypes { get; set; }
        public DbSet<CoverageType> CoverageTypes { get; set; }
    }
}
