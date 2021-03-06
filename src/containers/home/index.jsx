import React,{Component} from 'react'
import {connect} from 'react-redux'
import {
    updateName,
} from '@/actions/home'
import PropTypes from 'prop-types'

@connect((state) => {
    console.log(state)
    return state.homeReducer
} ,(dispatch) => ({
    updateName:(params) => dispatch(updateName(params)),
}))

@connect((state) => state.homeReducer)
export default class Home extends Component{
    updateName = () => {
        const {updateName} = this.props
        updateName('修改云课堂')
    }
    render(){
        console.log(this.props)
        return (
            <div>
                {this.props.homeName}
                <button type="button" onClick={this.updateName}>修改</button>
            </div>
        )
    }
}

Home.propTypes = {
    homename: PropTypes.string, 
    updateName: PropTypes.func,
    queryAsyncName: Proptypes.func,
    asyncUpdateName: PropTypes.func
}

Home.defaultProps = {
    homename: '',
    updateName: () => ({}),
    queryAsyncName: () => ({}),
    asyncUpdateName: ()=> ({})
}