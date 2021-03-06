import makeStore from './src/store';
import { startServer } from './src/server';

export const store = makeStore();
startServer(store);

story.dispatch({
	type: 'SET_ENTRIES',
	entries: require('./entries.json')
});
store.dispatch({type: 'NEXT'});
