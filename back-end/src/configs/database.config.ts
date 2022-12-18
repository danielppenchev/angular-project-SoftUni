import { connect, ConnectOptions } from 'mongoose';

export const dbConnect = () => {
    connect('mongodb://localhost:27017/onlineShop', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    } as ConnectOptions).then(
        () => console.log('Connection is successful!'),
        (error) => console.log(error)
    )
}