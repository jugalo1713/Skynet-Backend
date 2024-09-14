using OpenAI.Chat;
using umbraco14Test.Models;

namespace umbraco14Test.Services
{
    public interface IChatGptService
    {
        Task<ChatClient> CreateClient();
        IEnumerable<ChatMessage> ParseMessages(MessagesModel messageList);
    }
}
