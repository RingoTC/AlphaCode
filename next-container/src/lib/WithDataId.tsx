import React from 'react';

let currentId = 0;

const addDataId = (element) => {
  if (!React.isValidElement(element)) {
    return element;
  }

  currentId++;

  if (element.props.children) {
    console.log('element.props.children', React.cloneElement(element, { 'data-id': currentId }, React.Children.map(element.props.children, addDataId)));
    return React.cloneElement(element, { 'data-id': currentId }, React.Children.map(element.props.children, addDataId));
  } else {
    console.log('element', React.cloneElement(element, { 'data-id': currentId }));
    return React.cloneElement(element, { 'data-id': currentId });
  }
};

const WithDataId = (Component) => (props) => {
  currentId = 0; // 重置ID计数器
  return addDataId(<Component {...props} />);
};

export default WithDataId;
