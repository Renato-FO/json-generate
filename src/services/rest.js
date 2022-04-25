const api = require('./api')

const getData = async () => {
    try {
        const { data } = await api.get('timezone')
        console.log(data)
        return data
    } catch (error) {
        console.error(error.message)
    }
}
