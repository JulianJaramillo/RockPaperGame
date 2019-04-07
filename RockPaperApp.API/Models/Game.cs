namespace RockPaperApp.API.Models
{
    public class Game
    {
        public int Id { get; set; }
        public string NamePlayer { get; set; }
        public int WonGames { get; set; }
        public int LostGames { get; set; }
    }
}