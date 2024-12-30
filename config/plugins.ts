module.exports = ({ env }) => ({
    email: {
        config: {
            provider: 'nodemailer',
            providerOptions: {
                host: env('SMTP_HOST', 'smtp.example.com'),
                port: env('SMTP_PORT', 7465),
                secure: true,
                auth: {
                    user: env('SMTP_USERNAME'),
                    pass: env('SMTP_PASSWORD'),
                },
            },
            settings: {
                defaultFrom: env('SMTP_USERNAME'),
                defaultReplyTo: env('SMTP_USERNAME'),
            },
        },
    },
    upload: {
        config: {
            provider: 'cloudinary',
            providerOptions: {
                cloud_name: 'dbb0fump9',
                api_key: 842181162823489,
                api_secret: 'pp3nQsm5eC0SanVYX6h2jTgpt94',
            },
            actionOptions: {
                upload: {},
                delete: {},
            },
        },
    },
});