
//import { WechatyBuilder } from 'wechaty'
const { WechatyBuilder } = require('wechaty');
const { openDefaultBrowser ,citylist} = require('./utils');

const wechaty = WechatyBuilder.build({
    name: 'kris-autoreply-puppet'
}) // get a Wechaty instance
wechaty
  .on('scan', (qrcode, status) => {
    let url = `https://wechaty.js.org/qrcode/${encodeURIComponent(qrcode)}`
    console.log(`打开链接扫码登录: ${status}\n${url}`)
    openDefaultBrowser(url)
  })
  .on('login',            user => console.log(`User ${user} logged in`))
  .on('message',       message => {
    console.log(`收到Message: ${message}`); 
    citylist.map(item=>{
      if(message.text() === item.title){
        message.say('1')
      }
    })
  })
wechaty.start()