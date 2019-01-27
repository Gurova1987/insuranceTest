using System.Reflection;
using Autofac;
using Module = Autofac.Module;

namespace insuranceApp.Domain
{
    public class InsuranceAppDomainModule : Module
    {
        protected override void Load(ContainerBuilder builder)
        {
            builder.RegisterAssemblyTypes(Assembly.GetExecutingAssembly()).AsImplementedInterfaces();
        }
    }
}
