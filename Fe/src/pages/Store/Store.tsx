import React from 'react';
import './Store.module.scss';

export interface StoreProps {}

export interface StoreDataType {}

const Store: React.FC<StoreProps> = (props) => (
  <div className="com-store">Store component</div>
);

export default Store;