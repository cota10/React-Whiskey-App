import React from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { chooseName, choosePrice, chooseType } from '../../redux/slices/RootSlices';
import { Input } from '../SharedComponents/Input';
import { Button } from '@material-ui/core';
import { server_calls } from '../../api';

interface WhiskeyFormProps {
    id?: string;
    data?: {}
};

interface WhiskeyState {
    name: string;
    price: string;
    type_of_whiskey: string;
    
}

export const WhiskeyForm = (props:WhiskeyFormProps) => {

    const dispatch = useDispatch();
    const store = useStore();
    const name = useSelector<WhiskeyState>(state => state.name);
    const {register, handleSubmit} = useForm({ })

    const onSubmit = (data:any, event:any) => {
        console.log(props.id)
        if(props.id!){
            server_calls.update(props.id!, data);
            console.log(`Updated: ${data} ${props.id}`);
            console.log(data);
            setTimeout( () => {window.location.reload()}, 1000)
            event.target.reset();
        } else {
            dispatch(chooseName(data.name));
            dispatch(choosePrice(data.price));
            dispatch(chooseType(data.type_of_whiskey));
            
            server_calls.create(store.getState());
            setTimeout( () => {window.location.reload()}, 1000) 
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name">Whiskey Name</label>
                    <Input {...register('name')} name="name" placeholder='Name' />
                </div>
                <div>
                    <label htmlFor="price">Price</label>
                    <Input {...register('price')} name="price" placeholder='Price' />
                </div>
                <div>
                    <label htmlFor="type_of_whiskey">Type of Whiskey</label>
                    <Input {...register('type_of_whiskey')} name="type_of_whiskey" placeholder='Type of Whiskey' />
                </div>
                <Button type="submit">Submit</Button>
            </form>
        </div>
    )
}