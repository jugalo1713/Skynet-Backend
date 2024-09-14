namespace umbraco14Test.Models
{
    public class MessagesModel
    {
        public List<Message> Messages { get; set; }
    }
    public class Message
    {
        public string? Role { get; set; }
        public string? Content { get; set; }
        public DateTime? Timestamp { get; set; }
    }
}
