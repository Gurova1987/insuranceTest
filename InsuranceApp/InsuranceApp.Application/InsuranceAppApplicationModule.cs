using System.Reflection;
using Autofac;
using Module = Autofac.Module;

namespace insuranceApp.Application
{
    public class InsuranceAppApplicationModule: Module
    {
        protected override void Load(ContainerBuilder builder)
        {
            builder.RegisterAssemblyTypes(Assembly.GetExecutingAssembly()).AsImplementedInterfaces();
        }
    }
}
