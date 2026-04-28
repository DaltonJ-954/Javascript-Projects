namespace Wanderly.API.Models
{
    public class UserPreference
    {
        public int Id { get; set; }
        public string UserId { get; set; } = null!;
        public double Radius { get; set; }
        public double? Latitude { get; set; }
        public double? Longitude { get; set; }

        public List<UserPreferenceCategory> Categories { get; set; } = [];
    }
}