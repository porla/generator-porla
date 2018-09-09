const { Porla } = require('@porla/porla');

const app = new Porla({
    savePath: './'
});

app.subscribe('torrent.added', [
    (torrent) => console.log(torrent.name, 'finished'),
    // TODO: Add your own actions
]);

app.monitor('/home/<user>/Downloads');
