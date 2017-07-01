// fix node land
import 'babel-polyfill'
// local imports
import server from './server'


if (process.env.NODE_ENV === 'production') {
    server.listen('/home/mishkin/mdv/mishkin.sock')
} else {
    // interpret first arg from command line as port number
    const portArg = parseInt(process.argv[2], 10)
    // port to listen on
    const port = isValidPort(portArg) ? portArg : 8000

    /* eslint-disable no-console */
    // listen on given port
    server.listen(port,
        () => console.log(`[${new Date()}] Now listening on port: ${port}`)
    )
    /* eslint-enable no-console */
}


function isValidPort(p) {
    return p > 0 && p <= 65535
}
