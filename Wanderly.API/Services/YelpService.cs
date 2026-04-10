using System.Net.Http.Headers;

namespace Wanderly.API.Services
{
    public class YelpService
    {
        private readonly HttpClient httpClient;
        private readonly IConfiguration config;

        public YelpService(HttpClient httpClient, IConfiguration config)
        {
            this.httpClient = httpClient;
            this.config = config;
        }

        public async Task<string> GetNearbyAsynce(double latitude, double longitude)
        {
            var apiKey = config["Yelp:ApiKey"];

            httpClient.DefaultRequestHeaders.Authorization = 
                new AuthenticationHeaderValue("Bearer", apiKey);

            var url = $"https://api.yelp.com/v3/businesses/search?latitude={latitude}&longitude={longitude}&term=food&radius=1000";

            var response = await httpClient.GetAsync(url);

            if (!response.IsSuccessStatusCode)
            {
                throw new Exception($"Yelp API failed: {response.StatusCode} - {response}");
            }

            return await response.Content.ReadAsStringAsync();
        }
    }
}
