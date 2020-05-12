const ghpages = require('gh-pages');

ghpages.publish(
    '__sapper__/export',
    {
        branch: 'master',
        repo: 'https://github.com/nickheal/pair-programmer.git',
        user: {
            name: 'nickheal',
            email: 'nick3_4@hotmail.com'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
);
