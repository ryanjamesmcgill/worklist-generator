const React = require('react');
const Cell = require('fixed-data-table').Cell;
const StepStore = require('../stores/StepStore');

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
    onDropdownClick: function(processStep, e){
        var scanStep = e.currentTarget.id;
        console.log('dropdown clicked- process:',processStep,' scan:',scanStep);
        
        this.props.hideDropdown();
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
    createList: function(){
        console.log('createlist');
        var list=[];
        StepStore.WorklistStepsMap(
            function(stepObj, index, array){
                if(stepObj.scanstep){
                    var item = <li onClick={this.onDropdownClick.bind(null, this.props.ownerStepSeq)} 
                                    id={stepObj.stepseq} 
                                    key={index}>
                                    <a href='#'>{stepObj.stepseq}</a>
                                </li>;
                    list.push(item);
                }
            }.bind(this));
        list.push(<li key={StepStore.getWorklistLength()+1} role="separator" className="divider"></li>);
        list.push(<li key={StepStore.getWorklistLength()+2}><a href="#">Add step...</a></li>);
        return list;
    },
    render: function(){
        var value = this.props.value;
        var list = this.createList();
        var style = {
            display: 'block',
            position: 'absolute',
            top: this.props.y,
            left: this.props.x-20,
            maxHeight: 200,
            overflow: 'auto'
        }
        return( 
               <ul  className="dropdown-menu" 
                    style={style}
                    onMouseDown={this.onMouseDown}
                    onMouseUp={this.onMouseUp}>
                    {list.map(function(element, index, array){
                        return element;
                    })}
                </ul>
               );
    }
});

module.exports = WorklistTableDropdownSelection;