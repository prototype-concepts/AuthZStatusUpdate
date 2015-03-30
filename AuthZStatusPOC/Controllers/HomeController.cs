using AuthZStatusPOC.Hubs;
using Microsoft.AspNet.SignalR;
using System;
using System.Web.Mvc;

namespace AuthZStatusPOC.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult NotifyStatus(string orderStatus)
        {
            var hub = GlobalHost.ConnectionManager.GetHubContext<NotificationHub>();
            hub.Clients.All.addNewNotification(String.Format("{0} -({1})", orderStatus, DateTime.Now) );
            return View();
        }
    }
}
