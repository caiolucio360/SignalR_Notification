using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;

namespace SignalR_Notificatrion
{
    public class NotificationHub : Hub
    {

        //Para mandar mensagens do client para 1 ou mais usuarios
        public async Task SendNotification(int userId, int message)
        {
            await Clients.User(userId.ToString()).SendAsync("ReceiveNotification", message);
        }
        public async Task SendNotificationByUser(int message)
        {
            await Clients.All.SendAsync("ReceiveNotification", message);
        }       
    }
}