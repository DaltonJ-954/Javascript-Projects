namespace Wanderly.API.Infrastructure.Notifications
{
    public interface INotificationDispatcher
    {
        Task DispatcherAsync(Notification notification);
    }
}
