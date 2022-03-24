using Microsoft.EntityFrameworkCore;

namespace PenaltyCalculation.Data
{
    public class DataContext:DbContext
    {

        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }
        public DbSet<Country> Country { get; set; }


    }
}
