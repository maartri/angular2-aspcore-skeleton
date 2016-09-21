using System.IO;
using Microsoft.AspNetCore.Hosting;


namespace ng2
{
    public class Program
    {
        public static void Main(string[] args)
        {
           var currPath = Path.Combine(Directory.GetCurrentDirectory(),"./wwwroot");

            var host = new WebHostBuilder()
                .UseKestrel()
                .UseWebRoot(currPath)
                .UseStartup<Startup>()
                .Build();

            host.Run();
        }
    }
}
