# weixin-sharelink  
[![Build Status](https://img.shields.io/npm/l/weixin-sharelink)](https://www.npmjs.com/package/weixin-sharelink)
[![Build Status](https://img.shields.io/npm/v/weixin-sharelink)](https://www.npmjs.com/package/weixin-sharelink)
[![Build Status](https://img.shields.io/npm/dm/weixin-sharelink)](https://www.npmjs.com/package/weixin-sharelink)

An ez access to wechat share.

Best for frontend and backend isolation env in enterprises or orgnizations wechat development.  

You need a centre service handling tasks: secret key store, access token keep and renew, signature computed and so on.

微信分享朋友，朋友圈，轻松便捷！  
适用于前后分离的企业或者组织团体。  
需后端中控服务配合。  
中控服务需完成保存密钥，维护 token，生成签名等功能。

## tips
[Wechat official API doc](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK)

## useage
install  
`npm i -S weixin-sharelink`  

for commonjs and ts  
```
new WeixinShareLink(
    {
        debug: true,
        title: "",
        desc: "",
        link: "",
        imgUrl: ""
    },
    {
        url: "<centre service url>",
        params: <centre servic post params>
    }
)
```

## link
Looking for centre service?  

[Weixin sdk js centre service](https://github.com/wind2esg/weixin-service)