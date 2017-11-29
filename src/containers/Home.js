import React, {
  Component,
} from 'react'
import PropTypes from 'prop-types'
import {
  connect,
} from 'react-redux'

import AppBar from '../components/Drawer'
import UserCard from '../components/UserCard'

import Button from 'material-ui/Button'
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

class Home extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    console.log('pros: ', this.props.dispatch)
  }

  render() {
    return (
      <div >
        <AppBar>
          <Grid container spacing={0} justify="center">
            <Grid item xs={12} sm={6}>
              <Paper >
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
              </Paper>
            </Grid>
          </Grid>

        </AppBar>
      </div>
    )
  }
}

Home.propTypes = {
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)