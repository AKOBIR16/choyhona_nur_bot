const {Telegraf} = require("telegraf")
const {Markup} = require("telegraf")
const Extra = require("telegraf")
const fs = require("fs")
const dotenv = require("dotenv")
//const { button } = require("telegraf/typings/markup")
dotenv.config();
const bot = new Telegraf(process.env.Bot_token);
bot.use(Telegraf.log());
try{
bot.command("start",(ctx) => {
    ctx.reply("Xush kelibsiz "+ ctx.message.from.first_name,Markup.keyboard([
    ["🏡 Xonalar","🥘 Taomlar"],
    ["Manzil(lokatsiya)","Bog'lanish"]])
.oneTime()
.resize()
)
})}
catch(err){
    console.log(err);
}console.log(Extra)
bot.hears("🏡 Xonalar",(ctx) =>{
    ctx.reply("Xonalar bilan tanishing!",
    Markup.keyboard([["🪑 Stolli xonalar","🛏️ Karovatli xonalar"]])
    .oneTime()
    .resize()
   
    )
})
bot.hears("🥘 Taomlar",(ctx) =>{
    ctx.reply("Taomlar bilan tanishing!",
    Markup.keyboard([["🥘 Tuy oshi - 25000","🥘 Choyxona oshi"],["🍖 Tandir","🍗 Shashlik","🥘 Shurva/Mastava"],["Boshqa taom buyurtma berish"]])
    .oneTime()
    .resize()
   
    )
})
bot.hears("Bog'lanish",(ctx) =>{
    ctx.replyWithContact("+998904262004 ","Telefon orqali bog'lanish");
    ctx.replyWithHTML(`Telegram orqali boglanish : @akobir_1605`);
})
bot.hears("Manzil(lokatsiya)",(ctx) => {
    ctx.replyWithLocation(41.30228563649833, 69.1941956016641);
})
bot.hears("🪑 Stolli xonalar",(ctx) =>{
    ctx.reply("Xonalar bilan tanishing!",
    Markup.keyboard([["7-xona(20-kishilik)","10-xona(20-kishilik)"],
    ["5-xona(8-kishilik)","6-xona(12-kishilik)"]
])
    .oneTime()
    .resize()
    )})
bot.hears("🛏️ Karovatli xonalar",(ctx) =>{
        ctx.reply("Xonalar bilan tanishing!",
        Markup.keyboard([["1-xona(12-kishilik)","2-xona(12-kishilik)"],
        ["3-xona(12-kishilik)","4-xona(12-kishilik)"],
        ["8-xona(12-kishilik)","9-xona(12-kishilik)"]
    ])
        .oneTime()
        .resize()
        )})    
function replyRooms(listening,source,caption) {
    bot.hears(listening,(ctx) => {
      ctx.replyWithPhoto({source:source},
      {caption:caption})
      ctx.reply("Rasm yuklanayapti..",Markup.keyboard([["Buyurtma berish"],["🏡 Xonalar"],["Bosh menyuga qaytish"]]).oneTime().resize())
});
}   
function replyFoods(listening,source,caption) {
    bot.hears(listening,(ctx) => {
      ctx.replyWithPhoto({source:source},
      {caption:caption})
      ctx.reply("Rasm yuklanayapti..",Markup.keyboard([["Buyurtma berish"],["🥘 Taomlar"],["Bosh menyuga qaytish"]]).oneTime().resize())
});
}  
replyFoods("🥘 Tuy oshi - 25000","media/Tuy_oshi.jpg",`Iftorlik - 18:00 dan
Saharlik - 23:00 dan
1kg osh - 25000
qazi-4000 ,  bedana tuxum - 1000 , Tovuq tuxum-2000`)
replyFoods("🥘 Choyxona oshi","media/Tuy_oshi.jpg","Choyhona osh 1kg - 130000");
replyFoods("🍖 Tandir","media/Tandir.jpg",`Qo'y tandir 1kg - 130000
Tovuq tandir - 36000`);
replyFoods("🍗 Shashlik","media/Shashlik.jpg",`Jaz - 12000
Qiyma - 10000
Jigar - 9000`);
replyFoods("🥘 Shurva/Mastava","media/Shashlik.jpg",`Shurva - 16000
Mastava - 14000`);
replyRooms("7-xona(20-kishilik)","media/xona-7.jpg","Kishilaroyhona osh 1kg - 130000 soni - 20, narxi - 150000");
replyRooms("10-xona(20-kishilik)","media/xona-7.jpg","Kishilar soni - 20, narxi - 150000");
replyRooms("6-xona(12-kishilik)","media/xona-7.jpg","Kishilar soni - 12, narxi - 140000");
replyRooms("5-xona(8-kishilik)","media/xona-7.jpg","Kishilar soni - 8, narxi - 130000");
replyRooms("1-xona(12-kishilik)","media/xona-2.jpg","Kishilar soni - 12, narxi - 120000");
replyRooms("1-xona(12-kishilik)","media/xona-2.jpg","Kishilar soni - 12, narxi - 120000");
replyRooms("2-xona(12-kishilik)","media/xona-2.jpg","Kishilar soni - 12, narxi - 120000");
replyRooms("3-xona(12-kishilik)","media/xona-2.jpg","Kishilar soni - 12, narxi - 120000");
replyRooms("4-xona(12-kishilik)","media/xona-2.jpg","Kishilar soni - 12, narxi - 120000");
replyRooms("8-xona(12-kishilik)","media/xona-2.jpg","Kishilar soni - 12, narxi - 120000");
replyRooms("9-xona(12-kishilik)","media/xona-2.jpg","Kishilar soni - 12, narxi - 120000");
bot.hears("Buyurtma berish",(ctx) =>{
    ctx.replyWithContact("+998904262004 ","Telefon orqali bog'lanish");
    ctx.replyWithHTML(`Telegram orqali boglanish : @akobir_1605`,Markup.keyboard([["Bosh menyuga qaytish"]]));
})

bot.hears("Boshqa taom buyurtma berish",(ctx) =>{
    ctx.replyWithContact("+998904262004 ","Telefon orqali bog'lanish");
    ctx.replyWithHTML(`Telegram orqali boglanish : @akobir_1605`,Markup.keyboard([["Bosh menyuga qaytish"]]));
})
bot.hears("Bosh menyuga qaytish", (ctx) =>{
        ctx.reply("Xush kelibsiz "+ ctx.message.from.first_name,Markup.keyboard([
        ["🏡 Xonalar","🥘 Taomlar"],
        ["Manzil(lokatsiya)","Bog'lanish"]])
    .oneTime()
    .resize()
    )
})

bot.launch()