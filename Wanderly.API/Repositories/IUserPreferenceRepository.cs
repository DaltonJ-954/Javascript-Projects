using Wanderly.API.Models;

public interface IUserPreferenceRepository
{
    Task<List<UserPreference>> GetPreferencesMatchingCategories(List<string> categories);
    Task<IEnumerable<object>> GetPreferencesMatchingCategories();
}
