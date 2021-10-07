import React, { Component } from 'react';
import propTypes from 'prop-types'
import {connect} from 'react-redux'
import {createSelector} from 'reselect'
import {
    filterData,
    updateFilterStatus,
} from '@/actions/reselect';

 const filterStatusMap = {
     1: 'FILTER_ALL_DATA',
     2: 'FILTER_SUCCESS_STATUS',
     3: 'FILTER_FAIL_STATUS',
 }

 const getReselectList = (state) => state.reSelectReducer.reSelectList
 const getFilterStatus = (state) => state.reSelectReducer.filterStatus

 const filterReslectData = createSelector(
     [getReselectList,getFilterStatus],
     (list ,filter) => filterData(list,filter)
 )

@connnect(
    (state) => ({
        filterList:filterReselectData(state),
    }),
    (dispatch) => ({
        updateFilterStatus: (params) => display(updateFilterStatus(params)),
    })
)

export default class ReselectDemo  extends Component {
    handleUpdate = (signal) => {
        const {updataFilterStatus} = this.props
        updateFilterStatus(filterStatusMap[signal])
    }
    render() { 
        const {filterList} = this.props
        return (
        <div>
            <>
                {filterList.map(item => (
                    <div key={item.key}>
                        <span>{item.name}</span>
                        &nbsp;&nbsp;
                        <span>{String(item.status)}</span>
                    </div>
                ))}
            </>
            <button type="button" onClick={() => this.handleUpdate(1)}></button>
        </div>
        );
    }
}
 
export default ReselectDemo;