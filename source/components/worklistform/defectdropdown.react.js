const React = require('react');

var style = {
    display: 'block',
    maxHeight: 400,
    overflow: 'auto'
};

var DefectDropdown = React.createClass({
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
    onDropdownClick: function(arg, e){
        console.log('defectdropdown clicked');
    },
    createList: function(){
        console.log('createlist');
        var list=[];
        return list;
    },
    render: function(){
        var list = this.createList();
        return( 
               <ul  className="dropdown-menu" 
                    style={style}
                    onMouseDown={this.onMouseDown}
                    onMouseUp={this.onMouseUp}>
                    <li><a href="#"><div className="checkbox"><label style={{width: '100%'}}><input type="checkbox" aria-label="..."/>01 - Pres Pc</label></div></a> </li>
                    <li><a href="#"><div className="checkbox"><label style={{width: '100%'}}><input type="checkbox" aria-label="..."/>01 - Pres Pc</label></div></a> </li>
                    <li><a href="#"><div className="checkbox"><label style={{width: '100%'}}><input type="checkbox" aria-label="..."/>01 - Pres Pc</label></div></a> </li>
                    <li><a href="#"><div className="checkbox"><label style={{width: '100%'}}><input type="checkbox" aria-label="..."/>01 - Pres Pc</label></div></a> </li>
                    <li><a href="#"><div className="checkbox"><label style={{width: '100%'}}><input type="checkbox" aria-label="..."/>01 - Pres Pc</label></div></a> </li>
                    <li><a href="#"><div className="checkbox"><label style={{width: '100%'}}><input type="checkbox" aria-label="..."/>01 - Pres Pc</label></div></a> </li>
                    <li><a href="#"><div className="checkbox"><label style={{width: '100%'}}><input type="checkbox" aria-label="..."/>01 - Pres Pc</label></div></a> </li>
                    <li><a href="#"><div className="checkbox"><label style={{width: '100%'}}><input type="checkbox" aria-label="..."/>01 - Pres Pc</label></div></a> </li>
                    <li><a href="#"><div className="checkbox"><label style={{width: '100%'}}><input type="checkbox" aria-label="..."/>01 - Pres Pc</label></div></a> </li>
                    <li><a href="#"><div className="checkbox"><label style={{width: '100%'}}><input type="checkbox" aria-label="..."/>01 - Pres Pc</label></div></a> </li>
                    <li><a href="#"><div className="checkbox"><label style={{width: '100%'}}><input type="checkbox" aria-label="..."/>01 - Pres Pc</label></div></a> </li>
                    <li><a href="#"><div className="checkbox"><label style={{width: '100%'}}><input type="checkbox" aria-label="..."/>01 - Pres Pc</label></div></a> </li>
                    <li><a href="#"><div className="checkbox"><label style={{width: '100%'}}><input type="checkbox" aria-label="..."/>01 - Pres Pc</label></div></a> </li>
                    <li><a href="#"><div className="checkbox"><label style={{width: '100%'}}><input type="checkbox" aria-label="..."/>01 - Pres Pc</label></div></a> </li>
                    {list.map(function(element, index, array){
                        return element;
                    })}
                </ul>
               );
    }
});

module.exports = DefectDropdown;