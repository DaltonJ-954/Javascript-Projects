using Microsoft.EntityFrameworkCore;
using System.Text.Json;
using Wanderly.API.Models;

namespace Wanderly.API.Data
{
    public class WanderlyDbContext : DbContext
    {
        public WanderlyDbContext(DbContextOptions<WanderlyDbContext> options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<UserPreference>()
                .HasMany(p => p.Categories)
                .WithOne(c => c.UserPreference)
                .HasForeignKey(c => c.UserPreferenceId)
                .OnDelete(DeleteBehavior.Cascade);
        }

        public DbSet<UserPreference> UserPreferences { get; set; }
        public DbSet<UserPreferenceCategory> UserPreferenceCategories { get; set; }

    }
}
