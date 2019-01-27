using System.Reflection;
using Autofac;
using Module = Autofac.Module;

namespace insuranceApp.Infraestructure
{
    public class InsuranceAppInfraestructureModule : Module
    {
        protected override void Load(ContainerBuilder builder)
        {
            builder.RegisterAssemblyTypes(Assembly.GetExecutingAssembly()).AsImplementedInterfaces();
        }
    }
}
