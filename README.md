# weixin-sharelink  
[![Build Status](https://img.shields.io/npm/l/weixin-sharelink)](https://www.npmjs.com/package/weixin-sharelink)
[![Build Status](https://img.shields.io/npm/v/weixin-sharelink)](https://www.npmjs.com/package/weixin-sharelink)
[![Build Status](https://img.shields.io/npm/dm/weixin-sharelink)](https://www.npmjs.com/package/weixin-sharelink)

An ez access to wechat share.

Best for frontend and backend isolation env in enterprises or orgnizations wechat development.  

You need a centre service handling tasks: secret key store, access token keep and renew, signature computed and so on.  
> The service could be designed as an open api so that `Access-Control-Allow-Origin`, `Access-Control-Allow-Headers`, `Access-Control-Allow-Methods` might be set for CORS. Consequencely, access control strategies should be added.  
 
微信分享朋友，朋友圈，轻松便捷！  
适用于前后分离的企业或者组织团体。  
需后端中控服务配合。  
中控服务需完成保存密钥，维护 token，生成签名等功能。
> 中控服务可以设计成开放 API。需要添加相关的 CORS 与 访问策略。

## notice
+ The first param is share function param.
+ The second is centre control service param. Here it should be sent by `axios` after `querystring` handled. That means `content-type` is `application/x-www-form-urlencoded`.
+ **Optional** third param. If set `'json'`, `axios` acts defaultly. `content-type` is `application/json`.

## tips
[Wechat official API doc](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK)

## useage
install  
`npm i -S weixin-sharelink`  

for commonjs and ts  
```
new WeixinShareLink(
    // share function param
    {
        debug: true,
        title: "",
        desc: "",
        link: "",
        imgUrl: ""
    },
    // centre control service param
    {
        url: "<centre service url>",
        params: <centre servic post params>
    }
    // optional param, if your centre control service require json data
    // 'json'
)
```

## link
Looking for centre service?  

[Weixin sdk js centre service](https://github.com/wind2esg/weixin-service)