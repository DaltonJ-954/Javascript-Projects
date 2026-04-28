using Microsoft.AspNetCore.SignalR;

namespace Wanderly.API.Infrastructure.SignalR
{
    public class NotificationHub : Hub
    {
        public override async Task OnConnectedAsync()
        {
            var userId = Context.UserIdentifier;

            await Groups.AddToGroupAsync(Context.ConnectionId, userId!);

            await base.OnConnectedAsync();
        }
    }
}
