using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Wanderly.API.Data;
using Wanderly.API.Models;

namespace Wanderly.API.Controllers
{
    [ApiController]
    [Route("api/preferences")]
    public class PreferenceController : ControllerBase
    {
        private readonly WanderlyDbContext context;

        public PreferenceController(WanderlyDbContext context)
        {
            this.context = context;
        }

        // GET: api/preferences/{userId}
        [HttpGet("{userId}")]
        public async Task<IActionResult> Get(string userId)
        {
            var prefs = await context.UserPreferences
                .FirstOrDefaultAsync(p => p.UserId == userId);

            if (prefs == null)
                return NotFound();

            return Ok(prefs);
        }

        [HttpPost]
        public async Task<IActionResult> CreatePreference(UserPreference preference)
        {
            context.UserPreferences.Add(preference);
            await context.SaveChangesAsync();

            return Ok(preference);
        }

        [HttpPut("{userId}")]
        public async Task<IActionResult> Update(string userId, UserPreference updated)
        {
            var prefs = await context.UserPreferences
                .FirstOrDefaultAsync(p => p.UserId == userId);

            if (prefs == null)
                return NotFound();

            prefs.Categories = updated.Categories;
            prefs.Radius = updated.Radius;

            await context.SaveChangesAsync();

            return Ok(prefs);
        }
    }
}