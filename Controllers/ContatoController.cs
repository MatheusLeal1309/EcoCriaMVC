using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using EcocriaMVC.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;

namespace EcocriaMVC.Controllers
{
    public class ContatoController : Controller
    {
        public string uriBase = "http://www.ecocria.somee.com/EcoCria/Contato";

        [HttpPost]
        public async Task<IActionResult> EnviarAsync(ContatoViewModel contato)
        {
            try
            {
                using (HttpClient httpClient = new HttpClient())
                {
                    string uriComplementar = "EnviarAsync";

                    var content = new StringContent(JsonConvert.SerializeObject(contato));
                    content.Headers.ContentType = new MediaTypeHeaderValue("application/json");
                    HttpResponseMessage response = await httpClient.PostAsync(uriBase + uriComplementar, content);

                    string serialized = await response.Content.ReadAsStringAsync();
                    
                    if (response.IsSuccessStatusCode)
                    {
                        // Retornar sucesso com a resposta da API
                        return Ok(serialized);
                    }
                    else
                    {
                        // Retornar erro com a mensagem da resposta
                        return BadRequest(serialized);
                    }
                }
            }
            catch (System.Exception ex)
            {
                return BadRequest (ex.Message);
            }
        }
    }
}