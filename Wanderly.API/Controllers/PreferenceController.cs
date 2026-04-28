using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Wanderly.API.Data;
using Wanderly.API.DTOs;
using Wanderly.API.Models;
using Wanderly.API.Services;

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



        [HttpGet]
        public async Task<ActionResult> Get(int id)
        {
            var prefs = await context.UserPreferences
                .Include(p => p.Categories)
                .FirstOrDefaultAsync(p => p.Id == id);

            if (prefs == null)
            {
                return NotFound();
            }

            var results = new UserPreferenceDto
            {
                Id = id,
                UserId = prefs.UserId,
                Radius = prefs.Radius,

                Categories = prefs.Categories.Select(c => new UserPreferenceCategoryDto
                {
                    Id = c.Id,
                    CategoryName = c.CategoryName
                }).ToList()
            };

            return Ok(results);
        }

        // GET: api/preferences/{userId}
        [HttpGet("{userId}")]
        public async Task<IActionResult> Get(string userId)
        {
            var prefs = await context.UserPreferences
                .Include(p => p.Categories)
                .FirstOrDefaultAsync(p => p.UserId == userId);

            if (prefs == null)
                return NotFound();

            var result = new UserPreferenceDto
            {
                Id = prefs.Id,
                UserId = userId,
                Radius = prefs.Radius,
                Categories = prefs.Categories.Select(c => new UserPreferenceCategoryDto
                {
                    Id = c.Id,
                    CategoryName = c.CategoryName
                }).ToList()
            };

            return Ok(result);
        }

        [HttpPost]
        public async Task<IActionResult> CreatePreference(UserPreferenceCreateDto createDto)
        {
            var userPreference = new UserPreference
            {
                UserId = createDto.UserId,
                Radius = createDto.Radius,

                // EF Core ONLY understands entity classes, not DTOs
                Categories = createDto.Categories.Select(c => new UserPreferenceCategory // Using UserPreferenceCategoryDto = error
                {
                    CategoryName = c.CategoryName
                }).ToList()
            };

            context.UserPreferences.Add(userPreference);
            await context.SaveChangesAsync();

            var result = new UserPreferenceDto
            {
                Id = userPreference.Id,
                UserId = userPreference.UserId,
                Radius = userPreference.Radius,
                Categories = userPreference.Categories.Select(c => new UserPreferenceCategoryDto
                {
                    Id= c.Id,
                    CategoryName = c.CategoryName
                }).ToList()
            };

            return Ok(result);
        }

        [HttpPut("{userId}")]
        public async Task<IActionResult> Update(string userId, UserPreferenceCreateDto updateDto)
        {
            var preference = await context.UserPreferences
                .Include(c => c.Categories)
                .FirstOrDefaultAsync(p =>  p.UserId == userId);

            if (preference == null)
            {
                return NotFound();
            }

            preference.Radius = updateDto.Radius;
            preference.Categories.Clear();

            preference.Categories = updateDto.Categories.Select(c => new UserPreferenceCategory
            {
                CategoryName = c.CategoryName
            }).ToList();

            if (preference is null)
                return NoContent();

            return Ok(updateDto);
        }
    }
}