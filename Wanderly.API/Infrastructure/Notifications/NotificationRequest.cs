namespace Wanderly.API.Infrastructure.Notifications
{
    public class NotificationRequest
    {
        public string Title { get; set; } = null!;
        public string Message { get; set; } = null!;
        public string Type { get; set; } = null!;

        public List<string> Categories { get; set; } = [];

        public Dictionary<string, string>? Metedata { get; set; }
    }
}
