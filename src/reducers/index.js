import { combineReducers } from 'redux';
import BooksReducer from './reduscer_books'

const rootReducer = combineReducers({
  books: BooksReducer
});

export default rootReducer;
