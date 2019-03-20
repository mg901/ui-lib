import React from 'react';

export type ButtonProps = {
  children?: React.ReactNode;
  onClick?: (e: {}) => void;
};

export const styles = {
  border: '1px solid #eee',
  borderRadius: 3,
  backgroundColor: '#FFFFFF',
  cursor: 'pointer',
  fontSize: 15,
  padding: '3px 10px',
  margin: 10,
};

export const Button: React.SFC<ButtonProps> = ({
  onClick,
  children,
}): JSX.Element => (
  <button type="button" style={styles} onClick={onClick}>
    {children}
  </button>
);
