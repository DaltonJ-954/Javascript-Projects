using System.Net.Http.Headers;
using System.Text.Json;
using Microsoft.EntityFrameworkCore;
using Wanderly.API.Data;
using Wanderly.API.DTOs;
using Wanderly.API.Models.External;

namespace Wanderly.API.Services
{
    public class YelpService
    {
        private readonly HttpClient httpClient;
        private readonly IConfiguration config;
        private readonly WanderlyDbContext context;

        public YelpService(HttpClient httpClient, IConfiguration config, WanderlyDbContext context)
        {
            this.httpClient = httpClient;
            this.config = config;
            this.context = context;
        }

        // ✅ UPDATED SIGNATURE (no more UserPreference parameter)
        public async Task<List<BusinessDto>> GetNearbyAsync(
            string userId,
            double latitude,
            double longitude)
        {
            // 🔹 STEP 1: Load user preferences from DB
            var preferences = await context.UserPreferences
                .FirstOrDefaultAsync(x => x.UserId == userId);

            if (preferences == null || preferences.Categories == null || !preferences.Categories.Any())
            {
                return new List<BusinessDto>();
            }

            // 🔹 STEP 2: Normalize preferred categories
            var preferredCategories = preferences.Categories
                .Select(c => c.CategoryName.Trim().ToLower())
                .ToHashSet();

            // 🔹 STEP 3: Call Yelp API
            var apiKey = config["Yelp:ApiKey"];

            var url = $"https://api.yelp.com/v3/businesses/search?latitude={latitude}&longitude={longitude}&term=food&radius=1000";

            var request = new HttpRequestMessage(HttpMethod.Get, url);
            request.Headers.Authorization =
                new AuthenticationHeaderValue("Bearer", apiKey);

            var response = await httpClient.SendAsync(request);
            var content = await response.Content.ReadAsStringAsync();

            if (!response.IsSuccessStatusCode)
            {
                throw new Exception(content);
            }

            var options = new JsonSerializerOptions
            {
                PropertyNameCaseInsensitive = true,
            };

            var yelpData = JsonSerializer.Deserialize<YelpResponse>(content, options);

            if (yelpData?.businesses == null)
            {
                return [];
            }

            // 🔹 STEP 4: Map Yelp → DTO
            var businesses = yelpData.businesses.Select(b => new BusinessDto
            {
                Name = b.name,
                Rating = b.rating,
                Address = b.location?.address1,
                Distance = b.distance,

                Categories = [.. b.categories.Select(c => c.title)] // Square brackets produces a cleaner look, but has the same effect as the .ToList method
            }).ToList();

            // 🔹 STEP 5: Filter based on preferences
            var filtered = businesses
                .Where(b =>
                    b.Distance <= preferences.Radius &&
                    b.Categories.Any(c =>
                        preferredCategories.Contains(c.ToLower())
                    )
                )
                .ToList();

            // 🔹 DEBUG (optional)
            Console.WriteLine($"Total from API: {businesses.Count}");
            Console.WriteLine($"After filtering: {filtered.Count}");

            return filtered;
        }
    }
}