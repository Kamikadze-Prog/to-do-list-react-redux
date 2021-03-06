import React from 'react';
import {connect, useDispatch} from "react-redux";
import {StateType} from "../ItemList/ItemList";
import {setVisibilityFilter} from "../../actions/actions";
import './filterButton.scss';
import '../Ripple/ripple.scss'
import cx from 'classnames';

type LinkType = {
    active: boolean;
    filter: string;
    children: string;
}

function FilterButton(props: LinkType) {
    const dispatch = useDispatch()
    const {active, filter, children} = props;
    return (
        <button
            className={cx('btn-ripple', {
                "active": active
            })}
            onClick={() => {
                dispatch(setVisibilityFilter(filter))
            }}
            disabled={active}>
            {children}
        </button>
    );
}

const mapStateToProps = (state: StateType, ownProps: { filter: string }) => ({
    active: ownProps.filter === state.visibilityFilter
});

export default connect(mapStateToProps)(FilterButton);
