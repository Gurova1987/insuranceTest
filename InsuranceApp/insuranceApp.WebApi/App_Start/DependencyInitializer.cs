using System.Reflection;
using Autofac;
using Autofac.Integration.WebApi;
using insuranceApp.Application;
using insuranceApp.Application.Customers;
using insuranceApp.Domain;
using insuranceApp.Infraestructure;

namespace insuranceApp.WebApi
{
    public class DependencyInitializer
    {
        public static readonly DependencyInitializer Instance = new DependencyInitializer();
        public IContainer Container { get; }

        private DependencyInitializer()
        {
            var builder = new ContainerBuilder();
            builder.RegisterModule<InsuranceAppApplicationModule>();
            builder.RegisterModule<InsuranceAppDomainModule>();
            builder.RegisterModule<InsuranceAppInfraestructureModule>();
            builder.RegisterApiControllers(Assembly.GetExecutingAssembly());
            Container = builder.Build();
        }
    }
}