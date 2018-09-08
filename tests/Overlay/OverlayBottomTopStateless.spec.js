import React from 'react';
import { shallow } from 'enzyme';
import OverlayBottomTopStateless from '../../src/components/Overlay/OverlayBottomTopStateless';

const props = {
    isVisible: false,
    onCloseClicked: () => {}

};

describe('<OverlayBottomTopStateless/>', () => {
    it('should have class `.overlayBottomTop` sections ', () => {
        props.isVisible = true;
        const wrapper = shallow(<OverlayBottomTopStateless {...props} />);
        expect(wrapper.find('.overlayBottomTop')).toHaveLength(1);
    });

    it('should call close function ', () => {
        props.isVisible = true;
         const wrapper = shallow(<OverlayBottomTopStateless {...props} />);
         const firstChild = wrapper.find('.closeButtonStyle');
         firstChild.simulate('click', {
            preventDefault: () => {
            }
           });

         expect(firstChild).toHaveLength(1);
     });
});
