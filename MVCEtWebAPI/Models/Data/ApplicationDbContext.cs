using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Models.Models;

namespace MVCEtWebAPI.Data
{
    public class ApplicationDbContext : IdentityDbContext
    {
        public DbSet<TestData> TestDatas { get; set; }
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<TestData>().HasData(
                new TestData { Id = 1, Name = "Un nom" }
                );
            
        }
    }
}
