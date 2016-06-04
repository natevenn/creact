var Skill = React.createClass({
    getInitialState() {
        return { editable: false }
    },

    onUpdate(){
        if(this.state.editable) {
            var skill = {id: this.props.skill.id,
                         name: this.props.skill.name,
                         details: this.props.skill.details,
                         level: this.props.skill.level }

            this.props.handleUpdate(skill)
        }
        this.setState({ editable: !this.state.editable })
    },

    onUpdateLevel(action) {
        if(this.levelCanBeChanged(action)){
            var level = this.getNewLevel(action);
            var skill = {id: this.props.skill.id, level: level};

            this.props.handleUpdate(skill);
        }
    },

    levelCanBeChanged(action) {
        let levels  = ['bad', 'halfbad', 'fantastic'];
        let index   = levels.indexOf(this.props.skill.level);

        return action === 'up' && index < 2 || action === 'down' && index > 0;
    },

    getNewLevel(action) {
        var levels = ['bad', 'halfbad', 'fantastic'];
        var level = levels.indexOf(this.props.skill.level);
        var change = action === 'up' ? 1 : -1;

         return action ? levels[level + change] : this.props.skill.level;
    },


    render() {
        var name = this.state.editable ? <input type='text' ref='name' defaultValue={this.props.skill.name} />
                : <h3>{this.props.skill.name}</h3>

        var details = this.state.editable ? <textarea type='text' ref='details' defaultValue={this.props.skill.details}></textarea>
                : <p>{this.props.skill.details}</p>

        return(
            <div>
                {name}

                <div className='skill-level'>
                    <button type="button"
                        onClick={this.onUpdateLevel.bind(this, 'down')}
                        className="btn btn-default btn-sm">
                        <span className="glyphicon glyphicon-triangle-bottom"></span>
                    </button>

                    <p><strong>Level:</strong> {this.props.skill.level}</p>

                    <button type="button" className="btn btn-default btn-sm"
                          onClick={this.onUpdateLevel.bind(this, 'up')}>
                        <span className="glyphicon glyphicon-triangle-top"></span>
                    </button>
                </div>

                {details}

                <button onClick={this.props.handleDelete}>
                    Delete
                </button>

                <button onClick={this.onUpdate}>{this.state.editable ? 'Submit' : 'Edit'}</button>
            </div>
        )
    }
});
































//var Skill = React.createClass({
  //getInitialState() {
    //return { editable: false }
  //},

  //onUpdate() {
    //if (this.state.editable) {
      //let skill   = { id: this.props.skill.id,
                      //name: this.refs.name.value,
                      //details: this.refs.details.value }

      //this.props.handleUpdate(skill);
    //}

    //this.setState({ editable: !this.state.editable })
  //},

  //onUpdateLevel(action) {
    //if (this.canChangeLevel(action)) {
      //let level = this.getNewLevel(action)
      //let skill = {id: this.props.skill.id, level: level }

      //this.props.handleUpdate(skill);
    //}
  //},

  //canChangeLevel(action) {
    //let levels  = ['bad', 'halfbad', 'fantastic'];
    //let index   = levels.indexOf(this.props.skill.level);

    //return action === 'up' && index < 2 ||  action === 'down' && index > 0;
  //},

  //getNewLevel(action) {
    //let levels = ['bad', 'halfbad', 'fantastic'];
    //let level  = levels.indexOf(this.props.skill.level);
    //let change = action === 'up' ? 1 : - 1;

    //return action ? levels[level + change] : this.props.skill.level;
  //},

  //render() {
    //var name = this.state.editable ? <input type='text'
                                            //ref='name'
                                            //defaultValue={this.props.skill.name} />
                                   //: <h3>{this.props.skill.name}</h3>

    //let details = this.state.editable ? <textarea type='text'
                                                  //ref='details'
                                                  //defaultValue={this.props.skill.details}>
                                        //</textarea>
                                      //: <p>{this.props.skill.details}</p>
    //return (
      //<div>
        //{name}

        //<div className='skill-level'>
          //<button type="button"
                  //className="btn btn-default btn-sm"
                  //onClick={this.onUpdateLevel.bind(this, 'down')}>
            //<span className="glyphicon glyphicon-triangle-bottom"></span>
          //</button>

            //<p><strong>Level:</strong> {this.props.skill.level}</p>

          //<button type="button"
                  //className="btn btn-default btn-sm"
                  //onClick={this.onUpdateLevel.bind(this, 'up')}>
            //<span className="glyphicon glyphicon-triangle-top"></span>
          //</button>
        //</div>

        //{details}

        //<button onClick={this.props.handleDelete}>
          //Delete
        //</button>

        //<button onClick={this.onUpdate}>{this.state.editable ? 'Submit' : 'Edit' }</button>
      //</div>
    //)
  //}
//});
