using Microsoft.EntityFrameworkCore;
using Wanderly.API.Data;
using Wanderly.API.Models;

namespace Wanderly.API.Repositories
{
    public class UserPreferenceRepository : IUserPreferenceRepository
    {
        private readonly WanderlyDbContext context;

        public UserPreferenceRepository(WanderlyDbContext context)
        {
            this.context = context;
        }

        public async Task<List<UserPreference>> GetPreferencesMatchingCategories(List<string> categories)
        {
            return await context.UserPreferences
                .Include(p => p.Categories)
                .Where(p => p.Categories
                    .Any(c => categories.Contains(c.CategoryName)))
                .ToListAsync();
        }
    }
}
