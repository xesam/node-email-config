# node-email-config

基于 [nodemailer](https://github.com/nodemailer/nodemailer) 的 QQ邮箱、腾讯企业邮箱、Outlook 的 POP 配置。

## Outlook

[如何开启 Outlook 的 POP 支持](https://support.microsoft.com/en-us/office/pop-imap-and-smtp-settings-for-outlook-com-d088b986-291d-42b8-9564-9c414e2aa040)

```shell
node ./outlook.js node outlook.js {email} {email password}
```

## QQ 邮箱
[如何打开QQ邮箱的POP3/SMTP/IMAP功能？](https://service.mail.qq.com/cgi-bin/help?subtype=1&&no=166&&id=28)

通用配置如下：

1. 接收邮件服务器：pop.qq.com，使用SSL，端口号995
2. 发送邮件服务器：smtp.qq.com，使用SSL，端口号465或587

注意，QQ 邮箱的 auth.pass 使用的是授权码，而不是邮箱密码。
[授权码管理](https://service.mail.qq.com/cgi-bin/help?subtype=1&&id=10000&&no=1001607)

```shell
node ./outlook.js node qq.mail.js {email} {Authorization Code}
```

## 腾讯企业邮箱

[如何设置IMAP、POP3/SMTP及其SSL加密方式？](https://open.work.weixin.qq.com/help?person_id=0&doc_id=423&helpType=exmail)

注意，腾讯企业邮箱的 auth.pass 默认使用的是登录密码，不过如果开启了安全登陆，则需要换成客户端专用密码。

```shell
node ./outlook.js node qq.exmail.js {email} {email password}
```
