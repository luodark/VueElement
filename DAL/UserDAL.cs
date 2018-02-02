using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Model;

namespace DAL
{
    /// <summary>
    /// 用户数据访问类
    /// </summary>
    public class UserDal
    {
        /// <summary>
        /// 获取所有用户信息
        /// </summary>
        /// <returns>所有用户列表</returns>
        public static List<LoginUser> GetUserList()
        {
            var userList = new List<LoginUser>
            {
                new LoginUser
                {
                    UserName = "admin",
                    Password = "123456",
                    RealName = "管理员",
                    Mobile = "18888888888"
                }
            };
            for (var i = 0; i < 995; i++)
            {
                userList.Add(new LoginUser
                {
                    UserName = "UserName"+i,
                    Password = "Password" + i,
                    RealName = "RealName" + i,
                    Mobile = "Mobile" + i
                });
            }
            return userList;
        }
    }
}
