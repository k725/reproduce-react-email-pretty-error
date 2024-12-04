const { render } = require('@react-email/render');
const { NotionMagicLinkEmail } = require('./emails/notion-magic-link');

(async () => {
    console.log(
        await render(
            NotionMagicLinkEmail({ loginCode: '' }),
            { pretty: false },
        )
    );
})();
