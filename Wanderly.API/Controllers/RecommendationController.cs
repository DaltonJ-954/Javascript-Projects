using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Wanderly.API.Data;
using Wanderly.API.Services;

namespace Wanderly.API.Controllers
{
    [ApiController]
    [Route("api/recommendations")]
    public class RecommendationController : ControllerBase
    {
        private readonly WanderlyDbContext context;
        private readonly YelpService yelpService;

        public RecommendationController(
            WanderlyDbContext context,
            YelpService yelpService)
        {
            this.context = context;
            this.yelpService = yelpService;
        }

        // GET: api/recommendations/{userId}?latitude=...&longitude=...
        [HttpGet("{userId}")]
        public async Task<IActionResult> GetRecommendatios(string userId, double latitude, double longitude)
        {
            var prefs = await context.UserPreferences
                .Include(p => p.Categories)
                .FirstOrDefaultAsync(p => p.UserId == userId);

            if (prefs == null)
                return NotFound("User was not found");

            var results = await yelpService.GetNearbyAsync(
                userId,
                latitude,
                longitude
            );

            if (results == null)
            {
                Console.WriteLine("Results are not showing");
            }

            return Ok(new
            {
                message = "Enjoy your saved recommendations!",
                results
            });
        }
    }
}
