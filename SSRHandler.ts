


/**
 * 
 * @param ctx 
 * @param htmlContent 
 * @returns 
 */
export const htmlHandler = async (ctx: any, htmlContent: string) => {


    const metaData = {
        title: 'This is my title ',
        meta_description: 'meta description',
        meta_keywords: 'meta keywords',
    }

    let updatedContent: string = htmlContent.replace(`<title></title>`, `<title>${metaData.title}</title>`)
    updatedContent = updatedContent.replace('<meta>keyword</meta>', `<meta name="keyword" content="${metaData.meta_keywords}"></meta>`);
    updatedContent = updatedContent.replace('<meta>description</meta>', `<meta name="description" content="${metaData.meta_description}"></meta>`);

//     <meta property="og:title" content="How to Become an SEO Expert (8 Steps)" />
// <meta property="og:description" content="Get from SEO newbie to SEO pro in 8 simple steps." />
// <meta property="og:image" content="https://ahrefs.com/blog/wp-content/uploads/2019/12/fb-how-to-become-an-seo-expert.png" />
    
    updatedContent = updatedContent.replace('</head>', `<meta property="og:title" content="How to Become an SEO Expert (8 Steps)" />\n</head>`)
    updatedContent = updatedContent.replace('</head>', `<meta property="og:description" content="Get from SEO newbie to SEO pro in 8 simple steps." />\n</head>`)
    updatedContent = updatedContent.replace('</head>', `<meta property="og:image" content="https://ahrefs.com/blog/wp-content/uploads/2019/12/fb-how-to-become-an-seo-expert.png" />\n</head>`)
    return updatedContent;
    
}