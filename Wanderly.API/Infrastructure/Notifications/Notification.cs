namespace Wanderly.API.Infrastructure.Notifications
{
    public class Notification
    {
        public Guid Id { get; set; }
        public int UserId { get; set; }
        public string Title { get; set; } = null!;
        public string Messages { get; set; } = null!;
        public string Type { get; set; } = null!;
        public DateTime CreatedAt { get; set; }
        public bool IsRead { get; set; } = false;
        public Dictionary<string, string>? Metadata { get; set; }
    }
}
