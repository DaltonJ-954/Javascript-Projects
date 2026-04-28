using Microsoft.AspNetCore.SignalR;
using Wanderly.API.Infrastructure.SignalR;

namespace Wanderly.API.Infrastructure.Notifications
{
    public class SignalRNotificationDispatcher : INotificationDispatcher
    {
        private readonly IHubContext<NotificationHub> hubContext;

        public SignalRNotificationDispatcher(IHubContext<NotificationHub> hubContext)
        {
            this.hubContext = hubContext;
        }

        public async Task DispatcherAsync(Notification notification)
        {
            await hubContext
                .Clients
                .Users(notification.UserId.ToString())
                .SendAsync("Receice Notification", notification);
        }
    }
}
