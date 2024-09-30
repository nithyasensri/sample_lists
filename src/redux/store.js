
import {createStore} from 'redux'
import {rootreducers} from './rootreducer'

export const store = createStore(rootreducers);