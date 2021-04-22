const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', async () =>{
    console.log("봇이 준비되었습니다.")
    client.user.setActivity("시간표를 알려줍니다!")
    
})

client.on('message', msg=>{
    if(msg.content === "월"){
    msg.reply(" (1교시:사회) (2교시:국어) (3교시:수학) (4교시:체육) (5~7교시:컴시) ")
    }

    if(msg.content === "화"){
        msg.reply(" (1교시:수학) (2교시:프로) (3교시:프로) (4교시:프로) (5교시:국어) (6교시:과학) (7교시:음악) ")
    }

    if(msg.content === "수"){
        msg.reply(" (1~3교시:응프) (4교시:국어) (5교시:사회) (6교시:수학) (7교시:영어) ")
    }
    
    if(msg.content === "목"){
        msg.reply(" (1교시:과학) (2교시:수학) (3교시:미술) (4교시:컴시) (5교시:응프) (6교시:진로) (7교시:영어) ")
    }

    if(msg.content === "금"){
        msg.reply(" (1교시:체육) (2교시:음악) (3교시:국어) (4교시:자율) (5~6교시:창체) ")
    }

    if(msg.content === "시간"){
        msg.reply(" (조례: 8:10 ~ 8:20) (1교시: 8:30 ~ 9:15) (2교시: 9:25 ~ 10:10) (3교시: 10:20 ~ 11:05) (4교시: 11:15 ~ 12:00) (점심시간: 12:00 ~ 13:20) (5교시: 13:20 ~ 14:05) (6교시: 14:15 ~ 15:00) (7교시: 15:10 ~ 15:55) (종례: 15:55~ ) ")
    }

    if(msg.content === "박준환"){
        msg.channel.bulkDelete(1)
    }
})

client.login('ODM0NjAzMzU4NzEwOTIzMjc2.YIDS8g.1G3djloADfbaFIHTa_Tw7pt_ODs')
