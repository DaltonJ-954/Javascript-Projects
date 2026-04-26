namespace Wanderly.API.Models.External
{
    public class YelpResponse
    {
        public List<YelpBusiness> businesses { get; set; }
    }

    public class YelpBusiness
    {
        public string name { get; set; } = null!;
        public double rating { get; set; }
        public double distance { get; set; }
        public YelpLocation  location { get; set; } = null!;
        public List<YelpCatagory> categories { get; set; } = null!;
    }

    public class YelpLocation
    {
        public string address1 { get; set; } = null!;
    }

    public class YelpCatagory
    {
        public string title { get; set; } = null!;
    }
}
