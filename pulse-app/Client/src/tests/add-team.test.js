import React from 'react'
import { shallow } from 'enzyme'
import AddTeam from './../components/add-team'

describe('<AddTeam />', () => {
    it('Renders without crashing', () => {
        shallow(<AddTeam />);
    })
});