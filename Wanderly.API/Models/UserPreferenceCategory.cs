namespace Wanderly.API.Models
{
    public class UserPreferenceCategory
    {
        public int Id { get; set; }

        public int UserPreferenceId { get; set; }
        public UserPreference UserPreference { get; set; } = null!;

        public string CategoryName { get; set; } = null!;
    }
}
