import * as Enzyme from 'enzyme'
import Adapter = require('enzyme-adapter-react-16')

Enzyme.configure({ adapter: new Adapter() })

// add some helpful assertions
import 'jest-dom/extend-expect'

// cleanup after each test
import 'react-testing-library/cleanup-after-each'

// set the test id
import { configure } from 'dom-testing-library'
configure({ testIdAttribute: 'data-cosmos-key' })
