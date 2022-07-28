import React from "react";
{/*managig state use for store the data locally ie why we using this in react*/}  

class CartItem extends React.Component{
    constructor(){
        super();{/* if you extends any componet then you need to call super for call the parent constructor otherwise the show error */}  
        this.state={
            price:99,
            title:'phone',
            qty:1,
            img:''
        }
        // this.increaseQuantity=this.increaseQuantity.bind(this);
    }
    increaseQuantity=()=>{
        // this.state.qty+=1;
        // console.log('this',this.state);
        //setState form 1
        // this.setState({
        //     qty:this.state.qty+1
        // } ,()=> {});
        // setState from2 -if the prevState required use this
        this.setState((prevState)=>{
            return{
                qty:prevState.qty+1
            }
            },() =>{
                console.log('this.state',this.state)
            
        });
    }
    handleClick = () => {
        this.setState(
            prevState => {
                return {
                number: prevState.number + 2
                };
            }
        );
        this.setState(
            prevState => {
                return {
                number: prevState.number + 3
                };
            }
        );
    };
    decreaseQuantity = () =>{
        const{qty}=this.state;
        if(qty===0){
            return;
        }
        // setState from2 -if the prevState required use this
        this.setState((prevState)=>{
            return{
                qty:prevState.qty-1
            }
        });
    } 
    
    render () {
        const{price,title,qty}=this.state; {/*don't awnt again and again write this.state.title  that's why we create object destructing staright forward we get the all the state this*/}
        return(
            <div className="cart-item">
            <div className="left-block">
            <img style={styles.image}/>
            </div>
            <div className="right-block">
            <div style={{fontSize:25}}>{title}</div>
            <div style={{color:'#777'}}>Rs {price}</div>
            <div style={{fontSize:25}}>Qty: {qty}</div>
            <div className="cart-item-actions">
                {/*Buttons */}  
                <img alt="increase" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/992/992651.png" onClick={this.handleClick}/>
                <img alt="decrease" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/1828/1828906.png" onClick={this.decreaseQuantity}/> 
                <img alt="delete" className="action-icons" src="https://cdn-icons.flaticon.com/png/512/3405/premium/3405244.png?token=exp=1658860898~hmac=971842dc0fb031f1076c793c19bea188"/>           
            </div>
            </div>
            </div>
        );
    }
}

const styles={
    image:{
        height:10,
        width:110,
        borderRadius:4,
        background:'#ccc'
    }
}

export default CartItem;