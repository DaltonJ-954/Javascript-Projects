using Microsoft.Data.Sql;

namespace Wanderly.API.Infrastructure.Notifications
{
    public interface INotificationEngine
    {
        Task ProcessAsync(NotificationRequest request);
    }
}
