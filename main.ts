import { staticPlugin } from '@elysiajs/static';
import { app } from "./config/app";
import { UserModule } from "./modules/user";
import { htmlHandler } from './SSRHandler';

new UserModule();


const staticOptions = {
    assets: "./public", // Path to your static asset folder (default: "public")
    prefix: "/public",  // URL prefix for static files (default: "/public")
};

// app.use(staticPlugin(staticOptions));

const htmlFile = Bun.file('./public/index.html');
const htmlString = await htmlFile.text();

/**
 * 
 * @param path 
 * @returns 
 */
const readFile = async (path: string) => {
    const htmlFile = Bun.file(path);
    const htmlString = await htmlFile.text();
    return htmlString;
}

app.get('*', async (ctx) => {
    
    console.log(ctx.path);

    if (ctx.path.endsWith('.js') || ctx.path.endsWith('.css') || ctx.path.endsWith('.jpeg') || ctx.path.endsWith('.webp') || ctx.path.endsWith('.ico') || ctx.path.endsWith('.xml') || ctx.path.endsWith('.png') || ctx.path.endsWith('.manifest') || ctx.path.endsWith('.webmanifest') || ctx.path.endsWith('.svg')) {
        return new Response(Bun.file('.'+ctx.path));
    }

    const content = await htmlHandler(ctx, htmlString);
    return new Response(content, { headers: { "Content-type" : "text/html" }});
});

/**
 * Apps boot
 */
app.listen(process.env.PORT || 8000, async () => {
    console.log(`Application running on port ${process.env.PORT || 8000}`);
});

