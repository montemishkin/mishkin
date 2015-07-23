/*
 * Unit tests for Root component.
 *
 */

/* common react imports */
import React from 'react/addons'
import {addons} from 'react/addons'
const TestUtils = addons.TestUtils
/* common chai imports */
import chai from 'chai'
const expect = chai.expect
/* local imports */
import Root from './index'


describe('Root', function() {
    let root


    beforeEach(function() {
        root = TestUtils.renderIntoDocument(<Root />)
    })


    it('renders first two <p> tags with appropriate content', function() {
        let ps = TestUtils.scryRenderedDOMComponentsWithTag(
            root,
            'p'
        )

        // first two (exactly two) <p> tags are rendered
        expect(ps).to.have.length(2)
        // first <p> tag has appropriate content
        expect(ps[0].props.children).to.equal("Don't mess with")
        // second <p> tag has appropriate content
        expect(ps[1].props.children).to.equal("The Mishkins.")
    })


    it('renders <button> with appropriate content', function() {
        let button = TestUtils.findRenderedDOMComponentWithTag(
            root,
            'button'
        )

        // button has appropriate text content
        expect(button.props.children).to.equal('Learn More')
    })


    it('removes the <button> and adds the third <p> when clicked', function() {
        let button_node = TestUtils.findRenderedDOMComponentWithTag(
            root,
            'button'
        ).getDOMNode()

        TestUtils.Simulate.click(button_node)

        // expect there to not be a button
        expect(() => TestUtils.findRenderedDOMComponentWithTag(root, 'button'))
            .to.throw(Error, 'Did not find exactly one match for tag:button')

        let ps = TestUtils.scryRenderedDOMComponentsWithTag(
            root,
            'p'
        )

        // now (exactly) three <p> tags are rendered
        expect(ps).to.have.length(3)
        // first <p> tag still has appropriate content
        expect(ps[0].props.children).to.equal("Don't mess with")
        // second <p> tag still has appropriate content
        expect(ps[1].props.children).to.equal("The Mishkins.")
        // third <p> tag now has appropriate content
        expect(ps[2].props.children).to.equal("Seriously.")
    })
})


// end of file
