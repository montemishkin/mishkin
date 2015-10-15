/*
 * Unit tests for Root component.
 *
 */

/* common react imports */
import React from 'react/addons'
import {addons} from 'react/addons'
const TestUtils = addons.TestUtils
/* local imports */
import Root from './index'


describe('Root', function() {
    let root

    beforeEach(function() {
        root = TestUtils.renderIntoDocument(<Root />)
    })

    it('starts out contracted', function() {
        expect(root.state.expanded).to.be.false
    })

    it('toggles between expanded and contracted states', function() {
        // find the button
        let button = TestUtils.findRenderedDOMComponentWithTag(root, 'button')
        // click the button
        TestUtils.Simulate.click(button.getDOMNode())
        // should be expanded now
        expect(root.state.expanded).to.be.true
        // click the button again
        TestUtils.Simulate.click(button.getDOMNode())
        // should be contracted now
        expect(root.state.expanded).to.be.false
    })

    function testHeaderRender() {
        let header = TestUtils.findRenderedDOMComponentWithTag(
            root,
            'h1'
        )
        expect(header.props.children).to.equal('The Mishkins')
    }

    function testSubheaderRender() {
        let subheader = TestUtils.findRenderedDOMComponentWithTag(
            root,
            'h2'
        )
        expect(subheader.props.children).to.equal('More than just a family.')
    }

    describe('contracted', function() {
        it('renders the header, with proper content', testHeaderRender)

        it('renders the subheader, with proper content', testSubheaderRender)

        it('renders the "Learn More" button, with proper content', function() {
            let button = TestUtils.findRenderedDOMComponentWithTag(
                root,
                'button'
            )
            expect(button.props.children).to.equal('Learn More')
        })

        it('does not render the "more" text')
    })

    describe('expanded', function() {
        beforeEach(function() {
            // find the button
            let button = TestUtils.findRenderedDOMComponentWithTag(root, 'button')
            // click the button
            TestUtils.Simulate.click(button.getDOMNode())
        })

        it('renders the header, with proper content', testHeaderRender)

        it('renders the subheader, with proper content', testSubheaderRender)

        it('renders the "Learn Less" button, with proper content', function() {
            let button = TestUtils.findRenderedDOMComponentWithTag(
                root,
                'button'
            )
            expect(button.props.children).to.equal('Learn Less')
        })

        it('renders the "more" text, with proper content', function() {
            let more = TestUtils.findRenderedDOMComponentWithTag(
                root,
                'p'
            )
            expect(more.props.children).to.equal('The Mishkins are a family, but they are also more.')
        })
    })
})


// end of file
