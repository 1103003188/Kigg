using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Kigg.WebApp.Startup))]
namespace Kigg.WebApp
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
