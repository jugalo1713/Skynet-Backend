using Microsoft.AspNetCore.Mvc;
using Umbraco.Cms.Web.Common.Controllers;

namespace umbraco14Test.controllers
{
    [ApiController]
    [Route("[controller]/[action]")]
    public class TestController : UmbracoApiController
    {
        public string GetText()
        {
            return "Hola si entra";
        }
    }
}
