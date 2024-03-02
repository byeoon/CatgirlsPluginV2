import { Plugin, registerPlugin } from 'enmity/managers/plugins';
import { ApplicationCommandInputType, ApplicationCommandOptionType, ApplicationCommandType, Command } from "enmity/api/commands";
import { REST } from "enmity/modules/common";
import { Image } from "enmity/components";
import { create } from 'enmity/patcher';
import manifest from '../manifest.json';
import { sendReply } from "enmity/api/clyde";

const nekos_life_img_types = [
   "tickle",
   "slap",
   "poke",
   "pat",
   "neko",
   "meow",
   "lizard",
   "kiss",
   "hug",
   "fox_girl",
   "feed",
   "cuddle",
   "ngif",
   "kemonomimi",
   "holo",
   "smug",
   "baka",
   "woof",
   "wallpaper",
   "goose",
   "gecg",
   "avatar",
   "waifu"
 ];

 const catboys_img_types = [
  "img",
  "baka"
];
 
 async function getImageSize(file: string): Promise<any> {
   return new Promise(
     (resolve, reject) => {
       Image.getSize(file, (width: number, height: number) => {
         resolve({ width, height });
       }, (error) => {
         reject(error);
       });
     },
   );
 }

const Patcher = create('CatgirlsPlugin');
   const CatgirlsPlugin: Plugin = {
      ...manifest,
      name: "Catgirls",
      commands: [],
    
      onStart() {
        const catgirls_command: Command = {
          id: "catgirls-command",
    
          name: "nekos",
          displayName: "nekos",
    
          description: "Sends an image from the nekos.life API.",
          displayDescription: "Sends an image from the nekos.life API.",
    
          type: ApplicationCommandType.Chat,
          inputType: ApplicationCommandInputType.BuiltInText,
    
          options: [
            {
              name: "type",
              displayName: "type",
    
              description: "Image type",
              displayDescription: "Image type",
    
              type: ApplicationCommandOptionType.String,
              required: true,
              choices: nekos_life_img_types.map((x) => ({
                name: x,
                displayName: x,
                value: x,
              })),
            },
          ],
    
          execute: async function (args, message) {
            const text = args[0].value;
            const whisper = args[1]?.value ?? true;
            const resp = await REST.get(`https://nekos.life/api/v2/img/${text}`);
            if (resp.ok) {
              if (whisper) {
                const { width, height } = await getImageSize(resp.body["url"]);
                const embed = {
                  type: "rich",
                  title: `random ${text} image`,
                  image: {
                    proxy_url: `https://external-content.duckduckgo.com/iu/?u=${resp.body["url"]
                      }`,
                    url: resp.body["url"],
                    width: width,
                    height: height,
                  },
                  footer: {
                    text: "nekos.life",
                  },
                  color: "0x00007d",
                };
                const component = {
                  type: 1,
                  components: [{
                    type: 2,
                    style: 5,
                    label: "View image",
                    url: resp.body["url"],
                  }],
                };
                sendReply(message?.channel.id ?? "0",
                  {
                    embeds: [embed],
                    components: [component],
                  },
                  "nekos.life",
                  "https://github.com/Nekos-life.png",
                );
              } else {
                return {
                  content: resp.body["url"],
                };
              }
            } else {
              sendReply(message?.channel.id ?? "0", `An error happened making a request to https://nekos.life/api/v2/img/${text}`,
              );
            }
          },
        };



/*
        const catboys_command: Command = {
          id: "catboys-command",
    
          name: "catboys",
          displayName: "catboys",
    
          description: "Sends an image from the catboys.com API.",
          displayDescription: "Sends an image from the catboys API.",
    
          type: ApplicationCommandType.Chat,
          inputType: ApplicationCommandInputType.BuiltInText,
    
          options: [
            {
              name: "type",
              displayName: "type",
    
              description: "Image type",
              displayDescription: "Image type",
    
              type: ApplicationCommandOptionType.String,
              required: true,
              choices: catboys_img_types.map((x) => ({
                name: x,
                displayName: x,
                value: x,
              })),
            },
          ],
    
          execute: async function (args, message) {
            const text = args[0].value;
            const whisper = args[1]?.value ?? true;
            const resp = await REST.get(`https://api.catboys.com/${text}`);
            if (resp.ok) {
              if (whisper) {
                const { width, height } = await getImageSize(resp.body["url"]);
                const embed = {
                  type: "rich",
                  title: text === "img" ? 'random image' : `random ${text} image`,
                  image: {
                    proxy_url: `https://external-content.duckduckgo.com/iu/?u=${resp.body["url"]
                      }`,
                    url: resp.body["url"],
                    width: width,
                    height: height,
                  },
                  footer: {
                    text: "catboys.com",
                  },
                  color: "0x00007d",
                }
                if (text === "img" && resp.body['artist'] !== "unknown") {
                  Object.assign(embed, {
                    fields: [
                      {
                        inline: true,
                        name: "Artist",
                        value: `[${resp.body['artist']}](${resp.body['artist_url']})`
                      } 
                    ]
                  });
                };
                const component = {
                  type: 1,
                  components: [{
                    type: 2,
                    style: 5,
                    label: "View image",
                    url: resp.body["url"],
                  }],
                };
                sendReply(message?.channel.id ?? "0",
                  {
                    embeds: [embed],
                    components: [component],
                  },
                  "catboys.com",
                  "https://github.com/Catboys-Dev.png",
                );
              } else {
                return {
                  content: resp.body["url"],
                };
              }
            } else {
              sendReply(message?.channel.id ?? "0", `An error happened making a request to https://api.catboys.com/${text}`,
              );
            }
          },
        };
        */
    
        this.commands.push(catgirls_command);
    //    this.commands.push(catboys_command);
      },

   onStop() {
      Patcher.unpatchAll();
      this.commands = [];
   },
};

registerPlugin(CatgirlsPlugin);
