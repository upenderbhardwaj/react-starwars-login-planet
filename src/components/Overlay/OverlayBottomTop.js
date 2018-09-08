import React from 'react';
import PropTypes from 'prop-types';
import OverlayBottomTopStateless from './OverlayBottomTopStateless';
import './styles.css';

const isOpening = (s1, s2) => !s1.isVisible && s2.isVisible;
const isClosing = (s1, s2) => s1.isVisible && !s2.isVisible;

export default class OverlayBottomTop extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isVisible: false };
  }

  componentWillUpdate(nextProps, nextState) {
    if (isOpening(this.state, nextState) && this.props.beforeOpen) {
      this.props.beforeOpen();
    }

    if (isClosing(this.state, nextState) && this.props.beforeClose) {
      this.props.beforeClose();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (isOpening(prevState, this.state) && this.props.afterOpen) {
      this.props.afterOpen();
    }

    if (isClosing(prevState, this.state) && this.props.afterClose) {
      this.props.afterClose();
    }
  }

  show() {
    window.scrollTo(0,0);
    this.setState({ isVisible: true });
    this.props.changeOverlayStatus(false);
    }

  hide() {
    window.scrollTo(0,0);
    this.setState({ isVisible: false });
    this.props.changeOverlayStatus(true);
  }


  render() {
    return (<OverlayBottomTopStateless
      {...this.props}
      isVisible={this.state.isVisible}
      onCloseClicked={() => this.hide()}
      ref={(ch) => this.overlayStateless = ch}
    />);
  }
}

OverlayBottomTop.displayName = 'OverlayBottomTop';

OverlayBottomTop.propTypes = {
  ...OverlayBottomTopStateless.sharedPropTypes,
  afterClose: PropTypes.func,
  afterOpen: PropTypes.func,
  beforeClose: PropTypes.func,
  beforeOpen: PropTypes.func,
  hideOnOverlayClicked: PropTypes.bool,
  changeOverlayStatus: PropTypes.func
};

OverlayBottomTop.defaultProps = {
  ...OverlayBottomTopStateless.defaultProps,
  hideOnOverlayClicked: false,
  changeOverlayStatus:()=>{}
};
