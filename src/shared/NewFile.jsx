import React, { useState } from 'react';
import './tree.css';

// define the data structure for each tree node


// sample data for the tree
const treeData = {
  id: 1,
  name: 'Root Node',
  children: [
    {
      id: 2,
      name: 'Child Node 1',
      children: [
        {
          id: 4,
          name: 'Child Node 1.1',
        },
        {
          id: 5,
          name: 'Child Node 1.2',
        },
      ],
    },
    {
      id: 3,
      name: 'Child Node 2',
    },
  ],
};

// define a recursive Tree component to render the nodes and their children
const Tree = ({ node }) => {
  const [isOpen, setIsOpen] = useState(false);

  // toggle the open/closed state of a node when it is clicked
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  // render a node and its children (if any)
  return (
    <div className="tree-node">
      <div className="tree-node-header" onClick={handleClick}>
        {node.name}
        {node.children && (
          <span className={`toggle-icon ${isOpen ? 'open' : 'closed'}`}></span>
        )}
      </div>
      {node.children && isOpen && (
        <div className="tree-node-children">
          {node.children.map((child) => (
            <Tree key={child.id} node={child} />
          ))}
        </div>
      )}
    </div>
  );
};

// define a TreeContainer component to wrap the Tree component and pass in the initial data
const TreeContainer = () => {
  return (
    <div className="tree-container">
      <Tree node={treeData} />
    </div>
  );
};

export default TreeContainer;
