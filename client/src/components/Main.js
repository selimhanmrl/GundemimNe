import React from 'react';
import Item from './Item';

export default function Main(props) {
  const { datas, onAdd, onRemove} = props;
  return (
    <div class="" >
        <main class="">
        <div class="grid  md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-7 my-10 mx-5" >
            {datas.map((data) => (
            <Item key={data._id} data={data} onAdd={onAdd} onRemove={onRemove}></Item>
            ))}
        </div>
        </main>
    </div>
  );
}
