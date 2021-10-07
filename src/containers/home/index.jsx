import React,{Component} from 'react'
import {connect} from 'react-redux'
import {
    updateName,
} from '@/actions/home'

@connect((state) => state.homeReducer)
export default class Home extends Component{
    render(){
        return (
            <div>
                React Redux Demo
            </div>
        )
    }
}