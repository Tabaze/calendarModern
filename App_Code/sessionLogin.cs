using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for sessionLogin
/// </summary>
public class sessionLogin
{

    public Boolean connectSession()
    {
        if (HttpContext.Current.Request.Cookies["loginEtude"] != null)
        {
            if (HttpContext.Current.Request.Cookies["loginEtude"]["logged"] == "yes")
            {
                DataAccessLayer dal = new DataAccessLayer();
                dal.Connect();
                DataTable dt = dal.SelectData("select * from s_Users where idUser=" + HttpContext.Current.Request.Cookies["loginEtude"]["id"]);
                dal.Disconnect();
                if (dt.Rows.Count > 0)
                {
                    string tokenLogin = dt.Rows[0]["tokenLogin"].ToString();
                    string tokenCookies = HttpContext.Current.Request.Cookies["loginEtude"]["token"];
                    if (tokenCookies == tokenLogin)
                    {
                        return true;
                        //HttpContext.Current.Response.Redirect("dossier.aspx");
                    }
                    else
                    {
                        return false;
                    }
                }
                else
                {
                    return false;
                }
            }
            else
            {
                return false;
            }
        }
        else
        {
            return false;

        }

    }
    public void deconnexionSession()
    {
        HttpContext.Current.Response.Cookies["loginEtude"]["logged"] = null;
        HttpContext.Current.Response.Cookies["loginEtude"]["nomUser"] = null;
        HttpContext.Current.Response.Cookies["loginEtude"]["admin"] = null;
        HttpContext.Current.Response.Cookies["loginEtude"]["email"] = null;
        HttpContext.Current.Response.Cookies["loginEtude"]["id"] = null;
        HttpContext.Current.Response.Cookies["loginEtude"]["idgrp"] = null;
        HttpContext.Current.Response.Cookies["loginEtude"]["photo"] = null;
        HttpContext.Current.Response.Cookies["loginEtude"]["token"] = null;
        HttpContext.Current.Response.Cookies["loginEtude"].Expires = DateTime.Now.AddDays(-1);
        HttpContext.Current.Response.Redirect("Default.aspx");

    }
    public int  getIdUser()
    {
        int idUser =Convert.ToInt32(HttpContext.Current.Request.Cookies["loginEtude"]["id"]);
        return idUser;
    }
    public int getIdgrp()
    {
        int idgrp = Convert.ToInt32(HttpContext.Current.Request.Cookies["loginEtude"]["idgrp"]);
        return idgrp;
    }
}