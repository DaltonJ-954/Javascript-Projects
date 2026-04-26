namespace Wanderly.API.DTOs
{
    public class BusinessDto
    {
        public string Name { get; set; } = null!;
        public double Rating { get; set; }
        public string Address { get; set; } = null!;
        public double Distance { get; set; }
        public List<string> Categories { get; set; } = null!;
    }
}
