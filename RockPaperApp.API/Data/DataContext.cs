namespace RockPaperApp.API.Data
{
    using Microsoft.EntityFrameworkCore;
    using RockPaperApp.API.Models;

    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
        }
         public DbSet<Game> Games { get; set; }
    }
}