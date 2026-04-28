using Microsoft.Data.Sql;
using Wanderly.API.Repositories;

namespace Wanderly.API.Infrastructure.Notifications
{
    public class NotificationEngine : INotificationEngine
    {
        private readonly IUserPreferenceRepository prefRepo;
        private readonly INotificationDispatcher dispatcher;

        public NotificationEngine(IUserPreferenceRepository prefRepo, INotificationDispatcher dispatcher)
        {
            this.prefRepo = prefRepo;
            this.dispatcher = dispatcher;
        }

        public async Task ProcessAsync(NotificationRequest request)
        {
            var interestedUsers = await prefRepo
                .GetPreferencesMatchingCategories(request.Categories);

            var notifications = interestedUsers.Select(user => new Notification
            {
                UserId = user.Id,
                Title = request.Title,
                Messages = request.Message,
                Type = request.Type,
                Metadata = request.Metedata
            }).ToList();

            foreach (var notification in notifications)
            {
                await dispatcher.DispatcherAsync(notification);
            }
        }
    }
}
