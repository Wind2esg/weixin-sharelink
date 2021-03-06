/**
 * Wechat share link to friends or timeline
 * 
 * @author wind2esg
 * @date 20191015
 * 
 * ez access to wechat share with wechat js sdk centre service
 */

import wx from 'weixin-sdk-js';
import axios from 'axios';
import querystring from 'querystring';

export interface WechatServiceParams{
  url: string;
  params: any;
}

interface WechatShareParams{
  debug?: boolean;
  title: string; 
  desc: string; 
  link?: string;
  imgUrl: string; 
}

export class WeixinShareLink{
  constructor(wechatShareParams: WechatShareParams, wechatServiceParams: WechatServiceParams, axiosDefault?: string){
    let params = (axiosDefault && axiosDefault === 'json')? wechatServiceParams.params : querystring.stringify(wechatServiceParams.params);
    axios.post(
        wechatServiceParams.url,
        params
        ).then((response)=>{
          console.log(wx);
          let wxconfig = response.data;
          wx.config({
            debug: wechatShareParams.debug ? wechatShareParams.debug : false,
            appId: wxconfig["appId"],
            timestamp: wxconfig["timestamp"],
            nonceStr: wxconfig["nonceStr"],
            signature: wxconfig["signature"],
            jsApiList: [
              'updateAppMessageShareData', 
              'updateTimelineShareData' 
            ]
          });
    
          wx.ready(()=>{
            wx.updateTimelineShareData({
              title: wechatShareParams.title,
              link: wechatShareParams.link ? wechatShareParams.link : window.location.href,
              imgUrl: wechatShareParams.imgUrl
            });
    
            wx.updateAppMessageShareData({
              title: wechatShareParams.title,
              desc: wechatShareParams.desc,
              link: wechatShareParams.link ? wechatShareParams.link : window.location.href,
              imgUrl: wechatShareParams.imgUrl
            });
          });
        }
      );
  }
}
