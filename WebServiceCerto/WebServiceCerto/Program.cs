using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using WebServiceCerto.Model;

namespace WebServiceCerto
{
    public class Program
    {
        public static IConfigurationRoot Configuration { get; set; }
        public static void Main(string[] args)
        {
            var builder = new ConfigurationBuilder().SetBasePath(Directory.GetCurrentDirectory())
                                                   .AddJsonFile("appsettings.json");

            Configuration = builder.Build();

            ConnectionMySql.connectionString = Configuration["ConnectionStrings:MySqlConnectionString"];

            CreateHostBuilder(args).Build().Run();
            

        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}
