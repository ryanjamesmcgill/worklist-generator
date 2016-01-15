const React = require('react');
const Cell = require('fixed-data-table').Cell;

var WorklistTableDropdownSelection = React.createClass({
    getInitialState: function(){
        return {
            mouseIsDownOnElement: false
        };
    },
    componentDidMount: function () {
        window.addEventListener('mousedown', this.onPageClick, false);
    },
    componentWillUnmount: function(){
		window.removeEventListener('mousedown', this.onPageClick, false);
	},
    onPageClick: function(){
       if(this.state.mouseIsDownOnElement){
           return;
       } else {
           this.props.hideDropdown();
       }
    },
    onDropdownClick: function(){
        console.log('dropdown clicked');
    },
    onMouseDown: function(e){
        this.setState({
            mouseIsDownOnElement: true
        });
    },
    onMouseUp: function(e){
        this.setState({
            mouseIsDownOnElement: false
        });
    },
    render: function(){
        var value = this.props.value;
        return( 
               <ul  className="dropdown-menu" 
                    style={{display: 'block', position: 'absolute', top: this.props.y, left: this.props.x}}
                    onMouseDown={this.onMouseDown}
                    onMouseUp={this.onMouseUp}>
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li role="separator" className="divider"></li>
                    <li><a href="#">Separated link</a></li>
                </ul>
               );
    }
});

module.exports = WorklistTableDropdownSelection;