using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using OpenAI.Chat;
using System.Text.RegularExpressions;
using System.Xml.Linq;
using Umbraco.Cms.Api.Management.Controllers;
using Umbraco.Cms.Api.Management.Routing;
using Umbraco.Cms.Core.Models;
using Umbraco.Cms.Core.Security;
using Umbraco.Cms.Core.Services;
using Umbraco.Cms.Web.Common.Authorization;
using Umbraco.Cms.Web.Common.Controllers;
using Umbraco.Cms.Web.Common.Filters;
using Umbraco.Cms.Web.Common.PublishedModels;
using umbraco14Test.Models;
using umbraco14Test.Services;


namespace umbraco14Test.controllers
{
    [VersionedApiBackOfficeRoute("chatbot")]
	public class ChatbotController : ManagementApiControllerBase
	{
        private readonly IConfiguration _configuration;
        private readonly IChatGptService _gptService;
        private readonly IContentService _contentService;
		private readonly IContentTypeService _contentTypeService;
		private readonly IBackOfficeSecurity _iBackOfficeSecurity;




		public ChatbotController(IConfiguration configuration, IChatGptService gptService, IContentService contentService, IContentTypeService contentTypeService, IBackOfficeSecurity  backOfficeSecurity)
        {
            _configuration = configuration;
            _gptService = gptService;
            _contentService = contentService;
            _contentTypeService = contentTypeService;
            _iBackOfficeSecurity = backOfficeSecurity;
        }

        [HttpPost]
        public async Task<string> Chat([FromBody] MessagesModel messageList)
        {
            try
            {
                //1-Separar del response chatgpt las propiedades
                //2-Crear el contenido programaticamente
                //3 revisar la URL 


                var client = await _gptService.CreateClient();

                List<ChatMessage> messagesParsed = new();
                //ChatCompletionOptions options = new ChatCompletionOptions();
                //options.MaxTokens = 150;
                //options.Temperature = 0.5f;
                //options
                
                messagesParsed.AddRange(_gptService.ParseMessages(messageList).ToList());

                ChatCompletion completion = client.CompleteChat(messagesParsed);
                var completinResponse = completion.ToString();


                string pattern = @"<pagerequested>.*<\/pagerequested>";
                Match match = Regex.Match(completinResponse, pattern);

                if (match.Success)
                {
                    //var testUser = _iBackOfficeSecurity.CurrentUser;

					// Extracted XML portion
					string xmlString = match.Value;

                    // Now parse the extracted XML
                    XElement root = XElement.Parse(xmlString);
                    string pageTitle = root.Element("pagetitle")?.Value;
                    completinResponse = pageTitle;

					var contentType = _contentTypeService.Get("contentAi");
					var parentId = Guid.Parse("ca4249ed-2b23-4337-b522-63cabe5587d1");

                    // Create a new child item of type 'Product'
                    var newPage = _contentService.Create(pageTitle, parentId, contentType.Alias);

					

					// Set the value of the property with alias 'price'
					newPage.SetValue("contentTitle", pageTitle + " test");

					// Save and publish the child item
					var contentCreated = _contentService.Save(newPage);
                }


                return completinResponse;
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }
    }
}
