import Express from 'express';
import GraphHTTP from 'express-graphql';
import Schema from './schema';

// Config
const APP_POST = 3000;

const app = Express();

app.use('/graphql', GraphHTTP({
	schema: Schema,
	rootValue: {test: 'test rootValue'},
	pretty: true,
	graphiql: true
}));

app.listen(APP_POST, () => {
	console.log(`App listening on port ${APP_POST}`);
});
