import { connect } from "react-redux"
import { Fragment, useEffect, useState } from 'react'
import {motion} from 'framer-motion'
import {refresh,check_authenticated,load_user,logout,} from '../redux/actions/auth/auth'

function Layout({
    children,
    refresh,
    check_authenticated,
    load_user,
    user_loading,
    isAuthenticated,
    user,
    logout

}){

    useEffect(()=>{
        refresh()
        check_authenticated()
        load_user()
    },[])

    return(
        <motion.div
        initial={{opacity: 0, transition: {duration: 0.5}}}
        animate={{opacity: 1}}
        exit={{opacity: 0, transition: {duration: 0.5}}}
        >
            
            {children}
        </motion.div>
    )
}

const mapStateToProps = state =>({
    user_loading: state.auth.user_loading,
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user,
})

export default connect(mapStateToProps,{
    refresh,
    check_authenticated,
    load_user,
    logout
}) (Layout)