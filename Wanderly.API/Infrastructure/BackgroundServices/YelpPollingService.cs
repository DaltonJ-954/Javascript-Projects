using Wanderly.API.Infrastructure.Notifications;
using Wanderly.API.Services;

namespace Wanderly.API.Infrastructure.BackgroundServices
{
    public class YelpPollingService : BackgroundService
    {
        private readonly IServiceScopeFactory scopeFactory;

        public YelpPollingService(IServiceScopeFactory scopeFactory, YelpService yelpService)
        {
            this.scopeFactory = scopeFactory;
        }

        protected override async Task ExecuteAsync(CancellationToken stoppingToken)
        {
            while (!stoppingToken.IsCancellationRequested)
            {
                using var scope = scopeFactory.CreateScope();

                var yelpService = scope.ServiceProvider.GetRequiredService<YelpService>();
                var notificationEngine = scope.ServiceProvider.GetRequiredService<INotificationEngine>();
                var preferenceRepo = scope.ServiceProvider.GetRequiredService<IUserPreferenceRepository>();

                var preferences = await preferenceRepo.GetPreferencesMatchingCategories(new List<string>());

                foreach (var pref in preferences)
                {
                    if (pref.Categories == null || !pref.Categories.Any())
                        continue;

                    var categories = pref.Categories
                        .Select(c => c.CategoryName)
                        .ToList();

                    if (pref.Latitude == null || pref.Longitude == null)
                        continue;

                    var businesses = await yelpService.SearchByCategoriesAsync(
                        categories,
                        pref.Longitude.Value,
                        pref.Latitude.Value,
                        pref.Radius
                    );

                    foreach (var business in businesses)
                    {
                        await notificationEngine.ProcessAsync(new NotificationRequest
                        {
                            Title = business.Title,

                            Metedata = new Dictionary<string, string>
                            {
                                ["businessName"] = business.Name
                            }
                        });
                    }
                }
            }

            await Task.Delay(TimeSpan.FromMinutes(5), stoppingToken);
        }
    }
}
