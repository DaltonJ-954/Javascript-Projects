namespace Wanderly.API.Models
{
    public class SentNotification
    {
        public int Id { get; set; }

        public int UserPreferenceId { get; set; }
        public string ExternalId { get; set; } = null!; // Yelp Business ID

        public DateTime SentAt { get; set; }
    }
}
