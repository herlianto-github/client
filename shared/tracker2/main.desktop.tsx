// Entry point for the tracker render window
import {waitOnKB2Loaded} from '../util/electron.desktop'
waitOnKB2Loaded(() => require('./main2.desktop'))
