import React, {Component} from 'react';

class Toolbar extends Component {
  render() {

    let selectButtonClass = "fa-square-o";

    let messagesSelected = this.props.messages.filter(message => message.selected);

    if (messagesSelected.length === this.props.messages.length) {
      selectButtonClass = "fa-check-square-o";
    } else if (messagesSelected[0]) {
      selectButtonClass = "fa-minus-square-o";
    }

    let countedUnread = this.props.messages.filter(msg => !msg.read).length;

    let countedSelected = this.props.messages.reduce((acc, val) => + !!val.selected, 0)
    console.log('countedSelected', countedSelected);


    return (
      <div className="row toolbar">
        <div className="col-md-12">
        <p className="pull-right">
          <span className="badge badge">{countedUnread}</span>
          {countedUnread > 1 || countedUnread <1 ? 'unread messages' : 'unread message'}
        </p>

        <button
          className="btn btn-default"
          onClick={() => this.props.selectButtonFunc(selectButtonClass)}
          disabled={!countedSelected}
          >
          <i
            className={`fa ${selectButtonClass}`}></i>
        </button>

        <button
          className="btn btn-default"
          onClick={() => this.props.setReadFunc()}
          disabled={!countedSelected}
          >
          Mark As Read
        </button>

        <button
          className="btn btn-default"
          onClick={() => this.props.setUnreadFunc()}
          disabled={!countedSelected}
          >
          Mark As unread
        </button>

        <select
          className="form-control label-select"
          onChange={(e) => this.props.addLabel(e.target.value)}
          disabled={!countedSelected}
          >
          <option>Apply label</option>
          <option value="dev">dev</option>
          <option value="personal">personal</option>
          <option value="gschool">gschool</option>
        </select>

        <select
          className="form-control label-select"
          onChange={(e) => this.props.removeLabel(e.target.value)}
          disabled={!countedSelected}
          >
          <option>Remove label</option>
          <option value="dev">dev</option>
          <option value="personal">personal</option>
          <option value="gschool">gschool</option>
        </select>

        <button className="btn btn-default">
          <i className="fa fa-trash-o"></i>
        </button>
      </div>
    </div>)
  }
}

export default Toolbar;
