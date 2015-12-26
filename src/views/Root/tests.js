// third party imports
import React from 'react'
import TestUtils from 'react-addons-test-utils'
// local imports
import Root from './index'


describe('Root', function () {
    // to be set in `beforeEach`
    let root
    let button


    beforeEach(function () {
        root = TestUtils.renderIntoDocument(<Root />)
        button = TestUtils.findRenderedDOMComponentWithTag(root, 'button')
    })


    it('starts out contracted', function () {
        expect(root.state.isExpanded).to.be.false
    })


    it('toggles between expanded and contracted states', function () {
        // click the button
        TestUtils.Simulate.click(button)
        // should be expanded now
        expect(root.state.isExpanded).to.be.true
        // click the button again
        TestUtils.Simulate.click(button)
        // should be contracted now
        expect(root.state.isExpanded).to.be.false
    })


    function testHeaderRender() {
        const header = TestUtils.findRenderedDOMComponentWithTag(root, 'h1')

        expect(header.innerHTML).to.equal('The Mishkins')
    }


    function testSubheaderRender() {
        const subheader = TestUtils.scryRenderedDOMComponentsWithTag(root, 'p')[0]

        expect(subheader.innerHTML).to.equal('More than just a family.')
    }


    describe('contracted', function () {
        it('renders the header, with proper content', testHeaderRender)
        it('renders the subheader, with proper content', testSubheaderRender)


        it('renders the button, with proper content', function () {
            expect(button.innerHTML).to.equal('Learn More')
        })


        it('does not render the additional text', function () {
            const more = TestUtils.scryRenderedDOMComponentsWithTag(root, 'p')[1]

            expect(more.style.opacity).to.equal('0')
        })
    })


    describe('expanded', function () {
        beforeEach(function () {
            // click the button
            TestUtils.Simulate.click(button)
        })


        it('renders the header, with proper content', testHeaderRender)
        it('renders the subheader, with proper content', testSubheaderRender)


        it('renders the button, with proper content', function () {
            expect(button.innerHTML).to.equal('Learn Less')
        })


        it('renders the additional text, with proper content', function () {
            const more = TestUtils.scryRenderedDOMComponentsWithTag(root, 'p')[1]

            expect(more.style.opacity).to.equal('1')
            expect(more.innerHTML).to.equal(
                'The Mishkins are a family, but they are also more.'
            )
        })
    })
})


// end of file
